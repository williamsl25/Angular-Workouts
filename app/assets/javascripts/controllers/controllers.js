var indexCtrl = angularWorkouts.controller('indexCtrl', function($scope, workoutData) {
    $scope.some_text = {workout: "Yoga", workoutTrainer: "Jillian Michaels"}; 

    $scope.workouts = workoutData.data;
    $scope.formWorkout = '';
    $scope.formWorkoutTrainer = '';
    workoutData.loadWorkouts();

    // 
    // workoutData is from factories.js

    // $scope.workouts = [ 
    //   {workout: "Zumba", workoutTrainer: "Bob Harper"},
    //   {workout: "Bootcamp", workoutTrainer: "Tyler"},
    //   {workout: "Lifting Weights", workoutTrainer: "John"},
    //   {workout: "Swimming", workoutTrainer: "Sarah"}
    // ];

    $scope.changeWorkout = function() {      
      $scope.some_text = _.sample($scope.workouts.workouts);
    };
    // the second .workouts shoves all of teh workouts from the array into here no longer need the .push below - call this array in the index
    $scope.submitForm = function() {
      workoutData.addWorkout(
        {
          workout: {
            workout: $scope.formWorkout, workout_trainer: $scope.formWorkoutTrainer
          }
        }
      );

      // $scope.workouts.push(
      //   { workout: $scope.formWorkout, workoutTrainer: $scope.formWorkoutTrainer }
      // );
      $scope.formWorkout = '';
      $scope.formWorkoutTrainer = '';
    };

    $scope.deleteWorkout = function(workoutId) { workoutData.deleteWorkout(workoutId);
    }

    $scope.editWorkout = function(workout) {
    $scope.formWorkout = workout.workout
    $scope.formWorkoutPhone = workout.trainer
    
    // console.log(workout)
    $scope.submitForm = function() {
      workoutData.updateWorkout(
        {
          workout: {
            id: workout.id , workout: $scope.formWorkout, workout_trainer: $scope.formWorkoutTrainer
          }
        }
      );
      $scope.formWorkout = '';
      $scope.formWorkoutTrainer = '';
    }
  };

});


