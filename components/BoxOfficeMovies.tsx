"use client";

import { useBoxOfficeMovies } from "@/hooks/useBoxOfficeMovies";
import { FC } from "react";
import { Thumbnails } from "./Thumbnails";

export const BoxOfficeMovies: FC = () => {
    const { data: boxOfficeMovies, isLoading, isError } = useBoxOfficeMovies();

    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-xl">Box Office Movies</h2>
            {!isError && (
                <Thumbnails
                    movies={boxOfficeMovies ?? []}
                    isLoading={isLoading}
                />
            )}
            {isError && <p>Failed to load box office movies. 😕</p>}
        </div>
    );
};
