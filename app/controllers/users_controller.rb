class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
  end


  def new
    @user = User.new
  end


  def edit
    @user = User.find(params[:id])
  end


  def create
    @user = User.new(user_params)

    if @user.save
    	session[:user_id] = @user.id
    	redirect_to @user
    else
    	redirect_to '/signup'
    end
  end


  def update
  end


  def destroy
    @user.destroy
  end


  private
    def user_params
      params.require(:user).permit(:username, :password, :password_confirmation)
    end

end
