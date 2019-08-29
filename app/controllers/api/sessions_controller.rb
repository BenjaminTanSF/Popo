class Api::SessionsController < ApplicationController
  def new
    @accounts = Account.all.pluck('name')
    @user = User.new
    render "api/users/new"
  end
  
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login!(@user)
      render "api/users/show"
    else
      render json: ["Invalid username or password. Please try again."], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout!
      render "api/users/show"
    else
      render json: ["Not Logged In"], status: 404
    end
  end
end
