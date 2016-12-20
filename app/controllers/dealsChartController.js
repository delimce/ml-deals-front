(function () {
    angular
        .module('app')
        .controller('dealsChartController', function($scope) {


            $scope.labels = ["Carnaval","Día de los enamorados","Computación","Semana Santa","Día de la Madre",
                "Especial de Tienda Oficiales","Celulares y teléfonos","Ropa, zapatos, accesorios, relojes, bisutería"
                ,"Día del Padre","Electronica, audio y video","Industrías","Día del Niño ","Accesorios para vehículos"
                ,"Celulares y teléfonos","Felices Vacaciones ","Computación","Deportes y fitness","Especial de Tienda Oficiales"
                ,"Electrodomésticos","Regreso a clases  ","Especial de Tienda Oficiales","Electrodomésticos","Aniversario "
                ,"Electronica, audio y video","CyberFest","Accesorios para vehículos","Celulares y teléfonos","Deportes y fitness"];




            $scope.series = ['Sucessful item'];

            $scope.data = [

                [430.00,23,0,220,0,340,330,450,670,890,0,0,0,0,0,0,0,0,0,0,210.00,0,583.00,0,1,659.00,0,0,0],



            ];



        });


})();
