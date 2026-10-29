

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
    { title: "Hitta hit", to: "/karta" },
  ];

  return (
    <>
      <section
        className="
          relative w-full
          min-h-[90dvh] lg:min-h-[90dvh]
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
      {/* STÄNG */}
      <button
        type="button"
        onClick={() => setShowHours(false)}
        className="absolute top-4 right-5 text-3xl leading-none text-[#5b3a29] hover:text-[#f8a109]"
        aria-label="Stäng"
      >
        ×
      </button>

      {/* RUBRIK */}
      <p className="uppercase tracking-[0.3em] text-[#c57a00] font-semibold text-xs mb-3 text-center">
        Bonnatösens Saloon
      </p>

      <h2 className="text-4xl font-rye text-[#5b3a29] text-center mb-3">
        Öppettider
      </h2>

      <p className="text-center text-lg text-[#5b3a29] mb-8">
        Välkommen till oss i Nora!
      </p>

      {/* ÖPPETTIDER */}
      <div className="border-t border-[#d1b48c] pt-6">
        <div className="space-y-3">

          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-[#5b3a29]">
              Torsdag
            </span>
            <span className="text-lg font-semibold text-[#f8a109]">
              10:30–15:00
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-[#5b3a29]">
              Fredag
            </span>
            <span className="text-lg font-semibold text-[#f8a109]">
              10:30–20:00
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-[#5b3a29]">
              Lördag
            </span>
            <span className="text-lg font-semibold text-[#f8a109]">
              11:00–20:00
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-[#5b3a29]">
              Söndag
            </span>
            <span className="text-lg font-semibold text-[#f8a109]">
              11:00–16:00
            </span>
          </div>

        </div>
      </div>

      {/* SALOON INFO */}
      <div className="mt-7 bg-[#f8a109] text-[#2b1b10] rounded-2xl p-4 text-center">
        <p className="uppercase tracking-[0.2em] font-semibold text-xs mb-1">
          Nu har vi öppnat!
        </p>

        <p className="text-xl font-rye">
          Bonnatösens Saloon
        </p>

        <p className="text-base font-semibold mt-1">
          Välkommen in till oss i Nora
        </p>
      </div>

      {/* STÄNG KNAPP */}
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