import { Box, Button } from "@mui/material";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();

  return (
    <Box
      component="section"
      sx={{
        paddingX: { xs: "8px", sm: "16px", md: "24px", lg: "32px" },
        paddingY: { xs: "16px", sm: "24px", md: "32px", lg: "40px" },
      }}
    >
      <p>Home</p>
      <Button color="primary" variant="contained">
        Primary contained
      </Button>
      <Button color="primary" variant="outlined">
        Primary outlined
      </Button>
      <Button color="secondary" variant="contained">
        Secondary contained
      </Button>
      <Button color="secondary" variant="outlined">
        Secondary outlined
      </Button>
      <Button color="error" variant="contained">
        Error contained
      </Button>
      <Button color="error" variant="outlined">
        Error outlined
      </Button>
    </Box>
  );
}
