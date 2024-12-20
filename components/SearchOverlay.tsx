"use client";

import { SEARCH_DEBOUNCE_TIME } from "@/constants/search";
import { filterMovies } from "@/services/api";
import { searchModalAtom } from "@/store/searchModalAtom";
import { Movie } from "@/types/movie";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useAtom } from "jotai";
import { FC, useMemo, useState } from "react";
import { useDebounce } from "react-use";
import { Loader } from "./Loader";
import { SearchInput } from "./SearchInput";
import { SearchResults } from "./SearchResults";

export const SearchOverlay: FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [searchResults, setSearchResults] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

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
        setIsLoading(true);

        try {
            const response = await filterMovies(movieName);
            setSearchResults(response);
        } catch {
            setSearchResults([]);
        } finally {
            setIsLoading(false);
        }
    };

    const noResultsFound = useMemo(
        () => searchTerm !== "" && searchResults.length === 0,
        [searchResults, searchTerm]
    );

    if (!isOpen) return null;

    return (
        <div className="fixed md:hidden top-0 left-0 right-0 bottom-0 z-50 bg-black/90 flex flex-col gap-4 p-4">
            <XMarkIcon
                className="h-6 w-6 self-end"
                onClick={() => setIsOpen(false)}
            />
            <SearchInput value={searchTerm} onChange={setSearchTerm} />
            {isLoading ? (
                <Loader />
            ) : noResultsFound ? (
                <p className="text-white text-sm">No movies found. 😕</p>
            ) : (
                <SearchResults searchResults={searchResults} />
            )}
        </div>
    );
};
