const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const schema = require('./graphql/index')


const entertainme = require('./routes/entertainme');
const movie = require('./routes/movie');
const tv = require('./routes/tv');

//redis
const redis = require("redis");
const client = redis.createClient();
const cache = require('./middleware/redis');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cors());


client.on("connect", () => {
  console.log('orchestrator redis connected!');
});

//routes
app.use('/graphql',graphqlExpress({schema}))
app.use('/graphiql',graphiqlExpress({endpointURL:'/graphql'}))
app.use('/entertainme',cache,entertainme);
app.use('/movie', movie);
app.use('/tv', tv);


module.exports = app;
