import {
    videoModalAtom,
    videoTitleAtom,
    videoUrlAtom,
} from "@/store/videoModalAtom";
import { Movie } from "@/types/movie";
import { PlayIcon } from "@heroicons/react/24/solid";
import { useSetAtom } from "jotai";
import Image from "next/image";
import { FC, useState } from "react";

interface ThumbnailProps {
    movie: Movie;
}

export const Thumbnail: FC<ThumbnailProps> = ({ movie }) => {
    const [isError, setIsError] = useState<boolean>(false);
    const setIsOpen = useSetAtom(videoModalAtom);
    const setVideoUrl = useSetAtom(videoUrlAtom);
    const setVideoTitle = useSetAtom(videoTitleAtom);

    return (
        <div
            className="w-fit relative cursor-pointer"
            onClick={() => {
                setVideoUrl(movie.video_url);
                setVideoTitle(movie.Title);
                setIsOpen(true);
            }}
        >
            <Image
                src={isError ? "/placeholder.png" : movie.cover_img_url}
                alt={movie.Title}
                width={150}
                height={220}
                className="rounded-[14px]"
                onError={() => setIsError(true)}
            />
            <div className="bg-white/[.18] backdrop-blur-xl w-fit rounded-full p-4 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                <PlayIcon className="h-6 w-6" />
            </div>
        </div>
    );
};
