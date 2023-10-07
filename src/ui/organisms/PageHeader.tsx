import Link from "next/link"

export const PageHeader = () => {
    return (
        <section role="navigation">
            <Link href="/">Home</Link>
            <Link href="/products">All</Link>
        </section>
    )
}