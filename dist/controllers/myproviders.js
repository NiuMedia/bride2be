var myprovidersApp = angular.module('myprovidersApp', ['hmTouchevents']);

myprovidersApp.factory('miProveedorService', function(){
  var myMiProveedorService = {};
  var misProvedoresJSON = JSON.parse(window.localStorage.getItem("misprovedores"));

  myMiProveedorService.returnToList = function(){
    returnView = new steroids.views.WebView("/views/myproviders/index.html");
    steroids.layers.push({view:returnView});
    steroids.layers.popAll();
  }

  myMiProveedorService.addMiProveedor = function(tipo,miProveedor){
    switch(tipo){
      case 'ceremonia':
        var flag_done=false;
        var flag_ceremonia=false;
        if (misProvedoresJSON.ceremonia==''){//si el JSON de ceremonia está vacío
          misProvedoresJSON.ceremonia.push(miProveedor);//se guarda el resultado en el json
          navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
          flag_done=true;
        }else{//si el json no está vacío
          for(x in misProvedoresJSON.ceremonia){//se recorre cada elemento del json de ceremonia
            if(misProvedoresJSON.ceremonia[x].title == miProveedor.title){//si el título del elemento a guardar es igual al titulo del elemento del json
             flag_ceremonia=true;
             break;
            }
          }
        }
        if(flag_ceremonia==false && flag_done==false){
          misProvedoresJSON.ceremonia.push(miProveedor);//
          navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
        }else if(flag_done==false){
          navigator.notification.alert("Proveedor ya guardado anteriormente", function(){}, "Bride2Be");
        }
      break;
      case 'recepcion':
        var flag_done=false;
        var flag_recepcion=false;
        if (misProvedoresJSON.recepcion==''){//si el JSON de recepcion está vacío
          misProvedoresJSON.recepcion.push(miProveedor);//se guarda el resultado en el json
          navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
          flag_done=true;
        }else{//si el json no está vacío
          for(x in misProvedoresJSON.recepcion){//se recorre cada elemento del json de recepcion
            if(misProvedoresJSON.recepcion[x].title == miProveedor.title){//si el título del elemento a guardar es igual al titulo del elemento del json
             flag_recepcion=true; 
             break;
            }
          }
        }
        if(flag_recepcion==false && flag_done==false){
          misProvedoresJSON.recepcion.push(miProveedor);//
          navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
        }else if(flag_done==false){
          navigator.notification.alert("Proveedor ya guardado anteriormente", function(){}, "Bride2Be");
        }
      break;
      case 'invitaciones':
        var flag_done=false;
        var flag_invitaciones=false;
        if (misProvedoresJSON.invitaciones==''){//si el JSON de invitaciones está vacío
          misProvedoresJSON.invitaciones.push(miProveedor);//se guarda el resultado en el json
          navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
          flag_done=true;
        }else{//si el json no está vacío
          for(x in misProvedoresJSON.invitaciones){//se recorre cada elemento del json de invitaciones
            if(misProvedoresJSON.invitaciones[x].title == miProveedor.title){//si el título del elemento a guardar es igual al titulo del elemento del json
             flag_invitaciones=true; 
             break;
            }
          }
        }
        if(flag_invitaciones==false && flag_done==false){
          misProvedoresJSON.invitaciones.push(miProveedor);//
          navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
        }else if(flag_done==false){
          navigator.notification.alert("Proveedor ya guardado anteriormente", function(){}, "Bride2Be");
        }
      break;
      case 'flores':
        var flag_done=false;
        var flag_flores=false;
        if (misProvedoresJSON.flores==''){//si el JSON de flores está vacío
          misProvedoresJSON.flores.push(miProveedor);//se guarda el resultado en el json
          navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
          flag_done=true;
        }else{//si el json no está vacío
          for(x in misProvedoresJSON.flores){//se recorre cada elemento del json de flores
            if(misProvedoresJSON.flores[x].title == miProveedor.title){//si el título del elemento a guardar es igual al titulo del elemento del json
             flag_flores=true; 
             break;
            }
          }
        }
        if(flag_flores==false && flag_done==false){
          misProvedoresJSON.flores.push(miProveedor);//
          navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
        }else if(flag_done==false){
          navigator.notification.alert("Proveedor ya guardado anteriormente", function(){}, "Bride2Be");
        }
      break;
      case 'iluminacion':
        var flag_done=false;
        var flag_iluminacion=false;
        if (misProvedoresJSON.iluminacion==''){//si el JSON de iluminacion está vacío
          misProvedoresJSON.iluminacion.push(miProveedor);//se guarda el resultado en el json
          navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
          flag_done=true;
        }else{//si el json no está vacío
          for(x in misProvedoresJSON.iluminacion){//se recorre cada elemento del json de iluminacion
            if(misProvedoresJSON.iluminacion[x].title == miProveedor.title){//si el título del elemento a guardar es igual al titulo del elemento del json
             flag_iluminacion=true; 
             break;
            }
          }
        }
        if(flag_iluminacion==false && flag_done==false){
          misProvedoresJSON.iluminacion.push(miProveedor);//
          navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
        }else if(flag_done==false){
          navigator.notification.alert("Proveedor ya guardado anteriormente", function(){}, "Bride2Be");
        }
      break;
      case 'foto':
        var flag_done=false;
        var flag_foto=false;
        if (misProvedoresJSON.foto==''){//si el JSON de foto está vacío
          misProvedoresJSON.foto.push(miProveedor);//se guarda el resultado en el json
          navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
          flag_done=true;
        }else{//si el json no está vacío
          for(x in misProvedoresJSON.foto){//se recorre cada elemento del json de foto
            if(misProvedoresJSON.foto[x].title == miProveedor.title){//si el título del elemento a guardar es igual al titulo del elemento del json
             flag_foto=true; 
             break;
            }
          }
        }
        if(flag_foto==false && flag_done==false){
          misProvedoresJSON.foto.push(miProveedor);//
          navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
        }else if(flag_done==false){
          navigator.notification.alert("Proveedor ya guardado anteriormente", function(){}, "Bride2Be");
        }
      break;
      case 'ambientacion':
        var flag_done=false;
        var flag_ambientacion=false;
        if (misProvedoresJSON.ambientacion==''){//si el JSON de ambientacion está vacío
          misProvedoresJSON.ambientacion.push(miProveedor);//se guarda el resultado en el json
          navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
          flag_done=true;
        }else{//si el json no está vacío
          for(x in misProvedoresJSON.ambientacion){//se recorre cada elemento del json de ambientacion
            if(misProvedoresJSON.ambientacion[x].title == miProveedor.title){//si el título del elemento a guardar es igual al titulo del elemento del json
             flag_ambientacion=true; 
             break;
            }
          }
        }
        if(flag_ambientacion==false && flag_done==false){
          misProvedoresJSON.ambientacion.push(miProveedor);//
          navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
        }else if(flag_done==false){
          navigator.notification.alert("Proveedor ya guardado anteriormente", function(){}, "Bride2Be");
        }
      break;
      case 'elyella':
        var flag_done=false;
        var flag_elyella=false;
        if (misProvedoresJSON.elyella==''){//si el JSON de elyella está vacío
          misProvedoresJSON.elyella.push(miProveedor);//se guarda el resultado en el json
          navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
          flag_done=true;
        }else{//si el json no está vacío
          for(x in misProvedoresJSON.elyella){//se recorre cada elemento del json de elyella
            if(misProvedoresJSON.elyella[x].title == miProveedor.title){//si el título del elemento a guardar es igual al titulo del elemento del json
             flag_elyella=true; 
             break;
            }
          }
        }
        if(flag_elyella==false && flag_done==false){
          misProvedoresJSON.elyella.push(miProveedor);//
          navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
        }else if(flag_done==false){
          navigator.notification.alert("Proveedor ya guardado anteriormente", function(){}, "Bride2Be");
        }
      break;
      case 'maquillaje':
        var flag_done=false;
        var flag_maquillaje=false;
        if (misProvedoresJSON.maquillaje==''){//si el JSON de maquillaje está vacío
          misProvedoresJSON.maquillaje.push(miProveedor);//se guarda el resultado en el json
          navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
          flag_done=true;
        }else{//si el json no está vacío
          for(x in misProvedoresJSON.maquillaje){//se recorre cada elemento del json de maquillaje
            if(misProvedoresJSON.maquillaje[x].title == miProveedor.title){//si el título del elemento a guardar es igual al titulo del elemento del json
             flag_maquillaje=true; 
             break;
            }
          }
        }
        if(flag_maquillaje==false && flag_done==false){
          misProvedoresJSON.maquillaje.push(miProveedor);//
          navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
        }else if(flag_done==false){
          navigator.notification.alert("Proveedor ya guardado anteriormente", function(){}, "Bride2Be");
        }
      break;
      case 'luna':
        var flag_done=false;
        var flag_luna=false;
        if (misProvedoresJSON.luna==''){//si el JSON de luna está vacío
          misProvedoresJSON.luna.push(miProveedor);//se guarda el resultado en el json
          navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
          flag_done=true;
        }else{//si el json no está vacío
          for(x in misProvedoresJSON.luna){//se recorre cada elemento del json de luna
            if(misProvedoresJSON.luna[x].title == miProveedor.title){//si el título del elemento a guardar es igual al titulo del elemento del json
             flag_luna=true; 
             break;
            }
          }
        }
        if(flag_luna==false && flag_done==false){
          misProvedoresJSON.luna.push(miProveedor);//
          navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
        }else if(flag_done==false){
          navigator.notification.alert("Proveedor ya guardado anteriormente", function(){}, "Bride2Be");
        }
      break;
      case 'mesa':
        var flag_done=false;
        var flag_mesa=false;
        if (misProvedoresJSON.mesa==''){//si el JSON de mesa está vacío
          misProvedoresJSON.mesa.push(miProveedor);//se guarda el resultado en el json
          navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
          flag_done=true;
        }else{//si el json no está vacío
          for(x in misProvedoresJSON.mesa){//se recorre cada elemento del json de mesa
            if(misProvedoresJSON.mesa[x].title == miProveedor.title){//si el título del elemento a guardar es igual al titulo del elemento del json
             flag_mesa=true; 
             break;
            }
          }
        }
        if(flag_mesa==false && flag_done==false){
          misProvedoresJSON.mesa.push(miProveedor);//
          navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
        }else if(flag_done==false){
          navigator.notification.alert("Proveedor ya guardado anteriormente", function(){}, "Bride2Be");
        }
      break;
      case 'musica':
        var flag_done=false;
        var flag_musica=false;
        if (misProvedoresJSON.musica==''){//si el JSON de musica está vacío
          misProvedoresJSON.musica.push(miProveedor);//se guarda el resultado en el json
          navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
          flag_done=true;
        }else{//si el json no está vacío
          for(x in misProvedoresJSON.musica){//se recorre cada elemento del json de musica
            if(misProvedoresJSON.musica[x].title == miProveedor.title){//si el título del elemento a guardar es igual al titulo del elemento del json
             flag_musica=true; 
             break;
            }
          }
        }
        if(flag_musica==false && flag_done==false){
          misProvedoresJSON.musica.push(miProveedor);//
          navigator.notification.alert("Guardado en Mis Proveedores", function(){}, "Bride2Be");
        }else if(flag_done==false){
          navigator.notification.alert("Proveedor ya guardado anteriormente", function(){}, "Bride2Be");
        }
      break;
    }
    window.localStorage.setItem("misprovedores", JSON.stringify(misProvedoresJSON));
  }

  //-------------------  UPDATE -------------------------- 

  myMiProveedorService.updateCeremonia = function(newMiProveedor){
    var miProvActual;
    for(var i = 0; i < misProvedoresJSON.ceremonia.length; i++){
      if(misProvedoresJSON.ceremonia[i].id == steroids.view.params.id){
        miProvActual=i;
        break;
      }
    }
    miProveedor = misProvedoresJSON.ceremonia[miProvActual];
    miProveedor.id = newMiProveedor.id;
    miProveedor.propio = newMiProveedor.propio;
    miProveedor.editar = newMiProveedor.editar;
    miProveedor.title = newMiProveedor.title;
    miProveedor.direccion = newMiProveedor.direccion;
    miProveedor.phone = newMiProveedor.phone;
    miProveedor.phone2 = newMiProveedor.phone2;
    miProveedor.email = newMiProveedor.email;
    misProvedoresJSON.ceremonia[miProvActual] = miProveedor;

    window.localStorage.setItem("misprovedores", JSON.stringify(misProvedoresJSON));
  };

  myMiProveedorService.updateRecepcion = function(newMiProveedor){
    var miProvActual;
    for(var i = 0; i < misProvedoresJSON.recepcion.length; i++){
      if(misProvedoresJSON.recepcion[i].id == steroids.view.params.id){
        miProvActual=i;
        break;
      }
    }
    miProveedor = misProvedoresJSON.recepcion[miProvActual];
    miProveedor.id = newMiProveedor.id;
    miProveedor.propio = newMiProveedor.propio;
    miProveedor.editar = newMiProveedor.editar;
    miProveedor.title = newMiProveedor.title;
    miProveedor.direccion = newMiProveedor.direccion;
    miProveedor.phone = newMiProveedor.phone;
    miProveedor.phone2 = newMiProveedor.phone2;
    miProveedor.email = newMiProveedor.email;
    misProvedoresJSON.recepcion[miProvActual] = miProveedor;

    window.localStorage.setItem("misprovedores", JSON.stringify(misProvedoresJSON));
  };

  myMiProveedorService.updateAmbientacion = function(newMiProveedor){
    var miProvActual;
    for(var i = 0; i < misProvedoresJSON.ambientacion.length; i++){
      if(misProvedoresJSON.ambientacion[i].id == steroids.view.params.id){
        miProvActual=i;
        break;
      }
    }
    miProveedor = misProvedoresJSON.ambientacion[miProvActual];
    miProveedor.id = newMiProveedor.id;
    miProveedor.propio = newMiProveedor.propio;
    miProveedor.editar = newMiProveedor.editar;
    miProveedor.title = newMiProveedor.title;
    miProveedor.direccion = newMiProveedor.direccion;
    miProveedor.phone = newMiProveedor.phone;
    miProveedor.phone2 = newMiProveedor.phone2;
    miProveedor.email = newMiProveedor.email;
    misProvedoresJSON.ambientacion[miProvActual] = miProveedor;

    window.localStorage.setItem("misprovedores", JSON.stringify(misProvedoresJSON));
  };

  myMiProveedorService.updateElyella = function(newMiProveedor){
    var miProvActual;
    for(var i = 0; i < misProvedoresJSON.elyella.length; i++){
      if(misProvedoresJSON.elyella[i].id == steroids.view.params.id){
        miProvActual=i;
        break;
      }
    }
    miProveedor = misProvedoresJSON.elyella[miProvActual];
    miProveedor.id = newMiProveedor.id;
    miProveedor.propio = newMiProveedor.propio;
    miProveedor.editar = newMiProveedor.editar;
    miProveedor.title = newMiProveedor.title;
    miProveedor.direccion = newMiProveedor.direccion;
    miProveedor.phone = newMiProveedor.phone;
    miProveedor.phone2 = newMiProveedor.phone2;
    miProveedor.email = newMiProveedor.email;
    misProvedoresJSON.elyella[miProvActual] = miProveedor;

    window.localStorage.setItem("misprovedores", JSON.stringify(misProvedoresJSON));
  };

  myMiProveedorService.updateFlores = function(newMiProveedor){
    var miProvActual;
    for(var i = 0; i < misProvedoresJSON.flores.length; i++){
      if(misProvedoresJSON.flores[i].id == steroids.view.params.id){
        miProvActual=i;
        break;
      }
    }
    miProveedor = misProvedoresJSON.flores[miProvActual];
    miProveedor.id = newMiProveedor.id;
    miProveedor.propio = newMiProveedor.propio;
    miProveedor.editar = newMiProveedor.editar;
    miProveedor.title = newMiProveedor.title;
    miProveedor.direccion = newMiProveedor.direccion;
    miProveedor.phone = newMiProveedor.phone;
    miProveedor.phone2 = newMiProveedor.phone2;
    miProveedor.email = newMiProveedor.email;
    misProvedoresJSON.flores[miProvActual] = miProveedor;

    window.localStorage.setItem("misprovedores", JSON.stringify(misProvedoresJSON));
  };

  myMiProveedorService.updateFoto = function(newMiProveedor){
    var miProvActual;
    for(var i = 0; i < misProvedoresJSON.foto.length; i++){
      if(misProvedoresJSON.foto[i].id == steroids.view.params.id){
        miProvActual=i;
        break;
      }
    }
    miProveedor = misProvedoresJSON.foto[miProvActual];
    miProveedor.id = newMiProveedor.id;
    miProveedor.propio = newMiProveedor.propio;
    miProveedor.editar = newMiProveedor.editar;
    miProveedor.title = newMiProveedor.title;
    miProveedor.direccion = newMiProveedor.direccion;
    miProveedor.phone = newMiProveedor.phone;
    miProveedor.phone2 = newMiProveedor.phone2;
    miProveedor.email = newMiProveedor.email;
    misProvedoresJSON.foto[miProvActual] = miProveedor;

    window.localStorage.setItem("misprovedores", JSON.stringify(misProvedoresJSON));
  };

  myMiProveedorService.updateIluminacion = function(newMiProveedor){
    var miProvActual;
    for(var i = 0; i < misProvedoresJSON.iluminacion.length; i++){
      if(misProvedoresJSON.iluminacion[i].id == steroids.view.params.id){
        miProvActual=i;
        break;
      }
    }
    miProveedor = misProvedoresJSON.iluminacion[miProvActual];
    miProveedor.id = newMiProveedor.id;
    miProveedor.propio = newMiProveedor.propio;
    miProveedor.editar = newMiProveedor.editar;
    miProveedor.title = newMiProveedor.title;
    miProveedor.direccion = newMiProveedor.direccion;
    miProveedor.phone = newMiProveedor.phone;
    miProveedor.phone2 = newMiProveedor.phone2;
    miProveedor.email = newMiProveedor.email;
    misProvedoresJSON.iluminacion[miProvActual] = miProveedor;

    window.localStorage.setItem("misprovedores", JSON.stringify(misProvedoresJSON));
  };

  myMiProveedorService.updateInvitaciones = function(newMiProveedor){
    var miProvActual;
    for(var i = 0; i < misProvedoresJSON.invitaciones.length; i++){
      if(misProvedoresJSON.invitaciones[i].id == steroids.view.params.id){
        miProvActual=i;
        break;
      }
    }
    miProveedor = misProvedoresJSON.invitaciones[miProvActual];
    miProveedor.id = newMiProveedor.id;
    miProveedor.propio = newMiProveedor.propio;
    miProveedor.editar = newMiProveedor.editar;
    miProveedor.title = newMiProveedor.title;
    miProveedor.direccion = newMiProveedor.direccion;
    miProveedor.phone = newMiProveedor.phone;
    miProveedor.phone2 = newMiProveedor.phone2;
    miProveedor.email = newMiProveedor.email;
    misProvedoresJSON.invitaciones[miProvActual] = miProveedor;

    window.localStorage.setItem("misprovedores", JSON.stringify(misProvedoresJSON));
  };

  myMiProveedorService.updateLuna = function(newMiProveedor){
    var miProvActual;
    for(var i = 0; i < misProvedoresJSON.luna.length; i++){
      if(misProvedoresJSON.luna[i].id == steroids.view.params.id){
        miProvActual=i;
        break;
      }
    }
    miProveedor = misProvedoresJSON.luna[miProvActual];
    miProveedor.id = newMiProveedor.id;
    miProveedor.propio = newMiProveedor.propio;
    miProveedor.editar = newMiProveedor.editar;
    miProveedor.title = newMiProveedor.title;
    miProveedor.direccion = newMiProveedor.direccion;
    miProveedor.phone = newMiProveedor.phone;
    miProveedor.phone2 = newMiProveedor.phone2;
    miProveedor.email = newMiProveedor.email;
    misProvedoresJSON.luna[miProvActual] = miProveedor;

    window.localStorage.setItem("misprovedores", JSON.stringify(misProvedoresJSON));
  };

  myMiProveedorService.updateMesa = function(newMiProveedor){
    var miProvActual;
    for(var i = 0; i < misProvedoresJSON.mesa.length; i++){
      if(misProvedoresJSON.mesa[i].id == steroids.view.params.id){
        miProvActual=i;
        break;
      }
    }
    miProveedor = misProvedoresJSON.mesa[miProvActual];
    miProveedor.id = newMiProveedor.id;
    miProveedor.propio = newMiProveedor.propio;
    miProveedor.editar = newMiProveedor.editar;
    miProveedor.title = newMiProveedor.title;
    miProveedor.direccion = newMiProveedor.direccion;
    miProveedor.phone = newMiProveedor.phone;
    miProveedor.phone2 = newMiProveedor.phone2;
    miProveedor.email = newMiProveedor.email;
    misProvedoresJSON.mesa[miProvActual] = miProveedor;

    window.localStorage.setItem("misprovedores", JSON.stringify(misProvedoresJSON));
  };

  myMiProveedorService.updateMps = function(newMiProveedor){
    var miProvActual;
    for(var i = 0; i < misProvedoresJSON.mps.length; i++){
      if(misProvedoresJSON.mps[i].id == steroids.view.params.id){
        miProvActual=i;
        break;
      }
    }
    miProveedor = misProvedoresJSON.mps[miProvActual];
    miProveedor.id = newMiProveedor.id;
    miProveedor.propio = newMiProveedor.propio;
    miProveedor.editar = newMiProveedor.editar;
    miProveedor.title = newMiProveedor.title;
    miProveedor.direccion = newMiProveedor.direccion;
    miProveedor.phone = newMiProveedor.phone;
    miProveedor.phone2 = newMiProveedor.phone2;
    miProveedor.email = newMiProveedor.email;
    misProvedoresJSON.mps[miProvActual] = miProveedor;

    window.localStorage.setItem("misprovedores", JSON.stringify(misProvedoresJSON));
  };

  myMiProveedorService.updateMusica = function(newMiProveedor){
    var miProvActual;
    for(var i = 0; i < misProvedoresJSON.musica.length; i++){
      if(misProvedoresJSON.musica[i].id == steroids.view.params.id){
        miProvActual=i;
        break;
      }
    }
    miProveedor = misProvedoresJSON.musica[miProvActual];
    miProveedor.id = newMiProveedor.id;
    miProveedor.propio = newMiProveedor.propio;
    miProveedor.editar = newMiProveedor.editar;
    miProveedor.title = newMiProveedor.title;
    miProveedor.direccion = newMiProveedor.direccion;
    miProveedor.phone = newMiProveedor.phone;
    miProveedor.phone2 = newMiProveedor.phone2;
    miProveedor.email = newMiProveedor.email;
    misProvedoresJSON.musica[miProvActual] = miProveedor;

    window.localStorage.setItem("misprovedores", JSON.stringify(misProvedoresJSON));
  };

  //------------------- CLOSE UPDATE --------------------------

  return myMiProveedorService;

});

