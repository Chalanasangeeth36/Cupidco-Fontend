"use client";

import HamburgerButton from "@/components/common/buttons/HamburgerButton";
import InteractionButton from "@/components/common/buttons/InteractionButton";
import PrimaryButton from "@/components/common/buttons/PrimaryButton";
import RoundedIconButton from "@/components/common/buttons/RoundedIconButton";
import SecondaryButton from "@/components/common/buttons/SecondaryButton";
import Chip from "@/components/common/chip/Chip";
import Dropdown from "@/components/common/dropdown/Dropdown";
import CheckboxComponent from "@/components/common/inputs/Checkbox";
import OtpInput from "@/components/common/inputs/OtpInput";
import RadioButton from "@/components/common/inputs/RadioButton";
import TextArea from "@/components/common/inputs/TextArea";
import ProgressBar from "@/components/common/progress_bar/ProgressBar";
import { useState } from "react";
import { IoNotifications } from "react-icons/io5";

export default function Home() {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string | undefined;
  }>({});

  const handleOptionChange = (groupName: string, value: string) => {
    setSelectedOptions({ ...selectedOptions, [groupName]: value });
  };
  return (
    <>
      <main className="">
        <CheckboxComponent name={"sdfsdfsdsdf"} value={"dfsd"} />
        <SecondaryButton label={"asfasd"} />
        <RadioButton
          groupName="Gender"
          name="male"
          value="male"
          isSelected={selectedOptions["Gender"] === "male"}
          onChange={handleOptionChange}
          fontSize="text-sm xs:text-xs lg:text-sm md:text-sm xl:text-lg max-xs:text-xs"
        />
        <RadioButton
          groupName="Gender"
          name="female"
          value="female"
          isSelected={selectedOptions["Gender"] === "female"}
          onChange={handleOptionChange}
          fontSize="text-sm xs:text-xs lg:text-sm md:text-sm xl:text-lg max-xs:text-xs"
        />
        <OtpInput onOtpChange={() => {}} />
        <TextArea id={"asdsa"} label={"asdasdas"} />
      </main>
    </>
  );
}
