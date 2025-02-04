import { RaceCategory } from "@type-collections/race-category";
import { RaceCategoryGender } from "@type-collections//race-category-gender";
import { RaceCategoryLength } from "@type-collections//race-category-length";
import { Race } from "@type-entities/races";

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
