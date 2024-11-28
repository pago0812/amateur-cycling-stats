import { Cyclist } from "./cyclist";
import { RankingPoint } from "./rankingPoint";

const RESULT_MODEL_NAME: string = "Result";

export interface RaceResult {
  id: string;
  documentId: string;
  time: string;
  place: number;
  cyclist: Cyclist;
  rankingPoint: RankingPoint;
}
