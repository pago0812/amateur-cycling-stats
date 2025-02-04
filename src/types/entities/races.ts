import { Event } from "@type-entities/events";
import { RaceResult } from "@type-entities/race-results";
import { RaceCategory } from "@type-collections/race-category";
import { RaceCategoryGender } from "@type-collections/race-category-gender";
import { RaceCategoryLength } from "@type-collections/race-category-length";
import { RaceRanking } from "@type-collections/race-ranking";

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
