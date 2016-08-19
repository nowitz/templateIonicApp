'user strict';
angular.module('app')
    .controller('LoginController', function ($scope, $state, $ionicHistory, BackcallFactory) {


        BackcallFactory.backButtonCancel();

        $scope.logIn = function () {
            localStorage.setItem('logIn', "b");
            BackcallFactory.backButtonDisable();
            $state.go('app.home');
        };

        $scope.logout = function (){
            $state.go('app.login');
            localStorage.removeItem("login");
        };


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

