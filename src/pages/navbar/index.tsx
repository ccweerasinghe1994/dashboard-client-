import FlexBetween from "@/components/FlexBetween";
import { Box, Typography, useTheme } from "@mui/material";
import PixIcon from "@mui/icons-material/Pix";
import { Link } from "react-router-dom";
import { useState } from "react";
type Props = {};

const NavBar = (props: Props) => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState<"dashboard" | "predictions">(
    "dashboard"
  );
  return (
    <FlexBetween mb={"0.25rem"} p={"0.5rem 0rem"} color={palette.grey[300]}>
      <FlexBetween gap={"0.75rem"}>
        <PixIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize={"16px"}>
          ARI Dashboard
        </Typography>
      </FlexBetween>
      <FlexBetween gap={"2rem"}>
        <Box
          sx={{
            "&:hover": { color: palette.primary[100] },
          }}
        >
          <Link
            to={"/dashboard"}
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Dashboard
          </Link>
        </Box>
        <Box
          sx={{
            "&:hover": { color: palette.primary[100] },
          }}
        >
          <Link
            to={"/predictions"}
            onClick={() => setSelected("predictions")}
            style={{
              color: selected === "predictions" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Predictions
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default NavBar;
