var myprovidersApp = angular.module('myprovidersApp', ['hmTouchevents']);


// Index: http://localhost/views/myproviders/index.html

myprovidersApp.controller('IndexCtrl', function ($scope) {

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/myproviders/show.html?id="+id);
    steroids.layers.push(webView);
  };

  // Fetch all objects from the local JSON (see app/models/myproviders.js)
  $scope.myproviderss = $.parseJSON(window.localStorage.getItem("misprovedores"));

  // -- Native navigation
  steroids.view.navigationBar.show("Mis Provedores");

});


// Show: http://localhost/views/myproviders/show.html?id=<id>

myprovidersApp.controller('ShowCtrl', function ($scope, $filter) {

  // Fetch all objects from the local JSON (see app/models/myproviders.js)
  MyprovidersRestangular.all('myproviders').getList().then( function(myproviderss) {
    // Then select the one based on the view's id query parameter
    $scope.myproviders = $filter('filter')(myproviderss, {myproviders_id: steroids.view.params['id']})[0];
  });

  // -- Native navigation
  steroids.view.navigationBar.show("Myproviders: " + steroids.view.params.id );

});