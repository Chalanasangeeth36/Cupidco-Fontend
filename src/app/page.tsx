"use client";

import Logo from "@/components/common/logo/Logo";
import PrivacyPolicy from "@/app/(pages)/privacy-policy/privacy-policy/PrivacyPolicy";
import ProfilePicture from "@/components/common/profile/ProfilePicture";
import Description from "@/components/common/texts/Description";
import Title from "@/components/common/texts/Title";
import { RxDashboard } from "react-icons/rx";
import SearchBox from "@/components/common/search/SearchBox";
import HomeCubeSlider from "@/components/common/sliders/HomeCubeSlider";

export default function Home() {
  return (
    <>
      <main>
        <HomeCubeSlider images={[]} />
      </main>
    </>
  );
}
