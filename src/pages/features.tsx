import Labels from "@/components/ui/Labels";
// import FeaturesBoxContainer from "@/layouts/FeaturesBoxContainer";
import Image from "next/image";
import { FC } from "react";

interface FeaturesProps {}

const Features: FC<FeaturesProps> = ({}) => {
  return (
    <div className="Features-section" id="Features">
      <h2 className="features-heading">Features</h2>
      <Labels
        heading="24h+ playback"
        body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, alias!"
        cl={"firstLabel"}
      />

      <Labels
        heading="Rusian imported head form"
        body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, alias!"
        cl={"secondLabel"}
      />

      <Labels
        heading="40+ meters bluetooth coverage"
        body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, alias!"
        cl={"thirdLabel"}
      />

<Labels
        heading="40 mbts voice support"
        body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, alias!"
        cl={"fourLabel"}
      />

      <Image src={"/hh.png"} alt="features-image" width={1200} height={1200} />
    </div>
  );
};

export default Features;
