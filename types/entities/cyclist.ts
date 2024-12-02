import { CyclistGender } from "@collections/cyclist-gender";
import { RaceResult } from "@entities/race-result";

export interface Cyclist {
  id: string;
  documentId: string;
  name: string;
  lastName: string;
  bornYear: number;
  gender: CyclistGender;
  raceResults?: RaceResult[];
}
