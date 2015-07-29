(function(){
	var app = angular.module("User", []);

	app.controller("UserController", [ '$http',function($http){
		this.userId = "1";
		this.firstName = "Dhaval";
		this.lastName = "Zala";
		this.loginEmail = "dhaval@gmail.com";
		this.emailIds = [{ type: "home" , value:  "dhaval@gmail.com" }];
		this.contactNumbers = [{ type: "home" , value:  "8978136869"}];
	}]);
})();