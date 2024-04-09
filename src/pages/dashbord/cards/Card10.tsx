import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import { Box, Typography, useTheme } from "@mui/material";

const Card10 = () => {
  const { palette } = useTheme();
  return (
    <DashboardBox gridArea={"card10"}>
      <BoxHeader title="Overall Summery" sideText="+23%" />
      <Box
        height={"15px"}
        margin={"1.25rem 1rem 0.4rem 1rem"}
        bgcolor={palette.primary[800]}
        borderRadius={"1rem"}
      >
        <Box
          bgcolor={palette.primary[600]}
          borderRadius={"1rem"}
          height={"15px"}
          width={"40%"}
        ></Box>
      </Box>
      <Typography variant="h6" margin={"0rem 1rem"}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque magni
        iste qui totam facilis deserunt quos reiciendis ipsa nam tempora. Hic
        dicta veritatis illum tempora odio iste nisi laborum ipsam.
      </Typography>
    </DashboardBox>
  );
};

export default Card10;
