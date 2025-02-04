import { Cyclist } from "@type-entities/cyclists";
import { Race } from "@type-entities/races";
import { RankingPoint } from "@type-entities/rankingPoints";

export interface RaceResult {
  id: string;
  documentId: string;
  time: string;
  place: number;
  cyclist: Cyclist;
  rankingPoint: RankingPoint;
  race?: Race;
}
