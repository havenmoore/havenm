function config($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("main/home");

  $stateProvider
    .state('hm', {
      abstract: true,
      url: '/main',
      templateUrl: "views/main.html"
    })
    .state('hm.home', {
      url: '/home',
      templateUrl: "views/home.html",
      controller: "homeCtrl"
    })
    .state('hm.resume', {
      url: "/resume",
      templateUrl: "views/resume.html",
      controller: "resumeCtrl"
    })
    .state('hm.projects', {
      url: "/projects",
      templateUrl: "views/projects.html",
      controller: "projectsCtrl"
    })
    .state('hm.interests', {
      url: "/interests",
      templateUrl: "views/interests.html"
    });
}
angular
  .module('havenm')
  .config(config)
  .run(function ($rootScope, $state) {
    $state.go('hm.home');
    $rootScope.$state = $state;
  });
