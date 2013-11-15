var providerApp = angular.module('providerApp', ['ProviderModel', 'hmTouchevents']);


/*providerApp.factory('providersService', function(){
  var myProvidersService = {};
  json_guest = $.parseJSON(window.localStorage.getItem("misprovedores"));

  myProvidersService.addProvider = function(invitado){
    json_guest.ceremonia.push(invitado.provedor);
    window.localStorage.setItem("invitados", JSON.stringify(json_guest));
  }

  return myProvidersService;

});*/

// Index: http://localhost/views/provider/index.html

providerApp.controller('CeremoniaCtrl', function ($scope, ProviderRestangular) {

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/provider/show.html?id="+id);
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
    webView = new steroids.views.WebView("/views/provider/show.html?id="+id);
    steroids.layers.push(webView);
  };

  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("invitados", "{\"ceremonia\":[], \"recepcion\":[], \"invitaciones\":[], \"flores\":[], \"iluminacion\":[], \"foto\":[], \"ambientacion\": [], \"elyella\": [], \"mps\":[], \"luna\":[], \"mesa\":[], \"musica\": []}");
  }

  // Fetch all objects from the local JSON (see app/models/provider.js)
  $scope.providers = ProviderRestangular.all('posts?type=recepcion').getList();

  // -- Native navigation
  steroids.view.navigationBar.show("Recepción y Banquetes");

});


// Index: http://localhost/views/provider/index.html

providerApp.controller('InvitacionesCtrl', function ($scope, ProviderRestangular) {

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/provider/show.html?id="+id);
    steroids.layers.push(webView);
  };

  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("invitados", "{\"ceremonia\":[], \"recepcion\":[], \"invitaciones\":[], \"flores\":[], \"iluminacion\":[], \"foto\":[], \"ambientacion\": [], \"elyella\": [], \"mps\":[], \"luna\":[], \"mesa\":[], \"musica\": []}");
  }

  // Fetch all objects from the local JSON (see app/models/provider.js)
  $scope.providers = ProviderRestangular.all('posts?type=invitaciones').getList();

  // -- Native navigation
  steroids.view.navigationBar.show("Invitaciones");

});

// Index: http://localhost/views/provider/index.html

providerApp.controller('FloresCtrl', function ($scope, ProviderRestangular) {

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/provider/show.html?id="+id);
    steroids.layers.push(webView);
  };

  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("invitados", "{\"ceremonia\":[], \"recepcion\":[], \"invitaciones\":[], \"flores\":[], \"iluminacion\":[], \"foto\":[], \"ambientacion\": [], \"elyella\": [], \"mps\":[], \"luna\":[], \"mesa\":[], \"musica\": []}");
  }

  // Fetch all objects from the local JSON (see app/models/provider.js)
  $scope.providers = ProviderRestangular.all('posts?type=flores').getList();

  // -- Native navigation
  steroids.view.navigationBar.show("Flores, Decoración y Coordinación");

});

// Index: http://localhost/views/provider/index.html

providerApp.controller('IluminacionCtrl', function ($scope, ProviderRestangular) {

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/provider/show.html?id="+id);
    steroids.layers.push(webView);
  };
  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("invitados", "{\"ceremonia\":[], \"recepcion\":[], \"invitaciones\":[], \"flores\":[], \"iluminacion\":[], \"foto\":[], \"ambientacion\": [], \"elyella\": [], \"mps\":[], \"luna\":[], \"mesa\":[], \"musica\": []}");
  }
  // Fetch all objects from the local JSON (see app/models/provider.js)
  $scope.providers = ProviderRestangular.all('posts?type=iluminacion').getList();

  // -- Native navigation
  steroids.view.navigationBar.show("Iluminación y mobiliario");

});

// Index: http://localhost/views/provider/index.html

providerApp.controller('FotosCtrl', function ($scope, ProviderRestangular) {

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/provider/show.html?id="+id);
    steroids.layers.push(webView);
  };
  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("invitados", "{\"ceremonia\":[], \"recepcion\":[], \"invitaciones\":[], \"flores\":[], \"iluminacion\":[], \"foto\":[], \"ambientacion\": [], \"elyella\": [], \"mps\":[], \"luna\":[], \"mesa\":[], \"musica\": []}");
  }
  // Fetch all objects from the local JSON (see app/models/provider.js)
  $scope.providers = ProviderRestangular.all('posts?type=foto').getList();

  // -- Native navigation
  steroids.view.navigationBar.show("Foto y video");

});

// Index: http://localhost/views/provider/index.html

providerApp.controller('AmbientacionCtrl', function ($scope, ProviderRestangular) {

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/provider/show.html?id="+id);
    steroids.layers.push(webView);
  };
  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("invitados", "{\"ceremonia\":[], \"recepcion\":[], \"invitaciones\":[], \"flores\":[], \"iluminacion\":[], \"foto\":[], \"ambientacion\": [], \"elyella\": [], \"mps\":[], \"luna\":[], \"mesa\":[], \"musica\": []}");
  }
  // Fetch all objects from the local JSON (see app/models/provider.js)
  $scope.providers = ProviderRestangular.all('posts?type=ambientacion').getList();

  // -- Native navigation
  steroids.view.navigationBar.show("Ambientacion y más");

});

