// react
import * as React from "react";
// custom component
import About from "components/section/About";
import HireMe from "components/section/HireMe";
import HomeHero from "components/section/HomeHero";
import MainLayout from "components/layout/MainLayout";
import RecentProjects from "components/section/RecentProjects";
import Skills from "components/section/Skills";
// custom context
import ConstantsContext from "context/constantsContext";
// type
import type { NextPage } from "next";
import AboutMid from "components/section/AboutMid";
import Services from "components/section/Service";

const Home: NextPage = () => {
  const { pages } = React.useContext(ConstantsContext);

  return (
    <>
      <MainLayout pageData={pages!.home}>
        <About />
        <Skills />
        <AboutMid />
        <RecentProjects />
        <Services />
      </MainLayout>
    </>
  );
};

export default Home;
