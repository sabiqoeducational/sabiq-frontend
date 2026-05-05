import Footer from "@/modules/platform/layout/Footer";
import { CTA } from "@/shared/components/CTA";
import { FaqSection } from "@/shared/components/FaqSection";
import { Navbar } from "@/shared/components/Navbar";
import { Reveal } from "@/shared/components/Reveal";
import { getServerMessages } from "@/shared/i18n/server";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
    const { messages } = await getServerMessages();
  return (
    <>
      <Reveal direction="down">
        <Navbar />
      </Reveal>
      {children}
      <FaqSection />
      <CTA content = {messages.platform.cta} />
      <Footer />
    </>
  );
};

export default layout;
