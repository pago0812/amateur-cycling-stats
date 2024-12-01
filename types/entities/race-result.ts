import { Cyclist } from "@entities/cyclist";
import { Race } from "@entities/race";
import { RankingPoint } from "@entities/rankingPoint";

const RESULT_MODEL_NAME: string = "Result";

export interface RaceRecord {
  id: string;
  documentId: string;
  time: string;
  place: number;
  cyclist: Cyclist;
  rankingPoint: RankingPoint;
  race?: Race;
}
