var myprovidersApp = angular.module('myprovidersApp', ['hmTouchevents']);


// Index: http://localhost/views/myproviders/index.html

myprovidersApp.controller('IndexCtrl', function ($scope) {

  // Helper function for opening new webviews
  $scope.open = function(title, type) {

    misprovedores = JSON.parse(window.localStorage.getItem("misprovedores"));
    var myProvidersView = new steroids.views.WebView("http://localhost/views/myproviders/index.html");

    switch(type){
      case 0:
        for(x in misprovedores.ceremonia){
          if(misprovedores.ceremonia[x].title == title){
            var r=confirm("¿Segura que quieres eliminar a este proveedor?");
            if (r==true){
              misprovedores.ceremonia.splice(x, 1);
              window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
              steroids.layers.push(myProvidersView);
              }
            else{
              
            }
          }
        }
      break;
      case 1:
        for(x in misprovedores.recepcion){
          if(misprovedores.recepcion[x].title == title){
            var r=confirm("¿Segura que quieres eliminar a este proveedor?");
            if (r==true){
              misprovedores.recepcion.splice(x, 1);
              window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
              steroids.layers.push(myProvidersView);
              }
            else{
              
            }
          }
        }
      break;
      case 2:
        for(x in misprovedores.invitaciones){
          if(misprovedores.invitaciones[x].title == title){
            var r=confirm("¿Segura que quieres eliminar a este proveedor?");
            if (r==true){
              misprovedores.invitaciones.splice(x, 1);
              window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
              steroids.layers.push(myProvidersView);
              }
            else{
              
            }
          }
        }
      break;
      case 3:
        for(x in misprovedores.musica){
          if(misprovedores.musica[x].title == title){
            var r=confirm("¿Segura que quieres eliminar a este proveedor?");
            if (r==true){
              misprovedores.musica.splice(x, 1);
              window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
              steroids.layers.push(myProvidersView);
              }
            else{
              
            }
          }
        }
      break;
      case 4:
        for(x in misprovedores.flores){
          if(misprovedores.flores[x].title == title){
            var r=confirm("¿Segura que quieres eliminar a este proveedor?");
            if (r==true){
              misprovedores.flores.splice(x, 1);
              window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
              steroids.layers.push(myProvidersView);
              }
            else{
              
            }
          }
        }
      break;
      case 5:
        for(x in misprovedores.iluminacion){
          if(misprovedores.iluminacion[x].title == title){
            var r=confirm("¿Segura que quieres eliminar a este proveedor?");
            if (r==true){
              misprovedores.iluminacion.splice(x, 1);
              window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
              steroids.layers.push(myProvidersView);
              }
            else{
              
            }
          }
        }
      break;
      case 6:
        for(x in misprovedores.foto){
          if(misprovedores.foto[x].title == title){
            var r=confirm("¿Segura que quieres eliminar a este proveedor?");
            if (r==true){
              misprovedores.foto.splice(x, 1);
              window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
              steroids.layers.push(myProvidersView);
              }
            else{
              
            }
          }
        }
      break;
      case 7:
        for(x in misprovedores.ambientacion){
          if(misprovedores.ambientacion[x].title == title){
            var r=confirm("¿Segura que quieres eliminar a este proveedor?");
            if (r==true){
              misprovedores.ambientacion.splice(x, 1);
              window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
              steroids.layers.push(myProvidersView);
              }
            else{
              
            }
          }
        }
      break;
      case 8:
        for(x in misprovedores.elyella){
          if(misprovedores.elyella[x].title == title){
            var r=confirm("¿Segura que quieres eliminar a este proveedor?");
            if (r==true){
              misprovedores.elyella.splice(x, 1);
              window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
              steroids.layers.push(myProvidersView);
              }
            else{
              
            }
          }
        }
      break;
      case 9:
        for(x in misprovedores.mps){
          if(misprovedores.mps[x].title == title){
            var r=confirm("¿Segura que quieres eliminar a este proveedor?");
            if (r==true){
              misprovedores.mps.splice(x, 1);
              window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
              steroids.layers.push(myProvidersView);
              }
            else{
              
            }
          }
        }
      break;
      case 10:
        for(x in misprovedores.luna){
          if(misprovedores.luna[x].title == title){
            var r=confirm("¿Segura que quieres eliminar a este proveedor?");
            if (r==true){
              misprovedores.luna.splice(x, 1);
              window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
              steroids.layers.push(myProvidersView);
              }
            else{
              
            }
          }
        }
      break;
      case 11:
        for(x in misprovedores.mesa){
          if(misprovedores.mesa[x].title == title){
            var r=confirm("¿Segura que quieres eliminar a este proveedor?");
            if (r==true){
              misprovedores.mesa.splice(x, 1);
              window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
              steroids.layers.push(myProvidersView);
              }
            else{
              
            }
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
