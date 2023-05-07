import { client } from "@project/configs"
import { groq } from "@project/libs"

export default async function handler(req, res) {
    const headerBanner = await client.fetch(groq`*[_type == "hero-banner"]{
        "image":image.asset->url,
          heroText,
          "buttonText":button.text,
          "buttonUrl":button.url,
          "descriptionTitle":description.title,
          "descriptionContent":description.content,
          timeSale,
          smallText
      }[0]
      `)
    res.status(200).json(headerBanner)
}