// Index: http://localhost/views/provider/index.html

providerApp.controller('ElyEllaCtrl', function ($scope, ProviderRestangular) {

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/provider/show.html?id="+id);
    steroids.layers.push(webView);
  };
  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("invitados", "{\"ceremonia\":[], \"recepcion\":[], \"invitaciones\":[], \"flores\":[], \"iluminacion\":[], \"foto\":[], \"ambientacion\": [], \"elyella\": [], \"mps\":[], \"luna\":[], \"mesa\":[], \"musica\": []}");
  }
  // Fetch all objects from the local JSON (see app/models/provider.js)
  $scope.providers = ProviderRestangular.all('posts?type=elyella').getList();

  // -- Native navigation
  steroids.view.navigationBar.show("El y ella");

});

// Index: http://localhost/views/provider/index.html

providerApp.controller('MaquillajeCtrl', function ($scope, ProviderRestangular) {

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/provider/show.html?id="+id);
    steroids.layers.push(webView);
  };
  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("invitados", "{\"ceremonia\":[], \"recepcion\":[], \"invitaciones\":[], \"flores\":[], \"iluminacion\":[], \"foto\":[], \"ambientacion\": [], \"elyella\": [], \"mps\":[], \"luna\":[], \"mesa\":[], \"musica\": []}");
  }
  // Fetch all objects from the local JSON (see app/models/provider.js)
  $scope.providers = ProviderRestangular.all('posts?type=mps').getList();

  // -- Native navigation
  steroids.view.navigationBar.show("Maquillaje, peinado y spa");

});

// Index: http://localhost/views/provider/index.html

providerApp.controller('LunaCtrl', function ($scope, ProviderRestangular) {

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/provider/show.html?id="+id);
    steroids.layers.push(webView);
  };
  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("invitados", "{\"ceremonia\":[], \"recepcion\":[], \"invitaciones\":[], \"flores\":[], \"iluminacion\":[], \"foto\":[], \"ambientacion\": [], \"elyella\": [], \"mps\":[], \"luna\":[], \"mesa\":[], \"musica\": []}");
  }
  // Fetch all objects from the local JSON (see app/models/provider.js)
  $scope.providers = ProviderRestangular.all('posts?type=luna').getList();

  // -- Native navigation
  steroids.view.navigationBar.show("Luna de miel");

});

// Index: http://localhost/views/provider/index.html

providerApp.controller('MesaCtrl', function ($scope, ProviderRestangular) {

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/provider/show.html?id="+id);
    steroids.layers.push(webView);
  };
  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("invitados", "{\"ceremonia\":[], \"recepcion\":[], \"invitaciones\":[], \"flores\":[], \"iluminacion\":[], \"foto\":[], \"ambientacion\": [], \"elyella\": [], \"mps\":[], \"luna\":[], \"mesa\":[], \"musica\": []}");
  }
  // Fetch all objects from the local JSON (see app/models/provider.js)
  $scope.providers = ProviderRestangular.all('posts?type=mesa').getList();

  // -- Native navigation
  steroids.view.navigationBar.show("Mesa de regalos y hogar");

});

// Index: http://localhost/views/provider/index.html

providerApp.controller('MusicaCtrl', function ($scope, ProviderRestangular) {

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/provider/show.html?id="+id);
    steroids.layers.push(webView);
  };
  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("invitados", "{\"ceremonia\":[], \"recepcion\":[], \"invitaciones\":[], \"flores\":[], \"iluminacion\":[], \"foto\":[], \"ambientacion\": [], \"elyella\": [], \"mps\":[], \"luna\":[], \"mesa\":[], \"musica\": []}");
  }
  // Fetch all objects from the local JSON (see app/models/provider.js)
  $scope.providers = ProviderRestangular.all('posts?type=musica').getList();

  // -- Native navigation
  steroids.view.navigationBar.show("Música");

});

// Show: http://localhost/views/provider/show.html?id=<id>

providerApp.controller('ShowCtrl', function ($scope, $filter, ProviderRestangular) {

  //$scope.providersService = providersService;

  //$scope.newMyProvider = {};

  // Fetch all objects from the local JSON (see app/models/provider.js)
  ProviderRestangular.all('get_ceremonia/').getList().then( function(providers) {
    // Then select the one based on the view's id query parameter
    $scope.provider = $filter('filter')(providers, {id: steroids.view.params['id']})[0];
  });

  //alert(steroids.view.params['id']);

  //$scope.provider = ProviderRestangular.oneUrl('provedor','http://bride2be.com.mx/api/proveedores/single/?id='+steroids.view.params['id']).get();

  // -- Native navigation
  steroids.view.navigationBar.show("");

});
