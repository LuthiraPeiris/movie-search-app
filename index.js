let key = "a28855f6"

function search() {
    console.log("Searching...");

    let searchTag = document.getElementById("movieInput")
    let movieName = searchTag.value

    if (!movieName) {
        alert("Please enter a movie name!");
        return;
    }

    let url = "http://www.omdbapi.com/?apikey="+key+"&t="+movieName
    
    let httpRequest = new XMLHttpRequest()
    httpRequest.open("GET", url)
    httpRequest.responseType = "json"
    httpRequest.send()

    httpRequest.onload = function() {
        
        let movie = httpRequest.response
        console.log(movie)
        
        let titleTag = document.getElementById("Title");
        let yearTag = document.getElementById("Year");
        let posterTag = document.getElementById("Poster");
        let plotTag = document.getElementById("Plot");
        let actorsTag = document.getElementById("Actors");

        if (movie.Response === "True") {
            titleTag.innerHTML = movie.Title;
            yearTag.innerHTML = movie.Year;
            posterTag.src = movie.Poster;
            plotTag.innerHTML = movie.Plot;
            actorsTag.innerHTML = movie.Actors;
        } else {
            titleTag.innerHTML = "Movie not found!";
            yearTag.innerHTML = "";
            posterTag.src = "";
            plotTag.innerHTML = "";
            actorsTag.innerHTML = "";
        }
    }
    httpRequest.onerror = function () {
        alert("Error fetching movie data. Please try again.");
    };
}