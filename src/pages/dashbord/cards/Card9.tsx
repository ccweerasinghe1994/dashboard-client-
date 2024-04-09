import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import FlexBetween from "@/components/FlexBetween";
import { useGetKpisQuery } from "@/state/api";

import { Box, Typography, useTheme } from "@mui/material";
import { useMemo } from "react";
import { Cell, Pie, PieChart } from "recharts";

const Card9 = () => {
  const { palette } = useTheme();
  const { data: kpiData } = useGetKpisQuery();
  const revenueProfit = useMemo(() => {
    if (kpiData) {
      const totalExpenses = kpiData[0].totalExpenses;

      return Object.entries(kpiData[0].expensesByCategory).map(
        ([key, value]) => {
          return [
            {
              name: key,
              value,
            },
            {
              name: `${key} of Total`,
              value: totalExpenses - value,
            },
          ];
        }
      );
    }
  }, [kpiData]);

  console.log("🚀 ~ revenueProfit ~ revenueProfit:", revenueProfit);
  const pieColors = [palette.primary[800], palette.primary[300]];
  return (
    <DashboardBox gridArea={"card9"}>
      <BoxHeader title="Expense Breakdown By Category" sideText="+4%" />
      <FlexBetween
        mt={"0.2rem"}
        gap={"0.5rem"}
        p={"0 1rem"}
        textAlign={"center"}
      >
        {revenueProfit &&
          revenueProfit.map((pieData, i) => (
            <Box key={`${pieData[0].name}-${i}`}>
              <PieChart width={100} height={80}>
                <Pie
                  stroke={"none"}
                  data={pieData}
                  innerRadius={18}
                  outerRadius={35}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={pieColors[index]} />
                  ))}
                </Pie>
              </PieChart>
              <Typography variant="h5">{pieData[0].name}</Typography>
            </Box>
          ))}
      </FlexBetween>
    </DashboardBox>
  );
};

export default Card9;
