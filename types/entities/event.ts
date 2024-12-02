import { RaceCategory } from "@collections/race-category";
import { RaceCategoryGender } from "@collections//race-category-gender";
import { RaceCategoryLength } from "@collections//race-category-length";
import { Race } from "@entities/race";

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
