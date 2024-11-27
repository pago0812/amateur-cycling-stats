import { RaceCategory } from "./race-category";
import { Event } from "./event";
import { RaceResult } from "./race-result";


export const RACE_MODEL_NAME: string = "Race";

// Race Schema
export interface Race {
  id: string;
  documentId: string;
  name?: string;
  description?: string;
  raceCategory: RaceCategory;
  event: Event
  raceResults: RaceResult[]
}
