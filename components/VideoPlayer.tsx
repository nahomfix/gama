import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { FC } from "react";

interface VideoPlayerProps {
    videoUrl: string;
    title: string;
}

export const VideoPlayer: FC<VideoPlayerProps> = ({ videoUrl, title }) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50">
            <button className="absolute top-6 left-4 w-8 h-8 bg-white/18 rounded-full flex items-center justify-center backdrop-blur-sm">
                <ChevronLeftIcon className="w-4 h-4 text-white" />
            </button>

            <div className="h-dvh w-dvw">
                <video className="h-full w-full object-cover">
                    <source src={videoUrl} type="video/mp4" />
                </video>
            </div>
        </div>
    );
};
