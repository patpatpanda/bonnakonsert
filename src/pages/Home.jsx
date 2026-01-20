import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import burger from "../assets/BURGARE.png";

export default function Home() {
const links = [
  { title: "Bonnatösens Lada", to: "/burgers" },
  { title: "Bonnatösens Saloon", to: "/saloon" },
  { title: "Våra Burgare", to: "/burgare" },
  { title: "Catering", to: "/catering" },
  { title: "Karta", to: "/karta" },

  // 👇 nya, viktiga CTA-länkar
  { title: "Boka bord", to: "/booking", highlight: true },
  { title: "Cateringförfrågan", to: "/cateringbooking", highlight: true },
];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center p-8 bg-gradient-to-b from-[#fff4df] via-[#f8e7c4] to-[#e6cfa6] overflow-hidden">

      {/* subtil dekor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.6),transparent_60%)]"></div>

      <div className="relative z-10 flex flex-col items-center">

        {/* Rubrik */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl  text-[#5b3a29] drop-shadow-md mb-6"
        >
          Välkommen till Bonnatösen
        </motion.h1>

       

        {/* 🍔 Burgare (liten, snabb) */}
        <motion.img
          src={burger}
          alt="Bonnatösens Burgare"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="w-56 md:w-72 mb-12 drop-shadow-xl"
        />

        {/* 🪧 Skylt-navigation */}
        <div className="relative flex flex-col items-center mt-6">

          {/* Stolpe */}
          <div className="w-6 bg-[#5b3a29] rounded-lg h-[580px] absolute top-0 shadow-md"></div>

          {/* Skyltar */}
          <div className="flex flex-col gap-4 relative z-10 mt-4">
            {links.map((link, i) => {
              const tilt = i % 2 === 0 ? "-rotate-2" : "rotate-2";

              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.08, rotate: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`transform ${tilt}`}
                >
                 <Link
  to={link.to}
  className={`
    font-semibold px-10 py-3 rounded-lg shadow-xl block min-w-[220px] border-2 tracking-wide
    ${
      link.highlight
        ? "bg-[#5b3a29] text-white border-[#3c2a1d] hover:bg-[#3c2a1d]"
        : "bg-[#f8a109] text-white border-[#d88b00] hover:bg-[#d87d00]"
    }
  `}
>
  {link.title}
</Link>

                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
