import { groq } from "@project/libs"

export const apiTopBanner = () => groq`
*[_type == "hero-banner"]{
    "image":image.asset->url,
    heroText,
    "buttonText":button.text,
    "buttonUrl":button.url,
    "descriptionTitle":description.title,
    "descriptionContent":description.content,
    timeSale,smallText
}[0]`

export const apiBestSeller = () => groq`
*[_type == "product"]{
    "images":image[].asset->url,
    "slug":slug.current,
    name,
    price,
    details
}`

export const apiProductSlugs = () => groq`
*[_type == "product"]{
    "slug":slug.current,
}`

export const apiProduct = (slug) => groq`
*[_type == "product" && slug.current == '${slug}']{
    "images":image[].asset->url,
    "slug":slug.current,
    name,
    price,
    details,
    count
}[0]`

export const apiSuggestSeller = () => groq`
*[_type == "product"]{
    "images":image[].asset->url,
    "slug":slug.current,
    name,
    price,
    details
}`
