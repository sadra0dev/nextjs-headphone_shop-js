import { LinkPrimary, Image } from "@project/components"

export function TopBanner({
    apiData: {
        buttonText,
        buttonUrl,
        descriptionContent,
        descriptionTitle,
        heroText,
        image,
        smallText,
        timeSale,
    },
}) {
    return (
        <section className="relative flex h-31 flex-col-reverse items-center rounded-2xl bg-gray-1 p-10 sm:flex-row">
            <div className="flex flex-col items-start">
                <p className="text-lg">{smallText}</p>
                <p className="text-6xl font-bold leading-none">{timeSale}</p>
                <p className="hidden text-10xl font-bold uppercase leading-none text-white md:block">
                    {heroText}
                </p>
                <LinkPrimary href={buttonUrl} cn="mt-10">
                    {buttonText}
                </LinkPrimary>
            </div>
            <div className="mx-auto flex">
                <Image
                    src={image}
                    className="h-auto max-w-[16rem] sm:max-w-md"
                    alt=""
                    width={450}
                    height={450}
                    priority
                />
                <div className="-ms-20 hidden flex-col gap-1.5 self-end text-end text-dark-2 lg:flex">
                    <p className="font-bold">{descriptionTitle}</p>
                    <p className="font-extralight">{descriptionContent}</p>
                </div>
            </div>
        </section>
    )
}
