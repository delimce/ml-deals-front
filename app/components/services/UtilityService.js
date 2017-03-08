/**
 * Created by delimce on 7/3/2017.
 */
(function () {
    'use strict';

    angular.module('app').factory('utilityService', function ($q, $http) {

        return {


            /**
             * debug json object
             * @param object
             */
            debugJsonString:function(object){

                console.log(JSON.stringify(object))

            }


        };
    });

})();
