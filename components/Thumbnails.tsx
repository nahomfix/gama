"use client";

import { Movie } from "@/types/movie";
import { FC } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbnail } from "./Thumbnail";

interface ThumbnailsProps {
    movies: Movie[];
}

export const Thumbnails: FC<ThumbnailsProps> = ({ movies }) => {
    return (
        <div>
            <Swiper spaceBetween={8} slidesPerView={3}>
                {movies.map((movie, index) => (
                    <SwiperSlide key={`${movie.Title}-${index}`}>
                        <Thumbnail movie={movie} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