//-------------------  INDEX CONTROLLER -------------------------- {

// Index: http://localhost/views/myproviders/index.html
myprovidersApp.controller('IndexCtrl', function ($scope) {
  var myIndexCtrl = {};
  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/myproviders/new-"+id+".html");
    steroids.layers.push(webView);
  };

  $scope.delete = function(title, type) {
    misprovedores = JSON.parse(window.localStorage.getItem("misprovedores"));
    var indexView = new steroids.views.WebView("/views/myproviders/index.html");
    var myAnimation = new steroids.Animation({
      transition: "fade"
    });

    switch(type){
      case 0:
        for(x in misprovedores.ceremonia){
          if(misprovedores.ceremonia[x].title == title){
            navigator.notification.confirm("¿Segura que quieres eliminar este proveedor?",
              function(buttonIndex,x){
                if(buttonIndex==1){
                  misprovedores.ceremonia.splice(x, 1);
                  window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
                  steroids.layers.push({ view: indexView, animation: myAnimation });
                }
              },
              "Bride2Be",
              ['Aceptar','Cancelar']);
          }
        }
      break;
      case 1:
        for(x in misprovedores.recepcion){
          if(misprovedores.recepcion[x].title == title){
            navigator.notification.confirm("¿Segura que quieres eliminar este proveedor?",
              function(buttonIndex,x){
                if(buttonIndex==1){
                  misprovedores.recepcion.splice(x, 1);
                  window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
                  steroids.layers.push({ view: indexView, animation: myAnimation });
                }
              },
              "Bride2Be",
              ['Aceptar','Cancelar']);
          }
        }
      break;
      case 2:
        for(x in misprovedores.invitaciones){
          if(misprovedores.invitaciones[x].title == title){
            navigator.notification.confirm("¿Segura que quieres eliminar este proveedor?",
              function(buttonIndex,x){
                if(buttonIndex==1){
                  misprovedores.invitaciones.splice(x, 1);
                  window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
                  steroids.layers.push({ view: indexView, animation: myAnimation });
                }
              },
              "Bride2Be",
              ['Aceptar','Cancelar']);
          }
        }
      break;
      case 3:
        for(x in misprovedores.musica){
          if(misprovedores.musica[x].title == title){
            navigator.notification.confirm("¿Segura que quieres eliminar este proveedor?",
              function(buttonIndex,x){
                if(buttonIndex==1){
                  misprovedores.musica.splice(x, 1);
                  window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
                  steroids.layers.push({ view: indexView, animation: myAnimation });
                }
              },
              "Bride2Be",
              ['Aceptar','Cancelar']);
          }
        }
      break;
      case 4:
        for(x in misprovedores.flores){
          if(misprovedores.flores[x].title == title){
            navigator.notification.confirm("¿Segura que quieres eliminar este proveedor?",
              function(buttonIndex,x){
                if(buttonIndex==1){
                  misprovedores.flores.splice(x, 1);
                  window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
                  steroids.layers.push({ view: indexView, animation: myAnimation });
                }
              },
              "Bride2Be",
              ['Aceptar','Cancelar']);
          }
        }
      break;
      case 5:
        for(x in misprovedores.iluminacion){
          if(misprovedores.iluminacion[x].title == title){
            navigator.notification.confirm("¿Segura que quieres eliminar este proveedor?",
              function(buttonIndex,x){
                if(buttonIndex==1){
                  misprovedores.iluminacion.splice(x, 1);
                  window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
                  steroids.layers.push({ view: indexView, animation: myAnimation });
                }
              },
              "Bride2Be",
              ['Aceptar','Cancelar']);
          }
        }
      break;
      case 6:
        for(x in misprovedores.foto){
          if(misprovedores.foto[x].title == title){
            navigator.notification.confirm("¿Segura que quieres eliminar este proveedor?",
              function(buttonIndex,x){
                if(buttonIndex==1){
                  misprovedores.foto.splice(x, 1);
                  window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
                  steroids.layers.push({ view: indexView, animation: myAnimation });
                }
              },
              "Bride2Be",
              ['Aceptar','Cancelar']);
          }
        }
      break;
      case 7:
        for(x in misprovedores.ambientacion){
          if(misprovedores.ambientacion[x].title == title){
            navigator.notification.confirm("¿Segura que quieres eliminar este proveedor?",
              function(buttonIndex,x){
                if(buttonIndex==1){
                  misprovedores.ambientacion.splice(x, 1);
                  window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
                  steroids.layers.push({ view: indexView, animation: myAnimation });
                }
              },
              "Bride2Be",
              ['Aceptar','Cancelar']);
          }
        }
      break;
      case 8:
        for(x in misprovedores.elyella){
          if(misprovedores.elyella[x].title == title){
            navigator.notification.confirm("¿Segura que quieres eliminar este proveedor?",
              function(buttonIndex,x){
                if(buttonIndex==1){
                  misprovedores.elyella.splice(x, 1);
                  window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
                  steroids.layers.push({ view: indexView, animation: myAnimation });
                }
              },
              "Bride2Be",
              ['Aceptar','Cancelar']);
          }
        }
      break;
      case 9:
        for(x in misprovedores.mps){
          if(misprovedores.mps[x].title == title){
            navigator.notification.confirm("¿Segura que quieres eliminar este proveedor?",
              function(buttonIndex,x){
                if(buttonIndex==1){
                  misprovedores.mps.splice(x, 1);
                  window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
                  steroids.layers.push({ view: indexView, animation: myAnimation });
                }
              },
              "Bride2Be",
              ['Aceptar','Cancelar']);
          }
        }
      break;
      case 10:
        for(x in misprovedores.luna){
          if(misprovedores.luna[x].title == title){
            navigator.notification.confirm("¿Segura que quieres eliminar este proveedor?",
              function(buttonIndex,x){
                if(buttonIndex==1){
                  misprovedores.luna.splice(x, 1);
                  window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
                  steroids.layers.push({ view: indexView, animation: myAnimation });
                }
              },
              "Bride2Be",
              ['Aceptar','Cancelar']);
          }
        }
      break;
      case 11:
        for(x in misprovedores.mesa){
          if(misprovedores.mesa[x].title == title){
            navigator.notification.confirm("¿Segura que quieres eliminar este proveedor?",
              function(buttonIndex,x){
                if(buttonIndex==1){
                  misprovedores.mesa.splice(x, 1);
                  window.localStorage.setItem("misprovedores", JSON.stringify(misprovedores));
                  steroids.layers.push({ view: indexView, animation: myAnimation });
                }
              },
              "Bride2Be",
              ['Aceptar','Cancelar']);
          }
        }
      break;
    }
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
//-------------------  CLOSE INDEX CONTROLLER -------------------------- }

//-------------------  EDIT CONTROLLERS -------------------------- {

// CEREMONIA
myprovidersApp.controller('EditCeremoniaCtrl', function ($scope, miProveedorService) {
  $scope.index = steroids.view.params.id;
  $scope.miProveedorServ = miProveedorService;
  misProvedoresJSON = $.parseJSON(window.localStorage.getItem("misprovedores"));
  var miProvActual;
  for(var i = 0; i < misProvedoresJSON.ceremonia.length; i++){
    if(misProvedoresJSON.ceremonia[i].id == steroids.view.params.id){
      miProvActual=i;
      break;
    }
  }
  $scope.miProveedor = misProvedoresJSON.ceremonia[miProvActual];
  $scope.newMyProvider = {
    "id": misProvedoresJSON.ceremonia[miProvActual].id,
    "editar": misProvedoresJSON.ceremonia[miProvActual].editar,
    "propio": misProvedoresJSON.ceremonia[miProvActual].propio,
    "title": misProvedoresJSON.ceremonia[miProvActual].title,
    "direccion": misProvedoresJSON.ceremonia[miProvActual].direccion,
    "phone": misProvedoresJSON.ceremonia[miProvActual].phone,
    "phone2": misProvedoresJSON.ceremonia[miProvActual].phone2,
    "email": misProvedoresJSON.ceremonia[miProvActual].email
  };
  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });
});
// RECEPCION
myprovidersApp.controller('EditRecepcionCtrl', function ($scope, miProveedorService) {
  $scope.index = steroids.view.params.id;
  $scope.miProveedorServ = miProveedorService;
  misProvedoresJSON = $.parseJSON(window.localStorage.getItem("misprovedores"));
  var miProvActual;
  for(var i = 0; i < misProvedoresJSON.recepcion.length; i++){
    if(misProvedoresJSON.recepcion[i].id == steroids.view.params.id){
      miProvActual=i;
      break;
    }
  }
  $scope.miProveedor = misProvedoresJSON.recepcion[miProvActual];
  $scope.newMyProvider = {
    "id": misProvedoresJSON.recepcion[miProvActual].id,
    "editar": misProvedoresJSON.recepcion[miProvActual].editar,
    "propio": misProvedoresJSON.recepcion[miProvActual].propio,
    "title": misProvedoresJSON.recepcion[miProvActual].title,
    "direccion": misProvedoresJSON.recepcion[miProvActual].direccion,
    "phone": misProvedoresJSON.recepcion[miProvActual].phone,
    "phone2": misProvedoresJSON.recepcion[miProvActual].phone2,
    "email": misProvedoresJSON.recepcion[miProvActual].email
  };
  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });
});
// INVITACIONES
myprovidersApp.controller('EditInvitacionesCtrl', function ($scope, miProveedorService) {
  $scope.index = steroids.view.params.id;
  $scope.miProveedorServ = miProveedorService;
  misProvedoresJSON = $.parseJSON(window.localStorage.getItem("misprovedores"));
  var miProvActual;
  for(var i = 0; i < misProvedoresJSON.invitaciones.length; i++){
    if(misProvedoresJSON.invitaciones[i].id == steroids.view.params.id){
      miProvActual=i;
      break;
    }
  }
  $scope.miProveedor = misProvedoresJSON.invitaciones[miProvActual];
  $scope.newMyProvider = {
    "id": misProvedoresJSON.invitaciones[miProvActual].id,
    "editar": misProvedoresJSON.invitaciones[miProvActual].editar,
    "propio": misProvedoresJSON.invitaciones[miProvActual].propio,
    "title": misProvedoresJSON.invitaciones[miProvActual].title,
    "direccion": misProvedoresJSON.invitaciones[miProvActual].direccion,
    "phone": misProvedoresJSON.invitaciones[miProvActual].phone,
    "phone2": misProvedoresJSON.invitaciones[miProvActual].phone2,
    "email": misProvedoresJSON.invitaciones[miProvActual].email
  };
  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });
});
// FLORES
myprovidersApp.controller('EditFloresCtrl', function ($scope, miProveedorService) {
  $scope.index = steroids.view.params.id;
  $scope.miProveedorServ = miProveedorService;
  misProvedoresJSON = $.parseJSON(window.localStorage.getItem("misprovedores"));
  var miProvActual;
  for(var i = 0; i < misProvedoresJSON.flores.length; i++){
    if(misProvedoresJSON.flores[i].id == steroids.view.params.id){
      miProvActual=i;
      break;
    }
  }
  $scope.miProveedor = misProvedoresJSON.flores[miProvActual];
  $scope.newMyProvider = {
    "id": misProvedoresJSON.flores[miProvActual].id,
    "editar": misProvedoresJSON.flores[miProvActual].editar,
    "propio": misProvedoresJSON.flores[miProvActual].propio,
    "title": misProvedoresJSON.flores[miProvActual].title,
    "direccion": misProvedoresJSON.flores[miProvActual].direccion,
    "phone": misProvedoresJSON.flores[miProvActual].phone,
    "phone2": misProvedoresJSON.flores[miProvActual].phone2,
    "email": misProvedoresJSON.flores[miProvActual].email
  };
  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });
});
// ILUMINACION
myprovidersApp.controller('EditIluminacionCtrl', function ($scope, miProveedorService) {
  $scope.index = steroids.view.params.id;
  $scope.miProveedorServ = miProveedorService;
  misProvedoresJSON = $.parseJSON(window.localStorage.getItem("misprovedores"));
  var miProvActual;
  for(var i = 0; i < misProvedoresJSON.iluminacion.length; i++){
    if(misProvedoresJSON.iluminacion[i].id == steroids.view.params.id){
      miProvActual=i;
      break;
    }
  }
  $scope.miProveedor = misProvedoresJSON.iluminacion[miProvActual];
  $scope.newMyProvider = {
    "id": misProvedoresJSON.iluminacion[miProvActual].id,
    "editar": misProvedoresJSON.iluminacion[miProvActual].editar,
    "propio": misProvedoresJSON.iluminacion[miProvActual].propio,
    "title": misProvedoresJSON.iluminacion[miProvActual].title,
    "direccion": misProvedoresJSON.iluminacion[miProvActual].direccion,
    "phone": misProvedoresJSON.iluminacion[miProvActual].phone,
    "phone2": misProvedoresJSON.iluminacion[miProvActual].phone2,
    "email": misProvedoresJSON.iluminacion[miProvActual].email
  };
  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });
});
// FOTO
myprovidersApp.controller('EditFotosCtrl', function ($scope, miProveedorService) {
  $scope.index = steroids.view.params.id;
  $scope.miProveedorServ = miProveedorService;
  misProvedoresJSON = $.parseJSON(window.localStorage.getItem("misprovedores"));
  var miProvActual;
  for(var i = 0; i < misProvedoresJSON.foto.length; i++){
    if(misProvedoresJSON.foto[i].id == steroids.view.params.id){
      miProvActual=i;
      break;
    }
  }
  $scope.miProveedor = misProvedoresJSON.foto[miProvActual];
  $scope.newMyProvider = {
    "id": misProvedoresJSON.foto[miProvActual].id,
    "editar": misProvedoresJSON.foto[miProvActual].editar,
    "propio": misProvedoresJSON.foto[miProvActual].propio,
    "title": misProvedoresJSON.foto[miProvActual].title,
    "direccion": misProvedoresJSON.foto[miProvActual].direccion,
    "phone": misProvedoresJSON.foto[miProvActual].phone,
    "phone2": misProvedoresJSON.foto[miProvActual].phone2,
    "email": misProvedoresJSON.foto[miProvActual].email
  };
  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });
});
// AMBIENTACION
myprovidersApp.controller('EditAmbientacionCtrl', function ($scope, miProveedorService) {
  $scope.index = steroids.view.params.id;
  $scope.miProveedorServ = miProveedorService;
  misProvedoresJSON = $.parseJSON(window.localStorage.getItem("misprovedores"));
  var miProvActual;
  for(var i = 0; i < misProvedoresJSON.ambientacion.length; i++){
    if(misProvedoresJSON.ambientacion[i].id == steroids.view.params.id){
      miProvActual=i;
      break;
    }
  }
  $scope.miProveedor = misProvedoresJSON.ambientacion[miProvActual];
  $scope.newMyProvider = {
    "id": misProvedoresJSON.ambientacion[miProvActual].id,
    "editar": misProvedoresJSON.ambientacion[miProvActual].editar,
    "propio": misProvedoresJSON.ambientacion[miProvActual].propio,
    "title": misProvedoresJSON.ambientacion[miProvActual].title,
    "direccion": misProvedoresJSON.ambientacion[miProvActual].direccion,
    "phone": misProvedoresJSON.ambientacion[miProvActual].phone,
    "phone2": misProvedoresJSON.ambientacion[miProvActual].phone2,
    "email": misProvedoresJSON.ambientacion[miProvActual].email
  };
  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });
});
// ELYELLA
myprovidersApp.controller('EditElyellaCtrl', function ($scope, miProveedorService) {
  $scope.index = steroids.view.params.id;
  $scope.miProveedorServ = miProveedorService;
  misProvedoresJSON = $.parseJSON(window.localStorage.getItem("misprovedores"));
  var miProvActual;
  for(var i = 0; i < misProvedoresJSON.elyella.length; i++){
    if(misProvedoresJSON.elyella[i].id == steroids.view.params.id){
      miProvActual=i;
      break;
    }
  }
  $scope.miProveedor = misProvedoresJSON.elyella[miProvActual];
  $scope.newMyProvider = {
    "id": misProvedoresJSON.elyella[miProvActual].id,
    "editar": misProvedoresJSON.elyella[miProvActual].editar,
    "propio": misProvedoresJSON.elyella[miProvActual].propio,
    "title": misProvedoresJSON.elyella[miProvActual].title,
    "direccion": misProvedoresJSON.elyella[miProvActual].direccion,
    "phone": misProvedoresJSON.elyella[miProvActual].phone,
    "phone2": misProvedoresJSON.elyella[miProvActual].phone2,
    "email": misProvedoresJSON.elyella[miProvActual].email
  };
  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });
});
// MPS
myprovidersApp.controller('EditMaquillajeCtrl', function ($scope, miProveedorService) {
  $scope.index = steroids.view.params.id;
  $scope.miProveedorServ = miProveedorService;
  misProvedoresJSON = $.parseJSON(window.localStorage.getItem("misprovedores"));
  var miProvActual;
  for(var i = 0; i < misProvedoresJSON.mps.length; i++){
    if(misProvedoresJSON.mps[i].id == steroids.view.params.id){
      miProvActual=i;
      break;
    }
  }
  $scope.miProveedor = misProvedoresJSON.mps[miProvActual];
  $scope.newMyProvider = {
    "id": misProvedoresJSON.mps[miProvActual].id,
    "editar": misProvedoresJSON.mps[miProvActual].editar,
    "propio": misProvedoresJSON.mps[miProvActual].propio,
    "title": misProvedoresJSON.mps[miProvActual].title,
    "direccion": misProvedoresJSON.mps[miProvActual].direccion,
    "phone": misProvedoresJSON.mps[miProvActual].phone,
    "phone2": misProvedoresJSON.mps[miProvActual].phone2,
    "email": misProvedoresJSON.mps[miProvActual].email
  };
  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });
});
// LUNA
myprovidersApp.controller('EditLunaCtrl', function ($scope, miProveedorService) {
  $scope.index = steroids.view.params.id;
  $scope.miProveedorServ = miProveedorService;
  misProvedoresJSON = $.parseJSON(window.localStorage.getItem("misprovedores"));
  var miProvActual;
  for(var i = 0; i < misProvedoresJSON.luna.length; i++){
    if(misProvedoresJSON.luna[i].id == steroids.view.params.id){
      miProvActual=i;
      break;
    }
  }
  $scope.miProveedor = misProvedoresJSON.luna[miProvActual];
  $scope.newMyProvider = {
    "id": misProvedoresJSON.luna[miProvActual].id,
    "editar": misProvedoresJSON.luna[miProvActual].editar,
    "propio": misProvedoresJSON.luna[miProvActual].propio,
    "title": misProvedoresJSON.luna[miProvActual].title,
    "direccion": misProvedoresJSON.luna[miProvActual].direccion,
    "phone": misProvedoresJSON.luna[miProvActual].phone,
    "phone2": misProvedoresJSON.luna[miProvActual].phone2,
    "email": misProvedoresJSON.luna[miProvActual].email
  };
  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });
});
// MESA
myprovidersApp.controller('EditMesaCtrl', function ($scope, miProveedorService) {
  $scope.index = steroids.view.params.id;
  $scope.miProveedorServ = miProveedorService;
  misProvedoresJSON = $.parseJSON(window.localStorage.getItem("misprovedores"));
  var miProvActual;
  for(var i = 0; i < misProvedoresJSON.mesa.length; i++){
    if(misProvedoresJSON.mesa[i].id == steroids.view.params.id){
      miProvActual=i;
      break;
    }
  }
  $scope.miProveedor = misProvedoresJSON.mesa[miProvActual];
  $scope.newMyProvider = {
    "id": misProvedoresJSON.mesa[miProvActual].id,
    "editar": misProvedoresJSON.mesa[miProvActual].editar,
    "propio": misProvedoresJSON.mesa[miProvActual].propio,
    "title": misProvedoresJSON.mesa[miProvActual].title,
    "direccion": misProvedoresJSON.mesa[miProvActual].direccion,
    "phone": misProvedoresJSON.mesa[miProvActual].phone,
    "phone2": misProvedoresJSON.mesa[miProvActual].phone2,
    "email": misProvedoresJSON.mesa[miProvActual].email
  };
  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });
});
// MUSICA
myprovidersApp.controller('EditMusicaCtrl', function ($scope, miProveedorService) {
  $scope.index = steroids.view.params.id;
  $scope.miProveedorServ = miProveedorService;
  misProvedoresJSON = $.parseJSON(window.localStorage.getItem("misprovedores"));
  var miProvActual;
  for(var i = 0; i < misProvedoresJSON.musica.length; i++){
    if(misProvedoresJSON.musica[i].id == steroids.view.params.id){
      miProvActual=i;
      break;
    }
  }
  $scope.miProveedor = misProvedoresJSON.musica[miProvActual];
  $scope.newMyProvider = {
    "id": misProvedoresJSON.musica[miProvActual].id,
    "editar": misProvedoresJSON.musica[miProvActual].editar,
    "propio": misProvedoresJSON.musica[miProvActual].propio,
    "title": misProvedoresJSON.musica[miProvActual].title,
    "direccion": misProvedoresJSON.musica[miProvActual].direccion,
    "phone": misProvedoresJSON.musica[miProvActual].phone,
    "phone2": misProvedoresJSON.musica[miProvActual].phone2,
    "email": misProvedoresJSON.musica[miProvActual].email
  };
  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });
});

