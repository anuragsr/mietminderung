var l = console.log.bind(window.console);
window.addEventListener("dragover", function(e) {
  e && e.preventDefault();
}, false);

window.addEventListener("drop", function(e) {
  e && e.preventDefault();
}, false);

function movebar(selector){
  $(selector).animate( { left: $('.b-load').width() }, 1000, function(){
    $(selector).css("left", -($(selector).width()) + "px");
    movebar(selector);
  });
}

$(function(){

  // $(".down-btn").click(function(){
  //   $(window).scrollTop(document.documentElement.scrollHeight);
  // });

  var moreArr = $(".question .float-right").toArray();
  $(".question .float-right").on("click", function(){
    var answer = $($(".question .ans")[moreArr.indexOf(this)]);
    if(answer.hasClass("active")){
      answer.removeClass("active");
      answer.animate({ height: 0 });
    }else{
      answer.addClass("active");
      answer.animate({ height: answer.get(0).scrollHeight });
    }
  });

})

angular
.module('qApp', ['rzModule'])
.controller('qCtrl', function($scope, $http, $timeout) {
  // l("Hello")
  var questions = [
    // Level 1 - 1 Question
    [
      {
        l: 1,
        id: 1,
        q: 'Wo tritt ein Grund für Mietminderung auf?',
        a: [
          { id: 1, type: 'icon', icon: 'img/q1-op1.png', text: 'Wohnung'},
          { id: 2, type: 'icon', icon: 'img/q1-op2.png', text: 'Gebäude'},
          { id: 3, type: 'icon', icon: 'img/q1-op3.png', text: 'Umgebung'},
        ]
      }
    ],

    // Level 2 - 3 Questions
    [
      // Question id - 1
      {
        l: 2,
        id: 2,
        parentAnsId: [1],
        q: 'Wo ist die<br/> Ursache des Mangels?',
        a: [
          { id: 1, type: 'icon-sm', icon: 'icon/364.png', text: 'Arbeitszimmer'},
          { id: 2, type: 'icon-sm', icon: 'icon/007.png', text: 'Badezimmer'},
          { id: 3, type: 'icon-sm', icon: 'icon/366.png', text: 'Flur / Eingangsbereich'},
          { id: 4, type: 'icon-sm', icon: 'icon/367.png', text: 'Gästezimmer'},
          { id: 5, type: 'icon-sm', icon: 'icon/368.png', text: 'Kinderzimmer'},
          { id: 6, type: 'icon-sm', icon: 'icon/369.png', text: 'Küche'},
          { id: 7, type: 'icon-sm', icon: 'icon/370.png', text: 'Schlafzimmer'},
          { id: 8, type: 'icon-sm', icon: 'icon/371.png', text: 'Wohnzimmer'},
          { id: 9, type: 'icon-sm', icon: 'icon/372.png', text: 'Balkon / Terrasse'},
          { id: 10, type: 'icon-sm', icon: 'icon/373.png', text: 'Gesamte Wohnung'},
          { id: 11, type: 'icon-sm', icon: 'icon/038.png', text: 'Dach'},
          { id: 12, type: 'icon-sm', icon: 'icon/375.png', text: 'Keller'},
        ]
      },{
        l: 2,
        id: 3,
        parentAnsId: [2],
        q: 'Wo ist die<br/> Ursache des Mangels?',
        a: [
          { id: 13, type: 'icon-sm', icon: 'icon/165.png', text: 'Störung durch Nachbarn'},
          { id: 14, type: 'icon-sm', icon: 'icon/180.png', text: 'Störung durch Gewerbe im Haus'},
          { id: 15, type: 'icon-sm', icon: 'icon/377.png', text: 'Fahrstuhl'},
          { id: 16, type: 'icon-sm', icon: 'icon/378.png', text: 'Treppenhaus'},
          { id: 17, type: 'icon-sm', icon: 'icon/380.png', text: 'Gemeinschaftsräume'},
          { id: 18, type: 'icon-sm', icon: 'icon/366.png', text: 'Eingangsbereich'},
          { id: 19, type: 'icon-sm', icon: 'icon/328.png', text: 'Telefon- und Fernsehempfang'},
          { id: 20, type: 'icon-sm', icon: 'icon/215.png', text: 'Bauarbeiten am Haus'},
          { id: 21, type: 'icon-sm', icon: 'icon/209.png', text: 'Bauliche Veränderung'},
          { id: 22, type: 'icon-sm', icon: 'icon/055.png', text: 'Fassade'},
          { id: 23, type: 'icon-sm', icon: 'icon/014.png', text: 'Tiere / Schädlinge / Ungeziefer'},
          { id: 24, type: 'icon-sm', icon: 'icon/038.png', text: 'Dach'},
          { id: 25, type: 'icon-sm', icon: 'icon/375.png', text: 'Keller'},
          { id: 26, type: 'icon-sm', icon: 'icon/059.png', text: 'Garage'},
          { id: 27, type: 'icon-sm', icon: 'icon/049.png', text: 'Sonstiges'},
        ]
      },{
        l: 2,
        id: 4,
        parentAnsId: [3],
        q: 'Wo ist die<br/> Ursache des Mangels?',
        a: [
          { id: 28, type: 'icon-sm', icon: 'icon/215.png', text: 'Bauarbeiten in der Umgebung'},
          { id: 29, type: 'icon-sm', icon: 'icon/064.png', text: 'Geräuchbelästigung aus der Umgebung'},
          { id: 30, type: 'icon-sm', icon: 'icon/022.png', text: 'Garten'},
          { id: 31, type: 'icon-sm', icon: 'icon/381.png', text: 'Hof'},
          { id: 32, type: 'icon-sm', icon: 'icon/379.png', text: 'Müllplatz'},
          { id: 33, type: 'icon-sm', icon: 'icon/072.png', text: 'PKW Stellplatz'},
          { id: 34, type: 'icon-sm', icon: 'icon/059.png', text: 'Garage'},
        ]
      }
    ],
  ];

  questions.push(ql3);
  questions.push(ql4);
  questions.push(ql5);
  questions.push(ql6);
  questions.push(ql7);
  questions.push(ql8);
  questions.push(ql9);
  questions.push(ql10);
  questions.push(ql11);
  questions.push(ql12);
  questions.push(ql13);
  questions.push(ql14);
  questions.push(ql15);
  questions.push(ql16);
  questions.push(ql17);
  questions.push(ql18);
  questions.push(ql19);
  // questions.push(ql20);
  // l(questions)

  // After this, if yes -> 9 - 15.2, else 12 -> 15.2

  var answers = [];

  function afterQuestion(){
    if(angular.isUndefined($scope.currQues)){
      $scope.currQues = {
        l: "final",
        q: 'Wie hoch ist Ihre Bruttomiete im Monat?',
        a: [ { type: 'rent' } ]
      }
      // l(answers)
      $scope.progress = 96;
    }else if(!angular.isUndefined($scope.currQues.l)){
      var ratio = $scope.currQues.l/18;
      if(ratio >= 1){
        ratio-= .05;
      }
      $scope.progress = Math.round(100 * ratio);
    }

    if(
      !angular.isUndefined($scope.currQues) &&
      ($scope.currQues.a[0].type == 'number' || $scope.currQues.a[0].type == 'rent')
    ){
      $timeout(function() {
        $scope.$broadcast('rzSliderForceRender')
      })

      if($scope.currQues.a[0].type == 'rent'){
        $scope.progress = 96;
      }
    }
    $(window).scrollTop(0);
  }

  function JStomySqldate(date){
    if(date == null || date == '')
      return null;
    else
      return date.toISOString().slice(0, 10);
  }

  $scope.currIdx = 0;
  $scope.currQues = questions[$scope.currIdx][0];

  $scope.prevQuestion = function(){
    $scope.currIdx--;
    $scope.currQues = answers[answers.length - 1].q;
    answers.pop();
    afterQuestion();
  }

  $scope.doNextQuestion = function(currQues, ans, $event){
    $event.stopPropagation();
    $scope.nextQuestion(currQues, ans, true);
  }

  $scope.nextQuestion = function(currQues, ans, isDateOrRange){
    if(ans.text == "zurück zur Startseite"){
      $scope.resetQuestions();
      return;
    }

    if(
      (ans.type !== "icon-date" && ans.type !== "icon-date-2" && ans.type !== "number") ||
      ((ans.type === "icon-date" || ans.type === "icon-date-2" || ans.type === "number") && isDateOrRange)
    ){
      answers.push({
        q: currQues,
        a: ans
      });
      $scope.currIdx++;
      var qArr = questions[$scope.currIdx].filter(function(ques){
        return ques.parentAnsId.indexOf(ans.id) > -1;
      })
      // l(qArr)
      $scope.currQues = {};
      $scope.currQues = qArr[0];
      afterQuestion();
    }else{
      return;
    }
  }

  $scope.resetQuestions = function(){
    $scope.inpObj0 = {
      value: 600,
      options: {
        floor: -400,
        ceil: 4500,
        step: 10,
        minLimit: 200,
        maxLimit: 4000,
        showSelectionBar: true,
        hideLimitLabels: true,
        translate: function(value){
          return '<div class="area-ctn b2">' + value + '€</div>';
        }
      }
    };
    $scope.inpObj1 = { name: "", email: "", ph: "" };
    $scope.inpObj2 = { street: "", city: "", postcode: "" };
    $scope.inpObj3 = { notes: "", draggedFiles: [], chosenFiles: [] };
    answers.length = 0;
    $scope.currIdx = 0;
    $scope.currQues = questions[$scope.currIdx][0];
    afterQuestion();
  }

  $scope.goToUpload = function(){
    answers.push({
      q: $scope.currQues,
      a: $scope.inpObj0
    })
    $scope.currIdx++;
    $scope.progress = 97;
    $scope.currQues = {
      q: 'Dokumentation und Bild hochladen',
      a: [ { type: "upl"} ]
    }
    $(window).scrollTop(0);
  }

  $scope.goToNameEmail = function(){
    answers.push({
      q: $scope.currQues,
      a: $scope.inpObj2
    })
    $scope.currIdx++;
    $scope.progress = 98;
    $scope.currQues = {
      q: 'Danke für die Antwort<br/>Bitte geben Sie unten Ihre Daten ein',
      a: [ { type: "last"} ]
    }
    $(window).scrollTop(0);
  }

  $scope.goToAddr = function(){
    answers.push({
      q: $scope.currQues,
      a: $scope.inpObj1
    })
    $scope.currIdx++;
    $scope.progress = 99;
    $scope.currQues = {
      q: 'Bitte geben Sie Ihre Adresse ein',
      a: [ { type: "addr"} ]
    }
    $(window).scrollTop(0);
  }

  function uploadComplete(evt){
    l(evt.target.response)
    // var data = JSON.parse(evt.target.response);
    // l(data)
    $scope.$apply(function(){
      $scope.progress = 100;
      $scope.currQues = {
        q: '&nbsp;',
        a: [ { type: "thank"} ]
      }
    });
    $(window).scrollTop(0);
  }

  function uploadProgress(evt) {
    $scope.$apply(function(){
      if (evt.lengthComputable) {
        $scope.upProg = Math.round(evt.loaded * 100 / evt.total)
      } else {
        $scope.upProg = 0;
      }

      if($scope.upProg == 100){
        movebar('.b-bar')
      }
      // l($scope.upProg)
    })
  }

  function uploadFailed(evt) {
    l("There was an error attempting to upload the file.")
  }

  function uploadCanceled(evt) {
    l("The upload has been canceled by the user or the browser dropped the connection.")
  }

  $scope.processData = function(){
    $(window).scrollTop(0);
    $scope.currQues = {
      q: "Bitte warten Sie, während Ihre Antwort bearbeitet wird",
      a: [ { type: "wait" } ]
    }

    $scope.upProg = 0;
    var tmpAns = [];
    var fd = new FormData();
    var xhr = new XMLHttpRequest();
    var user = {
      name: $scope.inpObj1.name,
      email: $scope.inpObj1.email,
			phone: $scope.inpObj1.ph,
      street: $scope.inpObj2.street,
      city: $scope.inpObj2.city,
      postcode: $scope.inpObj2.postcode,
      notes: $scope.inpObj3.notes,
    };
    fd.append("user", angular.toJson(user));

    answers.forEach(function(obj){
      if(obj.a.type == 'icon-date'){
        obj.a.text = JStomySqldate(obj.a.val);
      }else if(obj.a.type == 'icon-date-2'){
        obj.a.text = "From - " + JStomySqldate(obj.a.start) + ", To - " + JStomySqldate(obj.a.end);
      }else if(obj.a.type == 'number'){
        if(obj.a.skip){
          obj.a.text = obj.a.value + " Quadratmetern";
        }else if(obj.a.showInfo){
          var currVal = obj.a.valArr[obj.a.value - 1];
          obj.a.text = currVal.key + " " + currVal.value;
        }
      }

      if(obj.q.l == "final"){
        obj.q.l = tmpAns.length + 1;
        obj.a = { text: $scope.inpObj0.value + " €" };
      }

      if(!angular.isUndefined(obj.q.l)){
        tmpAns.push(obj)
      }
    });
    fd.append("ques", angular.toJson(tmpAns));

    // Add the images if any
    if($scope.inpObj3.chosenFiles.length){
      // l("Chosen Upload")
      $scope.inpObj3.chosenFiles.forEach(function(x){
        fd.append("files[]", x);
      })
    }

    if($scope.inpObj3.draggedFiles.length){
      // l("Dragged Upload")
      $scope.inpObj3.draggedFiles.forEach(function(x){
        fd.append("files[]", x);
      })
    }

    xhr.upload.addEventListener("progress", uploadProgress, false);
    xhr.addEventListener("load", uploadComplete, false);
    xhr.addEventListener("error", uploadFailed, false);
    xhr.addEventListener("abort", uploadCanceled, false);
    xhr.open("POST", "backend/process.php");
    xhr.send(fd);

  }

  $scope.inpObj0 = {
    value: 600,
    options: {
      floor: -400,
      ceil: 4500,
      step: 10,
      minLimit: 200,
      maxLimit: 4000,
      showSelectionBar: true,
      hideLimitLabels: true,
      translate: function(value){
        return '<div class="area-ctn b2">' + value + '€</div>';
      }
    }
  };
  $scope.inpObj1 = { name: "", email: "" };
  $scope.inpObj2 = { street: "", city: "", postcode: "" };
  $scope.inpObj3 = { notes: "", draggedFiles: [], chosenFiles: [] };

  // $scope.inpObj1 = { name: "Anurag Srivastava", email: "anurag.131092@gmail.com" };
  // $scope.inpObj2 = { street: "Street 1", city: "Berlin", postcode: "010192" };
  // $scope.inpObj3 = { notes: "as", draggedFiles: [], chosenFiles: [] };

})
.filter('trustedHTML', function($sce){
  return function(text) {
    return $sce.trustAsHtml(text);
  }
})
.directive("dz", function($parse, $filter) {
  var fileArr = [];

  return {
    restrict : "A",
    link: function (scope, elem, attrs) {
      var model = $parse(attrs.dz);
      var modelSetter = model.assign;

      elem.bind('dragenter', function(evt) {
        // l("dragenter")
        $(".dropzone").css("border-color", "#1895ff")
      })

      elem.bind('dragleave', function(evt) {
        // l("dragleave")
        $(".dropzone").css("border-color", "rgba(0,0,0,.1)")
      })

      elem.bind('drop', function(evt) {
        // l("drop")
        $(".dropzone").css("border-color", "rgba(0,0,0,.1)")
        evt.stopPropagation();
        evt.preventDefault();

        var length = evt.originalEvent.dataTransfer.items.length;
        for (var i = 0; i < length; i++) {
          var item = evt.originalEvent.dataTransfer.items[i].webkitGetAsEntry();
          if (item && item.isFile) {
            item.file(function(file) {
              if(
                // (file.type === "image/png" || file.type === "image/jpeg") &&
                ($filter('filter')(fileArr, {name: file.name}).length === 0)
              ){
                fileArr.push(file)
                // l(fileArr)
                scope.$apply(function(){ modelSetter(scope, fileArr) })
                // l(scope.inpObj3)
              }
            })
          }
        }

      })
    }
  }
})
.directive('fileModel', function ($parse, $filter) {
  var fileArr = [];

  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      var model = $parse(attrs.fileModel);
      var modelSetter = model.assign;

      element.bind('change', function(){
        // l(element[0].files)
        var obj = element[0].files;
        Object.keys(obj).forEach(function(x){
          var file = obj[x];
          fileArr.push(file)
          // l(fileArr)
          scope.$apply(function(){ modelSetter(scope, fileArr) })
          // l(scope.inpObj3)
          // if($filter('filter')(fileArr, {name: file.name}).length === 0){
          // }
        })
      });
    }
  }
})

$(function(){
  var fuxedheader = $('body > .navbar').clone()
  fuxedheader.addClass('fixed-top');
  fuxedheader.find('.navbar-toggler').attr('data-target', '#navContentfixed');
  fuxedheader.find('.collapse.navbar-collapse').attr('id', 'navContentfixed');
  fuxedheader.insertAfter('body > .navbar');
  function scrollFixedNav(){
      var scroll = $(window).scrollTop();
      var pointofcroll = $('#prozess').offset().top;
      if (scroll >= pointofcroll) {
          $("body").addClass("scrollheader");
      } else {
          $("body").removeClass("scrollheader");
      }
  };
  scrollFixedNav();
  $(window).on("scroll", function(){
    scrollFixedNav();
  });
  
  $('a[href*="#"]').on('click',function(e) {
   e.preventDefault();
   var target = this.hash;
   var $target = $(target);
   $('html, body').stop().animate({
    'scrollTop': $target.offset().top
   }, 900, 'swing', function () {
    window.location.hash = target;
   });
  });
})
