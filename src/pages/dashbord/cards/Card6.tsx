import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import { useGetProductsQuery, useGetKpisQuery } from "@/state/api";
import { Palette } from "@mui/icons-material";
import { useTheme } from "@mui/material";
import React, { useMemo } from "react";
import {
  ScatterChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Scatter,
  ResponsiveContainer,
  ZAxis,
} from "recharts";

type Props = {};

const Card6 = (props: Props) => {
  const { data: productData } = useGetProductsQuery();
  const { data: kpiData } = useGetKpisQuery();
  const revenueProfit = useMemo(() => {
    return (
      productData &&
      productData.map(({ expense, price, _id }) => {
        return {
          id: _id,
          price,
          expense,
        };
      })
    );
  }, [productData]);
  const { palette } = useTheme();
  return (
    <DashboardBox gridArea={"card6"}>
      <BoxHeader title="Product prices vs expenses" sideText="22%" />
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart
          margin={{
            top: 20,
            right: 25,
            bottom: 40,
            left: -10,
          }}
        >
          <CartesianGrid stroke={palette.grey[800]} />
          <XAxis
            type="number"
            dataKey="price"
            name="price"
            unit="$"
            axisLine={false}
            tickLine={false}
            style={{
              fontSize: "10px",
            }}
            tickFormatter={(v) => `$${v}`}
          />
          <YAxis
            type="number"
            dataKey="expense"
            name="expense"
            unit="$"
            axisLine={false}
            tickLine={false}
            style={{
              fontSize: "10px",
            }}
            tickFormatter={(v) => `$${v}`}
          />
          <ZAxis type="number" range={[20]} />
          <Tooltip
            formatter={(v) => `$${v}`}
            cursor={{ strokeDasharray: "3 3" }}
          />
          <Scatter
            name="Order Comparison"
            data={revenueProfit}
            fill={palette.tertiary[500]}
          />
        </ScatterChart>
      </ResponsiveContainer>
    </DashboardBox>
  );
};

export default Card6;
