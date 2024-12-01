import { Box, Button } from "@mui/material";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();

  return (
    <Box>
      <p>Home</p>
      <Button color="primary" variant="contained">
        Primary
      </Button>
      <Button color="primary" variant="outlined">
        Primary
      </Button>
      <Button color="secondary">Primary</Button>
      <Button color="error">Primary</Button>
    </Box>
  );
}
