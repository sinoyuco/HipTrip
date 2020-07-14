class Api::ReviewsController < ApplicationController
    def index
        @reviews = Review.includes(:user).where(spot_id: params[:spot_id])
    end

    def create
        @review = Review.new(review_params)
        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find(params[:id])
        @review.destroy
    end

    private
    def review_params
        params.require(:review).permit(:title, :body, :rating, :user_id, :spot_id, :created_at)
    end
end