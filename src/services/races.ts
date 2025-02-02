import qs from "qs";
import { Race } from "@type-entities/race";

interface GetRaceWithFiltersParams {
  age: string;
  length: string;
  gender: string;
}

export const getRaceWithResultsWithFilters = async (
  params: GetRaceWithFiltersParams,
) => {
  const query = {
    filters: {
      raceCategory: {
        documentId: params.age,
      },
      raceCategoryGender: {
        documentId: params.gender,
      },
      raceCategoryLength: {
        documentId: params.length,
      },
    },
    populate: {
      raceResults: {
        sort: "place",
        populate: ["cyclist", "rankingPoint"],
      },
    },
  };

  const queryString = qs.stringify(query);

  try {
    const raceResponse = await fetch(
      `${process.env.SERVICE_URL}/api/races?${queryString}`,
      {
        next: { revalidate: 0 },
      },
    );
    if (!raceResponse.ok) {
      throw raceResponse.statusText;
    }

    const races: Race[] = (await raceResponse.json()).data;
    return races[0];
  } catch (e) {
    throw e;
  }
};
