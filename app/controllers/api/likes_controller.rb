class Api::LikesController < ApplicationController
  def create
    @like = Liked.new(like_params)
    @like.liker_id = current_user.id
    if @like.save
      render :show
    else
      render json: @like.errors.messages
    end
  end

  def destroy
  end

  private

  def like_params
    params.require(:like).permit(:liked_id)
  end
end
