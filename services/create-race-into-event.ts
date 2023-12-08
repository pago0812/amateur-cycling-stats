import { Event } from "@models/event";
import { Race } from "@models/race";

interface CreateRaceIntoEventParams {
  id: string;
  race: Race;
}

const createRaceIntoEvent = async (params: CreateRaceIntoEventParams) => {
  const newRaceResponse = await fetch(
    `${process.env.BASE_URL}/api/events/${params.id}/races`,
    {
      next: { revalidate: 0 },
      method: "POST",
      body: JSON.stringify(params.race),
    }
  );

  if (!newRaceResponse.ok) {
    throw newRaceResponse.statusText;
  }

  const race: Race = await newRaceResponse.json();
  return race;
};

export { createRaceIntoEvent };

/*
  useEffect(() => {
    console.log("Use Effect");
    fetch("/api/events", {
      method: "POST",
      body: JSON.stringify({
        name: "La etapa CDMX",
        year: 2023,
        date: new Date(),
        isPublicVisible: true,
      }),
    });
  }, []);*/
