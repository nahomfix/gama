import { SEARCH_DEBOUNCE_TIME } from "@/constants/search";
import { filterMovies } from "@/services/api";
import { searchModalAtom } from "@/store/searchModalAtom";
import { Movie } from "@/types/movie";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useAtom } from "jotai";
import { FC, useState } from "react";
import { useDebounce } from "react-use";
import { SearchInput } from "./SearchInput";
import { SearchResults } from "./SearchResults";

export const SearchPopup: FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [searchResults, setSearchResults] = useState<Movie[]>([]);

    const [isOpen, setIsOpen] = useAtom(searchModalAtom);

    useDebounce(
        () => {
            if (searchTerm) {
                searchMovies(searchTerm);
            } else {
                setSearchResults([]);
            }
        },
        SEARCH_DEBOUNCE_TIME,
        [searchTerm]
    );

    const searchMovies = async (movieName: string) => {
        try {
            const response = await filterMovies(movieName);
            setSearchResults(response);
        } catch {
            setSearchResults([]);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="hidden absolute top-full right-0 z-50 bg-black/90 md:flex flex-col gap-4 p-4 w-[600px] rounded-[14px]">
            <XMarkIcon
                className="h-6 w-6 self-end"
                onClick={() => setIsOpen(false)}
            />
            <SearchInput
                value={searchTerm}
                onChange={(value) => setSearchTerm(value)}
            />
            <SearchResults searchResults={searchResults} />
        </div>
    );
};
