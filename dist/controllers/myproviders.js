var myprovidersApp = angular.module('myprovidersApp', ['hmTouchevents']);


// Index: http://localhost/views/myproviders/index.html

myprovidersApp.controller('IndexCtrl', function ($scope) {

  // Helper function for opening new webviews
  $scope.open = function(title, type) {

    misprovedores = JSON.parse(window.localStorage.getItem("misprovedores"));

    switch(type){
      case 0:
        for(x in misprovedores.ceremonia){
          if(misprovedores.ceremonia[x].title == title){
            misprovedores.ceremonia.splice(x, 1);
          }
        }
      break;
      case 1:
        for(x in misprovedores.recepcion){
          if(misprovedores.recepcion[x].title == title){
            misprovedores.recepcion.splice(x, 1);
          }
        }
      break;
      case 2:
        for(x in misprovedores.invitaciones){
          if(misprovedores.invitaciones[x].title == title){
            misprovedores.invitaciones.splice(x, 1);
          }
        }
      break;
      case 3:
        for(x in misprovedores.musica){
          if(misprovedores.musica[x].title == title){
            misprovedores.musica.splice(x, 1);
          }
        }
      break;
      case 4:
        for(x in misprovedores.flores){
          if(misprovedores.flores[x].title == title){
            misprovedores.flores.splice(x, 1);
          }
        }
      break;
      case 5:
        for(x in misprovedores.iluminacion){
          if(misprovedores.iluminacion[x].title == title){
            misprovedores.iluminacion.splice(x, 1);
          }
        }
      break;
      case 6:
        for(x in misprovedores.foto){
          if(misprovedores.foto[x].title == title){
            misprovedores.foto.splice(x, 1);
          }
        }
      break;
      case 7:
        for(x in misprovedores.ambientacion){
          if(misprovedores.ambientacion[x].title == title){
            misprovedores.ambientacion.splice(x, 1);
          }
        }
      break;
      case 8:
        for(x in misprovedores.elyella){
          if(misprovedores.elyella[x].title == title){
            misprovedores.elyella.splice(x, 1);
          }
        }
      break;
      case 9:
        for(x in misprovedores.mps){
          if(misprovedores.mps[x].title == title){
            misprovedores.mps.splice(x, 1);
          }
        }
      break;
      case 10:
        for(x in misprovedores.luna){
          if(misprovedores.luna[x].title == title){
            misprovedores.luna.splice(x, 1);
          }
        }
      break;
      case 11:
        for(x in misprovedores.mesa){
          if(misprovedores.mesa[x].title == title){
            misprovedores.mesa.splice(x, 1);
          }
        }
      break;
    }
    window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
    var myProvidersView = new steroids.views.WebView("http://localhost/views/myproviders/index.html");
    steroids.layers.push(myProvidersView);
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
