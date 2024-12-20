import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { FC } from "react";
import { SearchOverlay } from "./SearchOverlay";
import { SearchPopup } from "./SearchPopup";

export const Header: FC = () => {
    return (
        <div className="flex items-center justify-between fixed md:static z-10 w-full py-4 px-8 bg-gradient-to-b from-black to-transparent">
            <Link href="/">
                <p className="text-lg font-bold">GAMMA</p>
            </Link>
            <MagnifyingGlassIcon className="h-6 w-6 md:hidden" />
            <div className="relative hidden md:block">
                <MagnifyingGlassIcon className="h-6 w-6 absolute top-1/2 left-4 -translate-y-1/2" />
                <input
                    type="text"
                    placeholder="What do you want to watch?"
                    className="bg-[#1D1D1D] rounded-[14px] p-3 pl-12 outline-none w-[350px]"
                />
                <SearchPopup />
            </div>
            <SearchOverlay />
        </div>
    );
};
