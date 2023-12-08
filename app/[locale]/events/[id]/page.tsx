import { SelectQueryParam } from "@components/select-query-param/select-query-param";
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
      t: t(`raceCategory.${race.raceCategory}`),
      value: race.raceCategory,
    };
  });

  return (
    <section className="mx-8">
      <h2 className="text-2xl">{event.name}</h2>
      <SelectQueryParam
        name="race-category"
        title={t("raceCategory.label")}
        options={raceCategoryOptions}
      />
    </section>
  );
};

export default EventDetailPage;
