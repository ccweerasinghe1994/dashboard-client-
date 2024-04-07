import DashboardBox from "@/components/DashboardBox";
import { Box, useMediaQuery } from "@mui/material";
import Card1 from "./cards/Card1";
import Card5 from "./cards/Card5";
import Card4 from "./cards/Card4";
import Card3 from "./cards/Card3";
import Card2 from "./cards/Card2";
import Card6 from "./cards/Card6";
import Card7 from "./cards/Card7";
import Card8 from "./cards/Card8";
import Card9 from "./cards/Card9";
import Card10 from "./cards/Card10";

type Props = {};

const gridTemplate = `
    "card1 card2 card3"
    "card1 card2 card3"
    "card1 card2 card3"
    "card1 card2 card6"
    "card4 card5 card6"
    "card4 card5 card6"
    "card4 card8 card9"
    "card7 card8 card9"
    "card7 card8 card10"
    "card7 card8 card10"
`;
const gridTemplateSmallerScreens = `
    "card1"
    "card1"
    "card1"
    "card1"
    "card2"
    "card2"
    "card2"
    "card3"
    "card3"
    "card3"
    "card4"
    "card4"
    "card4"
    "card5"
    "card5"
    "card6"
    "card6"
    "card6"
    "card7"
    "card7"
    "card7"
    "card8"
    "card8"
    "card8"
    "card8"
    "card9"
    "card9"
    "card10"
    "card10"
`;

const DashboardPage = (props: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1200px)");

  return (
    <Box
      width={"100%"}
      height={"100%"}
      display={"grid"}
      gap={"1.5rem"}
      sx={
        isAboveMediumScreens
          ? {
              gridTemplateColumns: "repeat(3,minmax(370px,1fr))",
              gridTemplateRows: "repeat(10,minmax(60px,1fr))",
              gridTemplateAreas: gridTemplate,
            }
          : {
              gridAutoColumns: "1fr",
              gridAutoRows: "80px",
              gridTemplateAreas: gridTemplateSmallerScreens,
            }
      }
    >
      <Card1></Card1>
      <Card2></Card2>
      <Card3></Card3>
      <Card4></Card4>
      <Card4></Card4>
      <Card5></Card5>
      <Card6></Card6>
      <Card7></Card7>
      <Card8></Card8>
      <Card9></Card9>
      <Card10></Card10>
    </Box>
  );
};

export default DashboardPage;
