var invitadosApp = angular.module('invitadosApp', ['hmTouchevents']);

invitadosApp.factory('invitadoService', function(){
  var myInvitadosService = {};
  json_guest = $.parseJSON(window.localStorage.getItem("invitados"));

  myInvitadosService.addInvitado = function(invitado){
    json_guest.invitados.push(invitado);
    window.localStorage.setItem("invitados", JSON.stringify(json_guest));

  };

  myInvitadosService.removeInvitado = function(index){
    json_guest.invitados.splice(index, 1);
    window.localStorage.setItem("invitados", JSON.stringify(json_guest));
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

  //Navigation Bar--
      var imageButton = new steroids.buttons.NavigationBarButton();
      
      //DRAWER--
      var googleView = new steroids.views.WebView( { location: "http://localhost/views/drawerExample/drawer.html" } );

      var myAnimation = new steroids.Animation({
        transition: "fade",
        duration: 0.7,
        curve: "linear"
      });

      function showDrawer() {
        steroids.drawers.show( {
          view: googleView,
          edge: steroids.screen.edges.LEFT,
          keepLoading: true,
          animation: myAnimation
        });
      };

      googleView.preload();

      //--DRAWER

      imageButton.imagePath = "/icons/drawer.png"
      imageButton.onTap = function() {
        showDrawer();
      }
    //--Navigation Bar
  

  var adduserButton = new steroids.buttons.NavigationBarButton();
    adduserButton.imagePath = "/icons/adduser.png"

    adduserButton.onTap = function (){
      webView = new steroids.views.WebView("/views/invitados/new.html");
    steroids.layers.push(webView);
    };

    steroids.view.navigationBar.setButtons({
      left: [imageButton],
      right: [adduserButton],
      overrideBackButton: true
    });
  });

  // var adduserButton = new steroids.buttons.NavigationBarButton();
  //   adduserButton.imagePath =  "/" + steroids.app.path + "/icons/adduser.png";

  //   adduserButton.onTap = function() { 
  //       alert("puchaste a nuevo usuario"); 
  //   };

  //   steroids.view.navigationBar.setButtons({
  //       right: [adduserButton]
  //   });

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

    // var guardarButton = new steroids.buttons.NavigationBarButton();
    // guardarButton.title = "Guardar";

    // guardarButton.onTap = function (){
    //   // invitadoServ.updateInvitado(index, newGuest);
    //   // newGuest = {};
    //   $scope.returnToList();
    //   alert('le puchaste al boton');
    // };

    // steroids.view.navigationBar.setButtons({
    //   right: [guardarButton]
    // });

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

    // var guardarButtonNew = new steroids.buttons.NavigationBarButton();
    // guardarButtonNew.title = "Guardar";

    // guardarButtonNew.onTap = function (){
    //   //$scope.invitadoServ.addInvitado(newGuest);
    //   //$scope.newGuest = {};
    //   $scope.returnToList();
    //   alert('boton presionado');
    // };

    // steroids.view.navigationBar.setButtons({
    //   right: [guardarButtonNew]
    // });

});
