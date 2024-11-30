import { RaceCategory } from "./race-category";
import { Event } from "./event";
import { RaceResult } from "./race-result";
import { RaceCategoryGender } from "./race-category-gender";
import { RaceCategoryLength } from "./race-category-length";
import { RaceRanking } from "./race-ranking";

export const RACE_MODEL_NAME: string = "Race";

// Race Schema
export interface Race {
  id: string;
  documentId: string;
  description?: string;
  event?: Event;
  dateTime: Date;
  name?: string;
  raceCategory: RaceCategory;
  raceCategoryGender: RaceCategoryGender;
  raceCategoryLength: RaceCategoryLength;
  raceRanking: RaceRanking;
  raceResults: RaceResult[];
}
