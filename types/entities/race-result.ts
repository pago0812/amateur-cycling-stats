import { Cyclist } from "@type-entities/cyclist";
import { Race } from "@type-entities/race";
import { RankingPoint } from "@type-entities/rankingPoint";

export interface RaceResult {
  id: string;
  documentId: string;
  time: string;
  place: number;
  cyclist: Cyclist;
  rankingPoint: RankingPoint;
  race?: Race;
}
