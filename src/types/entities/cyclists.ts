import { CyclistGender } from "@type-collections/cyclist-gender";
import { RaceResult } from "@type-entities/race-results";

export interface Cyclist {
  id: string;
  documentId: string;
  name: string;
  lastName: string;
  bornYear: number;
  gender: CyclistGender;
  raceResults?: RaceResult[];
}
