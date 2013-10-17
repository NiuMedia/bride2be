var providerApp = angular.module('providerApp', ['ProviderModel', 'hmTouchevents']);


// Index: http://localhost/views/provider/index.html

providerApp.controller('FloresCtrl', function ($scope, ProviderRestangular) {

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/provider/show.html?id="+id);
    steroids.layers.push(webView);
  };

  // Fetch all objects from the local JSON (see app/models/provider.js)
  $scope.providers = ProviderRestangular.all('posts?type=flores').getList();

  // -- Native navigation
  steroids.view.navigationBar.show("Flores");

});

// Index: http://localhost/views/provider/index.html

providerApp.controller('CeremoniaCtrl', function ($scope, ProviderRestangular) {

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/provider/show.html?id="+id);
    steroids.layers.push(webView);
  };

  // Fetch all objects from the local JSON (see app/models/provider.js)
  $scope.providers = ProviderRestangular.all('posts?type=ceremonia').getList().then(function(){
    alert("Todo esta bien");
  }, function(error){
    alert(JSON.stringify(error));
  });

  // -- Native navigation
  steroids.view.navigationBar.show("Ceremonia");

});


// Show: http://localhost/views/provider/show.html?id=<id>

providerApp.controller('ShowCtrl', function ($scope, $filter, ProviderRestangular) {

  // Fetch all objects from the local JSON (see app/models/provider.js)
  ProviderRestangular.all('provider').getList().then( function(providers) {
    // Then select the one based on the view's id query parameter
    $scope.provider = $filter('filter')(providers, {provider_id: steroids.view.params['id']})[0];
  });

  // -- Native navigation
  steroids.view.navigationBar.show("Provider: " + steroids.view.params.id );

});
