import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import StickyCTA from "./StickyCTA";

const SiteLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-16 lg:pt-20">{children}</main>
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default SiteLayout;
