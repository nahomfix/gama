import { FC } from "react";

export const WatchNowButtonSkeleton: FC = () => {
    return (
        <div className="h-[56px] w-[300px] animate-pulse rounded-md bg-gradient-to-r from-[#181818] to-[#2C2C2C] absolute bottom-12 left-1/2 -translate-x-1/2 shadow-md md:hidden"></div>
    );
};
