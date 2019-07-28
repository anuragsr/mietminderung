var ql5 =
// Level 5 Questions
[
  /* Sub Questions 2 start*/
  {
    l: 5,
    parentAnsId: [
      1, 2, 3, 5, 7, 8, 9, 10, 1101, 12, 14, 15, 26, 27, 28, 29, 31, 32, 34, 44, 45, 46, 47, 123, 126, 127, 195, 196, 197, 198, 199, 200, 214,
      268, 269, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 324, 343, 344, 347, 348, 349
    ],
    q: 'Handelt es sich lediglich um einen unwesentlichen Mangel, der keine Beeinträchtigung mit sich bringt?',
    a: [
      { id: 1, type: 'icon-ja', icon: 'img/ja.png', text: 'Ja'},
      { id: 2, type: 'icon-nein', icon: 'img/nein.png', text: 'Nein'},
    ]
  },{
    l: 5,
    parentAnsId: [4, 11, 13],
    q: 'Wo ist die <br/>Ursache de Mangels?',
    a: [
      { id: 3, type: 'icon-sm-2', icon: 'icon/238.png', text: 'trockener Wasserschaden am Boden / an der Decke / an der Wand'},
      { id: 4, type: 'icon-sm-2', icon: 'icon/239.png', text: 'nasser Wasserschade am Boden / an der Decke / an der Wand'},
    ]
  },{
    l: 5,
    parentAnsId: [6],
    q: 'Wie groß ist das Zimmer, in dem sich der Deckendurchbruch befindet (in Quadratmetern)?',
    a: [
      {
        id: 5, type: 'number', icon: 'img/pl.png', text: '', skip: true,
        value: 10,
        options: {
          floor: -7,
          ceil: 107,
          minLimit: 0,
          maxLimit: 100,
          showSelectionBar: true,
          hideLimitLabels: true,
          translate: function(value){
            return '<div class="area-ctn b2">' + value + ' m<sup>2</sup></div>';
          }
        }
      }
    ]
  },{
    l: 5,
    parentAnsId: [16],
    q: 'Wo ist die <br/>Ursache de Mangels?',
    a: [
      { id: 6, type: 'icon-sm-2', icon: 'icon/240.png', text: 'mehrere Steckdosen defekt'},
      { id: 7, type: 'icon-sm-2', icon: 'icon/241.png', text: 'mehrere Steckdosen lose'},
      { id: 8, type: 'icon-sm-2', icon: 'icon/242.png', text: 'mehrere Steckdosen sind durchgebrannt'},
      { id: 9, type: 'icon-sm-2', icon: 'icon/243.png', text: 'im gesamten Raum sind keine Steckdosen vorhanden'},
    ]
  },{
    l: 5,
    parentAnsId: [17],
    q: 'Wo ist die <br/>Ursache de Mangels?',
    a: [
      { id: 10, type: 'icon-sm-2', icon: 'icon/244.png', text: 'einzelner Lichschalter ist defekt'},
      { id: 11, type: 'icon-sm-2', icon: 'icon/245.png', text: 'mehrere Lichschalter sind defekt'},
    ]
  },{
    l: 5,
    parentAnsId: [19],
    q: 'Wo ist die <br/>Ursache de Mangels?',
    a: [
      { id: 12, type: 'icon-sm-2', icon: 'icon/246.png', text: 'undichte/s Fenster'},
      { id: 13, type: 'icon-sm-2', icon: 'icon/247.png', text: 'Fenster schließt nicht'},
      { id: 14, type: 'icon-sm-2', icon: 'icon/248.png', text: 'Fenster lässt sich nicht öffnen'},
      { id: 15, type: 'icon-sm-2', icon: 'icon/249.png', text: 'Kondenswasserbildung an den Fenstern'},
      { id: 16, type: 'icon-sm-2', icon: 'icon/215.png', text: 'Lärmbelästigung aufgrund mangelhafter Schallisolierung der Fenster'},
      { id: 17, type: 'icon-sm-2', icon: 'icon/250.png', text: 'Mängel nach baulicher Veränderung an den Fenstern'},
      { id: 18, type: 'icon-sm-2', icon: 'icon/251.png', text: 'Schwarzverfärbung an den Fenstern'},
      { id: 19, type: 'icon-sm-2', icon: 'icon/252.png', text: 'Fenster sind faul und morsch'},
      { id: 20, type: 'icon-sm-2', icon: 'icon/253.png', text: 'Fenstergriff defekt'},
      { id: 21, type: 'icon-sm-2', icon: 'icon/254.png', text: 'Rolläden defekt'},
      { id: 22, type: 'icon-sm-2', icon: 'icon/255.png', text: 'Fensterläden wurden entfernt'},
   ]
 },{
    l: 5,
    parentAnsId: [20],
    q: 'Wo ist die <br/>Ursache de Mangels?',
    a: [
      { id: 23, type: 'icon-sm-2', icon: 'icon/256.png', text: 'Fensterscheibe defekt'},
      { id: 24, type: 'icon-sm-2', icon: 'icon/257.png', text: 'Fensterscheibe trüb'},
      { id: 25, type: 'icon-sm-2', icon: 'icon/258.png', text: 'Fensterscheibe blind und beschlagen'},
      { id: 26, type: 'icon-sm-2', icon: 'icon/259.png', text: 'unschöner Gesamteindruck der Fensterscheiben'},
    ]
  },{
    l: 5,
    parentAnsId: [21],
    q: 'Wo ist die <br/>Ursache de Mangels?',
    a: [
      { id: 27, type: 'icon-sm-2', icon: 'icon/010.png', text: 'sämtliche Türen der Wohnung fehlen'},
    ]
  },{
    l: 5,
    parentAnsId: [22],
    q: 'Wo ist die <br/>Ursache de Mangels?',
    a: [
      { id: 28, type: 'icon-sm-2', icon: 'icon/260.png', text: 'Fenster und Türen sind undicht'},
    ]
  },{
    l: 5,
    parentAnsId: [23],
    q: 'Wo ist die <br/>Ursache de Mangels?',
    a: [
      { id: 29, type: 'icon-sm-2', icon: 'icon/261.png', text: 'Nutzung der Dusche / Badewanne nicht möglich'},
      { id: 30, type: 'icon-sm-2', icon: 'icon/112.png', text: 'Verfugungen an der Dusche fehlen'},
      { id: 31, type: 'icon-sm-2', icon: 'icon/348.png', text: 'Badewannenabfluss defekt'},
      { id: 32, type: 'icon-sm-2', icon: 'icon/264.png', text: 'undichte Badewannenabdichtung'},
      { id: 33, type: 'icon-sm-2', icon: 'icon/265.png', text: 'Badewannenbeschichtung löst sich ab'},
    ]
  },{
    l: 5,
    parentAnsId: [24],
    q: 'Wo ist die <br/>Ursache de Mangels?',
    a: [
      { id: 34, type: 'icon-sm-2', icon: 'icon/266.png', text: 'Waschbecken undicht'},
    ]
  },{
    l: 5,
    parentAnsId: [25],
    q: 'Wo ist die <br/>Ursache de Mangels?',
    a: [
      { id: 35, type: 'icon-sm-2', icon: 'icon/267.png', text: 'defekter Toilettenabfluss'},
      { id: 36, type: 'icon-sm-2', icon: 'icon/268.png', text: 'Toilette verstopft'},
      { id: 37, type: 'icon-sm-2', icon: 'icon/269.png', text: 'Toilettenspülung defekt'},
      { id: 38, type: 'icon-sm-2', icon: 'icon/270.png', text: 'Toilettenspülung hat zu wenig Druck'},
      { id: 39, type: 'icon-sm-2', icon: 'icon/271.png', text: 'Toilette stark verkalkt'},
      { id: 40, type: 'icon-sm-2', icon: 'icon/272.png', text: 'Toilettenschüssel gesprungen'},
      { id: 41, type: 'icon-sm-2', icon: 'icon/273.png', text: 'Toilette nicht nutzbar'},
    ]
  },{
    l: 5,
    parentAnsId: [
      18, 33, 48, 72, 73, 74, 75, 76, 124, 203, 204, 205, 206, 212, 213, 216, 217, 218, 219, 220, 224, 239, 240, 242, 244, 246, 247, 258, 259,
      274, 275, 295, 296, 297, 298, 319, 320, 321, 322, 323, 341, 345, 346, 350, 351, 377, 378,
      386, 391, 405, 406, 409, 410, 423, 424, 427, 428, 429, 430, 433, 434, 441, 442
    ],
    q: 'Kannten Sie den Mangel bei <br/>Vertragsabschluss oder Einzug?',
    a: [
      { id: 42, type: 'icon-ja', icon: 'img/ja.png', text: 'Ja'},
      { id: 43, type: 'icon-nein', icon: 'img/nein.png', text: 'Nein'},
    ]
  },{
    l: 5,
    parentAnsId: [30],
    q: 'Gibt es einen Nachweis für die Asbesthaltigkeit?',
    a: [
      { id: 44, type: 'icon-ja', icon: 'img/ja.png', text: 'Ja'},
      { id: 45, type: 'icon-nein', icon: 'img/nein.png', text: 'Nein'},
    ]
  },{
    l: 5,
    parentAnsId: [35],
    q: 'Wo ist die <br/>Ursache de Mangels?',
    a: [
      { id: 46, type: 'icon-sm-2', icon: 'icon/274.png', text: 'Fliesen wurden teils in anderer Farbe repariert'},
      { id: 47, type: 'icon-sm-2', icon: 'icon/275.png', text: 'Fliesen wurden komplett in anderer Farbe ersetzt'},
    ]
  },{
    l: 5,
    parentAnsId: [36],
    q: 'Wurde ein Ersatzbad gestellt?',
    a: [
      { id: 48, type: 'icon-ja', icon: 'img/ja.png', text: 'Ja'},
      { id: 49, type: 'icon-nein', icon: 'img/nein.png', text: 'Nein'},
    ]
  },{
    l: 5,
    parentAnsId: [128],
    q: 'Wo ist die<br/> Ursache des Mangels?',
    a: [
      { id: 50, type: 'icon-sm-2', icon: 'icon/276.png', text: 'Einbauküche fehlt trotz vertraglicher Vereinbarung'},
      { id: 51, type: 'icon-sm-2', icon: 'icon/277.png', text: 'Arbeitsplatte in der Küche beschädigt'},
      { id: 52, type: 'icon-sm-2', icon: 'icon/278.png', text: 'diverse Schäden an der Einbauküche'},
    ]
  },{
    l: 5,
    parentAnsId: [129],
    q: 'Wo ist die<br/> Ursache des Mangels?',
    a: [
      { id: 53, type: 'icon-sm-2', icon: 'icon/279.png', text: 'Küchenherd defekt'},
      { id: 54, type: 'icon-sm-2', icon: 'icon/280.png', text: 'Küchenherd fehlt'},
      { id: 55, type: 'icon-sm-2', icon: 'icon/048.png', text: 'Backofen fehlt'},
    ]
  },{
    l: 5,
    parentAnsId: [130],
    q: 'Wo ist die<br/> Ursache des Mangels?',
    a: [
      { id: 56, type: 'icon-sm-2', icon: 'icon/114.png', text: 'Ventilator defekt'},
    ]
  },{
    l: 5,
    parentAnsId: [201],
    q: 'Wo ist die<br/> Ursache des Mangels?',
    a: [
      { id: 57, type: 'icon-sm-2', icon: 'icon/281.png', text: 'Balkon noch nicht fertiggestellt'},
      { id: 58, type: 'icon-sm-2', icon: 'icon/389.png', text: 'Balkon gesperrt'},
      { id: 59, type: 'icon-sm-2', icon: 'icon/227.png', text: 'Balkon abgerissen'},
      { id: 60, type: 'icon-sm-2', icon: 'icon/283.png', text: 'Nutzungseingeschränkung des Balkons aufgrund von Bauarbeiten'},
    ]
  },{
    l: 5,
    parentAnsId: [202],
    q: 'Wo ist die<br/> Ursache des Mangels?',
    a: [
      { id: 61, type: 'icon-sm-2', icon: 'icon/284.png', text: 'Verschmutzung des Balkons durch darüber wohnenden Nachbar'},
      { id: 62, type: 'icon-sm-2', icon: 'icon/285.png', text: 'Verschmutzung des Balkons durch Taubendreck'},
    ]
  },{
    l: 5,
    parentAnsId: [207],
    q: 'Wo ist die<br/> Ursache des Mangels?',
    a: [
      { id: 63, type: 'icon-sm-2', icon: 'icon/286.png', text: 'Wasserleitung stark verkalkt'},
      { id: 64, type: 'icon-sm-2', icon: 'icon/287.png', text: 'Wasserleitung eingefroren'},
      { id: 65, type: 'icon-sm-2', icon: 'icon/349.png', text: 'Wasserleitung liegt offen'},
    ]
  },{
    l: 5,
    parentAnsId: [208],
    q: 'Wo ist die<br/> Ursache des Mangels?',
    a: [
      { id: 66, type: 'icon-sm-2', icon: 'icon/390.png', text: 'Ausfall der Warmwasserversorgung'},
      { id: 67, type: 'icon-sm-2', icon: 'icon/290.png', text: 'Warmwasser in der Nacht nicht verfügbar'},
      { id: 68, type: 'icon-sm-2', icon: 'icon/291.png', text: 'sehr langer Kaltwasservorlauf'},
      { id: 69, type: 'icon-sm-2', icon: 'icon/292.png', text: 'unbeständige Warmwasserversorgung'},
      { id: 70, type: 'icon-sm-2', icon: 'icon/391.png', text: 'nach einer Umstellung ist das Warmwasser nur an einer Stelle gleichzeitig verfügbar'},
    ]
  },{
    l: 5,
    parentAnsId: [209],
    q: 'Wo ist die<br/> Ursache des Mangels?',
    a: [
      { id: 71, type: 'icon-sm-2', icon: 'icon/294.png', text: 'Wasserdruck ist sehr gering'},
    ]
  },{
    l: 5,
    parentAnsId: [210],
    q: 'Wo ist die<br/> Ursache des Mangels?',
    a: [
      { id: 73, type: 'icon-sm-2', icon: 'icon/295.png', text: 'erhöhter Bleigehalt im Trinkwasser'},
      { id: 74, type: 'icon-sm-2', icon: 'icon/296.png', text: 'erhöhter Nitratgehalt im Trinkwasser'},
      { id: 75, type: 'icon-sm-2', icon: 'icon/297.png', text: 'Braunverfärbung des Trinkwassers'},
      { id: 76, type: 'icon-sm-2', icon: 'icon/298.png', text: 'Rost im Trinkwasser'},
      { id: 77, type: 'icon-sm-2', icon: 'icon/299.png', text: 'Legionellen im Trinkwasser'},
    ]
  },{
    l: 5,
    parentAnsId: [211],
    q: 'Beträgt die Raumtemperatur in den Wohnräumen längerfristig unter 18 Grad?',
    a: [
      { id: 78, type: 'icon-ja', icon: 'img/ja.png', text: 'Ja'},
      { id: 79, type: 'icon-nein', icon: 'img/nein.png', text: 'Nein'},
    ]
  },{
    l: 5,
    parentAnsId: [215, 337, 387],
    q: 'Findet der Lärm nur gelegentlich statt und eine Beeinträchtigung ist nicht zu erkennen?',
    a: [
      { id: 80, type: 'icon-ja', icon: 'img/ja.png', text: 'Ja'},
      { id: 81, type: 'icon-nein', icon: 'img/nein.png', text: 'Nein'},
    ]
  },{
    l: 5,
    parentAnsId: [221],
    q: 'Wo ist die<br/> Ursache des Mangels?',
    a: [
      { id: 82, type: 'icon-sm-2', icon: 'icon/088.png', text: 'Teppichboden wirft Wellen, Stolpergefahr'},
      { id: 83, type: 'icon-sm-2', icon: 'icon/301.png', text: 'Holzboden wellig, Stolpergefahr'},
      { id: 84, type: 'icon-sm-2', icon: 'icon/302.png', text: 'Boden uneben, Teppich kann nicht verlegt werden'},
    ]
  },{
    l: 5,
    parentAnsId: [222],
    q: 'Wo ist die<br/> Ursache des Mangels?',
    a: [
      { id: 85, type: 'icon-sm-2', icon: 'icon/303.png', text: 'defekter Stuck an der Decke'},
    ]
  },{
    l: 5,
    parentAnsId: [223],
    q: 'Wo ist die<br/> Ursache des Mangels?',
    a: [
      { id: 86, type: 'icon-sm-2', icon: 'icon/097.png', text: 'Wasserschäden an mehreren Wänden'},
      { id: 87, type: 'icon-sm-2', icon: 'icon/305.png', text: 'Feuchtigkeitsschaden an Thermotapeten'},
      { id: 88, type: 'icon-sm-2', icon: 'icon/099.png', text: 'Schwarzfärbung an den Wänden'},
      { id: 89, type: 'icon-sm-2', icon: 'icon/146.png', text: 'Risse an den Wänden, Wandbelag löst sich ab'},
      { id: 90, type: 'icon-sm-2', icon: 'icon/308.png', text: 'Einige Stellen an den Wänden bröckeln ab'},
    ]
  },{
    l: 5,
    parentAnsId: [225],
    q: 'Wo ist die<br/> Ursache des Mangels?',
    a: [
      { id: 91, type: 'icon-sm-2', icon: 'icon/031.png', text: 'mangelhafter Trittschallschutz der Wohnung'},
      { id: 92, type: 'icon-sm-2', icon: 'icon/386.png', text: 'starke Hellhörigkeit der Wohnung'},
    ]
  },{
    l: 5,
    parentAnsId: [226],
    q: 'Wo ist die<br/> Ursache des Mangels?',
    a: [
      { id: 93, type: 'icon-sm-2', icon: 'icon/019.png', text: 'ungenügender Wärmeschutz der Wohnung'},
      { id: 94, type: 'icon-sm-2', icon: 'icon/392.png', text: 'Zugluft in der Wohnung'},
    ]
  },{
    l: 5,
    parentAnsId: [227],
    q: 'Wo ist die<br/> Ursache des Mangels?',
    a: [
      { id: 95, type: 'icon-sm-2', icon: 'icon/313.png', text: 'extreme Aufheizung im Sommer'},
      { id: 96, type: 'icon-sm-2', icon: 'icon/327.png', text: 'aufsteigende Wärme von darunterliegender Wohnung'},
    ]
  },{
    l: 5,
    parentAnsId: [228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238],
    q: 'Kann die Luftbelastung nachgewiesen werden?',
    a: [
      { id: 97, type: 'icon-ja', icon: 'img/ja.png', text: 'Ja'},
      { id: 98, type: 'icon-nein', icon: 'img/nein.png', text: 'Nein'},
    ]
  },{
    l: 5,
    parentAnsId: [241],
    q: 'Wachsen die Bäume auf eine natürliche Art und werden regelmäßig gepflegt und gestutzt?',
    a: [
      { id: 99, type: 'icon-ja', icon: 'img/ja.png', text: 'Ja'},
      { id: 100, type: 'icon-nein', icon: 'img/nein.png', text: 'Nein'},
    ]
  },{
    l: 5,
    parentAnsId: [243],
    q: 'Wurde der Mietvertrag vor dem 01.01.2004 abgeschlossen?',
    a: [
      { id: 101, type: 'icon-ja', icon: 'img/ja.png', text: 'Ja'},
      { id: 102, type: 'icon-nein', icon: 'img/nein.png', text: 'Nein'},
    ]
  },{
    l: 5,
    parentAnsId: [245],
    q: 'Kann mittels eines Schriftstückes die vertraglihce Zusicher bewiesen werden?',
    a: [
      { id: 103, type: 'icon-ja', icon: 'img/ja.png', text: 'Ja'},
      { id: 104, type: 'icon-nein', icon: 'img/nein.png', text: 'Nein'},
    ]
  },{
    l: 5,
    parentAnsId: [125],
    q: 'Wo ist die<br/> Ursache des Mangels?',
    a: [
      { id: 105, type: 'icon-sm-2', icon: 'icon/096.png', text: 'Haarrisse an der Wand'},
      { id: 106, type: 'icon-sm-2', icon: 'icon/097.png', text: 'Wasserschaden'},
      { id: 107, type: 'icon-sm-2', icon: 'icon/098.png', text: 'Keine Neutapezierung nach Entfernung der verschimmelten Tapete'},
      { id: 108, type: 'icon-sm-2', icon: 'icon/099.png', text: 'Schwarzverfärbung der Tapete'},
    ]
  }

  /* Sub Questions 2 end*/

  /* Sub Questions 3 start*/
  ,{
    l: 5,
    parentAnsId: [260, 261, 262, 263, 264, 265, 399, 400, 401],
    q: 'Findet der Lärm auch in der Zeit zwischen 22:00 und 6:00 Uhr oder an Sonn- oder Feiertagen statt?',
    a: [
      { id: 109, type: 'icon-ja', icon: 'img/ja.png', text: 'Ja'},
      { id: 110, type: 'icon-nein', icon: 'img/nein.png', text: 'Nein'},
    ]
  },{
    l: 5,
    parentAnsId: [266, 267, 270, 271, 272, 273],
    q: 'Findet die Belästigung in einem stark ausgeprägten Maß statt?',
    a: [
      { id: 111, type: 'icon-ja', icon: 'img/ja.png', text: 'Ja'},
      { id: 112, type: 'icon-nein', icon: 'img/nein.png', text: 'Nein'},
    ]
  },{
    l: 5,
    parentAnsId: [276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 393, 394, 395, 396, 397, 398],
    q: 'Findet der Lärm auch in der Zeit zwischen 22:00 und 6:00 Uhr oder an Sonn- oder Feiertagen statt?',
    a: [
      { id: 113, type: 'icon-ja', icon: 'img/ja.png', text: 'Ja'},
      { id: 114, type: 'icon-nein', icon: 'img/nein.png', text: 'Nein'},
    ]
  },{
    l: 5,
    parentAnsId: [287, 288, 289, 290, 291, 292, 293, 294],
    q: 'Steht ein Fahrstuhl als Ersatz zur Verfügung?',
    a: [
      { id: 115, type: 'icon-ja', icon: 'img/ja.png', text: 'Ja'},
      { id: 116, type: 'icon-nein', icon: 'img/nein.png', text: 'Nein'},
    ]
  },{
    l: 5,
    parentAnsId: [313],
    q: 'Wo ist die<br/> Ursache des Mangels?',
    a: [
      { id: 117, type: 'icon-sm-2', icon: 'icon/319.png', text: 'Gemeinschaftswaschmaschine entfernt'},
      { id: 118, type: 'icon-sm-2', icon: 'icon/320.png', text: 'Gemeinschaftswaschmaschine defekt'},
      { id: 119, type: 'icon-sm-2', icon: 'icon/326.png', text: 'Bodenabfluss im Gemeinschaftsraum defekt'},
      { id: 120, type: 'icon-sm-2', icon: 'icon/323.png', text: 'Nutzungsentzug Waschraum'},
    ]
  },{
    l: 5,
    parentAnsId: [314],
    q: 'Wo ist die<br/> Ursache des Mangels?',
    a: [
      { id: 121, type: 'icon-sm-2', icon: 'icon/323.png', text: 'Nutzungsentzug des Trockenraums'},
    ]
  },{
    l: 5,
    parentAnsId: [315],
    q: 'Wo ist die<br/> Ursache des Mangels?',
    a: [
      { id: 122, type: 'icon-sm-2', icon: 'icon/324.png', text: 'Nutzungsentzug des Wasch- und Trockenraums'},
    ]
  },{
    l: 5,
    parentAnsId: [316, 317, 318],
    q: 'Gibt es eine vertragliche Zusicherung, dass der Raum genutzt werden darf?',
    a: [
      { id: 123, type: 'icon-ja', icon: 'img/ja.png', text: 'Ja'},
      { id: 124, type: 'icon-nein', icon: 'img/nein.png', text: 'Nein'},
    ]
  },{
    l: 5,
    parentAnsId: [330],
    q: 'Wurde eine andere Möglichkeit zum Fernsehempfang breitgestellt, z.B. Satellit?',
    a: [
      { id: 125, type: 'icon-ja', icon: 'img/ja.png', text: 'Ja'},
      { id: 126, type: 'icon-nein', icon: 'img/nein.png', text: 'Nein'},
    ]
  },{
    l: 5,
    parentAnsId: [331],
    q: 'Wo ist die<br/> Ursache des Mangels?',
    a: [
      { id: 127, type: 'icon-sm-2', icon: 'icon/325.png', text: 'sehr schlechter Fernsehempfang'},
      { id: 128, type: 'icon-sm-2', icon: 'icon/328.png', text: 'kein Empfang von ausländischen Fernsehsendern'},
    ]
  },{
    l: 5,
    parentAnsId: [332, 333],
    q: 'Wurde eine Hilfslösung angeborten, z.B. die Übernahme von Handykosten?',
    a: [
      { id: 129, type: 'icon-ja', icon: 'img/ja.png', text: 'Ja'},
      { id: 130, type: 'icon-nein', icon: 'img/nein.png', text: 'Nein'},
    ]
  },{
    l: 5,
    parentAnsId: [334, 335],
    q: 'Wurde eine andere Möglichkeit zum Fernsehempfang bereitgestellt, z.B. Kabelfernsehen?',
    a: [
      { id: 131, type: 'icon-ja', icon: 'img/ja.png', text: 'Ja'},
      { id: 132, type: 'icon-nein', icon: 'img/nein.png', text: 'Nein'},
    ]
  },{
    l: 5,
    parentAnsId: [336, 338, 339, 340, 342],
    q: 'Handelt es sich bei den Baumaßnahmen um eine energetische Modernisierung?',
    a: [
      { id: 133, type: 'icon-ja', icon: 'img/ja.png', text: 'Ja'},
      { id: 134, type: 'icon-nein', icon: 'img/nein.png', text: 'Nein'},
    ]
  }
  /* Sub Questions 3 end*/

  /* Sub Questions 4 start*/
  ,{
    l: 5,
    parentAnsId: [383, 384, 388, 389, 390, 392],
    q: 'Ist der Baulärm entweder als unwesentlich oder als ortsüblich einzustufen?',
    a: [
      { id: 135, type: 'icon-ja', icon: 'img/ja.png', text: 'Ja'},
      { id: 136, type: 'icon-nein', icon: 'img/nein.png', text: 'Nein'},
    ]
  },{
    l: 5,
    parentAnsId: [385, 402, 403, 404],
    q: 'War zum Zeitpunkt des Einzuges absehbar, dass auf dem Gelände Bauarbeiten stattfinden werden?',
    a: [
      { id: 137, type: 'icon-ja', icon: 'img/ja.png', text: 'Ja'},
      { id: 138, type: 'icon-nein', icon: 'img/nein.png', text: 'Nein'},
    ]
  },{
    l: 5,
    parentAnsId: [421, 422],
    q: 'Sind die Ungeziefer nur gelegentlich im Hof zu sehen/hören?',
    a: [
      { id: 139, type: 'icon-ja', icon: 'img/ja.png', text: 'Ja'},
      { id: 140, type: 'icon-nein', icon: 'img/nein.png', text: 'Nein'},
    ]
  }
  /* Sub Questions 4 end*/

  /* Added Later */
  ,{
    l: 5,
    parentAnsId: [443],
    q: 'Ist der Schimmel feucht?',
    a: [
      { id: 141, type: 'icon-ja', icon: 'img/ja.png', text: 'Ja'},
      { id: 142, type: 'icon-nein', icon: 'img/nein.png', text: 'Nein'},
    ]
  },{
    l: 5,
    parentAnsId: [352],
    q: 'Leider können wir Ihnen in diesem Fall nicht weiterhelfen',
    a: [
      { id: 0, type: 'icon-sm-2', icon: 'icon/394.png', text: 'zurück zur Startseite'},
    ]
  }
  // ,{
  //   l: 5,
  //   parentAnsId: [352],
  //   q: 'Wurde der Mangel im Übergabeprotokoll vermerkt und akzeptiert?',
  //   a: [
  //     { id: 147, type: 'icon-ja', icon: 'img/ja.png', text: 'Ja'},
  //     { id: 148, type: 'icon-nein', icon: 'img/nein.png', text: 'Nein'},
  //   ]
  // }
  ,{
    l: 5,
    parentAnsId: [353],
    q: 'Hat der Vermieter bereits Kenntnis vom Mangel?',
    a: [
      { id: 149, type: 'icon-ja', icon: 'img/ja.png', text: 'Ja'},
      { id: 150, type: 'icon-nein', icon: 'img/nein.png', text: 'Nein'},
    ]
  }
];
