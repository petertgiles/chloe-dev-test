import Container from "@/Components/Container";
import NavLink from "@/Components/NavLink";

export default function NavLayout({ children }) {
    return (
        <>
            <div className="bg-gray-100 sticky top-0 pt-6 z-50 shadow-md dark:bg-gray-700 dark:text-white/50">
                <Container>
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/movies">Movies</NavLink>
                </Container>
            </div>
            <div className="bg-gray-50 text-black/75 dark:bg-gray-900 dark:text-white/75">
                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-indigo">
                    <Container>
                        <main className="mt-6">{children}</main>
                    </Container>
                </div>
            </div>
        </>
    );
}
