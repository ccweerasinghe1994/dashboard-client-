import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery, useGetProductsQuery } from "@/state/api";
import { useTheme } from "@mui/material";
import { useMemo } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Card4 = () => {
  const { data: productData } = useGetProductsQuery();
  const { data: kpiData } = useGetKpisQuery();

  const { palette } = useTheme();
  const revenueProfit = useMemo(() => {
    return (
      kpiData &&
      kpiData[0].monthlyData.map(
        ({ month, operationalExpenses, nonOperationalExpenses }) => {
          return {
            name: month.substring(0, 3),
            "Operational Expences": operationalExpenses,
            "Non Operational Expenses": nonOperationalExpenses,
          };
        }
      )
    );
  }, [kpiData]);
  return (
    <DashboardBox gridArea={"card4"}>
      <BoxHeader
        title="Operational Vs non Operational Expenses"
        sideText="+14%"
      />
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={revenueProfit}
          margin={{
            top: 15,
            right: 25,
            left: -5,
            bottom: 60,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis
            dataKey="name"
            tickLine={false}
            style={{
              fontSize: "10px",
            }}
          />
          <YAxis
            yAxisId={"left"}
            orientation="left"
            tickLine={false}
            axisLine={false}
            style={{
              fontSize: "10px",
            }}
          />
          <YAxis
            orientation="right"
            yAxisId={"right"}
            tickLine={false}
            axisLine={false}
            style={{
              fontSize: "10px",
            }}
          />
          <Tooltip />
          <CartesianGrid vertical={false} stroke={palette.grey[800]} />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="Non Operational Expenses"
            stroke={palette.tertiary[500]}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="Operational Expences"
            stroke={palette.primary.main}
          />
        </LineChart>
      </ResponsiveContainer>
    </DashboardBox>
  );
};

export default Card4;
