import { Event } from "@models/event";
import { Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { formatDateToMMDD } from "@utils/dates";
import { useTranslations } from "next-intl";

interface EventsTableProps {
  events: Event[];
}

const EventsTable = ({ events }: EventsTableProps) => {
  const t = useTranslations();

  return <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>{t("date")}</TableCell>
          <TableCell>{t("event")}</TableCell>
          <TableCell>{t("place")}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {events.map((event) => (
          <TableRow
            key={event.documentId}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th">{formatDateToMMDD(event.dateTime)}</TableCell>
            <TableCell component="th">
              <Link underline="none" color="black" href={`/events/${event.documentId}`}>{event.name}</Link>
            </TableCell>
            <TableCell component="th">{event.state}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
};

export { EventsTable };
