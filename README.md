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
A gif will be present below each description showing each feature in action.

1. Custom Authentication
2. Creating/Deleting a Post
3. Adding/Deleting a Friend
4. Newsfeed

### Custom Authentication
<!-- Explanation on top -->
<!-- ![Socialbook Login](docs/auth.gif) -->
Error handle is an important factor when implementing a login/signup feature. Upon submission, each form has validations that are checked before proceeding. Failed validation would be send to the front end errors reducer and placed in the errors slice of state with appropriate key (post errors to post key for example). Once we have errors within our slice of state, we show them in the appropriate location depending on the type of error occuring.  

<img src="docs/auth.gif" width="600">


### Creating/Deleting Posts
<!-- ![Socialbook Login](docs/posting.gif) -->
When a person fires the createPost action, the state gets updated due to the previous state and next state both presenting a different length of posts.
<img src="docs/posting.gif" width="600">

### Uploading image
A user is able to update their profile image. The process is similar to Facebook where a user selects an image and it produces a preview before the user saves their image. If he/she were to cancel the image would disappear from the state and they'll need to pick an image again.

<img src="docs/photo.gif" width="600">


### Adding/Deleting Friends


<img src="docs/friendship.gif" width="600">

### Newsfeed

<img src="docs/newsfeed.gif" width="600">


## Design Decisions
#### Why React?

One of the most basic obvious reason is due to React being a core fundamental language for Facebook itself which Socialbook was inspired from. Main reason is how the language helps limit the need for AJAX calls to the backend by saving information received on the frontend. Redux is a framework much similar to Flux, the difference being it allows us to maintain a single store. By slicing the state into appropriately, we can maintain the limited need of an AJAX call and allow us instead reuse where we place information. An example can be seen in the snippet down below.

## Features in Development
- Fix drop down regarding pending Users
- Friends add state not updating and delete button
- Implement Comment to Posts
- Editing Posts and Comments
- Improved Newsfeed algorithm
- Search for Users
- Suggested Friends
