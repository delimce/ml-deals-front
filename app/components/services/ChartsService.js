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

            getChartColors: function (total, opaque) {

                var colors = [];

                for (var i = 0; i < total; i++) {
                    var r = _.random(54, 255);
                    var g = _.random(99, 206);
                    var b = _.random(64, 255);
                    colors[i] = String('rgba(' + r + ', ' + g + ', ' + b + ', ' + opaque + ')');
                }


                return colors;

            }


        };
    });

})();
