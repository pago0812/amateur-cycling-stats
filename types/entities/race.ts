import { Event } from "@entities/event";
import { RaceRecord } from "@entities/race-result";
import { RaceCategory } from "@collections/race-category";
import { RaceCategoryGender } from "@collections/race-category-gender";
import { RaceCategoryLength } from "@collections/race-category-length";
import { RaceRanking } from "@collections/race-ranking";

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
  raceRecords: RaceRecord[];
}
