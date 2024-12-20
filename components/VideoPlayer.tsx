"use client";

import { videoModalAtom } from "@/store/videoModalAtom";
import {
    ChevronLeftIcon,
    PauseIcon,
    PlayIcon,
} from "@heroicons/react/24/solid";
import { useSetAtom } from "jotai";
import { FC, useEffect, useRef, useState } from "react";

interface VideoPlayerProps {
    videoUrl: string;
    title: string;
}

export const VideoPlayer: FC<VideoPlayerProps> = ({ videoUrl, title }) => {
    const videoPlayerRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(true);
    const [progress, setProgress] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);

    const setIsOpen = useSetAtom(videoModalAtom);

    useEffect(() => {
        if (videoPlayerRef.current) {
            videoPlayerRef.current.addEventListener("loadedmetadata", () => {
                setDuration(videoPlayerRef.current?.duration || 0);
            });

            videoPlayerRef.current.addEventListener("timeupdate", () => {
                setProgress(videoPlayerRef.current?.currentTime || 0);
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

    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-50">
            <button
                className="absolute top-6 left-4 w-8 h-8 bg-white/18 rounded-full flex items-center justify-center backdrop-blur-sm"
                onClick={() => {
                    console.log("Clicked!");
                    setIsOpen(false);
                }}
            >
                <ChevronLeftIcon className="w-4 h-4 text-white" />
            </button>

            <div className="h-dvh w-dvw">
                <video
                    ref={videoPlayerRef}
                    className="h-full w-full object-cover"
                    autoPlay
                >
                    <source src={videoUrl} type="video/mp4" />
                </video>
            </div>

            <div className="absolute bottom-6 left-2 right-2 mx-4">
                <div className="flex justify-between items-center">
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
                                        className="w-6 h-6 text-white hidden md:block"
                                        onClick={pauseVideo}
                                    />
                                ) : (
                                    <PlayIcon
                                        className="w-6 h-6 text-white hidden md:block"
                                        onClick={playVideo}
                                    />
                                )}
                                <p className="text-white text-sm">
                                    {formatTime(progress)}
                                </p>
                            </div>
                            <p className="text-white text-sm">
                                {formatTime(duration)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden">
                {isPlaying ? (
                    <PauseIcon
                        className="w-20 h-20 text-white"
                        onClick={pauseVideo}
                    />
                ) : (
                    <PlayIcon
                        className="w-20 h-20 text-white"
                        onClick={playVideo}
                    />
                )}
            </div>
        </div>
    );
};
