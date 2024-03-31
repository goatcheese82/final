import express from "express";
import cors from "cors";
import "./config/loadEnv.mjs";
import db from "./data/data.mjs";
import morgan from "morgan";
import router from "./routes/index.mjs";
import events from "./routes/events.mjs";
import users from "./routes/users.mjs";
import timers from "./routes/timers.mjs";
import routines from "./routes/routines.mjs";
import passport from "passport";
import session from "express-session";
import './config/passport.mjs';


db.connectDB()

const app = express()
app.use(cors());

if (process.env.NODE_ENV === 'development') {
   app.use(morgan('dev'));
}

const PORT = process.env.PORT || 3000


//ROUTES
app.use('/events', events);
app.use('/users', users);
app.use('/timers', timers);
app.use('/routines', routines);
app.use('/', router);

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
