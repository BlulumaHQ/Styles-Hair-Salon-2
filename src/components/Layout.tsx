import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import StickyCTA from "./StickyCTA";

const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={`flex-1 pb-16 md:pb-0 ${isHome ? "pt-[calc(38px+64px)] md:pt-[calc(38px+80px)]" : "pt-16 md:pt-20"}`}>
        {children}
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Layout;
