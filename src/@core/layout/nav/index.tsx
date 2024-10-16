"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

const NavBar = () => {
    const pathname = usePathname();

    const routes = [
        {
            name: 'Products',
            href: '/products'
        },
        {
            name: 'About',
            href: '/about'
        }
    ]
    return (
        <nav
            className="flex flex-row justify-start items-center w-full h-16 px-8 py-2 bg-[#D9D9D91F] shadow-sm gap-14"
        >
            <Image src="nhc-logo.svg" alt="" width={60} height={60} />

            <div className="flex justify-between gap-10">
                {
                    routes.map((link) => {
                        const isActive = pathname.startsWith(link.href)
                        return (<Link key={link.href} href={link.href} className={isActive ? 'text-[#285F9D]' : 'text-black'}>
                            {link.name}
                        </Link>
                        )
                    })
                }
            </div>
        </nav>
    )
}

export default NavBar;