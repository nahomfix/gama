import { FC } from "react";

export const ThumbnailSkeleton: FC = () => {
    return (
        <div className="h-[220px] w-[150px] animate-pulse rounded-md bg-gradient-to-r from-[#181818] to-[#2C2C2C]"></div>
    );
};
