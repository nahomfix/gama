import { FC } from "react";
import { VideoPlayer } from "./VideoPlayer";

export const VideoModal: FC = () => {
    return (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
            <VideoPlayer
                videoUrl="https://www.sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4"
                title="The Gentlemen"
            />
        </div>
    );
};
