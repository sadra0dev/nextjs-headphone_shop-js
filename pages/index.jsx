import {
    Layout,
    TopBanner,
    BottomBanner,
    CategorySeller,
} from "@project/components"
import { api } from "@project/configs"

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
    const bestSeller = (await api.get("/products/best-seller")).data
    const headerBanner = (await api.get("/banner/header")).data
    return {
        props: { bestSeller, headerBanner },
    }
}
