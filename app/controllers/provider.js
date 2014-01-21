var providerApp = angular.module('providerApp', ['ProviderModel', 'hmTouchevents']);

providerApp.config(function($compileProvider){
  $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel):/);
});


providerApp.factory('providersService', ['$http', function(http){
  var myProvidersService = {};
  var misProvedoresJSON = JSON.parse(window.localStorage.getItem("misprovedores"));

  myProvidersService.addProvider = function(id){

    http({method: 'GET', url: 'http://bride2be.com.mx/api/proveedores/single/?id='+id}).
      success(function(data, status, headers, config) {
        switch(steroids.view.params['tipo']){
          case 'ceremonia':
            var flag_done=false;
            var flag_ceremonia=false;
            if (misProvedoresJSON.ceremonia==''){//si el JSON de ceremonia está vacío
              misProvedoresJSON.ceremonia.push(data.result);//se guarda el resultado en el json
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
              flag_done=true;
            }else{//si el json no está vacío
              for(x in misProvedoresJSON.ceremonia){//se recorre cada elemento del json de ceremonia
                if(misProvedoresJSON.ceremonia[x].title == data.result.title){//si el título del elemento a guardar es igual al titulo del elemento del json
                 flag_ceremonia=true;
                 break;
                }
              }
            }
            if(flag_ceremonia==false && flag_done==false){
              misProvedoresJSON.ceremonia.push(data.result);//
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
            }else if(flag_done==false){
              navigator.notification.alert("Proveedor ya guardado anteriormente", function(){}, "Bride2Be");
            }
          break;
          case 'recepcion':
            var flag_done=false;
            var flag_recepcion=false;
            if (misProvedoresJSON.recepcion==''){//si el JSON de recepcion está vacío
              misProvedoresJSON.recepcion.push(data.result);//se guarda el resultado en el json
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
              flag_done=true;
            }else{//si el json no está vacío
              for(x in misProvedoresJSON.recepcion){//se recorre cada elemento del json de recepcion
                if(misProvedoresJSON.recepcion[x].title == data.result.title){//si el título del elemento a guardar es igual al titulo del elemento del json
                 flag_recepcion=true; 
                 break;
                }
              }
            }
            if(flag_recepcion==false && flag_done==false){
              misProvedoresJSON.recepcion.push(data.result);//
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
            }else if(flag_done==false){
              navigator.notification.alert("Proveedor ya guardado anteriormente", function(){}, "Bride2Be");
            }
          break;
          case 'invitaciones':
            var flag_done=false;
            var flag_invitaciones=false;
            if (misProvedoresJSON.invitaciones==''){//si el JSON de invitaciones está vacío
              misProvedoresJSON.invitaciones.push(data.result);//se guarda el resultado en el json
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
              flag_done=true;
            }else{//si el json no está vacío
              for(x in misProvedoresJSON.invitaciones){//se recorre cada elemento del json de invitaciones
                if(misProvedoresJSON.invitaciones[x].title == data.result.title){//si el título del elemento a guardar es igual al titulo del elemento del json
                 flag_invitaciones=true; 
                 break;
                }
              }
            }
            if(flag_invitaciones==false && flag_done==false){
              misProvedoresJSON.invitaciones.push(data.result);//
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
            }else if(flag_done==false){
              navigator.notification.alert("Proveedor ya guardado anteriormente", function(){}, "Bride2Be");
            }
          break;
          case 'flores':
            var flag_done=false;
            var flag_flores=false;
            if (misProvedoresJSON.flores==''){//si el JSON de flores está vacío
              misProvedoresJSON.flores.push(data.result);//se guarda el resultado en el json
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
              flag_done=true;
            }else{//si el json no está vacío
              for(x in misProvedoresJSON.flores){//se recorre cada elemento del json de flores
                if(misProvedoresJSON.flores[x].title == data.result.title){//si el título del elemento a guardar es igual al titulo del elemento del json
                 flag_flores=true; 
                 break;
                }
              }
            }
            if(flag_flores==false && flag_done==false){
              misProvedoresJSON.flores.push(data.result);//
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
            }else if(flag_done==false){
              navigator.notification.alert("Proveedor ya guardado anteriormente", function(){}, "Bride2Be");
            }
          break;
          case 'iluminacion':
            var flag_done=false;
            var flag_iluminacion=false;
            if (misProvedoresJSON.iluminacion==''){//si el JSON de iluminacion está vacío
              misProvedoresJSON.iluminacion.push(data.result);//se guarda el resultado en el json
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
              flag_done=true;
            }else{//si el json no está vacío
              for(x in misProvedoresJSON.iluminacion){//se recorre cada elemento del json de iluminacion
                if(misProvedoresJSON.iluminacion[x].title == data.result.title){//si el título del elemento a guardar es igual al titulo del elemento del json
                 flag_iluminacion=true; 
                 break;
                }
              }
            }
            if(flag_iluminacion==false && flag_done==false){
              misProvedoresJSON.iluminacion.push(data.result);//
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
            }else if(flag_done==false){
              navigator.notification.alert("Proveedor ya guardado anteriormente", function(){}, "Bride2Be");
            }
          break;
          case 'fotos':
            var flag_done=false;
            var flag_fotos=false;
            if (misProvedoresJSON.foto==''){//si el JSON de fotos está vacío
              misProvedoresJSON.foto.push(data.result);//se guarda el resultado en el json
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
              flag_done=true;
            }else{//si el json no está vacío
              for(x in misProvedoresJSON.foto){//se recorre cada elemento del json de fotos
                if(misProvedoresJSON.foto[x].title == data.result.title){//si el título del elemento a guardar es igual al titulo del elemento del json
                 flag_fotos=true; 
                 break;
                }
              }
            }
            if(flag_fotos==false && flag_done==false){
              misProvedoresJSON.fotos.push(data.result);//
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
            }else if(flag_done==false){
              navigator.notification.alert("Proveedor ya guardado anteriormente", function(){}, "Bride2Be");
            }
          break;
          case 'ambientacion':
            var flag_done=false;
            var flag_ambientacion=false;
            if (misProvedoresJSON.ambientacion==''){//si el JSON de ambientacion está vacío
              misProvedoresJSON.ambientacion.push(data.result);//se guarda el resultado en el json
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
              flag_done=true;
            }else{//si el json no está vacío
              for(x in misProvedoresJSON.ambientacion){//se recorre cada elemento del json de ambientacion
                if(misProvedoresJSON.ambientacion[x].title == data.result.title){//si el título del elemento a guardar es igual al titulo del elemento del json
                 flag_ambientacion=true; 
                 break;
                }
              }
            }
            if(flag_ambientacion==false && flag_done==false){
              misProvedoresJSON.ambientacion.push(data.result);//
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
            }else if(flag_done==false){
              navigator.notification.alert("Proveedor ya guardado anteriormente", function(){}, "Bride2Be");
            }
          break;
          case 'elyella':
            var flag_done=false;
            var flag_elyella=false;
            if (misProvedoresJSON.elyella==''){//si el JSON de elyella está vacío
              misProvedoresJSON.elyella.push(data.result);//se guarda el resultado en el json
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
              flag_done=true;
            }else{//si el json no está vacío
              for(x in misProvedoresJSON.elyella){//se recorre cada elemento del json de elyella
                if(misProvedoresJSON.elyella[x].title == data.result.title){//si el título del elemento a guardar es igual al titulo del elemento del json
                 flag_elyella=true; 
                 break;
                }
              }
            }
            if(flag_elyella==false && flag_done==false){
              misProvedoresJSON.elyella.push(data.result);//
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
            }else if(flag_done==false){
              navigator.notification.alert("Proveedor ya guardado anteriormente", function(){}, "Bride2Be");
            }
          break;
          case 'maquillaje':
            var flag_done=false;
            var flag_maquillaje=false;
            if (misProvedoresJSON.maquillaje==''){//si el JSON de maquillaje está vacío
              misProvedoresJSON.maquillaje.push(data.result);//se guarda el resultado en el json
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
              flag_done=true;
            }else{//si el json no está vacío
              for(x in misProvedoresJSON.maquillaje){//se recorre cada elemento del json de maquillaje
                if(misProvedoresJSON.maquillaje[x].title == data.result.title){//si el título del elemento a guardar es igual al titulo del elemento del json
                 flag_maquillaje=true; 
                 break;
                }
              }
            }
            if(flag_maquillaje==false && flag_done==false){
              misProvedoresJSON.maquillaje.push(data.result);//
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
            }else if(flag_done==false){
              navigator.notification.alert("Proveedor ya guardado anteriormente", function(){}, "Bride2Be");
            }
          break;
          case 'luna':
            var flag_done=false;
            var flag_luna=false;
            if (misProvedoresJSON.luna==''){//si el JSON de luna está vacío
              misProvedoresJSON.luna.push(data.result);//se guarda el resultado en el json
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
              flag_done=true;
            }else{//si el json no está vacío
              for(x in misProvedoresJSON.luna){//se recorre cada elemento del json de luna
                if(misProvedoresJSON.luna[x].title == data.result.title){//si el título del elemento a guardar es igual al titulo del elemento del json
                 flag_luna=true; 
                 break;
                }
              }
            }
            if(flag_luna==false && flag_done==false){
              misProvedoresJSON.luna.push(data.result);//
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
            }else if(flag_done==false){
              navigator.notification.alert("Proveedor ya guardado anteriormente", function(){}, "Bride2Be");
            }
          break;
          case 'mesa':
            var flag_done=false;
            var flag_mesa=false;
            if (misProvedoresJSON.mesa==''){//si el JSON de mesa está vacío
              misProvedoresJSON.mesa.push(data.result);//se guarda el resultado en el json
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
              flag_done=true;
            }else{//si el json no está vacío
              for(x in misProvedoresJSON.mesa){//se recorre cada elemento del json de mesa
                if(misProvedoresJSON.mesa[x].title == data.result.title){//si el título del elemento a guardar es igual al titulo del elemento del json
                 flag_mesa=true; 
                 break;
                }
              }
            }
            if(flag_mesa==false && flag_done==false){
              misProvedoresJSON.mesa.push(data.result);//
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
            }else if(flag_done==false){
              navigator.notification.alert("Proveedor ya guardado anteriormente", function(){}, "Bride2Be");
            }
          break;
          case 'musica':
            var flag_done=false;
            var flag_musica=false;
            if (misProvedoresJSON.musica==''){//si el JSON de musica está vacío
              misProvedoresJSON.musica.push(data.result);//se guarda el resultado en el json
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
              flag_done=true;
            }else{//si el json no está vacío
              for(x in misProvedoresJSON.musica){//se recorre cada elemento del json de musica
                if(misProvedoresJSON.musica[x].title == data.result.title){//si el título del elemento a guardar es igual al titulo del elemento del json
                 flag_musica=true; 
                 break;
                }
              }
            }
            if(flag_musica==false && flag_done==false){
              misProvedoresJSON.musica.push(data.result);//
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
            }else if(flag_done==false){
              navigator.notification.alert("Proveedor ya guardado anteriormente", function(){}, "Bride2Be");
            }
          break;
        }
        window.localStorage.setItem("misprovedores", JSON.stringify(misProvedoresJSON));
      }).
      error(function(data, status, headers, config) {
        alert("Error: " + data);
      });
  }

  return myProvidersService;

}]);

