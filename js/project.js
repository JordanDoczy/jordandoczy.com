var acronym = [{
	"folder": "acronym",
	"name": "Acronym",
	"tagLine": "a prototype for looking up acronyms",
	"tout" : "url('/images/acronym/detail/tout_mobile@2x.jpg') no-repeat;",
	"toutColor" : "#FFFFFF",
	"summary": "Acronym uses a public API to retrieve definitions of acronyms.",
 	"technicalDetails": ["Objective C", "AFNetworking Integration (Asynchronous Data)", "Sectioned TableView", "JSON Data"],
	"poster": "/images/acronym/detail/poster@2x.jpg",
	"video" : "/videos/acronym.mp4",
	"videoIE" : "/videos/ie/acronym.mp4",
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
 	"technicalDetails": ["Swift 2.0", "Core Data Infrastructure", "Custom Camera", "Custom Table Cells", "Map Kit Integration"],
	"poster": "/images/instanote/detail/poster@2x.jpg",
	"video" : "/videos/instanote.mp4",
	"videoIE" : "/videos/ie/instanote.mp4",
	"features": [{"title": "Core Data", "copy": "Each view harnesses the power of Core Data combining effieciency and utility.", "image": "/images/instanote/detail/feature-1@2x.jpg"}, 
			{"title": "Predictive Typing", "copy": "Revealing previous entries provides a fast and convienient typing experience.", "image": "/images/instanote/detail/feature-2@2x.jpg"}, 
			{"title": "Filtered Views", "copy": "Type into the search bar or click a tag to filter your results.", "image": "/images/instanote/detail/feature-3@2x.jpg"}],
	"nextProjectLink": {"href":"project.html#matchpop", "text": "SEE THE NEXT PROJECT: MATCH POP!"}
}];

var matchpop = [{
	"folder": "matchpop",
	"name": "Match Pop!",
	"tagLine": "put your memory skills to the test",
	"tout" : "url('/images/matchpop/detail/tout_mobile@2x.jpg') no-repeat;",
	"toutColor" : "#000000",
	"appStoreLink": "https://itunes.apple.com/us/app/matchpop!/id1062419829?mt=8",
	"summary": "A classic card matching game brought to life with imagery, animations, and sounds. Match all of the cards to play a surprise balloon popping game!",
 	"technicalDetails": ["Swift 2.0", "AVFoundation", "NSUserDefaults"],
	"poster": "/images/matchpop/detail/poster@2x.jpg",
	"video" : "/videos/matchpop.mp4",
	"videoIE" : "/videos/ie/matchpop.mp4",
	"features": [{"title": "Preserve User Settings", "copy": "User settings are stored between sessions preserving your selections for sound and difficulty.", "image": "/images/matchpop/detail/feature-1@2x.jpg"}, 
			{"title": "Visuals", "copy": "Delightful vector graphics and subtle animations provide a fun interactive user experience.", "image": "/images/matchpop/detail/feature-2@2x.jpg"}, 
			{"title": "Choose Your Difficulty", "copy": "From easy to hard find a setting that suits you.", "image": "/images/matchpop/detail/feature-3@2x.jpg"}],
	"nextProjectLink": {"href":"project.html#graph", "text": "SEE THE NEXT PROJECT: GRAPH"}
}];

var graph = [{
	"folder": "graph",
	"name": "Graph",
	"tagLine": "a prototype for graphing equations",
	"tout" : "url('/images/graph/detail/tout_mobile@2x.jpg') no-repeat;",
	"toutColor" : "#FFFFFF",
	"summary": "Graph mimics the essentials of a scientific calculator by computing basic operations while displaying the results on an x-y axis.",
 	"technicalDetails": ["Swift 2.0", "SplitViewController", "UIBezierPath"],
	"poster": "/images/graph/detail/poster@2x.jpg",
	"video" : "/videos/graph.mp4",
	"videoIE" : "/videos/ie/graph.mp4",
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
	$scope.playButton = document.querySelector("#play-button");
	$scope.video = document.querySelector("#video");

	$scope.video.addEventListener("ended", function() {
		$scope.playButton.style.display = 'block';
		$scope.video.load() 
	});
	$scope.video.addEventListener("pause", function() {
		$scope.playButton.style.display = 'block';
	});
	$scope.playVideo = function() {
		if (isIE() || isTrident() || isEdge()){
		    	$scope.video.src = $scope.data.videoIE;
		}
		$scope.video.play();
		$scope.playButton.style.display = 'none';
	};
	
	if (isTrident() || isEdge()){
		document.querySelector("#flickity").removeAttribute("data-flickity-options");
	}
});