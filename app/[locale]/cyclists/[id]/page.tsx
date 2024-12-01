import { Box, Typography } from "@mui/material";
import { CyclistResultsTable } from "@components/cyclists/cyclist-results-table/cyclist-results-table";
import { getCyclistWithResultsById } from "@services/cyclists";

interface CyclistDetailPage {
  params: { id: string };
}

const CyclistDetailPage = async ({ params }: CyclistDetailPage) => {
  const cyclist = await getCyclistWithResultsById({ id: params.id });

  return (
    <Box component="section">
      <Typography sx={{ mb: "32px" }} component="h2" variant="h5">
        {cyclist.name} {cyclist.lastName}
      </Typography>
      <CyclistResultsTable raceRecords={cyclist.raceRecords || []} />
    </Box>
  );
};

export default CyclistDetailPage;
