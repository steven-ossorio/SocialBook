# Socialbook

Please check out the site at [Socialbook](www.socialbook.tech)

Socialbook is an app inspired by Facebook. The app allows a user to login, make friends, post on their personal wall and receive newsfeed regarding their friends posting.

## Technology

### Frontend
  + CSS/SASS
  + React/redux

#### Why React?

One of the most basic obvious reason is due to React being a core fundamental language for Facebook itself which Socialbook was inspired from. Main reason is how the language helps limit the need for AJAX calls to the backend by saving information received on the frontend. Redux is a framework much similar to Flux, the difference being it allows us to maintain a single store. By slicing the state into appropriately, we can maintain the limited need of an AJAX call and allow us instead reuse where we place information. An example can be seen in the snippet down below.

    {
      session: {
        currentUser: {
          1: {
            id: 1,
            firstName: "Mike"
          }
        }
      }
      entities: {
        users: {
         1: {
            id: 1,
            firstName: 'Mike',
            lastName: 'Milone',
            image: 'fssdf234s.jpeg',
            birthday: '1989-10-17',
            sex: 'Male',
            email: 'tailor345@hotmail.com',
            password_digest: '3343wsdGSsr53F',
            session_token: '23Gdsds56577sdsGGEES36575dehdF',
            friends: [2, 4, 8, 232, 643],
            posts: [1, 3, 6, 34, 644, 765],
            friendPosts: [42, 65, 102, 645],
            friendRequests: [3,5,9]
          }
        }

      comments: {
        1: {
          id: 1,
          postId: 45,
          ownerId: 1,
          commentId,
          text: 'thats an amazing picture you took',
          comments: [8,11,14]
        }
      }

        posts: {
          1: {
            id: 1,
            text: 'Going to Japan',
            image: 'link',
            ownerId: 245,
            comments: [1,3,5,7,9]
          }
        }
    }


### Socialbook Login

![Socialbook Login](docs/loginGif.gif)

In order to maintain and catch the errors coming in, we also created an error slice of state. The role of this component  is to make sure the appropriate information is going to the right slice of state. We then use that information that has been saved on the wrong end to appear in the appropriate places. 
