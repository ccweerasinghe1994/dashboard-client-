import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "./FlexBetween";
import { ReactNode } from "react";

type Props = {
  icon?: ReactNode;
  subtile?: string;
  title: string;
  sideText: string;
};

const BoxHeader = ({ title, icon, subtile, sideText }: Props) => {
  const { palette } = useTheme();
  return (
    <FlexBetween color={palette.grey[400]} margin={"1.5rem 1rem 0 1rem"}>
      <FlexBetween>
        {icon}
        <Box width={"100%"}>
          <Typography variant="h4" mb={"-0.1rem"}>
            {title}
          </Typography>
          <Typography variant="h6">{subtile}</Typography>
        </Box>
      </FlexBetween>
      <Typography
        variant="h5"
        fontWeight={"700"}
        color={palette.secondary[500]}
      >
        {sideText}
      </Typography>
    </FlexBetween>
  );
};

export default BoxHeader;
