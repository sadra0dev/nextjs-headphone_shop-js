import { Link } from "@project/components"

export function LinkSecondary({ href, children, cn, ...props }) {
    return (
        <Link
            href={href}
            className={`inline-flex rounded-2xl bg-white px-4 py-2.5 text-lg font-medium text-red-1 ${cn}`}
            {...props}
        >
            {children ? children : "Shop Now"}
        </Link>
    )
}
