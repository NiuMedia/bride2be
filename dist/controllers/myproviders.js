var myprovidersApp = angular.module('myprovidersApp', ['hmTouchevents']);

myprovidersApp.factory('miProveedorService', function(){
  var myMiProveedorService = {};
  var misProvedoresJSON = JSON.parse(window.localStorage.getItem("misprovedores"));

  myMiProveedorService.addMiProveedor = function(tipo,miProveedor){
    switch(tipo){
          case 'ceremonia':
            var flag_done=false;
            var flag_ceremonia=false;
            if (misProvedoresJSON.ceremonia==''){//si el JSON de ceremonia está vacío
              misProvedoresJSON.ceremonia.push(miProveedor);//se guarda el resultado en el json
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
              flag_done=true;
            }else{//si el json no está vacío
              for(x in misProvedoresJSON.ceremonia){//se recorre cada elemento del json de ceremonia
                if(misProvedoresJSON.ceremonia[x].title == miProveedor.title){//si el título del elemento a guardar es igual al titulo del elemento del json
                 flag_ceremonia=true;
                 break;
                }
              }
            }
            if(flag_ceremonia==false && flag_done==false){
              misProvedoresJSON.ceremonia.push(miProveedor);//
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
            }else if(flag_done==false){
              navigator.notification.alert("Proveedor ya guardado anteriormente", function(){}, "Bride2Be");
            }
          break;
          case 'recepcion':
            var flag_done=false;
            var flag_recepcion=false;
            if (misProvedoresJSON.recepcion==''){//si el JSON de recepcion está vacío
              misProvedoresJSON.recepcion.push(miProveedor);//se guarda el resultado en el json
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
              flag_done=true;
            }else{//si el json no está vacío
              for(x in misProvedoresJSON.recepcion){//se recorre cada elemento del json de recepcion
                if(misProvedoresJSON.recepcion[x].title == miProveedor.title){//si el título del elemento a guardar es igual al titulo del elemento del json
                 flag_recepcion=true; 
                 break;
                }
              }
            }
            if(flag_recepcion==false && flag_done==false){
              misProvedoresJSON.recepcion.push(miProveedor);//
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
            }else if(flag_done==false){
              navigator.notification.alert("Proveedor ya guardado anteriormente", function(){}, "Bride2Be");
            }
          break;
          case 'invitaciones':
            var flag_done=false;
            var flag_invitaciones=false;
            if (misProvedoresJSON.invitaciones==''){//si el JSON de invitaciones está vacío
              misProvedoresJSON.invitaciones.push(miProveedor);//se guarda el resultado en el json
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
              flag_done=true;
            }else{//si el json no está vacío
              for(x in misProvedoresJSON.invitaciones){//se recorre cada elemento del json de invitaciones
                if(misProvedoresJSON.invitaciones[x].title == miProveedor.title){//si el título del elemento a guardar es igual al titulo del elemento del json
                 flag_invitaciones=true; 
                 break;
                }
              }
            }
            if(flag_invitaciones==false && flag_done==false){
              misProvedoresJSON.invitaciones.push(miProveedor);//
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
            }else if(flag_done==false){
              navigator.notification.alert("Proveedor ya guardado anteriormente", function(){}, "Bride2Be");
            }
          break;
          case 'flores':
            var flag_done=false;
            var flag_flores=false;
            if (misProvedoresJSON.flores==''){//si el JSON de flores está vacío
              misProvedoresJSON.flores.push(miProveedor);//se guarda el resultado en el json
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
              flag_done=true;
            }else{//si el json no está vacío
              for(x in misProvedoresJSON.flores){//se recorre cada elemento del json de flores
                if(misProvedoresJSON.flores[x].title == miProveedor.title){//si el título del elemento a guardar es igual al titulo del elemento del json
                 flag_flores=true; 
                 break;
                }
              }
            }
            if(flag_flores==false && flag_done==false){
              misProvedoresJSON.flores.push(miProveedor);//
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
            }else if(flag_done==false){
              navigator.notification.alert("Proveedor ya guardado anteriormente", function(){}, "Bride2Be");
            }
          break;
          case 'iluminacion':
            var flag_done=false;
            var flag_iluminacion=false;
            if (misProvedoresJSON.iluminacion==''){//si el JSON de iluminacion está vacío
              misProvedoresJSON.iluminacion.push(miProveedor);//se guarda el resultado en el json
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
              flag_done=true;
            }else{//si el json no está vacío
              for(x in misProvedoresJSON.iluminacion){//se recorre cada elemento del json de iluminacion
                if(misProvedoresJSON.iluminacion[x].title == miProveedor.title){//si el título del elemento a guardar es igual al titulo del elemento del json
                 flag_iluminacion=true; 
                 break;
                }
              }
            }
            if(flag_iluminacion==false && flag_done==false){
              misProvedoresJSON.iluminacion.push(miProveedor);//
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
            }else if(flag_done==false){
              navigator.notification.alert("Proveedor ya guardado anteriormente", function(){}, "Bride2Be");
            }
          break;
          case 'fotos':
            var flag_done=false;
            var flag_fotos=false;
            if (misProvedoresJSON.fotos==''){//si el JSON de fotos está vacío
              misProvedoresJSON.fotos.push(miProveedor);//se guarda el resultado en el json
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
              flag_done=true;
            }else{//si el json no está vacío
              for(x in misProvedoresJSON.fotos){//se recorre cada elemento del json de fotos
                if(misProvedoresJSON.fotos[x].title == miProveedor.title){//si el título del elemento a guardar es igual al titulo del elemento del json
                 flag_fotos=true; 
                 break;
                }
              }
            }
            if(flag_fotos==false && flag_done==false){
              misProvedoresJSON.fotos.push(miProveedor);//
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
            }else if(flag_done==false){
              navigator.notification.alert("Proveedor ya guardado anteriormente", function(){}, "Bride2Be");
            }
          break;
          case 'ambientacion':
            var flag_done=false;
            var flag_ambientacion=false;
            if (misProvedoresJSON.ambientacion==''){//si el JSON de ambientacion está vacío
              misProvedoresJSON.ambientacion.push(miProveedor);//se guarda el resultado en el json
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
              flag_done=true;
            }else{//si el json no está vacío
              for(x in misProvedoresJSON.ambientacion){//se recorre cada elemento del json de ambientacion
                if(misProvedoresJSON.ambientacion[x].title == miProveedor.title){//si el título del elemento a guardar es igual al titulo del elemento del json
                 flag_ambientacion=true; 
                 break;
                }
              }
            }
            if(flag_ambientacion==false && flag_done==false){
              misProvedoresJSON.ambientacion.push(miProveedor);//
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
            }else if(flag_done==false){
              navigator.notification.alert("Proveedor ya guardado anteriormente", function(){}, "Bride2Be");
            }
          break;
          case 'elyella':
            var flag_done=false;
            var flag_elyella=false;
            if (misProvedoresJSON.elyella==''){//si el JSON de elyella está vacío
              misProvedoresJSON.elyella.push(miProveedor);//se guarda el resultado en el json
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
              flag_done=true;
            }else{//si el json no está vacío
              for(x in misProvedoresJSON.elyella){//se recorre cada elemento del json de elyella
                if(misProvedoresJSON.elyella[x].title == miProveedor.title){//si el título del elemento a guardar es igual al titulo del elemento del json
                 flag_elyella=true; 
                 break;
                }
              }
            }
            if(flag_elyella==false && flag_done==false){
              misProvedoresJSON.elyella.push(miProveedor);//
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
            }else if(flag_done==false){
              navigator.notification.alert("Proveedor ya guardado anteriormente", function(){}, "Bride2Be");
            }
          break;
          case 'maquillaje':
            var flag_done=false;
            var flag_maquillaje=false;
            if (misProvedoresJSON.maquillaje==''){//si el JSON de maquillaje está vacío
              misProvedoresJSON.maquillaje.push(miProveedor);//se guarda el resultado en el json
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
              flag_done=true;
            }else{//si el json no está vacío
              for(x in misProvedoresJSON.maquillaje){//se recorre cada elemento del json de maquillaje
                if(misProvedoresJSON.maquillaje[x].title == miProveedor.title){//si el título del elemento a guardar es igual al titulo del elemento del json
                 flag_maquillaje=true; 
                 break;
                }
              }
            }
            if(flag_maquillaje==false && flag_done==false){
              misProvedoresJSON.maquillaje.push(miProveedor);//
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
            }else if(flag_done==false){
              navigator.notification.alert("Proveedor ya guardado anteriormente", function(){}, "Bride2Be");
            }
          break;
          case 'luna':
            var flag_done=false;
            var flag_luna=false;
            if (misProvedoresJSON.luna==''){//si el JSON de luna está vacío
              misProvedoresJSON.luna.push(miProveedor);//se guarda el resultado en el json
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
              flag_done=true;
            }else{//si el json no está vacío
              for(x in misProvedoresJSON.luna){//se recorre cada elemento del json de luna
                if(misProvedoresJSON.luna[x].title == miProveedor.title){//si el título del elemento a guardar es igual al titulo del elemento del json
                 flag_luna=true; 
                 break;
                }
              }
            }
            if(flag_luna==false && flag_done==false){
              misProvedoresJSON.luna.push(miProveedor);//
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
            }else if(flag_done==false){
              navigator.notification.alert("Proveedor ya guardado anteriormente", function(){}, "Bride2Be");
            }
          break;
          case 'mesa':
            var flag_done=false;
            var flag_mesa=false;
            if (misProvedoresJSON.mesa==''){//si el JSON de mesa está vacío
              misProvedoresJSON.mesa.push(miProveedor);//se guarda el resultado en el json
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
              flag_done=true;
            }else{//si el json no está vacío
              for(x in misProvedoresJSON.mesa){//se recorre cada elemento del json de mesa
                if(misProvedoresJSON.mesa[x].title == miProveedor.title){//si el título del elemento a guardar es igual al titulo del elemento del json
                 flag_mesa=true; 
                 break;
                }
              }
            }
            if(flag_mesa==false && flag_done==false){
              misProvedoresJSON.mesa.push(miProveedor);//
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
            }else if(flag_done==false){
              navigator.notification.alert("Proveedor ya guardado anteriormente", function(){}, "Bride2Be");
            }
          break;
          case 'musica':
            var flag_done=false;
            var flag_musica=false;
            if (misProvedoresJSON.musica==''){//si el JSON de musica está vacío
              misProvedoresJSON.musica.push(miProveedor);//se guarda el resultado en el json
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
              flag_done=true;
            }else{//si el json no está vacío
              for(x in misProvedoresJSON.musica){//se recorre cada elemento del json de musica
                if(misProvedoresJSON.musica[x].title == miProveedor.title){//si el título del elemento a guardar es igual al titulo del elemento del json
                 flag_musica=true; 
                 break;
                }
              }
            }
            if(flag_musica==false && flag_done==false){
              misProvedoresJSON.musica.push(miProveedor);//
              navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
            }else if(flag_done==false){
              navigator.notification.alert("Proveedor ya guardado anteriormente", function(){}, "Bride2Be");
            }
          break;
        }
    window.localStorage.setItem("misprovedores", JSON.stringify(misProvedoresJSON));
    //json_guest.misProveedores.push(tipo);
    //window.localStorage.setItem("misprovedores", JSON.stringify(json_guest));
  };

  myMiProveedorService.removeMiProveedor = function(index){
    json_guest.misProveedores.splice(index, 1);
    window.localStorage.setItem("misProveedores", JSON.stringify(json_guest));
  };

  myMiProveedorService.updateMiProveedor = function(index, newMyProvider){
    miProveedor = json_guest.misProveedores[index];

    miProveedor.nombre = newMiProveedor.nombre;
    miProveedor.direccion = newMiProveedor.direccion;
    miProveedor.telefono = newMiProveedor.telefono;
    miProveedor.telefono2 = newMiProveedor.telefono2;
    miProveedor.email = newMiProveedor.email;

    json_guest.misProveedores[index] = miProveedor;

    window.localStorage.setItem("misProveedores", JSON.stringify(json_guest));
  };

  return myMiProveedorService;

});

