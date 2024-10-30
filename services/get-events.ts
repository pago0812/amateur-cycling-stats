import { Event } from "@models/event";

interface GetEventsParams {
  year?: string | string[];
}

const validateYear = (paramYear: string | string[] | undefined) => {
  const tmpYear = parseInt(
    paramYear ? (Array.isArray(paramYear) ? paramYear[0] : paramYear) : ""
  );
  return isNaN(tmpYear)
    ? new Date().getFullYear().toString()
    : tmpYear.toString();
};

const getEvents = async (params: GetEventsParams) => {
  const eventResponse = await fetch(`${process.env.SERVICE_URL}/api/events`, {
    next: { revalidate: 0 },
  });

  if (!eventResponse.ok) {
    throw eventResponse.statusText;
  }

  const events: Event[] = (await eventResponse.json()).data;

  return events;
};

export { getEvents };
