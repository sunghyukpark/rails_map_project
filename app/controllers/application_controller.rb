class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end
  helper_method :current_user

  # if @current_user.nil?
  #   @current_user = User.find(session[:user_id])
  # end

  def signed_in
  	!!current_user
  end
  helper_method :check_signed_in


end







