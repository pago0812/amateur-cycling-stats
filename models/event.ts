import mongoose, { Schema, Document, models } from "mongoose";

const EVENT_MODEL_NAME: string = "Event";

// Event Schema
export interface Event {
  name: string;
  description: string;
  date: Date;
  year: number;
  country: string;
  state: string;
  city: string;
  isPublicVisible: boolean;
}

interface IEvent extends Event, Document {}

const EventSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true },
  year: { type: Number, required: true },
  country: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: false },
  isPublicVisible: { type: Boolean, required: true },
});

export const EventModel =
  models.Event || mongoose.model<IEvent>(EVENT_MODEL_NAME, EventSchema);
