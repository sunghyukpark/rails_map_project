class CreateDirections < ActiveRecord::Migration
  def change
    create_table :directions do |t|
      t.string :distance
      t.string :duration
      t.string :mode

      t.references :user
      t.references :destination
      t.references :origin

      t.timestamps null: false
    end
  end
end
