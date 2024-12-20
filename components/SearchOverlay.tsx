import { XMarkIcon } from "@heroicons/react/24/solid";
import { FC } from "react";
import { SearchInput } from "./SearchInput";
import { SearchResults } from "./SearchResults";

export const SearchOverlay: FC = () => {
    return (
        <div className="fixed md:hidden top-0 left-0 right-0 bottom-0 z-50 bg-black/90 flex flex-col gap-4 p-4">
            <XMarkIcon className="h-6 w-6 self-end" />
            <SearchInput />
            <SearchResults
                searchResults={[
                    {
                        Title: "The Gentlemen",
                        video_url:
                            "https://gama-test-1.onrender.com/public/gentlmen.mp4",
                        cover_img_url:
                            "https://gama-test-1.onrender.com/public/gentlmen.jpg",
                        rating: 8.5,
                    },
                ]}
            />
        </div>
    );
};
