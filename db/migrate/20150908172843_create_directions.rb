class CreateDirections < ActiveRecord::Migration
  def change
    create_table :directions do |t|
      t.string :origin
      t.string :destination
      t.string :distance
      t.string :duration
      t.string :mode

      t.references :user

      t.timestamps null: false
    end
  end
end
