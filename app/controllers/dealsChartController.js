(function () {
    angular
        .module('app')
        .controller('dealsChartController', function ($scope, chartsService) {


            $scope.chart_si = {}
            $scope.chart_gmv = {}


            chartsService.getDataTotals(null).then(function (data) {


                var cdata = data.content;
                $scope.labels = [];
                $scope.labelsx = [];
                $scope.chart_si.data = [];
                $scope.chart_gmv.data = [];
                $scope.chart_si.series = 'Sucessful item';
                $scope.chart_gmv.series = 'GMV';


                _.each(cdata, function (item) {

                    $scope.labels.push(item.name);
                    $scope.labelsx.push(item.name.substring(0, 10));

                    $scope.chart_si.data.push(item.si);
                    $scope.chart_gmv.data.push(item.gmv);

                })


                ////SI

                var ctx = $("#chart_si");

                var chart_si = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: $scope.labels,
                        xLabels:$scope.labelsx,
                        datasets: [{
                            label: $scope.chart_si.series,
                            data: $scope.chart_si.data,
                            backgroundColor: chartsService.getChartColors(),
                            borderWidth: 1
                        }]
                    },

                    options: {
                        title: {
                            display: true,
                            text: 'SuccessFul Items'
                        }
                    }

                });



                /////GMV
                var ctx2 = $("#chart_gmv");
                var chart_gmv = new Chart(ctx2, {
                    type: 'bar',
                    data: {
                        labels: $scope.labels,
                        xLabels:$scope.labelsx,
                        datasets: [{
                            label: $scope.chart_gmv.series,
                            data: $scope.chart_gmv.data,
                            backgroundColor: chartsService.getChartColors(),
                            borderWidth: 1
                        }]
                    },

                    options: {

                        title: {
                            display: true,
                            text: 'GMV'
                        },


                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        callback: function(label, index, labels) {
                                            return 'Bs.'+label/1000000+'M';
                                        }
                                    }
                                }
                            ]
                        }

                    }

                });



            }).catch(function (err) { ////FALLA DEL WEBSERVICES

                console.log(err);

            });





        });


})();
