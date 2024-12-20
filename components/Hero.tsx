"use client";

import { StarIcon } from "@heroicons/react/24/solid";
import { FC, useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { WatchNowButton } from "@/components/WatchNowButton";
import { HERO_SLIDER_DELAY } from "@/constants/hero";
import { getBoxOfficeMovies } from "@/services/api";
import {
    videoCoverImageAtom,
    videoModalAtom,
    videoTitleAtom,
    videoUrlAtom,
} from "@/store/videoModalAtom";
import { Movie } from "@/types/movie";
import { useSetAtom } from "jotai";
import Image from "next/image";

export const Hero: FC = () => {
    const [boxOfficeMovies, setBoxOfficeMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);

    const setIsOpen = useSetAtom(videoModalAtom);
    const setVideoUrl = useSetAtom(videoUrlAtom);
    const setVideoTitle = useSetAtom(videoTitleAtom);
    const setVideoCoverImage = useSetAtom(videoCoverImageAtom);

    const fetchBoxOfficeMovies = async () => {
        try {
            const movies = await getBoxOfficeMovies();
            setBoxOfficeMovies(movies);
        } catch (error) {
            console.error(error);
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchBoxOfficeMovies();
    }, []);

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

            <div className="bg-[url('https://gama-test-1.onrender.com/public/gentlmen.jpg')] bg-center bg-no-repeat bg-cover rounded-[20px] hidden md:block relative mt-4 mx-8 overflow-hidden">
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
                >
                    {boxOfficeMovies.map((movie, index) => (
                        <SwiperSlide key={`${movie.Title}-${index}`}>
                            <div className="h-3/4 p-4 flex gap-20 items-center">
                                <Image
                                    src={movie.cover_img_url}
                                    alt={movie.Title}
                                    width={400}
                                    height={600}
                                    className="rounded-[40px] cursor-pointer"
                                    onClick={() => {
                                        setVideoUrl(movie.video_url);
                                        setVideoTitle(movie.Title);
                                        setVideoCoverImage(movie.cover_img_url);
                                        setIsOpen(true);
                                    }}
                                />
                                <div
                                    className="flex flex-col gap-2 cursor-pointer"
                                    onClick={() => {
                                        setVideoUrl(movie.video_url);
                                        setVideoTitle(movie.Title);
                                        setVideoCoverImage(movie.cover_img_url);
                                        setIsOpen(true);
                                    }}
                                >
                                    <h1 className="text-6xl font-bold">
                                        {movie.Title}
                                    </h1>
                                    <div className="flex items-center gap-1">
                                        <StarIcon className="h-6 w-6 text-yellow-500" />
                                        <p className="text-4xl font-bold">
                                            {movie.rating}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};
