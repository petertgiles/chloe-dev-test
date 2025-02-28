import { Link } from "@inertiajs/react";

export default function ({ title, description, release_date, id, ...props }) {
    const year = (new Date(release_date)).getFullYear();
    return (
        <li
            className="relative bg-gray-200 dark:bg-slate-800 shadow-md has-[a]:hover:shadow-lg has-[a]:hover:dark:bg-slate-700 has-[a]:hover:bg-gray-300 rounded p-4 transition-all duration-100 ease-in"
            {...props}
        >
            <Link
                className="text-indigo hover:text-indigo-700 dark:hover:text-indigo-200 after:absolute after:inset-0"
                href={`/movies/${id}`}
            >
                <h2 className="text-xl font-medium">{title}</h2>
            </Link>
            <p className="text-xs italic mb-3">{year}</p>
            <p>{description}</p>
        </li>
    );
}
