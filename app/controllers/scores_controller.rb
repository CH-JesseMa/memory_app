class ScoresController < ApplicationController

  def index
    @scores = Score.all
  end

  def new
    @score = Score.new
    respond_to do |format|
      format.html
      format.json { render json: @score}
    end
  end

  def create
   @score = Score.new(score_params)
    respond_to do |format|
      if @score.save
        # format.html { redirect_to root_path, notice: "Save process completed!" }
        format.json { render json: @score }
      else
        format.html {
          flash.now[:notice]="Save proccess coudn't be completed!"
          render :new
        }
        format.json { render json: @score.errors, status: :unprocessable_entity}
      end
    end
  end

  def destroy
    @score = Score.find(params[:id])
    @score.destroy
    redirect_to root_path
  end

end

private

  def score_params
    params.require(:score).permit(
      :name,
      :points,
      :guesses,
      :correct,
      :incorrect)
  end
