import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery } from "@/state/api";
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

type Props = {};

const Card2 = (props: Props) => {
  const { data, isFetching, isLoading, isError, isSuccess } = useGetKpisQuery();
  const { palette } = useTheme();
  const revenueProfit = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ expenses, month, revenue }) => {
        return {
          name: month.substring(0, 3),
          revenue,
          profit: revenue - expenses,
        };
      })
    );
  }, [data]);
  return (
    <DashboardBox gridArea={"card2"}>
      <BoxHeader
        title="Profit vs Revenue"
        subtile="top line represent revenue, bottom line represent expenses"
        sideText="+4%"
      />
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={400}
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
            tickLine={false}
            axisLine={false}
            orientation="left"
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
          <Legend />
          <CartesianGrid vertical={false} stroke={palette.grey[800]} />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="profit"
            stroke={palette.tertiary[500]}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="revenue"
            stroke={palette.primary.main}
          />
        </LineChart>
      </ResponsiveContainer>
    </DashboardBox>
  );
};

export default Card2;
