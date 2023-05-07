import { memo, useState, useEffect } from "@project/libs"
import { AiOutlineShopping } from "@project/components"
import { useShopStore } from "@project/stores"

export const BtnShopping = memo(() => {
    const [count, setCount] = useState(0)
    const { actionCheckout, cartCount } = useShopStore((state) => ({
        actionCheckout: state.actionCheckout,
        cartCount: state.cartCount,
    }))

    useEffect(() => {
        setCount(cartCount)
    }, [cartCount])

    return (
        <button
            className="relative text-2xl text-dark-1 duration-200 hover:scale-105"
            onClick={actionCheckout}
        >
            <AiOutlineShopping className="pointer-events-none" />
            <div className="pointer-events-none absolute -right-2 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-1 text-sm text-white">
                {count}
            </div>
        </button>
    )
})
