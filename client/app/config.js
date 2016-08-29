function config($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/home");

  $stateProvider
    .state('havenm', {
      abstract: true,
      templateUrl: "views/main.html"
    })
    .state('havenm.home', {
      url: '/home',
      templateUrl: "views/home.html",
      controller: "homeCtrl"
    })
    .state('havenm.resume', {
      url: "/resume",
      templateUrl: "views/resume.html",
      controller: "resumeCtrl"
    })
    .state('havenm.projects', {
      url: "/projects",
      templateUrl: "views/projects.html",
      controller: "projectsCtrl"
    })
    .state('havenm.interests', {
      url: "/interests",
      templateUrl: "views/interests.html"
    });
}
angular
  .module('havenm')
  .config(config)
  .run(function ($rootScope, $state) {
    $state.go('havenm.home');
    $rootScope.$state = $state;
  });
