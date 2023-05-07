import { client } from "@project/configs"
import { groq } from "@project/libs"

export default async function handler(req, res) {
    const products = await client.fetch(groq`*[_type == "product"]{
            "images":image[].asset->url,
            "slug":slug.current,
            name,
            price,
            details
            }`)
    res.status(200).json(products)
}
