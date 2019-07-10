class CreateAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :accounts do |t|
      t.string :name, null: false
      t.string :website
      t.string :phone_number
      t.string :industry, null: false
      t.string :employees
      t.boolean :is_org, null: false
      t.integer :annual_revenue_mil
      t.integer :owner_id

      t.timestamps
    end
    add_index :accounts, :owner_id
  end
end
