(function(){
	var app = angular.module("Contacts", ["ngRoute"]);

	app.config(['$routeProvider', function($routeProvider){
		$routeProvider.when("/",{
			controller: "ContactsController",
			controllerAs: "contactsCtrl",
			templateUrl: "templates/contacts.html"
		})
		.when("/groups",{
			controller: "GroupsController",
			controllerAs: "groupsCtrl",
			templateUrl: "templates/groups.html"
		})
		.when("/circles",{
			controller: "CirclesController",
			controllerAs: "circlesCtrl",
			templateUrl: "templates/circles.html"
		})
		.when("/duplicate",{
			controller: "DuplicateController",
			controllerAs: "duplicateCtrl",
			templateUrl: "templates/duplicate.html"
		})
		.otherwise({
			redirectTo: "/"
		});
	}]);
}());