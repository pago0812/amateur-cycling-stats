import { Cyclist } from "@entities/cyclist";
import { Race } from "@entities/race";
import { RankingPoint } from "@entities/rankingPoint";

export interface RaceResult {
  id: string;
  documentId: string;
  time: string;
  place: number;
  cyclist: Cyclist;
  rankingPoint: RankingPoint;
  race?: Race;
}
