(function () {

    'use strict';

    var ngModule = angular.module('codeKata.sampleService', ['ngResource']),
        remoteUrl = 'https://ajax.googleapis.com/ajax/services/feed/find';

    //making a get request to the server
    ngModule.factory('SampleData', function ($resource) {
        return $resource(remoteUrl, {v: '1.0', q: "Official Google Blogs", callback: 'JSON_CALLBACK'}, {
            all: {method: 'JSONP', params: {}}
        });
    });
}());