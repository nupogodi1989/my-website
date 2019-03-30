class UsersController < ApplicationController
  def index
    render json: { Users: User.all.map(&:as_json).sort_by do |u|
      u[:name].downcase
    end }
  end
end
