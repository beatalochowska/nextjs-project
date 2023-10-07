"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation';

export const PageHeader = () => {
    const pathname = usePathname();
    return (
        <section role="navigation">
            <Link aria-current='page' href="/" className={`${pathname === '/' ? 'font-bold' : 'font-medium'}`}>Home</Link>
            <Link href="/products" className={`${pathname === '/products' ? 'font-bold' : 'font-medium'}`}>All</Link>
        </section>
    )
}