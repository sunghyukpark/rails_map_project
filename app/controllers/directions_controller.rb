require 'google_api'

class DirectionsController < ApplicationController
  before_action :set_direction, only: [:show, :edit, :update, :destroy]

  def index
    @directions = Direction.all
  end

  def show
  end

  def new
    @direction = Direction.new
  end

  def edit
  end


  def create
    # @direction = Direction.new(direction_params)

    # # api request to get distance/ duration
    # direction_client = DirectionsClient.new
    # @distance = direction_client.make_api_request(
    #             origin: params[:origin],
    #             destination: params[:destination],
    #             mode: params[:mode])[:distance]
    # @duration = direction_client.make_api_request(
    #             origin: params[:origin],
    #             destination: params[:destination],
    #             mode: params[:mode])[:duration]

    # @direction.distance = @distance
    # @direction.duration = @duration

    # if @direction.save
    #   redirect_to @direction
    # else
    #   redirect_to user_direcions_path
    # end
  end


  def update
    respond_to do |format|
      if @direction.update(direction_params)
        format.html { redirect_to @direction, notice: 'Direction was successfully updated.' }
        format.json { render :show, status: :ok, location: @direction }
      else
        format.html { render :edit }
        format.json { render json: @direction.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @direction.destroy
    respond_to do |format|
      format.html { redirect_to directions_url, notice: 'Direction was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_direction
      @direction = Direction.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def direction_params
      params.require(:direction).permit(:origin, :destination, :mode)
    end
end
