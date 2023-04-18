// Movie App - Prototype


/*
@Properties
    title : String
    poster_front : String (url)
    poster_back : String (url)
    imdb_score : Number
    movie_year : Number
    movie_genres : ArrayList
    user_rating : Number
    movie_duration : Number
    director : String
    movie_trailer : String (url)
    movie_description : String (long-text)
    original_language : String
    production_company : String
    actors : ArrayList`
*/

const inputs = document.querySelectorAll('input')

function MovieApplication() {
    this.movies = []
}

//Add Movie Method 
MovieApplication.prototype.addMovie = function (obj) {
    return this.movies.push(obj) // insert 
}

MovieApplication.prototype.ClickHandler = function() {
    this.addMovie({
        title:inputs[0].value,
        poster_front:inputs[1].value,
        poster_back:inputs[2].value,
        imbd_score:inputs[3].value,
        movie_year:inputs[4].value,
        movie_genres:inputs[5].value.split(','),
        user_rating:inputs[6].value,
        movie_duration:inputs[7].value,
        director:inputs[8].value,
        movie_trailer:inputs[9].value,
        movie_description:inputs[10].value,
        original_language:inputs[11].value,
        production_company:inputs[12].value,
        actors:inputs[13].value.split(',')
    })
    console.log(this.movies);
}

let app = new MovieApplication()