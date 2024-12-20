import { Movie } from "@/types/movie";
import { FC } from "react";
import { SearchResult } from "./SearchResult";

interface SearchResultsProps {
    searchResults: Movie[];
}

export const SearchResults: FC<SearchResultsProps> = ({ searchResults }) => {
    return (
        <div className="flex flex-col gap-4 overflow-y-auto">
            {searchResults.map((movie, index) => (
                <SearchResult key={`${movie.Title}-${index}`} movie={movie} />
            ))}
        </div>
    );
};
