"use client";

import PageBackground from "./PageBackground";
import ThemeGlow from "./ThemeGlow";
import NoiseTexture from "./NoiseTexture";
import CursorGlow from "./CursorGlow";
import TopProgressBar from "./TopProgressBar";
import ScrollToTop from "./ScrollToTop";
import FloatingLine from "./FloatingLine";

type Props = {
  children: React.ReactNode;
};

export default function PageWrapper({
  children,
}: Props) {
  return (
    <>
      <TopProgressBar />

      <PageBackground />

      <ThemeGlow />

      <NoiseTexture />

      <CursorGlow />

      {children}

      <ScrollToTop />

      <FloatingLine />
    </>
  );
}