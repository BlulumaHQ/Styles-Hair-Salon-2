import { Zap } from "lucide-react";
import { usePreview } from "@/contexts/PreviewContext";

/**
 * Universal Sticky CTA — identical dimensions/position on every preview site.
 * Only the background color may vary per brand.
 */
const StickyCTA = () => {
  const { openPopup } = usePreview();

  return (
    <div className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-[55]">
      <button
        onClick={openPopup}
        className="flex flex-col items-center gap-1.5 rounded-l-lg rounded-r-none transition-all duration-200 hover:opacity-90"
        style={{
          backgroundColor: "hsl(210, 13%, 22%)",
          color: "hsl(0, 0%, 100%)",
          width: "52px",
          padding: "20px 0",
          boxShadow: "0 4px 20px -4px rgba(0,0,0,0.25)",
        }}
      >
        <Zap className="w-5 h-5" />
        <span className="text-[10px] uppercase tracking-wider font-semibold leading-tight">Activate</span>
        <span className="text-[9px] uppercase tracking-wider opacity-70 leading-tight">Now</span>
      </button>
    </div>
  );
};

export default StickyCTA;
