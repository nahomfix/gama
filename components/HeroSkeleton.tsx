import { FC } from "react";
import { WatchNowButtonSkeleton } from "./WatchNowButtonSkeleton";

export const HeroSkeleton: FC = () => {
    return (
        <div
            className="h-dvh w-full animate-pulse rounded-md relative"
            style={{
                background: `linear-gradient(90deg, #181818 100.34%, #2C2C2C 0%),
                        linear-gradient(180deg, rgba(9, 9, 9, 0) 80.05%, #090909 100%),
                        linear-gradient(180deg, rgba(9, 9, 9, 0.38) 0%, rgba(9, 9, 9, 0) 20.41%)`,
            }}
        >
            <WatchNowButtonSkeleton />
        </div>
    );
};
