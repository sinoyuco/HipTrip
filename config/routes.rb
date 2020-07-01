Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    namespace :api, defaults: {format: :json} do

      resources :users, only: [:create, :update, :show, :destroy] do
        resources :bookings, only: [:index, :update]
      end

      resource :session, only: [:create, :destroy]

      resources :spots, only: [:index, :show] do 
        resources :reviews, only: [:index]
      end

      resources :bookings, only: [:create, :destroy, :update]

      resources :reviews, only: [:create]
      
    end
    root "static_pages#root"
end
