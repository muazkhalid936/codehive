import React from "react";
import NavbarPagesOurWork from "../../../components/NavbarPagesOurWork";
import Hero from "../../../components/Hero";
import { ourWorks } from "../../../data";
import { notFound } from "next/navigation";
import ProjectOverview from "../../../components/Our-Work/ProjectOverview";
import ChallengesOrSolution from "../../../components/Our-Work/ChallengesOrSolution";
import WorryNoMore from "../../../components/Our-Work/WorryNoMore";
import Technologies from "../../../components/Our-Work/Technologies";
import CallToAction from "../../../components/Our-Work/CallToAction";
import ConnectContact from "../../../components/ConnectContact";
import CaseStudies from "../../../components/CaseStudies";
import HeroSectionOurWork from "../../../components/HeroSectionOurWork";
import IndustryDetails from "../../../components/IndustryDetails";

const page = async ({ params }) => {
  const slug = await params.slug;
  console.log(ourWorks);

  const work = ourWorks.find((work) => work.slug === slug);

  if (!work) {
    return notFound();
  }

  return (
    <>
      <NavbarPagesOurWork isBlack={true} />
      <HeroSectionOurWork {...work.heroData} />
      <ProjectOverview {...work.projectOverview} />
      <ChallengesOrSolution {...work.challengeSection} />
      <WorryNoMore {...work.noMoreWorriesSection} />
      <Technologies {...work.techSection} />
      <ChallengesOrSolution {...work.solutionSection} />
      <IndustryDetails panelData={work.panelsData} />
      <div className="flex justify-center mt-5 mb-20">
        <div className="w-[90%]  overflow-hidden rounded-xl shadow-lg">
          <img
            src={work.image}
            alt={`${slug} featured image`}
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
      </div>

      <CallToAction heading="Ready to Elevate your App Experience" />
      {/* <ConnectContact> */}
      {/* <CaseStudies /> */}
      {/* </ConnectContact> */}
    </>
  );
};

export default page;
