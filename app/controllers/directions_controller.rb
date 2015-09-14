class DirectionsController < ApplicationController

  def index
    @user = User.find(params[:user_id])
    @data = {
      directions: @user.directions.last(5),
      direction_form: {
        action: user_directions_path(@user),
        request_forgery_token: request_forgery_protection_token,
        form_authenticity_token: form_authenticity_token
      }
    }

    # @user = User.find(params[:user_id])
    # @directions = @user.directions
  end


  def show
    @direction = Direction.find(params[:id])
  end


  def new
    @direction = Direction.new
  end


  def edit
  end


  def create
    @user = User.find(params[:user_id])

    @direction = @user.directions.new(
      origin: params[:origin],
      destination: params[:destination],
      mode: params[:mode])

    direction_client = DirectionsClient.new

    response = direction_client.make_api_request(
      origin: params[:origin],
      destination: params[:destination],
      mode: params[:mode])

    @direction.duration = response[:duration]
    @direction.distance = response[:distance]

    if @direction.save
      if request.xhr?
        render @user.directions.last(5).to_json
      else
        redirect_to user_direction_path(@user, @direction)
      end
    else  
      render :new
    end

  end



  def update
  end


  def destroy
  end


  # private
  #   def direction_params
  #     params.require(:@direction).permit(:origin, :destination, :mode)
  #   end
end
