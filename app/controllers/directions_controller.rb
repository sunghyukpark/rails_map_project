class DirectionsController < ApplicationController

  def index
    @user = User.find(params[:user_id])
    @directions = @user.directions
    @props = {
      directions: @user.directions.last(5),
      url: user_directions_path(@user),
      request_forgery_token: request_forgery_protection_token,
      form_authenticity_token: form_authenticity_token
    }

    respond_to do |format|
      format.html {render :index}
      format.json {render json: @props}
    end

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
      mode: params[:mode]
    )

    direction_client = DirectionsClient.new

    response = direction_client.make_api_request(
      origin: params[:origin],
      destination: params[:destination],
      mode: params[:mode])

    @direction.duration = response[:duration]
    @direction.distance = response[:distance]

    if @direction.save
      respond_to do |format| 
        format.html {render :show}
        format.json {render json: @user.directions.last(5)}
      end
    else 
      render :new
    end 

  end



  def update
  end


  def destroy
  end

end