// Index: http://localhost/views/myproviders/index.html

myprovidersApp.controller('IndexCtrl', function ($scope) {
  var myIndexCtrl = {};
  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/myproviders/new-"+id+".html");
    steroids.layers.push(webView);
  };

  $scope.delete = function(title, type) {

    misprovedores = JSON.parse(window.localStorage.getItem("misprovedores"));
    var myProvidersView = new steroids.views.WebView("http://localhost/views/myproviders/index.html");

    switch(type){
      case 0:
        for(x in misprovedores.ceremonia){
          if(misprovedores.ceremonia[x].title == title){
            misprovedores.ceremonia.splice(x, 1);
            window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
            steroids.layers.push(myProvidersView);
          }
        }
      break;
      case 1:
        for(x in misprovedores.recepcion){
          if(misprovedores.recepcion[x].title == title){
            misprovedores.recepcion.splice(x, 1);
            window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
            steroids.layers.push(myProvidersView);
          }
        }
      break;
      case 2:
        for(x in misprovedores.invitaciones){
          if(misprovedores.invitaciones[x].title == title){
            misprovedores.invitaciones.splice(x, 1);
            window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
            steroids.layers.push(myProvidersView);
          }
        }
      break;
      case 3:
        for(x in misprovedores.musica){
          if(misprovedores.musica[x].title == title){
            misprovedores.musica.splice(x, 1);
            window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
            steroids.layers.push(myProvidersView);
          }
        }
      break;
      case 4:
        for(x in misprovedores.flores){
          if(misprovedores.flores[x].title == title){
            misprovedores.flores.splice(x, 1);
            window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
            steroids.layers.push(myProvidersView);
          }
        }
      break;
      case 5:
        for(x in misprovedores.iluminacion){
          if(misprovedores.iluminacion[x].title == title){
            misprovedores.iluminacion.splice(x, 1);
            window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
            steroids.layers.push(myProvidersView);
          }
        }
      break;
      case 6:
        for(x in misprovedores.foto){
          if(misprovedores.foto[x].title == title){
            misprovedores.foto.splice(x, 1);
            window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
            steroids.layers.push(myProvidersView);
          }
        }
      break;
      case 7:
        for(x in misprovedores.ambientacion){
          if(misprovedores.ambientacion[x].title == title){
            misprovedores.ambientacion.splice(x, 1);
            window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
            steroids.layers.push(myProvidersView);
          }
        }
      break;
      case 8:
        for(x in misprovedores.elyella){
          if(misprovedores.elyella[x].title == title){
            misprovedores.elyella.splice(x, 1);
            window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
            steroids.layers.push(myProvidersView);
          }
        }
      break;
      case 9:
        for(x in misprovedores.mps){
          if(misprovedores.mps[x].title == title){
            misprovedores.mps.splice(x, 1);
            window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
            steroids.layers.push(myProvidersView);
          }
        }
      break;
      case 10:
        for(x in misprovedores.luna){
          if(misprovedores.luna[x].title == title){
            misprovedores.luna.splice(x, 1);
            window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
            steroids.layers.push(myProvidersView);
          }
        }
      break;
      case 11:
        for(x in misprovedores.mesa){
          if(misprovedores.mesa[x].title == title){
            misprovedores.mesa.splice(x, 1);
            window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
            steroids.layers.push(myProvidersView);
          }
        }
      break;
    }
  };

  // Fetch all objects from the local JSON (see app/models/myproviders.js)
  $scope.myproviderss = JSON.parse(window.localStorage.getItem("misprovedores"));
  
  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });
});


