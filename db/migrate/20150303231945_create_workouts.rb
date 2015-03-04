class CreateWorkouts < ActiveRecord::Migration
  def change
    create_table :workouts do |t|
      t.string :workout
      t.string :workout_trainer

      t.timestamps null: false
    end
  end
end
