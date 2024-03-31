import mongoose from "mongoose";

const TimerSchema = new mongoose.Schema({
   title: {
     type: String,
     required: true,
     trim: true,
   },
   start: {
      type: Date,
   },
   end: {
      type: Date,
   },
   frequency: {
      type: Number,
   },
   createdAt: {
     type: Date,
     default: Date.now,
   },
 })

export default mongoose.model('Timer', TimerSchema);