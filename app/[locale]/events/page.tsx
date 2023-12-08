import { EventsTable } from "@components/events-table/events-table";
import { getEvents } from "@services/get-events";
import { getTranslations } from "next-intl/server";

interface EventsPageProps {
  searchParams: {
    year: string | string[] | undefined;
  };
}

const EventsPage = async ({ searchParams }: EventsPageProps) => {
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
