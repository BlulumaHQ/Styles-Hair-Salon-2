import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Star, Clock, MapPin, Scissors, Sparkles, Users, Award, CheckCircle, ArrowDown, Heart, ShieldCheck, ChevronRight } from "lucide-react";
import heroImg from "@/assets/hero-salon.jpg";
import spaImg from "@/assets/spa-treatment.jpg";
import hairImg from "@/assets/hair-styling.jpg";

const fade = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const Index = () => {
  return (
    <>
      <title>Styles Hair Salon and Day Spa | Joplin, MO</title>
      <meta name="description" content="Styles Hair Salon will change the way you think about hair salons with full service comfort, friendly stylists and a relaxing atmosphere. Over 20 years serving Joplin, MO." />

      {/* ═══════════════════════════════════════════════════════════════
          1. HOOK — Full-screen attention-grab hero
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Styles Hair Salon interior" className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, hsl(210 13% 8% / 0.92) 0%, hsl(210 13% 8% / 0.65) 60%, hsl(210 13% 8% / 0.80) 100%)" }} />
        </div>
        <div className="relative container-funnel text-center z-10 py-20">
          <motion.div initial="hidden" animate="visible" variants={fade}>
            <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
              <span className="trust-badge"><Star className="w-4 h-4" /> #1 Salon in Joplin</span>
              <span className="trust-badge"><Award className="w-4 h-4" /> 20+ Years in Business</span>
              <span className="trust-badge"><Users className="w-4 h-4" /> 10+ Expert Stylists</span>
            </div>

            <h1 className="heading-hero mb-6" style={{ color: "hsl(0, 0%, 100%)" }}>
              Your Hair Deserves<br />
              <span className="text-highlight">Joplin's Best</span>
            </h1>

            <p className="body-large mb-10 max-w-xl mx-auto" style={{ color: "hsl(0, 0%, 100%, 0.85)" }}>
              Styles Hair Salon will change the way you think about hair salons with full service comfort, friendly stylists and a relaxing atmosphere.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:4177826167" className="btn-funnel btn-pulse gap-3">
                <Phone className="w-6 h-6" />
                Call For an Appointment Today!
              </a>
            </div>

            <p className="mt-5 text-sm font-medium" style={{ color: "hsl(0, 0%, 100%, 0.6)" }}>
              (417) 782-6167 · Mon–Fri 8am–6pm · Sat 8am–3pm
            </p>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-12"
            >
              <ArrowDown className="w-6 h-6 mx-auto" style={{ color: "hsl(0, 0%, 100%, 0.4)" }} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          2. PROBLEM — Pain point identification
      ═══════════════════════════════════════════════════════════════ */}
      <section className="section-padding-lg">
        <div className="container-funnel text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <p className="label-funnel mb-4">Sound Familiar?</p>
            <h2 className="heading-section mb-8">
              Tired of Salons That Don't<br />
              <span className="text-highlight">Truly Understand You?</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                { text: "Cookie-cutter haircuts that don't match your face shape or style" },
                { text: "Feeling rushed through appointments without personalized attention" },
                { text: "Struggling to find a salon that offers both hair AND spa services under one roof" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ ...fade, visible: { ...fade.visible, transition: { duration: 0.6, delay: i * 0.15 } } }}
                  className="bg-card p-6 rounded-lg border border-border"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "hsl(0, 84%, 60%, 0.1)" }}>
                    <span className="text-lg">😩</span>
                  </div>
                  <p className="body-base text-foreground font-medium">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          3. AGITATION — Emphasize the problem deeper
      ═══════════════════════════════════════════════════════════════ */}
      <section className="section-dark section-padding-lg">
        <div className="container-funnel text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <h2 className="heading-section mb-6">
              You Deserve More Than a <span className="text-highlight">"Good Enough"</span> Salon Experience
            </h2>
            <p className="body-large opacity-80 max-w-2xl mx-auto mb-8">
              Your hair is unique. Your bone structure, facial features, and personal style all demand a stylist who truly understands you — not someone who gives everyone the same look.
            </p>
            <p className="body-large opacity-80 max-w-2xl mx-auto">
              And when your body and mind need to recharge, you deserve skin care and spa treatments customized for <em>your</em> specific needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          4. SOLUTION — The answer is here
      ═══════════════════════════════════════════════════════════════ */}
      <section className="section-accent-bg section-padding-lg">
        <div className="container-funnel text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <p className="label-funnel mb-4">The Solution</p>
            <h2 className="heading-section mb-6">
              Come See What All The Buzz Is About!
            </h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto mb-12">
              Styles Hair Salon and Day Spa has been in Joplin, MO for over 20 years. Owner Dianna Thompson strives to ensure that your experience will leave you <strong className="text-foreground">glowing inside and out</strong>.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fade, visible: { ...fade.visible, transition: { duration: 0.6, delay: 0 } } }}>
              <div className="card-service h-full group">
                <div className="h-64 overflow-hidden">
                  <img src={hairImg} alt="Hair styling at Styles Salon" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-8 text-left">
                  <div className="flex items-center gap-2 mb-3">
                    <Scissors className="w-6 h-6 text-secondary" />
                    <h3 className="heading-sub">Salon Services</h3>
                  </div>
                  <p className="body-base text-muted-foreground mb-5">
                    Each of our stylists has been specially trained to create hair styles customized to your individual bone structure and facial features. From hair color and hair cuts to styling, our stylists can create a look for all occasions that is "individually you."
                  </p>
                  <Link to="/hair-salon-services" className="inline-flex items-center gap-1 text-secondary font-medium hover:gap-2 transition-all">
                    See Our Salon Services <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fade, visible: { ...fade.visible, transition: { duration: 0.6, delay: 0.15 } } }}>
              <div className="card-service h-full group">
                <div className="h-64 overflow-hidden">
                  <img src={spaImg} alt="Spa treatment room" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-8 text-left">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-6 h-6 text-secondary" />
                    <h3 className="heading-sub">Spa Services</h3>
                  </div>
                  <p className="body-base text-muted-foreground mb-5">
                    You deserve the best for your skin care. Together, we can choose a customized treatment tailored for your specific needs. So treat yourself and pamper your skin, body and mind.
                  </p>
                  <Link to="/spa-services-massages-facials" className="inline-flex items-center gap-1 text-secondary font-medium hover:gap-2 transition-all">
                    See Our Spa Services <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          MID-FUNNEL CTA
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-14" style={{ backgroundColor: "hsl(153, 55%, 36%)" }}>
        <div className="container-funnel text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "hsl(0, 0%, 100%)" }}>
              Ready To Look & Feel Your Best?
            </h3>
            <p className="text-lg mb-6 font-light" style={{ color: "hsl(0, 0%, 100%, 0.85)" }}>
              Call us at (417) 782-6167 and book an appointment today!
            </p>
            <a href="tel:4177826167" className="btn-funnel-dark btn-pulse">
              <Phone className="w-5 h-5" />
              Call For an Appointment Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          5. BENEFITS — Full service breakdown
      ═══════════════════════════════════════════════════════════════ */}
      <section className="section-padding-lg">
        <div className="container-funnel">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="text-center mb-14">
            <p className="label-funnel mb-4">Everything You Need</p>
            <h2 className="heading-section">
              Hair Salon <span className="text-highlight">AND</span> Spa Services — All Under One Roof
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Scissors, title: "Haircuts & Styling", desc: "Customized to your individual bone structure and facial features" },
              { icon: Sparkles, title: "Hair Color", desc: "From highlights and lowlights to full color transformations" },
              { icon: Heart, title: "Facials & Skin Care", desc: "Customized treatments tailored for your specific skin needs" },
              { icon: Star, title: "Manicure & Pedicure", desc: "Premium nail services to complete your look" },
              { icon: CheckCircle, title: "Waxing Services", desc: "Professional waxing for smooth, lasting results" },
              { icon: Award, title: "Jon Renau Collection", desc: "1,500+ wig styles, extensions, hairpieces, and hair additions" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fade, visible: { ...fade.visible, transition: { duration: 0.5, delay: i * 0.08 } } }}
              >
                <div className="flex gap-4 p-5 rounded-lg bg-card border border-border h-full">
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "hsl(153, 55%, 36%, 0.1)" }}>
                    <item.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground font-light">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          6. TRUST — Credibility & social proof
      ═══════════════════════════════════════════════════════════════ */}
      <section className="section-alt section-padding-lg">
        <div className="container-funnel text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <p className="label-funnel mb-4">Why Joplin Trusts Us</p>
            <h2 className="heading-section mb-12">
              Come See Why We are the <span className="text-highlight">#1 Hair Salon</span> in Joplin
            </h2>
          </motion.div>

          {/* Trust stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
            {[
              { stat: "20+", label: "Years in Business" },
              { stat: "10+", label: "Expert Stylists" },
              { stat: "1,500+", label: "Jon Renau Styles" },
              { stat: "#1", label: "Salon in Joplin" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fade, visible: { ...fade.visible, transition: { duration: 0.5, delay: i * 0.1 } } }}
              >
                <div className="bg-card rounded-xl p-6 border border-border">
                  <p className="text-3xl md:text-4xl font-extrabold text-secondary mb-1">{item.stat}</p>
                  <p className="text-sm text-muted-foreground font-medium">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* About / credibility */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <div className="grid md:grid-cols-2 gap-10 items-center text-left">
              <img
                src="https://styleshairsalonandspaofjoplin.com/wp-content/uploads/2024/06/295314535_470067738455138_9166722491768599902_n.jpg"
                alt="Styles Hair Salon team"
                className="rounded-xl w-full shadow-lg"
              />
              <div>
                <h3 className="heading-sub mb-4">Styles Hair Salon Has A Great Team</h3>
                <p className="body-base text-muted-foreground mb-4">
                  Styles Hair Salon is home to ten independent Hair Stylists, Nail Technicians, and an Aesthetician who will customize each service for their clients.
                </p>
                <p className="body-base text-muted-foreground mb-4">
                  Whether it be a haircut, style, manicure, pedicure, facial, or waxing the design team will ensure that your experience at Styles Hair Salon and Day Spa will leave you glowing inside and out.
                </p>
                <div className="flex flex-col gap-3 mt-6">
                  {[
                    "Active in our community",
                    "Friendly, professional, relaxing atmosphere",
                    "Full service comfort",
                    "Owner Dianna Thompson — 20+ years",
                  ].map((t) => (
                    <div key={t} className="flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-secondary shrink-0" />
                      <p className="text-sm font-medium">{t}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          7. OFFER — Clear value proposition
      ═══════════════════════════════════════════════════════════════ */}
      <section className="section-dark section-padding-lg">
        <div className="container-funnel text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 text-sm font-bold uppercase tracking-wider" style={{ backgroundColor: "hsl(25, 95%, 53%)", color: "hsl(0, 0%, 100%)" }}>
              🎉 Special Offer
            </div>
            <h2 className="heading-section mb-6">
              Get 10% Off Your First<br />Salon or Spa Service
            </h2>
            <p className="body-large opacity-80 max-w-xl mx-auto mb-4">
              We'll take 10% off your first salon or spa service when you sign up for our e-Newsletter!
            </p>
            <p className="text-sm opacity-60 mb-10">
              Only valid with Toni Weston and Sherri Stout
            </p>
            <a href="tel:4177826167" className="btn-funnel btn-pulse">
              <Phone className="w-6 h-6" />
              Claim Your 10% Off — Call Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          8. PRIMARY CTA — Services + Booking
      ═══════════════════════════════════════════════════════════════ */}
      <section className="section-padding-lg section-warm">
        <div className="container-funnel text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <p className="label-funnel mb-4">Your Next Step</p>
            <h2 className="heading-section mb-6">
              Explore Our Full Range of Services
            </h2>
            <p className="body-base text-muted-foreground max-w-xl mx-auto mb-10">
              From cutting edge hair styles to rejuvenating spa treatments and the exclusive Jon Renau collection — everything you need is here.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-5 mb-12">
            {[
              { label: "Salon Services", path: "/hair-salon-services", icon: Scissors, desc: "Haircuts, color, styling, extensions" },
              { label: "Spa Services", path: "/spa-services-massages-facials", icon: Sparkles, desc: "Facials, waxing, manicure, pedicure" },
              { label: "Jon Renau", path: "/jon-renau", icon: Star, desc: "1,500+ wigs, extensions, toppers" },
            ].map((s, i) => (
              <motion.div key={s.label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fade, visible: { ...fade.visible, transition: { duration: 0.5, delay: i * 0.12 } } }}>
                <Link to={s.path} className="card-service p-8 text-center flex flex-col items-center h-full">
                  <s.icon className="w-10 h-10 text-secondary mb-4" />
                  <h4 className="font-semibold text-lg mb-2">{s.label}</h4>
                  <p className="text-sm text-muted-foreground font-light">{s.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
          <a href="tel:4177826167" className="btn-funnel btn-pulse">
            <Phone className="w-6 h-6" />
            Book Your Appointment Today
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          BRANDS — Quick trust strip
      ═══════════════════════════════════════════════════════════════ */}
      <section className="section-padding">
        <div className="container-funnel">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="text-center mb-10">
            <p className="label-funnel mb-3">Premium Products</p>
            <h2 className="heading-section">Check Out The Brands We Carry</h2>
          </motion.div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-8">
            {[
              { src: "https://styleshairsalonandspaofjoplin.com/wp-content/uploads/2024/02/JonRenau_Logo_White.jpg", name: "Jon Renau" },
              { src: "https://styleshairsalonandspaofjoplin.com/wp-content/uploads/2024/02/pureology.png", name: "Pureology" },
              { src: "https://styleshairsalonandspaofjoplin.com/wp-content/uploads/2024/02/Gelish.png", name: "Gelish" },
              { src: "https://styleshairsalonandspaofjoplin.com/wp-content/uploads/2024/02/milk-shake-logo-square-white.png", name: "Milkshake" },
              { src: "https://styleshairsalonandspaofjoplin.com/wp-content/uploads/2024/02/babe-logo-square-white.png", name: "Babe" },
            ].map((b) => (
              <img key={b.name} src={b.src} alt={b.name} className="h-12 md:h-16 object-contain opacity-60 hover:opacity-100 transition-opacity" />
            ))}
          </div>
          <div className="text-center">
            <Link to="/brands" className="btn-outline">View All Our Brands</Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          9. REINFORCEMENT — Location & hours
      ═══════════════════════════════════════════════════════════════ */}
      <section className="section-alt section-padding-lg">
        <div className="container-funnel">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="label-funnel mb-4">Visit Us</p>
                <h2 className="heading-section mb-6">Visit Styles Hair Salon Today!</h2>
                <p className="body-base text-muted-foreground mb-8">
                  Appointments available upon request. Walk-ins welcome when availability allows.
                </p>
                <div className="space-y-5 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "hsl(153, 55%, 36%, 0.1)" }}>
                      <MapPin className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-0.5">Location</p>
                      <p className="text-muted-foreground font-light">608 E 32nd St, Joplin, MO 64804</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "hsl(153, 55%, 36%, 0.1)" }}>
                      <Phone className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-0.5">Call</p>
                      <a href="tel:4177826167" className="text-muted-foreground font-light hover:text-secondary transition-colors">(417) 782-6167</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "hsl(153, 55%, 36%, 0.1)" }}>
                      <Clock className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-0.5">Hours</p>
                      <p className="text-muted-foreground font-light">Monday–Friday: 8am–6pm</p>
                      <p className="text-muted-foreground font-light">Saturday: 8am–3pm</p>
                      <p className="text-muted-foreground font-light">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                <a href="tel:4177826167" className="btn-primary gap-2">
                  <Phone className="w-4 h-4" />
                  Call For an Appointment Today!
                </a>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  title="Styles Hair Salon Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3226.8!2d-94.5133!3d37.0396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c86271b7b0b0b1%3A0x1234567890!2s608+E+32nd+St%2C+Joplin%2C+MO+64804!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          HIRING
      ═══════════════════════════════════════════════════════════════ */}
      <section className="section-padding">
        <div className="container-funnel text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <h2 className="heading-section mb-4">Styles Hair Salon is Hiring!</h2>
            <p className="body-base text-muted-foreground max-w-2xl mx-auto mb-4">
              Styles salon is currently seeking experienced and licensed cosmetologists to join our team. We are a full service hair salon that has been in business over 20 years. We are active in our community and enjoy serving the Joplin area.
            </p>
            <p className="body-base text-muted-foreground max-w-2xl mx-auto mb-6">
              As an established hair salon we not only have an excellent location but also great potential to build a strong clientele. Our friendly and professional team takes pride in providing excellent service while keeping up with the latest trends. If you feel you would be a good fit for our team please contact Dianna by calling (417) 782-6167.
            </p>
            <a href="tel:4177826167" className="btn-outline gap-2">
              <Phone className="w-4 h-4" />
              Contact Dianna
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          10. FINAL CTA — Last push
      ═══════════════════════════════════════════════════════════════ */}
      <section className="section-dark section-padding-lg">
        <div className="container-funnel text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <Sparkles className="w-12 h-12 mx-auto mb-6 text-secondary" />
            <h2 className="heading-hero mb-6">
              Relax. Refresh. Renew.
            </h2>
            <p className="body-large opacity-80 max-w-xl mx-auto mb-4">
              Your experience at Styles Hair Salon will leave you glowing inside and out.
            </p>
            <p className="text-lg font-medium opacity-90 mb-10">
              Call us at (417) 782-6167 and book an appointment today!
            </p>
            <a href="tel:4177826167" className="btn-funnel btn-pulse">
              <Phone className="w-6 h-6" />
              Call For an Appointment Today!
            </a>
            <p className="mt-6 text-sm opacity-50">
              608 E 32nd St, Joplin, MO 64804 · Mon–Fri 8am–6pm · Sat 8am–3pm
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gift Cards */}
      <section className="section-warm py-12">
        <div className="container-funnel text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <h3 className="heading-sub mb-3">Are you looking for Gift Cards?</h3>
            <p className="body-base text-muted-foreground mb-5">
              Give the gift of beauty and relaxation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:4177826167" className="btn-primary">Get a Gift Card From Sherri Stout</a>
              <a href="tel:4177826167" className="btn-primary">Get a Gift Card From Toni Weston</a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
