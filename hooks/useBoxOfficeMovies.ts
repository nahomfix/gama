import { getBoxOfficeMovies } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export const useBoxOfficeMovies = () => {
    return useQuery({
        queryKey: ["box-office-movies"],
        queryFn: getBoxOfficeMovies,
    });
};
