## GC Talent - Full Stack Code Test

---

### Read the entire README before beginning!

---

#### Technical Information

This project is implemented in [Laravel](https://laravel.com/docs/11.x), a MVC server framework for PHP.

The views are implemented as React components, and Laravel serves them directly using the [Inertia.js](https://inertiajs.com/) library.Those views use [Tailwind CSS](https://tailwindcss.com/) for styling.

The app uses a SQLite database, which is set up as part of Laravel's default dev environment.

You may start the project locally by running `docker-compose up`.

Alternatively, if you have PHP (with SQLite), Composer, and npm installed, you can run:

```
cp .env.example .env
composer install
php artisan key:generate
php artisan migrate --force
php artisan migrate:fresh --seed --force
npm install
npm run build
composer run dev
```

The app will be available at http://localhost:8000. You may need to refresh the browser after changing code.

#### Project structure

If you are less familiar with Laravel, this will help you find the most relevant files:

The `routes/web.php` file defines [routes](https://laravel.com/docs/11.x/routing#the-default-route-files) for the app, directing http requests to be handled by the appropriate method in the appropriate [Controller](https://laravel.com/docs/11.x/controllers#main-content) class. In the initial project, all requests are handled by the `app/Http/Controllers/MovieController.php` file.

Controller methods contain business logic, including interacting with the database and manipulating data before passing that data to a view. Interactions with the database leverage Laravel's [Eloquent ORM](https://laravel.com/docs/11.x/eloquent#eloquent-model-conventions), and use Model classes (defined in `app/Models`) which encode the structure of the database tables. However, it is possible to interact with the database directly using [raw SQL](https://laravel.com/docs/11.x/queries#raw-expressions) if you wish. (The structure of the database itself is defined in [migration files](https://laravel.com/docs/11.x/migrations#main-content), in the `database/migrations` directory.)

Controller methods generally pass data to a view, built in this project as React components. The views are defined in the `resources/js/Pages` directory, and leverage other React components defined in `resources/js/Layouts` and `resources/js/Components`. (The Inertia.js library allows for returning React components from Laravel controllers, but the details of how this work are unimportant for this test.)

#### The Test

This sample repo is a minimal implementation of a movie review website. Any user is meant to be able to add new movies to the database, and review existing movies. For simplicity, everything is public and there are no user accounts.

This test is meant to ensure that you are familiar with aspects of full stack development (MVC frameworks, routing, database queries, HTML and Javascript), not that you are deeply familiar with Laravel or React specifically. With that in mind, the starting code avoids making full use of library-specific features, shortcuts, or "magic", with a preference for clear and transparent code. You are free to take advantage of any features these libraries provide, if you wish.

Your job is to complete the following tasks:

1. The Movies/View page is defined in the `resources/js/Pages/Movies/View.jsx` file and accessed at the url `http://localhost:8000/movies/{id}`. It shows details about a single movie, followed by the list of all its reviews, followed by a form to add a new review. **Add a new detail to the first section, showing the average rating of the movie.** This average should be based on all reviews and displayed to a single decimal place. If there are no reviews, display "No reviews yet.".
2. The Movies/Index page is defined in the `resources/js/Pages/Movies/Index.jsx`file and lists all movies. Buttons at the top of the page allow movies to be listed in alphabetical order, or by year. **Implement a new button which causes movies to be listed by average rating**, from highest to lowest.
3. The Movies/Index page currently lists all movies in the database, but this would become extreme with a realistic dataset. **Implement pagination on the Index page**, so that it only loads and displays 10 movies at a time. There should be obvious links to the _previous_ and _next_ pages, and the current page number should be displayed somewhere.
4. **Create a new page where users can submit a new movie, including title, description and release date.** This page should be accessible from the nav menu. Upon submission, if a movie already exists in the database with the same title and year, the new entry is not created and the user sees an error message. Otherwise, the user is redirected to the new movie's page.
5. It is possible to submit movies with a future release date. **Update the Movies/View page so that if the release date is in the future, it shows a timer instead of the reviews and review form.** This timer should should count down to the release date, and should visibly decrement every second. (Don't worry about timezones or daylight savings time.)

#### Tips

**Commit early and often**. Write succinct commit messages that outline the change and why the change was made.

**Explain your thinking**. If this is a take-home exam, leave comments where useful. If this is an in-person exam, think out loud. If you don't finish: outline what caused you trouble, how you think it could be fixed, and how you planned to implement the things you didn't have time to address.

Take your time. This isn't designed to be overly difficult, just to give us some insight into how you solve problems and structure your code.

Follow patterns and conventions already present in the code, where reasonable. We value **readability and consistency**.
