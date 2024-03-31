import db from '../data/data.mjs';
import Event from '../models/Event.mjs';



const getAllEvents = async (req, res) => {
   try {
      const stories = await Event.find({status: 'public'})
      .populate('user')
      .sort({ createdAt: 'desc'})
      .lean()

      res.send(stories).status(200);
   } catch {
      console.error(err);
      res.status(500).send(err);      
   }
};

const getEventById = async (req, res) => {

};

const createEvent = async (req, res) => {

};

const updateEvent = async (req, res) => {

};

const deleteEvent = async (req, res) => {

};

export default { getAllEvents, getEventById, createEvent, updateEvent, deleteEvent };