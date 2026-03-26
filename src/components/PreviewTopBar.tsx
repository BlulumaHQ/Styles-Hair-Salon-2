import { usePreview } from "@/contexts/PreviewContext";

const PreviewTopBar = () => {
  const { openPopup } = usePreview();

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-5 md:px-8"
      style={{ backgroundColor: "hsl(210, 13%, 15%)", color: "hsl(0, 0%, 100%)", height: "42px" }}
    >
      <div className="flex-1" />
      <p className="text-sm font-medium tracking-wide text-center">
        This preview is valid for 72 hours
      </p>
      <div className="flex-1 flex justify-end">
        <button
          onClick={openPopup}
          className="px-4 py-1.5 rounded text-xs font-semibold uppercase tracking-wider transition-all duration-200 hover:opacity-90"
          style={{ backgroundColor: "hsl(153, 55%, 36%)", color: "hsl(0, 0%, 100%)" }}
        >
          Activate Now
        </button>
      </div>
    </div>
  );
};

export default PreviewTopBar;
