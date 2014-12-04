app.factory('Subscriber', function($rootScope, $resource) {

	this.extract = function(datasource) {

		$resource($rootScope.API_BASE_URL + //
		'/subscribe/extract/' + datasource).//
		get(function(response) {
			$rootScope.dashboard.headers = response.headers;
			$rootScope.dashboard.data = response.data;
		});

	};

	return this;

});

app.factory('Publisher', function($rootScope, $resource) {

	this.analyze = function(key, value) {

		$resource($rootScope.API_BASE_URL + //
		'/publish/analyze/' + key + '/' + value).//
		get(function(response) {
			$rootScope.dashboard.keys = response.keys;
			$rootScope.dashboard.values = response.values;
		});

	};

	return this;

});

app.factory('Dashboard', function($rootScope, $resource) {

	this.getMetadata = function(dashboardId, $scope) {

		$resource('app/config/dashboard.json').get(function(response) {

			$rootScope.dashboard = response.dashboard;

		});

	};

	this.getData = function() {
	};

	return this;

});