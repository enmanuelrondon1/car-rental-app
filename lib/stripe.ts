import Stripe from "stripe";

if (!process.env.STRIPE_API_KEY) {
  throw new Error(
    "Missing Stripe API key. Make sure to set STRIPE_API_KEY in your .env.local file"
  );
}

export const stripe = new Stripe(process.env.STRIPE_API_KEY, {
  apiVersion: "2024-06-20",
  typescript: true,
});
