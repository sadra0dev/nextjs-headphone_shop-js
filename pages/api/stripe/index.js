import { Stripe } from "@project/libs"

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY)

const handler = async (req, res) => {
    if (req.method === "POST") {
        console.log("body=======", req.body)
        try {
            const params = {
                submit_type: "pay",
                mode: "payment",
                payment_method_types: ["card"],
                billing_address_collection: "auto",
                shipping_options: [
                    {
                        shipping_rate:
                            process.env.NEXT_PUBLIC_STRIPE_SHIPPING_RATE,
                    },
                ],
                line_items: req.body.map((item) => {
                    const img = item.images[0]
                    const newImage = img
                        .replace(
                            "image-",
                            "https://cdn.sanity.io/images/7azia9u7/production/"
                        )
                        .replace("-webp", ".webp")

                    return {
                        price_data: {
                            currency: "usd",
                            product_data: {
                                name: item.name,
                                images: [newImage],
                            },
                            unit_amount: item.price * 100,
                        },
                        adjustable_quantity: {
                            enabled: true,
                            minimum: 1,
                        },
                        quantity: item.count,
                    }
                }),
                success_url: `${req.headers.origin}/success`,
                cancel_url: `${req.headers.origin}/canceled`,
            }

            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create(params)

            res.status(200).json(session)
        } catch (err) {
            res.status(err.statusCode || 500).json(err.message)
        }
    } else {
        res.setHeader("Allow", "POST")
        res.status(405).end("Method Not Allowed")
    }
}

export default handler
