class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.integer :rating, null: false
      t.integer :user_id, null: false
      t.integer :spot_id, null: false
    end
  end
end
