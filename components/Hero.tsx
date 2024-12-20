"use client";

import { FC, useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { WatchNowButton } from "@/components/WatchNowButton";
import { HERO_SLIDER_DELAY } from "@/constants/hero";
import { getBoxOfficeMovies } from "@/services/api";
import { Movie } from "@/types/movie";
import { HeroSkeleton } from "./HeroSkeleton";
import { HeroSlide } from "./HeroSlide";

export const Hero: FC = () => {
    const [boxOfficeMovies, setBoxOfficeMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);
    const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);

    const fetchBoxOfficeMovies = async () => {
        setIsLoading(true);

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

    if (isLoading) {
        return <HeroSkeleton />;
    }

    if (isError) {
        return <div>Failed to load box office movies. 😕</div>;
    }

    return (
        <div>
            <div className="md:hidden">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    modules={[Autoplay, Pagination]}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: HERO_SLIDER_DELAY,
                        disableOnInteraction: false,
                    }}
                    onSlideChange={(swiper) => {
                        setCurrentMovie(boxOfficeMovies[swiper.activeIndex]);
                    }}
                >
                    {boxOfficeMovies.map((movie, index) => (
                        <SwiperSlide key={`${movie.Title}-${index}`}>
                            <div
                                className="bg-center bg-no-repeat bg-cover h-dvh"
                                style={{
                                    backgroundImage: `url(${movie.cover_img_url}), url('/placeholder-large.png')`,
                                }}
                            >
                                <WatchNowButton movie={movie} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div
                className="bg-center bg-no-repeat bg-cover rounded-[20px] hidden md:block relative mt-4 mx-8 overflow-hidden"
                style={{
                    backgroundImage: `url(${
                        currentMovie?.cover_img_url || "/placeholder-large.png"
                    })`,
                }}
            >
                <div className="backdrop-blur-md absolute top-0 left-0 right-0 bottom-0 bg-black/60" />
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    modules={[Autoplay, Pagination]}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: HERO_SLIDER_DELAY,
                        disableOnInteraction: false,
                    }}
                    onSlideChange={(swiper) => {
                        setCurrentMovie(boxOfficeMovies[swiper.activeIndex]);
                    }}
                >
                    {boxOfficeMovies.map((movie, index) => (
                        <SwiperSlide key={`${movie.Title}-${index}`}>
                            <HeroSlide movie={movie} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};
