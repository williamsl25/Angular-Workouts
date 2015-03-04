class WorkoutsController < ApplicationController
  
  def index
    @workouts = Workout.all
    respond_to do |format|
      format.json {render json: @workouts }
    end
  end

  def new
    @workout = Workout.new
    respond_to do |format|
      format.json {render json: @workout }
    end
  end

  def show
    @workout = Workout.find params[:id]
    respond_to do |format|
      format.json {render json: @workout }
    end
  end

  def edit
    @workout = Workout.find params[:id]
    respond_to do |format|
      format.json {render json: @workout }
    end
  end

  def create
    @workout = Workout.new workout_params
    @workout.save
    respond_to do |format|
        format.json { render json: @workout }
      
    end
  end

  def destroy
    @workout = Workout.find params[:id]
    @workout.destroy
    respond_to do |format|
      format.json{ head :no_content }
    end
  end

  def update
    @workout = Workout.find params[:id]
    @workout.update(workout_params)
    respond_to do |format|
      format.json { render json: @workout }
    end
  end

  private

  def workout_params
    params.require(:workout).permit(
      :workout,
      :workout_trainer
      )
  end
end
