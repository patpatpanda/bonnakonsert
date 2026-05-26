import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import burger from "../assets/bonvit.png";
import hero4 from "../assets/hero4.webp";

export default function Home() {
  const [showHours, setShowHours] = useState(false);
  const [showCatering, setShowCatering] = useState(false);

  const links = [
    { title: "Bonnatösens Lada", to: "/burgers" },
    { title: "Bonnatösens Saloon", to: "/saloon" },
    { title: "Våra Burgare", to: "/burgare" },
    { title: "Catering", action: "catering" },
    { title: "Karta", to: "/karta" },
  ];

  return (
    <>
      <section
        className="
          relative w-full
          min-h-[70dvh] lg:min-h-[80dvh]
          flex items-center justify-center
          bg-cover bg-center
        "
        style={{
          backgroundImage: `url(${hero4})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div
          className="
            relative z-10 flex flex-col items-center text-center px-6
            -translate-y-[20px] md:translate-y-0
          "
        >
          <motion.img
            src={burger}
            alt="Bonnatösen"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              w-72 sm:w-96 md:w-[30rem] lg:w-[34rem]
              mb-10 drop-shadow-2xl
            "
          />

          <div
            className="
              flex flex-wrap justify-center gap-5 max-w-2xl
              -mt-[70px] md:mt-0
            "
          >
            {links.map((link, i) =>
              link.to ? (
                <Link
                  key={i}
                  to={link.to}
                  className="
                    px-6 py-3 rounded-xl font-semibold transition
                    border-2 border-white text-white
                    hover:bg-white hover:text-[#5b3a29]
                    shadow-md hover:shadow-lg
                    text-base md:text-lg
                  "
                >
                  {link.title}
                </Link>
              ) : (
                <button
                  key={i}
                  type="button"
                  onClick={() => setShowCatering(true)}
                  className="
                    px-6 py-3 rounded-xl font-semibold transition
                    border-2 border-white text-white
                    hover:bg-white hover:text-[#5b3a29]
                    shadow-md hover:shadow-lg
                    text-base md:text-lg
                  "
                >
                  {link.title}
                </button>
              )
            )}

            <button
              type="button"
              onClick={() => setShowHours(true)}
              className="
                px-6 py-3 rounded-xl font-semibold transition
                border-2 border-white text-white
                hover:bg-white hover:text-[#5b3a29]
                shadow-md hover:shadow-lg
                text-base md:text-lg
              "
            >
              Öppettider
            </button>

            <Link
              to="/konsert"
              className="
                w-full mt-4 px-6 py-4 rounded-xl font-semibold transition
                border-2 border-white text-white
                hover:bg-amber-400 hover:text-stone-900
                shadow-md hover:shadow-lg text-base md:text-lg
                flex flex-col items-center gap-1
              "
            >
              <span className="text-xs tracking-widest uppercase text-white font-semibold">
                🎸 Live-konsert
              </span>
              <span className="text-lg font-bold text-white">
                Drängarna hos Bonnatösen
              </span>
              <span className="text-sm text-white">
                Fredag 10 juli 2026 · kl 20:00 · Köp biljett →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ÖPPETTIDER POPUP */}
      {showHours && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
          onClick={() => setShowHours(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-md bg-[#fff8ec] text-[#3c2a1d] rounded-3xl shadow-2xl border border-[#d1b48c] p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowHours(false)}
              className="absolute top-4 right-5 text-3xl leading-none text-[#5b3a29] hover:text-[#f8a109]"
            >
              ×
            </button>

            <p className="uppercase tracking-[0.3em] text-[#c57a00] font-semibold text-xs mb-3 text-center">
              Välkommen in
            </p>

            <h2 className="text-4xl font-rye text-[#5b3a29] text-center mb-8">
              Öppettider
            </h2>

            <ul className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-3 text-lg leading-relaxed">
              <li className="font-semibold">Torsdag:</li>
              <li>10:30–15:00</li>

              <li className="font-semibold">Fredag:</li>
              <li>10:30–20:00</li>

              <li className="font-semibold">Lördag:</li>
              <li>11:00–16:00</li>

              <li className="font-semibold">Söndag:</li>
              <li>11:00–16:00</li>
            </ul>

            <div className="mt-8 pt-6 border-t border-[#d1b48c] text-center space-y-3">
              <p className="text-lg font-semibold text-[#5b3a29]">
                Just nu gäller Saloonen
              </p>

              <p className="text-[#5b3a29]/80">📍 Prästgatan 27, Nora</p>

              <p className="text-sm leading-relaxed text-[#5b3a29]/70 max-w-sm mx-auto">
                Fram till 27 juni håller vi till i Saloonen i bryggeriområdet.
                Därefter flyttar vi tillbaka ut till ladan för sommarsäsongen.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowHours(false)}
              className="mt-8 w-full bg-[#f8a109] text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-[#cf8600] transition"
            >
              Stäng
            </button>
          </motion.div>
        </div>
      )}

      {/* CATERING POPUP */}
      {showCatering && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
          onClick={() => setShowCatering(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-md bg-[#fff8ec] text-[#3c2a1d] rounded-3xl shadow-2xl border border-[#d1b48c] p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowCatering(false)}
              className="absolute top-4 right-5 text-3xl leading-none text-[#5b3a29] hover:text-[#f8a109]"
            >
              ×
            </button>

            <p className="uppercase tracking-[0.3em] text-[#c57a00] font-semibold text-xs mb-3 text-center">
              Catering
            </p>

            <h2 className="text-4xl font-rye text-[#5b3a29] text-center mb-6">
              Förfrågningar
            </h2>

            <div className="space-y-5 text-center text-lg leading-relaxed text-[#4b3728]">
              <p>
                Under högsäsongen har vi oftast inte möjlighet att ta
                cateringuppdrag.
              </p>

              <p>
                Har du ändå en förfrågan är du varmt välkommen att höra av dig,
                så kollar vi möjligheterna tillsammans.
              </p>

              <p>Vid catering är det våra burgare som gäller.</p>
            </div>

            <button
              type="button"
              onClick={() => setShowCatering(false)}
              className="mt-8 w-full bg-[#f8a109] text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-[#cf8600] transition"
            >
              Stäng
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
}