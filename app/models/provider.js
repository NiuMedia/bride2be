// The contents of individual model .js files will be concatenated into dist/models.js

(function() {

// Protects views where angular is not loaded from errors
if ( typeof angular == 'undefined' ) {
	return;
};

var module = angular.module('ProviderModel', ['restangular']);

module.factory('ProviderRestangular', function(Restangular) {
  var estado = window.localStorage.getItem("lugar");

    return Restangular.withConfig(function(RestangularConfigurer) {
      if(estado=="San Luis Potosí"){
      	// URL base para los provedores 
        RestangularConfigurer.setBaseUrl('http://bride2be.com.mx/api/proveedores_sanluis/');
        RestangularConfigurer.setResponseInterceptor(function(response, operation, what, url){
          if(url == "http://bride2be.com.mx/api/proveedores_sanluis/get_ceremonia/"){
            return response.ceremonia;
          }else if(url == "http://bride2be.com.mx/api/proveedores_sanluis/get_recepcion/"){
            return response.recepcion;
          }else if(url == "http://bride2be.com.mx/api/proveedores_sanluis/get_invitacion/"){
            return response.invitacion;
          }else if(url == "http://bride2be.com.mx/api/proveedores_sanluis/get_musica/"){
            return response.musica;
          }else if(url == "http://bride2be.com.mx/api/proveedores_sanluis/get_flores/"){
            return response.flores;
          }else if(url == "http://bride2be.com.mx/api/proveedores_sanluis/get_iluminacion/"){
            return response.iluminacion;
          }else if(url == "http://bride2be.com.mx/api/proveedores_sanluis/get_fotos/"){
            return response.fotos;
          }else if(url == "http://bride2be.com.mx/api/proveedores_sanluis/get_ambientacion/"){
            return response.ambientacion;
          }else if(url == "http://bride2be.com.mx/api/proveedores_sanluis/get_elyella/"){
            return response.elyella;
          }else if(url == "http://bride2be.com.mx/api/proveedores_sanluis/get_maquillaje/"){
            return response.maquillaje;
          }else if(url == "http://bride2be.com.mx/api/proveedores_sanluis/get_luna/"){
            return response.luna;
          }else if(url == "http://bride2be.com.mx/api/proveedores_sanluis/get_mesa/"){
            return response.mesa;
          }

        	return response;
        });
      }else if(estado=="Queretaro"){
        // URL base para los provedores 
        RestangularConfigurer.setBaseUrl('http://bride2be.com.mx/api/proveedores_queretaro/');
        RestangularConfigurer.setResponseInterceptor(function(response, operation, what, url){
          if(url == "http://bride2be.com.mx/api/proveedores_queretaro/get_ceremonia/"){
            return response.ceremonia;
          }else if(url == "http://bride2be.com.mx/api/proveedores_queretaro/get_recepcion/"){
            return response.recepcion;
          }else if(url == "http://bride2be.com.mx/api/proveedores_queretaro/get_invitacion/"){
            return response.invitacion;
          }else if(url == "http://bride2be.com.mx/api/proveedores_queretaro/get_musica/"){
            return response.musica;
          }else if(url == "http://bride2be.com.mx/api/proveedores_queretaro/get_flores/"){
            return response.flores;
          }else if(url == "http://bride2be.com.mx/api/proveedores_queretaro/get_iluminacion/"){
            return response.iluminacion;
          }else if(url == "http://bride2be.com.mx/api/proveedores_queretaro/get_fotos/"){
            return response.fotos;
          }else if(url == "http://bride2be.com.mx/api/proveedores_queretaro/get_ambientacion/"){
            return response.ambientacion;
          }else if(url == "http://bride2be.com.mx/api/proveedores_queretaro/get_elyella/"){
            return response.elyella;
          }else if(url == "http://bride2be.com.mx/api/proveedores_queretaro/get_maquillaje/"){
            return response.maquillaje;
          }else if(url == "http://bride2be.com.mx/api/proveedores_queretaro/get_luna/"){
            return response.luna;
          }else if(url == "http://bride2be.com.mx/api/proveedores_queretaro/get_mesa/"){
            return response.mesa;
          }

          return response;
        });
      }else{
        alert("No hay proveedores para tu estado "+estado);
      }

    });

});


})();
