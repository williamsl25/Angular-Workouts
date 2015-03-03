var workoutPlan = angular.module('workoutPlan', [])
.config(function($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $("meta[name=csrf-token]").attr("content");
  })
;

// must pass in an empty array
