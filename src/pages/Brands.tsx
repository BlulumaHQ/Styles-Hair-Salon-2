import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const brands = [
  { name: "Jon Renau", img: "https://styleshairsalonandspaofjoplin.com/wp-content/uploads/2024/02/JonRenau_Logo_White.jpg", link: "/jon-renau" },
  { name: "Pureology", img: "https://styleshairsalonandspaofjoplin.com/wp-content/uploads/2024/02/pureology.png" },
  { name: "Gelish", img: "https://styleshairsalonandspaofjoplin.com/wp-content/uploads/2024/02/Gelish.png" },
  { name: "Milkshake", img: "https://styleshairsalonandspaofjoplin.com/wp-content/uploads/2024/02/milk-shake-logo-square-white.png" },
  { name: "Babe Extensions", img: "https://styleshairsalonandspaofjoplin.com/wp-content/uploads/2024/02/babe-logo-square-white.png" },
  { name: "1EaElkWk", img: "https://styleshairsalonandspaofjoplin.com/wp-content/uploads/2024/02/1EaElkWk.png" },
];

const Brands = () => {
  return (
    <>
      <title>Brands | Styles Hair Salon and Day Spa</title>
      <meta name="description" content="Discover the premium hair care and beauty brands carried at Styles Hair Salon and Day Spa in Joplin, MO, including Jon Renau, Pureology, Gelish, and more." />

      <section className="section-dark section-padding text-center">
        <div className="container-site">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="heading-hero mb-5">Our Brands</h1>
            <p className="body-large opacity-80 max-w-2xl mx-auto">
              We carry only the finest professional products for your hair and skin care needs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((b, i) => (
              <motion.div key={b.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.5, delay: i * 0.1 } } }}>
                <div className="card-service p-8 text-center h-full flex flex-col items-center justify-center min-h-[200px]">
                  <img src={b.img} alt={b.name} className="h-20 object-contain mb-4" />
                  <h3 className="heading-card">{b.name}</h3>
                  {b.link && (
                    <Link to={b.link} className="text-secondary text-sm mt-2 underline hover:no-underline">Learn More</Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mt-16">
            <p className="body-base text-muted-foreground mb-5">
              We are our very own unique boutique located right inside our shop. Come by and take a look.
            </p>
            <a href="tel:4177826167" className="btn-primary gap-2"><Phone className="w-4 h-4" />Call For an Appointment</a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Brands;
