import { SelectQueryParam } from "@components/select-query-param/select-query-param";
import { Typography } from "@mui/material";
import { getEventById } from "@services/get-event-by-id";
import { getTranslations } from "next-intl/server";

interface EventDetailPage {
  params: { id: string };
}

const EventDetailPage = async ({ params }: EventDetailPage) => {
  const t = await getTranslations();
  const event = await getEventById({ id: params?.id });

  const raceCategoryOptions = event.races?.map((race) => {
    return {
      t: race?.raceCategory?.name,
      value: race.raceCategory as unknown as string,
    };
  });

  return (
    <section >
      <Typography component='h2'>{event.name}</Typography>
      <SelectQueryParam
        name="race-category"
        title={t("raceCategory.label")}
        options={raceCategoryOptions}
      />
    </section>
  );
};

export default EventDetailPage;
