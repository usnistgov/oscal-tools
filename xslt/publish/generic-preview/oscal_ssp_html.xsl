<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="3.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:xs="http://www.w3.org/2001/XMLSchema"
                xmlns="http://www.w3.org/1999/xhtml"
                xpath-default-namespace="http://csrc.nist.gov/ns/oscal/1.0"
                exclude-result-prefixes="#all">

<!-- SSP rendering not ready yet ... this XSLT includes many no-op templates
     marked 'mode="asleep"' - also has not been updated to latest models (M3) -->
   
   <xsl:import href="oscal_catalog_html.xsl"/>
   
   <xsl:template match="/" expand-text="true">
      <html>
         <head>
            <title>{ /descendant::title[1]/normalize-space(.) }</title>
            <xsl:call-template name="css"/>
         </head>
         <body>
            <xsl:apply-templates/>
         </body>
      </html>
   </xsl:template>
   
   <!--
   
   responsible-party/@role-id
   responsible-role/@role-id
   inventory-item/@asset-id
   implemented-component/@component-id
   by-component/@component-id
   implemented-requirement/@control-id
   statement/@statement-id
   set-param/@param-id
   
   -->
   
   <!--role-id asset-id component-id control-id statement-id param-id-->
   
   <xsl:template name="css">
      <link rel="stylesheet" href="css/oscal-ssp_html.css"/>
   </xsl:template>

   <xsl:template match="system-security-plan">
      <main class="system-security-plan">
         <xsl:apply-templates select="metadata/title"/>
         <xsl:apply-templates/>
      </main>
   </xsl:template>

   <xsl:template match="import-profile">
      <p class="import-profile">
         <xsl:apply-templates mode="decorate-inline" select="."/>
         <xsl:apply-templates select="@href"/>
      </p>
   </xsl:template>

   <xsl:template match="import-profile/@href" expand-text="true">
      <a href="{.}" class="import">{ . }</a>
   </xsl:template>
   
   <xsl:template match="import-profile" mode="decorate-inline">
      <span class="lbl">Profile import</span>
   </xsl:template>
      
   <xsl:template match="system-characteristics | system-implementation | control-implementation">
      <div class="{local-name()}">
         <xsl:copy-of select="@id"/>
         <details>
            <summary>
               <xsl:apply-templates select="." mode="section-header"/>
            </summary>
            <xsl:apply-templates/>
         </details>
      </div>
   </xsl:template>

   <xsl:template match="system-id">
      <p class="system-id">
         <xsl:apply-templates mode="decorate-inline" select="."/>
         <xsl:apply-templates/>
      </p>
   </xsl:template>
   
   <xsl:template mode="decorate-inline" match="system-id">
      <span class="lbl">System ID</span>
   </xsl:template>
   
   <xsl:template match="system-name">
      <p class="system-name">
         <xsl:apply-templates mode="decorate-inline" select="."/>
         <xsl:apply-templates/>
      </p>
   </xsl:template>
   
   <xsl:template mode="decorate-inline" match="system-name">
      <span class="lbl">System name</span>
   </xsl:template>
   
   <xsl:template match="description[empty(*)]"/>
   
   
   <xsl:template match="system-information">
      <div class="system-information">
         <h4>System Information</h4>
         <xsl:apply-templates/>
      </div>
   </xsl:template>

   <xsl:template match="security-sensitivity-level">
      <p class="security-sensitivity-level">
         <xsl:apply-templates mode="decorate-inline" select="."/>
         <xsl:apply-templates/>
      </p>
   </xsl:template>
   
   <xsl:template mode="decorate-inline" match="security-sensitivity-level">
      <span class="lbl">Security sensitivity level</span>
   </xsl:template>
   
   
   <!--<xsl:template match="system-information">
      <div class="system-information">
         <xsl:apply-templates/>
      </div>
   </xsl:template>-->
   
   <xsl:template match="information-type">
      <div class="information-type">
         <p>
            <xsl:apply-templates mode="decorate-inline" select="."/>
            <xsl:text expand-text="true">: { @name }</xsl:text>
         </p>
         <xsl:apply-templates/>
      </div>
   </xsl:template>
   
   <xsl:template mode="decorate-inline" match="information-type" expand-text="true">
      <span class="lbl">Information type</span>
   </xsl:template>
   
   
   <xsl:template match="confidentiality-impact | integrity-impact | availability-impact">
      <div class="impact">
         <p class="impact-header">
            <xsl:apply-templates mode="decorate-inline" select="."/>
         </p>
         <xsl:apply-templates/>
      </div>
   </xsl:template>

   <xsl:template mode="decorate-inline" match="confidentiality-impact">
      <span class="lbl">Impact level | Confidentiality</span>
   </xsl:template>
   
   <xsl:template mode="decorate-inline" match="integrity-impact">
      <span class="lbl">Impact level | Integrity</span>
   </xsl:template>
   
   <xsl:template mode="decorate-inline" match="availability-impact">
      <span class="lbl">Impact level | Confidentiality</span>
   </xsl:template>
   
   <xsl:template match="security-impact-level">
      <div class="impact">
         <xsl:apply-templates/>
      </div>
   </xsl:template>
   
   <xsl:template match="security-objective-confidentiality | security-objective-integrity | security-objective-availability">
      <p class="{ local-name() }">
         <xsl:apply-templates mode="decorate-inline" select="."/>
         <xsl:apply-templates/>
      </p>
   </xsl:template>
   
   <xsl:template mode="decorate-inline" match="security-objective-confidentiality">
      <span class="lbl">Security objective | Confidentiality</span>
   </xsl:template>
   
   <xsl:template mode="decorate-inline" match="security-objective-integrity">
      <span class="lbl">Security objective | Integrity</span>
   </xsl:template>
   
   <xsl:template mode="decorate-inline" match="security-objective-availability">
      <span class="lbl">Security objective | Availability</span>
   </xsl:template>
   
   <xsl:template match="authorization-boundary">
      <div class="authorization-boundary">
         <h4>Authorization boundary</h4>
         <xsl:apply-templates/>
      </div>
   </xsl:template>
   
   <xsl:template match="status">
      <div class="status">
         <p>
            <xsl:apply-templates select="." mode="decorate-inline"/>
            <xsl:for-each select="@state">
               <xsl:text>: </xsl:text>
               <xsl:value-of select="."/>
            </xsl:for-each></p>
         <xsl:apply-templates/>
      </div>
   </xsl:template>
   
   <xsl:template match="component">
      <div class="component">
         <details>
            <summary>
               <h4>Component: <xsl:value-of select="self::component/@name"/></h4>
            </summary>
            <xsl:apply-templates/>
         </details>
      </div>
   </xsl:template>
   
   <xsl:template match="system-inventory">
      <div class="system-inventory">
         <details>
            <summary>
               <h4>System inventory</h4>
            </summary>
            <xsl:apply-templates/>
         </details>
      </div>
   </xsl:template>
   
   
   <xsl:template match="base | selected | date-authorized">
      <p class="{name()}">
         <xsl:apply-templates select="." mode="decorate-inline"/>
         <xsl:apply-templates/>
      </p>
   </xsl:template>
   
   <xsl:template mode="decorate-inline" match="base | selected" expand-text="true">
      <span class="lbl2">{ local-name() }</span>
   </xsl:template>

   
   <xsl:template mode="decorate-inline" match="date-authorized">
      <span class="lbl2">date authorized:</span>
   </xsl:template>
   
   <xsl:template match="user">
      <div class="block user">
         <xsl:apply-templates/>
      </div>
   </xsl:template>
   
   <xsl:template match="user/title">
      <p class="line user-title lbl">
         <xsl:apply-templates/>
      </p>
   </xsl:template>
   
   <xsl:template match="responsible-role">
      <div class="responsibility">
         <xsl:apply-templates/>
      </div>
   </xsl:template>
   
   <xsl:template mode="section-header" match="system-characteristics">
      <h2>System Characteristics</h2>
   </xsl:template>
   
   <xsl:template mode="section-header" match="system-implementation">
      <h2>System Implementation</h2>
   </xsl:template>
   
   <xsl:template mode="section-header" match="control-implementation">
      <h2>Control Implementation</h2>
   </xsl:template>
   
   <!-- 'asleep' mode templates are placeholders; turn the template on by removing the @mode... -->
   
   <xsl:template mode="asleep" match="adjustment-justification">
      <div class="adjustment-justification">
         <xsl:apply-templates/>
      </div>
   </xsl:template>

   <xsl:template mode="asleep" match="leveraged-authorization">
      <div class="leveraged-authorization">
         <xsl:apply-templates/>
      </div>
   </xsl:template>

   <xsl:template mode="asleep" match="diagram">
      <div class="diagram">
         <xsl:apply-templates/>
      </div>
   </xsl:template>

   <xsl:template mode="asleep" match="network-architecture">
      <div class="network-architecture">
         <xsl:apply-templates/>
      </div>
   </xsl:template>

   <xsl:template mode="asleep" match="data-flow">
      <div class="data-flow">
         <xsl:apply-templates/>
      </div>
   </xsl:template>

   <xsl:template mode="asleep" match="user">
      <div class="user">
         <xsl:apply-templates/>
      </div>
   </xsl:template>

   <xsl:template mode="asleep" match="authorized-privilege">
      <div class="authorized-privilege">
         <xsl:apply-templates/>
      </div>
   </xsl:template>

   <xsl:template mode="asleep" match="service">
      <div class="service">
         <xsl:apply-templates/>
      </div>
   </xsl:template>

   <xsl:template mode="asleep" match="protocol">
      <div class="protocol">
         <xsl:apply-templates/>
      </div>
   </xsl:template>

   <xsl:template mode="asleep" match="interconnection">
      <div class="interconnection">
         <xsl:apply-templates/>
      </div>
   </xsl:template>

   <xsl:template mode="asleep" match="system-inventory">
      <div class="system-inventory">
         <xsl:apply-templates/>
      </div>
   </xsl:template>

   <xsl:template mode="asleep" match="inventory-item">
      <div class="inventory-item">
         <xsl:apply-templates/>
      </div>
   </xsl:template>

   <xsl:template mode="asleep" match="implemented-component">
      <div class="implemented-component">
         <xsl:apply-templates/>
      </div>
   </xsl:template>

   <xsl:template mode="asleep" match="implemented-requirement">
      <div class="implemented-requirement">
         <xsl:apply-templates/>
      </div>
   </xsl:template>

   <xsl:template mode="asleep" match="statement">
      <div class="statement">
         <xsl:apply-templates/>
      </div>
   </xsl:template>

   <xsl:template mode="asleep" match="by-component">
      <div class="by-component">
         <xsl:apply-templates/>
      </div>
   </xsl:template>

   <xsl:template mode="asleep" match="set-param">
      <div class="set-param">
         <xsl:apply-templates/>
      </div>
   </xsl:template>

   <xsl:template mode="asleep" match="system-name-short">
      <p class="system-name-short">
         <xsl:apply-templates/>
      </p>
   </xsl:template>

   <xsl:template mode="asleep" match="information-type-id">
      <p class="information-type-id">
         <xsl:apply-templates/>
      </p>
   </xsl:template>

   <xsl:template mode="asleep" match="date-authorized">
      <p class="date-authorized">
         <xsl:apply-templates/>
      </p>
   </xsl:template>

   <xsl:template mode="asleep" match="caption">
      <p class="caption">
         <xsl:apply-templates/>
      </p>
   </xsl:template>

   <xsl:template mode="asleep" match="role-id">
      <p class="role-id">
         <xsl:apply-templates/>
      </p>
   </xsl:template>

   <xsl:template mode="asleep" match="function-performed">
      <p class="function-performed">
         <xsl:apply-templates/>
      </p>
   </xsl:template>

   <xsl:template mode="asleep" match="port-range">
      <p class="port-range">
         <xsl:apply-templates/>
      </p>
   </xsl:template>

   <xsl:template mode="asleep" match="purpose">
      <p class="purpose">
         <xsl:apply-templates/>
      </p>
   </xsl:template>

   <xsl:template mode="asleep" match="remote-system-name">
      <p class="remote-system-name">
         <xsl:apply-templates/>
      </p>
   </xsl:template>

   <xsl:template mode="asleep" match="value">
      <p class="value">
         <xsl:apply-templates/>
      </p>
   </xsl:template>

   <xsl:template mode="asleep" match="only-statement">
      <div class="only-statement">
         <xsl:apply-templates/>
      </div>
   </xsl:template>
   
   <xsl:template mode="asleep" match="incorporates-component">
      <div class="incorporates-component">
         <xsl:apply-templates/>
      </div>
   </xsl:template>
   
   <xsl:template mode="asleep" match="incorporates-capability">
      <div class="incorporates-capability">
         <xsl:apply-templates/>
      </div>
   </xsl:template>
   
   
   
   <xsl:template priority="-0.4"
      match="only-statement | incorporates-component | incorporates-capability">
      <div class="{name()}">
         <div class="tag">
            <xsl:value-of select="name()"/>: </div>
         <xsl:apply-templates/>
      </div>
   </xsl:template>

   <xsl:template priority="-0.4"
                 match="system-security-plan | import-profile | system-characteristics | system-information | information-type | confidentiality-impact | integrity-impact | availability-impact | adjustment-justification | security-impact-level | status | leveraged-authorization | authorization-boundary | diagram | network-architecture | data-flow | system-implementation | user | authorized-privilege | component | service | protocol | interconnection | system-inventory | inventory-item | implemented-component | control-implementation | implemented-requirement | statement | responsible-role | by-component | set-param">
      <div class="{name()}">
         <div class="tag">
            <xsl:value-of select="name()"/>: </div>
         <xsl:apply-templates/>
      </div>
   </xsl:template>

   <xsl:template priority="-0.4"
                 match="system-id | system-name | system-name-short | security-sensitivity-level | information-type-id | base | selected | security-objective-confidentiality | security-objective-integrity | security-objective-availability | date-authorized | caption | role-id | function-performed | port-range | purpose | remote-system-name | value">
      <p class="{name()}">
         <span class="tag">
            <xsl:value-of select="name()"/>: </span>
         <xsl:apply-templates/>
      </p>
   </xsl:template>


</xsl:stylesheet>
