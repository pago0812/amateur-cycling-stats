import { Cyclist } from "./cyclist";

const RESULT_MODEL_NAME: string = "Result";

export interface RaceResult {
  id: string;
  documentId: string;
  time: string;
  place: number;
  cyclist: Cyclist;
}
