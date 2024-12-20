"use client";

import { getBoxOfficeMovies } from "@/services/api";
import { Movie } from "@/types/movie";
import { FC, useEffect, useState } from "react";
import { Thumbnails } from "./Thumbnails";

export const BoxOfficeMovies: FC = () => {
    const [boxOfficeMovies, setBoxOfficeMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);

    const fetchBoxOfficeMovies = async () => {
        try {
            const movies = await getBoxOfficeMovies();
            setBoxOfficeMovies(movies);
        } catch {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchBoxOfficeMovies();
    }, []);

    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-xl">Box Office Movies</h2>
            {!isError && (
                <Thumbnails movies={boxOfficeMovies} isLoading={isLoading} />
            )}
            {isError && <p>Failed to load box office movies. 😕</p>}
        </div>
    );
};
