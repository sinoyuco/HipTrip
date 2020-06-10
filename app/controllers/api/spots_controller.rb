class Api::SpotsController < ApplicationController

    def index
        @spots = bounds ? Spot.in_bounds(bounds) : Spot.all
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