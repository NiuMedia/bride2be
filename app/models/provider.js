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
    /*RestangularConfigurer.setResponseInterceptor(function(response, operation, what, url){

    	if (operation == "getList") {
        for(x in response){
          str = response[x].content;
          str_unscaped = unescape(str);
          response[x].content = str_unscaped;
        }
      }

    	return response;
    });*/

  });

});


})();
