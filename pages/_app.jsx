import "@project/styles/globals.css"
import { Toaster } from "@project/components"

export default function App({ Component, pageProps }) {
    return (
        <>
            <Toaster />
            <Component {...pageProps} />
        </>
    )
}
