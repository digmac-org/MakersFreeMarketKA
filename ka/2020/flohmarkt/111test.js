var streetparts = ["unten am groetzinger weg",
"untere hub gewann",
"saeckinger strasse",
"lamprechtstrasse",
"waldshuter strasse",
"tiengener strasse",
"neuensteinstrasse",
"trainstrasse",
"alte weingartener strasse 1-29z",
"alte weingartener strasse 31-39",
"alte weingartener strasse 39a-47z",
"alte weingartener strasse 49-49z",
"alte weingartener strasse 51-ende",
"alte weingartener strasse 0-36z",
"alte weingartener strasse 38-52",
"alte weingartener strasse 52a-72z",
"alte weingartener strasse 74-ende",
"lenzenhub gewann",
"lenzenhubweg",
"liebensteinstrasse",
"schopfheimer strasse",
"hengstplatz",
"loerracher strasse",
"funkerstrasse",
"bonndorfer strasse",
"hubstrasse 1-7",
"hubstrasse 7a-ende",
"hubstrasse 0-0z",
"hubstrasse 2-16",
"hubstrasse 16a-ende"]; 

var streetpartsgeojson = {
  "type": "FeatureCollection",
  "generator": "overpass-ide",
  "copyright": "The data included in this document is from www.openstreetmap.org. The data is made available under ODbL.",
  "timestamp": "2020-01-16T11:17:02Z",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "@id": "way/13517982",
        "leisure": "park",
        "name": "Hengstplatz"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              8.4751806,
              49.0001753
            ],
            [
              8.4752185,
              49.0001403
            ],
            [
              8.4754084,
              48.9999644
            ],
            [
              8.475541,
              48.9998416
            ],
            [
              8.4756751,
              48.9997659
            ],
            [
              8.4761437,
              49.0000401
            ],
            [
              8.4761621,
              49.0000822
            ],
            [
              8.4761396,
              49.0001139
            ],
            [
              8.4760727,
              49.0001358
            ],
            [
              8.4751806,
              49.0001753
            ]
          ]
        ]
      },
      "id": "way/13517982"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/132713553",
        "alt_name": "Wertstoffstation Grötzingen",
        "amenity": "recycling",
        "name": "Wertstoffstation Alte Weingartener Straße 63",
        "opening_hours": "Tu,Th 09:00-17:00; Sa 10:00-16:00;Mo,We,Fr,Su,PH off",
        "operator": "Stadt Karlsruhe",
        "recycling:cardboard": "yes",
        "recycling:clothes": "yes",
        "recycling:electrical_appliances": "no",
        "recycling:glass": "no",
        "recycling:glass_bottles": "yes",
        "recycling:green_waste": "yes",
        "recycling:paper": "yes",
        "recycling:plastic": "yes",
        "recycling:plastic_packaging": "yes",
        "recycling:scrap_metal": "yes",
        "recycling:shoes": "yes",
        "recycling:small_appliances": "yes",
        "recycling:waste": "no",
        "recycling:wood": "yes",
        "recycling_type": "centre"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              8.4852296,
              49.0116002
            ],
            [
              8.4852935,
              49.0116057
            ],
            [
              8.4853371,
              49.0116094
            ],
            [
              8.4853803,
              49.0116132
            ],
            [
              8.4855126,
              49.0116246
            ],
            [
              8.4855252,
              49.011676
            ],
            [
              8.4855773,
              49.0118886
            ],
            [
              8.4853653,
              49.0119459
            ],
            [
              8.4852153,
              49.0117152
            ],
            [
              8.4852296,
              49.0116002
            ]
          ]
        ]
      },
      "id": "way/132713553"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/3924780",
        "highway": "residential",
        "maxspeed": "30",
        "name": "Hubstraße",
        "surface": "asphalt"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.472095,
            49.0057394
          ],
          [
            8.4722713,
            49.0055181
          ],
          [
            8.4723461,
            49.005318
          ],
          [
            8.4723579,
            49.0050085
          ],
          [
            8.4723384,
            49.0045222
          ],
          [
            8.4723144,
            49.0040791
          ],
          [
            8.4723095,
            49.0037134
          ],
          [
            8.4723293,
            49.0036855
          ],
          [
            8.4724234,
            49.003623
          ]
        ]
      },
      "id": "way/3924780"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/3924781",
        "hgv": "destination",
        "highway": "residential",
        "maxspeed": "30",
        "name": "Waldshuter Straße"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4771904,
            49.0035562
          ],
          [
            8.4760018,
            49.0034856
          ],
          [
            8.4753057,
            49.0034636
          ],
          [
            8.4749247,
            49.0034558
          ],
          [
            8.4733222,
            49.0034487
          ],
          [
            8.4725404,
            49.0034611
          ],
          [
            8.4723725,
            49.0034643
          ]
        ]
      },
      "id": "way/3924781"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/3924784",
        "highway": "residential",
        "lit": "yes",
        "maxspeed": "30",
        "name": "Säckinger Straße",
        "surface": "asphalt"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4723384,
            49.0045222
          ],
          [
            8.4712698,
            49.0045768
          ],
          [
            8.4711947,
            49.004547
          ],
          [
            8.4711292,
            49.0041551
          ]
        ]
      },
      "id": "way/3924784"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/4262257",
        "cycleway": "opposite",
        "highway": "residential",
        "lit": "yes",
        "maxspeed": "30",
        "name": "Hubstraße",
        "note": "Einbahnstraße nur temporär während der Baustelle am alten Volksbankgebäude",
        "oneway": "yes",
        "oneway:bicycle": "no",
        "surface": "asphalt"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4720137,
            49.0013918
          ],
          [
            8.4720275,
            49.0014704
          ],
          [
            8.47208,
            49.0017208
          ],
          [
            8.472136,
            49.0020312
          ],
          [
            8.4721718,
            49.0022244
          ],
          [
            8.4722455,
            49.0026389
          ],
          [
            8.4723148,
            49.003089
          ]
        ]
      },
      "id": "way/4262257"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/4262260",
        "bridge": "yes",
        "highway": "unclassified",
        "layer": "1",
        "lit": "yes",
        "maxspeed": "30",
        "name": "Hubstraße",
        "sidewalk": "both",
        "source:maxspeed": "sign",
        "surface": "asphalt"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4718573,
            49.0062763
          ],
          [
            8.4717217,
            49.0064276
          ],
          [
            8.4715852,
            49.006573
          ]
        ]
      },
      "id": "way/4262260"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/4262261",
        "bridge": "yes",
        "bridge:ref": "541",
        "highway": "unclassified",
        "layer": "1",
        "maxspeed": "30",
        "name": "Hubstraße",
        "source:maxspeed": "sign",
        "surface": "asphalt"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4695242,
            49.0080618
          ],
          [
            8.4693265,
            49.0081613
          ],
          [
            8.4691521,
            49.0082396
          ],
          [
            8.4689496,
            49.0083227
          ]
        ]
      },
      "id": "way/4262261"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/4330568",
        "highway": "residential",
        "maxspeed": "30",
        "name": "Funkerstraße"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4783065,
            49.0042278
          ],
          [
            8.4777711,
            49.0042342
          ],
          [
            8.4775329,
            49.0042332
          ],
          [
            8.477437,
            49.0042328
          ],
          [
            8.4771585,
            49.0041685
          ],
          [
            8.4768399,
            49.0041867
          ],
          [
            8.4752336,
            49.004565
          ],
          [
            8.4734555,
            49.0049586
          ],
          [
            8.4729523,
            49.0050675
          ],
          [
            8.4728851,
            49.0050794
          ],
          [
            8.4728304,
            49.0050678
          ],
          [
            8.4727879,
            49.0050343
          ],
          [
            8.472774,
            49.0049755
          ]
        ]
      },
      "id": "way/4330568"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/4330574",
        "highway": "service",
        "maxspeed": "30",
        "name": "Unten am Grötzinger Weg"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4786644,
            49.0032147
          ],
          [
            8.4789022,
            49.0033629
          ],
          [
            8.4791157,
            49.0034467
          ],
          [
            8.4794848,
            49.0035735
          ],
          [
            8.4813492,
            49.0042142
          ],
          [
            8.4817733,
            49.0044603
          ],
          [
            8.4819559,
            49.0045782
          ],
          [
            8.4826625,
            49.0049997
          ],
          [
            8.4833064,
            49.0053924
          ],
          [
            8.4838521,
            49.0057234
          ]
        ]
      },
      "id": "way/4330574"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/4403828",
        "highway": "residential",
        "maxspeed": "30",
        "name": "Neuensteinstraße"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4763054,
            49.0016487
          ],
          [
            8.4768365,
            49.0013963
          ]
        ]
      },
      "id": "way/4403828"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/4403829",
        "highway": "residential",
        "maxspeed": "30",
        "name": "Neuensteinstraße"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4772745,
            49.0011734
          ],
          [
            8.4777695,
            49.0010024
          ],
          [
            8.4779738,
            49.0009613
          ],
          [
            8.4788483,
            49.0006156
          ],
          [
            8.4798389,
            49.000205
          ]
        ]
      },
      "id": "way/4403829"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/4403830",
        "highway": "residential",
        "maxspeed": "30",
        "name": "Lamprechtstraße"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4783377,
            49.0000732
          ],
          [
            8.4788483,
            49.0006156
          ],
          [
            8.4800174,
            49.0017924
          ]
        ]
      },
      "id": "way/4403830"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/4403831",
        "highway": "residential",
        "maxspeed": "30",
        "name": "Liebensteinstraße"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4785677,
            49.0020341
          ],
          [
            8.4800016,
            49.001795
          ],
          [
            8.4800174,
            49.0017924
          ],
          [
            8.4809365,
            49.0012773
          ],
          [
            8.4810853,
            49.0011955
          ],
          [
            8.4812243,
            49.0011012
          ]
        ]
      },
      "id": "way/4403831"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/4403836",
        "highway": "living_street",
        "name": "Alte Weingartener Straße"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4782621,
            49.002402
          ],
          [
            8.478376,
            49.002048
          ],
          [
            8.4777695,
            49.0010024
          ],
          [
            8.4773411,
            49.0005818
          ],
          [
            8.4774402,
            49.0005246
          ]
        ]
      },
      "id": "way/4403836"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/4408418",
        "highway": "residential",
        "maxspeed": "30",
        "name": "Schopfheimer Straße",
        "surface": "asphalt"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.472774,
            49.0049755
          ],
          [
            8.4726203,
            49.003719
          ],
          [
            8.4725779,
            49.0036819
          ],
          [
            8.4724234,
            49.003623
          ]
        ]
      },
      "id": "way/4408418"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/4408420",
        "highway": "residential",
        "maxspeed": "30",
        "name": "Trainstraße"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4771904,
            49.0035562
          ],
          [
            8.4771585,
            49.0041685
          ]
        ]
      },
      "id": "way/4408420"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/4408421",
        "highway": "residential",
        "maxspeed": "30",
        "name": "Lörracher Straße"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4749247,
            49.0034558
          ],
          [
            8.4749295,
            49.0037013
          ],
          [
            8.4749792,
            49.0040015
          ],
          [
            8.4750916,
            49.0042987
          ],
          [
            8.4752336,
            49.004565
          ]
        ]
      },
      "id": "way/4408421"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/4412313",
        "bicycle": "designated",
        "foot": "designated",
        "highway": "path",
        "name": "Neuensteinstraße",
        "segregated": "yes"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4768365,
            49.0013963
          ],
          [
            8.4772745,
            49.0011734
          ]
        ]
      },
      "id": "way/4412313"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/4428434",
        "highway": "living_street",
        "name": "Alte Weingartener Straße"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4785677,
            49.0020341
          ],
          [
            8.478376,
            49.002048
          ]
        ]
      },
      "id": "way/4428434"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/12717333",
        "bridge": "yes",
        "highway": "residential",
        "layer": "1",
        "maxspeed": "30",
        "name": "Alte Weingartener Straße"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4785574,
            49.0035667
          ],
          [
            8.4785353,
            49.0036331
          ]
        ]
      },
      "id": "way/12717333"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/13516374",
        "highway": "residential",
        "lit": "yes",
        "maxspeed": "30",
        "name": "Hubstraße",
        "surface": "asphalt"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4723148,
            49.003089
          ],
          [
            8.4723276,
            49.0032272
          ]
        ]
      },
      "id": "way/13516374"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/13516376",
        "highway": "residential",
        "maxspeed": "30",
        "name": "Hubstraße",
        "surface": "asphalt"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4723725,
            49.0034643
          ],
          [
            8.4723985,
            49.0034987
          ],
          [
            8.4724101,
            49.0035338
          ],
          [
            8.4724234,
            49.003623
          ]
        ]
      },
      "id": "way/13516376"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/25012187",
        "cycleway:both": "no",
        "highway": "unclassified",
        "layer": "1",
        "lit": "yes",
        "maxspeed": "30",
        "name": "Hubstraße",
        "sidewalk": "both",
        "source:maxspeed": "sign",
        "surface": "asphalt"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4719505,
            49.0061816
          ],
          [
            8.4718573,
            49.0062763
          ]
        ]
      },
      "id": "way/25012187"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/27675046",
        "disused:hgv": "destination",
        "highway": "residential",
        "maxspeed": "30",
        "name": "Waldshuter Straße",
        "note": "Einbahnstraße und Freigabe für LKWs nur temporär während der Baustelle am alten Volksbankgebäude",
        "oneway": "yes",
        "surface": "asphalt"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4723725,
            49.0034643
          ],
          [
            8.4722136,
            49.0034701
          ],
          [
            8.4702512,
            49.0035586
          ],
          [
            8.4695433,
            49.0036072
          ],
          [
            8.4693648,
            49.0036526
          ]
        ]
      },
      "id": "way/27675046"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/84873500",
        "cycleway:both": "no",
        "highway": "unclassified",
        "maxspeed": "30",
        "maxweight": "16",
        "name": "Hubstraße",
        "surface": "asphalt"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4724691,
            49.0040336
          ],
          [
            8.4725373,
            49.0047418
          ],
          [
            8.4725542,
            49.0049948
          ],
          [
            8.4725554,
            49.0050067
          ],
          [
            8.4725741,
            49.0052788
          ]
        ]
      },
      "id": "way/84873500"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/131484434",
        "cycleway:both": "no",
        "highway": "unclassified",
        "maxheight": "4.2",
        "maxspeed": "50",
        "name": "Alte Weingartener Straße",
        "surface": "asphalt",
        "width": "5"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4789267,
            49.0092989
          ],
          [
            8.4791744,
            49.0095764
          ],
          [
            8.479311,
            49.0097247
          ],
          [
            8.4793796,
            49.0097882
          ],
          [
            8.479578,
            49.0099466
          ],
          [
            8.4797798,
            49.0100676
          ],
          [
            8.4799151,
            49.0101339
          ]
        ]
      },
      "id": "way/131484434"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/131484435",
        "highway": "residential",
        "maxspeed": "30",
        "name": "Alte Weingartener Straße",
        "note": "im SHP des NVK: II, nicht mehr vernünftig seit Unterbrechung",
        "surface": "cobblestone"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4773771,
            49.0004599
          ],
          [
            8.4774402,
            49.0005246
          ],
          [
            8.4777144,
            49.0007143
          ],
          [
            8.4778543,
            49.0008426
          ],
          [
            8.4779738,
            49.0009613
          ],
          [
            8.478339,
            49.001559
          ],
          [
            8.478534,
            49.0019431
          ],
          [
            8.4785677,
            49.0020341
          ],
          [
            8.4785958,
            49.0023008
          ],
          [
            8.4786424,
            49.0025767
          ],
          [
            8.478663,
            49.0027793
          ],
          [
            8.4786814,
            49.0029637
          ],
          [
            8.4786644,
            49.0032147
          ],
          [
            8.4786242,
            49.0033475
          ]
        ]
      },
      "id": "way/131484435"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/131484468",
        "highway": "residential",
        "lit": "yes",
        "maxspeed": "30",
        "name": "Hengstplatz",
        "oneway": "yes",
        "oneway:bicycle": "yes",
        "surface": "asphalt"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4758188,
            48.9997866
          ],
          [
            8.4758663,
            48.9997472
          ]
        ]
      },
      "id": "way/131484468"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/131484475",
        "bicycle": "yes",
        "foot": "yes",
        "highway": "service",
        "layer": "1",
        "motorcar": "destination",
        "motorcycle": "yes",
        "name": "Alte Weingartener Straße",
        "smoothness": "good",
        "surface": "asphalt",
        "tracktype": "grade1"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4780006,
            49.0081734
          ],
          [
            8.4781522,
            49.0081778
          ],
          [
            8.4788824,
            49.0082014
          ],
          [
            8.4794585,
            49.0082293
          ],
          [
            8.4799376,
            49.0082747
          ],
          [
            8.4801692,
            49.0082962
          ],
          [
            8.4804243,
            49.0083172
          ],
          [
            8.4807396,
            49.0083402
          ],
          [
            8.4811001,
            49.0083624
          ],
          [
            8.4814564,
            49.0083798
          ],
          [
            8.4817738,
            49.0083939
          ],
          [
            8.4820408,
            49.0083961
          ],
          [
            8.48232,
            49.0083931
          ],
          [
            8.4827621,
            49.0083788
          ],
          [
            8.4833293,
            49.0083573
          ],
          [
            8.4837143,
            49.0083373
          ],
          [
            8.4839247,
            49.008343
          ],
          [
            8.4842218,
            49.0083424
          ],
          [
            8.4847316,
            49.0082939
          ],
          [
            8.4852081,
            49.0082436
          ],
          [
            8.4857618,
            49.0081545
          ],
          [
            8.4865193,
            49.0080106
          ],
          [
            8.4869634,
            49.0079497
          ]
        ]
      },
      "id": "way/131484475"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/131712761",
        "highway": "unclassified",
        "mofa": "yes",
        "motor_vehicle": "destination",
        "name": "Alte Weingartener Straße",
        "surface": "asphalt"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4838996,
            49.0113561
          ],
          [
            8.4839276,
            49.0113638
          ],
          [
            8.4841487,
            49.011411
          ],
          [
            8.4846184,
            49.0114838
          ],
          [
            8.4853466,
            49.0115502
          ],
          [
            8.4854015,
            49.0115545
          ],
          [
            8.4864416,
            49.0116165
          ],
          [
            8.4872366,
            49.0118087
          ],
          [
            8.4877707,
            49.0119659
          ],
          [
            8.4881852,
            49.0121038
          ],
          [
            8.4884098,
            49.0121786
          ],
          [
            8.4890158,
            49.0124267
          ],
          [
            8.4900584,
            49.0129208
          ],
          [
            8.4903515,
            49.0130817
          ],
          [
            8.490557,
            49.0131912
          ],
          [
            8.4906247,
            49.0132318
          ],
          [
            8.4907659,
            49.0133342
          ],
          [
            8.4912677,
            49.013735
          ],
          [
            8.4914915,
            49.0138959
          ],
          [
            8.4923135,
            49.0145023
          ],
          [
            8.493118,
            49.0151192
          ],
          [
            8.4938664,
            49.0156694
          ],
          [
            8.4939027,
            49.0157042
          ],
          [
            8.4939319,
            49.0157624
          ],
          [
            8.4939389,
            49.0158088
          ],
          [
            8.4939349,
            49.015851
          ],
          [
            8.4939283,
            49.0159141
          ],
          [
            8.4939423,
            49.0159636
          ],
          [
            8.4939745,
            49.0159937
          ],
          [
            8.4940206,
            49.016013
          ],
          [
            8.4941137,
            49.0160189
          ]
        ]
      },
      "id": "way/131712761"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/131712762",
        "cycleway:both": "no",
        "highway": "unclassified",
        "lanes": "2",
        "maxheight": "4.2",
        "maxspeed": "50",
        "name": "Alte Weingartener Straße",
        "surface": "asphalt"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4807707,
            49.0104636
          ],
          [
            8.4815446,
            49.0106967
          ],
          [
            8.4817739,
            49.0107635
          ],
          [
            8.4818795,
            49.0108099
          ]
        ]
      },
      "id": "way/131712762"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/131712763",
        "highway": "tertiary",
        "last_renovation": "2019-12",
        "maxspeed": "50",
        "name": "Alte Weingartener Straße",
        "priority_road": "designated",
        "smoothness": "excellent",
        "surface": "asphalt"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4835222,
            49.0112534
          ],
          [
            8.4835566,
            49.0112498
          ],
          [
            8.4835909,
            49.011243
          ],
          [
            8.4836136,
            49.0112319
          ]
        ]
      },
      "id": "way/131712763"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/131713003",
        "highway": "residential",
        "maxspeed": "50",
        "name": "Tiengener Straße"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4780528,
            49.0048555
          ],
          [
            8.4781668,
            49.0049788
          ],
          [
            8.4781811,
            49.0050129
          ],
          [
            8.478188,
            49.0050612
          ],
          [
            8.4781816,
            49.0052139
          ],
          [
            8.4781614,
            49.0056576
          ],
          [
            8.4781811,
            49.0057697
          ],
          [
            8.4782385,
            49.0058847
          ],
          [
            8.4784308,
            49.0060823
          ],
          [
            8.4785106,
            49.0061777
          ],
          [
            8.4785601,
            49.0062504
          ],
          [
            8.4785968,
            49.0064291
          ],
          [
            8.4786164,
            49.0069647
          ],
          [
            8.4786481,
            49.0077019
          ],
          [
            8.4786828,
            49.0077773
          ],
          [
            8.4787689,
            49.0078375
          ]
        ]
      },
      "id": "way/131713003"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/131715390",
        "bridge": "yes",
        "bridge:structure": "beam",
        "highway": "tertiary",
        "lanes": "2",
        "last_renovation": "2019-12",
        "layer": "1",
        "maxspeed": "50",
        "name": "Alte Weingartener Straße",
        "priority_road": "designated",
        "sidewalk": "both",
        "sidewalk:both:surface": "concrete",
        "smoothness": "excellent",
        "surface": "asphalt"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4831347,
            49.0111538
          ],
          [
            8.4833974,
            49.0112303
          ]
        ]
      },
      "id": "way/131715390"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/131715391",
        "highway": "tertiary",
        "lanes": "2",
        "last_renovation": "2019-12",
        "maxspeed": "50",
        "name": "Alte Weingartener Straße",
        "priority_road": "designated",
        "sidewalk": "no",
        "smoothness": "excellent",
        "surface": "asphalt"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4818795,
            49.0108099
          ],
          [
            8.4820314,
            49.0108374
          ],
          [
            8.4822541,
            49.0108989
          ],
          [
            8.4830216,
            49.0111217
          ],
          [
            8.4831347,
            49.0111538
          ]
        ]
      },
      "id": "way/131715391"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/134200915",
        "highway": "unclassified",
        "lit": "yes",
        "maxspeed": "30",
        "name": "Hubstraße",
        "sidewalk": "both",
        "source:maxspeed": "sign",
        "surface": "asphalt"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4715852,
            49.006573
          ],
          [
            8.4714987,
            49.0066623
          ]
        ]
      },
      "id": "way/134200915"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/134200916",
        "highway": "unclassified",
        "maxspeed": "30",
        "name": "Hubstraße",
        "source:maxspeed": "sign",
        "surface": "asphalt"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4689496,
            49.0083227
          ],
          [
            8.4688455,
            49.0083701
          ],
          [
            8.468391,
            49.0085181
          ],
          [
            8.4679789,
            49.0086271
          ],
          [
            8.4676466,
            49.008698
          ],
          [
            8.4674025,
            49.008741
          ],
          [
            8.4671811,
            49.0087746
          ],
          [
            8.4670292,
            49.0087916
          ],
          [
            8.4662581,
            49.0088656
          ],
          [
            8.4658587,
            49.0088891
          ],
          [
            8.4657663,
            49.0088945
          ],
          [
            8.465231,
            49.0089499
          ]
        ]
      },
      "id": "way/134200916"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/134200917",
        "bridge": "yes",
        "bridge:length": "31",
        "bridge:name": "Hubwegbrücke",
        "bridge:structure": "truss",
        "highway": "unclassified",
        "lanes": "1",
        "layer": "2",
        "maxspeed": "30",
        "maxweight": "16",
        "name": "Hubstraße",
        "priority": "forward",
        "sidewalk": "right",
        "smoothness": "excellent",
        "surface": "asphalt",
        "traffic_sign": "DE:262[16]"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4723388,
            49.005753
          ],
          [
            8.4721086,
            49.0059992
          ]
        ]
      },
      "id": "way/134200917"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/134200918",
        "cycleway:both": "no",
        "highway": "unclassified",
        "lanes": "1",
        "layer": "1",
        "lit": "yes",
        "maxspeed": "30",
        "name": "Hubstraße",
        "priority": "forward",
        "sidewalk": "right",
        "surface": "asphalt",
        "traffic_sign": "DE:274[30]"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4721086,
            49.0059992
          ],
          [
            8.4720861,
            49.0060237
          ],
          [
            8.4720703,
            49.0060413
          ]
        ]
      },
      "id": "way/134200918"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/134200919",
        "highway": "unclassified",
        "layer": "1",
        "maxspeed": "30",
        "name": "Hubstraße",
        "surface": "asphalt",
        "traffic_sign": "DE:274[50]"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4725741,
            49.0052788
          ],
          [
            8.4725652,
            49.0053689
          ],
          [
            8.4725425,
            49.0054741
          ],
          [
            8.4724701,
            49.0056074
          ],
          [
            8.4723388,
            49.005753
          ]
        ]
      },
      "id": "way/134200919"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/134200933",
        "highway": "service",
        "name": "Lenzenhubweg"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4713235,
            49.0068304
          ],
          [
            8.471202,
            49.0067369
          ],
          [
            8.4710446,
            49.0065943
          ],
          [
            8.4706383,
            49.0062173
          ],
          [
            8.4704208,
            49.0060166
          ],
          [
            8.4702713,
            49.0058861
          ],
          [
            8.4700974,
            49.0057684
          ],
          [
            8.4698622,
            49.00563
          ],
          [
            8.4695975,
            49.0054907
          ],
          [
            8.4694245,
            49.005415
          ],
          [
            8.4693295,
            49.0054048
          ],
          [
            8.469283,
            49.0054124
          ],
          [
            8.4692433,
            49.0054297
          ],
          [
            8.4692185,
            49.0054488
          ],
          [
            8.469207,
            49.0054706
          ],
          [
            8.4692078,
            49.0054958
          ],
          [
            8.4692191,
            49.0055174
          ],
          [
            8.4692382,
            49.0055451
          ],
          [
            8.4692651,
            49.0055648
          ],
          [
            8.469317,
            49.0055804
          ],
          [
            8.4693673,
            49.005586
          ],
          [
            8.4694743,
            49.0055904
          ],
          [
            8.469578,
            49.0056224
          ],
          [
            8.4696508,
            49.0056556
          ],
          [
            8.4697801,
            49.0057156
          ],
          [
            8.4698691,
            49.0057589
          ],
          [
            8.4700177,
            49.0058492
          ],
          [
            8.4701005,
            49.0059087
          ],
          [
            8.4701626,
            49.0059607
          ],
          [
            8.4702286,
            49.0060161
          ],
          [
            8.4703547,
            49.0061313
          ],
          [
            8.4704562,
            49.0062442
          ],
          [
            8.4705215,
            49.0063106
          ],
          [
            8.4706347,
            49.0064172
          ],
          [
            8.4707834,
            49.0065763
          ],
          [
            8.4708253,
            49.0066321
          ],
          [
            8.4708485,
            49.0066629
          ],
          [
            8.4708765,
            49.0067314
          ],
          [
            8.470875,
            49.0067843
          ],
          [
            8.4708527,
            49.006805
          ]
        ]
      },
      "id": "way/134200933"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/134205100",
        "change:lanes": "no|no",
        "highway": "unclassified",
        "lanes": "2",
        "maxheight": "4.2",
        "maxspeed": "50",
        "name": "Alte Weingartener Straße",
        "surface": "asphalt"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4779777,
            49.0080782
          ],
          [
            8.4780006,
            49.0081734
          ]
        ]
      },
      "id": "way/134205100"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/154534972",
        "highway": "residential",
        "maxspeed": "30",
        "name": "Alte Weingartener Straße"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4785353,
            49.0036331
          ],
          [
            8.478528,
            49.0036558
          ],
          [
            8.4785173,
            49.0036824
          ],
          [
            8.4785068,
            49.0037151
          ],
          [
            8.4784706,
            49.0038145
          ],
          [
            8.4783778,
            49.0040775
          ],
          [
            8.4783065,
            49.0042278
          ],
          [
            8.4780896,
            49.0047564
          ],
          [
            8.4780528,
            49.0048555
          ]
        ]
      },
      "id": "way/154534972"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/154544641",
        "bridge": "yes",
        "change:lanes": "no|no",
        "highway": "unclassified",
        "lanes": "2",
        "layer": "1",
        "maxheight": "4.2",
        "maxspeed": "50",
        "name": "Alte Weingartener Straße",
        "surface": "asphalt"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4779749,
            49.0075226
          ],
          [
            8.4779777,
            49.0080782
          ]
        ]
      },
      "id": "way/154544641"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/154544642",
        "change:lanes": "no|no",
        "highway": "unclassified",
        "lanes": "2",
        "maxheight": "4.2",
        "maxspeed": "50",
        "name": "Alte Weingartener Straße",
        "surface": "asphalt"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4780528,
            49.0048555
          ],
          [
            8.4780042,
            49.0050199
          ],
          [
            8.477996,
            49.0050578
          ],
          [
            8.4779893,
            49.0050982
          ],
          [
            8.4779873,
            49.0051849
          ],
          [
            8.4779809,
            49.0053881
          ],
          [
            8.4779841,
            49.0059559
          ],
          [
            8.4779714,
            49.006852
          ],
          [
            8.4779749,
            49.0075226
          ]
        ]
      },
      "id": "way/154544642"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/158044622",
        "bridge": "yes",
        "highway": "residential",
        "layer": "1",
        "maxspeed": "30",
        "name": "Alte Weingartener Straße",
        "note": "im SHP des NVK: II, nicht mehr vernünftig seit Unterbrechung",
        "surface": "cobblestone"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4786242,
            49.0033475
          ],
          [
            8.4785998,
            49.0034273
          ]
        ]
      },
      "id": "way/158044622"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/158044627",
        "highway": "residential",
        "maxspeed": "30",
        "name": "Alte Weingartener Straße",
        "note": "im SHP des NVK: II, nicht mehr vernünftig seit Unterbrechung",
        "surface": "cobblestone"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4785998,
            49.0034273
          ],
          [
            8.4785574,
            49.0035667
          ]
        ]
      },
      "id": "way/158044627"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/160200483",
        "bridge": "yes",
        "highway": "residential",
        "layer": "1",
        "lit": "yes",
        "maxspeed": "30",
        "name": "Hubstraße",
        "surface": "asphalt"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4723276,
            49.0032272
          ],
          [
            8.4723385,
            49.0033531
          ]
        ]
      },
      "id": "way/160200483"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/160200484",
        "highway": "residential",
        "lit": "yes",
        "maxspeed": "30",
        "name": "Hubstraße",
        "surface": "asphalt"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4723385,
            49.0033531
          ],
          [
            8.4723416,
            49.0033822
          ],
          [
            8.4723509,
            49.0034321
          ],
          [
            8.4723725,
            49.0034643
          ]
        ]
      },
      "id": "way/160200484"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/184817618",
        "highway": "residential",
        "lit": "yes",
        "maxspeed": "30",
        "name": "Bonndorfer Straße",
        "surface": "asphalt"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4706774,
            49.0041863
          ],
          [
            8.4711292,
            49.0041551
          ],
          [
            8.4723144,
            49.0040791
          ]
        ]
      },
      "id": "way/184817618"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/261110232",
        "cycleway:both": "no",
        "highway": "unclassified",
        "layer": "-1",
        "maxheight": "4.2",
        "maxspeed": "50",
        "name": "Alte Weingartener Straße",
        "surface": "asphalt",
        "tunnel": "yes",
        "width": "5"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4799151,
            49.0101339
          ],
          [
            8.4803641,
            49.0103353
          ]
        ]
      },
      "id": "way/261110232"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/261110233",
        "cycleway:both": "no",
        "highway": "unclassified",
        "maxheight": "4.2",
        "maxspeed": "50",
        "name": "Alte Weingartener Straße",
        "surface": "asphalt",
        "width": "5"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4803641,
            49.0103353
          ],
          [
            8.480554,
            49.010401
          ]
        ]
      },
      "id": "way/261110233"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/360802892",
        "highway": "service",
        "name": "Tiengener Straße"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4789326,
            49.0078588
          ],
          [
            8.4791298,
            49.00783
          ]
        ]
      },
      "id": "way/360802892"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/360802893",
        "highway": "service",
        "lit": "yes",
        "name": "Tiengener Straße",
        "surface": "paved"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4787689,
            49.0078375
          ],
          [
            8.4789326,
            49.0078588
          ],
          [
            8.479021,
            49.0078703
          ],
          [
            8.4803602,
            49.0080199
          ],
          [
            8.4812327,
            49.0080637
          ],
          [
            8.4816367,
            49.0080738
          ],
          [
            8.4823086,
            49.0080919
          ],
          [
            8.4829923,
            49.0080862
          ]
        ]
      },
      "id": "way/360802893"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/368518886",
        "highway": "residential",
        "maxspeed": "30",
        "maxweight": "16",
        "name": "Hubstraße",
        "surface": "asphalt",
        "traffic_sign": "DE:262[16]"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4724234,
            49.003623
          ],
          [
            8.4724349,
            49.0037091
          ],
          [
            8.4724691,
            49.0040336
          ]
        ]
      },
      "id": "way/368518886"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/368518887",
        "highway": "unclassified",
        "lit": "yes",
        "maxspeed": "30",
        "name": "Hubstraße",
        "sidewalk": "both",
        "source:maxspeed": "sign",
        "surface": "asphalt"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4714987,
            49.0066623
          ],
          [
            8.4714774,
            49.006686
          ],
          [
            8.4714529,
            49.0067133
          ],
          [
            8.4714256,
            49.0067435
          ],
          [
            8.4713235,
            49.0068304
          ],
          [
            8.4711644,
            49.0069552
          ],
          [
            8.4708675,
            49.0071885
          ],
          [
            8.4702684,
            49.0076047
          ],
          [
            8.4695242,
            49.0080618
          ]
        ]
      },
      "id": "way/368518887"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/438507713",
        "cycleway:both": "no",
        "highway": "unclassified",
        "layer": "1",
        "lit": "yes",
        "maxspeed": "30",
        "name": "Hubstraße",
        "sidewalk": "both",
        "source:maxspeed": "sign",
        "surface": "asphalt",
        "traffic_sign": "DE:274[30]"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4720703,
            49.0060413
          ],
          [
            8.4719505,
            49.0061816
          ]
        ]
      },
      "id": "way/438507713"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/445742096",
        "bridge": "yes",
        "highway": "unclassified",
        "layer": "1",
        "mofa": "yes",
        "motor_vehicle": "destination",
        "name": "Alte Weingartener Straße",
        "surface": "asphalt"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4838178,
            49.0113372
          ],
          [
            8.4838996,
            49.0113561
          ]
        ]
      },
      "id": "way/445742096"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/445742097",
        "highway": "unclassified",
        "last_renovation": "2019-12",
        "mofa": "yes",
        "motor_vehicle": "destination",
        "name": "Alte Weingartener Straße",
        "smoothness": "excellent",
        "surface": "asphalt"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4836136,
            49.0112319
          ],
          [
            8.4836816,
            49.0112894
          ],
          [
            8.483721,
            49.0113126
          ],
          [
            8.4837426,
            49.011319
          ],
          [
            8.4838178,
            49.0113372
          ]
        ]
      },
      "id": "way/445742097"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/556690577",
        "highway": "residential",
        "lit": "yes",
        "maxspeed": "30",
        "name": "Hengstplatz",
        "oneway": "yes",
        "oneway:bicycle": "yes",
        "surface": "asphalt"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4758663,
            48.9997472
          ],
          [
            8.475897,
            48.9997286
          ],
          [
            8.4759365,
            48.9997282
          ],
          [
            8.4759873,
            48.999751
          ],
          [
            8.4764588,
            49.0000075
          ],
          [
            8.4767149,
            49.0001469
          ],
          [
            8.477027,
            49.0003048
          ],
          [
            8.4770783,
            49.0003243
          ],
          [
            8.4771301,
            49.0003315
          ],
          [
            8.4771814,
            49.0003254
          ],
          [
            8.4772307,
            49.0003153
          ]
        ]
      },
      "id": "way/556690577"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/631619228",
        "hgv": "destination",
        "highway": "residential",
        "maxspeed": "30",
        "name": "Waldshuter Straße"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4771904,
            49.0035562
          ],
          [
            8.4778204,
            49.0036579
          ]
        ]
      },
      "id": "way/631619228"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/714744583",
        "highway": "tertiary",
        "lanes": "2",
        "last_renovation": "2019-12",
        "maxspeed": "50",
        "name": "Alte Weingartener Straße",
        "priority_road": "designated",
        "sidewalk": "no",
        "smoothness": "excellent",
        "surface": "asphalt"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4833974,
            49.0112303
          ],
          [
            8.4834809,
            49.0112514
          ],
          [
            8.4835222,
            49.0112534
          ]
        ]
      },
      "id": "way/714744583"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/759400943",
        "cycleway:both": "no",
        "highway": "unclassified",
        "maxheight": "4.2",
        "maxspeed": "50",
        "name": "Alte Weingartener Straße",
        "surface": "asphalt",
        "width": "5"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.480554,
            49.010401
          ],
          [
            8.4807707,
            49.0104636
          ]
        ]
      },
      "id": "way/759400943"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/759400944",
        "cycleway:both": "no",
        "highway": "unclassified",
        "maxheight": "4.2",
        "maxspeed": "50",
        "name": "Alte Weingartener Straße",
        "surface": "asphalt"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4787266,
            49.0090749
          ],
          [
            8.4789267,
            49.0092989
          ]
        ]
      },
      "id": "way/759400944"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/759400945",
        "change:lanes": "no|no",
        "cycleway:both": "no",
        "highway": "unclassified",
        "lanes": "2",
        "maxheight": "4.2",
        "maxspeed": "50",
        "name": "Alte Weingartener Straße",
        "surface": "asphalt"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            8.4780006,
            49.0081734
          ],
          [
            8.4780255,
            49.0082654
          ],
          [
            8.4780978,
            49.0083852
          ],
          [
            8.4787266,
            49.0090749
          ]
        ]
      },
      "id": "way/759400945"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/15843121",
        "disused:traffic_sign:forward": "DE:253,DE:1020-30",
        "note": "Freigabe für LKWs nur temporär während der Baustelle am alten Volksbankgebäude"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.4722136,
          49.0034701
        ]
      },
      "id": "node/15843121"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/15843123",
        "disused:traffic_sign:backward": "DE:253,DE:1020-30",
        "note": "Freigabe für LKWs nur temporär während der Baustelle am alten Volksbankgebäude"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.4695433,
          49.0036072
        ]
      },
      "id": "node/15843123"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/25576300",
        "traffic_sign:backward": "DE:274.1[30]",
        "traffic_sign:forward": "DE:274.2[30];DE:274[30]"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.4724691,
          49.0040336
        ]
      },
      "id": "node/25576300"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/26936789",
        "barrier": "bollard",
        "bicycle": "yes",
        "foot": "yes"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.4768365,
          49.0013963
        ]
      },
      "id": "node/26936789"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/26936791",
        "barrier": "bollard",
        "bicycle": "yes",
        "foot": "yes"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.4772745,
          49.0011734
        ]
      },
      "id": "node/26936791"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/406534892",
        "bus": "yes",
        "name": "An der Fayence",
        "network": "Karlsruher Verkehrsverbund",
        "note": "Ersatzhaltestelle nur temporär während der Baustelle am alten Volksbankgebäude",
        "operator": "Verkehrsbetriebe Karlsruhe GmbH",
        "public_transport": "stop_position",
        "ref:IFOPT": "de:08212:3120:0:1"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.47208,
          49.0017208
        ]
      },
      "id": "node/406534892"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/1447726968",
        "crossing": "uncontrolled",
        "highway": "crossing"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.4774402,
          49.0005246
        ]
      },
      "id": "node/1447726968"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/1476083245",
        "traffic_sign:backward": "DE:274[50]",
        "traffic_sign:forward": "DE:274[30];DE:308;DE:262[16]"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.4723388,
          49.005753
        ]
      },
      "id": "node/1476083245"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/1476083296",
        "crossing:activation": "automatic",
        "crossing:barrier": "no",
        "crossing:bell": "yes",
        "crossing:chicane": "no",
        "crossing:light": "yes",
        "crossing:saltire": "yes",
        "crossing:supervision": "no",
        "railway": "level_crossing",
        "railway:level_crossing:closure:average": "0.33"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.4714774,
          49.006686
        ]
      },
      "id": "node/1476083296"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/1476083297",
        "crossing:activation": "automatic",
        "crossing:barrier": "no",
        "crossing:bell": "yes",
        "crossing:chicane": "no",
        "crossing:light": "yes",
        "crossing:saltire": "yes",
        "crossing:supervision": "no",
        "railway": "level_crossing",
        "railway:level_crossing:closure:average": "0.33"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.4714529,
          49.0067133
        ]
      },
      "id": "node/1476083297"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/1476201235",
        "traffic_sign:forward": "DE:251,DE:1020-30"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.4781522,
          49.0081778
        ]
      },
      "id": "node/1476201235"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/1670591300",
        "railway": "level_crossing"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.4758663,
          48.9997472
        ]
      },
      "id": "node/1670591300"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/1670652355",
        "crossing": "uncontrolled",
        "crossing_ref": "zebra",
        "highway": "crossing"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.478528,
          49.0036558
        ]
      },
      "id": "node/1670652355"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/1673788621",
        "traffic_sign:forward": "DE:274-50"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.4822541,
          49.0108989
        ]
      },
      "id": "node/1673788621"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/1684807867",
        "barrier": "bollard"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.4708527,
          49.006805
        ]
      },
      "id": "node/1684807867"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/1694480149",
        "highway": "give_way",
        "traffic_sign": "DE:205"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.4720275,
          49.0014704
        ]
      },
      "id": "node/1694480149"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/1703084793",
        "traffic_sign:backward": "DE:274-50"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.4835566,
          49.0112498
        ]
      },
      "id": "node/1703084793"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/1774587905",
        "traffic_sign:forward": "DE:260,DE:1020-30,\"Mofa frei\""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.4836816,
          49.0112894
        ]
      },
      "id": "node/1774587905"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/1924052265",
        "barrier": "gate"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.4853371,
          49.0116094
        ]
      },
      "id": "node/1924052265"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/3653522313",
        "highway": "turning_circle"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.4791298,
          49.00783
        ]
      },
      "id": "node/3653522313"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/4362476558",
        "traffic_sign:backward": "DE:208,DE:262[16]"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.4720861,
          49.0060237
        ]
      },
      "id": "node/4362476558"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/4362476559",
        "traffic_sign:backward": "DE:274[30]"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.4720703,
          49.0060413
        ]
      },
      "id": "node/4362476559"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/4988298471",
        "traffic_sign:forward": "DE:262[16]"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.4724349,
          49.0037091
        ]
      },
      "id": "node/4988298471"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/4988298472",
        "traffic_sign:backward": "DE:253,DE:1020-30"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.4725404,
          49.0034611
        ]
      },
      "id": "node/4988298472"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/5964515990",
        "traffic_sign:forward": "DE:274[50];DE:265[4.2]"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.477996,
          49.0050578
        ]
      },
      "id": "node/5964515990"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/7093426097",
        "traffic_sign:backward": "DE:205,1002-14"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.4837426,
          49.011319
        ]
      },
      "id": "node/7093426097"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/7093426099",
        "highway": "give_way",
        "traffic_sign:forward": "DE:205,1002-14"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.4817739,
          49.0107635
        ]
      },
      "id": "node/7093426099"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/7093426103",
        "traffic_sign:backward": "DE:274-50;265[4.2]"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.4815446,
          49.0106967
        ]
      },
      "id": "node/7093426103"
    }
  ]
}