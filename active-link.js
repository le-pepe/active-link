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
                    if (scope.activeLink === locationPath) {
                        element.addClass("active");
                        if (parent.length > 0) {
                            $(parent[0]).addClass('active')
                        }
                    } else {
                        element.removeClass("active");
                        if (parent.length > 0) {
                            $(parent[0]).removeClass('active')
                        }
                    }
                });
            }
        }
    });
