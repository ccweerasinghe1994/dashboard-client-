import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery } from "@/state/api";
import React from "react";

type Props = {};

const Card1 = (props: Props) => {
  const { data } = useGetKpisQuery();
  return <DashboardBox gridArea={"card1"}></DashboardBox>;
};

export default Card1;
