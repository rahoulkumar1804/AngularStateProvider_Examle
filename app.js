var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/tt1');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
    .state('tt', {
        url: '/tt1',
        templateUrl: 'partial-home.html'
    })
	


    // nested list with custom controller
    .state('tt.list', {
        url: '/list',
        templateUrl: 'partial-home-list.html',
        controller: function($scope) {
            $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
        }
    })

    // nested list with just some random string data
    .state('tt.paragraph', {
        url: '/paragraph',
        template: 'I could sure use a drink right now.'
    })
	
	.state('tt.xx', {
        url: '/xx',
        template: 'ddddddddddd'
    })
	
	.state('list', {
        url: '/list',
        template: 'ddddddddddd'
    })
	
	.state('about', {
        url: '/about',
        views: {

            // the main template will be placed here (relatively named)
            '': { templateUrl: 'partial-about.html' },

            // the child views will be defined here (absolutely named)
            'columnOne@about': { template: 'Look I am a column!' },

            // for column two, we'll define a separate controller 
            'columnTwo@about': { 
                templateUrl: 'table-data.html',
                controller: 'scotchController'
            }
        }

    });

}); // closes $routerApp.config()

// let's define the scotch controller that we call up in the about state
routerApp.controller('scotchController', function($scope) {

    $scope.message = 'test';

    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];

});