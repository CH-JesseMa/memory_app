class AddColumnToScore < ActiveRecord::Migration
  def change
    add_column :scores, :guesses, :integer
    add_column :scores, :correct, :integer
    add_column :scores, :incorrect, :integer
  end
end
