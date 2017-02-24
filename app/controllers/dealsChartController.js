(function () {
    angular
        .module('app')
        .controller('dealsChartController', function ($scope, chartsService, dealService) {


            $scope.chart_si = {}
            $scope.chart_gmv = {}


            chartsService.getDataTotals(null).then(function (data) {


                var cdata = data.content;
                $scope.labels = [];
                $scope.labelsx = [];
                $scope.backColors = [];
                $scope.borderColors = [];

                $scope.chart_si.data = [];
                $scope.chart_gmv.data = [];
                $scope.chart_si.series = 'Sucessful item';
                $scope.chart_gmv.series = 'GMV';


                _.each(cdata, function (item) {

                    $scope.labels.push(item.name);
                    $scope.labelsx.push(item.name.substring(0, 10));

                    $scope.backColors.push(chartsService.getQuarterColor(item.quarter, 0.2))
                    $scope.borderColors.push(chartsService.getQuarterColor(item.quarter, 1))

                    $scope.chart_si.data.push(item.si);
                    $scope.chart_gmv.data.push(item.gmv);

                })


                ////SI

                var ctx = $("#chart_si");
                var total_data = _.size($scope.chart_si.data);

                var chart_si = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: $scope.labels,
                        xLabels: $scope.labelsx,
                        datasets: [{
                            label: $scope.chart_si.series,
                            data: $scope.chart_si.data,
                            backgroundColor: $scope.backColors,
                            borderColor: $scope.borderColors,
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
                var total_data = _.size($scope.chart_gmv.data);
                var chart_gmv = new Chart(ctx2, {
                    type: 'bar',
                    data: {
                        labels: $scope.labels,
                        xLabels: $scope.labelsx,
                        datasets: [{
                            label: $scope.chart_gmv.series,
                            data: $scope.chart_gmv.data,
                            backgroundColor: $scope.backColors,
                            borderColor: $scope.borderColors,
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
                                        callback: function (label, index, labels) {
                                            return 'Bs.' + label / 1000000 + 'M';
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


            /**
             * ejecuta el servicio para sellers
             */
            chartsService.getSellersTotals(null).then(function (data2) {

                ////opciones grid de sellers
                $scope.sellers = data2.content
                $scope.columnDefs =
                    [
                        {field: 'id', width: "20%", type: 'string'},
                        {field: 'name', width: "46%", type: 'string', displayName: 'nickname'},
                        {field: 'si', width: "14%", type: 'number'},
                        {field: 'gmv', width: "20%", type: 'number', cellFilter: 'currency'}];


            }).catch(function (err) { ////FALLA DEL WEBSERVICES

                console.log(err);

            });


            /**
             * lista de deals
             */
            dealService.getDealList(null).then(function (data) {

                $scope.dealsList = []

                _.each(data.content, function (deal) {

                    deal.check = (deal.active == 1);

                    $scope.dealsList.push(deal);

                })


            }).catch(function (err) { ////FALLA DEL WEBSERVICES

                console.log(err);

            });


        });


})();
