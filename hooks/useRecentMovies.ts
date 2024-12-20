import { getRecentMovies } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export const useRecentMovies = () => {
    return useQuery({
        queryKey: ["recent-movies"],
        queryFn: getRecentMovies,
    });
};
