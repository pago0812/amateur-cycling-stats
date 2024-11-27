import { SelectQueryParam } from "@components/common/select-query-param/select-query-param";
import { ResultsTable } from "@components/events/results-table/results-table";
import { Box, Typography } from "@mui/material";
import { getEventById } from "@services/events";
import { getRaceById } from "@services/races";
import { getTranslations } from "next-intl/server";

interface EventDetailPage {
  params: { id: string };
  searchParams: {
    race: string;
  };
}

const EventDetailPage = async ({ params, searchParams }: EventDetailPage) => {
  const t = await getTranslations();
  const event = await getEventById({ id: params?.id });

  const race = await getRaceById({
    id: searchParams?.race || event?.races?.[0].documentId || "",
  });

  const raceCategoryOptions = event.races?.map((race) => {
    return {
      t: race?.raceCategory?.name,
      value: race.documentId as unknown as string,
    };
  });

  return (
    <Box component="section">
      <Typography sx={{ mb: "32px" }} component="h2" variant="h5">
        {event.name}
      </Typography>
      <Box sx={{ mb: "16px" }}>
        <SelectQueryParam
          name="race"
          title={t("raceCategory.label")}
          options={raceCategoryOptions}
        />
      </Box>
      <ResultsTable raceResults={race.raceResults}></ResultsTable>
    </Box>
  );
};

export default EventDetailPage;