// Index: http://localhost/views/provider/index.html

providerApp.controller('CeremoniaCtrl', function ($scope, ProviderRestangular) {

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/provider/show.html?id="+id+"&tipo=ceremonia");
    steroids.layers.push(webView);
     
  };

  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("misprovedores", '{"ceremonia":[], "recepcion":[], "invitaciones":[], "flores":[], "iluminacion":[], "foto":[], "ambientacion": [], "elyella": [], "mps":[], "luna":[], "mesa":[], "musica": []}');
  };

  // Fetch all objects from the local JSON (see app/models/provider.js)
  $scope.providers = ProviderRestangular.all('get_ceremonia/').getList();
  lista = $scope.providers;

  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });

});


// Index: http://localhost/views/provider/index.html

providerApp.controller('RecepcionCtrl', function ($scope, ProviderRestangular) {

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/provider/show.html?id="+id+"&tipo=recepcion");
    steroids.layers.push(webView);
     
  };

  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("misprovedores", '{"ceremonia":[], "recepcion":[], "invitaciones":[], "flores":[], "iluminacion":[], "foto":[], "ambientacion": [], "elyella": [], "mps":[], "luna":[], "mesa":[], "musica": []}');
  };

  // Fetch all objects from the local JSON (see app/models/provider.js)
  $scope.providers = ProviderRestangular.all('get_recepcion/').getList();
  lista = $scope.providers;

  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });

});


