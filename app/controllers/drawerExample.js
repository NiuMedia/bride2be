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

  var drawerButton = new steroids.buttons.NavigationBarButton();
  drawerButton.title = "Menu";

  var drawerButtonClose = new steroids.buttons.NavigationBarButton();
  drawerButtonClose.title = "Cerrar";

  // drawerButton.onTap = function (){
  //   steroids.drawers.show(leftDrawer);
  //   steroids.view.navigationBar.setButtons({
  //     right: [drawerButtonClose]
  //   });
  // };

  // drawerButtonClose.onTap = function(){
  //   steroids.view.navigationBar.setButtons({
  //     right: [drawerButton]
  //   });
  // };

  // steroids.view.navigationBar.setButtons({
  //   right: [drawerButton]
  // });

  steroids.view.navigationBar.show({
    titleImagePath:"http://localhost/images/logo.png"}
  );
