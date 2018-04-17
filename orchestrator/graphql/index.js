const { makeExecutableSchema } =  require('graphql-tools')
const orchestrator = require('./all.gql')
const resolvers = require('./resolver')

const Schema = makeExecutableSchema({
  typeDefs: orchestrator,
  resolvers
})

module.exports = Schema