import qs from "qs";
import { RaceResult } from "@type-entities/race-results";

interface GetRaceResultsByRaceIdParams {
  id: string;
}

export const getRaceResultsByRaceId = async ({
  id,
}: GetRaceResultsByRaceIdParams) => {
  const query = {
    filters: {
      race: {
        documentId: id,
      },
    },
    sort: "place",
    populate: ["cyclist", "rankingPoint"],
  };

  const queryString = qs.stringify(query);

  try {
    const raceResultsResponse = await fetch(
      `${process.env.SERVICE_URL}/api/race-results?${queryString}`,
      {
        next: { revalidate: 0 },
      },
    );
    if (!raceResultsResponse.ok) {
      throw raceResultsResponse.statusText;
    }

    const raceResults: RaceResult[] = (await raceResultsResponse.json()).data;
    return raceResults;
  } catch (e) {
    throw e;
  }
};
