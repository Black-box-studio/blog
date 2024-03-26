import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DropdownLinks, NavLinks } from "@/constant";
import { ThemeSwitcher } from "./ThemeSwitcher";
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/react";
import {SearchIcon} from "./SearchIcon";
import { Input } from "@nextui-org/react";
import {Spacer} from "@nextui-org/spacer";



const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (     
        <Navbar isBordered shouldHideOnScroll maxWidth="2xl" onMenuOpenChange={setIsMenuOpen}>
            <NavbarBrand className="pr-3" justify="content">
                <Link href="/" className="sm:block">
                    <Image
                        src="/N_logo.svg"
                        alt="BlackBoys Logo"
                        width={160}
                        height={43}
                    />
                </Link>
            </NavbarBrand>
            <NavbarContent className="hidden lg:flex gap-4" justify="center">
                <NavbarItem className="space-x-4">
                    {NavLinks.map((link)=>
                    <Link key={link.key} href={link.href} aria-current="page" fontWeight="200">
                        {link.text}
                    </Link>
                    
                    )}
                </NavbarItem>
                <NavbarContent as="div" className="hidden lg:flex gap-4" justify="end">
                    <NavbarItem >
                        <Input
                            classNames={{
                                base: "max-w-full w-50 h-10",
                                mainWrapper: "h-full",
                                input: "text-small",
                                inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                            }}
                                placeholder="Type to search..."
                                size="sm"
                                startContent={<SearchIcon size={18}/>} 
                                type="search"
                                />
                    </NavbarItem>
                </NavbarContent>
            </NavbarContent>
            {/* <ThemeSwitcher/> */}
            <NavbarMenu className="text-center">
                {NavLinks.map((link, index) => (
                <NavbarMenuItem key={link.key} >
                    
                    <Link
                        className="w-full "
                        color={
                            index === 2 ? "warning" : index === NavLinks.length - 1 ? "danger" : "foreground"
                        }
                        href={link.href}
                        size="lg"
                    >
                        {link.text}
                    </Link>
                   
                </NavbarMenuItem>
                ))}
            </NavbarMenu>
            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="lg:hidden"
            />
        </Navbar>
     );
 }

export default NavBar