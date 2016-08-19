'user strict';
angular.module('app')
    .controller('HomeController', function ($scope, $state, $ionicHistory, BackcallFactory) {


        BackcallFactory.backButtonCancel();

        $scope.$on("$ionicView.beforeEnter", function () {
           console.log(localStorage.getItem('logIn'));
            console.log("cekam3");
            if (localStorage.getItem('logIn') === "a") {
                $state.go('app.login');
            }
        });

        $scope.toSetting = function (){
            BackcallFactory.backButtonDisable();
            $state.go('app.setting');
        }


        //$scope.$on("$ionicView.beforeEnter", function () {
        //  console.log("cekam3");
        //});
        //$scope.$on("$ionicView.enter", function () {
        //  console.log("cekam1");
        //});
        //$scope.$on("$ionicView.afterEnter", function () {
        //  console.log("cekam5");
        //});
        //$scope.$on("$ionicView.beforeLeave", function () {
        //  console.log("cekam4");
        //});
        //$scope.$on("$ionicView.leave", function () {
        //  console.log("cekam2");
        //});
        //$scope.$on("$ionicView.afterLeave", function () {
        //  console.log("cekam6");
        //});
        //
        //$scope.$on("$ionicView.unloaded", function () {
        //  console.log("cekam7");
        //});
        //$scope.$on("$ionicView.loaded", function () {
        //  console.log("cekam");
        //});

    });

