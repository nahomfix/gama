import {
    videoCoverImageAtom,
    videoModalAtom,
    videoTitleAtom,
    videoUrlAtom,
} from "@/store/videoModalAtom";
import { Movie } from "@/types/movie";
import { PlayIcon } from "@heroicons/react/24/solid";
import { useSetAtom } from "jotai";
import { FC } from "react";

interface WatchNowButtonProps {
    movie: Movie;
}

export const WatchNowButton: FC<WatchNowButtonProps> = ({ movie }) => {
    const setIsOpen = useSetAtom(videoModalAtom);
    const setVideoUrl = useSetAtom(videoUrlAtom);
    const setVideoTitle = useSetAtom(videoTitleAtom);
    const setVideoCoverImage = useSetAtom(videoCoverImageAtom);

    return (
        <button
            className="flex gap-1 items-center justify-center py-4 w-[300px] bg-white rounded-xl absolute bottom-12 left-1/2 -translate-x-1/2"
            onClick={() => {
                setVideoUrl(movie.video_url);
                setVideoTitle(movie.Title);
                setVideoCoverImage(movie.cover_img_url);
                setIsOpen(true);
            }}
        >
            <PlayIcon className="h-4 w-4 text-black" />
            <span className="text-black">Watch now</span>
        </button>
    );
};
