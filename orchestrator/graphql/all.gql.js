console.log('masuk graph')
const orchestrator = `
type Query{
  movies: [Movie],
  tv: [tv]
}

type Mutation{
  addMovies(newMovie: movieInput): Movie
}

input movieInput {
  title: String,
  popularity: String,
  overview: String,
  poster_path: String
}

type Movie{
  _id: String,
  title: String,
  popularity: String,
  overview: String,
  poster_path: String
}

type tv {
  title: String,
  overview: String,
  poster_path: String,
  popularity: String,
}
`

module.exports = orchestrator