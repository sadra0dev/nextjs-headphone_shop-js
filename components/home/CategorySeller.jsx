import { ProductItem } from "@project/components"

export function CategorySeller({ title, description, apiData }) {
    return (
        <section>
            <div className="flex flex-col items-center gap-1.5 pt-10 text-dark-2">
                <h2 className="text-3xl font-extrabold sm:text-40p">{title}</h2>

                {description ? (
                    <p className="font-extralight">{description}</p>
                ) : (
                    ""
                )}
            </div>
            <div className="relative h-96 overflow-x-hidden py-10 sm:mx-5">
                <div className="track absolute flex gap-4 whitespace-nowrap will-change-transform">
                    {apiData?.map((item, i) => (
                        <ProductItem key={i} apiData={item} />
                    ))}
                </div>
            </div>

            <style jsx>{`
                .track {
                    animation: marquee 15s linear infinite;
                    width: 2000px;
                }
                .track:hover {
                    animation-play-state: paused;
                }
                @keyframes marquee {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
        </section>
    )
}
