import React from "react";
import NavbarPagesOurWork from "../../../../components/NavbarPagesOurWork";
import { ourWorks } from "../../../../data";
import { notFound } from "next/navigation";
import ProjectOverview from "../../../../components/Our-Work/ProjectOverview";
import ChallengesOrSolution from "../../../../components/Our-Work/ChallengesOrSolution";
import WorryNoMore from "../../../../components/Our-Work/WorryNoMore";
import Technologies from "../../../../components/Our-Work/Technologies";
import CallToAction from "../../../../components/Our-Work/CallToAction";
import HeroSectionOurWork from "../../../../components/HeroSectionOurWork";
import IndustryDetails from "../../../../components/IndustryDetails";
import Footer from "../../../../components/Footer";

const page = async ({ params }) => {
  const slug = await params.slug;

  const work = ourWorks.find((work) => work.slug === slug);

  // console.log(work);
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
      <IndustryDetails panelData={work.panelData} />
      {work.bg != true ? (
        <div className="flex container mt-10 mb-10">
          <img
            src={work.image}
            alt={`${slug} featured image`}
            className="w-full object-contain rounded-xl"
          />
        </div>
      ) : (
        <div
          className={`flex  container    overflow-hidden rounded-2xl   mt-10 mb-10`}
        >
          <div style={{ backgroundColor: work.bgColor }} className="rounded-2xl container ">
            <img
              src={work.image}
              alt={`${slug} featured image`}
              className="  object-contain h-[200px] md:h-[400px] xl:h-[500px] w-full"
            />
          </div>
        </div>
      )}
      {/* <CallToAction heading="Ready to Elevate your App Experience?" /> */}
      {/* <ConnectContact> */}
      {/* <CaseStudies /> */}
      {/* </ConnectContact> */}
      <Footer />
    </>
  );
};

export default page;
