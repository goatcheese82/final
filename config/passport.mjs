import GoogleStrategy from 'passport-google-oauth20';
import mongoose from "mongoose";
import User from '../models/User.mjs';

const userStrategy = passport => {
   passport.use(new GoogleStrategy.Strategy({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackUrl: '/auth/google/callback'
   },
      async (accessToken, refreshToken, profile, done) => {
         console.log(profile);
      }
   ))

   passport.serializeUser((user, done) => {
      done(null, user.id)
   })

   passport.deserializeUser((id, done) => {
      User.findById(id, (err, user) => done(err, user))
   })
}



export default userStrategy;