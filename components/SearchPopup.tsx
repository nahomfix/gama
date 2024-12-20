import { SEARCH_DEBOUNCE_TIME } from "@/constants/search";
import { useFilterMovies } from "@/hooks/useFilterMovies";
import { searchModalAtom } from "@/store/searchModalAtom";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useAtom } from "jotai";
import { FC, useState } from "react";
import { useDebounce } from "react-use";
import { Loader } from "./Loader";
import { SearchInput } from "./SearchInput";
import { SearchResults } from "./SearchResults";

export const SearchPopup: FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>("");

    const [isOpen, setIsOpen] = useAtom(searchModalAtom);

    useDebounce(
        () => {
            setDebouncedSearchTerm(searchTerm);
        },
        SEARCH_DEBOUNCE_TIME,
        [searchTerm]
    );

    const {
        data: searchResults,
        isLoading,
        isError,
    } = useFilterMovies(debouncedSearchTerm);

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
            {isLoading && <Loader />}
            {isError && (
                <p className="text-white text-sm">No movies found. 😕</p>
            )}
            {!isLoading && !isError && (
                <SearchResults searchResults={searchResults ?? []} />
            )}
        </div>
    );
};
