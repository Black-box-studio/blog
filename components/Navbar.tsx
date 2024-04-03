"use client"
import { Dropdownlink , NavLinks } from "@/constants";
import Link from "next/link"
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import { FaBlog } from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";
import { FcMusic } from "react-icons/fc";
import { FaBookOpenReader } from "react-icons/fa6";

export const NavBar = () => {
    // HeaderNavbar    
    const currentPath =usePathname();
    const isActive = (path: string) => {
        return currentPath === path;
    }
    const [header, setHeader] = useState(false);

    useEffect(() => {        
        const scrollHeader = () => {
            if (window.scrollY > 55) {
                setHeader(true);
            } else {
                setHeader(false);
            }
        };
        window.addEventListener("scroll", scrollHeader);
        return () => {
            window.removeEventListener("scroll", scrollHeader);
        };
    });



  return (
    <div className={header ? "ease-linear duration-500 z-50 fixed w-full top-0 bg-white bg-opacity-5 shadow-sm backdrop-blur-sm border-b border-opacity-25 border-width-1 border-white" : "w-full shadow-sm absolute z-50  backdrop-blur-sm"}>
        <div className="header z-50 flex w-[80%] mx-auto justify-between py-[15px]">
            {/* Logo */}
            <div className="logo">
                <Link href="/">
                    <img src="/F_logo.svg" alt="logo" width={20} height={20}/>
                </Link>
            </div>
            {/* Menu */}
            
            <div className="menu md:flex hidden justify-center">
                {NavLinks.map((link) => (
                    <Link key={link.key} href={link.path} >
                        <span className={isActive(link.path) ? 'active': '' + header ? "link ease-in-out duration-300 gap-5 text-sm text-white " : "link text-white text-sm gap-5 items-center text-center justify-center"}>
                            <span className="link">{link.text}</span>
                        </span>

                    </Link>
                ))}
                {/* Dropdown */}
                 {Dropdownlink.map((link) => (
                    <Link href={""} className="py-1 px-2 group gap-5 justify-center  transition-all ">
                        <p className="text-white text-sm flex gap-2 justify-center group-hover:scale-105 items-center text-center group-hover:text-red-500">
                            <span className="">{link.title}</span>
                            <IoIosArrowDown className=" rotate-180 group-hover:scale-105 group-hover:rotate-0 transition-all" />
                        </p>

                        <div className={"backdrop-blur-sm absolute py-3 px-5 shadow-md right-100 top-15 rounded-md z-50 w-auto grid-col-1 hidden gap-1 bg-white bg-opacity-75 border-white border-opacity-50 transition-all  group-hover:grid"}>
                            <span className="flex gap-2 items-center"><FaBlog />{link.links[0]} </span><br/>
                            <span className="flex gap-2 items-center"><BiMoviePlay />{link.links[1]} </span><br/>
                            <span className="flex gap-2 items-center"><FcMusic />{link.links[2]} </span><br/>
                            <span className="flex gap-2 items-center"><FaBookOpenReader />{link.links[3]} </span>
                        </div>
                    </Link>    
                ))}
            </div>
        </div>
    </div>
  )
}
