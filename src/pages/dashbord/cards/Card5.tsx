import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import FlexBetween from "@/components/FlexBetween";
import { Box, Typography, useTheme } from "@mui/material";
import { Cell, Pie, PieChart } from "recharts";

const pieData = [
  {
    name: "Routed Orders",
    value: 600,
  },
  {
    name: "Pre Routed Orders",
    value: 200,
  },
];

const Card5 = () => {
  const { palette } = useTheme();
  const pieColors = [palette.primary[800], palette.primary[300]];
  return (
    <DashboardBox gridArea={"card5"}>
      <BoxHeader title="Pre vs Routed Orders" sideText="+45%" />
      <FlexBetween mt={"0.25rem"} gap={"1.25rem"} pr={"1rem"}>
        <PieChart
          width={110}
          height={100}
          margin={{
            top: 0,
            right: -10,
            left: 10,
            bottom: 0,
          }}
        >
          <Pie
            stroke={"none"}
            data={pieData}
            innerRadius={18}
            outerRadius={38}
            paddingAngle={2}
            fill="#8884d8"
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={pieColors[index]} />
            ))}
          </Pie>
        </PieChart>
        <Box ml={"-0.7rem"} flexBasis={"40%"} textAlign={"center"}>
          <Typography variant="h5">Routed Orders</Typography>
          <Typography m={"0.3rem"} variant="h3" color={palette.primary[800]}>
            600
          </Typography>
          <Typography variant="h6">Total Route Summery details</Typography>
        </Box>
        <Box ml={"-0.7rem"} flexBasis={"40%"} textAlign={"center"}>
          <Typography variant="h5">Pre Routed Orders</Typography>
          <Typography m={"0.3rem"} variant="h3" color={palette.primary[300]}>
            200
          </Typography>
          <Typography variant="h6">Total Route Summery details</Typography>
        </Box>
      </FlexBetween>
    </DashboardBox>
  );
};

export default Card5;
