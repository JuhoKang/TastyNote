'use strict';

angular.module('tastynoteApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


