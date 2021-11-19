import express from "express";
import router from "./routes/api";
import {graphqlHTTP}  from "express-graphql";
import schema  from "./graphQl/schema";
import connect from "./db/database";

const app = express();
connect();
app.use('/api',graphqlHTTP(
{
    graphiql:true,
    schema

}));
app.use(router);

export default app;