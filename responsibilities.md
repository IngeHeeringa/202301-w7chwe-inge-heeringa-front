# Data

## Data layer

- User:
  - username: string
  - password: string
  - email: string
  - avatar: string
  - isLogged: boolean
  - friends: object[]
  - enemies: object[]

## Data modifications

- Load users
- Create a user
- Edit a user
- Delete a user
- Add user as a friend
- Add user as an enemy
- Remove user from friends
- Remove user from enemies

# Components

## App

- Show the entire application

## Layout

- Show Header component
- Show WelcomePage component when isLogged status is false
- Show HomePage component when isLogged status is true

## Header

- Show site logo
- Show MainNavigation component

## MainNavigation

- Show 'Login' button and 'Register' button when isLogged status is false
- Show 'Logout' button and 'Edit profile' button when isLogged status is true

## WelcomePage

- Show title 'Welcome to Frenemies' in a heading
- Show call to action 'Register'
- Show call to action 'Login'

## HomePage

- Show title 'Welcome to Frenemies' in a heading
- Show Filter component
- Show UserList component

## ProfilePage

Read mode:

- Show user's details
  - Username
  - Avatar
  - Email address
- Show a button to update the user details

Edit mode:

- Show an input field to update username
- Show an input field to update password
- Show an input field to update email address
- Show a file upload field to update avatar
- Show a button to confirm changes

## UserList

- Show a User component for every user in the list

## User

- Show the user's username
- Show the user's avatar

- Show relationship status (friend, enemy, stranger)

- Show a button to add user as a friend
- Show a button to add user as an enemy

## RegisterForm

- Show a text input field with label 'Username'
- Show a password input field with label 'Password'
- Show an email input field with label 'Email'
- Show a file upload input field with label 'Avatar'
- Show a submit button named 'Sign up'

## LoginForm

- Show the title 'Log in to Frenemies' in a heading
- Show a text input field with label 'Username'
- Show a password input field with label 'Password'

## Filter

- Show a button to filter by friends
- Show a button to filter by enemies
- Show a button to view all users
