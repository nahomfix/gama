import { PlayIcon } from "@heroicons/react/24/solid";

export const WatchNowButton = () => {
    return (
        <button className="flex gap-1 items-center justify-center py-4 w-[300px] bg-white rounded-xl absolute bottom-12 left-1/2 -translate-x-1/2">
            <PlayIcon className="h-4 w-4 text-black" />
            <span className="text-black">Watch now</span>
        </button>
    );
};
