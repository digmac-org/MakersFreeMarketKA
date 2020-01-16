//OSM kann keine Flohmärte... Aber die Orte... https://forum.openstreetmap.org/viewtopic.php?id=66983

/*OLD / TESTS*/
//alert("Extern in test not myLovelyScript");
var infoFromExternalVar = "This is Info from the JS in the subfolder!!!";

/*Aktuell die overpass test Anfrage...Exportiert als GeoJson... direkt in Overpassturbo...*/
var geojson = {
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [8.41,49.0]
    }
};


//Externe Datei so einbinden - https://stackoverflow.com/questions/950087/how-do-i-include-a-javascript-file-in-another-javascript-file
var popupinfo ="Die folgenden Termine bitte manuell prüfen. \n termin 123 \n strasse 123 Ich versuche einzuzeichnen... \n";
var streetparts = ["Saab 1a", "Volvo 3b", "BMW 1a"];


var streetpartsgeojson = {
  "type": "FeatureCollection",
  "generator": "overpass-ide",
  "copyright": "The data included in this document is from www.openstreetmap.org. The data is made available under ODbL.",
  "timestamp": "2020-01-15T15:43:03Z",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "@id": "way/90167595",
        "addr:city": "Karlsruhe",
        "addr:country": "DE",
        "addr:housenumber": "17",
        "addr:postcode": "76137",
        "addr:street": "Vorholzstraße",
        "building": "yes"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              8.3932114,
              48.9994584
            ],
            [
              8.3932168,
              48.9995125
            ],
            [
              8.3932198,
              48.9995424
            ],
            [
              8.3932244,
              48.9995885
            ],
            [
              8.3930446,
              48.9995962
            ],
            [
              8.3930317,
              48.9994665
            ],
            [
              8.3930794,
              48.9994644
            ],
            [
              8.3930719,
              48.9993889
            ],
            [
              8.3931968,
              48.9993836
            ],
            [
              8.3931994,
              48.9994103
            ],
            [
              8.3932035,
              48.9994511
            ],
            [
              8.3932114,
              48.9994584
            ]
          ]
        ]
      },
      "id": "way/90167595"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/90167620",
        "addr:city": "Karlsruhe",
        "addr:country": "DE",
        "addr:housenumber": "19",
        "addr:postcode": "76137",
        "addr:street": "Vorholzstraße",
        "building": "yes"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              8.3928285,
              48.9996055
            ],
            [
              8.3928155,
              48.9994758
            ],
            [
              8.3929236,
              48.9994711
            ],
            [
              8.3930317,
              48.9994665
            ],
            [
              8.3930446,
              48.9995962
            ],
            [
              8.3929366,
              48.9996009
            ],
            [
              8.3928285,
              48.9996055
            ]
          ]
        ]
      },
      "id": "way/90167620"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/90167638",
        "addr:city": "Karlsruhe",
        "addr:country": "DE",
        "addr:housenumber": "15",
        "addr:postcode": "76137",
        "addr:street": "Vorholzstraße",
        "building": "yes"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              8.3933162,
              48.9995846
            ],
            [
              8.3933104,
              48.9995266
            ],
            [
              8.3933069,
              48.9995268
            ],
            [
              8.3933067,
              48.999525
            ],
            [
              8.3933051,
              48.9995087
            ],
            [
              8.3933032,
              48.9994905
            ],
            [
              8.3933108,
              48.9994901
            ],
            [
              8.3933049,
              48.9994304
            ],
            [
              8.3934171,
              48.9994256
            ],
            [
              8.3934204,
              48.9994584
            ],
            [
              8.3934649,
              48.9994565
            ],
            [
              8.3934657,
              48.9994647
            ],
            [
              8.393477,
              48.9995776
            ],
            [
              8.3933162,
              48.9995846
            ]
          ]
        ]
      },
      "id": "way/90167638"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/99064679",
        "addr:city": "Karlsruhe",
        "addr:country": "DE",
        "addr:housenumber": "16",
        "addr:postcode": "76137",
        "addr:street": "Vorholzstraße",
        "building": "house"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              8.3942623,
              48.9997965
            ],
            [
              8.3941085,
              48.9998037
            ],
            [
              8.3940948,
              48.9996768
            ],
            [
              8.3942496,
              48.9996701
            ],
            [
              8.3942623,
              48.9997965
            ]
          ]
        ]
      },
      "id": "way/99064679"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/117486585",
        "addr:city": "Karlsruhe",
        "addr:country": "DE",
        "addr:housenumber": "14",
        "addr:postcode": "76137",
        "addr:street": "Vorholzstraße",
        "building": "house"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              8.3942496,
              48.9996701
            ],
            [
              8.3945036,
              48.9996601
            ],
            [
              8.3945151,
              48.9997867
            ],
            [
              8.3942819,
              48.9997956
            ],
            [
              8.3942623,
              48.9997965
            ],
            [
              8.3942496,
              48.9996701
            ]
          ]
        ]
      },
      "id": "way/117486585"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/117559600",
        "addr:city": "Karlsruhe",
        "addr:country": "DE",
        "addr:housenumber": "13",
        "addr:postcode": "76137",
        "addr:street": "Vorholzstraße",
        "building": "yes"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              8.393675,
              48.9995691
            ],
            [
              8.3936134,
              48.9995718
            ],
            [
              8.393477,
              48.9995776
            ],
            [
              8.3934657,
              48.9994647
            ],
            [
              8.393515,
              48.9994625
            ],
            [
              8.3935167,
              48.9994791
            ],
            [
              8.3935788,
              48.9994764
            ],
            [
              8.3935741,
              48.9994291
            ],
            [
              8.3936607,
              48.9994255
            ],
            [
              8.393675,
              48.9995691
            ]
          ]
        ]
      },
      "id": "way/117559600"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/118070699",
        "addr:city": "Karlsruhe",
        "addr:country": "DE",
        "addr:housenumber": "11",
        "addr:postcode": "76137",
        "addr:street": "Vorholzstraße",
        "building": "yes"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              8.3943845,
              48.999454
            ],
            [
              8.3943858,
              48.9994674
            ],
            [
              8.3943926,
              48.9995401
            ],
            [
              8.3941675,
              48.9995492
            ],
            [
              8.3941539,
              48.9994114
            ],
            [
              8.3943194,
              48.9994043
            ],
            [
              8.394324,
              48.9994564
            ],
            [
              8.3943845,
              48.999454
            ]
          ]
        ]
      },
      "id": "way/118070699"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/172743017",
        "addr:city": "Karlsruhe",
        "addr:country": "DE",
        "addr:housenumber": "19a",
        "addr:postcode": "76137",
        "addr:street": "Vorholzstraße",
        "building": "commercial",
        "contact:email": "info@wb-ka.de",
        "contact:phone": "+49 721 357706",
        "contact:website": "http://www.wb-ka.de",
        "craft": "electrician",
        "name": "Wolfgang Barth",
        "note": "Die Kundendienst-Zentrale für Elektrogeräte",
        "opening_hours": "Mo-Fr 08:00-12:00,13:30-17:00",
        "operator": "Dipl-Ing. (FH), Dipl.Wirt-Ing (FH) Michael Barth",
        "shop": "electrician"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              8.3930078,
              48.9989538
            ],
            [
              8.3929343,
              48.998957
            ],
            [
              8.3928052,
              48.9989625
            ],
            [
              8.3928121,
              48.9990311
            ],
            [
              8.392813,
              48.9990404
            ],
            [
              8.3928313,
              48.9992233
            ],
            [
              8.392859,
              48.9992221
            ],
            [
              8.392887,
              48.9992209
            ],
            [
              8.3929404,
              48.9992186
            ],
            [
              8.3930191,
              48.9992152
            ],
            [
              8.3930301,
              48.9993253
            ],
            [
              8.39287,
              48.9993322
            ],
            [
              8.3928392,
              48.9993335
            ],
            [
              8.3928439,
              48.9993806
            ],
            [
              8.3928067,
              48.9993822
            ],
            [
              8.3927694,
              48.9993838
            ],
            [
              8.3927629,
              48.9993183
            ],
            [
              8.3927542,
              48.9992318
            ],
            [
              8.3927221,
              48.9989102
            ],
            [
              8.3928229,
              48.9989059
            ],
            [
              8.3930021,
              48.9988982
            ],
            [
              8.3930078,
              48.9989538
            ]
          ]
        ]
      },
      "id": "way/172743017"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/147538934",
        "highway": "residential",
        "lit": "yes",
        "maxspeed": "30",
        "name": "Vorholzstraße",
        "surface": "asphalt"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.3940518,
            48.9996255
          ],
          [
            8.3965102,
            48.9995125
          ],
          [
            8.3966819,
            48.9995025
          ],
          [
            8.3967832,
            48.9994966
          ]
        ]
      },
      "id": "way/147538934"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/147538938",
        "highway": "residential",
        "maxspeed": "50",
        "name": "Vorholzstraße",
        "surface": "asphalt"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.393934,
            48.9996048
          ],
          [
            8.3939571,
            48.9996096
          ],
          [
            8.39398,
            48.9996143
          ],
          [
            8.394001,
            48.9996186
          ],
          [
            8.3940518,
            48.9996255
          ]
        ]
      },
      "id": "way/147538938"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/306138960",
        "highway": "residential",
        "lit": "yes",
        "maxspeed": "30",
        "name": "Vorholzstraße",
        "surface": "asphalt"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.3906671,
            48.9997537
          ],
          [
            8.3908534,
            48.999745
          ],
          [
            8.3908781,
            48.9997439
          ],
          [
            8.3911381,
            48.999732
          ],
          [
            8.3911389,
            48.999732
          ],
          [
            8.3911745,
            48.9997304
          ],
          [
            8.3913082,
            48.9997243
          ],
          [
            8.3914239,
            48.999719
          ],
          [
            8.391666,
            48.999708
          ],
          [
            8.3916819,
            48.9997073
          ],
          [
            8.3918433,
            48.9997
          ],
          [
            8.3919157,
            48.9996967
          ],
          [
            8.3919516,
            48.999695
          ],
          [
            8.3920045,
            48.9996926
          ],
          [
            8.3921712,
            48.999685
          ],
          [
            8.3922698,
            48.9996805
          ],
          [
            8.3923093,
            48.9996787
          ],
          [
            8.3923455,
            48.9996771
          ],
          [
            8.3924026,
            48.9996745
          ],
          [
            8.3924336,
            48.9996731
          ],
          [
            8.3927733,
            48.9996576
          ],
          [
            8.3928151,
            48.9996557
          ],
          [
            8.3929187,
            48.999651
          ],
          [
            8.3929415,
            48.99965
          ],
          [
            8.393115,
            48.9996421
          ],
          [
            8.3931538,
            48.9996403
          ],
          [
            8.3932497,
            48.9996359
          ],
          [
            8.3933012,
            48.9996336
          ],
          [
            8.3935482,
            48.9996224
          ],
          [
            8.3935894,
            48.9996205
          ],
          [
            8.3936181,
            48.9996192
          ],
          [
            8.3938165,
            48.9996102
          ],
          [
            8.393934,
            48.9996048
          ]
        ]
      },
      "id": "way/306138960"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/1836122599",
        "entrance": "service"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.3928121,
          48.9990311
        ]
      },
      "id": "node/1836122599"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/1836122808",
        "entrance": "service"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.39287,
          48.9993322
        ]
      },
      "id": "node/1836122808"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/1836122841",
        "entrance": "main",
        "wheelchair": "yes"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.3928067,
          48.9993822
        ]
      },
      "id": "node/1836122841"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/1836122912",
        "entrance": "service"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.3929236,
          48.9994711
        ]
      },
      "id": "node/1836122912"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/1836122925",
        "entrance": "yes",
        "highway": "steps",
        "step_count": "1",
        "wheelchair": "no"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.3933051,
          48.9995087
        ]
      },
      "id": "node/1836122925"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/1836122929",
        "entrance": "yes",
        "highway": "steps",
        "step_count": "1",
        "wheelchair": "no"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.3932168,
          48.9995125
        ]
      },
      "id": "node/1836122929"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/1836122947",
        "entrance": "yes",
        "highway": "steps",
        "step_count": "6",
        "wheelchair": "no"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.3936134,
          48.9995718
        ]
      },
      "id": "node/1836122947"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/1836122952",
        "entrance": "yes",
        "highway": "steps",
        "step_count": "1",
        "wheelchair": "no"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.3929366,
          48.9996009
        ]
      },
      "id": "node/1836122952"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/1836122982",
        "bicycle": "no",
        "crossing": "unmarked",
        "highway": "crossing"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.3908781,
          48.9997439
        ]
      },
      "id": "node/1836122982"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/7026308549",
        "highway": "give_way"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.3966819,
          48.9995025
        ]
      },
      "id": "node/7026308549"
    }
  ]
}
;
