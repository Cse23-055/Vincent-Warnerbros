document.addEventListener("DOMContentLoaded", function() {
    // Function to fetch movie information based on movie name
    function fetchMovieInfo(movieName) {
        // Define movie information based on the movie name
        const movieInfo = {
            "dune_part_2": {
                cast: ["Actor 1", "Actor 2", "Actor 3"],
                releaseDate: "2022-10-20",
                genre: ["Action", "Adventure", "Sci-Fi"],
                about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
            },
            "the_beekeeper": {
                cast: ["Actor A", "Actor B", "Actor C"],
                releaseDate: "2022-11-15",
                genre: ["Drama", "Mystery"],
                about: "Sed ut perspiciatis unde omnis iste natus error..."
            }
            // Add more movies and their information as needed
        };

        // Check if movie information is available
        if (movieInfo.hasOwnProperty(movieName)) {
            const info = movieInfo[movieName];
            // Display movie information (e.g., in a modal)
            console.log("Movie Cast:", info.cast);
            console.log("Release Date:", info.releaseDate);
            console.log("Genre:", info.genre);
            console.log("About:", info.about);
        } else {
            console.error("Movie information not found for:", movieName);
        }
    }

    // Event listener for info buttons
    const infoButtons = document.querySelectorAll(".info-btn");
    infoButtons.forEach(button => {
        button.addEventListener("click", function() {
            const movieName = this.getAttribute("data-movie");
            fetchMovieInfo(movieName);
        });
    });
});
