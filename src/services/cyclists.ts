import qs from "qs";
import { Cyclist } from "@type-entities/cyclists";

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

const createCyclist = async (cyclist: Cyclist) => {
  const createCyclistResponse = await fetch(
    `${process.env.SERVICE_URL}/api/cyclists`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(cyclist),
    },
  );

  if (!createCyclistResponse.ok) {
    throw createCyclistResponse.statusText;
  }

  return createCyclistResponse.json();
};

export { getCyclistWithResultsById, createCyclist };
