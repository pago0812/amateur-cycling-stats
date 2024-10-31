import { Event } from "@models/event";
import { formatDateToMMDD } from "@utils/dates";
import { useTranslations } from "next-intl";

interface EventsTableProps {
  events: Event[];
}

const EventsTable = async ({ events }: EventsTableProps) => {
  const t = useTranslations();

  return (
    <table className="w-full text-left">
      <thead>
        <tr>
          <th>{t("date")}</th>
          <th>{t("event")}</th>
          <th className="hidden">{t("place")}</th>
        </tr>
      </thead>
      <tbody>
        {events?.map((event, i) => {
          return (
            <tr className="[&>td:not(:last-child)]:pr-1" key={i}>
              <td className="text-nowrap">
                {formatDateToMMDD(event.dateTime)}
              </td>
              <td>
                <a
                  className="hover:underline"
                  href={`/events/${event.documentId}`}
                >
                  {event.name}
                </a>
              </td>
              <td className="hidden">{event.state}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export { EventsTable };
