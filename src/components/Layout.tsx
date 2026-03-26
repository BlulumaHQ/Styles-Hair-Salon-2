import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import StickyCTA from "./StickyCTA";
import PreviewPopup from "./PreviewPopup";
import { usePreview } from "@/contexts/PreviewContext";

const Layout = ({ children }: { children: ReactNode }) => {
  const { isInternalPage } = usePreview();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1" style={{ paddingTop: "calc(42px + 64px)" }}>
        {isInternalPage ? (
          <div className="blur-[5px] pointer-events-none select-none">
            {children}
          </div>
        ) : (
          children
        )}
      </main>
      <Footer />
      <StickyCTA />
      <PreviewPopup />
    </div>
  );
};

export default Layout;
