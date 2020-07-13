class Api::SpotsController < ApplicationController

    def index
        #@spots = bounds ? Spot.in_bounds(bounds) : Spot.all
        @spots = Spot.all

        if params[:search_term]
           @spots = params[:search_term] == '' ? @spots : @spots.where(city: params[:search_term][0].upcase + params[:search_term][1..-1].downcase).union(@spots.where(state: params[:search_term][0].upcase + params[:search_term][1..-1].downcase))
        end

        if params[:type]
            @spots = @spots.where(category: params[:type])
        end

        if bounds
            @spots = @spots.in_bounds(bounds)
        end
        
        render :index
    end


    def show
        @spot = Spot.find(params[:id])
        render :show
    end


    private
    def spot_params
        params.require(:spot).permit(:name, :price, :city, :state, :latitude, :longitude, :category, :host_id, photos:[])
    end

    def bounds
        params[:bounds]
    end

end