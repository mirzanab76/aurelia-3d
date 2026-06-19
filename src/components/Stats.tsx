import { motion } from "framer-motion";
import { fadeUp, staggerParent, smooth, viewportOnce } from "../lib/motion";
import { stats } from "../data/content";

const Stats = (): JSX.Element => {
  return (
    <section className="relative px-6 py-12">
      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-amber-100/10 bg-amber-100/10 md:grid-cols-4"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeUp}
            transition={smooth}
            className="bg-[#0e0b08] p-8 text-center"
          >
            <div className="font-display text-4xl text-gold">{stat.value}</div>
            <div className="mt-2 text-xs uppercase tracking-[0.2em] text-amber-50/55">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Stats;
