"use client";

import PageBackground from "./PageBackground";
import ThemeGlow from "./ThemeGlow";
import NoiseTexture from "./NoiseTexture";
import CursorGlow from "./CursorGlow";
import AnnouncementBar from "./AnnouncementBar";
import Header from "./Header";
import Breadcrumb from "./Breadcrumb";
import DesktopDock from "./DesktopDock";
import FloatingDock from "./FloatingDock";
import QuickActions from "./QuickActions";
import SocialSidebar from "./SocialSidebar";
import FloatingLine from "./FloatingLine";
import BackToTopProgress from "./BackToTopProgress";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

export default function PageShell({
  children,
}: Props) {
  return (
    <>
      <PageBackground />

      <ThemeGlow />

      <NoiseTexture />

      <CursorGlow />

      <AnnouncementBar />

      <Header />

      <Breadcrumb />

      <DesktopDock />

      <FloatingDock />

      <SocialSidebar />

      <QuickActions />

      <main className="relative z-10 min-h-screen">
        {children}
      </main>

      <Footer />

      <BackToTopProgress />

      <FloatingLine />
    </>
  );
}