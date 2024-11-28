import { Race } from "@models/race";
import qs from "qs";

interface GetRaceByIdParams {
  id: string;
}

export const getRaceById = async (params: GetRaceByIdParams) => {
  const query = {
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
      `${process.env.SERVICE_URL}/api/races/${params.id}?${queryString}`,
      {
        next: { revalidate: 0 },
      },
    );
    if (!raceResponse.ok) {
      throw raceResponse.statusText;
    }

    const race: Race = (await raceResponse.json()).data;
    return race;
  } catch (e) {
    throw e;
  }
};
