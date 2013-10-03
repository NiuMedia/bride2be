 // Listen for window.postMessage() messages that drawer sends us

  window.addEventListener("message", function(msg) {
    var elem = document.querySelector("#selectedInDrawer");
    elem.textContent = msg.data.selection;
  });

  // Initialize the left drawer

  var leftDrawer = new steroids.views.WebView("../views/drawerExample/drawer.html");

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