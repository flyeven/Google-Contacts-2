
var googleAPI = function($http){
	var obj = {};
	obj.authentication = function(){ 
		return $http({
			method: 'GET',
			url: "https://www.google.com/accounts/AuthSubRequest?scope=http%3A%2F%2Fwww.google.com%2Fm8%2Ffeeds%2F&session=1&secure=0&next=http%3A%2F%2Fwww.example.com%2Fwelcome.html" 
		});
	};
	return obj;
}
