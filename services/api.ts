import { axiosInstance } from "@/lib/axios";
import { Movie } from "@/types/movie";

const getRecentMovies = async (): Promise<Movie[]> => {
    const response = await axiosInstance.get("/recent-movies");
    const movies = await response.data;
    return movies;
};

export { getRecentMovies };
