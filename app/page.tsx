import { BoxOfficeMovies } from "@/components/BoxOfficeMovies";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { RecentMovies } from "@/components/RecentMovies";

export default function Home() {
    return (
        <div className="relative">
            <Header />
            <Hero />
            <div className="pl-4 py-8 flex flex-col gap-4 md:max-w-xl md:mx-auto">
                <RecentMovies />
                <BoxOfficeMovies />
            </div>
        </div>
    );
}