// Index: http://localhost/views/provider/index.html

providerApp.controller('InvitacionesCtrl', function ($scope, ProviderRestangular) {

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/provider/show.html?id="+id+"&tipo=invitaciones");
    steroids.layers.push(webView);
  };

  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("misprovedores", '{"ceremonia":[], "recepcion":[], "invitaciones":[], "flores":[], "iluminacion":[], "foto":[], "ambientacion": [], "elyella": [], "mps":[], "luna":[], "mesa":[], "musica": []}');
  };


  // Fetch all objects from the local JSON (see app/models/provider.js)
  $scope.providers = ProviderRestangular.all('get_invitacion/').getList();

  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });

});

// Index: http://localhost/views/provider/index.html

providerApp.controller('FloresCtrl', function ($scope, ProviderRestangular) {

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/provider/show.html?id="+id+"&tipo=flores");
    steroids.layers.push(webView);
  };

  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("misprovedores", '{"ceremonia":[], "recepcion":[], "invitaciones":[], "flores":[], "iluminacion":[], "foto":[], "ambientacion": [], "elyella": [], "mps":[], "luna":[], "mesa":[], "musica": []}');
  };

  // Fetch all objects from the local JSON (see app/models/provider.js)
  $scope.providers = ProviderRestangular.all('get_flores/').getList();

  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });

});

