import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import StickyCTA from "./StickyCTA";
import PreviewPopup from "./PreviewPopup";
import { usePreview } from "@/contexts/PreviewContext";

const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { openPopup } = usePreview();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={`flex-1 pb-16 md:pb-0 pt-[calc(42px+64px)] md:pt-[calc(42px+80px)]`}>
        {isHome ? (
          children
        ) : (
          <div className="relative">
            <div className="blur-[6px] pointer-events-none select-none">
              {children}
            </div>
            {/* Overlay to trigger popup on internal pages */}
            <div
              className="absolute inset-0 z-20 cursor-pointer flex items-center justify-center"
              onClick={openPopup}
            >
              <div className="px-8 py-5 rounded-xl shadow-2xl text-center" style={{ backgroundColor: "hsl(0, 0%, 100%, 0.95)" }}>
                <p className="text-lg font-semibold mb-1" style={{ color: "hsl(210, 13%, 15%)" }}>
                  Content Preview Locked
                </p>
                <p className="text-sm font-light" style={{ color: "hsl(210, 13%, 45%)" }}>
                  Click to activate your website
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
      <StickyCTA />
      <PreviewPopup />
    </div>
  );
};

export default Layout;
