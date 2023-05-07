import { sanityClient } from "@project/libs"
import imageUrlBuilder from "@sanity/image-url"

export const client = sanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: false,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
