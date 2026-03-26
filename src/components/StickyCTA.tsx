import { Zap } from "lucide-react";
import { usePreview } from "@/contexts/PreviewContext";

const StickyCTA = () => {
  const { openPopup } = usePreview();

  return (
    <div className="hidden md:flex fixed z-[55]" style={{ right: "24px", top: "50%", transform: "translateY(-50%)" }}>
      <button
        onClick={openPopup}
        className="flex flex-col items-center justify-center gap-1.5 rounded-lg transition-all duration-200 hover:opacity-90"
        style={{
          backgroundColor: "hsl(210, 13%, 22%)",
          color: "hsl(0, 0%, 100%)",
          width: "56px",
          height: "180px",
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
