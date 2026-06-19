import { motion } from "framer-motion";
import { fadeUp, smooth, smoothSlow, smoothDelay, smoothDelay2 } from "../lib/motion";

const Hero = (): JSX.Element => {
  return (
    <section id="hero" className="relative flex min-h-screen items-center">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={smooth}
            className="eyebrow mb-6"
          >
            Maison de Parfum · Paris 1924
          </motion.span>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={smoothSlow}
            className="text-6xl font-medium leading-[1.05] md:text-8xl"
          >
            L'art du <span className="text-gold italic">parfum</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={smoothDelay}
            className="mt-8 max-w-md text-lg leading-relaxed text-amber-50/70"
          >
            Setiap botol AURéLIA adalah perpaduan seni dan alkimia — esens langka
            yang diracik tangan untuk mereka yang menghargai keabadian.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={smoothDelay2}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#collection"
              className="rounded-full bg-amber-200 px-8 py-3 font-medium tracking-wide text-[#0e0b08] transition hover:bg-amber-100"
            >
              Jelajahi koleksi
            </a>
            <a
              href="#story"
              className="rounded-full border border-amber-200/40 px-8 py-3 font-medium tracking-wide text-amber-100 transition hover:bg-amber-200/10"
            >
              Kisah kami
            </a>
          </motion.div>
        </div>
        <div aria-hidden className="hidden md:block" />
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.35em] text-amber-100/40">
        Scroll
      </div>
    </section>
  );
};

export default Hero;
