import { RaceResult } from "./race-result";

export interface Cyclist {
  id: string;
  documentId: string;
  name: string;
  lastName: string;
  bornYear: number;
  gender: CyclistGender;
  raceResults?: RaceResult[];
}

enum CyclistGender {
  F = "F",
  M = "M",
}
