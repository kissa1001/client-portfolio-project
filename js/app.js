var app = angular.module('lydia-portfolio',['ngRoute','ngAnimate'])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'views/home.html',
    controller: 'HomeCtrl'
  })
  .when('/services', {
    templateUrl:'views/services.html',
    controller: 'ServicesCtrl'
  })
  .when('/about', {
    templateUrl:'views/about.html',
    controller: 'AboutCtrl'
  })
  .when('/contact', {
    templateUrl:'views/contact.html',
    controller: 'ContactCtrl'
  })
  .when('/error', {
    template : '<p>Error Page Not Found</p>'
  });
}])
.controller('HomeCtrl', ['$scope', function($scope) {
  //empty for now
}])
.controller('ServicesCtrl', ['$scope', function($scope) {
  //empty for now
}])
.controller('AboutCtrl', ['$scope', function($scope) {
  //empty for now
}])
.controller('ContactCtrl', ['$scope', function($scope) {
  //empty for now
}])
.run(function($rootScope, $location, $timeout) {
  $rootScope.$on('$routeChangeError', function() {
    $location.path("/error");
  });
});
