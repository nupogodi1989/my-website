class User < ApplicationRecord
  def as_json(_options = {})
    {
      name: name,
      email: email
    }
  end
end
