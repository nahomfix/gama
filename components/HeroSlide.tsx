import {
    videoCoverImageAtom,
    videoModalAtom,
    videoTitleAtom,
    videoUrlAtom,
} from "@/store/videoModalAtom";
import { Movie } from "@/types/movie";
import { StarIcon } from "@heroicons/react/24/solid";
import { useSetAtom } from "jotai";
import Image from "next/image";
import { FC, useState } from "react";

interface HeroSlideProps {
    movie: Movie;
}

export const HeroSlide: FC<HeroSlideProps> = ({ movie }) => {
    const [isError, setIsError] = useState<boolean>(false);

    const setIsOpen = useSetAtom(videoModalAtom);
    const setVideoUrl = useSetAtom(videoUrlAtom);
    const setVideoTitle = useSetAtom(videoTitleAtom);
    const setVideoCoverImage = useSetAtom(videoCoverImageAtom);

    return (
        <div className="h-3/4 p-4 flex gap-20 items-center">
            <Image
                src={isError ? "/placeholder-large.png" : movie.cover_img_url}
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
                onError={() => setIsError(true)}
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
                <h1 className="text-6xl font-bold">{movie.Title}</h1>
                <div className="flex items-center gap-1">
                    <StarIcon className="h-6 w-6 text-yellow-500" />
                    <p className="text-4xl font-bold">{movie.rating}</p>
                </div>
            </div>
        </div>
    );
};
