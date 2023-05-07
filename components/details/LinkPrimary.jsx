import { Link } from "@project/components"

export function LinkPrimary({ href, children, cn, ...props }) {
    return (
        <Link
            href={href}
            className={`inline-flex rounded-2xl bg-red-1 px-4 py-2.5 text-lg font-medium text-white ${cn}`}
            {...props}
        >
            {children ? children : "Shop Now"}
        </Link>
    )
}