// Index: http://localhost/views/provider/index.html

providerApp.controller('IluminacionCtrl', function ($scope, ProviderRestangular) {

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/provider/show.html?id="+id+"&tipo=iluminacion");
    steroids.layers.push(webView);
  };
  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("misprovedores", '{"ceremonia":[], "recepcion":[], "invitaciones":[], "flores":[], "iluminacion":[], "foto":[], "ambientacion": [], "elyella": [], "mps":[], "luna":[], "mesa":[], "musica": []}');
  };

  // Fetch all objects from the local JSON (see app/models/provider.js)
  $scope.providers = ProviderRestangular.all('get_iluminacion/').getList();

  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });

});

// Index: http://localhost/views/provider/index.html

providerApp.controller('FotosCtrl', function ($scope, ProviderRestangular) {

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/provider/show.html?id="+id+"&tipo=fotos");
    steroids.layers.push(webView);
  };
  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("misprovedores", '{"ceremonia":[], "recepcion":[], "invitaciones":[], "flores":[], "iluminacion":[], "foto":[], "ambientacion": [], "elyella": [], "mps":[], "luna":[], "mesa":[], "musica": []}');
  };

  // Fetch all objects from the local JSON (see app/models/provider.js)
  $scope.providers = ProviderRestangular.all('get_fotos/').getList();

  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });

});

// Index: http://localhost/views/provider/index.html

providerApp.controller('AmbientacionCtrl', function ($scope, ProviderRestangular) {

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/provider/show.html?id="+id+"&tipo=ambientacion");
    steroids.layers.push(webView);
  };
  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("misprovedores", '{"ceremonia":[], "recepcion":[], "invitaciones":[], "flores":[], "iluminacion":[], "foto":[], "ambientacion": [], "elyella": [], "mps":[], "luna":[], "mesa":[], "musica": []}');
  };

  // Fetch all objects from the local JSON (see app/models/provider.js)
  $scope.providers = ProviderRestangular.all('get_ambientacion/').getList();

  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });

});

