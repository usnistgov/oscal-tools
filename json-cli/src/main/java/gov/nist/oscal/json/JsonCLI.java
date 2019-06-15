/**
 * Portions of this software was developed by employees of the National Institute
 * of Standards and Technology (NIST), an agency of the Federal Government.
 * Pursuant to title 17 United States Code Section 105, works of NIST employees are
 * not subject to copyright protection in the United States and are considered to
 * be in the public domain. Permission to freely use, copy, modify, and distribute
 * this software and its documentation without fee is hereby granted, provided that
 * this notice and disclaimer of warranty appears in all copies.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS' WITHOUT ANY WARRANTY OF ANY KIND, EITHER
 * EXPRESSED, IMPLIED, OR STATUTORY, INCLUDING, BUT NOT LIMITED TO, ANY WARRANTY
 * THAT THE SOFTWARE WILL CONFORM TO SPECIFICATIONS, ANY IMPLIED WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND FREEDOM FROM
 * INFRINGEMENT, AND ANY WARRANTY THAT THE DOCUMENTATION WILL CONFORM TO THE
 * SOFTWARE, OR ANY WARRANTY THAT THE SOFTWARE WILL BE ERROR FREE. IN NO EVENT
 * SHALL NIST BE LIABLE FOR ANY DAMAGES, INCLUDING, BUT NOT LIMITED TO, DIRECT,
 * INDIRECT, SPECIAL OR CONSEQUENTIAL DAMAGES, ARISING OUT OF, RESULTING FROM, OR
 * IN ANY WAY CONNECTED WITH THIS SOFTWARE, WHETHER OR NOT BASED UPON WARRANTY,
 * CONTRACT, TORT, OR OTHERWISE, WHETHER OR NOT INJURY WAS SUSTAINED BY PERSONS OR
 * PROPERTY OR OTHERWISE, AND WHETHER OR NOT LOSS WAS SUSTAINED FROM, OR AROSE OUT
 * OF THE RESULTS OF, OR USE OF, THE SOFTWARE OR SERVICES PROVIDED HEREUNDER.
 */
package gov.nist.oscal.json;

import org.apache.commons.cli.CommandLine;
import org.apache.commons.cli.CommandLineParser;
import org.apache.commons.cli.DefaultParser;
import org.apache.commons.cli.HelpFormatter;
import org.apache.commons.cli.Option;
import org.apache.commons.cli.Options;
import org.apache.commons.cli.ParseException;
import org.everit.json.schema.Schema;
import org.everit.json.schema.ValidationException;
import org.everit.json.schema.loader.SchemaLoader;
import org.json.JSONException;
import org.json.JSONObject;
import org.json.JSONTokener;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class JsonCLI {
  public static void main(String[] args) throws IOException {
    CommandLineParser parser = new DefaultParser();
    Options options = getOptions();
    CommandLine cmd = null;
    boolean help = false;
    int exitCode = 0;
    try {
      cmd = parser.parse(options, args);
      if (cmd.hasOption("h")) {
        help = true;
      }
    } catch (ParseException ex) {
      System.err.println("error: " + ex.getMessage());
      help = true;
      exitCode = 1;
    }

    if (help) {
      HelpFormatter formatter = new HelpFormatter();
      formatter.printHelp("json-validate", options);
      System.exit(exitCode);
    }

    Schema schema;
    {
      String schemaFilePath = cmd.getOptionValue('s');
      File schemaFile = new File(schemaFilePath);
      JSONObject schemaObject = newJSONObject(schemaFile);

      schema = SchemaLoader.builder().draftV7Support().schemaJson(schemaObject).build().load().build();
    }

    JSONObject jsonObject;
    {
      String jsonFilePath = cmd.getOptionValue('v');
      File jsonFile = new File(jsonFilePath);
      jsonObject = newJSONObject(jsonFile);
    }

    try {
      schema.validate(jsonObject);
      System.out.println("Content is valid.");
    } catch (ValidationException e) {
      System.out.println(e.getMessage());
      e.getCausingExceptions().stream().map(ValidationException::getMessage).forEach(System.out::println);
      exitCode = 1;
    }
    System.exit(exitCode);
  }

  private static JSONObject newJSONObject(File file) throws JSONException, FileNotFoundException {
    return new JSONObject(new JSONTokener(new BufferedReader(new FileReader(file))));
  }

  private static Options getOptions() {
    Options options = new Options();

    options.addOption(Option.builder("h").desc("display the options").longOpt("help").build());
    options.addOption(
        Option.builder("s").hasArg(true).argName("file").desc("the schema to validate with").required().build());
    options.addOption(Option.builder("v").hasArg(true).argName("file").desc("the file to validate").required().build());
    return options;
  }
}
