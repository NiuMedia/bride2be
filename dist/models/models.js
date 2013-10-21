// The contents of individual model .js files will be concatenated into dist/models.js

(function() {

// Protects views where angular is not loaded from errors
if ( typeof angular == 'undefined' ) {
	return;
};


var module = angular.module('InvitadosModel', ['restangular']);

module.factory('InvitadosRestangular', function(Restangular) {

  return Restangular.withConfig(function(RestangularConfigurer) {

    RestangularConfigurer.setBaseUrl('http://localhost/data');
    RestangularConfigurer.setRequestSuffix('.json');
    RestangularConfigurer.setRestangularFields({
      id: "invitados_id"
    });

  });

});


})();


// The contents of individual model .js files will be concatenated into dist/models.js

(function() {

// Protects views where angular is not loaded from errors
if ( typeof angular == 'undefined' ) {
	return;
};


var module = angular.module('ProviderModel', ['restangular']);

module.factory('ProviderRestangular', function(Restangular) {

  return Restangular.withConfig(function(RestangularConfigurer) {

  	// URL base para los provedores 
    RestangularConfigurer.setBaseUrl('http://bride2be.com.mx/wp-json.php/');
    /*RestangularConfigurer.setResponseExtractor(function(response, operation, what, url){

    	var newResponse;
    	if (operation === "getList") {
    		newResponse = response.posts;
    	}

    	return newResponse;
    });*/

  });

});


})();
