import express from "express";
import "./config/loadEnv.mjs";
import db from "./data/data.mjs";
import morgan from "morgan";
import router from "./routes/index.mjs";
import passport from "passport";
import session from "express-session";
import './config/passport.mjs';


db.connectDB()

const app = express()

if (process.env.NODE_ENV === 'development') {
   app.use(morgan('dev'));
}

const PORT = process.env.PORT || 3000


//ROUTES

app.use('/', router)

//MIDDLEWARE

/*** Session (should be before passport) */
app.use(
   session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
   })
)

/*** Passport */
app.use(passport.initialize());
app.use(passport.session());




app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
