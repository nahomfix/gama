"use client";

import { videoModalAtom } from "@/store/videoModalAtom";
import {
    ChevronLeftIcon,
    PauseIcon,
    PlayIcon,
} from "@heroicons/react/24/solid";
import { useSetAtom } from "jotai";
import { FC, useEffect, useMemo, useRef, useState } from "react";
import { Loader } from "./Loader";

interface VideoPlayerProps {
    videoUrl: string;
    title: string;
    coverImage?: string;
}

export const VideoPlayer: FC<VideoPlayerProps> = ({
    videoUrl,
    title,
    coverImage,
}) => {
    const videoPlayerRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(true);
    const [progress, setProgress] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    const setIsOpen = useSetAtom(videoModalAtom);

    useEffect(() => {
        if (videoPlayerRef.current) {
            videoPlayerRef.current.addEventListener("loadedmetadata", () => {
                setDuration(videoPlayerRef.current?.duration || 0);
            });

            videoPlayerRef.current.addEventListener("timeupdate", () => {
                setProgress(videoPlayerRef.current?.currentTime || 0);
            });

            videoPlayerRef.current.addEventListener("loadeddata", () => {
                setIsLoaded(true);
            });

            videoPlayerRef.current.addEventListener("error", () => {
                setIsError(true);
            });
        }
    }, []);

    const formatTime = (time: number): string => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const time = parseFloat(e.target.value);
        if (videoPlayerRef.current) {
            videoPlayerRef.current.currentTime = time;
            setProgress(time);
        }
    };

    const playVideo = () => {
        if (videoPlayerRef.current) {
            videoPlayerRef.current.play();
            setIsPlaying(true);
        }
    };

    const pauseVideo = () => {
        if (videoPlayerRef.current) {
            videoPlayerRef.current.pause();
            setIsPlaying(false);
        }
    };

    const remainingTime = useMemo(() => {
        return duration - progress;
    }, [duration, progress]);

    return (
        <div className="relative">
            <button
                className="absolute top-6 left-4 w-8 h-8 bg-white/18 rounded-full flex items-center justify-center backdrop-blur-sm cursor-pointer z-20"
                onClick={() => {
                    setIsOpen(false);
                }}
            >
                <ChevronLeftIcon className="w-4 h-4 text-white" />
            </button>

            <div
                className="h-dvh w-dvw md:h-[80vh] md:w-[80vw]"
                onClick={pauseVideo}
            >
                {!isLoaded && !isError && (
                    <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center rounded-[40px]">
                        <Loader />
                    </div>
                )}
                {isError && (
                    <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center rounded-[40px]">
                        <p className="text-white text-center">
                            Video can&apos;t be played at this time.
                        </p>
                    </div>
                )}
                <video
                    ref={videoPlayerRef}
                    className="h-full w-full object-cover md:rounded-[40px]"
                    poster={coverImage ? coverImage : "/placeholder-large.png"}
                    autoPlay
                >
                    <source src={videoUrl} type="video/mp4" />
                    <p className="text-white text-center">
                        Your browser can&apos;t playing this video.
                    </p>
                </video>
            </div>

            <div className="absolute bottom-6 left-2 right-2 mx-4">
                <div className="flex flex-col items-start gap-1 flex-1">
                    <p className="text-white text-2xl">{title}</p>
                    <input
                        type="range"
                        className="w-full accent-white [&::-webkit-slider-thumb]:bg-white"
                        value={progress}
                        min={0}
                        max={duration}
                        onChange={handleProgressChange}
                    />
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                            {isPlaying ? (
                                <PauseIcon
                                    className="w-6 h-6 text-white hidden md:block cursor-pointer"
                                    onClick={pauseVideo}
                                />
                            ) : (
                                <PlayIcon
                                    className="w-6 h-6 text-white hidden md:block cursor-pointer"
                                    onClick={playVideo}
                                />
                            )}
                            <p className="text-white text-sm">
                                {formatTime(progress)}
                            </p>
                        </div>
                        <p className="text-white text-sm">
                            -{formatTime(remainingTime)}
                        </p>
                    </div>
                </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden">
                {!isPlaying && (
                    <PlayIcon
                        className="w-20 h-20 text-white"
                        onClick={playVideo}
                    />
                )}
            </div>
        </div>
    );
};
