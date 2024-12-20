import { BoxOfficeMovies } from "@/components/BoxOfficeMovies";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { RecentMovies } from "@/components/RecentMovies";
import { VideoPlayer } from "@/components/VideoPlayer";

export default function Home() {
    return (
        <div className="relative">
            <Header />
            <Hero />
            <div className="pl-4 py-8 flex flex-col gap-4 md:max-w-xl md:mx-auto">
                <RecentMovies />
                <BoxOfficeMovies />
            </div>

            <VideoPlayer
                videoUrl="https://www.sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4"
                title="The Gentlemen"
            />
        </div>
    );
}
