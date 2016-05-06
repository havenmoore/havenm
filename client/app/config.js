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
      templateUrl: "views/home.html"
    })
    .state('hm.resume', {
      url: "/resume",
      templateUrl: "views/resume.html"
    })
    .state('hm.projects', {
      url: "/projects",
      templateUrl: "views/projects.html"
    })
}
angular
  .module('havenm')
  .config(config)
  .run(function ($rootScope, $state) {
    $state.go('hm.home');
    $rootScope.$state = $state;
  });
