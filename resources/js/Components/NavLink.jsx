import { Link, usePage } from "@inertiajs/react";

export default function NavLink({ className = "", children, ...props }) {
    const { url } = usePage();
    const stripped = url.split("?")[0];
    let active = stripped.startsWith(props.href);
    if (props.href.length === 1) {
        active = stripped === props.href;
    }
    return (
        <Link
            {...props}
            className={
                "inline-flex items-center border-b-2 px-1 pt-1 font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " +
                (active
                    ? "border-indigo-400 text-gray-900 dark:text-gray-50 focus:border-indigo-700"
                    : "border-transparent text-gray-600 dark:text-gray-50 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-300 focus:border-gray-300 focus:text-gray-700") +
                className
            }
        >
            {children}
        </Link>
    );
}
