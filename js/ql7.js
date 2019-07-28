var ql7 =
// Level 7 Questions
[
  /* Sub questions 2 start*/
  {
    l: 7,
    parentAnsId: [1],
    q: 'Leider können wir Ihnen in diesem Fall nicht weiterhelfen',
    a: [
      { id: 0, type: 'icon-sm-2', icon: 'icon/394.png', text: 'zurück zur Startseite'},
    ]
  }
  // ,{
  //   l: 7,
  //   parentAnsId: [1],
  //   q: 'Wurde der Mangel im Übergabeprotokoll vermerkt und akzeptiert?',
  //   a: [
  //     { id: 1, type: 'icon-ja', icon: 'img/ja.png', text: 'Ja'},
  //     { id: 2, type: 'icon-nein', icon: 'img/nein.png', text: 'Nein'},
  //   ]
  // }
  ,{
    l: 7,
    parentAnsId: [2, 45, 51, 52],
    q: 'Hat der Vermieter bereits Kenntnis vom Mangel?',
    a: [
      { id: 3, type: 'icon-ja', icon: 'img/ja.png', text: 'Ja'},
      { id: 4, type: 'icon-nein', icon: 'img/nein.png', text: 'Nein'},
    ]
  },{
    l: 7,
    parentAnsId: [
      3, 4, 12, 14, 15, 16, 17, 20, 21, 22, 23, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
      35, 36, 37, 38, 39, 40, 41, 42, 44
    ],
    q: 'Kannten Sie den Mangel bei <br/>Vertragsabschluss oder Einzug?',
    a: [
      { id: 5, type: 'icon-ja', icon: 'img/ja.png', text: 'Ja'},
      { id: 6, type: 'icon-nein', icon: 'img/nein.png', text: 'Nein'},
    ]
  },{
    l: 7,
    parentAnsId: [5, 6, 7, 8, 9, 10, 11, 18, 19],
    q: 'Handelt es sich lediglich um einen unwesentlichen Mangel, der keine Beeinträchtigung mit sich bringt?',
    a: [
      { id: 7, type: 'icon-ja', icon: 'img/ja.png', text: 'Ja'},
      { id: 8, type: 'icon-nein', icon: 'img/nein.png', text: 'Nein'},
    ]
  },{
    l: 7,
    parentAnsId: [13],
    q: 'Gab es neue Anweisungen zum Lüftungsverhalten nach der baulichen Veränderung?',
    a: [
      { id: 9, type: 'icon-ja', icon: 'img/ja.png', text: 'Ja'},
      { id: 10, type: 'icon-nein', icon: 'img/nein.png', text: 'Nein'},
    ]
  },{
    l: 7,
    parentAnsId: [24],
    q: 'Wurde die energetische Modernisierung drei Monate vorher angekündigt?',
    a: [
      { id: 11, type: 'icon-ja', icon: 'img/ja.png', text: 'Ja'},
      { id: 12, type: 'icon-nein', icon: 'img/nein.png', text: 'Nein'},
    ]
  }
  /* Sub questions 2 end*/

  /* Sub Questions 3 start*/
  ,{
    l: 7,
    parentAnsId: [43],
    q: 'Dauert die Modernisierungsmaßnahmen bereits länger als drei Monaten an?',
    a: [
      { id: 13, type: 'icon-ja', icon: 'img/ja.png', text: 'Ja'},
      { id: 14, type: 'icon-nein', icon: 'img/nein.png', text: 'Nein'},
    ]
  }
  /* Sub questions 3 end*/

  /* Sub Questions 4 start*/
  ,{
    l: 7,
    parentAnsId: [46],
    q: 'Hat eine schriftliche Aufforderung zur Mangelbeseitigung statt gefunden?',
    a: [
      { id: 15, type: 'icon-ja', icon: 'img/ja.png', text: 'Ja'},
      { id: 16, type: 'icon-nein', icon: 'img/nein.png', text: 'Nein'},
    ]
  },{
    l: 7,
    parentAnsId: [47],
    q: 'Wie wurde der Vermieter vom Mangel informiert?',
    a: [
      { id: 17, type: 'icon-sm-2', icon: 'icon/043.png', text: 'telefonisch'},
      { id: 17, type: 'icon-sm-2', icon: 'icon/333.png', text: 'per Brief'},
      { id: 17, type: 'icon-sm-2', icon: 'icon/334.png', text: 'per E-mail'},
      { id: 17, type: 'icon-sm-2', icon: 'icon/335.png', text: 'durch den Hausmeister'},
      { id: 17, type: 'icon-sm-2', icon: 'icon/336.png', text: 'durch anderen Mieter'},
      { id: 17, type: 'icon-sm-2', icon: 'icon/337.png', text: 'Der Mangel beruht auf einer vom Vermieter initiierten Maßnahme'},
      { id: 17, type: 'icon-sm-2', icon: 'icon/009.png', text: 'anderes'},
    ]
  },{
    l: 7,
    parentAnsId: [48],
    q: 'Für welchen Zeitraum besteht der Mangel?',
    a: [
      { id: 18, type: 'icon-date-2', icon: 'img/pl.png', start: new Date(), end: new Date()},
    ]
  }

  /* Sub Questions 4 end*/

  /*Added Later*/
  ,{
    l: 7,
    parentAnsId: [49, 50, 501],
    q: 'Handelt es sich lediglich um einen unwesentlichen Mangel, der keine Beeinträchtigung mit sich bringt?',
    a: [
      { id: 19, type: 'icon-ja', icon: 'img/ja.png', text: 'Ja'},
      { id: 20, type: 'icon-nein', icon: 'img/nein.png', text: 'Nein'},
    ]
  },{
    l: 7,
    parentAnsId: [53],
    q: 'Wann wurde der Vermieter über den Mangel in Kenntnis gesetzt?',
    a: [
      { id: 22, type: 'icon-date', icon: 'img/pl.png', val: new Date()},
    ]
  },{
    l: 7,
    parentAnsId: [54],
    q: 'Welche Folgen hat der Mietmangel für Sie?',
    a: [
      { id: 23, type: 'icon-sm-2', icon: 'icon/393.png', text: 'Die gesamte Wohnung ist nicht nutzbar'},
      { id: 23, type: 'icon-sm-2', icon: 'icon/339.png', text: 'Die Wohnung ist eingeschränkt nutzbar'},
      { id: 23, type: 'icon-sm-2', icon: 'icon/340.png', text: 'Die Qualität des Wohnens ist erheblich eingeschränkt'},
      { id: 23, type: 'icon-sm-2', icon: 'icon/341.png', text: 'Die Qualität des Wohnens ist unerheblich eingeschränkt'},
      { id: 23, type: 'icon-sm-2', icon: 'icon/342.png', text: 'keine Einschränkungen'},
    ]
  }
];
