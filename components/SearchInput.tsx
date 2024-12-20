import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { FC } from "react";

export const SearchInput: FC = () => {
    return (
        <div className="flex flex-col gap-4 relative">
            <MagnifyingGlassIcon className="h-6 w-6 absolute top-1/2 left-4 -translate-y-1/2" />
            <input
                type="text"
                placeholder="Search"
                className="bg-[#1D1D1D] rounded-[14px] p-4 pl-12 outline-none"
            />
        </div>
    );
};
