import { motion } from "framer-motion";
import { fadeUp, smooth, smoothDelay, viewportOnce } from "../lib/motion";

const Story = (): JSX.Element => {
  return (
    <section id="story" className="relative px-6 py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          transition={smooth}
        >
          <span className="eyebrow">La Maison</span>
          <h2 className="mt-4 text-4xl font-medium leading-tight md:text-5xl">
            Seabad <span className="text-gold italic">keanggunan</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-amber-50/70">
            Berawal dari sebuah atelier kecil di jantung Paris, AURéLIA telah
            menorehkan warisan wewangian selama hampir seabad. Setiap formula
            kami lahir dari kesabaran, ketelitian, dan kecintaan pada keindahan.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-amber-50/70">
            Kami tidak sekadar menciptakan parfum — kami merangkai kenangan yang
            menemani setiap momen istimewa dalam hidup Anda.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          transition={smoothDelay}
          className="glass relative overflow-hidden rounded-3xl p-12"
        >
          <div className="font-display text-7xl text-gold">“”</div>
          <p className="-mt-6 font-display text-2xl italic leading-relaxed text-amber-50/90">
            Parfum adalah bentuk seni paling tak terlihat, namun paling abadi
            dalam ingatan.
          </p>
          <div className="mt-8 gold-line" />
          <p className="mt-6 text-sm uppercase tracking-[0.3em] text-amber-200/70">
            Émilie Aurélia · Pendiri
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Story;
