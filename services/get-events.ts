import { Event } from "@models/event";
import qs from "qs";

interface GetEventsParams {
  year?: string;
}


const getEvents = async (params: GetEventsParams) => {
  const queryYear = !isNaN(Number(params.year)) ? Number(params.year) : (new Date()).getFullYear()

  const query = {
    sort: 'dateTime:desc',
    filters: {
      year: {
        $eq: queryYear,
      }
    }
  };

  const queryString = qs.stringify(query);

  const eventResponse = await fetch(`${process.env.SERVICE_URL}/api/events?${queryString}`, {
    next: { revalidate: 0 },
  });

  if (!eventResponse.ok) {
    throw eventResponse.statusText;
  }

  const events: Event[] = (await eventResponse.json()).data;

  return events;
};

export { getEvents };
