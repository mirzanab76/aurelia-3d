import { motion } from "framer-motion";
import { fadeUp, staggerParent, smooth, viewportOnce } from "../lib/motion";
import { press } from "../data/content";

const Press = (): JSX.Element => {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          transition={smooth}
          className="mb-16 text-center text-4xl font-medium md:text-5xl"
        >
          Dirayakan <span className="text-gold italic">dunia</span>
        </motion.h2>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {press.map((item) => (
            <motion.figure
              key={item.source}
              variants={fadeUp}
              transition={smooth}
              className="flex flex-col items-center text-center"
            >
              <blockquote className="font-display text-2xl italic leading-relaxed text-amber-50/90">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm uppercase tracking-[0.35em] text-amber-200/70">
                {item.source}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Press;
