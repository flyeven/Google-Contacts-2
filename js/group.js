(function(){
	var app = angular.module("Contacts");
	app.controller("GroupsController", [ '$http', '$scope', '$rootScope', 'MyDataService', 'OverlayShowHide',function($http, $scope,$rootScope, MyDataService, OverlayShowHide){
		$scope.groups= MyDataService.getGroups();
		$scope.OverlayShowHide = OverlayShowHide;
		$scope.MyDataService = MyDataService;
		
		$scope.openAddGroupPopup = function(){
			OverlayShowHide.setCurrentViewState(OverlayShowHide.viewState.groupNew);
		};

		$scope.closeAddGroupPopup = function(){
			OverlayShowHide.setCurrentViewState(OverlayShowHide.viewState.none);
		};

		$scope.addGroup = function(group){
			MyDataService.addGroup(group);
			$scope.closeAddGroupPopup();
		};

		$scope.openAddMemberPopup = function(group){
			OverlayShowHide.setCurrentViewState(OverlayShowHide.viewState.groupEdit);
			MyDataService.selectedGroup = group;
		}
	}]);
})();