'use strict';

/**
 * @ngdoc filter
 * @name realEstateApp.filter:search
 * @function
 * @description
 * # search
 * Filter in the realEstateApp.
 */
app.filter('search', function () {
    return function (input) {
      return 'search filter: ' + input;
    };
  });
