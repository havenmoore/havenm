function homeCtrl($scope) {
    $scope.bio = bio;
}

function resumeCtrl($scope) {
    $scope.skillsets = skills;
    $scope.jobs = jobs;
    $scope.education = education;
}

function projectsCtrl($scope) {
    $scope.projectTypes = projects;
}

angular.module('havenm')
  .controller('homeCtrl', homeCtrl)
  .controller('resumeCtrl', resumeCtrl)
  .controller('projectsCtrl', projectsCtrl);
