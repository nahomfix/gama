import { Movie } from "@/types/movie";
import { PlayIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { FC } from "react";

interface ThumbnailProps {
    movie: Movie;
}

export const Thumbnail: FC<ThumbnailProps> = ({ movie }) => {
    return (
        <div className="w-fit relative">
            <Image
                src={movie.cover_img_url}
                alt={movie.Title}
                width={150}
                height={220}
                className="rounded-[14px]"
            />
            <div className="bg-white/[.18] backdrop-blur-xl w-fit rounded-full p-4 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                <PlayIcon className="h-6 w-6" />
            </div>
        </div>
    );
};
