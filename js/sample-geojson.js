var freeBus = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-105.00341892242432, 39.75383843460583],
                    [-105.0008225440979, 39.751891803969535]
                ]
            },
            "properties": {
                "popupContent": "This is free bus that will take you across downtown.",
                "underConstruction": false
            },
            "id": 1
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-105.0008225440979, 39.751891803969535],
                    [-104.99820470809937, 39.74979664004068]
                ]
            },
            "properties": {
                "popupContent": "This is free bus that will take you across downtown.",
                "underConstruction": true
            },
            "id": 2
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-104.99820470809937, 39.74979664004068],
                    [-104.98689651489258, 39.741052354709055]
                ]
            },
            "properties": {
                "popupContent": "This is free bus that will take you across downtown.",
                "underConstruction": false
            },
            "id": 3
        }
    ]
};

var lightRailStop = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "popupContent": "18th & California Light Rail Stop"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-104.98999178409576, 39.74683938093904]
            }
        },{
            "type": "Feature",
            "properties": {
                "popupContent": "20th & Welton Light Rail Stop"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-104.98689115047453, 39.747924136466565]
            }
        }
    ]
};

var bicycleRental = {
    "type": "FeatureCollection",
    "features": [
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -104.9998241,
                    39.7471494
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "This is a B-Cycle Station. Come pick up a bike and pay by the hour. What a deal!"
            },
            "id": 51
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -104.9983545,
                    39.7502833
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "This is a B-Cycle Station. Come pick up a bike and pay by the hour. What a deal!"
            },
            "id": 52
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -104.9963919,
                    39.7444271
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "This is a B-Cycle Station. Come pick up a bike and pay by the hour. What a deal!"
            },
            "id": 54
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -104.9960754,
                    39.7498956
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "This is a B-Cycle Station. Come pick up a bike and pay by the hour. What a deal!"
            },
            "id": 55
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -104.9933717,
                    39.7477264
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "This is a B-Cycle Station. Come pick up a bike and pay by the hour. What a deal!"
            },
            "id": 57
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -104.9913392,
                    39.7432392
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "This is a B-Cycle Station. Come pick up a bike and pay by the hour. What a deal!"
            },
            "id": 58
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -104.9788452,
                    39.6933755
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "This is a B-Cycle Station. Come pick up a bike and pay by the hour. What a deal!"
            },
            "id": 74
        }
    ]
};



