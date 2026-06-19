import { motion } from "framer-motion";
import { fadeUp, staggerParent, smooth, viewportOnce } from "../lib/motion";
import { ingredients } from "../data/content";

const Ingredients = (): JSX.Element => {
  return (
    <section id="ingredients" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          transition={smooth}
          className="mb-16 text-center"
        >
          <span className="eyebrow">Les Ingrédients</span>
          <h2 className="mt-4 text-4xl font-medium md:text-5xl">
            Esens dari <span className="text-gold italic">seluruh dunia</span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6"
        >
          {ingredients.map((item) => (
            <motion.div
              key={item.name}
              variants={fadeUp}
              transition={smooth}
              className="glass flex flex-col items-center rounded-2xl p-6 text-center transition hover:bg-amber-100/10"
            >
              <div className="text-4xl">{item.icon}</div>
              <div className="mt-3 font-display">{item.name}</div>
              <div className="mt-1 text-xs text-amber-50/55">{item.origin}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Ingredients;
