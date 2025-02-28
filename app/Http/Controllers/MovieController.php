<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;
use Inertia\Response;
use App\Models\Movie;
use Illuminate\Support\Facades\DB;

class MovieController extends Controller
{
    /**
     * Display the list of all movies
     */
    public function index(Request $request)
    {
        switch ($request->input('sort')) {
            case 'title':
                $movies = Movie::orderBy('title', 'asc')->get();
                break;
            case 'date':
                $movies = Movie::orderBy('release_date', 'desc')->get();
                break;
            default:
                $movies = Movie::orderBy('title', 'asc')->get();
        }

        // This is equivalent to the following:
        // $movies = DB::table('movies')->orderBy('title', 'asc')->get();
        // or even:
        // $movies = DB::select("select * from movies order by title asc");

        return Inertia::render('Movies/Index', [
            'movies' => $movies,
        ]);
    }

    /**
     * Display the details of a single movie
     */
    public function view(Request $request, $id)
    {
        $movie = Movie::where('id', $id)->first();
        $sum_ratings = 0;
        $num_ratings = 0;
        // Log::debug($movie->reviews);
        foreach ($movie->reviews as $review) {
            $sum_ratings = $sum_ratings + $review->rating;
            $num_ratings = $num_ratings + 1;
        }
        $avg_rating = -1;
        if ($num_ratings) {
            $avg_rating = round($sum_ratings / $num_ratings, 1);
        }
        return Inertia::render('Movies/View', [
            'movie' => $movie,
            'reviews' => $movie->reviews,
            'avg_rating' => $avg_rating,
        ]);
    }

    /**
     * Store a new review for a movie, and redirect back to the movie view
     */
    public function storeReview(Request $request, $id)
    {
        $request->validate([
            'rating' => ['required', 'integer', 'min:1', 'max:5'],
            'comment' => ['required', 'string'],
        ]);

        $movie = Movie::where('id', $id)->first();

        $movie->reviews()->create([
            'rating' => $request->rating,
            'comment' => $request->comment,
        ]);

        return redirect('/movies/' . $id);
        // return redirect()->route('movies.view', ['id' => $id]); // This would be conventional in Laravel, but its a bit more magical
    }
}
