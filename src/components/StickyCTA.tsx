import { Phone, Calendar } from "lucide-react";

const StickyCTA = () => {
  return (
    <>
      {/* Desktop: fixed right-side button */}
      <div className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 flex-col gap-3">
        <a
          href="tel:4177826167"
          className="btn-sticky flex flex-col items-center gap-1 py-4 px-3 rounded-l-lg rounded-r-none shadow-lg"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[10px] uppercase tracking-wider">Call</span>
        </a>
        <a
          href="tel:4177826167"
          className="btn-sticky flex flex-col items-center gap-1 py-4 px-3 rounded-l-lg rounded-r-none shadow-lg"
        >
          <Calendar className="w-5 h-5" />
          <span className="text-[10px] uppercase tracking-wider">Book</span>
        </a>
      </div>

      {/* Mobile: sticky bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 flex shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.15)]"
        style={{ backgroundColor: "hsl(210, 13%, 25%)" }}
      >
        <a
          href="tel:4177826167"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-medium tracking-wide transition-colors"
          style={{ color: "hsl(0, 0%, 100%)" }}
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <div className="w-px" style={{ backgroundColor: "hsl(210, 13%, 35%)" }} />
        <a
          href="tel:4177826167"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-medium tracking-wide transition-colors"
          style={{ color: "hsl(0, 0%, 100%)" }}
        >
          <Calendar className="w-4 h-4" />
          Book Appointment
        </a>
      </div>
    </>
  );
};

export default StickyCTA;
