module nft_marketplace::marketplace {
    use std::signer;
    use aptos_framework::coin;
    use aptos_framework::aptos_coin::AptosCoin;
    use aptos_token::token;

    struct Listing has key {
        price: u64,
        token_id: token::TokenId,
    }

    public fun list_token(account: &signer, token_id: token::TokenId, price: u64) {
        let listing = Listing {
            price,
            token_id,
        };
        move_to(account, listing);
    }

    public fun buy_token(buyer: &signer, seller: address, token_id: token::TokenId) acquires Listing {
        let listing = move_from<Listing>(seller);
        assert!(listing.token_id == token_id, 1);
        
        let price = listing.price;
        coin::transfer<AptosCoin>(buyer, seller, price);
        
        token::transfer(seller, signer::address_of(buyer), token_id);
    }
}