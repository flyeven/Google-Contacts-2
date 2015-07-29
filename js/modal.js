(function(){
  var app = angular.module("Contacts");

  app.directive('modalOverlay', function() {
    return {
      restrict: 'E',
      transclude: true, // we want to insert custom content inside the directive
      template: "<div class='ng-overlay posA-top-left'> <div class='ng-overlay-background posA-top-left'> </div> <div class=back-btn ng-click='OverlayShowHide.setCurrentViewState(OverlayShowHide.viewState.none)'></div><div ng-transclude class='ng-transclude'></div> </div>" 
  };
});

}());