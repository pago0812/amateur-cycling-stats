import mongoose, { Schema, Document, models } from "mongoose";
import { RACE_MODEL_NAME } from "./race";
import { CYCLIST_MODEL_NAME } from "./cyclist";

const RESULT_MODEL_NAME: string = "Result";

// Result Schema
interface Result {
  time: string;
  place: number;
  classificationType: ClassificationType;
}

enum ClassificationType {
  GENERAL = "GENERAL",
  MOUNTAIN = "MOUNTAIN",
  SPRINT = "SPRINT",
  STAGE = "STAGE",
}
