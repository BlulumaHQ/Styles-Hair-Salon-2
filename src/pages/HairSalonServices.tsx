import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Scissors } from "lucide-react";
import hairImg from "@/assets/hair-styling.jpg";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const services = [
  "Haircuts & Styling",
  "Hair Color",
  "Highlights & Lowlights",
  "Balayage",
  "Perms",
  "Hair Extensions",
  "Updos & Special Occasion",
  "Men's Cuts",
];

const HairSalonServices = () => {
  return (
    <>
      <title>Hair Salon Services | Styles Hair Salon and Day Spa</title>
      <meta name="description" content="From hair color and haircuts to styling, our stylists create looks customized to your individual bone structure and facial features at Styles Hair Salon in Joplin." />

      <section className="section-dark section-padding text-center">
        <div className="container-site">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Scissors className="w-10 h-10 mx-auto mb-4 text-secondary" />
            <h1 className="heading-hero mb-5">Salon Services</h1>
            <p className="body-large opacity-80 max-w-2xl mx-auto">
              Cutting Edge Hair Styles customized to your individual bone structure and facial features.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <img src={hairImg} alt="Hair styling service" className="rounded-lg w-full shadow-lg" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="heading-section mb-5">Cutting Edge Hair Styles</h2>
              <p className="body-base text-muted-foreground mb-6">
                Each of our stylists here at Styles Hair Salon in Joplin has been specially trained to create hair styles customized to your individual bone structure and facial features. From hair color and hair cuts to styling, our stylists can create a look for all occasions that is "individually you."
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {services.map((s) => (
                  <li key={s} className="flex items-center gap-2 body-base text-muted-foreground">
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

      {/* Gallery */}
      <section className="section-alt section-padding">
        <div className="container-site">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
            <h2 className="heading-section">Our Work</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://styleshairsalonandspaofjoplin.com/wp-content/uploads/2024/02/01.jpg",
              "https://styleshairsalonandspaofjoplin.com/wp-content/uploads/2024/02/02.jpg",
              "https://styleshairsalonandspaofjoplin.com/wp-content/uploads/2024/02/03.jpg",
              "https://styleshairsalonandspaofjoplin.com/wp-content/uploads/2024/02/04.jpg",
              "https://styleshairsalonandspaofjoplin.com/wp-content/uploads/2024/02/05.jpg",
              "https://styleshairsalonandspaofjoplin.com/wp-content/uploads/2024/02/06.jpg",
              "https://styleshairsalonandspaofjoplin.com/wp-content/uploads/2024/02/08.jpg",
              "https://styleshairsalonandspaofjoplin.com/wp-content/uploads/2024/02/09.jpg",
            ].map((src, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.4, delay: i * 0.05 } } }}>
                <img src={src} alt={`Hair style ${i + 1}`} className="rounded-lg w-full h-48 md:h-56 object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-center">
        <div className="container-site">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="heading-section mb-5">Ready For a New Look?</h2>
            <p className="body-base text-muted-foreground mb-6 max-w-lg mx-auto">Call us at (417) 782-6167 and book an appointment today!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:4177826167" className="btn-primary gap-2"><Phone className="w-4 h-4" />Call Now</a>
              <Link to="/meet-our-hairstylists" className="btn-outline">Meet Our Team</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HairSalonServices;
