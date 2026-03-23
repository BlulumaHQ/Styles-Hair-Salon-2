import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import StickyCTA from "./StickyCTA";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-20 pb-16 md:pb-0">{children}</main>
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Layout;
