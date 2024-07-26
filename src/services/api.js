import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const listNFT = (address, tokenId, price) => 
  axios.post(`${API_URL}/list`, { address, tokenId, price });

export const buyNFT = (buyerAddress, sellerAddress, tokenId) => 
  axios.post(`${API_URL}/buy`, { buyerAddress, sellerAddress, tokenId });