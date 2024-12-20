import { FC } from "react";
import { ThumbnailSkeleton } from "./ThumbnailSkeleton";

interface ThumbnailSkeletonsProps {
    length: number;
}

export const ThumbnailSkeletons: FC<ThumbnailSkeletonsProps> = ({ length }) => {
    return (
        <div className="flex gap-4">
            {Array.from({ length }).map((_, index) => (
                <ThumbnailSkeleton key={index} />
            ))}
        </div>
    );
};
