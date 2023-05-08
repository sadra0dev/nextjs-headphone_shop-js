import { AiOutlineMinus, AiOutlinePlus, toast } from "@project/components"
import { memo, useState, useEffect } from "@project/libs"
import { useShopStore } from "@project/stores"

export const BtnProductCount = memo(({ slug }) => {
    const { carts, getCartCount, cartCount } = useShopStore((state) => ({
        carts: state.carts,
        getCartCount: state.getCartCount,
        cartCount: state.cartCount,
    }))
    const [count, setCount] = useState((v) => (v ? v : 1))
    const index = carts.findIndex((cart) => cart["slug"] === slug)

    const minusHandle = () => {
        if (carts[index].count > 1) {
            carts[index]["count"] = carts[index].count - 1
            setCount(carts[index].count)
            getCartCount()
            toast.error(`Products in your shopping cart ${count - 1}`)
        }
    }
    const plusHandle = () => {
        carts[index]["count"] = carts[index].count + 1
        setCount(carts[index].count)
        getCartCount()
        toast.success(`Products in your shopping cart ${count + 1}`)
    }

    useEffect(() => {
        setCount(() =>
            carts[index]?.count !== undefined ? carts[index]?.count : 1
        )
    }, [slug, cartCount])

    return (
        <div className={`inline-flex h-9 w-28 items-stretch divide-x border`}>
            <button
                className="flex w-1/3 items-center justify-center text-red-1"
                onClick={minusHandle}
            >
                <AiOutlineMinus />
            </button>
            <span className="flex w-1/3 items-center justify-center">
                {count}
            </span>
            <button
                className="flex w-1/3 items-center justify-center text-[#31a831]"
                onClick={plusHandle}
            >
                <AiOutlinePlus />
            </button>
        </div>
    )
})
