import { EventsTable } from "@components/events-table/events-table";
import { getEvents } from "@services/get-events";
import { getTranslations } from "next-intl/server";

const EventsPage = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const t = await getTranslations();
  const events = await getEvents({ year: searchParams?.year });

  return (
    <section className="mx-8">
      <h2 className="text-2xl">{t("events")}</h2>
      <EventsTable events={events} />
    </section>
  );
};

export default EventsPage;

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
