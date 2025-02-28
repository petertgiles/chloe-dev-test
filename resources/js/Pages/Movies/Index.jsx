import Heading from "@/Components/Heading";
import MovieCard from "@/Components/MovieCard";
import NavLayout from "@/Layouts/NavLayout";
import { Head, Link, usePage } from "@inertiajs/react";

export default function Index({ movies }) {
    const { url } = usePage();
    return (
        <>
            <Head title="Movies" />
            <NavLayout>
                <Heading level="h1" className="mb-3">
                    Movies
                </Heading>
                <ul className="flex gap-x-2 mb-3">
                    <li>
                        <Link
                            href="/movies?sort=title"
                            className={`border-b-2 ${url.includes("?sort=title") ? "border-indigo" : "border-transparent"}`}
                        >
                            Sort by Title
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/movies?sort=date"
                            className={`border-b-2 ${url.includes("?sort=date") ? "border-indigo" : "border-transparent"}`}
                        >
                            Sort by Release Date
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/movies?sort=avg_rating"
                            className={`border-b-2 ${url.includes("?sort=avg_rating") ? "border-indigo" : "border-transparent"}`}
                        >
                            Sort by Average Rating
                        </Link>
                    </li>
                </ul>
                <ul className="grid md:grid-cols-2 gap-4 mb-6">
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} {...movie} />
                    ))}
                </ul>
            </NavLayout>
        </>
    );
}
