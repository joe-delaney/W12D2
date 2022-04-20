class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login_user!(user)
    session[:session_token] = user.reset_session_token!
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
    current_user = nil
  end

  def redirect_if_logged_in
    redirect_to root_url if logged_in?
  end

  def redirect_if_not_logged_in
    redirect_to new_session_url unless logged_in?
  end

  def deny_access_if_not_logged_in
    unless logged_in?
      render json: ['You must be logged in to do that'], status: :unauthorized
    end
  end
end
