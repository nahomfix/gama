import { Movie } from "@/types/movie";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { FC } from "react";

interface SearchResultProps {
    movie: Movie;
}

export const SearchResult: FC<SearchResultProps> = ({ movie }) => {
    return (
        <div className="flex bg-[#1D1D1D] items-center gap-4 p-4 rounded-[14px]">
            <Image
                width={82}
                height={82}
                src={movie.cover_img_url}
                alt={movie.Title}
                className="rounded-[14px] w-[82px] h-[82px] object-cover object-center"
            />
            <div className="flex-1 flex flex-col gap-2">
                <h3 className="text-white text-lg font-bold">{movie.Title}</h3>
                <div className="flex items-center gap-1">
                    <StarIcon className="h-4 w-4 text-yellow-500" />
                    <p className="text-white text-sm">{movie.rating}</p>
                </div>
            </div>
        </div>
    );
};
