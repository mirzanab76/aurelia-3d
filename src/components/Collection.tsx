import { motion } from "framer-motion";
import { fadeUp, staggerParent, smooth, viewportOnce } from "../lib/motion";
import { collection } from "../data/content";

const Collection = (): JSX.Element => {
  return (
    <section id="collection" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          transition={smooth}
          className="mb-16 flex flex-col items-end justify-between gap-4 md:flex-row md:items-end"
        >
          <div>
            <span className="eyebrow">La Collection</span>
            <h2 className="mt-4 text-4xl font-medium md:text-5xl">
              Empat <span className="text-gold italic">karya</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-amber-50/60">
            Setiap wewangian dirancang untuk menjadi tanda tangan personal yang
            tak terlupakan.
          </p>
        </motion.div>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {collection.map((product) => (
            <motion.div
              key={product.name}
              variants={fadeUp}
              transition={smooth}
              className="group glass overflow-hidden rounded-3xl p-5 transition hover:-translate-y-2"
            >
              <div
                className={`relative mb-5 flex h-56 items-center justify-center rounded-2xl bg-gradient-to-br ${product.gradient}`}
              >
                <div className="h-28 w-16 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm" />
                <div className="absolute bottom-3 right-3 text-xs uppercase tracking-[0.2em] text-white/60">
                  Eau de Parfum
                </div>
              </div>
              <h3 className="font-display text-xl">{product.name}</h3>
              <p className="mt-1 text-sm text-amber-50/60">{product.tagline}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-amber-100">{product.price}</span>
                <span className="text-sm text-amber-200/70 transition group-hover:text-amber-100">
                  Lihat →
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Collection;
