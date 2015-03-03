class WorkoutsController < ApplicationController
  
  def index
    @workouts = Workout.all
  end

  def new
    @workout = Workout.new
  end

  def show
    @workout = Workout.find params[:id]
  end

  def edit
    @workout = Workout.find params[:id]
    render :json
  end

  def create
    @workout = Workout.create workout_params
    respond_to do |format|
      if @workout.save
        format.html { redirect_to @workout, notice: 'workout was successfully created.' }
        format.json { render :show, status: :created, location: @workout }
      else
        format.html { render :new }
        format.json { render json: @workout.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @workout = Workout.find params[:id]
    @workout.destroy
    respond_to do |format|
      format.html {redirect_to workouts_url, notice: 'Workout was successfully destroyed.' }
      format.json{ head :no_content }
    end
  end

  def update
    @workout = Workout.find params[:id]
    respond_to do |format|
      if @workout.update(workout_params)
        format.html { redirect_to @workout, notice: 'workout was successfully updated.' }
        format.json { render :show, status: :ok, location: @workout }
      else
        format.html { render :edit }
        format.json { render json: @workout.errors, status: :unprocessable_entity }
      end
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
