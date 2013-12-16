var myprovidersApp = angular.module('myprovidersApp', ['hmTouchevents']);

myprovidersApp.factory('misProveedoresService', function(){
  var myMisProveedoresService = {};
  json_guest = $.parseJSON(window.localStorage.getItem("misProveedores"));

  myMisProveedoresService.addMiProveedor = function(miProveedor){
    json_guest.misProveedores.push(miProveedor);
    window.localStorage.setItem("misProveedores", JSON.stringify(json_guest));

  };

  myMisProveedoresService.removeMiProveedor = function(index){
    json_guest.misProveedores.splice(index, 1);
    window.localStorage.setItem("misProveedores", JSON.stringify(json_guest));
  };

  myMisProveedoresService.updateMiProveedor = function(index, newMiProveedor){
    miProveedor = json_guest.misProveedores[index];

    miProveedor.nombre = newMiProveedor.nombre;
    miProveedor.direccion = newMiProveedor.direccion;
    miProveedor.telefono = newMiProveedor.telefono;
    miProveedor.telefono2 = newMiProveedor.telefono2;
    miProveedor.email = newMiProveedor.email;

    json_guest.misProveedores[index] = miProveedor;

    window.localStorage.setItem("misProveedores", JSON.stringify(json_guest));
  };

  return myMisProveedoresService;

});

// Index: http://localhost/views/myproviders/index.html

myprovidersApp.controller('IndexCtrl', function ($scope) {

  // Helper function for opening new webviews
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
            //   }
            // else{
              
            // }
          }
        }
      break;
      case 1:
        for(x in misprovedores.recepcion){
          if(misprovedores.recepcion[x].title == title){
            
              misprovedores.recepcion.splice(x, 1);
              window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
              steroids.layers.push(myProvidersView);
              navigator.notification.alert(
                'Proveedor eliminado',
                alertDismissed,
                'Bride2Be',
                'Ok');
          }
        }
      break;
      case 2:
        for(x in misprovedores.invitaciones){
          if(misprovedores.invitaciones[x].title == title){
            
              misprovedores.invitaciones.splice(x, 1);
              window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
              steroids.layers.push(myProvidersView);
              navigator.notification.alert(
                'Proveedor eliminado',
                alertDismissed,
                'Bride2Be',
                'Ok');
          }
        }
      break;
      case 3:
        for(x in misprovedores.musica){
          if(misprovedores.musica[x].title == title){
            
              misprovedores.musica.splice(x, 1);
              window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
              steroids.layers.push(myProvidersView);
              navigator.notification.alert(
                'Proveedor eliminado',
                alertDismissed,
                'Bride2Be',
                'Ok');
          }
        }
      break;
      case 4:
        for(x in misprovedores.flores){
          if(misprovedores.flores[x].title == title){
            
              misprovedores.flores.splice(x, 1);
              window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
              steroids.layers.push(myProvidersView);
              navigator.notification.alert(
                'Proveedor eliminado',
                alertDismissed,
                'Bride2Be',
                'Ok');
          }
        }
      break;
      case 5:
        for(x in misprovedores.iluminacion){
          if(misprovedores.iluminacion[x].title == title){
            
              misprovedores.iluminacion.splice(x, 1);
              window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
              steroids.layers.push(myProvidersView);
              navigator.notification.alert(
                'Proveedor eliminado',
                alertDismissed,
                'Bride2Be',
                'Ok');
          }
        }
      break;
      case 6:
        for(x in misprovedores.foto){
          if(misprovedores.foto[x].title == title){
            
              misprovedores.foto.splice(x, 1);
              window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
              steroids.layers.push(myProvidersView);
              navigator.notification.alert(
                'Proveedor eliminado',
                alertDismissed,
                'Bride2Be',
                'Ok');
          }
        }
      break;
      case 7:
        for(x in misprovedores.ambientacion){
          if(misprovedores.ambientacion[x].title == title){
            
              misprovedores.ambientacion.splice(x, 1);
              window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
              steroids.layers.push(myProvidersView);
              navigator.notification.alert(
                'Proveedor eliminado',
                alertDismissed,
                'Bride2Be',
                'Ok');
          }
        }
      break;
      case 8:
        for(x in misprovedores.elyella){
          if(misprovedores.elyella[x].title == title){
            
              misprovedores.elyella.splice(x, 1);
              window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
              steroids.layers.push(myProvidersView);
              navigator.notification.alert(
                'Proveedor eliminado',
                alertDismissed,
                'Bride2Be',
                'Ok');
          }
        }
      break;
      case 9:
        for(x in misprovedores.mps){
          if(misprovedores.mps[x].title == title){
            
              misprovedores.mps.splice(x, 1);
              window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
              steroids.layers.push(myProvidersView);
              navigator.notification.alert(
                'Proveedor eliminado',
                alertDismissed,
                'Bride2Be',
                'Ok');
          }
        }
      break;
      case 10:
        for(x in misprovedores.luna){
          if(misprovedores.luna[x].title == title){
            
              misprovedores.luna.splice(x, 1);
              window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
              steroids.layers.push(myProvidersView);
              navigator.notification.alert(
                'Proveedor eliminado',
                alertDismissed,
                'Bride2Be',
                'Ok');
          }
        }
      break;
      case 11:
        for(x in misprovedores.mesa){
          if(misprovedores.mesa[x].title == title){
            
              misprovedores.mesa.splice(x, 1);
              window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
              steroids.layers.push(myProvidersView);
              navigator.notification.alert(
                'Proveedor eliminado',
                alertDismissed,
                'Bride2Be',
                'Ok');
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

myprovidersApp.controller('NewCtrl', function ($scope, misProveedoresService) {

  $scope.returnToList = function(){
    guestsRetunView = new steroids.views.WebView("/views/myproviders/index.html");
    steroids.layers.push({view:guestsRetunView});
    steroids.layers.popAll();
  };
invitado
  $scope.newGuest = {};

  $scope.misProveedoresServ = misProveedoresService;

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
