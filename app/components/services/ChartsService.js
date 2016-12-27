(function () {
    'use strict';

    angular.module('app').factory('chartsService', function ($q,$http) {


        var timeOut = 10000; //// (10) seg
        var hub = "http://xserver/dealsWS/";

        return {


            getDataTotals: function (data) {


                var temp_data = {
                    "idGroup": null,
                    "idPerson": null
                }

                var options = {
                    method: 'get',
                    url: hub + "charts/dealsTotals",
                    data: temp_data,
                    timeout: timeOut
                }



                return $http(options).then(function (response) {
                    return response.data;
                });

            }


        };
    });

})();
