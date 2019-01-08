'use strict';

angular.module('active-link', [])
    .directive('activeLink', function ($location) {
        return {
            restrict: 'A',
            scope: {
                activeLink: '='
            },
            link: function (scope, element, attrs) {
                scope.location = $location;
                scope.$watch('location.path()', function (locationPath) {
                    (scope.activeLink === locationPath) ? element.addClass("active") : element.removeClass("active");
                });
            }
        }
    });
