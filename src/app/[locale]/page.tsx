import { Box } from "@mui/material";
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
    </Box>
  );
}
