import HeroSub from "@/components/shared/HeroSub";
import PropertiesListing from "@/components/Properties/PropertyList";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Time Management | Homely",
};

const page = () => {
  return (
    <>
      <HeroSub
        title="Time Management"
        description="Time management screen is specifically used for recording and managing when users start their workday, helping track attendance and work hours. This is primarily used in the Time Management screen to monitor punctuality, working hours, and daily presence."
        badge="Employee"
      />
      <PropertiesListing />
    </>
  );
};

export default page;
