import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <title>Contact Us | Styles Hair Salon and Day Spa</title>
      <meta name="description" content="Contact Styles Hair Salon and Day Spa in Joplin, MO. Call (417) 782-6167 or visit us at 608 E 32nd St. Open Monday-Friday 8am-6pm, Saturday 8am-3pm." />

      <section className="section-dark section-padding text-center">
        <div className="container-site">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="heading-hero mb-5">Contact Us</h1>
            <p className="body-large opacity-80 max-w-2xl mx-auto">
              Call us at (417) 782-6167 and book an appointment today!
            </p>
            <a href="tel:4177826167" className="btn-hero mt-6 gap-2 inline-flex">
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="heading-section mb-6">Get In Touch</h2>
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-secondary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Location</p>
                    <p className="text-muted-foreground font-light">608 E 32nd St, Joplin, MO 64804</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-secondary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Call</p>
                    <a href="tel:4177826167" className="text-muted-foreground font-light hover:text-secondary transition-colors">(417) 782-6167</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-secondary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <a href="mailto:djt0717@gmail.com" className="text-muted-foreground font-light hover:text-secondary transition-colors">djt0717@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-secondary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Hours</p>
                    <p className="text-muted-foreground font-light">
                      Monday–Friday: 8am–6pm<br />
                      Saturday: 8am–3pm<br />
                      Sunday: Closed
                    </p>
                    <p className="text-sm text-muted-foreground mt-1 italic">Appointments available upon request</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="bg-card rounded-lg p-8 shadow-sm">
                <h3 className="heading-card mb-5">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium mb-1 block">Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground font-light focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-1 block">Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground font-light focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium mb-1 block">Phone</label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground font-light focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-medium mb-1 block">Message</label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground font-light focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-alt section-padding">
        <div className="container-site">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
            <h2 className="heading-section">Find Us</h2>
          </motion.div>
          <div className="rounded-lg overflow-hidden shadow-lg">
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
      </section>
    </>
  );
};

export default ContactUs;
