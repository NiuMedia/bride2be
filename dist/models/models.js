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


var module = angular.module('MyprovidersModel', ['restangular']);

module.factory('MyprovidersRestangular', function(Restangular) {

  return Restangular.withConfig(function(RestangularConfigurer) {

    RestangularConfigurer.setBaseUrl('http://localhost/data');
    RestangularConfigurer.setRequestSuffix('.json');
    RestangularConfigurer.setRestangularFields({
      id: "myproviders_id"
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
    RestangularConfigurer.setBaseUrl('http://bride2be.com.mx/api/proveedores/');
    RestangularConfigurer.setResponseInterceptor(function(response, operation, what, url){

      if(url == "http://bride2be.com.mx/api/proveedores/get_ceremonia/"){
        return response.ceremonia;
      }else if(url == "http://bride2be.com.mx/api/proveedores/get_recepcion/"){
        return response.recepcion;
      }else if(url == "http://bride2be.com.mx/api/proveedores/get_invitacion/"){
        return response.invitacion;
      }else if(url == "http://bride2be.com.mx/api/proveedores/get_musica/"){
        return response.musica;
      }else if(url == "http://bride2be.com.mx/api/proveedores/get_flores/"){
        return response.flores;
      }else if(url == "http://bride2be.com.mx/api/proveedores/get_iluminacion/"){
        return response.iluminacion;
      }else if(url == "http://bride2be.com.mx/api/proveedores/get_fotos/"){
        return response.fotos;
      }else if(url == "http://bride2be.com.mx/api/proveedores/get_ambientacion/"){
        return response.ambientacion;
      }else if(url == "http://bride2be.com.mx/api/proveedores/get_elyella/"){
        return response.elyella;
      }else if(url == "http://bride2be.com.mx/api/proveedores/get_maquillaje/"){
        return response.maquillaje;
      }else if(url == "http://bride2be.com.mx/api/proveedores/get_luna/"){
        return response.luna;
      }else if(url == "http://bride2be.com.mx/api/proveedores/get_mesa/"){
        return response.mesa;
      }

    	return response;
    });

  });

});


})();
