(function(){
    'use strict';
    angular
        .module('yomanAngular')
        .controller('SassController',SassController);
    
    function SassController($window,$scope){
        'ngInject'
        var vm = this;
        vm.title = 'SASS 学习'
    }
})();