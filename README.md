# Vintage Reborn

## Description

Vintage Reborn is a web application where users can buy or sell used items, similar to eBay Kleinanzeigen in Germany.

## Overview

Vintage Reborn allows users to browse, buy, and sell used items. Users can easily access the web app using the URL and browse items without having an account. However, to buy or sell items, users need to sign up and log in.

## Features

- User authentication (sign up, log in, log out)
- Add, edit, and delete products
- Search for products
- Cart management
- View and edit user profile
- Admin management for products and users

## Technologies Used

- **Frontend:** React, Mantine UI
- **Backend:** Node.js, Express
- **Database:** MongoDB, MongoDB Atlas

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup:** As an anon I can sign up in the platform so that I can start saving favorite restaurants
-  **Login:** As a user I can login to the platform so that I can see my favorite restaurants
-  **Logout:** As a user I can logout from the platform so no one else can use it
-  **Add Restaurants** As a user I can add a restaurant so that I can share it with the community
-  **List Restaurants** As a user I want to see the restaurants so that I can choose one to eat
-  **Search Restaurants** As a user I want to search restaurants by name so that I know if it´s already in the platform
-  **Add to favorites** As a user I want to add a restaurant to favorite so that I can save the restaurants that I liked the most
-  **See my favorites** As a user I want to see my favorite restaurantes so that I can see the ones I liked the most

## Backlog

User profile:
- see other users profile sand their favorites

Geo Location:
- see restaurants in a map
  
# Client

## Routes

- / - Homepage
- /auth/signup - Signup form
- /auth/login - Login form
- /restaurants - restaurant list
- /restaurants/create - create a restaurant
- /restaurants/:id - restaurant detail
- /profile/me - my details and favorite restaurants
- 404

## Pages

- Home Page (public)
- Sign in Page (anon only)
- Log in Page (anon only)
- Restaurants List Page (public only)
- Restaurant Create (user only)
- Restaurant Detail Page (public only)
- My Profile Page (user only)
- 404 Page (public)

## Components

- Restaurant Card component
  - Input: restaurant: any
  - Output: favorite(restaurantId: string, on: boolean)
- Search component
  - Output: change(terms: string)

## IO


## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
- Restaurant Service
  - restaurant.list()
  - restaurant.create(data)
  - restaurant.detail(id)
  - restaurant.addFavorite(id)
  - restaurant.removeFavorite(id)   

# Server

## Models

User model

```
username - String // required
email - String // required & unique
password - String // required
favorites - [ObjectID<Restaurant>]
```

Restaurant model

```
owner - ObjectID<User> // required
name - String // required
phone - String
address - String
```

## API Endpoints/Backend Routes

- GET /auth/me
- POST /auth/signup
  - body:
    - username
    - email
    - password
- POST /auth/login
  - body:
    - username
    - password
- POST /auth/logout
  - body: (empty)
- POST /user/me/favorite
  - body:
    - restaurantId
- DELETE /user/me/favorite/:restaurantId
  - body: (empty)
- GET /restaurant
- POST /restaurant
  - body:
    - name
    - phone
    - address
- GET /restaurant/:id

## Contributions

Contributions are welcome! Please fork this repository and open a pull request to contribute.

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
  - [Environment Variables](#environment-variables)

### Prerequisites

- Node.js

### Installation

1. Clone the frontend repository:
   \`\`\`bash
   git clone https://github.com/najjaved/frontend-vintage-reborn.git
   \`\`\`
2. Clone the backend repository:
   \`\`\`bash
   git clone https://github.com/najjaved/backend-vintage-reborn.git
   \`\`\`
3. Navigate to each project directory and install dependencies using \`npm install\`:
   \`\`\`bash
   cd frontend-vintage-reborn
   npm install
   cd backend-vintage-reborn
   npm install
   \`\`\`

### Running the Application

1. Start the backend server:
   \`\`\`bash
   npm run dev
   \`\`\`
2. Start the frontend application:
   \`\`\`bash
   npm run dev
   \`\`\`

## Environment Variables

Create a \`.env\` file in the root of both frontend and backend directories and add the following:

### Frontend

\`\`\`
VITE_API_URL=http://localhost:5006
\`\`\`

### Backend

\`\`\`
PORT=5006
ORIGIN=http://localhost:5173
MONGO_URI='you B~E Atlas link `here'
\`\`\`


## Links

### Trello/Kanban

[Trello board](https://trello.com/b/gMSFpBQn/fintech-reborn)

### Git

[Client repository Link](https://github.com/najjaved/frontend-vintage-reborn)

[Server repository Link](https://github.com/najjaved/backend-vintage-reborn)

### Deployed project 
[Deploy Link](https://vintagereborn.netlify.app/)

### Slides 
[Slides Link](https://docs.google.com/presentation/d/1QBcI9fcvncTGKwVIlt5JIw8SraWJVCgZ/edit#slide=id.p2)