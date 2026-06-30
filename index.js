const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
