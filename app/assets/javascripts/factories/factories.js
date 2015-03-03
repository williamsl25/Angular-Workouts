angularWorkouts.factory('workoutData', function($http) {
  workoutData = {
    data: {
      workouts: [
      ]
    }
  }

  workoutData.loadWorkouts = function() {
    // $.ajax.get("/workouts.json")
    $http.get("/workouts.json").success(function(workoutsFromServer) {
      // console.log(workoutsFromServer);
      _.each(workoutsFromServer, function(workout){
        workoutData.pushWorkout(workout)
      })
    });
  }

  workoutData.addWorkout = function(workout) {
    $http.post('/workouts.json', workout).success(function(workoutFromServer){
      workoutData.pushWorkout(workoutFromServer);
    })
  }

  workoutData.pushWorkout = function(workout) { workoutData.data.workouts.push(workout);
  }

  workoutData.deleteWorkout = function(workoutId) {
    $http.delete("/workouts/" + workoutId + ".json").success(function(data) {
      // console.log("SUccess");
      var deletedWorkout = _.findWhere( workoutData.data.workouts, {id: parseInt(workoutId)})
      // console.log(workoutData.data.workouts)
      workoutData.data.workouts = _.without(workoutData.data.workouts, deletedWorkout)
      
    })
  }
  workoutData.editWorkout = function(workoutId) {
    $http.get("/workouts/" + workoutId + "/edit.json").success(function(data){
    })
  }
  return workoutData;
})