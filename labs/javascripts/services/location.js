(function (ng, geo) {
	"use strict";
	function buildYLocURL(lat,long){
		return 'http://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20geo.placefinder%20WHERE%20text%3D%22' + 
						lat + '%2C' + long+ '%22%20AND%20gflags%3D%22R%22&format=json'
	}
	function location ($q,$http) {
		return {
			get : function () {
				var deferred;
				deferred = $q.defer();
				geo.getCurrentPosition(function (pos) {
					$http.get(buildYLocURL(pos.coords.latitude,pos.coords.longitude))
						.success(function (data, status, headers, config) {
								deferred.resolve({
									data: data
								});	
						});
				}, function (err) {
					deferred.reject({
						data: err
					});
				});
				return deferred.promise;
			}
		};
	}
	ng.module("comSalesforceExample")
		.factory("Location", location);
}(angular, navigator.geolocation));
