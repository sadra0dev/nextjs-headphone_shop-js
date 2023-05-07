import { Link, Image } from "@project/components"
import { useShopStore } from "@project/stores"

export function ProductItem({ apiData }) {
    const { currency } = useShopStore((state) => ({
        currency: state.currency,
    }))
    return (
        <Link
            href={`/product/${apiData.slug}`}
            className="flex flex-col duration-300 hover:scale-105"
        >
            <Image
                src={apiData.images[0]}
                alt=""
                className="rounded-2xl bg-gray-2"
                height={234}
                width={234}
            />
            <p className="font-medium text-dark-2">{apiData.name}</p>
            <span className="font-extrabold">
                {currency}
                {apiData.price}
            </span>
        </Link>
    )
}
