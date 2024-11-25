import { Event } from "@models/event";
import { dateStartOfYear, dateEndOfYear } from "@utils/dates";
import qs from "qs";

interface GetEventsParams {
  year?: string;
}


const getEvents = async (params: GetEventsParams) => {


  const startOfYear = dateStartOfYear(!isNaN(Number(params.year)) ? Number(params.year) : undefined)
  const endOfYear = dateEndOfYear(!isNaN(Number(params.year)) ? Number(params.year) : undefined)

  console.log(startOfYear)
  console.log(endOfYear)

  const query = {
    sort: 'dateTime:desc',
    filters: {
      $and: [
        {
          dateTime: {
            $gte: startOfYear,
          },
        },
        {
          dateTime: {
            $lte: endOfYear,
          },
        },
      ],
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
