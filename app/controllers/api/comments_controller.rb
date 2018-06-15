class Api::CommentsController < ApplicationController
  def index
  end

  def new
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
      render :show
    else
      render json: @comment.errors.messages
    end
  end

  def edit
  end

  def update
  end

  def show
  end

  def destroy
  end

  private

  def comment_params
    params.require(:comment).permit(:text, :post_id)
  end
end
