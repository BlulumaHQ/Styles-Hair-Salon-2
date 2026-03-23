import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const JonRenau = () => {
  return (
    <>
      <title>Jon Renau | Styles Hair Salon and Day Spa</title>
      <meta name="description" content="Now offering Jon Renau wigs, hair extensions, hair additions, and hairpieces at Styles Hair Salon in Joplin, MO. Featuring 1,500+ styles." />

      <section className="section-dark section-padding text-center">
        <div className="container-site">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="heading-hero mb-5">Now Offering Jon Renau</h1>
            <p className="body-large opacity-80 max-w-2xl mx-auto">
              Celebrated in the industry for their extensive color selection and innovative designs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <img src="https://styleshairsalonandspaofjoplin.com/wp-content/uploads/2024/02/JonRenau_Logo_White.jpg" alt="Jon Renau" className="rounded-lg w-full shadow-lg" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="heading-section mb-5">1,500+ Styles Available</h2>
              <p className="body-base text-muted-foreground mb-4">
                Celebrated in the industry for their extensive color selection, Jon Renau's portfolio currently features 1,500+ different wig styles, hair extensions, hair additions, hairpieces, headwear, and hair care products, along with our exclusive SmartLace™, SmartLace™ Human Hair, Heat Defiant and toppers collections.
              </p>
              <p className="body-base text-muted-foreground mb-8">
                Come by our shop and take a look. We are our very own unique boutique located right inside our shop.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:4177826167" className="btn-primary gap-2"><Phone className="w-4 h-4" />Call For an Appointment</a>
                <Link to="/brands" className="btn-outline">View All Brands</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JonRenau;
