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
    like = Like.where(liked_id: params[:id], liker_id: current_user.id)
    @like = Like.find(like[0].id);
    @like.destroy
    current_user.id
  end
end
