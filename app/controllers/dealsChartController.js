(function () {
    angular
        .module('app')
        .controller('dealsChartController', function($scope,chartsService) {


            chartsService.getDataTotals(null).then(function (data) {


                var cdata = data.content;
                $scope.labels = [];
                $scope.si = [];
                $scope.gmv = [];
                $scope.series = ['Sucessful item'];


                _.each(cdata,function (item) {

                    $scope.labels.push(item.name);
                    $scope.si.push(item.si);
                    $scope.gmv.push(item.gmv);

                })

            }).catch(function (err) { ////FALLA DEL WEBSERVICES

               console.log(err);

            });








        });


})();
