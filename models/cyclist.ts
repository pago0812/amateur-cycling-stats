export const CYCLIST_MODEL_NAME: string = "Cyclist";

// Cyclist Schema
interface Cyclist0 {
  name: string;
  lastName: string;
  bornYear: number;
  gender: CyclistGender;
}

// Cyclist Schema
export interface Cyclist extends Cyclist0 {
  _id?: string;
}


enum CyclistGender {
  F = "F",
  M = "M",
}
