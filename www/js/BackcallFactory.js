'user strict';
angular.module('app')
    .factory('BackcallFactory', function ($state, $ionicPlatform, $ionicHistory, $timeout) {
// VOLA SE PAK TAKHLE    BackcallFactory.backButtonCancel();
        var obj = {}
        obj.backButtonCancel = function () {
            var backbutton=0;
            $ionicPlatform.registerBackButtonAction(function () {
                if ($state.current.name == "app.home" || $state.current.name == "app.login") {

                    /**
                     * Moznost pro doubleclick na zavreni aplikace
                     * nutmo mit nainstalovy: http://ngcordova.com/docs/plugins/toast/
                     */

                     if(backbutton==0){
                        backbutton++;
                        window.plugins.toast.showShortCenter('Press again to exit');
                        $timeout(function(){backbutton=0;},5000);
                    }else{
                        navigator.app.exitApp();
                    }


                    /**
                     * Moznost pro dialogovy okno s tim jestli chci zavrit aplikaci

                    var action = confirm("Do you want to Exit?");
                    if (action) {
                        navigator.app.exitApp();
                    }*/

                } else {
                    $ionicHistory.nextViewOptions({
                        disableBack: true
                    });
                    $state.go('app.home');
                    //go to home page
                }
            }, 100);//registerBackButton
        }//backcallfun

        /**
         * Zakaze tlacitko zpet
         */
        obj.backButtonProhibited = function () {
            $ionicPlatform.registerBackButtonAction(function (e) {
                e.preventDefault();
            }, 1000);

        };

        obj.backButtonDisable = function (){
            $ionicHistory.nextViewOptions({
                disableAnimate: true,
                disableBack: true
            });
        };


        return obj;
    });