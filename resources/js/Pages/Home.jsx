import NavLayout from '@/Layouts/NavLayout';
import { Head, Link } from '@inertiajs/react';

export default function Home({ movies }) {

  return (
    <>
      <Head title="Movies" />
      <NavLayout>
        <h1>Free Reviews</h1>
        <p>
          Welcome to Free Reviews, where anyone can share their opinion on any movie in the world!
          (As long as it's in our database.)
        </p>
      </NavLayout>
    </>
  );
}
