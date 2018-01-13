# Socialbook

Please check out the site at [Socialbook](http://www.socialbook.tech)

Socialbook is a Facebook clone that seeks to replicate some commonly used features and design decisions as closely as possible. Socialbook enables users to interact with others in their social network by adding and removing friends, posting statuses, writing on their friends walls, commenting on these posts, and keeping track of other interactions via their newsfeed. 

## Technology

### Frontend
  + CSS
  + Sass/SCSS
  + React
  + Redux
  + Heroku (web hosting)
  + AJAX
  + Node/NPM
  
### Backend
  + Amazon Web Services (S3)
  + PostgreSQL
  + Ruby on Rails
  + ActiveRecord
  
## Features

## Design Decisions

## Features in Development

#### Why React?

One of the most basic obvious reason is due to React being a core fundamental language for Facebook itself which Socialbook was inspired from. Main reason is how the language helps limit the need for AJAX calls to the backend by saving information received on the frontend. Redux is a framework much similar to Flux, the difference being it allows us to maintain a single store. By slicing the state into appropriately, we can maintain the limited need of an AJAX call and allow us instead reuse where we place information. An example can be seen in the snippet down below.

### Socialbook Login

![Socialbook Login](docs/loginGif.gif)