// Show: http://localhost/views/myproviders/show.html?id=<id>

myprovidersApp.controller('ShowCtrl', function ($scope, $filter) {

  // Fetch all objects from the local JSON (see app/models/myproviders.js)
  MyprovidersRestangular.all('myproviders').getList().then( function(myproviderss) {
    // Then select the one based on the view's id query parameter
    $scope.myproviders = $filter('filter')(myproviderss, {myproviders_id: steroids.view.params['id']})[0];
  });

  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });

});


myprovidersApp.controller('NewCeremoniaCtrl', function ($scope, miProveedorService) {
  $scope.returnToList = function(){
    returnView = new steroids.views.WebView("/views/myproviders/index.html");
    steroids.layers.push({view:returnView});
    steroids.layers.popAll();
  };

  $scope.newMyProvider = {};
  $scope.miProveedorServ = miProveedorService;

  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("misprovedores", '{"ceremonia":[], "recepcion":[], "invitaciones":[], "flores":[], "iluminacion":[], "foto":[], "ambientacion": [], "elyella": [], "mps":[], "luna":[], "mesa":[], "musica": []}');
  };

  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });

});


// Index: http://localhost/views/provider/index.html

myprovidersApp.controller('NewRecepcionCtrl', function ($scope, miProveedorService) {
  $scope.returnToList = function(){
    returnView = new steroids.views.WebView("/views/myproviders/index.html");
    steroids.layers.push({view:returnView});
    steroids.layers.popAll();
  };

  $scope.newMyProvider = {};
  $scope.miProveedorServ = miProveedorService;

  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("misprovedores", '{"ceremonia":[], "recepcion":[], "invitaciones":[], "flores":[], "iluminacion":[], "foto":[], "ambientacion": [], "elyella": [], "mps":[], "luna":[], "mesa":[], "musica": []}');
  };

  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });

});


