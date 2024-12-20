import { filterMovies } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export const useFilterMovies = (search: string) => {
    return useQuery({
        queryKey: ["filter-movies", search],
        queryFn: () => filterMovies(search),
        enabled: search !== "",
    });
};
