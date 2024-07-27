
# Full-Stack NFT Marketplace on Aptos

My Address: 0x16bcbd5cb23d8f5fd032d7f542581b49338e0652558dbd000699ceab302f46b4

Welcome to the Full-Stack NFT Marketplace built on the Aptos blockchain! This repository contains the source code for a complete decentralized application (dApp) that allows users to create, buy, sell, and trade NFTs.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
  - [Smart Contract Deployment](#smart-contract-deployment)
  - [Configuration](#configuration)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Introduction

The Full-Stack NFT Marketplace is a decentralized application that leverages the Aptos blockchain to provide a secure and user-friendly platform for creating, buying, selling, and trading Non-Fungible Tokens (NFTs). This marketplace includes both frontend and backend components, along with smart contracts deployed on the Aptos network.

## Features

- **Create NFTs**: Mint new NFTs with customizable metadata.
- **Buy & Sell**: List NFTs for sale and purchase them from other users.
- **Auctions**: Participate in NFT auctions with bidding functionality.
- **Wallet Integration**: Connect and interact with various cryptocurrency wallets.
- **Secure Transactions**: Utilize the Aptos blockchain for secure and transparent transactions.
- **User Profiles**: Create and manage user profiles with NFT collections.
- **Responsive Design**: Access the marketplace from any device with a responsive UI.

## Tech Stack

- **Frontend**: React, Redux, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB
- **Smart Contracts**: Move language on the Aptos blockchain
- **Wallet Integration**: Aptos wallets (Martian, Pontem, etc.)
- **Authentication**: JWT, OAuth
- **Deployment**: Docker, Kubernetes

## Architecture

The application consists of three main components:

1. **Frontend**: A React-based single-page application (SPA) that interacts with the backend and smart contracts.
2. **Backend**: An Express server that handles API requests, user authentication, and database interactions.
3. **Smart Contracts**: Move-based contracts deployed on the Aptos blockchain to handle NFT minting, buying, selling, and auctions.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/)
- [Aptos CLI](https://aptos.dev/cli)
- [MongoDB](https://www.mongodb.com/) (for local development)

### Backend Setup

1. **Clone the Repository**

   ```sh
   git clone https://github.com/yourusername/aptos-nft-marketplace.git
   cd aptos-nft-marketplace/backend
   ```

2. **Install Dependencies**

   ```sh
   npm install
   # or
   yarn install
   ```

3. **Environment Variables**

   Create a `.env` file in the `backend` directory and add the necessary environment variables:

   ```sh
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/aptos-nft-marketplace
   JWT_SECRET=your_jwt_secret
   APTOS_NODE_URL=https://fullnode.devnet.aptoslabs.com
   ```

4. **Start the Backend Server**

   ```sh
   npm start
   # or
   yarn start
   ```

### Frontend Setup

1. **Navigate to the Frontend Directory**

   ```sh
   cd ../frontend
   ```

2. **Install Dependencies**

   ```sh
   npm install
   # or
   yarn install
   ```

3. **Environment Variables**

   Create a `.env` file in the `frontend` directory and add the necessary environment variables:

   ```sh
   REACT_APP_API_URL=http://localhost:5000
   REACT_APP_APTOS_NODE_URL=https://fullnode.devnet.aptoslabs.com
   ```

4. **Start the Frontend Development Server**

   ```sh
   npm start
   # or
   yarn start
   ```

   The application will be available at `http://localhost:3000`.

### Smart Contract Deployment

1. **Navigate to the Contracts Directory**

   ```sh
   cd ../contracts
   ```

2. **Compile and Deploy the Contracts**

   ```sh
   aptos move compile
   aptos move publish --url https://fullnode.devnet.aptoslabs.com
   ```

### Configuration

Ensure that the frontend and backend are correctly configured to interact with the deployed smart contracts. Update the contract addresses and relevant settings in the environment variables.

## Usage

1. **Access the Application**

   Open your web browser and navigate to `http://localhost:3000`.

2. **Create and Manage NFTs**

   Connect your Aptos wallet, create new NFTs, and manage your NFT collections.

3. **Buy and Sell NFTs**

   Browse available NFTs, list your NFTs for sale, and participate in auctions.

## Testing

1. **Backend Tests**

   ```sh
   npm test
   # or
   yarn test
   ```

2. **Frontend Tests**

   ```sh
   npm test
   # or
   yarn test
   ```

3. **Smart Contract Tests**

   Use the Aptos CLI to run tests for your Move contracts.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

Please ensure your code adheres to our coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Aptos Labs](https://aptoslabs.com/) for their support and documentation.
- [React](https://reactjs.org/) and [Node.js](https://nodejs.org/) for providing the foundational technologies.


