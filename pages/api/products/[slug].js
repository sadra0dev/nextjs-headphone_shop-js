import { client } from "@project/configs"
import { groq } from "@project/libs"

export default async function handler(req, res) {
    const productName = req.query.slug
    const data =
        productName === "[slug]"
            ? await client.fetch(groq`*[_type == "product"]{
            "slug":slug.current,
        }`)
            : await client.fetch(groq`*[_type == "product" && slug.current == "${productName}"]{
            "images":image[].asset->url,
            "slug":slug.current,
            name,
            price,
            details,
            count
            }[0]`)
    res.status(200).json(data)
}
