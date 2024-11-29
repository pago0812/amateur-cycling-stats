import { RaceCategory } from "./race-category";
import { RaceCategoryGender } from "./race-category-gender";
import { RaceCategoryLength } from "./race-category-length";
import { Race } from "./race";

const EVENT_MODEL_NAME: string = "Event";

// Event Schema
export interface Event {
  id: string;
  documentId: string;
  name: string;
  description?: string;
  dateTime: Date;
  year: number;
  country: string;
  state: string;
  city?: string;
  isPublicVisible: boolean;
  races: Race[];
  supportedRaceCategories: RaceCategory[];
  supportedRaceCategoryGenders: RaceCategoryGender[];
  supportedRaceCategoryLengths: RaceCategoryLength[];
}
