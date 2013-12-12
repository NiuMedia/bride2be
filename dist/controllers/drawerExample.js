  steroids.on('ready', function() {
    steroids.view.navigationBar.show({
    titleImagePath: "logo.png",
    relativeTo: "/" + steroids.app.path + "/images/"
  });
  });
  


  // Initialize the left drawer

  var leftDrawer = new steroids.views.WebView("/views/drawerExample/drawer.html");
  //leftDrawer.preload();

  leftDrawer.preload({},{
     onSuccess: initGesture  // When the view has loaded, enable finger tracking
    }
  );

  function initGesture() {
    steroids.drawers.enableGesture(leftDrawer);
  }
  // Helper functions

  function openDrawer() {
    steroids.drawers.show(leftDrawer);
  }


  
