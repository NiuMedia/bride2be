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
    RestangularConfigurer.setBaseUrl('http://bride2be.com.mx/api/proveedores/');
    RestangularConfigurer.setResponseInterceptor(function(response, operation, what, url){

      if(url == "http://bride2be.com.mx/api/proveedores/get_ceremonia/"){
        return response.ceremonia;
      }else if(url == "http://bride2be.com.mx/api/proveedores/get_recepcion/"){
        return response.recepcion;
      }

    	return response;
    });

  });

});


})();
