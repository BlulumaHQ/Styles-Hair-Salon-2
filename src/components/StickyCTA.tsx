import { Zap } from "lucide-react";
import { usePreview } from "@/contexts/PreviewContext";

const StickyCTA = () => {
  const { openPopup } = usePreview();

  return (
    <>
      {/* Desktop: fixed right-side button */}
      <div className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 flex-col">
        <button
          onClick={openPopup}
          className="btn-sticky flex flex-col items-center gap-1.5 py-5 px-3.5 rounded-l-lg rounded-r-none shadow-lg btn-pulse"
        >
          <Zap className="w-5 h-5" />
          <span className="text-[10px] uppercase tracking-wider font-semibold">Activate</span>
          <span className="text-[9px] uppercase tracking-wider opacity-70">Now</span>
        </button>
      </div>

      {/* Mobile: sticky bottom bar */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 flex shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.15)]"
        style={{ backgroundColor: "hsl(210, 13%, 15%)" }}
      >
        <button
          onClick={openPopup}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-semibold tracking-wide transition-colors"
          style={{ color: "hsl(0, 0%, 100%)" }}
        >
          <Zap className="w-4 h-4" />
          Activate Now
        </button>
      </div>
    </>
  );
};

export default StickyCTA;
