import { EventsTable } from "@components/events-table/events-table";
import { SelectQueryParam } from "@components/select-query-param/select-query-param";
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
  console.log(events);
  return (
    <section className="">
      <h2 className="text-2xl">{t("events")}</h2>
      <SelectQueryParam
        title="Year"
        name="year"
        options={[
          { value: "2023", t: "2023" },
          { value: "2024", t: "2024" },
        ]}
      />
      <EventsTable events={events} />
    </section>
  );
};

export default EventsPage;
