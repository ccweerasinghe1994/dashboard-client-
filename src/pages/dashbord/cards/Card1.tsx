import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery } from "@/state/api";
import { useTheme } from "@mui/material";
import { useMemo } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type Props = {};

const Card1 = (props: Props) => {
  const { data, isFetching, isLoading, isError, isSuccess } = useGetKpisQuery();
  const { palette } = useTheme();
  const revenueExpenses = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ expenses, month, revenue }) => {
        return {
          name: month.substring(0, 3),
          revenue,
          expenses,
        };
      })
    );
  }, [data]);
  console.log("🚀 ~ revenueExpenses ~ revenueExpenses:", revenueExpenses);
  return (
    <DashboardBox gridArea={"card1"}>
      <BoxHeader
        title="Revenue vs Expenses"
        subtile="top line represent revenue, bottom line represent expenses"
        sideText="+4%"
      />
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={revenueExpenses}
          margin={{
            top: 15,
            right: 25,
            left: -5,
            bottom: 60,
          }}
        >
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={palette.primary[300]}
                stopOpacity={0.5}
              />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={palette.primary[300]}
                stopOpacity={0.5}
              />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis
            dataKey="name"
            tickLine={false}
            style={{
              fontSize: "10px",
            }}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            domain={[8000, 2265503]}
            style={{
              fontSize: "10px",
            }}
          />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke={palette.secondary.light}
            fill="url(#colorRevenue)"
            fillOpacity={"url(#colorRevenue)"}
            activeDot={{ r: 8 }}
          />
          <Area
            type="monotone"
            dataKey="expenses"
            fill={"url(#colorExpenses)"}
            stroke={palette.primary.main}
            fillOpacity={"url(#colorExpenses)"}
            activeDot={{ r: 8 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </DashboardBox>
  );
};

export default Card1;
