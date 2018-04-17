console.log('masuk resolver')

const axios = require('axios')
const resolvers = {
  Query: {
    movies: async () => {
      try{
        const movies = await axios.get('http://localhost:3001/movie')
        if(movies){
          return movies.data.data
        }
      }catch(err){
        return err
      }
    },
    tv: async () => {
      try{
        const Tv = await axios.get('http://localhost:3002/tv')
        if(Tv){
          return Tv.data.data
        }
      }catch(err){
        return err
      }
    }
  },
  Mutation: {
    addMovies: async (root,{newMovie}) => {
      const add = await axios.post('http://localhost:3001/movie',newMovie)
      console.log(add)
      if(add){
        return add.data.data
      }
    }  
  }
}

module.exports = resolvers