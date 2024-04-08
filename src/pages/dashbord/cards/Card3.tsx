import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery } from "@/state/api";
import { useTheme } from "@mui/material";
import { useMemo } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Card3 = () => {
  const { data } = useGetKpisQuery();
  const { palette } = useTheme();
  const revenue = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue }) => {
        return {
          month: month.substring(0, 3),
          revenue,
        };
      })
    );
  }, [data]);
  return (
    <DashboardBox gridArea={"card3"}>
      <BoxHeader
        title="Revenue Month By Mont"
        subtile="graph representing monthly revenue"
        sideText="+4%"
      />
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={revenue}
          margin={{
            top: 17,
            right: 15,
            left: 0,
            bottom: 58,
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
          </defs>
          <CartesianGrid vertical={false} stroke={palette.grey[800]} />
          <XAxis
            axisLine={false}
            tickLine={false}
            style={{ fontSize: "10px" }}
            dataKey="month"
          />
          <YAxis />
          <Tooltip />

          <Bar
            dataKey="revenue"
            fill="url(#colorRevenue)"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </DashboardBox>
  );
};

export default Card3;
