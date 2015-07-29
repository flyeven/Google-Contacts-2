(function(){
	var app = angular.module("Contacts");

	app.controller("ContactsController", [ '$http', '$scope', '$rootScope', 'MyDataService', 'OverlayShowHide',function($http, $scope,$rootScope, MyDataService, OverlayShowHide){
		var self = this;
		$scope.contacts = MyDataService.getContacts();
		$scope.OverlayShowHide = OverlayShowHide;
		$scope.MyDataService = MyDataService;

		$scope.openAddContactPopup = function(){
			OverlayShowHide.setCurrentViewState(OverlayShowHide.viewState.contactNew);
		};

		$scope.closeAddContactPopup = function(){
			OverlayShowHide.setCurrentViewState(OverlayShowHide.viewState.none);
			$scope.newContact = {};
		};

		$scope.addContact = function(contact){
			MyDataService.addContact(contact);
			$scope.closeAddContactPopup();
		};

		$rootScope.openViewContactPopup = function(contact){
			MyDataService.selectedContact = contact;
			OverlayShowHide.setCurrentViewState(OverlayShowHide.viewState.contactView);
		};
	}]);

	app.controller("MenuController",['$scope',function($scope){
		var self = this;
		self.selectedIndex = 0;
		//self.showMoreItems = false;

		$scope.user = {
			userId : "1",
			firstName : "Dhaval",
			lastName : "Zala",
			loginEmail : "Dhaval@gmail.com"
		};

		self.menuItems = [{
			header: "All Contacts",
			url: "#allcontacts"
		},
		{
			header: "Frequently contacted",
			url: "#frequentlycontacts"
		},
		{
			header: "Groups",
			url: "#groups"
		},
		{
			header: "Circles",
			url: "#circles"
		},
		{
			header: "Find duplicates",
			url: "#duplicate"
		},
		{
			header: "More 1",
			url: "#more1"
		},
		{
			header: "More 2",
			url: "#more2"
		}
		];

		self.selectMenuItem = function(selectedIndex){
			self.selectedIndex = selectedIndex;
		};

		self.isSet= function(menuItemIndex){
			return self.selectedIndex === menuItemIndex;
		}
	}]);

	app.controller("OverlayController", ['$scope','OverlayShowHide', '$rootScope', function($scope, OverlayShowHide,$rootScope){
		
	}]);

	app.factory('OverlayShowHide',['$rootScope' , function($rootScope){
		var overlay = {};
		overlay.viewState = { contactView: 0, contactEdit: 1, contactNew: 2 , groupView: 3, groupEdit: 4, groupNew: 5 ,none: 6}; 
		overlay.currentViewState = overlay.viewState.none; 
		
		overlay.setCurrentViewState = function(state){
			this.currentViewState = state;
		}

		overlay.getCurrentViewState = function(){
			return this.currentViewState;
		}


		overlay.isCurrentViewState = function(state){
			return this.currentViewState === state;
		}
		return overlay;
	}]);

	app.service('MyDataService',['$rootScope' , function($rootScope){

		this.contacts = [
		{
			header: "Starred",
			contacts: [
			{
				contactId : "1",
				favourite: false,
				firstName : "Srinivas",
				lastName : "Anthati",
				loginEmail : "Srinivas@gmail.com",
				emailIds : [{ type: "home" , value:  "Srinivas@gmail.com" }],
				contactNumbers : [{ type: "home" , value:  "7834231323"}]
			},
			{
				contactId : "2",
				favourite: true,
				firstName : "Karan",
				lastName : "Solanki",
				loginEmail : "Karan@gmail.com",
				emailIds : [{ type: "home" , value:  "Karan@gmail.com" }],
				contactNumbers : [{ type: "home" , value:  "7834231323"}]
			}]
		},
		{
			header: "Frequently contacts",
			contacts: [
			{
				contactId : "1",
				favourite: false,
				firstName : "Srinivas",
				lastName : "Anthati",
				loginEmail : "Srinivas@gmail.com",
				emailIds : [{ type: "home" , value:  "Srinivas@gmail.com" }],
				contactNumbers : [{ type: "home" , value:  "7834231323"}]
			}]
		},
		{
			header: "All contacts",
			contacts: [
			{
				contactId : "2",
				favourite: true,
				firstName : "Karan",
				lastName : "Solanki",
				loginEmail : "Karan@gmail.com",
				emailIds : [{ type: "home" , value:  "Karan@gmail.com" }],
				contactNumbers : [{ type: "home" , value:  "7834231323"}]
			},
			{
				contactId : "1",
				favourite: false,
				firstName : "Srinivas",
				lastName : "Anthati",
				loginEmail : "Srinivas@gmail.com",
				emailIds : [{ type: "home" , value:  "Srinivas@gmail.com" }],
				contactNumbers : [{ type: "home" , value:  "7834231323"}]
			},
			{
				contactId : "2",
				favourite: true,
				firstName : "Karan",
				lastName : "Solanki",
				loginEmail : "Karan@gmail.com",
				emailIds : [{ type: "home" , value:  "Karan@gmail.com" }],
				contactNumbers : [{ type: "home" , value:  "7834231323"}]
			}]
		}
		];

		this.groups = [{
			groupName: "Friends",
			members: [{
				contactId : "1",
				favourite: false,
				firstName : "Srinivas",
				lastName : "Anthati",
				loginEmail : "Srinivas@gmail.com",
				emailIds : [{ type: "home" , value:  "Srinivas@gmail.com" }],
				contactNumbers : [{ type: "home" , value:  "7834231323"}]
			},
			{
				contactId : "2",
				favourite: true,
				firstName : "Karan",
				lastName : "Solanki",
				loginEmail : "Karan@gmail.com",
				emailIds : [{ type: "home" , value:  "Karan@gmail.com" }],
				contactNumbers : [{ type: "home" , value:  "7834231323"}]
			}]
		},

		{
			groupName: "Collegues",
			members: [{
				contactId : "1",
				favourite: false,
				firstName : "Srinivas",
				lastName : "Anthati",
				loginEmail : "Srinivas@gmail.com",
				emailIds : [{ type: "home" , value:  "Srinivas@gmail.com" }],
				contactNumbers : [{ type: "home" , value:  "7834231323"}]
			}]
		}];

		this.selectedContact = null;
		this.selectedGroup = null;
		
		this.addContact = function(contact){
			this.contacts[2].contacts.push(angular.copy(contact));
		}

		this.getContacts = function(){
			return this.contacts;
		}

		this.addGroup = function(group){
			this.groups.push(angular.copy(group));
		}

		this.getGroups = function(){
			return this.groups;
		}
	}]);


})();