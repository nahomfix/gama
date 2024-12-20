"use client";

import {
    videoModalAtom,
    videoTitleAtom,
    videoUrlAtom,
} from "@/store/videoModalAtom";
import { useAtomValue } from "jotai";
import { FC } from "react";
import { VideoPlayer } from "./VideoPlayer";

export const VideoModal: FC = () => {
    const isOpen = useAtomValue(videoModalAtom);
    const videoUrl = useAtomValue(videoUrlAtom);
    const videoTitle = useAtomValue(videoTitleAtom);

    if (!isOpen) return null;

    return (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/60 flex justify-center items-center z-50">
            <VideoPlayer videoUrl={videoUrl} title={videoTitle} />
        </div>
    );
};
