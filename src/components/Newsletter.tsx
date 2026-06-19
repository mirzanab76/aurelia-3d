import { motion } from "framer-motion";
import { scaleIn, smooth, viewportOnce } from "../lib/motion";

const Newsletter = (): JSX.Element => {
  return (
    <section id="newsletter" className="relative px-6 py-32">
      <motion.div
        variants={scaleIn}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        transition={smooth}
        className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-amber-100/15 bg-gradient-to-br from-amber-300/15 via-yellow-700/10 to-[#0e0b08] p-12 text-center md:p-16"
      >
        <span className="eyebrow">Le Cercle Aurélia</span>
        <h2 className="mx-auto mt-4 max-w-xl text-3xl font-medium md:text-5xl">
          Bergabung dengan <span className="text-gold italic">lingkaran kami</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-amber-50/65">
          Dapatkan akses eksklusif ke peluncuran terbatas dan undangan acara
          privat.
        </p>
        <form
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="Alamat email Anda"
            className="w-full rounded-full border border-amber-100/20 bg-white/5 px-5 py-3 text-sm text-amber-50 outline-none placeholder:text-amber-50/40 focus:border-amber-200/50"
          />
          <button
            type="submit"
            className="rounded-full bg-amber-200 px-7 py-3 font-medium tracking-wide text-[#0e0b08] transition hover:bg-amber-100"
          >
            Berlangganan
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Newsletter;
