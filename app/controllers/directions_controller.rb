class DirectionsController < ApplicationController

  def index
    @user = User.find(params[:user_id])
    @directions = @user.directions
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

    @direction = @user.directions.new(direction_params)

    direction_client = DirectionsClient.new
    
    response = direction_client.make_api_request(origin: direction_params[:origin],
      destination: direction_params[:destination],
      mode: direction_params[:mode])

    @direction.duration = response[:duration]
    @direction.distance = response[:distance]
    @direction.mode = direction_params[:mode]

    if @direction.save
      redirect_to user_direction_path(@user, @direction)
    else
      render :new
    end

  end



  def update
  end


  def destroy
  end


  private
    def direction_params
      params.require(:direction).permit(:origin, :destination, :mode)
    end
end
