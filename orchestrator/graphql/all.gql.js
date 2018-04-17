const orchestrator = `
type Query{
  movies: [Movie],
  tv: [tv]
}

type Mutation{
  addMovies(
    title: String,
    popularity: Int,
    overview: String,
    poster_path: String): Movie
}

type Movie{
  _id: String,
  title: String,
  popularity: Int,
  overview: String,
  poster_path: String
}

type tv {
  title: String,
  overview: String,
  poster_path: String,
  popularity: Int,
}
`

module.exports = orchestrator