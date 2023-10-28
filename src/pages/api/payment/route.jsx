import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    let data = await request.json();
    let priceId = await data.priceId;
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price: priceId,
                quantity: 1,
            },
        ],
        mode: "payment",
        success_url: "https://example.com",
        cancel_url: "https://example.com",
    });
    return NextResponse.json(session.url);
}
