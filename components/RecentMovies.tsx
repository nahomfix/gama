"use client";

import { useRecentMovies } from "@/hooks/useRecentMovies";
import { FC } from "react";
import { Thumbnails } from "./Thumbnails";

export const RecentMovies: FC = () => {
    const { data: recentMovies, isLoading, isError } = useRecentMovies();

    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-xl">Recent Movies</h2>
            {!isError && (
                <Thumbnails movies={recentMovies ?? []} isLoading={isLoading} />
            )}
            {isError && <p>Failed to load recent movies. 😕</p>}
        </div>
    );
};
