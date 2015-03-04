var workoutList = angular.module('workoutList', [])
.config(function($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $("meta[name=csrf-token]").attr("content");
  })
;

// must pass in an empty array
