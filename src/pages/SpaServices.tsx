import { motion } from "framer-motion";
import { Phone, Sparkles } from "lucide-react";
import spaImg from "@/assets/spa-treatment.jpg";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const services = [
  "Facials",
  "Waxing",
  "Manicure",
  "Pedicure",
  "Dead Sea Masks",
  "Skin Care Treatments",
];

const SpaServices = () => {
  return (
    <>
      <title>Spa Services Massages Facials | Styles Hair Salon and Day Spa</title>
      <meta name="description" content="Pamper your skin, body and mind with customized spa treatments, facials, waxing, manicures and pedicures at Styles Hair Salon and Day Spa in Joplin, MO." />

      <section className="section-dark section-padding text-center">
        <div className="container-site">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Sparkles className="w-10 h-10 mx-auto mb-4 text-secondary" />
            <h1 className="heading-hero mb-5">Spa Services</h1>
            <p className="body-large opacity-80 max-w-2xl mx-auto">
              Treat yourself and pamper your skin, body and mind.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <img src={spaImg} alt="Spa treatment room" className="rounded-lg w-full shadow-lg" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="heading-section mb-5">Relax. Refresh. Renew.</h2>
              <p className="body-base text-muted-foreground mb-6">
                You deserve the best for your skin care. Together, we can choose a customized treatment tailored for your specific needs. So treat yourself and pamper your skin, body and mind.
              </p>
              <ul className="space-y-3 mb-8">
                {services.map((s) => (
                  <li key={s} className="flex items-center gap-3 body-base text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
              <a href="tel:4177826167" className="btn-primary gap-2">
                <Phone className="w-4 h-4" />
                Call For an Appointment Today!
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-alt section-padding">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-2 lg:order-1">
              <h2 className="heading-section mb-5">Dead Sea Treatments</h2>
              <p className="body-base text-muted-foreground mb-6">
                Experience the rejuvenating power of Dead Sea minerals. Our specialized treatments help revitalize your skin and leave you feeling refreshed and renewed.
              </p>
              <a href="tel:4177826167" className="btn-primary gap-2">
                <Phone className="w-4 h-4" />
                Book a Treatment
              </a>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-1 lg:order-2">
              <img src="https://styleshairsalonandspaofjoplin.com/wp-content/uploads/2024/02/dead-sea-mask.jpg" alt="Dead Sea mask treatment" className="rounded-lg w-full shadow-lg" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SpaServices;
