import {
    BtnProductCount,
    CategorySeller,
    AiOutlineStar,
    AiFillStar,
    Layout,
    Image,
} from "@project/components"
import {
    useRouter,
    useEffect,
    useState,
    useCallback,
    groq,
} from "@project/libs"
import { useShopStore } from "@project/stores"
import {
    client,
    apiProductSlugs,
    apiProduct,
    apiSuggestSeller,
} from "@project/configs"

export default function ProductPage({ suggestSeller, product }) {
    const {
        query: { slug },
    } = useRouter()
    const {
        carts,
        newCarts,
        updateCart,
        getCartCount,
        actionCheckout,
        getAllPrice,
        currency,
    } = useShopStore((state) => ({
        carts: state.carts,
        currency: state.currency,
        newCarts: state.newCarts,
        updateCart: state.updateCart,
        getAllPrice: state.getAllPrice,
        getCartCount: state.getCartCount,
        actionCheckout: state.actionCheckout,
    }))
    const [qtyActive, setQtyActive] = useState(false)
    const [largeImage, setLargeImage] = useState(product.images[0])
    const index = carts.findIndex((cart) => cart["slug"] === slug)
    const handleAddToCart = useCallback(() => {
        index === -1 ? newCarts({ ...product }) : updateCart(product, index)
        getCartCount()
    }, [slug, carts])

    useEffect(() => {
        setQtyActive(() => (index === -1 ? false : true))
    }, [slug, index])

    return (
        <Layout>
            <section className="flex flex-col gap-10 px-2.5 py-16 md:flex-row md:px-10">
                <div className="flex flex-col gap-4">
                    <Image
                        src={largeImage}
                        alt=""
                        width={400}
                        height={400}
                        className="cursor-pointer rounded-2xl bg-gray-2 duration-300 hover:bg-red-1"
                        priority
                    />
                    <div className="flex gap-2.5">
                        {product.images.map((image, i) => (
                            <Image
                                key={i}
                                src={image}
                                alt=""
                                priority
                                width={50}
                                height={50}
                                className={`cursor-pointer rounded-lg ${
                                    largeImage === image
                                        ? "bg-red-1"
                                        : "bg-gray-2"
                                } duration-300 hover:bg-red-1`}
                                onMouseOver={() => setLargeImage(image)}
                                onLoad={() => {
                                    if (i === 0) {
                                        setLargeImage(image)
                                    }
                                }}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col text-dark-2">
                    <h1 className="text-3xl font-bold">{product.name}</h1>
                    <div className="mt-2 flex items-center gap-2.5">
                        <div className="flex text-red-1">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                        (20)
                    </div>
                    <div className="mt-4">
                        <h4 className="font-bold">Details</h4>
                        <p className="max-w-lg">{product.details}</p>
                    </div>
                    <div className="mt-7 text-2xl font-bold text-red-1">
                        {currency}
                        {product.price}
                    </div>
                    <div className="mt-7 flex gap-3">
                        <h3 className="text-lg font-bold">Quantity:</h3>
                        <div
                            className={`${
                                qtyActive
                                    ? ""
                                    : "pointer-events-none opacity-50"
                            }`}
                        >
                            <BtnProductCount slug={slug} />
                        </div>
                    </div>
                    <div className="mt-10 flex gap-8">
                        <button
                            className="flex w-[200px] justify-center border border-red-1 bg-transparent py-2.5 text-lg font-medium text-red-1 duration-300 hover:scale-105"
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </button>
                        <button
                            className="flex w-[200px] justify-center border border-red-1 bg-red-1 py-2.5 text-lg font-medium text-white duration-300 hover:scale-105"
                            onClick={() => {
                                handleAddToCart()
                                actionCheckout()
                                getAllPrice()
                            }}
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </section>
            <CategorySeller title="You may also like" apiData={suggestSeller} />
        </Layout>
    )
}

export const getStaticPaths = async () => {
    const slugs = await client.fetch(apiProductSlugs())
    const paths = slugs.map((item) => ({ params: { slug: item.slug } }))
    return {
        paths,
        fallback: "blocking",
    }
}
export const getStaticProps = async ({ params: { slug } }) => {
    const product = await client.fetch(apiProduct(slug))
    const suggestSeller = await client.fetch(apiSuggestSeller())

    return {
        props: { suggestSeller, product },
    }
}
