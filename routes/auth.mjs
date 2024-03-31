import express from 'express'
import passport from 'passport'

const router = express.Router()

// @desc    Auth with Google
// @route   GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

// @desc    Google auth callback
// @route   GET /auth/google/callback
router.get(
   '/google/callback',
   passport.authenticate('google', { failureRedirect: '/' }),
   (req, res) => {
      res.send('Authenticated');
   }
)

// @desc    Logout user
// @route   /auth/logout
router.get('/logout', (req, res, next) => {
   req.logout((error) => {
      if (error) { return next(error) }
      res.send('Logged Out')
   })
})

export default router