# Popo CRM ![alt text](https://popo-crm.herokuapp.com/assets/icon-handshake-dd48332ae63bd59e2e18c17ba13cbe2f123a5640b256d3ab271929db72e1485c.png "Popo CRM")

### What is Popo CRM?

Popo CRM is a clone of Zoho CRM, which is a Customer Relationship Management system. Popo CRM uses data about customers' history with a company to improve business relationships with customers, specifically focusing on customer retention and ultimately driving sales growth.

### Is Popo CRM live?

Yes! 

[Click here for Live Demo](https://popo-crm.herokuapp.com/)

### What tech stack was used?

Popo CRM uses Ruby on Rails/PostgreSQL on the backend, and React/Redux on the front end. 

### What features are there?

* Secure user password using BCrypt
* Users can upload profile pic during signup
* Users can **CRUD** (create, read, update, and delete) accounts that they own in their pipeline
* Users can upload and update logos of accounts
* Users can **CRUD** contacts who work for accounts that are in their pipeline
* Users can upload and update photos of contacts
* Supervisors can view and change all accounts and contacts of his/her subordinates, while subordinates can only **CRUD** his/her own pipeline

### Versions
* Ruby 2.5.1
* Rails 5.2.3
* Node 12.4.0
* npm 6.9.2

### User Management

One feature that sets Popo CRM apart from its competitors is user management. If a user is signed in as a supervisor, he/she is able to view accounts and contacts of all subordinates, as well as his/her own pipeline. However, when a subordinate signs in, he/she does not have access to his/her peers' pipeline.

![alt text](https://raw.githubusercontent.com/BenjaminT88/Popo/master/app/assets/images/account_index_screenshot.png "Accounts Index")

As you can see from the above image, user _Filet Minyon_ is currently signed in. Being a supervisor of several other employees, _Filet Minyon_ is able to see accounts of _Salvatore Schiller_ and _Alvin Gottlieb_, who work for _Filet Minyon_.

This feature is enabled on model level as well as controller level. Each user has a foreign key of _supervisor_id_ which points back to the same table. If the user has a supervisor, the foreign key points to the id of the supervisor user. Otherwise, _supervisor_id_ points to the user himself/herself.

#### Model level associations:

```ruby
  belongs_to :supervisor, optional: true,
    foreign_key: :supervisor_id,
    class_name: :User

  has_many :subordinates,
    foreign_key: :supervisor_id,
    class_name: :User

  has_many :accounts,
    foreign_key: :owner_id,
    class_name: :Account

  has_many :supervising_accounts,
    through: :subordinates,
    source: :accounts
```

#### User controller action:

```ruby
  def index
    @accounts = current_user.accounts + current_user.supervising_accounts
    render "api/accounts/index"
  end
```

### Project Design

Given only a 10 day period for the project, Popo CRM was designed with simplicity and functionality in mind. Within the limited time, only a handful features were implemented, although more features are planned to be carried out in the future.

### Future Features

* Leads, Deals, and Docs
* To-Dos
* Search
* User Profile Pages
