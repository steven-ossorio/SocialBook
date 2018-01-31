# Socialbook

Please check out the site at [Socialbook](http://www.socialbook.tech)

Socialbook is a Facebook clone that seeks to replicate some commonly used features and design decisions as closely as possible. Socialbook enables users to interact with others in their social network by adding and removing friends, posting, writing on their friends walls, commenting on their posts and friends posts, and keeping track of other interactions via their newsfeed.

## Technology

### Frontend
  + React
  + Redux
  + AJAX
  + CSS
  + Sass/SCSS
  + Heroku (web hosting)
  + Node/NPM

### Backend
  + Ruby on Rails
  + Amazon Web Services (S3)
  + PostgreSQL
  + ActiveRecord

## Features
A gif will be present below each description showing each feature in action.

1. Custom Authentication
2. Creating/Deleting a Post
3. Uploading Image
4. Adding/Deleting a Friend
5. Newsfeed

### Custom Authentication

Most users when using a social media platform expect the company to maintain a high level of optional privacy and security. In order to make sure the security portion meets customer standards, I used BCrypt gem. The gem makes sure what gets saved is a hash version of the password instead of the password itself.

Error handling was implemented in order to convey to the user what he/she is missing. The process happens once a person clicks on Login/Create Account button. As errors start to trigger due to failed validations, we pass those errors in the error slice of state. Depending on the type of error, we can allocate them in the right location.

<img src="docs/auth.gif" width="600">


### Creating/Deleting Posts

A user is able to create a post on his/her own wall and their friends wall. The delete function is only available to posts created by the signed in user. The post is added/removed once an action fires. The action reaches the reducer which updates the store and causes the components to re-render.

<img src="docs/posting.gif" width="600">

### Uploading image

A user is able to update their profile image. The process is similar to Facebook where a user selects an image and it produces a preview before the user saves their image. If he/she were to cancel the image, it would disappear from the local state and they'll need to pick an image again.

<img src="docs/photo.gif" width="600">


### Adding/Deleting Friends

The interaction between two users starts from the backend. Upon requesting to add a user, a friendship is initialized through the Friends model. The user who initiates the request is considered a friender while the requested is the friendee. By default once the instance has been initialized it'll have a default "Pending" until a friendee accepts the requested friendship.

```Ruby
create_table "friends", force: :cascade do |t|
  t.integer "friender_id", null: false
  t.string "status", default: "Pending", null: false
  t.datetime "created_at", null: false
  t.datetime "updated_at", null: false
  t.integer "friendee_id"
  t.index ["friendee_id"], name: "index_friends_on_friendee_id"
  t.index ["friender_id"], name: "index_friends_on_friender_id"
end
```
There were multiple ways a developer could have created a "friend" connection. An example would have been to create two models, a pending and friendship. Such role would have separated the task to it's respective model. I believe my approach kept things simpler since any negative actions such as "cancel of request" or "deleting a friend" would result in just removing that single initialized instance instead of possible two.

<img src="docs/friendship.gif" width="600">

### Newsfeed
The Newsfeed is one of Facebook's key feature. A NewsFeed is where a logged in user gets to see what their friends have posted and is able to make a post (which appears on their profile wall as well).

``` Ruby
def newsfeed
  @friends ||= self.in_friends.where("friends.status = 'Accepted'").includes(:posts) + self.out_friends.where("friends.status = 'Accepted'").includes(:posts)
  @something = self.profile_posts

  @posts = []

  @friends.each { |friend| @posts += friend.posts }
  @newsfeed = @posts + @something

  @newsfeed.sort! { |a, b|  b.created_at <=> a.created_at }
end
```

Since the interaction between a "friend" can either be the initiator (in_friends/friender shown on top snippet) or the receiver (out_friends/friendee shown on top snippet), we needed to grab all the friends the current user is associated with while he/she is either a (friender/friendee) and with a "Accepted" status which means they are friends.

<img src="docs/newsfeed.gif" width="600">


## Design Decisions
#### Why React?

React was created by the Facebook 2013, a library that has become popular in the last year. Question: why React was implemented over it's well known competitor Angular? Besides the most obvious point that Facebook uses it, React has a lot of good reasons why one may pick it over its competitors. First is its size. Being a small library and not a framework like Angular, it makes it faster for a user visiting a website to download the required files quicker. Another advantage is how quick React runs due to its use of a virtual DOM that updates depending on changes occurring in comparison to using views (Angular).

## Features in Development
- Fix drop down regarding pending Users
- Friends add state not updating and delete button
- Implement Comment to Posts
- Editing Posts and Comments
- Improved Newsfeed algorithm
- Search for Users
- Suggested Friends