var campus ={
    "type": "Feature",
    "properties": {
        "popupContent": "This is the Auraria West Campus",
        "style": {
            weight: 2,
            color: "#999",
            opacity: 1,
            fillColor: "#B0DE5C",
            fillOpacity: 0.8
        }
    },
    "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            30.296763181686398,
            50.439659344477015
          ],
          [
            30.29673367738724,
            50.43962176244648
          ],
          [
            30.296722948551174,
            50.4395841803861
          ],
          [
            30.296736359596252,
            50.43952609896141
          ],
          [
            30.296784639358524,
            50.43946118434357
          ],
          [
            30.296886563301086,
            50.43941676902741
          ],
          [
            30.297286212444302,
            50.4393245216992
          ],
          [
            30.297696590423584,
            50.4392391073461
          ],
          [
            30.29776632785797,
            50.43923569076876
          ],
          [
            30.297819972038265,
            50.4392391073461
          ],
          [
            30.297873616218567,
            50.43925960680491
          ],
          [
            30.297905802726746,
            50.43928693940282
          ],
          [
            30.297905802726746,
            50.439338187981384
          ],
          [
            30.297895073890686,
            50.43937918680429
          ],
          [
            30.297701954841614,
            50.4395397651854
          ],
          [
            30.297675132751465,
            50.43957051417495
          ],
          [
            30.297675132751465,
            50.43961151279662
          ],
          [
            30.297680497169498,
            50.439652511382775
          ],
          [
            30.2977180480957,
            50.43967813548109
          ],
          [
            30.297736823558807,
            50.4396866768441
          ],
          [
            30.297752916812897,
            50.43969350993342
          ],
          [
            30.297787785530087,
            50.43969350993342
          ],
          [
            30.29785215854645,
            50.43969350993342
          ],
          [
            30.297932624816898,
            50.43967130238955
          ],
          [
            30.29895722866058,
            50.43930914712702
          ],
          [
            30.299032330513,
            50.439266439955865
          ],
          [
            30.299080610275272,
            50.439198108401854
          ],
          [
            30.299091339111328,
            50.43914344308764
          ],
          [
            30.299069881439205,
            50.439088777710296
          ],
          [
            30.298997461795803,
            50.43903069567769
          ],
          [
            30.297779738903042,
            50.4385045375468
          ],
          [
            30.297701954841614,
            50.43843962152794
          ],
          [
            30.297664403915405,
            50.438372997100224
          ],
          [
            30.29766976833343,
            50.43831662251124
          ],
          [
            30.297680497169498,
            50.438268789473966
          ],
          [
            30.29772877693176,
            50.43821070643515
          ],
          [
            30.297819972038265,
            50.43808770682361
          ],
          [
            30.298136472702026,
            50.43771187269682
          ],
          [
            30.298227667808533,
            50.43758203839594
          ],
          [
            30.2982759475708,
            50.4375137044103
          ],
          [
            30.298326909542084,
            50.43738728627686
          ],
          [
            30.298383235931393,
            50.437305285144895
          ],
          [
            30.29846370220184,
            50.43726770124529
          ],
          [
            30.298576354980465,
            50.43724378420271
          ],
          [
            30.29870510101318,
            50.43724378420271
          ],
          [
            30.2988338470459,
            50.43727111796465
          ],
          [
            30.29894649982452,
            50.437301868427994
          ],
          [
            30.299016237258908,
            50.4373753277873
          ],
          [
            30.29913693666458,
            50.43783999830258
          ],
          [
            30.29925227165222,
            50.43829953928919
          ],
          [
            30.29922008514404,
            50.43837128878036
          ],
          [
            30.299123525619507,
            50.43842937162211
          ],
          [
            30.299037694931027,
            50.43845670469944
          ],
          [
            30.29896795749664,
            50.43845499638258
          ],
          [
            30.29891967773438,
            50.43843962152794
          ],
          [
            30.29881238937378,
            50.438378122059554
          ],
          [
            30.298656821250912,
            50.438261956179
          ],
          [
            30.2985817193985,
            50.4382072897836
          ],
          [
            30.29844224452972,
            50.43820387313178
          ],
          [
            30.298388600349426,
            50.43824487293722
          ],
          [
            30.298361778259274,
            50.43832345579832
          ],
          [
            30.298420786857605,
            50.43838837197649
          ],
          [
            30.298600494861603,
            50.438533578894834
          ],
          [
            30.299166440963745,
            50.438876948776716
          ],
          [
            30.29927372932434,
            50.438931614398726
          ],
          [
            30.299364924430847,
            50.43899823804017
          ],
          [
            30.299418568611145,
            50.439068278177494
          ],
          [
            30.299456119537354,
            50.439133193334214
          ],
          [
            30.29945075511932,
            50.43919469182157
          ],
          [
            30.29945075511932,
            50.439273273105826
          ],
          [
            30.299423933029175,
            50.43933306312602
          ],
          [
            30.299359560012814,
            50.439420185591665
          ],
          [
            30.299236178398132,
            50.43949193338417
          ],
          [
            30.299150347709652,
            50.43952609896141
          ],
          [
            30.298662185668945,
            50.4396866768441
          ],
          [
            30.298434197902676,
            50.4397515911527
          ],
          [
            30.29826521873474,
            50.43980796403265
          ],
          [
            30.298152565956112,
            50.43983358804682
          ],
          [
            30.29805600643158,
            50.43986092031329
          ],
          [
            30.29798090457916,
            50.439867753377456
          ],
          [
            30.297868251800534,
            50.439878002971824
          ],
          [
            30.297744870185852,
            50.439878002971824
          ],
          [
            30.297626852989193,
            50.439874586440624
          ],
          [
            30.297471284866333,
            50.43985750378084
          ],
          [
            30.297315716743466,
            50.439831879779625
          ],
          [
            30.297219157218933,
            50.4398130888366
          ],
          [
            30.297122597694397,
            50.43979600615465
          ],
          [
            30.29695898294449,
            50.43975842423264
          ],
          [
            30.29682755470276,
            50.43971230092391
          ],
          [
            30.296760499477383,
            50.439659344477015
          ]
        ]
      }

};