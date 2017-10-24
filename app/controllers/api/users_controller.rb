class Api::UsersController < ApplicationController
  def index
    json: @users = User.all

  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
    elsif
      render json: @user.errors.full_messages
    end
  end

  def show
    json: @user = User.find(params[:id])
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :dob, :sex, :password)
  end
end
