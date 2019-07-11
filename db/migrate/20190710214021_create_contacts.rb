class CreateContacts < ActiveRecord::Migration[5.2]
  def change
    create_table :contacts do |t|
      t.string :email, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :phone_number
      t.string :cell_number
      t.integer :company_id, null: false

      t.timestamps
    end
    add_index :contacts, :company_id
  end
end
