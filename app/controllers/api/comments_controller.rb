class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
      render :show
    else
      render json: @comment.errors.messages
    end
  end

  def update
    @comment = current_user.comments.find(params[:comment][:id])
    if @comment.update(comment_params)
      render :show
    else
      render json: @comment.errors.messages
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render :show
  end

  private

  def comment_params
    params.require(:comment).permit(:text, :post_id)
  end
end
