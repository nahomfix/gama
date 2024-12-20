import { BoxOfficeMovies } from "@/components/BoxOfficeMovies";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { RecentMovies } from "@/components/RecentMovies";
import { VideoModal } from "@/components/VideoModal";
import { getBoxOfficeMovies, getRecentMovies } from "@/services/api";

import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from "@tanstack/react-query";

export default async function Home() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["recent-movies"],
        queryFn: getRecentMovies,
    });

    await queryClient.prefetchQuery({
        queryKey: ["box-office-movies"],
        queryFn: getBoxOfficeMovies,
    });

    return (
        <div className="relative">
            <Header />
            <HydrationBoundary state={dehydrate(queryClient)}>
                <Hero />
                <div className="pl-4 py-8 flex flex-col gap-4 md:max-w-xl md:mx-auto">
                    <RecentMovies />
                    <BoxOfficeMovies />
                </div>
            </HydrationBoundary>
            <VideoModal />
        </div>
    );
}
