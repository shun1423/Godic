import * as React from "react";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline, styled } from "@mui/material";
import dynamic from "next/dynamic";
import ComponentsContext from "context/componentsContext";
import ConstantsContext from "context/constantsContext";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";
import "styles/globals.css";
import lightTheme from "styles/theme/lightTheme";
import type { AppProps } from "next/app";
import createEmotionCache from "utility/createEmotionCache";
import emailjs from "@emailjs/browser";

// EmailJS 초기화 추가
emailjs.init("R-8KYhXEh8S6y5KRw");

try {
  emailjs.init("R-8KYhXEh8S6y5KRw");
  console.log("EmailJS 초기화 성공");
} catch (error) {
  console.error("EmailJS 초기화 실패:", error);
}

const clientSideEmotionCache = createEmotionCache();
const NextNprogress = dynamic(() => import("nextjs-progressbar"), {
  ssr: false,
}) as React.FC<any>;

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const componentsContext = React.useContext(ComponentsContext);
  const constantsContext = React.useContext(ConstantsContext);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <ComponentsContext.Provider value={componentsContext}>
          <ConstantsContext.Provider value={constantsContext}>
            <NextNprogress
              color={lightTheme.palette.info.main}
              options={{ showSpinner: false }}
            />
            {/* @ts-ignore - Component 타입 오류 무시 */}
            <Component {...pageProps} />
          </ConstantsContext.Provider>
        </ComponentsContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
