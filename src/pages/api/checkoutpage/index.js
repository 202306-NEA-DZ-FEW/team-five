const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { items } = req.body;

            const session = await stripe.checkout.sessions.create({
                payment_method_types: ["card"],
                line_items: items.map((item) => ({
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: item.UserName,
                            images: [item.image],
                        },
                        unit_amount: item.price * 100,
                    },
                    quantity: item.quantity,
                })),
                mode: "payment",
                success_url: "http://localhost:3000/success",
                cancel_url: "http://localhost:3000/checkout",
            });

            res.status(200).json({ id: session.id });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: "An error occurred while creating the checkout session.",
            });
        }
    } else {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
    }
}