// Index: http://localhost/views/provider/index.html

providerApp.controller('ElyEllaCtrl', function ($scope, ProviderRestangular) {

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/provider/show.html?id="+id+"&tipo=elyella");
    steroids.layers.push(webView);
  };
  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("misprovedores", '{"ceremonia":[], "recepcion":[], "invitaciones":[], "flores":[], "iluminacion":[], "foto":[], "ambientacion": [], "elyella": [], "mps":[], "luna":[], "mesa":[], "musica": []}');
  };

  // Fetch all objects from the local JSON (see app/models/provider.js)
  $scope.providers = ProviderRestangular.all('get_elyella/').getList();

  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });

});

// Index: http://localhost/views/provider/index.html

providerApp.controller('MaquillajeCtrl', function ($scope, ProviderRestangular) {

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/provider/show.html?id="+id+"&tipo=maquillaje");
    steroids.layers.push(webView);
  };
  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("misprovedores", '{"ceremonia":[], "recepcion":[], "invitaciones":[], "flores":[], "iluminacion":[], "foto":[], "ambientacion": [], "elyella": [], "mps":[], "luna":[], "mesa":[], "musica": []}');
  };

  // Fetch all objects from the local JSON (see app/models/provider.js)
  $scope.providers = ProviderRestangular.all('get_maquillaje/').getList();

  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });

});

// Index: http://localhost/views/provider/index.html

providerApp.controller('LunaCtrl', function ($scope, ProviderRestangular) {

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/provider/show.html?id="+id+"&tipo=luna");
    steroids.layers.push(webView);
  };
  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("misprovedores", '{"ceremonia":[], "recepcion":[], "invitaciones":[], "flores":[], "iluminacion":[], "foto":[], "ambientacion": [], "elyella": [], "mps":[], "luna":[], "mesa":[], "musica": []}');
  };

  // Fetch all objects from the local JSON (see app/models/provider.js)
  $scope.providers = ProviderRestangular.all('get_luna/').getList();

  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });

});

// Index: http://localhost/views/provider/index.html

providerApp.controller('MesaCtrl', function ($scope, ProviderRestangular) {

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/provider/show.html?id="+id+"&tipo=mesa");
    steroids.layers.push(webView);
  };
  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("misprovedores", '{"ceremonia":[], "recepcion":[], "invitaciones":[], "flores":[], "iluminacion":[], "foto":[], "ambientacion": [], "elyella": [], "mps":[], "luna":[], "mesa":[], "musica": []}');
  };

  // Fetch all objects from the local JSON (see app/models/provider.js)
  $scope.providers = ProviderRestangular.all('get_mesa/').getList();

  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });

});

// Index: http://localhost/views/provider/index.html

providerApp.controller('MusicaCtrl', function ($scope, ProviderRestangular) {

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/provider/show.html?id="+id+"&tipo=musica");
    steroids.layers.push(webView);
    
  };
  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("misprovedores", '{"ceremonia":[], "recepcion":[], "invitaciones":[], "flores":[], "iluminacion":[], "foto":[], "ambientacion": [], "elyella": [], "mps":[], "luna":[], "mesa":[], "musica": []}');
  };

  // Fetch all objects from the local JSON (see app/models/provider.js)
  $scope.providers = ProviderRestangular.all('get_musica/').getList();

  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });

});

// Show: http://localhost/views/provider/show.html?id=<id>

