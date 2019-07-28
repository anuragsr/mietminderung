var ql8 =
// Level 8 Questions
[
  {
    l: 8,
    parentAnsId: [1, 6, 15, 16],
    q: 'Hat der Vermieter bereits Kenntnis vom Mangel?',
    a: [
      { id: 1, type: 'icon-ja', icon: 'img/ja.png', text: 'Ja'},
      { id: 2, type: 'icon-nein', icon: 'img/nein.png', text: 'Nein'},
    ]
  },{
    l: 8,
    parentAnsId: [2],
    q: 'Hat eine schriftliche Aufforderung zur Mangelbeseitigung statt gefunden?',
    a: [
      { id: 3, type: 'icon-ja', icon: 'img/ja.png', text: 'Ja'},
      { id: 4, type: 'icon-nein', icon: 'img/nein.png', text: 'Nein'},
    ]
  },{
    l: 8,
    parentAnsId: [5],
    q: 'Leider können wir Ihnen in diesem Fall nicht weiterhelfen',
    a: [
      { id: 0, type: 'icon-sm-2', icon: 'icon/394.png', text: 'zurück zur Startseite'},
    ]
  }
  // {
  //   l: 8,
  //   parentAnsId: [5],
  //   q: 'Wurde der Mangel im Übergabeprotokoll vermerkt und akzeptiert?',
  //   a: [
  //     { id: 5, type: 'icon-ja', icon: 'img/ja.png', text: 'Ja'},
  //     { id: 6, type: 'icon-nein', icon: 'img/nein.png', text: 'Nein'},
  //   ]
  // }
  ,{
    l: 8,
    parentAnsId: [7, 8, 10, 12, 13, 14, 19, 20],
    q: 'Kannten Sie den Mangel bei <br/>Vertragsabschluss oder Einzug?',
    a: [
      { id: 9, type: 'icon-ja', icon: 'img/ja.png', text: 'Ja'},
      { id: 10, type: 'icon-nein', icon: 'img/nein.png', text: 'Nein'},
    ]
  },{
    l: 8,
    parentAnsId: [9],
    q: 'Wurden die Vorgaben eingehalten?',
    a: [
      { id: 11, type: 'icon-ja', icon: 'img/ja.png', text: 'Ja'},
      { id: 12, type: 'icon-nein', icon: 'img/nein.png', text: 'Nein'},
    ]
  },{
    l: 8,
    parentAnsId: [11],
    q: 'Dauert die Modernisierungsmaßnahmen bereits länger als drei Monate an?',
    a: [
      { id: 13, type: 'icon-ja', icon: 'img/ja.png', text: 'Ja'},
      { id: 14, type: 'icon-nein', icon: 'img/nein.png', text: 'Nein'},
    ]
  },{
    l: 8,
    parentAnsId: [3],
    q: 'Wie wurde der Vermieter vom Mangel informiert?',
    a: [
      { id: 15, type: 'icon-sm-2', icon: 'icon/043.png', text: 'telefonisch'},
      { id: 15, type: 'icon-sm-2', icon: 'icon/333.png', text: 'per Brief'},
      { id: 15, type: 'icon-sm-2', icon: 'icon/334.png', text: 'per E-mail'},
      { id: 15, type: 'icon-sm-2', icon: 'icon/335.png', text: 'durch den Hausmeister'},
      { id: 15, type: 'icon-sm-2', icon: 'icon/336.png', text: 'durch anderen Mieter'},
      { id: 15, type: 'icon-sm-2', icon: 'icon/337.png', text: 'Der Mangel beruht auf einer vom Vermieter initiierten Maßnahme'},
      { id: 15, type: 'icon-sm-2', icon: 'icon/009.png', text: 'anderes'},
    ]
  },{
    l: 8,
    parentAnsId: [17],
    q: 'Wann wurde der Vermieter über den Mangel in Kenntnis gesetzt?',
    a: [
      { id: 16, type: 'icon-date', icon: 'img/pl.png', val: new Date()},
    ]
  },{
    l: 8,
    parentAnsId: [4],
    q: 'Für welchen Zeitraum besteht der Mangel?',
    a: [
      { id: 17, type: 'icon-date-2', icon: 'img/pl.png', start: new Date(), end: new Date()},
    ]
  },{
    l: 8,
    parentAnsId: [18],
    q: 'Welche Folgen hat der Mietmangel für Sie?',
    a: [
      { id: 18, type: 'icon-sm-2', icon: 'icon/393.png', text: 'Die gesamte Wohnung ist nicht nutzbar'},
      { id: 18, type: 'icon-sm-2', icon: 'icon/339.png', text: 'Die Wohnung ist eingeschränkt nutzbar'},
      { id: 18, type: 'icon-sm-2', icon: 'icon/340.png', text: 'Die Qualität des Wohnens ist erheblich eingeschränkt'},
      { id: 18, type: 'icon-sm-2', icon: 'icon/341.png', text: 'Die Qualität des Wohnens ist unerheblich eingeschränkt'},
      { id: 18, type: 'icon-sm-2', icon: 'icon/342.png', text: 'keine Einschränkungen'},
    ]
  }

  /*Added Later*/
  ,{
    l: 8,
    parentAnsId: [22],
    q: 'Wie hat der Vermieter auf die Mangelanzeige reagiert?',
    a: [
      { id: 21, type: 'icon-sm-2', icon: 'icon/382.png', text: 'keine Reaktion'},
      { id: 21, type: 'icon-sm-2', icon: 'icon/344.png', text: 'Beseitigung wurde abgelehnt'},
      { id: 21, type: 'icon-sm-2', icon: 'icon/345.png', text: 'Beseitigung wurde angekündigt'},
      { id: 21, type: 'icon-sm-2', icon: 'icon/346.png', text: 'Beseitigung ist im Gange'},
      { id: 21, type: 'icon-sm-2', icon: 'icon/347.png', text: 'Mangel wurde bereits beseitigt'},
    ]
  },{
    l: 8,
    parentAnsId: [23],
    q: 'Haben Sie die Miete bereits unter Vorbehalt gemindert?',
    a: [
      { id: 23, type: 'icon-ja', icon: 'img/ja.png', text: 'Ja'},
      { id: 23, type: 'icon-nein', icon: 'img/nein.png', text: 'Nein'},
    ]
  }
];
