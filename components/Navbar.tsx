import Image from "next/image";
import Link from "next/link";

import { NavLinks } from "@/constant";
import { headers } from "next/headers";

const Navbar = () => {
    return (
        <nav className="flex-between navbar">
            <div className="flex-1 flex-start gap-10 items-center">
                {/* Logo */}
                <Link href="/">
                    <Image
                        src="/N_logo.svg"
                        alt="BlackBoys Logo"
                        width={116}
                        height={43}
                        />
                </Link>
                {/* Nav Links */}
                <ul className=" justify-end flex-end gap-7 xl:flex items-center text-small">
                    {NavLinks.map((link) => (
                        <Link
                            key={link.key}
                            href={link.href}
                            className="nav-link"
                            >
                            {link.text}
                        </Link>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar