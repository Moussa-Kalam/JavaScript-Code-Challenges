// function Movie(title, director, genre, releaseYear, rating) {
//   this.title = title,
//   this.director = director,
//   this.genre = genre,
//   this.releaseYear = releaseYear,
//   this.rating = rating
// }

// Movie.prototype.getOverview = function() {
//   return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`
// }

class Movie {
  constructor(title, director, genre, releaseYear, rating) {
    this.title = title,
    this.director = director,
    this.genre = genre,
    this.releaseYear = releaseYear,
    this.rating = rating
  }
  getOverview() {
    return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`
  }
}

const blackPanther = new Movie("Black Panther", "Ryan Coogler", "Science fiction", 2018, "4.5 stars");

console.log(blackPanther);
console.log(blackPanther.getOverview());