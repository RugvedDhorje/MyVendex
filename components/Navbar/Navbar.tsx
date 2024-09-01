import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="w-[100vw] px-16 py-4">
            <div className="flex justify-between relative">
                <div>
                <img className="h-10" src="/logo-dark.png" alt="Logo image" />
                </div>
                <img className="w-10 rounded-full" src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg" alt="image" />
            </div>
            <div className="absolute top-5 left-1/2 transform -translate-x-1/2">
                <Link className="text-gray-700 px-2 text-[#6930D0]" href={"#"}>Home</Link>
                <Link className="text-gray-700 px-2" href={"#"}>Vendors</Link>
                <Link className="text-gray-700 px-2" href={"#"}>Services</Link>
            </div>
        </div>

    )
}

export default Navbar;
