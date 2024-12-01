import { CyclistGender } from "@collections/cyclist-gender";
import { RaceRecord } from "@entities/race-result";

export interface Cyclist {
  id: string;
  documentId: string;
  name: string;
  lastName: string;
  bornYear: number;
  gender: CyclistGender;
  raceRecords?: RaceRecord[];
}
