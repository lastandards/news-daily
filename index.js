import express from 'express';
import consign from 'consign';

const app = express();

app.set("json spaces", 2);

consign()
.include("libs/config.js")
.then("db.js")
.then("models")
.then("routes")
.then("libs/middlewares.js")
.then("libs/boot.js")
.into(app);
