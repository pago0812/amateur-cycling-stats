import { RaceCategory } from "./race-category";
import { Event } from "./event";
import { RaceResult } from "./race-result";
import { RaceCategoryGender } from "./race-category-gender";
import { RaceCategoryLength } from "./race-category-length";

export const RACE_MODEL_NAME: string = "Race";

// Race Schema
export interface Race {
  id: string;
  documentId: string;
  name?: string;
  description?: string;
  raceCategory: RaceCategory;
  raceCategorygGender: RaceCategoryGender;
  raceCategoryLength: RaceCategoryLength;
  event: Event;
  raceResults: RaceResult[];
}
