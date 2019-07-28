var ql12 =
// Level 12 Questions
[
  {
    l: 12,
    parentAnsId: [3, 4],
    q: 'Hat der Vermieter bereits Kenntnis vom Mangel?',
    a: [
      { id: 1, type: 'icon-ja', icon: 'img/ja.png', text: 'Ja'},
      { id: 2, type: 'icon-nein', icon: 'img/nein.png', text: 'Nein'},
    ]
  },{
    l: 12,
    parentAnsId: [1],
    q: 'Wie wurde der Vermieter vom Mangel informiert?',
    a: [
      { id: 3, type: 'icon-sm-2', icon: 'icon/043.png', text: 'telefonisch'},
      { id: 3, type: 'icon-sm-2', icon: 'icon/333.png', text: 'per Brief'},
      { id: 3, type: 'icon-sm-2', icon: 'icon/334.png', text: 'per E-mail'},
      { id: 3, type: 'icon-sm-2', icon: 'icon/335.png', text: 'durch den Hausmeister'},
      { id: 3, type: 'icon-sm-2', icon: 'icon/336.png', text: 'durch anderen Mieter'},
      { id: 3, type: 'icon-sm-2', icon: 'icon/337.png', text: 'Der Mangel beruht auf einer vom Vermieter initiierten Maßnahme'},
      { id: 3, type: 'icon-sm-2', icon: 'icon/009.png', text: 'anderes'},
    ]
  },{
    l: 12,
    parentAnsId: [5],
    q: 'Wann wurde der Vermieter über den Mangel in Kenntnis gesetzt?',
    a: [
      { id: 4, type: 'icon-date', icon: 'img/pl.png', val: new Date()},
    ]
  },{
    l: 12,
    parentAnsId: [6],
    q: 'Wie hat der Vermieter auf die Mangelanzeige reagiert?',
    a: [
      { id: 5, type: 'icon-sm-2', icon: 'icon/382.png', text: 'keine Reaktion'},
      { id: 5, type: 'icon-sm-2', icon: 'icon/344.png', text: 'Beseitigung wurde abgelehnt'},
      { id: 5, type: 'icon-sm-2', icon: 'icon/345.png', text: 'Beseitigung wurde angekündigt'},
      { id: 5, type: 'icon-sm-2', icon: 'icon/346.png', text: 'Beseitigung ist im Gange'},
      { id: 5, type: 'icon-sm-2', icon: 'icon/347.png', text: 'Mangel wurde bereits beseitigt'},
    ]
  },{
    l: 12,
    parentAnsId: [7, 2],
    q: 'Für welchen Zeitraum besteht der Mangel?',
    a: [
      { id: 6, type: 'icon-date-2', icon: 'img/pl.png', start: new Date(), end: new Date()},
    ]
  },{
    l: 12,
    parentAnsId: [8],
    q: 'Welche Folgen hat der Mietmangel für Sie?',
    a: [
      { id: 7, type: 'icon-sm-2', icon: 'icon/393.png', text: 'Die gesamte Wohnung ist nicht nutzbar'},
      { id: 7, type: 'icon-sm-2', icon: 'icon/339.png', text: 'Die Wohnung ist eingeschränkt nutzbar'},
      { id: 7, type: 'icon-sm-2', icon: 'icon/340.png', text: 'Die Qualität des Wohnens ist erheblich eingeschränkt'},
      { id: 7, type: 'icon-sm-2', icon: 'icon/341.png', text: 'Die Qualität des Wohnens ist unerheblich eingeschränkt'},
      { id: 7, type: 'icon-sm-2', icon: 'icon/342.png', text: 'keine Einschränkungen'},
    ]
  },{
    l: 12,
    parentAnsId: [9],
    q: 'Haben Sie die Miete bereits unter Vorbehalt gemindert?',
    a: [
      { id: 9, type: 'icon-ja', icon: 'img/ja.png', text: 'Ja'},
      { id: 9, type: 'icon-nein', icon: 'img/nein.png', text: 'Nein'},
    ]
  },{
    l: 12,
    parentAnsId: [10],
    q: 'Leider können wir Ihnen in diesem Fall nicht weiterhelfen',
    a: [
      // { id: 10, type: 'icon-sm-2', icon: 'img/pl.png', text: 'Weiteren Schaden melden'},
      { id: 10, type: 'icon-sm-2', icon: 'icon/394.png', text: 'zurück zur Startseite'},
    ]
  },{
    l: 12,
    parentAnsId: [11],
    q: 'Haben Sie eine Rechtsschutzversicherung?',
    a: [
      { id: 11, type: 'icon-ja', icon: 'img/ja.png', text: 'Ja'},
      { id: 11, type: 'icon-nein', icon: 'img/nein.png', text: 'Nein'},
    ]
  }
  // ,{
  //   l: 12,
  //   parentAnsId: [11, 12],
  //   q: 'Möchten Sie einen weiteren Mangel melden?',
  //   a: [
  //     { id: 11, type: 'icon-sm-2', icon: 'img/pl.png', text: 'weiteren Schaden hinzufügen'},
  //     { id: 11, type: 'icon-sm-2', icon: 'img/pl.png', text: 'Prüfen'},
  //   ]
  // }
]
