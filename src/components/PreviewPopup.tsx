import { usePreview } from "@/contexts/PreviewContext";
import { X, CreditCard, FileEdit, Rocket, Check, Shield } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const STRIPE_299 = "#";
const STRIPE_499 = "#";
const STRIPE_799 = "#";

const PreviewPopup = () => {
  const { isPopupOpen, closePopup, version } = usePreview();

  if (!isPopupOpen) return null;

  const host = window.location.hostname;
  const slug = host.replace(/-preview-(a|b)\..*$/, "").replace(/\..*$/, "");

  const getVersionUrl = (v: "a" | "b") => {
    const proto = window.location.protocol;
    // Build the sister URL
    const newHost = host
      .replace(/-preview-(a|b)/, `-preview-${v}`);
    return `${proto}//${newHost}${window.location.pathname}`;
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closePopup} />

      {/* Popup */}
      <div
        className="relative w-full mx-4 rounded-xl overflow-hidden"
        style={{
          backgroundColor: "hsl(0, 0%, 100%)",
          maxWidth: "960px",
          maxHeight: "calc(100vh - 40px)",
        }}
      >
        {/* Close */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-black/5 transition-colors z-10"
        >
          <X className="w-5 h-5" style={{ color: "hsl(210, 13%, 40%)" }} />
        </button>

        <div className="px-6 md:px-10 py-6 md:py-8">
          {/* Version switcher */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <button
              onClick={() => { if (version !== "a") window.location.href = getVersionUrl("a"); }}
              className={`px-5 py-2 rounded-md text-sm font-semibold tracking-wide transition-all ${
                version === "a"
                  ? "text-white"
                  : "border hover:bg-gray-50 cursor-pointer"
              }`}
              style={
                version === "a"
                  ? { backgroundColor: "hsl(210, 13%, 25%)" }
                  : { borderColor: "hsl(210, 13%, 80%)", color: "hsl(210, 13%, 30%)" }
              }
            >
              View Version A
            </button>
            <button
              onClick={() => { if (version !== "b") window.location.href = getVersionUrl("b"); }}
              className={`px-5 py-2 rounded-md text-sm font-semibold tracking-wide transition-all ${
                version === "b"
                  ? "text-white"
                  : "border hover:bg-gray-50 cursor-pointer"
              }`}
              style={
                version === "b"
                  ? { backgroundColor: "hsl(210, 13%, 25%)" }
                  : { borderColor: "hsl(210, 13%, 80%)", color: "hsl(210, 13%, 30%)" }
              }
            >
              View Version B
            </button>
          </div>

          {/* Headline */}
          <div className="text-center mb-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2" style={{ color: "hsl(210, 13%, 15%)" }}>
              This Website Preview is Ready.
            </h2>
            <p className="text-base md:text-lg font-light" style={{ color: "hsl(210, 13%, 40%)" }}>
              Activate your website anytime — everything is already built and ready to go.
            </p>
          </div>

          {/* Sales pitch */}
          <div className="text-center mb-5 max-w-2xl mx-auto">
            <p className="text-sm md:text-base font-light leading-relaxed" style={{ color: "hsl(210, 13%, 30%)" }}>
              You've already seen the result. This is a professionally built, conversion-focused website — not a template.
              <br className="hidden md:block" />
              Everything is ready. All that's left is activation.
            </p>
          </div>

          {/* Process steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
            {[
              { icon: CreditCard, title: "Payment Confirmed", desc: "Secure checkout via Stripe" },
              { icon: FileEdit, title: "Submit Your Revisions", desc: "We'll send you a simple revision form" },
              { icon: Rocket, title: "Launch Your Website", desc: "We finalize and deploy your site" },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center p-4 rounded-lg" style={{ backgroundColor: "hsl(40, 20%, 97%)" }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: "hsl(153, 55%, 36%)", color: "white" }}>
                  <step.icon className="w-5 h-5" />
                </div>
                <p className="text-sm font-semibold mb-1" style={{ color: "hsl(210, 13%, 15%)" }}>{step.title}</p>
                <p className="text-xs font-light" style={{ color: "hsl(210, 13%, 45%)" }}>{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Bullets */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-4">
            {["Multi-page ready", "Mobile optimized", "SEO-ready", "Hosting included"].map((b) => (
              <span key={b} className="flex items-center gap-1.5 text-sm font-medium" style={{ color: "hsl(210, 13%, 30%)" }}>
                <Check className="w-4 h-4" style={{ color: "hsl(153, 55%, 36%)" }} />
                {b}
              </span>
            ))}
          </div>

          {/* Risk line */}
          <p className="text-center text-sm font-medium mb-5" style={{ color: "hsl(153, 55%, 30%)" }}>
            You've already seen exactly what you'll get — no risk.
          </p>

          {/* PRICING */}
          {version === "a" ? (
            <div className="text-center space-y-3">
              <a
                href={STRIPE_499}
                className="inline-flex items-center justify-center w-full max-w-md px-8 py-4 rounded-lg text-lg font-bold uppercase tracking-wide transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: "hsl(153, 55%, 36%)", color: "white" }}
              >
                Activate with Revisions – $499
              </a>
              <p className="text-sm font-light" style={{ color: "hsl(210, 13%, 45%)" }}>
                Includes guided revisions, content updates, and final polish.
              </p>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={STRIPE_299}
                    className="inline-block text-sm font-medium underline underline-offset-4 cursor-pointer transition-colors hover:opacity-70"
                    style={{ color: "hsl(210, 13%, 35%)" }}
                  >
                    Or launch as-is – $299
                  </a>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="max-w-xs p-3 text-left">
                  <p className="font-semibold mb-1">Preview Access ($299):</p>
                  <p className="text-xs font-light mb-2">You get the site exactly as shown. No revisions.</p>
                  <p className="font-semibold mb-1">Launch Ready ($499):</p>
                  <p className="text-xs font-light">Includes revisions and final polish.</p>
                </TooltipContent>
              </Tooltip>
            </div>
          ) : (
            <div className="text-center space-y-3">
              <a
                href={STRIPE_799}
                className="inline-flex items-center justify-center w-full max-w-md px-8 py-4 rounded-lg text-lg font-bold uppercase tracking-wide transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: "hsl(153, 55%, 36%)", color: "white" }}
              >
                Activate Your Website – $799
              </a>
              <p className="text-sm font-light" style={{ color: "hsl(210, 13%, 45%)" }}>
                Includes guided revisions, content updates, and full optimization.
              </p>
            </div>
          )}

          {/* Trust line */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <Shield className="w-4 h-4" style={{ color: "hsl(210, 13%, 55%)" }} />
            <p className="text-xs font-light" style={{ color: "hsl(210, 13%, 55%)" }}>
              Secure checkout powered by Stripe
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewPopup;
