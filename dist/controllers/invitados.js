var invitadosApp = angular.module('invitadosApp', ['hmTouchevents']);

invitadosApp.factory('invitadoService', function(){
  var myInvitadosService = {};
  json_guest = $.parseJSON(window.localStorage.getItem("invitados"));

  myInvitadosService.addInvitado = function(invitado){
    json_guest.invitados.push(invitado);
    window.localStorage.setItem("invitados", JSON.stringify(json_guest));
    if(typeof window.localStorage.getItem("NumeroDeInvitados")=='object'|| window.localStorage.getItem("NumeroDeInvitados")<=0){
      window.localStorage.setItem("NumeroDeInvitados", 1);
    }else{
      window.localStorage.setItem("NumeroDeInvitados", parseInt(window.localStorage.getItem("NumeroDeInvitados"))+1);
    }
  };


  myInvitadosService.removeInvitado = function(index){
      json_guest.invitados.splice(index, 1);
      window.localStorage.setItem("invitados", JSON.stringify(json_guest));
      window.localStorage.setItem("NumeroDeInvitados", parseInt(window.localStorage.getItem("NumeroDeInvitados"))-1);
  };

  myInvitadosService.updateInvitado = function(index, newInvitado){
    invitado = json_guest.invitados[index];

    invitado.nombre = newInvitado.nombre;
    invitado.invitados = newInvitado.invitados;
    invitado.confirmado = newInvitado.confirmado;
    invitado.regalo = newInvitado.regalo;
    invitado.tarjeta = newInvitado.tarjeta;

    json_guest.invitados[index] = invitado;

    window.localStorage.setItem("invitados", JSON.stringify(json_guest));
  };

  return myInvitadosService;

});

// Index: http://localhost/views/invitados/index.html

invitadosApp.controller('IndexCtrl', function ($scope) {

  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });


  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/invitados/show.html?id="+id);
    steroids.layers.push(webView);
  };

  // Funcion que abre la vista para crear un nuevo invitado
  $scope.new = function() {
    webView = new steroids.views.WebView("/views/invitados/new.html");
    steroids.layers.push(webView);
  };

    // Inicializa el json si no hay datos
  if(window.localStorage.getItem("invitados") == null){
    window.localStorage.setItem("invitados", "{\"invitados\":[]}");
  }

  // Convierte el string guardado a json
  json_guest = $.parseJSON(window.localStorage.getItem("invitados"));
  if(typeof window.localStorage.getItem("NumeroDeInvitados") == 'object'){
    numInvitados = 0;
  }else{
    numInvitados = parseInt(window.localStorage.getItem("NumeroDeInvitados"));
  }
  // Obtiene todos los invitados y los coloca en la variable de invitados 
  $scope.invitados = json_guest.invitados;
  var suma=0;
  for (var x=0;x<json_guest.invitados.length;x++){
    invitados=json_guest.invitados[x].invitados;
    if(invitados==null){invitados=1;}
    invitados=parseInt(invitados);
    suma+=invitados;
  }
  $scope.numeroInvitados = suma;


});


// Show: http://localhost/views/invitados/show.html?id=<id>

invitadosApp.controller('ShowCtrl', function ($scope, invitadoService) {

  $scope.returnToList = function(){
    guestsRetunView = new steroids.views.WebView("/views/invitados/index.html");
    steroids.layers.push({view:guestsRetunView});
    steroids.layers.popAll();
  };

  $scope.index = steroids.view.params.id;

  $scope.invitadoServ = invitadoService;

  json_guest = $.parseJSON(window.localStorage.getItem("invitados"));

  $scope.invitado = json_guest.invitados[steroids.view.params.id];

  $scope.newGuest = {
    "nombre": json_guest.invitados[steroids.view.params.id].nombre,
    "invitados": json_guest.invitados[steroids.view.params.id].invitados,
    "confirmado": json_guest.invitados[steroids.view.params.id].confirmado,
    "regalo": json_guest.invitados[steroids.view.params.id].regalo,
    "tarjeta": json_guest.invitados[steroids.view.params.id].tarjeta
  };

  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });

  });

});


invitadosApp.controller('NewCtrl', function ($scope, invitadoService) {

  $scope.returnToList = function(){
    guestsRetunView = new steroids.views.WebView("/views/invitados/index.html");
    steroids.layers.push({view:guestsRetunView});
    steroids.layers.popAll();
  };

  $scope.newGuest = {};

  $scope.invitadoServ = invitadoService;

  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });


});
