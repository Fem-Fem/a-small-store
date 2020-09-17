import fetch from "node-fetch";
import Client from "shopify-buy";

// global.fetch = fetch;

const client = Client.buildClient({
  storefrontAccessToken: "26853603f3b67fead6e3bcf3ee602758",
  domain: "a-very-small-store.myshopify.com",
});

export default client;
