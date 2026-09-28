import React from "react";
import Hero from "../components/home/Hero";
import Intro from "../components/home/Intro";
import BuildingBlocks from "../components/home/BuildingBlocks";
import Programmes from "../components/home/Programmes";
import Impact from "../components/home/Impact";
import Stories from "../components/home/Stories";
import Partners from "../components/home/Partners";
import CTA from "../components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <BuildingBlocks />
      <Programmes />
      <Impact />
      <Stories />
      <Partners />
      <CTA />
    </>
  );
}
