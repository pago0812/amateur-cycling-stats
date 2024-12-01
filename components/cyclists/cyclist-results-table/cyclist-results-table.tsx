import { useTranslations } from "next-intl";
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
import { RaceRecord } from "@entities/race-result";
import { formatDateToMMDD } from "@utils/dates";

interface CylistResultsTableProps {
  raceRecords: RaceRecord[];
}

const CyclistResultsTable = ({ raceRecords }: CylistResultsTableProps) => {
  const t = useTranslations();

  const getEventUrl = (result: RaceRecord) => {
    return `/events/${result?.race?.event?.documentId}?category=${
      result?.race?.raceCategory?.documentId
    }&gender=${result?.race?.raceCategoryGender?.documentId}&length=${
      result?.race?.raceCategoryLength?.documentId
    }`;
  };

  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>{t("date")}</TableCell>
            <TableCell>{t("place")}</TableCell>
            <TableCell>{t("race")}</TableCell>
            <TableCell>{t("length")}</TableCell>
            <TableCell>{t("ranking")}</TableCell>
            <TableCell>{t("category")}</TableCell>
            <TableCell>{t("points")}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {raceRecords.map((result) => (
            <TableRow
              key={result.documentId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th">
                {formatDateToMMDD(result.race?.dateTime)}
              </TableCell>
              <TableCell component="th">{result.place}</TableCell>
              <TableCell component="th">
                <Link underline="none" color="black" href={getEventUrl(result)}>
                  {result?.race?.event?.name}
                </Link>
              </TableCell>
              <TableCell component="th">
                {result.race?.raceCategoryLength?.name
                  ? t(
                      `raceCategoryLength.${result.race?.raceCategoryLength.name}`,
                    )
                  : undefined}
              </TableCell>
              <TableCell component="th">
                {result.race?.raceRanking.name}
              </TableCell>
              <TableCell component="th">
                {result.race?.raceCategory?.name
                  ? t(`raceCategory.${result.race?.raceCategory?.name}`)
                  : undefined}
              </TableCell>
              <TableCell component="th">
                {result.rankingPoint?.points}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export { CyclistResultsTable };
