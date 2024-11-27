import { Event } from "@models/event";
import { RaceResult } from "@models/race-result";
import {
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useTranslations } from "next-intl";

interface EventsTableProps {
  raceResults: RaceResult[];
}

const ResultsTable = ({ raceResults }: EventsTableProps) => {
  const t = useTranslations();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{t("place")}</TableCell>
            <TableCell>{t("name")}</TableCell>
            <TableCell>{t("lastName")}</TableCell>
            <TableCell>{t("time")}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {raceResults.map((result) => (
            <TableRow
              key={result.documentId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th">{result.place}</TableCell>
              <TableCell component="th">{result.cyclist.name}</TableCell>
              <TableCell component="th">{result.cyclist.lastName}</TableCell>
              <TableCell component="th">{result.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export { ResultsTable };
