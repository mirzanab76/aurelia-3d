import { forwardRef } from "react";
import { motion } from "framer-motion";
import { fadeUp, smooth, viewportOnce } from "../lib/motion";

const descriptors: ReadonlyArray<{ label: string; value: string }> = [
  { label: "Konsentrasi", value: "Extrait de Parfum 25%" },
  { label: "Sillage", value: "Hangat · Mendalam" },
  { label: "Ketahanan", value: "10–12 jam" },
  { label: "Botol", value: "Kristal tiup tangan" },
];

const Showcase = forwardRef<HTMLElement>((_props, ref): JSX.Element => {
  return (
    <section id="showcase" ref={ref} className="relative px-6 py-36">
      <div className="mx-auto max-w-6xl text-center">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          transition={smooth}
          className="eyebrow"
        >
          Le Flacon Signature
        </motion.span>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          transition={smooth}
          className="mx-auto mt-4 max-w-2xl text-4xl font-medium md:text-6xl"
        >
          Keindahan yang dapat Anda <span className="text-gold italic">genggam</span>
        </motion.h2>
      </div>

      {/* Ruang agar botol 3D (canvas di belakang) menjadi fokus utama */}
      <div aria-hidden className="h-[50vh]" />

      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-amber-100/10 bg-amber-100/10 md:grid-cols-4">
        {descriptors.map((item) => (
          <motion.div
            key={item.label}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            transition={smooth}
            className="bg-[#0e0b08] p-6 text-center"
          >
            <div className="text-xs uppercase tracking-[0.2em] text-amber-200/60">{item.label}</div>
            <div className="mt-2 font-display text-lg">{item.value}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
});

Showcase.displayName = "Showcase";
export default Showcase;
