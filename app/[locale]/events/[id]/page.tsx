import { Box, Typography } from "@mui/material";
import { getTranslations } from "next-intl/server";
import { SelectQueryParam } from "@components/common/select-query-param/select-query-param";
import { ResultsTable } from "@components/events/results-table/results-table";
import { getEventWithCategoriesById } from "@services/events";
import { getRaceWithResultsWithFilters } from "@services/races";

interface EventDetailPage {
  params: { id: string };
  searchParams: {
    category: string;
    gender: string;
    length: string;
  };
}

const EventDetailPage = async ({ params, searchParams }: EventDetailPage) => {
  const t = await getTranslations();
  const event = await getEventWithCategoriesById({ id: params?.id });

  const race = await getRaceWithResultsWithFilters({
    age:
      searchParams?.category ||
      event?.supportedRaceCategories?.[0].documentId ||
      "",
    length:
      searchParams?.length ||
      event?.supportedRaceCategoryLengths?.[0].documentId ||
      "",
    gender:
      searchParams?.gender ||
      event?.supportedRaceCategoryGenders?.[0].documentId ||
      "",
  });

  const raceCategoryAgeOptions = event.supportedRaceCategories?.map(
    (category) => ({
      t: t(`raceCategory.${category?.name}`),
      value: category.documentId,
    }),
  );
  const raceCategoryLengthOptions = event.supportedRaceCategoryLengths?.map(
    (category) => ({
      t: t(`raceCategoryLength.${category?.name}`),
      value: category.documentId,
    }),
  );
  const raceCategoryGenderOptions = event.supportedRaceCategoryGenders?.map(
    (category) => ({
      t: t(`raceCategoryGender.${category?.name}`),
      value: category.documentId,
    }),
  );

  return (
    <Box component="section">
      <Typography sx={{ mb: "32px" }} component="h2" variant="h5">
        {event.name}
      </Typography>
      <Box sx={{ mb: "16px", display: "flex", gap: "12px" }}>
        <SelectQueryParam
          name="category"
          title={t(`raceCategory.label`)}
          options={raceCategoryAgeOptions}
        />
        <SelectQueryParam
          name="gender"
          title={t(`raceCategoryGender.label`)}
          options={raceCategoryGenderOptions}
        />
        <SelectQueryParam
          name="length"
          title={t(`raceCategoryLength.label`)}
          options={raceCategoryLengthOptions}
        />
      </Box>
      <ResultsTable raceResults={race?.raceResults || []}></ResultsTable>
    </Box>
  );
};

export default EventDetailPage;
