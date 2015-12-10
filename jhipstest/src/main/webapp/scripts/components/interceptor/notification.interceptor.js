 'use strict';

angular.module('tastynoteApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-tastynoteApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-tastynoteApp-params')});
                }
                return response;
            }
        };
    });
