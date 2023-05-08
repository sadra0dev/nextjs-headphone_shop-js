import {
    Layout,
    TopBanner,
    BottomBanner,
    CategorySeller,
} from "@project/components"
import { client, apiBestSeller, apiTopBanner } from "@project/configs"

export default function HomePage({ bestSeller, headerBanner }) {
    return (
        <Layout>
            <TopBanner apiData={headerBanner} />
            <CategorySeller
                title="Best Seller Products"
                description="speaker There are many variations passages"
                apiData={bestSeller}
            />
            <BottomBanner />
        </Layout>
    )
}

export const getStaticProps = async () => {
    const bestSeller = await client.fetch(apiBestSeller())
    const headerBanner = await client.fetch(apiTopBanner())
    return {
        props: { bestSeller, headerBanner },
    }
}