//------------------- CLOSE EDIT CONTROLLERS -------------------------- }

//-------------------  NEW CONTROLLERS -------------------------- {

// CEREMONIA
myprovidersApp.controller('NewCeremoniaCtrl', function ($scope, miProveedorService) {
  if(window.localStorage.getItem("ceremonia-jsonindex") == null){
    window.localStorage.setItem("ceremonia-jsonindex", '1000');
    var jsonindex = 1000;
  }else{
    var jsonindex = window.localStorage.getItem("ceremonia-jsonindex");
    window.localStorage.setItem("ceremonia-jsonindex", ''+(parseInt(jsonindex)+1));
  }
  $scope.jsonindexF = jsonindex;

  $scope.newMyProvider = {"id": jsonindex ,"propio":"Proveedor Propio","editar":"Editar"};
  $scope.miProveedorServ = miProveedorService;

  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("misprovedores", '{"ceremonia":[], "recepcion":[], "invitaciones":[], "flores":[], "iluminacion":[], "foto":[], "ambientacion": [], "elyella": [], "mps":[], "luna":[], "mesa":[], "musica": []}');
  };

  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });
});
// RECEPCION
myprovidersApp.controller('NewRecepcionCtrl', function ($scope, miProveedorService) {
  if(window.localStorage.getItem("recepcion-jsonindex") == null){
    window.localStorage.setItem("recepcion-jsonindex", '1000');
    var jsonindex = 1000;
  }else{
    var jsonindex = window.localStorage.getItem("recepcion-jsonindex");
    window.localStorage.setItem("recepcion-jsonindex", ''+(parseInt(jsonindex)+1));
  }
  $scope.jsonindexF = jsonindex;

  $scope.newMyProvider = {"id": jsonindex ,"propio":"Proveedor Propio","editar":"Editar"};
  $scope.miProveedorServ = miProveedorService;

  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("misprovedores", '{"ceremonia":[], "recepcion":[], "invitaciones":[], "flores":[], "iluminacion":[], "foto":[], "ambientacion": [], "elyella": [], "mps":[], "luna":[], "mesa":[], "musica": []}');
  };

  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });
});
// INVITACIONES
myprovidersApp.controller('NewInvitacionesCtrl', function ($scope, miProveedorService) {
  if(window.localStorage.getItem("invitaciones-jsonindex") == null){
    window.localStorage.setItem("invitaciones-jsonindex", '1000');
    var jsonindex = 1000;
  }else{
    var jsonindex = window.localStorage.getItem("invitaciones-jsonindex");
    window.localStorage.setItem("invitaciones-jsonindex", ''+(parseInt(jsonindex)+1));
  }
  $scope.jsonindexF = jsonindex;

  $scope.newMyProvider = {"id": jsonindex ,"propio":"Proveedor Propio","editar":"Editar"};
  $scope.miProveedorServ = miProveedorService;

  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("misprovedores", '{"ceremonia":[], "recepcion":[], "invitaciones":[], "flores":[], "iluminacion":[], "foto":[], "ambientacion": [], "elyella": [], "mps":[], "luna":[], "mesa":[], "musica": []}');
  };

  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });
});
// FLORES
myprovidersApp.controller('NewFloresCtrl', function ($scope, miProveedorService) {
  if(window.localStorage.getItem("flores-jsonindex") == null){
    window.localStorage.setItem("flores-jsonindex", '1000');
    var jsonindex = 1000;
  }else{
    var jsonindex = window.localStorage.getItem("flores-jsonindex");
    window.localStorage.setItem("flores-jsonindex", ''+(parseInt(jsonindex)+1));
  }
  $scope.jsonindexF = jsonindex;

  $scope.newMyProvider = {"id": jsonindex ,"propio":"Proveedor Propio","editar":"Editar"};
  $scope.miProveedorServ = miProveedorService;

  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("misprovedores", '{"ceremonia":[], "recepcion":[], "invitaciones":[], "flores":[], "iluminacion":[], "foto":[], "ambientacion": [], "elyella": [], "mps":[], "luna":[], "mesa":[], "musica": []}');
  };

  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });
});
// ILUMINACION
myprovidersApp.controller('NewIluminacionCtrl', function ($scope, miProveedorService) {
  if(window.localStorage.getItem("iluminacion-jsonindex") == null){
    window.localStorage.setItem("iluminacion-jsonindex", '1000');
    var jsonindex = 1000;
  }else{
    var jsonindex = window.localStorage.getItem("iluminacion-jsonindex");
    window.localStorage.setItem("iluminacion-jsonindex", ''+(parseInt(jsonindex)+1));
  }
  $scope.jsonindexF = jsonindex;

  $scope.newMyProvider = {"id": jsonindex ,"propio":"Proveedor Propio","editar":"Editar"};
  $scope.miProveedorServ = miProveedorService;

  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("misprovedores", '{"ceremonia":[], "recepcion":[], "invitaciones":[], "flores":[], "iluminacion":[], "foto":[], "ambientacion": [], "elyella": [], "mps":[], "luna":[], "mesa":[], "musica": []}');
  };

  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });
});
// FOTO
myprovidersApp.controller('NewFotosCtrl', function ($scope, miProveedorService) {
  if(window.localStorage.getItem("foto-jsonindex") == null){
    window.localStorage.setItem("foto-jsonindex", '1000');
    var jsonindex = 1000;
  }else{
    var jsonindex = window.localStorage.getItem("foto-jsonindex");
    window.localStorage.setItem("foto-jsonindex", ''+(parseInt(jsonindex)+1));
  }
  $scope.jsonindexF = jsonindex;

  $scope.newMyProvider = {"id": jsonindex ,"propio":"Proveedor Propio","editar":"Editar"};
  $scope.miProveedorServ = miProveedorService;

  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("misprovedores", '{"ceremonia":[], "recepcion":[], "invitaciones":[], "flores":[], "iluminacion":[], "foto":[], "ambientacion": [], "elyella": [], "mps":[], "luna":[], "mesa":[], "musica": []}');
  };

  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });
});
// AMBIENTACION
myprovidersApp.controller('NewAmbientacionCtrl', function ($scope, miProveedorService) {
  if(window.localStorage.getItem("ambientacion-jsonindex") == null){
    window.localStorage.setItem("ambientacion-jsonindex", '1000');
    var jsonindex = 1000;
  }else{
    var jsonindex = window.localStorage.getItem("ambientacion-jsonindex");
    window.localStorage.setItem("ambientacion-jsonindex", ''+(parseInt(jsonindex)+1));
  }
  $scope.jsonindexF = jsonindex;

  $scope.newMyProvider = {"id": jsonindex ,"propio":"Proveedor Propio","editar":"Editar"};
  $scope.miProveedorServ = miProveedorService;

  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("misprovedores", '{"ceremonia":[], "recepcion":[], "invitaciones":[], "flores":[], "iluminacion":[], "foto":[], "ambientacion": [], "elyella": [], "mps":[], "luna":[], "mesa":[], "musica": []}');
  };

  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });
});
// ELYELLA
myprovidersApp.controller('NewElyEllaCtrl', function ($scope, miProveedorService) {
  if(window.localStorage.getItem("elyella-jsonindex") == null){
    window.localStorage.setItem("elyella-jsonindex", '1000');
    var jsonindex = 1000;
  }else{
    var jsonindex = window.localStorage.getItem("elyella-jsonindex");
    window.localStorage.setItem("elyella-jsonindex", ''+(parseInt(jsonindex)+1));
  }
  $scope.jsonindexF = jsonindex;

  $scope.newMyProvider = {"id": jsonindex ,"propio":"Proveedor Propio","editar":"Editar"};
  $scope.miProveedorServ = miProveedorService;

  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("misprovedores", '{"ceremonia":[], "recepcion":[], "invitaciones":[], "flores":[], "iluminacion":[], "foto":[], "ambientacion": [], "elyella": [], "mps":[], "luna":[], "mesa":[], "musica": []}');
  };

  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });
});
// MPS
myprovidersApp.controller('NewMaquillajeCtrl', function ($scope, miProveedorService) {
  if(window.localStorage.getItem("mps-jsonindex") == null){
    window.localStorage.setItem("mps-jsonindex", '1000');
    var jsonindex = 1000;
  }else{
    var jsonindex = window.localStorage.getItem("mps-jsonindex");
    window.localStorage.setItem("mps-jsonindex", ''+(parseInt(jsonindex)+1));
  }
  $scope.jsonindexF = jsonindex;

  $scope.newMyProvider = {"id": jsonindex ,"propio":"Proveedor Propio","editar":"Editar"};
  $scope.miProveedorServ = miProveedorService;

  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("misprovedores", '{"ceremonia":[], "recepcion":[], "invitaciones":[], "flores":[], "iluminacion":[], "foto":[], "ambientacion": [], "elyella": [], "mps":[], "luna":[], "mesa":[], "musica": []}');
  };

  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });
});
// LUNA
myprovidersApp.controller('NewLunaCtrl', function ($scope, miProveedorService) {
  if(window.localStorage.getItem("luna-jsonindex") == null){
    window.localStorage.setItem("luna-jsonindex", '1000');
    var jsonindex = 1000;
  }else{
    var jsonindex = window.localStorage.getItem("luna-jsonindex");
    window.localStorage.setItem("luna-jsonindex", ''+(parseInt(jsonindex)+1));
  }
  $scope.jsonindexF = jsonindex;

  $scope.newMyProvider = {"id": jsonindex ,"propio":"Proveedor Propio","editar":"Editar"};
  $scope.miProveedorServ = miProveedorService;

  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("misprovedores", '{"ceremonia":[], "recepcion":[], "invitaciones":[], "flores":[], "iluminacion":[], "foto":[], "ambientacion": [], "elyella": [], "mps":[], "luna":[], "mesa":[], "musica": []}');
  };

  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });
});
// MESA
myprovidersApp.controller('NewMesaCtrl', function ($scope, miProveedorService) {
  if(window.localStorage.getItem("mesa-jsonindex") == null){
    window.localStorage.setItem("mesa-jsonindex", '1000');
    var jsonindex = 1000;
  }else{
    var jsonindex = window.localStorage.getItem("mesa-jsonindex");
    window.localStorage.setItem("mesa-jsonindex", ''+(parseInt(jsonindex)+1));
  }
  $scope.jsonindexF = jsonindex;

  $scope.newMyProvider = {"id": jsonindex ,"propio":"Proveedor Propio","editar":"Editar"};
  $scope.miProveedorServ = miProveedorService;

  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("misprovedores", '{"ceremonia":[], "recepcion":[], "invitaciones":[], "flores":[], "iluminacion":[], "foto":[], "ambientacion": [], "elyella": [], "mps":[], "luna":[], "mesa":[], "musica": []}');
  };

  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });
});
// MUSICA
myprovidersApp.controller('NewMusicaCtrl', function ($scope, miProveedorService) {
  if(window.localStorage.getItem("musica-jsonindex") == null){
    window.localStorage.setItem("musica-jsonindex", '1000');
    var jsonindex = 1000;
  }else{
    var jsonindex = window.localStorage.getItem("musica-jsonindex");
    window.localStorage.setItem("musica-jsonindex", ''+(parseInt(jsonindex)+1));
  }
  $scope.jsonindexF = jsonindex;

  $scope.newMyProvider = {"id": jsonindex ,"propio":"Proveedor Propio","editar":"Editar"};
  $scope.miProveedorServ = miProveedorService;

  // Inicializa el json si no hay datos
  if(window.localStorage.getItem("misprovedores") == null){
    window.localStorage.setItem("misprovedores", '{"ceremonia":[], "recepcion":[], "invitaciones":[], "flores":[], "iluminacion":[], "foto":[], "ambientacion": [], "elyella": [], "mps":[], "luna":[], "mesa":[], "musica": []}');
  };

  // -- Native navigation
  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
      titleImagePath: "logo.png",
      relativeTo: "/" + steroids.app.path + "/images/"
    });
  });
});

//------------------- CLOSE NEW CONTROLLERS -------------------------- }
