import express from "express";
import indexController from "../controllers/indexController.mjs";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json" assert { type: "json" };
import users from './users.mjs';
import events from './events.mjs';
import timers from './timers.mjs';
import routines from './routines.mjs';
import auth from './auth.mjs';

const router = express.Router();

/*** Docs */
router.use('/api-docs', swaggerUi.serve );
router.use('/api-docs', swaggerUi.setup(swaggerDocument));

/*** Home */
router.get('/',  /*#swagger.tags=['Home']*/ indexController.getIndex);

/*** Auth */
router.get('/auth', auth)


/*** Users */
router.get('/users', /*#swagger.tags=['Users']*/ users );

/*** Events */
router.get('/events', /*#swagger.tags=['Events']*/ events );

/*** Timers */
router.get('/timers', /*#swagger.tags=['Timers']*/ timers );

/*** Routines */
router.get('/routines', /*#swagger.tags=['Routines']*/ routines );


export default router;