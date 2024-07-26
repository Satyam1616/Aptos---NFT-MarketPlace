const express = require('express');
const { AptosClient, AptosAccount, CoinClient, TokenClient } = require('aptos');
require('dotenv').config();

const app = express();
app.use(express.json());

const client = new AptosClient('https://fullnode.devnet.aptoslabs.com/v1');
const coinClient = new CoinClient(client);
const tokenClient = new TokenClient(client);

app.post('/list', async (req, res) => {
    const { address, tokenId, price } = req.body;
    // Implement listing logic here
    res.json({ success: true });
});

app.post('/buy', async (req, res) => {
    const { buyerAddress, sellerAddress, tokenId } = req.body;
    // Implement buying logic here
    res.json({ success: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));