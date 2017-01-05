(function () {
    'use strict';

    angular.module('app').factory('chartsService', function ($q, $http) {


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

            },

            getBackgroundColors: function () {

                var colors = [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ];

                return colors;

            },

            getBorderColor: function () {
                var colors = [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ];

                return colors;
            }


        };
    });

})();
