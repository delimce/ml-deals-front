(function(){
  'use strict';

  angular.module('app', [ 'ngMaterial']).run(function ($rootScope,utilityService) {

      $rootScope.helpers = utilityService;

  })

})();
