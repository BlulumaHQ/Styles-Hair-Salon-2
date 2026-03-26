import { usePreview } from "@/contexts/PreviewContext";
import { X, CreditCard, FileEdit, Rocket, Check, Shield } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const STRIPE_299 = "#";
const STRIPE_499 = "#";
const STRIPE_799 = "#";

const PREVIEW_A_URL = "#";
const PREVIEW_B_URL = "#";

const PreviewPopup = () => {
  const { isPopupOpen, closePopup, version } = usePreview();

  if (!isPopupOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closePopup} />

      <div
        className="relative w-full mx-4 rounded-xl overflow-hidden"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "hsl(0, 0%, 100%)",
          maxWidth: "960px",
          maxHeight: "calc(100vh - 40px)",
        }}
      >
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-black/5 transition-colors z-10"
        >
          <X className="w-5 h-5" style={{ color: "hsl(210, 13%, 40%)" }} />
        </button>

        <div className="px-6 md:px-10 py-5 md:py-6">
          {/* 1. Headline */}
          <div className="text-center mb-3">
            <h2 style={{ fontSize: "48px", fontWeight: 700, lineHeight: 1.1, color: "hsl(210, 13%, 15%)" }}>
              This Website Preview is Ready.
            </h2>
          </div>

          {/* 2. Subheadline */}
          <p className="text-center mb-3" style={{ fontSize: "18px", fontWeight: 400, lineHeight: 1.5, color: "hsl(210, 13%, 40%)" }}>
            Activate your website anytime — everything is already built and ready to go.
          </p>

          {/* 3. Sales copy */}
          <div className="text-center mb-4 max-w-2xl mx-auto">
            <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.7, color: "hsl(210, 13%, 30%)" }}>
              You've already seen the result. This is a professionally built, conversion-focused website — not a template.
              <br className="hidden md:block" />
              Everything is ready. All that's left is activation.
            </p>
          </div>

          {/* 4. Process block */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
            {[
              { icon: CreditCard, title: "Payment Confirmed", desc: "Secure checkout via Stripe" },
              { icon: FileEdit, title: "Submit Your Revisions", desc: "We'll send you a simple revision form" },
              { icon: Rocket, title: "Launch Your Website", desc: "We finalize and deploy your site" },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center p-3 rounded-lg" style={{ backgroundColor: "hsl(40, 20%, 97%)" }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: "hsl(153, 55%, 36%)", color: "white" }}>
                  <step.icon className="w-4 h-4" />
                </div>
                <p style={{ fontSize: "16px", fontWeight: 700, color: "hsl(210, 13%, 15%)", marginBottom: "2px" }}>{step.title}</p>
                <p style={{ fontSize: "14px", fontWeight: 400, color: "hsl(210, 13%, 45%)" }}>{step.desc}</p>
              </div>
            ))}
          </div>

          {/* 5. Bullets */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1.5 mb-3">
            {["Multi-page ready", "Mobile optimized", "SEO-ready", "Hosting included"].map((b) => (
              <span key={b} className="flex items-center gap-1.5" style={{ fontSize: "14px", fontWeight: 500, color: "hsl(210, 13%, 30%)" }}>
                <Check className="w-4 h-4" style={{ color: "hsl(153, 55%, 36%)" }} />
                {b}
              </span>
            ))}
          </div>

          {/* 6. Risk line */}
          <p className="text-center mb-4" style={{ fontSize: "15px", fontWeight: 500, color: "hsl(153, 55%, 30%)" }}>
            You've already seen exactly what you'll get — no risk.
          </p>

          {/* 7–9. Pricing */}
          {version === "a" ? (
            <div className="text-center space-y-2">
              <a
                href={STRIPE_499}
                className="inline-flex items-center justify-center w-full max-w-md rounded-lg uppercase tracking-wide transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: "hsl(153, 55%, 36%)", color: "white", fontSize: "18px", fontWeight: 700, height: "64px" }}
              >
                Activate with Revisions – $499
              </a>
              <p style={{ fontSize: "14px", fontWeight: 400, color: "hsl(210, 13%, 45%)" }}>
                Includes guided revisions, content updates, and final polish.
              </p>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={STRIPE_299}
                    className="inline-block underline underline-offset-4 cursor-pointer transition-colors hover:opacity-70"
                    style={{ fontSize: "15px", fontWeight: 500, color: "hsl(210, 13%, 35%)" }}
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
            <div className="text-center space-y-2">
              <a
                href={STRIPE_799}
                className="inline-flex items-center justify-center w-full max-w-md rounded-lg uppercase tracking-wide transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: "hsl(153, 55%, 36%)", color: "white", fontSize: "18px", fontWeight: 700, height: "64px" }}
              >
                Activate Your Website – $799
              </a>
              <p style={{ fontSize: "14px", fontWeight: 400, color: "hsl(210, 13%, 45%)" }}>
                Includes guided revisions, content updates, and full optimization.
              </p>
            </div>
          )}

          {/* 10. A/B buttons */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <button
              onClick={() => { if (version !== "a") window.location.href = PREVIEW_A_URL; }}
              className="flex items-center justify-center rounded-md transition-all"
              style={{
                fontSize: "16px",
                fontWeight: 600,
                height: "48px",
                width: "180px",
                ...(version === "a"
                  ? { backgroundColor: "hsl(210, 13%, 25%)", color: "white" }
                  : { border: "1px solid hsl(210, 13%, 80%)", color: "hsl(210, 13%, 30%)", backgroundColor: "transparent" }),
              }}
            >
              View Version A
            </button>
            <button
              onClick={() => { if (version !== "b") window.location.href = PREVIEW_B_URL; }}
              className="flex items-center justify-center rounded-md transition-all"
              style={{
                fontSize: "16px",
                fontWeight: 600,
                height: "48px",
                width: "180px",
                ...(version === "b"
                  ? { backgroundColor: "hsl(210, 13%, 25%)", color: "white" }
                  : { border: "1px solid hsl(210, 13%, 80%)", color: "hsl(210, 13%, 30%)", backgroundColor: "transparent" }),
              }}
            >
              View Version B
            </button>
          </div>

          {/* 11. Stripe line */}
          <div className="flex items-center justify-center gap-2 mt-3">
            <Shield className="w-4 h-4" style={{ color: "hsl(210, 13%, 55%)" }} />
            <p style={{ fontSize: "12px", fontWeight: 400, color: "hsl(210, 13%, 55%)" }}>
              Secure checkout powered by Stripe
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewPopup;
