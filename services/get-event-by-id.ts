import { Event } from "@models/event";

interface GetEventByIdParams {
  id: string;
}

const getEventById = async (params: GetEventByIdParams) => {
  const eventResponse = await fetch(
    `${process.env.BASE_URL}/api/events/${params.id}`,
    {
      next: { revalidate: 0 },
    }
  );

  if (!eventResponse.ok) {
    throw eventResponse.statusText;
  }

  const event: Event = await eventResponse.json();
  return event;
};

export { getEventById };