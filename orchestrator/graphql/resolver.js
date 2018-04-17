const axios = require('axios')
const resolvers = {
  Query: {
    movies: async () => {
      try{
        const movies = await axios.get('http//localhost:3001/movie')
        if(movies){
          return movies.data
        }
      }catch(err){
        return err
      }
    },
    tv: async () => {
      try{
        const Tv = await axios.get('http//localhost:3002/tv')
        if(Tv){
          return Tv.data
        }
      }catch(err){
        return err
      }
    }
  },
  Mutation: {
    addMovies: async (ksoong,data) => {
      const add = await axios.post('http://localhost:3001/movie',data)
      if(add){
        return add.data.data
      }
    }  
  }
}

module.exports = resolvers