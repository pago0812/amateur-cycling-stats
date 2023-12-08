import mongoose, { Schema, Document, models } from "mongoose";
import { RACE_MODEL_NAME, Race } from "./race";

const CYCLIST_MODEL_NAME: string = "Cyclist";

// Cyclist Schema
interface Cyclist0 {
  name: string;
  lastName: string;
  bornyear: number;
  gender: CyclistGender;
}

// Cyclist Schema
export interface Cyclist extends Cyclist0 {
  _id?: string;
}

interface ICyclist extends Cyclist0, Document {}

const CyclistSchema: Schema = new Schema({
  name: { type: String, required: true },
  lastName: { type: String, red: true },
  bornyear: { type: Number, required: true },
  gender: [{ type: String, required: true }],
});

export const CyclistModel =
  models.Cyclist || mongoose.model<ICyclist>(CYCLIST_MODEL_NAME, CyclistSchema);

enum CyclistGender {
  F = "F",
  M = "M",
}
