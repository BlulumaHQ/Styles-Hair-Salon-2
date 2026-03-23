import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Star, Clock, MapPin, Scissors, Sparkles, Users, Award, CheckCircle } from "lucide-react";
import heroImg from "@/assets/hero-salon.jpg";
import spaImg from "@/assets/spa-treatment.jpg";
import hairImg from "@/assets/hair-styling.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Index = () => {
  return (
    <>
      {/* SEO */}
      <title>Styles Hair Salon and Day Spa | Joplin, MO</title>
      <meta name="description" content="Styles Hair Salon will change the way you think about hair salons with full service comfort, friendly stylists and a relaxing atmosphere. Over 20 years serving Joplin, MO." />

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Styles Hair Salon interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(210 13% 15% / 0.85), hsl(210 13% 15% / 0.5))" }} />
        </div>
        <div className="relative container-site py-24 md:py-32 z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl">
            <div className="flex gap-3 mb-6 flex-wrap">
              <span className="trust-badge"><Star className="w-4 h-4" /> #1 Salon in Joplin</span>
              <span className="trust-badge"><Award className="w-4 h-4" /> 20+ Years</span>
            </div>
            <h1 className="heading-hero mb-6" style={{ color: "hsl(0, 0%, 100%)" }}>
              Relax. Refresh.<br />Renew.
            </h1>
            <p className="body-large mb-8 max-w-lg" style={{ color: "hsl(0, 0%, 100%, 0.85)" }}>
              Styles Hair Salon will change the way you think about hair salons with full service comfort, friendly stylists and a relaxing atmosphere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:4177826167" className="btn-hero gap-2">
                <Phone className="w-5 h-5" />
                Call For an Appointment
              </a>
              <Link to="/hair-salon-services" className="btn-hero" style={{ backgroundColor: "transparent", border: "2px solid hsl(0, 0%, 100%)" }}>
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-secondary">
        <div className="container-site py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center" style={{ color: "hsl(0, 0%, 100%)" }}>
            {[
              { icon: Clock, text: "Mon–Fri: 8am–6pm" },
              { icon: MapPin, text: "608 E 32nd St, Joplin" },
              { icon: Users, text: "10+ Expert Stylists" },
              { icon: Phone, text: "(417) 782-6167" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center justify-center gap-2 text-sm font-light">
                <Icon className="w-4 h-4" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="section-padding">
        <div className="container-site">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <p className="text-sm font-medium uppercase tracking-widest text-secondary mb-3">Our Services</p>
            <h2 className="heading-section mb-4">Hair Salon AND Spa Services</h2>
            <p className="body-base text-muted-foreground max-w-2xl mx-auto">
              Your experience at Styles Hair Salon will leave you glowing inside and out.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Scissors,
                title: "Cutting Edge Hair Styles",
                desc: "Each of our stylists has been specially trained to create hair styles customized to your individual bone structure and facial features.",
                img: hairImg,
                link: "/hair-salon-services",
                cta: "See Our Salon Services",
              },
              {
                icon: Sparkles,
                title: "Spa & Skin Care",
                desc: "You deserve the best for your skin care. Together, we can choose a customized treatment tailored for your specific needs.",
                img: spaImg,
                link: "/spa-services-massages-facials",
                cta: "See Our Spa Services",
              },
              {
                icon: Star,
                title: "Jon Renau Collection",
                desc: "Celebrated in the industry for their extensive color selection, featuring 1,500+ different wig styles, hair extensions, and hair additions.",
                img: "https://styleshairsalonandspaofjoplin.com/wp-content/uploads/2024/02/JonRenau_Logo_White.jpg",
                link: "/jon-renau",
                cta: "Learn More",
              },
            ].map((s, i) => (
              <motion.div key={s.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: i * 0.15 } } }}>
                <div className="card-service group h-full flex flex-col">
                  <div className="h-56 overflow-hidden">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <s.icon className="w-5 h-5 text-secondary" />
                      <h3 className="heading-card">{s.title}</h3>
                    </div>
                    <p className="body-base text-muted-foreground mb-5 flex-1">{s.desc}</p>
                    <Link to={s.link} className="btn-primary text-center">{s.cta}</Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US — Social Proof */}
      <section className="section-alt section-padding">
        <div className="container-site">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <p className="text-sm font-medium uppercase tracking-widest text-secondary mb-3">Why Choose Us</p>
            <h2 className="heading-section mb-4">Come See Why We are the #1 Hair Salon in Joplin</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "20+ Years", desc: "Serving the Joplin community with excellence since day one." },
              { icon: Users, title: "Expert Team", desc: "Ten independent stylists, nail technicians, and an aesthetician." },
              { icon: CheckCircle, title: "Full Service", desc: "Haircuts, color, manicures, pedicures, facials, waxing, and more." },
              { icon: Star, title: "Community Active", desc: "Proud to be active in our community and serving the Joplin area." },
            ].map((item, i) => (
              <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: i * 0.1 } } }}>
                <div className="bg-card rounded-lg p-8 text-center h-full shadow-sm">
                  <item.icon className="w-10 h-10 mx-auto mb-4 text-secondary" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="body-base text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="section-padding">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <img
                src="https://styleshairsalonandspaofjoplin.com/wp-content/uploads/2024/06/295314535_470067738455138_9166722491768599902_n.jpg"
                alt="Styles Hair Salon team"
                className="rounded-lg w-full shadow-lg"
              />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-sm font-medium uppercase tracking-widest text-secondary mb-3">About Us</p>
              <h2 className="heading-section mb-5">Styles Hair Salon Has A Great Team</h2>
              <p className="body-base text-muted-foreground mb-4">
                Styles Hair Salon and Day Spa has been in Joplin, MO for over 20 years. Owner Dianna Thompson strives to ensure that Styles Hair Salon will change the way you think about hair salons with full service comfort, friendly stylists and a relaxing atmosphere.
              </p>
              <p className="body-base text-muted-foreground mb-6">
                Styles Hair Salon is home to ten independent Hair Stylists, Nail Technicians, and an Aesthetician who will customize each service for their clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/meet-our-hairstylists" className="btn-primary">Meet Our Team</Link>
                <a href="tel:4177826167" className="btn-outline gap-2">
                  <Phone className="w-4 h-4" />
                  Call For an Appointment
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SPECIAL OFFER */}
      <section className="section-dark section-padding">
        <div className="container-site text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl mx-auto">
            <Sparkles className="w-10 h-10 mx-auto mb-5 text-secondary" />
            <h2 className="heading-section mb-5">10% Off Your First Visit</h2>
            <p className="body-large mb-8 opacity-80">
              We'll take 10% off your first salon or spa service when you sign up for our e-Newsletter! Only valid with Toni Weston and Sherri Stout.
            </p>
            <a href="tel:4177826167" className="btn-hero">
              Call To Learn More
            </a>
          </motion.div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="section-alt section-padding">
        <div className="container-site text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-sm font-medium uppercase tracking-widest text-secondary mb-3">Premium Products</p>
            <h2 className="heading-section mb-10">Check Out The Brands We Carry</h2>
          </motion.div>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {[
              { src: "https://styleshairsalonandspaofjoplin.com/wp-content/uploads/2024/02/JonRenau_Logo_White.jpg", name: "Jon Renau" },
              { src: "https://styleshairsalonandspaofjoplin.com/wp-content/uploads/2024/02/pureology.png", name: "Pureology" },
              { src: "https://styleshairsalonandspaofjoplin.com/wp-content/uploads/2024/02/Gelish.png", name: "Gelish" },
              { src: "https://styleshairsalonandspaofjoplin.com/wp-content/uploads/2024/02/milk-shake-logo-square-white.png", name: "Milkshake" },
              { src: "https://styleshairsalonandspaofjoplin.com/wp-content/uploads/2024/02/babe-logo-square-white.png", name: "Babe" },
            ].map((b) => (
              <img key={b.name} src={b.src} alt={b.name} className="h-14 md:h-16 object-contain opacity-70 hover:opacity-100 transition-opacity" />
            ))}
          </div>
          <Link to="/brands" className="btn-outline mt-10 inline-flex">View All Our Brands</Link>
        </div>
      </section>

      {/* CONTACT / MAP */}
      <section className="section-padding">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-sm font-medium uppercase tracking-widest text-secondary mb-3">Get In Touch</p>
              <h2 className="heading-section mb-6">Visit Styles Hair Salon Today!</h2>
              <p className="body-base text-muted-foreground mb-8">
                Call us at (417) 782-6167 and book an appointment today! Appointments available upon request.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-secondary mt-0.5" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground font-light">608 E 32nd St, Joplin, MO 64804</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-secondary mt-0.5" />
                  <div>
                    <p className="font-medium">Call</p>
                    <a href="tel:4177826167" className="text-muted-foreground font-light hover:text-secondary transition-colors">(417) 782-6167</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-secondary mt-0.5" />
                  <div>
                    <p className="font-medium">Hours</p>
                    <p className="text-muted-foreground font-light">Monday–Friday: 8am–6pm<br />Saturday: 8am–3pm<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
              <a href="tel:4177826167" className="btn-primary gap-2">
                <Phone className="w-4 h-4" />
                Call For an Appointment Today!
              </a>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="rounded-lg overflow-hidden h-full min-h-[350px]">
                <iframe
                  title="Styles Hair Salon Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3226.8!2d-94.5133!3d37.0396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c86271b7b0b0b1%3A0x1234567890!2s608+E+32nd+St%2C+Joplin%2C+MO+64804!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 350 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
