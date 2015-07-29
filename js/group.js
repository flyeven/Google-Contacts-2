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
			MyDataService.selectedGroup = group;
			OverlayShowHide.setCurrentViewState(OverlayShowHide.viewState.groupEdit);
			
		};

		$scope.saveGroupMembers = function(){
			 var selectedRows = document.querySelectorAll("#group-members tr input[type='checkbox']:checked"),
				members = [];
			for (var i = 0; i < selectedRows.length; i++) {
				members.push(JSON.parse(selectedRows[i].getAttribute("data-contact")));
			};

			MyDataService.saveGroupMembers(members);
			$scope.closeAddGroupPopup();
		}
	}]);
})();