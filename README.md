# Vintage Reborn

Vintage Reborn is a web application where users can buy or sell used items, similar to eBay Kleinanzeigen in Germany.

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Overview

Vintage Reborn allows users to browse, buy, and sell used items. Users can easily access the web app using the URL and browse items without having an account. However, to buy or sell items, users need to sign up and log in.

## Features

- User authentication (sign up, log in, log out)
- Add, edit, and delete products
- Search for products
- Cart management
- View and edit user profile
- Admin management for products and users

## Getting Started

### Prerequisites

- Node.js

### Installation

1. Clone the frontend repository:
   \`\`\`bash
   git clone https://github.com/najjaved/frontend-vintage-reborn
   \`\`\`
2. Clone the backend repository:
   \`\`\`bash
   git clone https://github.com/SantiMora06/FintechRebornBackEnd
   \`\`\`
3. Navigate to each project directory and install dependencies using \`npm install\`:
   \`\`\`bash
   cd frontend-vintage-reborn
   npm install
   cd ../FintechRebornBackEnd
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
MONGO_URI=mongodb+srv://SantiMora:mL8wWM1UqB2PvM3O@phoenixtech.0rm2fou.mongodb.net
\`\`\`

## Technologies Used

- **Frontend:** React, Mantine UI
- **Backend:** Node.js, Express
- **Database:** MongoDB, MongoDB Atlas

## Contributing

Contributions are welcome! Please fork this repository and open a pull request to contribute.

## License

This project is licensed under the MIT License.
