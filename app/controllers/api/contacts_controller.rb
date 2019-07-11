class Api::ContactsController < ApplicationController
  def index
    @contacts = current_user.contacts + current_user.supervising_contacts
    render "api/contacts/index"
  end

  def show
    @contact = Contact.find(params[:id])
    render "api/contacts/show"
  end

  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      render "api/contacts/show"
    else
      render json: @contact.errors.full_messages, status: 422
    end
  end

  def update
    @contact = Contact.find(params[:id])
    if @contact.update_attributes(contact_params)
      render "api/contacts/show"
    else
      render json: @contact.errors.full_messages, status: 422
    end
  end

  def destroy
    @contact = Contact.find(params[:id])
    if @contact
      @contact.destroy!
      render "api/contacts/show"
    else
      render json: @contact.errors.full_messages, status: 422
    end
  end

  private
  def contact_params
    params.require(:contact).permit(:email, :first_name, :last_name, :phone_number, :cell_number, :company_id)
  end
end
