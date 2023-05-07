import { BtnProductCount, TiDeleteOutline, Image } from "@project/components"
import { useShopStore } from "@project/stores"
import { memo } from "@project/libs"

export const ProductItemCheckout = memo(({ product, index }) => {
    const { deleteCart, getCartCount } = useShopStore((state) => ({
        deleteCart: state.deleteCart,
        getCartCount: state.getCartCount,
    }))
    return (
        <div className="rounded-2xl p-3 shadow-lg">
            <div className="flex items-stretch gap-4 md:gap-7">
                <Image
                    src={product?.images[0]}
                    alt=""
                    className="h-auto w-20 rounded-xl bg-gray-2 md:w-28"
                    width={100}
                    height={100}
                />
                <div className="flex flex-1 flex-col justify-between text-dark-2">
                    <p className="flex justify-between text-xs font-bold sm:text-xl">
                        <span>{product?.name}</span>
                        <span>{product?.price}</span>
                    </p>
                    <div className="flex items-end justify-between">
                        <BtnProductCount slug={product?.slug} />
                        <button
                            className="text-2xl text-red-1 hover:scale-105"
                            onClick={() => {
                                deleteCart(index)
                                getCartCount()
                            }}
                        >
                            <TiDeleteOutline />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
})
