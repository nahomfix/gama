import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { RecentMovies } from "@/components/RecentMovies";

export default function Home() {
    return (
        <div className="relative">
            <Header />
            <Hero />
            <div className="pl-4">
                <RecentMovies />
            </div>
        </div>
    );
}
