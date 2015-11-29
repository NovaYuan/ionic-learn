var app = angular.module('myApp', [
        'ionic'
]);

app.config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/');

        $stateProvider
                .state('login', {
                        url: "/login",
                        templateUrl: 'page/login.html'
                });

        $stateProvider
                .state('/',{
                        url: "/",
                        templateUrl: 'page/list.html'
                })
});