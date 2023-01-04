Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  root "chatroom#index"
  get "login", to: "sessions#new"
  post "login", to: "sessions#create"
  delete "logout", to: "sessions#destroy"
  post "message", to: "messages#create"

  get "signup", to: "users#new"
  post "signup", to: "users#create"
  resources :users

  mount ActionCable.server, at: "/cable"
end
