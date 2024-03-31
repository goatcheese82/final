import express from "express";
import indexController from "../controllers/indexController.mjs";
import users from './users.mjs';
import events from './events.mjs';
import timers from './timers.mjs';
import routines from './routines.mjs';
import auth from './auth.mjs';
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json" assert { type: "json" };

const router = express.Router();

/*** Docs */
router.use('/api-docs', swaggerUi.serve );
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

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