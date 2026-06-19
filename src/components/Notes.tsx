import { motion } from "framer-motion";
import { fadeUp, staggerParent, smooth, viewportOnce } from "../lib/motion";
import { fragranceNotes } from "../data/content";

const Notes = (): JSX.Element => {
  return (
    <section id="notes" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          transition={smooth}
          className="mb-16 text-center"
        >
          <span className="eyebrow">La Pyramide Olfactive</span>
          <h2 className="mt-4 text-4xl font-medium md:text-5xl">
            Anatomi sebuah <span className="text-gold italic">aroma</span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {fragranceNotes.map((note) => (
            <motion.div
              key={note.tier}
              variants={fadeUp}
              transition={smooth}
              className="glass rounded-3xl p-8"
            >
              <div className="font-display text-5xl text-amber-200/30">{note.tier}</div>
              <h3 className="mt-4 text-2xl font-medium">{note.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-amber-50/65">{note.description}</p>
              <div className="mt-6 gold-line" />
              <ul className="mt-6 space-y-2">
                {note.scents.map((scent) => (
                  <li key={scent} className="flex items-center gap-3 text-amber-50/85">
                    <span className="h-1 w-1 rounded-full bg-amber-300" />
                    {scent}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Notes;