// Index: http://localhost/views/provider/index.html

myprovidersApp.controller('NewInvitacionesCtrl', function ($scope, miProveedorService) {
  $scope.returnToList = function(){
    returnView = new steroids.views.WebView("/views/myproviders/index.html");
    steroids.layers.push({view:returnView});
    steroids.layers.popAll();
  };

  $scope.newMyProvider = {};
  $scope.miProveedorServ = miProveedorService;

  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("misprovedores", '{"ceremonia":[], "recepcion":[], "invitaciones":[], "flores":[], "iluminacion":[], "foto":[], "ambientacion": [], "elyella": [], "mps":[], "luna":[], "mesa":[], "musica": []}');
  };

  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });

});

// Index: http://localhost/views/provider/index.html

myprovidersApp.controller('NewFloresCtrl', function ($scope, miProveedorService) {
  $scope.returnToList = function(){
    returnView = new steroids.views.WebView("/views/myproviders/index.html");
    steroids.layers.push({view:returnView});
    steroids.layers.popAll();
  };

  $scope.newMyProvider = {};
  $scope.miProveedorServ = miProveedorService;

  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("misprovedores", '{"ceremonia":[], "recepcion":[], "invitaciones":[], "flores":[], "iluminacion":[], "foto":[], "ambientacion": [], "elyella": [], "mps":[], "luna":[], "mesa":[], "musica": []}');
  };

  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });

});

