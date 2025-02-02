import { RaceRanking } from "@type-collections/race-ranking";

export interface RankingPoint {
  id: string;
  documentId: string;
  points: number;
  place: number;
  raceRanking: RaceRanking;
}
