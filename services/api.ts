import { axiosInstance } from "@/lib/axios";
import { Movie } from "@/types/movie";

const getRecentMovies = async (): Promise<Movie[]> => {
    const response = await axiosInstance.get("/recent-movies");
    const movies = await response.data;
    return movies;
};

const getBoxOfficeMovies = async (): Promise<Movie[]> => {
    const response = await axiosInstance.get("/box-office-movies");
    const movies = await response.data;
    return movies;
};

const filterMovies = async (search: string): Promise<Movie[]> => {
    const response = await axiosInstance.get(`/filter-movie?name=${search}`);
    const movies = await response.data;
    return movies;
};

export { filterMovies, getBoxOfficeMovies, getRecentMovies };
