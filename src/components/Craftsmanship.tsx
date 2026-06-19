import { motion } from "framer-motion";
import { fadeUp, staggerParent, smooth, viewportOnce } from "../lib/motion";
import { craftsmanship } from "../data/content";

const Craftsmanship = (): JSX.Element => {
  return (
    <section id="craft" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          transition={smooth}
          className="mb-16 text-center"
        >
          <span className="eyebrow">Le Savoir-Faire</span>
          <h2 className="mt-4 text-4xl font-medium md:text-5xl">
            Dari ladang ke <span className="text-gold italic">kristal</span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-8 md:grid-cols-4"
        >
          {craftsmanship.map((step) => (
            <motion.div key={step.step} variants={fadeUp} transition={smooth}>
              <div className="font-display text-6xl text-amber-200/25">{step.step}</div>
              <div className="mt-4 gold-line" />
              <h3 className="mt-6 text-xl font-medium">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-amber-50/65">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Craftsmanship;
