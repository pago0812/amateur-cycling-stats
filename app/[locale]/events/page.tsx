import { EventsTable } from "@components/events-table/events-table";
import { SelectQueryParam } from "@components/select-query-param/select-query-param";
import { Box, Typography } from "@mui/material";
import { getEvents } from "@services/get-events";
import { getTranslations } from "next-intl/server";

interface EventsPageProps {
  searchParams: {
    year?: string;
  };
}

const EventsPage = async ({ searchParams }: EventsPageProps) => {
  const t = await getTranslations();
  const events = await getEvents({ year: searchParams?.year });

  return (
    <section className="">
      <Typography sx={{ mb: '32px' }} component='h1' variant="h5">{t("events")}</Typography>
      <Box sx={{ mb: '16px' }}>
        <SelectQueryParam
          title={t("year")}
          name="year"
          options={[
            { value: "2024", t: "2024" },
            { value: "2023", t: "2023" },
            { value: "2022", t: "2022" },
            { value: "2021", t: "2021" },
            { value: "2020", t: "2020" },
          ]}
        />
      </Box>
      <EventsTable events={events} />
    </section>
  );
};

export default EventsPage;
