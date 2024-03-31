import express from "express";
import ec from "../controllers/eventsController.mjs";


const router = express.Router();

/*** Events Controller */

/* Get Routes */

router.get('/', /*#swagger.tags=["Events"]*/ec.getAllEvents);
router.get('/:id', /*#swagger.tags=["Events"]*/ec.getEventById);

/* Post Routes */

router.post('/', /*#swagger.tags=["Events"] #swagger.start='events'*/ec.createEvent);

router.patch('/:id', /*#swagger.tags=["Events"] */ec.updateEvent);

router.delete('/:id', /*#swagger.tags=["Events"]*/ec.deleteEvent);

export default router;