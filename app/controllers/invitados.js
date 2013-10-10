var invitadosApp = angular.module('invitadosApp', ['hmTouchevents']);

invitadosApp.factory('invitadoService', function(){
  var myInvitadosService = {};
  json_guest = $.parseJSON(window.localStorage.getItem("invitados"));

  myInvitadosService.addInvitado = function(invitado){
    json_guest.invitados.push(invitado);
    window.localStorage.setItem("invitados", JSON.stringify(json_guest));
  };

  myInvitadosService.removeInvitado = function(index){
    json_guest.invitados.splice(index);
    window.localStorage.setItem("invitados", JSON.stringify(json_guest));
  };

  return myInvitadosService;

});

// Index: http://localhost/views/invitados/index.html

invitadosApp.controller('IndexCtrl', function ($scope) {

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
  // Obtiene todos los invitados y los coloca en la variable de invitados 
  $scope.invitados = json_guest.invitados;

  // -- Native navigation
  steroids.view.navigationBar.show("Invitados");

});


// Show: http://localhost/views/invitados/show.html?id=<id>

invitadosApp.controller('ShowCtrl', function ($scope, invitadoService) {

  $scope.index = steroids.view.params.id;

  $scope.newGuest = {};

  $scope.invitadoServ = invitadoService;

  json_guest = $.parseJSON(window.localStorage.getItem("invitados"));

  $scope.invitado = json_guest.invitados[steroids.view.params.id];

  // -- Native navigation
  steroids.view.navigationBar.show("Invitado: " + $scope.invitado.nombre );

});


invitadosApp.controller('NewCtrl', function ($scope, invitadoService) {
  $scope.newGuest = {};

  $scope.invitadoServ = invitadoService;

  // -- Native navigation
  steroids.view.navigationBar.show("Nuevo invitado");

});
