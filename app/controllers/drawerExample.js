  // Listen for window.postMessage() messages that drawer sends us

  document.addEventListener("deviceready", onDiviceReady, false);

  function onDiviceReady(){
    if(window.localStorage.getItem("init") != null){
      alert("Redirecciona a la pantalla principal");
    }

    var saveBtn = document.querySelector("#save-btn");
    saveBtn.addEventListener("click", function(){
      window.localStorage.setItem("novio", document.querySelector("#novio"));
      window.localStorage.setItem("novia", document.querySelector("#novia"));
      window.localStorage.setItem("lugar", document.querySelector("#lugar"));
      window.localStorage.setItem("fecha", document.querySelector("#fecha"));

      window.localStorage.setItem("init", 1);
    });
  }

  window.addEventListener("message", function(msg) {
    var elem = document.querySelector("#selectedInDrawer");
    elem.textContent = msg.data.selection;
  });

  // Initialize the left drawer

  var leftDrawer = new steroids.views.WebView("/views/drawerExample/drawer.html");

  leftDrawer.preload({},{
    onSuccess: initGesture  // When the view has loaded, enable finger tracking
  });

  function initGesture() {
    steroids.drawers.enableGesture(leftDrawer);
  }


  // Helper functions

  function openDrawer() {
    steroids.drawers.show(leftDrawer);
  }

  steroids.view.navigationBar.show("Bride2Be");