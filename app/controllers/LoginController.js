(function () {
    angular
        .module('app')
        .controller('loginController', function ($scope, $localStorage, $sessionStorage, $state) {

            $scope.$storage = $localStorage;

            $scope.doLogin = function () {

                if ($scope.myData.user.trim() == "admin" && $scope.myData.password.trim() == "123456") {

                    $state.go("home.dashboard");

                }

            }


            $scope.doLogout = function () {
                $state.go("login");
            }


        });


})();
