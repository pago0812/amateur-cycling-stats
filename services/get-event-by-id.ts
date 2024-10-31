import { Event } from "@models/event";
import qs from "qs";

interface GetEventByIdParams {
  id: string;
}

const getEventById = async (params: GetEventByIdParams) => {
  const query = {
    populate: {
      races: {
        populate: "raceCategory",
      },
    },
  };

  const queryString = qs.stringify(query);

  try {
    const eventResponse = await fetch(
      `${process.env.SERVICE_URL}/api/events/${params.id}?${queryString}`,
      {
        next: { revalidate: 0 },
      }
    );
    if (!eventResponse.ok) {
      throw eventResponse.statusText;
    }

    const event: Event = (await eventResponse.json()).data;
    return event;
  } catch (e) {
    throw e;
  }
};

export { getEventById };
