import mongoose, { Schema, Document, models } from "mongoose";
import { RACE_MODEL_NAME, Race } from "./race";

const EVENT_MODEL_NAME: string = "Event";

// Event Schema
interface Event0 {
  name: string;
  description?: string;
  date: Date;
  year: number;
  country: string;
  state: string;
  city?: string;
  isPublicVisible: boolean;
  races?: Race[];
}

// Event Schema
export interface Event extends Event0 {
  _id?: string;
}

interface IEvent extends Event0, Document {}

const EventSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true },
  year: { type: Number, required: true },
  country: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: false },
  isPublicVisible: { type: Boolean, required: true },
  races: [{ type: Schema.Types.ObjectId, ref: RACE_MODEL_NAME }],
});

export const EventModel =
  models.Event || mongoose.model<IEvent>(EVENT_MODEL_NAME, EventSchema);
