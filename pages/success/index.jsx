import { BsBagCheckFill, Link } from "@project/components"
import { runFireworks } from "@project/configs"
import { useEffect } from "@project/libs"

const Success = () => {
    useEffect(() => {
        localStorage.clear()
        runFireworks()
    }, [])

    return (
        <div className="flex min-h-screen items-center justify-center px-5">
            <div className="flex h-[350px] w-full max-w-5xl flex-col items-center justify-center rounded-2xl bg-gray-1 p-5 lg:p-12">
                <p className="icon text-40p text-[green]">
                    <BsBagCheckFill />
                </p>
                <h2 className="mt-4 text-lg font-black capitalize text-dark-2 lg:text-40p">
                    Thank you for your order!
                </h2>
                <p className="mt-5 text-center font-semibold">
                    Check your email inbox for the receipt.
                </p>
                <p className="m-2.5 mt-8 text-center font-semibold">
                    If you have any questions, please email
                    <a
                        className="ml-1.5 text-red-1"
                        href="mailto:order@example.com"
                    >
                        order@example.com
                    </a>
                </p>
                <Link
                    href="/"
                    className="mt-5 w-full max-w-xs rounded-2xl bg-red-1 py-2.5 text-center font-semibold text-white duration-200 hover:scale-105"
                >
                    Continue Shopping
                </Link>
            </div>
        </div>
    )
}

export default Success