// Index: http://localhost/views/provider/index.html

myprovidersApp.controller('NewIluminacionCtrl', function ($scope, miProveedorService) {
  $scope.returnToList = function(){
    returnView = new steroids.views.WebView("/views/myproviders/index.html");
    steroids.layers.push({view:returnView});
    steroids.layers.popAll();
  };

  $scope.newMyProvider = {};
  $scope.miProveedorServ = miProveedorService;

  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("misprovedores", '{"ceremonia":[], "recepcion":[], "invitaciones":[], "flores":[], "iluminacion":[], "foto":[], "ambientacion": [], "elyella": [], "mps":[], "luna":[], "mesa":[], "musica": []}');
  };

  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });
});

// Index: http://localhost/views/provider/index.html

myprovidersApp.controller('NewFotosCtrl', function ($scope, miProveedorService) {
  $scope.returnToList = function(){
    returnView = new steroids.views.WebView("/views/myproviders/index.html");
    steroids.layers.push({view:returnView});
    steroids.layers.popAll();
  };

  $scope.newMyProvider = {};
  $scope.miProveedorServ = miProveedorService;

  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("misprovedores", '{"ceremonia":[], "recepcion":[], "invitaciones":[], "flores":[], "iluminacion":[], "foto":[], "ambientacion": [], "elyella": [], "mps":[], "luna":[], "mesa":[], "musica": []}');
  };

  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });
});

// Index: http://localhost/views/provider/index.html

