import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ladaImg from "../assets/hero1.webp";
import liggandeImg from "../assets/Liggande.png";
import hero2 from "../assets/hero2.webp";
import hanna from "../assets/hanna.png";

export default function Burgers() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div className="min-h-screen bg-[#fdf8f3] text-[#3a2a1d]">
      {/* HERO */}
      <section className="relative min-h-[75vh] md:min-h-[92vh] bg-black overflow-hidden flex items-center justify-center">
        <img
          src={hero2}
          alt="Bonnatösens Lada"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/45" />

        <Link
          to="/"
          className="absolute top-6 left-5 md:top-10 md:left-10 z-10 text-white hover:text-[#f8c04d] font-semibold transition-colors duration-200"
        >
          ← Tillbaka
        </Link>

        <div className="relative z-10 text-center px-5 max-w-5xl mx-auto">
          <p className="uppercase tracking-[0.35em] text-[#f8c04d] font-semibold text-xs md:text-sm mb-4">
            Sommaren 2026
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-rye text-white drop-shadow-2xl mb-6">
            Bonnatösens Lada
          </h1>

          <div className="inline-block bg-[#f8a109] text-[#2b1b10] px-5 py-3 md:px-8 md:py-4 rounded-2xl shadow-xl border border-white/20 mb-6">
            <p className="text-2xl md:text-4xl font-rye">
              Ladan öppnar 27 juni
            </p>
          </div>

          <p className="text-white text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Hela sommaren fylls ladan med burgare, musik, människor och skön
            stämning ute på gården i Järnboås.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <main className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20">
        {/* Öppettider */}
        <section className="bg-white border border-[#e2c9a7] rounded-3xl shadow-xl p-6 md:p-10 mb-12 md:mb-20 -mt-20 relative z-20">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-8 items-center">
            <div className="bg-[#fff5e8] border border-[#f1c07b] rounded-2xl p-6 md:p-8 text-center">
              <p className="uppercase tracking-[0.25em] text-[#c57a00] font-semibold text-xs mb-3">
                Premiär
              </p>

              <h2 className="text-4xl md:text-5xl font-rye text-[#f8a109] leading-tight">
                27 juni
              </h2>

              <p className="mt-4 text-[#5b3a29] text-lg">
                Då öppnar ladan för sommaren.
              </p>
            </div>

            <div className="space-y-4 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-rye text-[#5b3a29]">
                När har ladan öppet?
              </h2>

              <p className="text-lg leading-relaxed">
                Vi håller öppet under sommarsäsongen och uppdaterar alltid
                aktuella öppettider via våra sociala medier.
              </p>

              <p className="text-lg leading-relaxed">
                Under vintern kan det även dyka upp enstaka event i ladan –
                håll utkik för kommande datum och aktiviteter.
              </p>

              <p className="text-lg leading-relaxed">
                Vill du hyra ladan för ett företagsevent eller något kul med
                vännerna? Hör av er så kollar vi möjligheterna.
              </p>
            </div>
          </div>
        </section>

        {/* Ingress */}
       

        {/* Vår resa */}
        <section className="mb-12 md:mb-20 bg-white border border-[#e2c9a7] rounded-3xl shadow-md overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <motion.img
              src={hanna}
              alt="Vår resa"
              className="w-full h-72 sm:h-96 lg:h-full object-cover cursor-pointer"
              onClick={() => setActiveImage(hero2)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />

            <div className="p-6 md:p-10 leading-relaxed space-y-5">
              <h2 className="text-3xl md:text-4xl font-rye text-[#5b3a29]">
                Vår resa
              </h2>

              <p className="text-lg">
                Det började egentligen som ett skämt – en grill, några vänner
                och ett test under Bergslagens loppishelg 2021. Men det visade
                sig snabbt att våra burgare var här för att stanna.
              </p>

              <p className="text-lg">
                På vårt allra första event, med bara en grill, dök runt 300
                personer upp på gården. På bara några timmar var allt slut.
              </p>

              <p className="text-lg">
                Det blev startskottet för något mycket större. Idag, under
                högsäsong, kommer tusentals människor för att äta våra burgare –
                och hänga i vår lada.
              </p>

              <p className="text-lg">
                Vill man följa hela resan – allt bakom kulisserna, bygget av
                ladan och livet här ute – så finns den på vår YouTube-kanal{" "}
                <a
                  href="https://www.youtube.com/feed/subscriptions/UCaIAV31L9DGmwuf_6Q8k2Ig"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline hover:text-[#c57a00]"
                >
                  Bonnalife
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Renovering */}
        <section className="bg-white border border-[#e2c9a7] rounded-3xl shadow-md p-6 md:p-10 leading-relaxed">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl md:text-4xl font-rye text-[#5b3a29] mb-4">
              Renovering av ladans tak
            </h2>

            <p className="text-lg">
              Med stöd från EU och Leader Bergslagen har vi renoverat den del av
              ladans tak som var i störst behov av åtgärd.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.img
              src={ladaImg}
              alt="Renovering av ladans tak"
              className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-md cursor-pointer"
              onClick={() => setActiveImage(ladaImg)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />

            <motion.img
  src={liggandeImg}
  alt="Renoverad taksektion"
  className="w-full h-72 md:h-96 object-contain bg-[#fdf8f3] rounded-2xl shadow-md cursor-pointer"
  onClick={() => setActiveImage(liggandeImg)}
  whileHover={{ scale: 1.02 }}
  transition={{ duration: 0.3 }}
/>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-5">
            <p className="text-lg">
              Syftet var att säkra byggnaden och skapa förutsättningar för att
              utveckla ladan till en året-runt-anpassad mötesplats för
              evenemang, marknader och samarbeten.
            </p>

            <p className="text-lg">
              Renoveringen har stärkt den bärande konstruktionen och gett ett
              nytt, hållbart tak som gör det möjligt att fortsätta utveckla
              gården som en samlingsplats för både lokala aktörer och besökare.
            </p>
          </div>
        </section>
      </main>

      {/* MODAL */}
      {activeImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <motion.img
            src={activeImage}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </div>
  );
}