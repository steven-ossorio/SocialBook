class Api::FriendsController < ApplicationController
  def index
    @friend_requests = @current_user.requestee
  end

  def create
    friend = User.find(params[:friendee_id])
    @pending_friend = Friend.new(
      friender_id: current_user.id,
      friendee_id: friend
    )

    if @pending_friend.save
      render 'api/friends/index'
    else
      render json: @pending_friend.errors.messages
    end
  end

  def edit

  end

  def update

  end

  def destroy

  end

  private

  def friend_params
    params.require(:friend).permit(:status)
  end
end