myprovidersApp.controller('NewAmbientacionCtrl', function ($scope, miProveedorService) {
  $scope.returnToList = function(){
    returnView = new steroids.views.WebView("/views/myproviders/index.html");
    steroids.layers.push({view:returnView});
    steroids.layers.popAll();
  };

  $scope.newMyProvider = {};
  $scope.miProveedorServ = miProveedorService;

  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("misprovedores", '{"ceremonia":[], "recepcion":[], "invitaciones":[], "flores":[], "iluminacion":[], "foto":[], "ambientacion": [], "elyella": [], "mps":[], "luna":[], "mesa":[], "musica": []}');
  };

  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });
});

// Index: http://localhost/views/provider/index.html

myprovidersApp.controller('NewElyEllaCtrl', function ($scope, miProveedorService) {
  $scope.returnToList = function(){
    returnView = new steroids.views.WebView("/views/myproviders/index.html");
    steroids.layers.push({view:returnView});
    steroids.layers.popAll();
  };

  $scope.newMyProvider = {};
  $scope.miProveedorServ = miProveedorService;

  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("misprovedores", '{"ceremonia":[], "recepcion":[], "invitaciones":[], "flores":[], "iluminacion":[], "foto":[], "ambientacion": [], "elyella": [], "mps":[], "luna":[], "mesa":[], "musica": []}');
  };

  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });
});

// Index: http://localhost/views/provider/index.html

myprovidersApp.controller('NewMaquillajeCtrl', function ($scope, miProveedorService) {
  $scope.returnToList = function(){
    returnView = new steroids.views.WebView("/views/myproviders/index.html");
    steroids.layers.push({view:returnView});
    steroids.layers.popAll();
  };

  $scope.newMyProvider = {};
  $scope.miProveedorServ = miProveedorService;

  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("misprovedores", '{"ceremonia":[], "recepcion":[], "invitaciones":[], "flores":[], "iluminacion":[], "foto":[], "ambientacion": [], "elyella": [], "mps":[], "luna":[], "mesa":[], "musica": []}');
  };

  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });
});

// Index: http://localhost/views/provider/index.html

myprovidersApp.controller('NewLunaCtrl', function ($scope, miProveedorService) {
  $scope.returnToList = function(){
    returnView = new steroids.views.WebView("/views/myproviders/index.html");
    steroids.layers.push({view:returnView});
    steroids.layers.popAll();
  };

  $scope.newMyProvider = {};
  $scope.miProveedorServ = miProveedorService;

  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("misprovedores", '{"ceremonia":[], "recepcion":[], "invitaciones":[], "flores":[], "iluminacion":[], "foto":[], "ambientacion": [], "elyella": [], "mps":[], "luna":[], "mesa":[], "musica": []}');
  };

  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });
});

// Index: http://localhost/views/provider/index.html

myprovidersApp.controller('NewMesaCtrl', function ($scope, miProveedorService) {
  $scope.returnToList = function(){
    returnView = new steroids.views.WebView("/views/myproviders/index.html");
    steroids.layers.push({view:returnView});
    steroids.layers.popAll();
  };

  $scope.newMyProvider = {};
  $scope.miProveedorServ = miProveedorService;

  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("misprovedores", '{"ceremonia":[], "recepcion":[], "invitaciones":[], "flores":[], "iluminacion":[], "foto":[], "ambientacion": [], "elyella": [], "mps":[], "luna":[], "mesa":[], "musica": []}');
  };

  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });
});

// Index: http://localhost/views/provider/index.html

myprovidersApp.controller('NewMusicaCtrl', function ($scope, miProveedorService) {
  $scope.returnToList = function(){
    returnView = new steroids.views.WebView("/views/myproviders/index.html");
    steroids.layers.push({view:returnView});
    steroids.layers.popAll();
  };

  $scope.newMyProvider = {};
  $scope.miProveedorServ = miProveedorService;

  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("misprovedores", '{"ceremonia":[], "recepcion":[], "invitaciones":[], "flores":[], "iluminacion":[], "foto":[], "ambientacion": [], "elyella": [], "mps":[], "luna":[], "mesa":[], "musica": []}');
  };

  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });

});
