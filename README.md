Full Stack NFT Marketplace

### Prerequisites
- **Node.js**: v14 or higher
- **Aptos CLI**: Follow the [installation guide](https://aptos.dev/cli-tools/aptos-cli-tool/install-aptos-cli/) to set up the Aptos CLI.
- **Aptos SDK**: JavaScript/TypeScript SDK for interacting with the Aptos blockchain.

### Step 1: Initialize a new project

1. **Create a new directory for your project**:
   ```bash
   mkdir aptos-nft-marketplace
   cd aptos-nft-marketplace
   ```

2. **Initialize a Node.js project**:
   ```bash
   npm init -y
   ```

3. **Install necessary dependencies**:
   ```bash
   npm install @aptos-labs/aptos @aptos-labs/aptos-token --save
   ```

### Step 2: Write Smart Contracts

1. **Create a new directory for Move modules**:
   ```bash
   mkdir move
   cd move
   aptos move init
   ```

2. **Write the NFT Marketplace smart contract** in `move/sources/NFTMarketplace.move`:

   ```move
   module NFTMarketplace::Marketplace {
       use 0x1::Account;
       use 0x1::Event;
       use 0x1::Token;
       use 0x1::Signer;

       struct Listing has key {
           seller: address,
           price: u64,
           token_id: u64,
       }

       public fun list_for_sale(account: &signer, token_id: u64, price: u64) {
           let seller = Signer::address_of(account);
           let listing = Listing {
               seller,
               price,
               token_id,
           };
           move_to(&signer, listing);
       }

       public fun buy(seller: address, token_id: u64, buyer: &signer, payment: u64) {
           let buyer_address = Signer::address_of(buyer);

           // Logic to transfer token from seller to buyer
           Token::transfer(seller, buyer_address, token_id);
           
           // Transfer payment from buyer to seller
           Account::transfer(buyer, seller, payment);
       }
   }
   ```

3. **Build and test your Move module**:
   ```bash
   aptos move compile
   aptos move test
   ```

### Step 3: Deploy Smart Contract

1. **Deploy the smart contract to the Aptos network**:
   ```bash
   aptos move publish --package-dir move --profile default
   ```

### Step 4: Develop the Backend

1. **Create a file `index.js` for your backend logic**:

   ```javascript
   const { AptosClient, AptosAccount, FaucetClient, TokenClient } = require('@aptos-labs/aptos');

   const client = new AptosClient('https://fullnode.devnet.aptoslabs.com');
   const faucetClient = new FaucetClient('https://faucet.devnet.aptoslabs.com', client);
   const tokenClient = new TokenClient(client);

   async function listForSale(account, tokenId, price) {
       // Call the list_for_sale function on-chain
       const payload = {
           type: "entry_function_payload",
           function: "0xYourAddress::Marketplace::list_for_sale",
           arguments: [tokenId, price],
       };

       const txn = await client.generateTransaction(account.address(), payload);
       const signedTxn = await client.signTransaction(account, txn);
       const transactionRes = await client.submitTransaction(signedTxn);
       await client.waitForTransaction(transactionRes.hash);

       console.log("Listed token for sale:", tokenId);
   }

   async function buyToken(seller, tokenId, buyer, payment) {
       // Call the buy function on-chain
       const payload = {
           type: "entry_function_payload",
           function: "0xYourAddress::Marketplace::buy",
           arguments: [seller, tokenId, payment],
       };

       const txn = await client.generateTransaction(buyer.address(), payload);
       const signedTxn = await client.signTransaction(buyer, txn);
       const transactionRes = await client.submitTransaction(signedTxn);
       await client.waitForTransaction(transactionRes.hash);

       console.log("Bought token:", tokenId);
   }

   module.exports = { listForSale, buyToken };
   ```

### Step 5: Develop the Frontend

1. **Set up a frontend with React**:

   ```bash
   npx create-react-app aptos-nft-marketplace-frontend
   cd aptos-nft-marketplace-frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install @aptos-labs/aptos --save
   ```

3. **Create a simple interface** in `src/App.js`:

   ```javascript
   import React, { useState } from 'react';
   import { AptosClient } from '@aptos-labs/aptos';

   const client = new AptosClient('https://fullnode.devnet.aptoslabs.com');

   function App() {
       const [tokenId, setTokenId] = useState('');
       const [price, setPrice] = useState('');
       const [seller, setSeller] = useState('');
       const [buyer, setBuyer] = useState('');

       const handleListForSale = async () => {
           // List token for sale logic
       };

       const handleBuyToken = async () => {
           // Buy token logic
       };

       return (
           <div className="App">
               <h1>NFT Marketplace</h1>
               <input placeholder="Token ID" value={tokenId} onChange={(e) => setTokenId(e.target.value)} />
               <input placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
               <button onClick={handleListForSale}>List for Sale</button>

               <input placeholder="Seller" value={seller} onChange={(e) => setSeller(e.target.value)} />
               <input placeholder="Buyer" value={buyer} onChange={(e) => setBuyer(e.target.value)} />
               <button onClick={handleBuyToken}>Buy Token</button>
           </div>
       );
   }

   export default App;
   ```

4. **Run the frontend**:
   ```bash
   npm start
   ```

### Step 6: Testing and Deployment

1. **Test your marketplace locally or on a testnet**.
2. **Deploy the frontend to a web server**.
3. **Deploy the backend if necessary** (e.g., using services like Heroku, Vercel, or your own server).

### Step 7: README File

Here’s a basic `README.md` file to include in your project:

```markdown
# Aptos NFT Marketplace

This project is an NFT marketplace built on the Aptos blockchain. Users can list their NFTs for sale and buy NFTs listed by others.

## Features

- **List NFT for Sale**: Users can list their NFTs for sale with a specified price.
- **Buy NFT**: Users can purchase listed NFTs by paying the listed price.

## Prerequisites

- Node.js v14 or higher
- Aptos CLI
- Aptos SDK for JavaScript

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/aptos-nft-marketplace.git
   cd aptos-nft-marketplace
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the Aptos Move environment:

   ```bash
   cd move
   aptos move init
   ```

## Usage

1. Compile and test the smart contract:

   ```bash
   aptos move compile
   aptos move test
   ```

2. Deploy the smart contract:

   ```bash
   aptos move publish --package-dir move --profile default
   ```

3. Run the backend:

   ```bash
   node index.js
   ```

4. Run the frontend:

   ```bash
   cd aptos-nft-marketplace-frontend
   npm start
   ```

## License

This project is licensed under the MIT License.
```

This guide gives you a basic structure to build a simple NFT marketplace on Aptos. You can extend and customize it according to your specific needs, such as adding more features, improving the UI, or integrating with other blockchain services.
