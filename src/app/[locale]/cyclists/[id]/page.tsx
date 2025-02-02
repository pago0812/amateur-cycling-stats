import { Box, Typography } from "@mui/material";
import { CyclistResultsTable } from "src/components/cyclists/cyclist-results-table/cyclist-results-table";
import { getCyclistWithResultsById } from "src/services/cyclists";

interface CyclistDetailPage {
  params: { id: string };
}

const CyclistDetailPage = async ({ params }: CyclistDetailPage) => {
  const cyclist = await getCyclistWithResultsById({ id: params.id });

  return (
    <Box
      component="section"
      sx={{
        paddingX: { xs: "8px", sm: "16px", md: "24px", lg: "32px" },
        paddingY: { xs: "16px", sm: "24px", md: "32px", lg: "40px" },
      }}
    >
      <Typography sx={{ mb: "32px" }} component="h2" variant="h3">
        {cyclist.name} {cyclist.lastName}
      </Typography>
      <CyclistResultsTable raceResults={cyclist.raceResults || []} />
    </Box>
  );
};

export default CyclistDetailPage;
