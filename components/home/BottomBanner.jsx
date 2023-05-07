import { LinkSecondary, Image } from "@project/components"

export function BottomBanner() {
    return (
        <section className="mt-20 flex items-center rounded-2xl bg-red-1 p-10 text-white md:h-25">
            <div className="hidden max-w-[18rem] flex-col items-start gap-5 lg:flex">
                <p>20% OFF</p>
                <p className="text-80p font-black uppercase leading-none">
                    FINE SMILE
                </p>
                <p>15 Nov to 7 Dec</p>
            </div>
            <div className="relative flex flex-1 flex-col items-center sm:flex-row">
                <Image
                    src="/images/1.webp"
                    alt=""
                    className="mx-auto -mt-32 h-auto max-w-xs sm:-mt-6 lg:max-w-md xl:max-w-lg"
                    width={555}
                    height={555}
                    priority
                />
                <div className="flex flex-col items-start gap-3">
                    <p>Beats Solo Air</p>
                    <p className="text-6xl font-extrabold ">Summer Sale</p>
                    <p>Best headphones on the market</p>
                    <LinkSecondary href="/" cn="mt-7" />
                </div>
            </div>
        </section>
    )
}
