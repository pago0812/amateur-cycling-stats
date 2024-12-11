import { Box, Typography } from "@mui/material";
import { getTranslations } from "next-intl/server";
import { EventsTable } from "@components/events/events-table/events-table";
import { SelectQueryParam } from "@components/common/select-query-param/select-query-param";
import { getEventsByYear } from "@services/events";

interface EventsPageProps {
  searchParams: {
    year?: string;
  };
}

const EventsPage = async ({ searchParams }: EventsPageProps) => {
  const t = await getTranslations();
  const events = await getEventsByYear({ year: searchParams?.year });

  return (
    <Box component="section">
      <Typography sx={{ mb: "32px" }} component="h2" variant="h3">
        {t("events")}
      </Typography>
      <Box sx={{ mb: "16px", display: "flex", gap: "16px" }}>
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
    </Box>
  );
};

export default EventsPage;
