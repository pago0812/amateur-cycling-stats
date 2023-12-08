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
          <th className="w-[15%]">{t("date")}</th>
          <th className="w-[50%]">{t("event")}</th>
          <th className="w-[35%]">{t("place")}</th>
        </tr>
      </thead>
      <tbody>
        {events?.map((event, i) => {
          return (
            <tr key={i}>
              <td>{formatDateToMMDD(event.date)}</td>
              <td>
                <a className="hover:underline" href={`/events/${event._id}`}>
                  {event.name}
                </a>
              </td>
              <td>{event.state}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export { EventsTable };
