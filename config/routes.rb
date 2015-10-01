Rails.application.routes.draw do


  mount Ckeditor::Engine => '/ckeditor'
  get 'articles/new'

  get 'articles/index'

  get 'articles/show'

  get 'articles/edit'

  devise_for :users
  resources  :articles
  resources :articles do
    resources :comments
  end
  root to: 'articles#index'


  get 'tags/:tag', to: 'articles#index', as: :tag
  get 'list', to: 'articles#index'

  resources :comments do
    member { post :vote }
  end

  resources :articles do
    member { post :vote }
  end

resources :articles do
  get :autocomplete_tag_name, :on => :collection
end


post 'articles/:id/favorite' => 'articles#favorite'
get 'articles/:id/favorite' => 'articles#favorite'

resources :users, only: [:show]



resources :articles do
     collection do
      get :invite
      post :invite
    end
 end

resources :articles do
  member do
    post :invite_accept
    delete :invite_reject
  end
end



  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end