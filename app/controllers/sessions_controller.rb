class SessionsController < ApplicationController

  def new
  end


  def create
    user = User.find_by_email(params[:email])

    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to user_path(user)
    else
      redirect_to '/login'
    end
  end


  def destroy
    session[:user_id] = nil
    redirect_to '/login'
  end

  
  def auth_create
    user = User.from_omniauth(env["omniauth.auth"])
    session[:user_id] = user.id
    redirect_to user_path(user)
  end


end
