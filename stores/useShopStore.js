import { zustandCreate, zustandDevtools, zustandPersist } from "@project/libs"

export const useShopStore = zustandCreate()(
    zustandDevtools(
        zustandPersist(
            (set, get) => ({
                currency: "$",
                activeCheckout: false,
                carts: [],
                cartCount: 0,
                allPrice: 0,
                actionCheckout: () => {
                    set((state) => ({ activeCheckout: !state.activeCheckout }))
                },
                getCartCount: () => {
                    var i = 0
                    const carts = get().carts
                    carts?.forEach((cart) => {
                        i = i + cart.count
                    })
                    set(() => ({ cartCount: i }))
                },
                getAllPrice: () => {
                    var i = 0
                    const carts = get().carts
                    carts?.forEach((cart) => {
                        i = i + cart.price * cart.count
                    })
                    set(() => ({ allPrice: i }))
                },
                newCarts: (v) => {
                    set((state) => ({ carts: [...state.carts, v] }))
                },
                updateCart: (product, index) => {
                    var carts = get().carts
                    carts[index].details = product.details
                    carts[index].images = product.images
                    carts[index].price = product.price
                    carts[index].name = product.name
                    carts[index].slug = product.slug
                    set(() => ({ carts: [...carts] }))
                },
                deleteCart: (index) => {
                    var carts = get().carts
                    carts.splice(index, 1)
                    set(() => ({ carts: [...carts] }))
                },
            }),
            {
                enabled: false,
                name: "shop-storage",
            }
        )
    )
)
