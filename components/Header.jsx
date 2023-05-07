import { Logo, BtnShopping, Sidebar } from "@project/components"

export const Header = () => {
    return (
        <header className="flex justify-between px-5 py-1.5">
            <Logo />
            <BtnShopping />
            <Sidebar />
        </header>
    )
}
