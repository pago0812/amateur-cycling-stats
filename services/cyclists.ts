import qs from "qs";
import { Cyclist } from "@type-entities/cyclist";

interface GetCyclistWithResultsByIdParams {
  id: string;
}

const getCyclistWithResultsById = async (
  params: GetCyclistWithResultsByIdParams,
) => {
  const query = {
    populate: {
      raceResults: {
        populate: {
          race: {
            populate: [
              "event",
              "raceCategory",
              "raceCategoryGender",
              "raceCategoryLength",
              "raceRanking",
            ],
          },
          rankingPoint: {
            fields: ["points"],
          },
        },
      },
    },
  };

  const queryString = qs.stringify(query);

  try {
    const cyclistResponse = await fetch(
      `${process.env.SERVICE_URL}/api/cyclists/${params.id}?${queryString}`,
      {
        next: { revalidate: 0 },
      },
    );
    if (!cyclistResponse.ok) {
      throw cyclistResponse.statusText;
    }

    const cyclist: Cyclist = (await cyclistResponse.json()).data;
    return cyclist;
  } catch (e) {
    throw e;
  }
};

export { getCyclistWithResultsById };
