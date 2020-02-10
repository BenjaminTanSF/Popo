# frozen_string_literal: true

class Api::AccountsController < ApplicationController
  def index
    @accounts = current_user.accounts + current_user.supervising_accounts
    render 'api/accounts/index'
  end

  def show
    @account = Account.find(params[:id])
    render 'api/accounts/show'
  end

  def create
    @account = Account.new(account_params)
    if @account.save
      render 'api/accounts/show'
    else
      render json: @account.errors.full_messages, status: 422
    end
  end

  def update
    @account = Account.find(params[:id])
    if @account.update_attributes(account_params)
      render 'api/accounts/show'
    else
      render json: @account.errors.full_messages, status: 422
    end
  end

  def destroy
    @account = Account.find(params[:id])
    if @account
      @account.destroy!
      render 'api/accounts/show'
    else
      render json: @account.errors.full_messages, status: 422
    end
  end

  private

  def account_params
    params.require(:account).permit(:name, :industry, :website, :phone_number, :employees, :ein, :is_org, :catch_phrase, :ownership, :annual_revenue_mil, :owner_id, :sic_code, :logo)
  end
end
