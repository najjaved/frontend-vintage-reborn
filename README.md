# Vintage Reborn

## Description

Vintage Reborn is a first version of full-stack web application developed with the MERN stack, inspired from 'eBay Kleinanzeigen' in Germany. It is a web-store with key features such as user authentication, adding or browsing existing product listings, shopping, etc. Technologies used: JavaScript (ES6), Node.js , HTML & CSS , React , Mantine UI, Express.js, MongoDB.

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
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, MongoDB Atlas

## User Stories

-  **404:** As an user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup:** As a user, I can sign up in the platform so that I can start selling or purchasing products
-  **Login:** As a user I can login to the platform so that I can browse through products listings, add a products(s) to or make a purchase
-  **Logout:** As a user I can logout from the platform so no one else can use it
-  **Add Products** As a user I can add a product for selling
-  **Search Restaurants** As a user I can search for a product in a listing 
-  **Add to favorites** As a user I want to mark a product as favorite so that I can save it for later


## Backlog

- Adding product(s) to wishlist functionality 
- Allow third Party sign-in using Google, Github
- Add Captcha for security
- Add payment option (stripe integration)
- Drag & Drop feature for product images
- integrate chatbot for customer support
- styling improve
- refactoring
  
# Client

## Routes

- / - Homepage
- /auth/signup - Signup form
- /auth/login - Login form
- /products - products list
- /products/add - add a new product
- /products/:productId - product details
- /profile/profileId - user profile details, order history, favourites list
- 404

## Pages

- Home Page (public)
- Products List Page (public)
- Product Details Page (public)
- Sign in Page (member only)
- Log in Page (member only)
- Product Add (member only)
- Product Edit (member with specific user ID only)
- Product Delete (member with specific user ID only)
- My Profile Page (member only)
- 404 Page (public)

## Components

- Product Card component
- Search bar component



# Server

## Models

Users model

```
username - String // required & unique
passwordHash - String // required
email - String // required
address- String // required
phone- Number 
role- String(enum)
```

Products model

```
name - String // required
category - String // required
description - String
price - Number// required
discount - Number
stock - Number// required
images - String// required
createdBy - String// required
```

Orders model

```
userId - ObjectId // required
firstName - String // required
lastName - String // required
streetHouseNumber - String // required
city - String // required
zipCode - Number// required
orderItems - array// required
status - String // required
```

Products model

```
userId - ObjectId // required
Items - array// required
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
- DELETE /profile/profileId/favorite/:productId
  - body: (empty)
- GET /product
- POST /product
  - body:
    - name
    - phone
    - address
- GET /product/:productId

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