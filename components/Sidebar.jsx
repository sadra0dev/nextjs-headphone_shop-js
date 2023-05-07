import { useEffect, useState } from "@project/libs"
import { useShopStore } from "@project/stores"
import { getStripe } from "@project/configs"
import {
    ProductItemCheckout,
    AiOutlineShopping,
    AiOutlineLeft,
    toast,
    Link,
} from "@project/components"

export const Sidebar = () => {
    const [count, setCount] = useState(0)
    const [activeCart, setActiveCart] = useState(false)
    const {
        actionCheckout,
        activeCheckout,
        carts,
        cartCount,
        allPrice,
        getAllPrice,
    } = useShopStore((state) => ({
        activeCheckout: state.activeCheckout,
        actionCheckout: state.actionCheckout,
        carts: state.carts,
        cartCount: state.cartCount,
        allPrice: state.allPrice,
        getAllPrice: state.getAllPrice,
    }))
    useEffect(() => {
        if (carts.length > 0) {
            setActiveCart(true)
        } else {
            setActiveCart(false)
        }
    }, [carts])
    useEffect(() => {
        setCount(cartCount)
        getAllPrice()
    }, [cartCount])
    const handleCheckout = async () => {
        const stripe = await getStripe()

        const response = await fetch("/api/stripe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(carts),
        })

        if (response.statusCode === 500) return

        const data = await response.json()

        toast.loading("Redirecting...")

        stripe.redirectToCheckout({ sessionId: data.id })
    }
    return (
        <sidebar
            className={`fixed bottom-0 left-0 right-0 top-0 z-50 flex bg-black/50 ${
                activeCheckout ? "" : "hidden"
            }`}
        >
            <div className="ms-auto flex h-full w-[600px] flex-col bg-white">
                <div className="py-4">
                    <button
                        onClick={actionCheckout}
                        className="flex items-center gap-2.5 px-4 text-lg font-medium duration-200 hover:scale-105"
                    >
                        <AiOutlineLeft />
                        <span>Your Cart</span>
                        <span className="text-red-1">({count} items)</span>
                    </button>
                </div>
                <div className="flex h-full flex-col gap-y-3 overflow-y-auto  px-5 py-10">
                    {activeCart ? (
                        carts?.map((cart, i) => (
                            <ProductItemCheckout
                                key={i}
                                product={cart}
                                index={i}
                            />
                        ))
                    ) : (
                        <div className="flex h-full flex-col items-center justify-center">
                            <AiOutlineShopping size={150} />
                            <h3 className="text-xl font-bold text-dark-2">
                                Your shopping bag is empty
                            </h3>
                        </div>
                    )}
                </div>

                <div className="mt-auto px-3 py-5 shadow-inner">
                    <div className="mx-auto w-full max-w-sm">
                        {activeCart ? (
                            <>
                                <p className="mb-10 flex justify-between text-xl font-black">
                                    <span>Subtotal</span>
                                    <span>${allPrice}</span>
                                </p>
                                <button
                                    className="w-full rounded-2xl bg-red-1 py-2 text-lg font-bold uppercase text-white"
                                    onClick={handleCheckout}
                                >
                                    pay with stripe
                                </button>
                            </>
                        ) : (
                            <Link
                                href="/"
                                className="my-5 block w-full rounded-2xl bg-red-1 py-2 text-center text-lg font-bold uppercase text-white"
                                onClick={actionCheckout}
                            >
                                Continue Shopping
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </sidebar>
    )
}
