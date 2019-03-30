class UsersController < ApplicationController
  def index
    render json: User.all.map(&:as_json).sort_by { |u| u[:name].downcase }
  end
end
