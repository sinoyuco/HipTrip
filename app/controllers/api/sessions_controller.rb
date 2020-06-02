class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
            login(@user)
            render "api/users/show" #current rendering user show page, but this may need to be changed to the spot index page later.
        else
            render json:["Invalid email/password combination"], status: 401
        end
    end

    def destroy
        @user = current_user
        if @user
            logout
            render "api/users/show" #current rendering user show page, but this may need to be changed to the spot index page later.
        else
            render json: ["Not signed in"], status: 404
        end
    end

end