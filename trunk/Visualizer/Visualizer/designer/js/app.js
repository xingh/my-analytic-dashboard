'use strict';

/* App Module */

/**
 * Declare app and router
 */

var app = angular.module('mvc', ['ui.slider','ui.bootstrap','ngGrid','ngResource']). 
    config(['$routeProvider', function($routeProvider) {
      	$routeProvider.       
        when('/home', {templateUrl: 'partials/home.html', controller: HomeCtrl}). 
        when('/newAttr/:screenId/:ElementType', {templateUrl: 'partials/newattr.html', controller: NewattCtrl}).
        when('/canvas-preview/:screenId', {templateUrl: 'partials/canvas-preview.html', controller: PreviewCtrl}).
        when('/canvas-nb-main', {templateUrl: 'partials/canvas-nb-main.html', controller: CanvasCtrl}).
        when('/canvas-nb-main/:screenId', {templateUrl: 'partials/canvas-nb-main.html', controller: CanvasCtrl}).
        when('/conversionTool', {templateUrl: 'partials/conversion_util.html', controller: ConversionUtilCtrl}).
        when('/designGrids', {templateUrl: 'partials/canvas-grid.html', controller: GridDesignCtrl}).
        when('/designGrids/:gridId', {templateUrl: 'partials/canvas-grid.html', controller: GridDesignCtrl}).
        when('/import/:type', {templateUrl: 'partials/import.html', controller: ImportCtrl}).
        when('/canvas-nb-main/:screenId/:ElementType', {templateUrl: 'partials/canvas-nb-main.html', controller: CanvasCtrl}).             
        otherwise({redirectTo: '/home'});
      	
      	
      	
}]);


/**
 * Declare global vars and functions which will be available in $scope of controllers
 * @param {Object} $rootScope
 */
app.run(function($rootScope, $http, $modal) {

	//supporting partials used as templates
	$rootScope.sidebarTemplate = "partials/canvas-control-palette.html";	
	//$rootScope.propertyofControl = "partials/properties_controls.html";
	$rootScope.previewMetadata = "partials/metadata_preview.html";
	
	$rootScope.gridTemplate = "partials/grid.html";
	
    //for control palette in the left side  
    $http.get('data/controls.json').success(function(data) {	
    	$rootScope.controls = angular.fromJson(data.controls);
    });
    //for the properties palette in the right side
    $http.get('data/properties_controls.json').success(function(data) {	
    	$rootScope.properties =  angular.fromJson(data.properties);
    });
    //
    $rootScope.metamodel= {};  
    $rootScope.modalInstance;
    $rootScope.listURI ={};
    $rootScope.changeList;
    $rootScope.undoList = [];
    $rootScope.redoList = [];
    $rootScope.accessControldata=[];
    $rootScope.canvashint = '';
    $rootScope.openModal = function() {
    	//$('#myModal').modal({ show:true});
    	$rootScope.modalInstance = $modal.open({backdrop: 'static',
			windowClass : 'inProgressClass',
	        templateUrl : 'InProgress.html'});
    	
	};
	
	$rootScope.closeModal = function() {
		//$('#myModal').modal('hide');
		//$(".modal-backdrop").css("display","none")
		$rootScope.modalInstance.close();
		
	};
    
});

app.value('ui.config', {
    "sortable": {
        "axis": "y",
        "placeholder": "sortable-placeholder"
    }
});