(function(){
    angular.module('app', [])
        .controller('MainCtrl',function () {
            var main = this;
            main.friends = ['Daniel','Luke','Sara','Rick','Johny'];
        });
}());

