var myApp = angular.module('myApp',[]);
myApp.controller('myCtrl',function($scope){
// $scope is the owner of all variables and functions in a given controller.
$scope.phone = "+254715753308";
$scope.city = "Nairobi";
$scope.county = "Nairobi";


});


myApp.controller('myCars', function($scope){

	$scope.cars = [
		{brand:"Toyota",model:"hilux",type:"pickup",year:"2013",image:"../images/hilux.jpg"},
		{brand:"Nissan",model:"Wingroad",type:"StationWagon",year:"2010",image:"../images/wingroad.jpg"},
		{brand:"Subaru",model:"Legacy",type:"Sports",year:"2008",image:"../images/legacy.jpg"},
		{brand:"Range Rover",model:"Sport",type:"SUV",year:"2015",image:"../images/sport.jpg"}




	];



});

myApp.controller('blogs',function($scope,$http){

	var url = "http://jsonplaceholder.typicode.com/comments?postId=1";

	$http.get(url).success(function(response){
		$scope.posts = response;

	});





});