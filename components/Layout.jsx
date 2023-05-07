import { Header, Footer } from "@project/components"

export const Layout = ({ children }) => {
    return (
        <div className="min-h-screen overflow-x-hidden p-2.5">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}
