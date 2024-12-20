import { XMarkIcon } from "@heroicons/react/24/solid";
import { FC } from "react";

export const SearchOverlay: FC = () => {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black/90 flex flex-col gap-4 p-4">
            <XMarkIcon className="h-6 w-6 self-end" />
        </div>
    );
};
