"use client";

import { Movie } from "@/types/movie";
import { FC, useState } from "react";
import { Thumbnails } from "./Thumbnails";

export const BoxOfficeMovies: FC = () => {
    const [boxOfficeMovies, setBoxOfficeMovies] = useState<Movie[]>([
        {
            Title: "The Gentlemen",
            video_url: "https://gama-test-1.onrender.com/public/gentlmen.mp4",
            cover_img_url:
                "https://gama-test-1.onrender.com/public/gentlmen.jpg",
            rating: 8.5,
        },
        {
            Title: "The Gentlemen",
            video_url: "https://gama-test-1.onrender.com/public/gentlmen.mp4",
            cover_img_url:
                "https://gama-test-1.onrender.com/public/gentlmen.jpg",
            rating: 8.5,
        },
        {
            Title: "The Gentlemen",
            video_url: "https://gama-test-1.onrender.com/public/gentlmen.mp4",
            cover_img_url:
                "https://gama-test-1.onrender.com/public/gentlmen.jpg",
            rating: 8.5,
        },
    ]);

    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-xl">Box Office Movies</h2>
            <Thumbnails movies={boxOfficeMovies} />
        </div>
    );
};
