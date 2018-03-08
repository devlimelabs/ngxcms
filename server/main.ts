import express from 'express';
import * as mongoose from 'mongoose';
import 
import bodyParser from 'body-parser';
const app = express();

import {graphql} from 'graphql';
import graphqlHTTP from 'express-graphql';

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/local');

const db = mongoose.connection;
db.on('error', () => console.log( '---FAILED to connect to mongoose'));
db.once('open', () => console.log( '+++Connected to mongoose'));

app.listen(3000, () => console.log('+++Express Server is Running!!!'));

