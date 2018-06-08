Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    get '/newsfeed', to: 'users#newsfeed'

    resources :users, only: [:index, :create, :show, :update]
    resources :posts
    resources :comments
    resources :friends, only: [:create, :edit, :update, :destroy]
    resource :session, only: [:create, :destroy]
  end

end
