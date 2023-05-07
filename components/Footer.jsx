import { AiFillInstagram, AiOutlineTwitter } from "@project/components"

export function Footer() {
    return (
        <footer className="flex flex-col items-center gap-2.5 py-20 font-bold text-dark-2">
            2022 JSM Headphones All rights reserverd
            <div className="flex gap-2.5 text-3xl">
                <a
                    href="https://www.instagram.com/"
                    className="duration-200 hover:scale-105"
                >
                    <AiFillInstagram />
                </a>
                <a
                    href="https://twitter.com/"
                    className="duration-200 hover:scale-105"
                >
                    <AiOutlineTwitter />
                </a>
            </div>
        </footer>
    )
}
