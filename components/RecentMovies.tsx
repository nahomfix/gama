"use client";

import { getRecentMovies } from "@/services/api";
import { Movie } from "@/types/movie";
import { FC, useEffect, useState } from "react";
import { Thumbnails } from "./Thumbnails";

export const RecentMovies: FC = () => {
    const [recentMovies, setRecentMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);

    const fetchRecentMovies = async () => {
        try {
            const movies = await getRecentMovies();
            setRecentMovies(movies);
        } catch (error) {
            console.error(error);
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchRecentMovies();
    }, []);

    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-xl">Recent Movies</h2>
            {!isLoading && !isError && <Thumbnails movies={recentMovies} />}
            {isError && <p>Failed to load recent movies</p>}
        </div>
    );
};