providerApp.controller('ShowCtrl', function ($scope, $filter, ProviderRestangular, providersService) {

  $scope.providersService = providersService;

  $scope.newMyProvider = {};

  switch(steroids.view.params['tipo']){
    case 'ceremonia':
      // Fetch all objects from the local JSON (see app/models/provider.js)
      ProviderRestangular.all('get_ceremonia/').getList().then( function(providers) {
        // Then select the one based on the view's id query parameter
        $scope.provider = $filter('filter')(providers, {id: steroids.view.params['id']})[0];
      });
    break;
    case 'recepcion':
      // Fetch all objects from the local JSON (see app/models/provider.js)
      ProviderRestangular.all('get_recepcion/').getList().then( function(providers) {
        // Then select the one based on the view's id query parameter
        $scope.provider = $filter('filter')(providers, {id: steroids.view.params['id']})[0];
      });
    break;
    case 'invitaciones':
      // Fetch all objects from the local JSON (see app/models/provider.js)
      ProviderRestangular.all('get_invitacion/').getList().then( function(providers) {
        // Then select the one based on the view's id query parameter
        $scope.provider = $filter('filter')(providers, {id: steroids.view.params['id']})[0];
      });
    break;
    case 'flores':
      // Fetch all objects from the local JSON (see app/models/provider.js)
      ProviderRestangular.all('get_flores/').getList().then( function(providers) {
        // Then select the one based on the view's id query parameter
        $scope.provider = $filter('filter')(providers, {id: steroids.view.params['id']})[0];
      });
    break;
    case 'iluminacion':
      // Fetch all objects from the local JSON (see app/models/provider.js)
      ProviderRestangular.all('get_iluminacion/').getList().then( function(providers) {
        // Then select the one based on the view's id query parameter
        $scope.provider = $filter('filter')(providers, {id: steroids.view.params['id']})[0];
      });
    break;
    case 'fotos':
      // Fetch all objects from the local JSON (see app/models/provider.js)
      ProviderRestangular.all('get_fotos/').getList().then( function(providers) {
        // Then select the one based on the view's id query parameter
        $scope.provider = $filter('filter')(providers, {id: steroids.view.params['id']})[0];
      });
    break;
    case 'ambientacion':
      // Fetch all objects from the local JSON (see app/models/provider.js)
      ProviderRestangular.all('get_ambientacion/').getList().then( function(providers) {
        // Then select the one based on the view's id query parameter
        $scope.provider = $filter('filter')(providers, {id: steroids.view.params['id']})[0];
      });
    break;
    case 'elyella':
      // Fetch all objects from the local JSON (see app/models/provider.js)
      ProviderRestangular.all('get_elyella/').getList().then( function(providers) {
        // Then select the one based on the view's id query parameter
        $scope.provider = $filter('filter')(providers, {id: steroids.view.params['id']})[0];
      });
    break;
    case 'maquillaje':
      // Fetch all objects from the local JSON (see app/models/provider.js)
      ProviderRestangular.all('get_maquillaje/').getList().then( function(providers) {
        // Then select the one based on the view's id query parameter
        $scope.provider = $filter('filter')(providers, {id: steroids.view.params['id']})[0];
      });
    break;
    case 'luna':
      // Fetch all objects from the local JSON (see app/models/provider.js)
      ProviderRestangular.all('get_luna/').getList().then( function(providers) {
        // Then select the one based on the view's id query parameter
        $scope.provider = $filter('filter')(providers, {id: steroids.view.params['id']})[0];
      });
    break;
    case 'mesa':
      // Fetch all objects from the local JSON (see app/models/provider.js)
      ProviderRestangular.all('get_mesa/').getList().then( function(providers) {
        // Then select the one based on the view's id query parameter
        $scope.provider = $filter('filter')(providers, {id: steroids.view.params['id']})[0];
      });
    break;
    case 'musica':
      // Fetch all objects from the local JSON (see app/models/provider.js)
      ProviderRestangular.all('get_musica/').getList().then( function(providers) {
        // Then select the one based on the view's id query parameter
        $scope.provider = $filter('filter')(providers, {id: steroids.view.params['id']})[0];
      });
    break;
  }


  //alert(steroids.view.params['id']);

  //$scope.provider = ProviderRestangular.oneUrl('provedor','http://bride2be.com.mx/api/proveedores/single/?id='+steroids.view.params['id']).get();

  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });

});