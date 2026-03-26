import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PreviewProvider } from "./contexts/PreviewContext";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import MeetOurHairstylists from "./pages/MeetOurHairstylists";
import HairSalonServices from "./pages/HairSalonServices";
import SpaServices from "./pages/SpaServices";
import JonRenau from "./pages/JonRenau";
import Brands from "./pages/Brands";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PreviewProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/meet-our-hairstylists" element={<MeetOurHairstylists />} />
              <Route path="/hair-salon-services" element={<HairSalonServices />} />
              <Route path="/spa-services-massages-facials" element={<SpaServices />} />
              <Route path="/jon-renau" element={<JonRenau />} />
              <Route path="/brands" element={<Brands />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </PreviewProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
