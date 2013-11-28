var providerApp = angular.module('providerApp', ['ProviderModel', 'hmTouchevents']);


providerApp.factory('providersService', ['$http', function(http){
  var myProvidersService = {};
  var misProvedoresJSON = JSON.parse(window.localStorage.getItem("misprovedores"));

  myProvidersService.addProvider = function(id){

    http({method: 'GET', url: 'http://bride2be.com.mx/api/proveedores/single/?id='+id}).
      success(function(data, status, headers, config) {
        console.log(misProvedoresJSON);

        switch(steroids.view.params['tipo']){
          case 'ceremonia':
            for(x in misProvedoresJSON.ceremonia){
              if(misProvedoresJSON.ceremonia[x].title != data.result.title){
                misProvedoresJSON.ceremonia.push(data.result);
                alert("Provedor insertado correctamente");
              }else{
                alert("Provedor ya añadido");
              }
            }
          break;
          case 'recepcion':
            for(x in misProvedoresJSON.recepcion){
              if(misProvedoresJSON.recepcion[x].title != data.result.title){
                misProvedoresJSON.recepcion.push(data.result);
                alert("Provedor insertado correctamente");
              }else{
                alert("Provedor ya añadido");
              }
            }
          break;
          case 'invitaciones':
            for(x in misProvedoresJSON.invitaciones){
              if(misProvedoresJSON.invitaciones[x].title != data.result.title){
                misProvedoresJSON.invitaciones.push(data.result);
                alert("Provedor insertado correctamente");
              }else{
                alert("Provedor ya añadido");
              }
            }
          break;
          case 'flores':
            for(x in misProvedoresJSON.flores){
              if(misProvedoresJSON.flores[x].title != data.result.title){
                misProvedoresJSON.flores.push(data.result);
                alert("Provedor insertado correctamente");
              }else{
                alert("Provedor ya añadido");
              }
            }
          break;
          case 'iluminacion':
            for(x in misProvedoresJSON.iluminacion){
              if(misProvedoresJSON.iluminacion[x].title != data.result.title){
                misProvedoresJSON.iluminacion.push(data.result);
                alert("Provedor insertado correctamente");
              }else{
                alert("Provedor ya añadido");
              }
            }
          break;
          case 'fotos':
            for(x in misProvedoresJSON.foto){
              if(misProvedoresJSON.foto[x].title != data.result.title){
                misProvedoresJSON.foto.push(data.result);
                alert("Provedor insertado correctamente");
              }else{
                alert("Provedor ya añadido");
              }
            }
          break;
          case 'ambientacion':
            for(x in misProvedoresJSON.ambientacion){
              if(misProvedoresJSON.ambientacion[x].title != data.result.title){
                misProvedoresJSON.ambientacion.push(data.result);
                alert("Provedor insertado correctamente");
              }else{
                alert("Provedor ya añadido");
              }
            }
          break;
          case 'elyella':
            for(x in misProvedoresJSON.elyella){
              if(misProvedoresJSON.elyella[x].title != data.result.title){
                misProvedoresJSON.elyella.push(data.result);
                alert("Provedor insertado correctamente");
              }else{
                alert("Provedor ya añadido");
              }
            }
          break;
          case 'maquillaje':
            for(x in misProvedoresJSON.mps){
              if(misProvedoresJSON.mps[x].title != data.result.title){
                misProvedoresJSON.mps.push(data.result);
                alert("Provedor insertado correctamente");
              }else{
                alert("Provedor ya añadido");
              }
            }
          break;
          case 'luna':
            for(x in misProvedoresJSON.luna){
              if(misProvedoresJSON.luna[x].title != data.result.title){
                misProvedoresJSON.luna.push(data.result);
                alert("Provedor insertado correctamente");
              }else{
                alert("Provedor ya añadido");
              }
            }
          break;
          case 'mesa':
            for(x in misProvedoresJSON.mesa){
              if(misProvedoresJSON.mesa[x].title != data.result.title){
                misProvedoresJSON.mesa.push(data.result);
                alert("Provedor insertado correctamente");
              }else{
                alert("Provedor ya añadido");
              }
            }
          break;
          case 'musica':
            for(x in misProvedoresJSON.musica){
              if(misProvedoresJSON.musica[x].title != data.result.title){
                misProvedoresJSON.musica.push(data.result);
                alert("Provedor insertado correctamente");
              }else{
                alert("Provedor ya añadido");
              }
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

  // -- Native navigation
  steroids.view.navigationBar.show("Ceremonia Religiosa y Civil");

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

  // -- Native navigation
  steroids.view.navigationBar.show("Recepción y Banquetes");

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
  steroids.view.navigationBar.show("Invitaciones");

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
  steroids.view.navigationBar.show("Flores, Decoración y Coordinación");

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
  steroids.view.navigationBar.show("Iluminación y mobiliario");

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
  steroids.view.navigationBar.show("Foto y video");

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
  steroids.view.navigationBar.show("Ambientacion y más");

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
  steroids.view.navigationBar.show("El y ella");

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
  steroids.view.navigationBar.show("Maquillaje, peinado y spa");

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
  steroids.view.navigationBar.show("Luna de miel");

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
  steroids.view.navigationBar.show("Mesa de regalos y hogar");

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
  steroids.view.navigationBar.show("Música");

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
  steroids.view.navigationBar.show("");

});
