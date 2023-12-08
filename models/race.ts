import mongoose, { Schema, Document, models } from "mongoose";

export const RACE_MODEL_NAME: string = "Race";

// Race Schema
interface Race0 {
  name?: string;
  description?: string;
  raceCategory: RaceCategory;
  isPublicVisible: boolean;
}

// Race Schema
export interface Race extends Race0 {
  _id?: string;
}

interface IRace extends Race0, Document {}

const RaceSchema: Schema = new Schema({
  name: { type: String },
  description: { type: String },
  raceCategory: { type: String, required: true },
  isPublicVisible: { type: Boolean, required: true },
});

export const RaceModel =
  models.Race || mongoose.model<IRace>(RACE_MODEL_NAME, RaceSchema);

export enum RaceCategory {
  F = "F",
  F_JUNIOR = "F_JUNIOR",
  F_YOUTH_A = "F_YOUTH_A",
  F_YOUTH_B = "F_YOUTH_B",
  F_YOUTH_C = "F_YOUTH_C",
  F_SUB_23 = "F_SUB_23",
  F_ELITE = "F_ELITE",
  F_18_30 = "F_18_30",
  F_MA_31_35 = "F_MA_31_35",
  F_MA_36_40 = "F_MA_36_40",
  F_MA_31_40 = "F_MA_31_40",
  F_MA_41_45 = "F_MA_41_45",
  F_MA_46_50 = "F_MA_46_50",
  F_MA_41_50 = "F_MA_41_50",
  F_MA_51_55 = "F_MA_51_55",
  F_MA_56_60 = "F_MA_56_60",
  F_MA_51_60 = "F_MA_51_60",
  F_MA_61_65 = "F_MA_61_65",
  F_MA_66_70 = "F_MA_66_70",
  F_MA_61_70 = "F_MA_61_70",
  F_MA_A = "F_MA_A",
  F_MA_B = "F_MA_B",
  F_MA_C = "F_MA_C",
  F_MA_D = "F_MA_D",

  M = "M",
  M_JUNIOR = "M_JUNIOR",
  M_YOUTH_A = "M_YOUTH_A",
  M_YOUTH_B = "M_YOUTH_B",
  M_YOUTH_C = "M_YOUTH_C",
  M_SUB_23 = "M_SUB_23",
  M_ELITE = "M_ELITE",
  M_18_30 = "M_18_30",
  M_MA_31_35 = "M_MA_31_35",
  M_MA_36_40 = "M_MA_36_40",
  M_MA_31_40 = "M_MA_36_40",
  M_MA_41_45 = "M_MA_41_45",
  M_MA_46_50 = "M_MA_46_50",
  M_MA_41_50 = "M_MA_41_50",
  M_MA_51_55 = "M_MA_51_55",
  M_MA_56_60 = "M_MA_56_60",
  M_MA_51_60 = "M_MA_51_60",
  M_MA_61_65 = "M_MA_61_65",
  M_MA_66_70 = "M_MA_66_70",
  M_MA_61_70 = "M_MA_61_70",
  M_MA_A = "M_MA_A",
  M_MA_B = "M_MA_B",
  M_MA_C = "M_MA_C",
  M_MA_D = "M_MA_D",
}
