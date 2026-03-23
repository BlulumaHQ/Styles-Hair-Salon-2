import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const stylists = [
  { name: "Dianna Thompson", role: "Owner / Stylist", img: "https://styleshairsalonandspaofjoplin.com/wp-content/uploads/2014/05/styles-41-web-1.png" },
  { name: "Sherri Stout", role: "Stylist", img: "https://styleshairsalonandspaofjoplin.com/wp-content/uploads/2014/05/sherri-web-1.png" },
];

const MeetOurHairstylists = () => {
  return (
    <>
      <title>Meet Our Hairstylists | Styles Hair Salon and Day Spa</title>
      <meta name="description" content="Meet the talented team of independent hair stylists, nail technicians, and aestheticians at Styles Hair Salon in Joplin, MO." />

      {/* Hero */}
      <section className="section-dark section-padding text-center">
        <div className="container-site">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <p className="text-sm font-medium uppercase tracking-widest text-secondary mb-3">Our Team</p>
            <h1 className="heading-hero mb-5">Meet Our Hairstylists</h1>
            <p className="body-large opacity-80 max-w-2xl mx-auto">
              Styles Hair Salon is home to ten independent Hair Stylists, Nail Technicians, and an Aesthetician who will customize each service for their clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding">
        <div className="container-site">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stylists.map((s, i) => (
              <motion.div key={s.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: i * 0.15 } } }}>
                <div className="card-service text-center">
                  <div className="h-72 overflow-hidden">
                    <img src={s.img} alt={s.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="heading-card mb-1">{s.name}</h3>
                    <p className="text-sm text-muted-foreground">{s.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mt-16">
            <p className="body-base text-muted-foreground mb-5 max-w-xl mx-auto">
              Whether it be a haircut, style, manicure, pedicure, facial, or waxing — the design team will ensure that your experience at Styles Hair Salon and Day Spa will leave you glowing inside and out.
            </p>
            <a href="tel:4177826167" className="btn-primary gap-2">
              <Phone className="w-4 h-4" />
              Call For an Appointment Today!
            </a>
          </motion.div>
        </div>
      </section>

      {/* Hiring */}
      <section className="section-alt section-padding">
        <div className="container-site text-center max-w-3xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="heading-section mb-5">Styles Hair Salon is Hiring!</h2>
            <p className="body-base text-muted-foreground mb-6">
              Styles salon is currently seeking experienced and licensed cosmetologists to join our team. We are a full service hair salon that has been in business over 20 years. We are active in our community and enjoy serving the Joplin area. As an established hair salon we not only have an excellent location but also great potential to build a strong clientele.
            </p>
            <p className="body-base text-muted-foreground mb-6">
              Our friendly and professional team takes pride in providing excellent service while keeping up with the latest trends. If you feel you would be a good fit for our team please contact Dianna by calling (417) 782-6167.
            </p>
            <a href="tel:4177826167" className="btn-primary gap-2">
              <Phone className="w-4 h-4" />
              Contact Dianna
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default MeetOurHairstylists;
