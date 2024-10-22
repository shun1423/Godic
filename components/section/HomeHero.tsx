// react
import * as React from "react";
// next
import { useRouter } from "next/router";
// @mui
import { Box, Typography, useTheme } from "@mui/material";
// custom components
import CenterBox from "components/common/CenterBox";
import TypingEffect from "components/common/TypingEffect";
import ScrollDown from "components/common/ScrollDown";
// type
interface HomeHeroProps {}

const HomeHero: React.FunctionComponent<HomeHeroProps> = (props) => {
  const {
    palette: { info },
  } = useTheme();
  const router = useRouter();

  return (
    <CenterBox flexDirection="column">
      <Typography component="p" variant="h5" color="text.secondary">
        고민은 덜고
      </Typography>
      <Typography component="h1" variant="h2" fontWeight="bold">
        공간은 채우다!
      </Typography>
      <Box color="text.secondary">
        <TypingEffect staticText="We are" text={["Gothic", "Artist"]} />
      </Box>
      <ScrollDown
        color={info.main}
        onClick={() => router.push("/#about")}
        sx={{
          bottom: "10%",
          cursor: "pointer",
          position: "absolute",
        }}
      />
    </CenterBox>
  );
};

export default HomeHero;
