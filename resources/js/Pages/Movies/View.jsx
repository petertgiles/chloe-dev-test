import NavLayout from "@/Layouts/NavLayout";
import Heading from "@/Components/Heading";
import { Head, Link } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";

export default function Index({ movie, reviews }) {
    const year = (new Date(movie.release_date)).getFullYear();
    return (
        <>
            <Head title="Movie" />
            <NavLayout>
                <section className="mb-6 pb-6 border-b-2 border-b-black/25 dark:border-b-white/25">
                    <Heading level="h1" className="mb-3">
                        {movie.title}
                    </Heading>
                    <p className="text-lg italic mb-3">{year}</p>
                    <p>{movie.description}</p>
                </section>
                <section className="mb-6">
                    <Heading level="h2" className="mt-6 mb-3">
                        Reviews
                    </Heading>
                    <ul className="flex flex-col gap-y-3 mb-6">
                        {reviews.map((review) => (
                            <li key={review.id}>
                                <p>{review.comment}</p>
                                <p className="italic text-sm text-indigo-600/75 dark:text-indigo-300/75">
                                    {review.rating} / 5
                                </p>
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="p-4 shadow-md rounded border-2 border-indigo-100">
                    <Heading level="h3" className="mb-3">
                        Add review
                    </Heading>
                    <form
                        action={`/movies/${movie.id}/reviews`}
                        method="post"
                        className="flex flex-col gap-y-4"
                    >
                        <div className="flex flex-col gap-y-2">
                            <label className="font-bold" htmlFor="comment">
                                Comment
                            </label>
                            <textarea
                                id="comment"
                                name="comment"
                                required
                                className="ring-4 ring-transparent ring-offset-2 focus-visible:ring-indigo-200 rounded bg-white/75 text-black/75"
                            />
                        </div>
                        <div className="flex flex-col gap-y-2 max-w-24">
                            <label className="font-bold" htmlFor="rating">
                                Rating
                            </label>
                            <input
                                type="number"
                                id="rating"
                                name="rating"
                                required
                                min="1"
                                max="5"
                                className="ring-4 ring-transparent ring-offset-2 focus-visible:ring-indigo-200 rounded bg-white/75 text-black/75"
                            />
                        </div>
                        <div className="flex flex-start gap-x-4 items-center">
                            <PrimaryButton type="submit">Submit</PrimaryButton>
                            <SecondaryButton type="reset">
                                Reset
                            </SecondaryButton>
                            <Link
                                href="/movies"
                                className="text-black/75 dark:text-white/75 hover:text-black/95 dark:hover:text-white/95"
                            >
                                Back to movies
                            </Link>
                        </div>
                    </form>
                </section>
            </NavLayout>
        </>
    );
}
