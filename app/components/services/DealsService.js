(function () {
    'use strict';

    angular.module('app').factory('dealService', function ($q, $http) {


        var timeOut = 10000; //// (10) seg
        var hub = window.globalVariable.servicesPath;

        return {


            getDealList: function (data) {


                var temp_data = {
                    "idGroup": null,
                    "idPerson": null
                }

                var options = {
                    method: 'get',
                    url: hub + "deal/getAll",
                    data: temp_data,
                    timeout: timeOut
                }


                return $http(options).then(function (response) {
                    return response.data;
                });

            },


        };
    });

})();
