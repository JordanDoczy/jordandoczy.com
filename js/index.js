var acronym = {
	"folder": "acronym",
	"name": "Acronym",
	"tagLine": "a prototype for looking up acronyms",
	"toutColor" : "white",
};
var graph = {
	"folder": "graph",
	"name": "Graph",
	"tagLine": "a prototype for graphing equations",
	"toutColor" : "white",
};
var instanote = {
	"folder": "instanote",
	"name": "instanote",
	"tagLine": "preserve your memories with instanote",
	"toutColor" : "black",
};
var matchpop = {
	"folder": "matchpop",
	"name": "Match Pop!",
	"tagLine": "put your memory skills to the test",
	"toutColor" : "black",
};

var data = [{
	"projects": [instanote,graph,matchpop,acronym]
}];


var App = angular.module('MyApp', []);
App.controller('MyController', function($scope, $http) {
	$scope.data = data[0];
	console.log($scope.data);
});