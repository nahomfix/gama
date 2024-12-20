"use client";

import { Movie } from "@/types/movie";
import { FC } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbnail } from "./Thumbnail";
import { ThumbnailSkeletons } from "./ThumbnailSkeletons";

interface ThumbnailsProps {
    movies: Movie[];
    isLoading: boolean;
}

export const Thumbnails: FC<ThumbnailsProps> = ({ movies, isLoading }) => {
    if (isLoading) {
        return <ThumbnailSkeletons length={3} />;
    }

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
