CREATE TABLE IF NOT EXISTS Entities(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    page_name TEXT, 
    data_fields TEXT
);

INSERT or IGNORE INTO songtable(id, page_name, data_fields) VALUES (1, 'Mode', '1');
INSERT or IGNORE INTO songtable(id, page_name, data_fields) VALUES (2, 'Meta', '2');
INSERT or IGNORE INTO songtable(id, page_name, data_fields) VALUES (3, 'Cat', '3');
INSERT or IGNORE INTO songtable(id, page_name, data_fields) VALUES (4, 'Profile', '4');
INSERT or IGNORE INTO songtable(id, page_name, data_fields) VALUES (5, 'Regroup', '5');
INSERT or IGNORE INTO songtable(id, page_name, data_fields) VALUES (6, 'Review', '6');
INSERT or IGNORE INTO songtable(id, page_name, data_fields) VALUES (7, 'Down-load', '7');
INSERT or IGNORE INTO songtable(id, page_name, data_fields) VALUES (8, 'Up-load', '8');