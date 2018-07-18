class Api::LikesController < ApplicationController
  def create
    if params[:data][:type] === "POST"
      @like = Like.new
      @like.liked_id = params[:data][:liked_id]
      @like.liker_id = current_user.id
      if @like.save
        render :show
      else
        render json: @like.errors.messages
      end
    end
  end

  def destroy
    @like = current_user.likes.find(params[:id])
    @like.destroy
  end
end
