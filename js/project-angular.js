var acronym = [{
	"folder": "acronym",
	"name": "Acronym",
	"tagLine": "a prototype for looking up acronyms",
	"tout" : "url('/images/acronym/detail/tout_mobile@2x.jpg') no-repeat;",
	"toutColor" : "#FFFFFF",
	"summary": "Instanote attaches captions, tags, and locations to your photos providing a robust tool for creating, editing, and searching your memories.",
 	"technicalDetails": ["Swift 2.0", "Core Data Infrastructure", "Custom Camera (AVFoundation)", "Custom Table Cells", "Map Kit Integration"],
	"poster": "/images/acronym/detail/poster@2x.jpg",
	"video" : "/videos/acronym.mp4",
	"nextProjectLink": {"href":"project.html#instanote", "text": "SEE THE NEXT PROJECT: INSTANOTE"}
}];

var instanote = [{
	"folder": "instanote",
	"name": "instanote",
	"tagLine": "preserve your memories with instanote",
	"tout" : "/images/instanote/detail/tout_mobile@2x.jpg",
	"toutColor" : "#000000",
	"appStoreLink": "https://itunes.apple.com/us/app/insta-note/id1067575526?mt=8",
	"summary": "Instanote attaches captions, tags, and locations to your photos providing a robust tool for creating, editing, and searching your memories.",
 	"technicalDetails": ["Swift 2.0", "Core Data Infrastructure", "Custom Camera (AVFoundation)", "Custom Table Cells", "Map Kit Integration"],
	"poster": "/images/instanote/detail/poster@2x.jpg",
	"video" : "/videos/instanote.mp4",
	"features": [{"title": "Core Data", "copy": "Each view harnesses the power of Core Data combining effieciency and utility.", "image": "/images/instanote/detail/feature-1@2x.jpg"}, 
			{"title": "Predictive Typing", "copy": "Revealing previous entries provides a fast and convienient typing experience.", "image": "/images/instanote/detail/feature-2@2x.jpg"}, 
			{"title": "Filtered Views", "copy": "Type into the search bar or click the tags to filter your results.", "image": "/images/instanote/detail/feature-3@2x.jpg"}],
	"nextProjectLink": {"href":"project.html#matchpop", "text": "SEE THE NEXT PROJECT: MATCH POP!"}
}];

var matchpop = [{
	"folder": "matchpop",
	"name": "Match Pop!",
	"tagLine": "put your memory skills to the test",
	"tout" : "url('/images/matchpop/detail/tout_mobile@2x.jpg') no-repeat;",
	"toutColor" : "#000000",
	"appStoreLink": "https://itunes.apple.com/us/app/matchpop!/id1062419829?mt=8",
	"summary": "Instanote attaches captions, tags, and locations to your photos providing a robust tool for creating, editing, and searching your memories.",
 	"technicalDetails": ["Swift 2.0", "Core Data Infrastructure", "Custom Camera (AVFoundation)", "Custom Table Cells", "Map Kit Integration"],
	"poster": "/images/matchpop/detail/poster@2x.jpg",
	"video" : "/videos/matchpop.mp4",
	"features": [{"title": "Preserve User Settings", "copy": "User settings are stored between sessions preserving their selections..", "image": "/images/matchpop/detail/feature-1@2x.jpg"}, 
			{"title": "Dynamic Animations", "copy": "Subtle animations provide an interactive user experience.", "image": "/images/matchpop/detail/feature-2@2x.jpg"}, 
			{"title": "Sounds", "copy": "A variety of sounds keeps the game fun. .", "image": "/images/matchpop/detail/feature-3@2x.jpg"}],
	"nextProjectLink": {"href":"project.html#graph", "text": "SEE THE NEXT PROJECT: GRAPH"}
}];

var graph = [{
	"folder": "graph",
	"name": "Graph",
	"tagLine": "a prototype for graphing equations",
	"tout" : "url('/images/graph/detail/tout_mobile@2x.jpg') no-repeat;",
	"toutColor" : "#FFFFFF",
	"summary": "Instanote attaches captions, tags, and locations to your photos providing a robust tool for creating, editing, and searching your memories.",
 	"technicalDetails": ["Swift 2.0", "Core Data Infrastructure", "Custom Camera (AVFoundation)", "Custom Table Cells", "Map Kit Integration"],
	"poster": "/images/graph/detail/poster@2x.jpg",
	"video" : "/videos/graph.mp4",
	"features": [{"title": "Core Data", "copy": "Each view harnesses the power of Core Data combining effieciency and utility.", "image": "/images/graph/detail/feature-1@2x.jpg"}, 
			{"title": "Predictive Typing", "copy": "Revealing previous entries provides a fast and convienient typing experience.", "image": "/images/graph/detail/feature-2@2x.jpg"}, 
			{"title": "Filtered Views", "copy": "Type into the search bar or click the tags to filter your results.", "image": "/images/graph/detail/feature-3@2x.jpg"}],
	"nextProjectLink": {"href":"project.html#acronym", "text": "SEE THE NEXT PROJECT: ACRONYM"}
}];

var App = angular.module('MyApp', []);
App.controller('MyController', function($scope, $http) {
	var page = window.location.hash.substr(1);
	
	var data;
	try{
		data = self[page][0];
	}
	catch(err) {
		page = "instanote"
		data = self[page][0];
	}
	
	$scope.data = data;
	$scope.folder = page;	
});