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

        <div className="absolute inset-0 bg-black/60" />

        {/* Tillbaka */}
        <Link
          to="/"
          className="absolute top-6 left-5 md:top-10 md:left-10 z-10 text-white hover:text-[#f8c04d] font-semibold transition-colors duration-200"
        >
          ← Tillbaka
        </Link>

        {/* HERO CONTENT */}
        <div className="relative z-10 text-center px-5 max-w-5xl mx-auto py-24">

          <p className="uppercase tracking-[0.35em] text-[#f8c04d] font-semibold text-xs md:text-sm mb-4">
            Sommaren 2026
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-rye text-white drop-shadow-2xl mb-6">
            Bonnatösens Lada
          </h1>

          {/* STÄNGT */}
          <div className="inline-block bg-[#fff8ec] text-[#5b3a29] px-6 py-4 md:px-9 md:py-5 rounded-2xl shadow-xl border border-white/30 mb-6">
            <p className="uppercase tracking-[0.2em] text-[#c57a00] font-semibold text-xs mb-2">
              Säsongen är avslutad
            </p>

            <p className="text-2xl md:text-4xl font-rye">
              Ladan är stängd för säsongen
            </p>
          </div>

          <p className="text-white text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed drop-shadow-lg mb-8">
            Tack för en fantastisk sommar i Järnboås!
            Nu fortsätter vi inne i Nora – välkommen till Bonnatösens Saloon.
          </p>

          {/* SALOON CTA */}
          <div className="max-w-xl mx-auto bg-black/40 backdrop-blur-md px-6 md:px-8 py-6 rounded-3xl border border-white/20 shadow-xl">

            <p className="uppercase tracking-[0.25em] text-[#f8c04d] font-semibold text-xs mb-2">
              Vi har öppet!
            </p>

            <h2 className="text-2xl md:text-3xl font-rye text-white mb-3">
              Bonnatösens Saloon
            </h2>

            <p className="text-white text-lg font-semibold">
              📍 Prästgatan 27, Nora
            </p>

          </div>

        </div>
      </section>

      {/* CONTENT */}
      <main className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20">

        {/* SÄSONGSINFORMATION */}
        <section className="bg-white border border-[#e2c9a7] rounded-3xl shadow-xl p-6 md:p-10 mb-12 md:mb-20">

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">

            {/* STÄNGT-KORT */}
            <div className="bg-[#fff5e8] border border-[#f1c07b] rounded-2xl p-6 md:p-8 text-center">

              <p className="uppercase tracking-[0.25em] text-[#c57a00] font-semibold text-xs mb-3">
                Bonnatösens Lada
              </p>

              <h2 className="text-3xl font-rye text-[#5b3a29] mb-4">
                Stängt för säsongen
              </h2>

              <p className="text-lg leading-relaxed">
                Sommarsäsongen 2026 på gården i Järnboås är avslutad.
              </p>

            </div>

            {/* SALOON INFORMATION */}
            <div className="space-y-5 text-center lg:text-left">

              <p className="uppercase tracking-[0.25em] text-[#c57a00] font-semibold text-xs">
                Men vi ses fortfarande!
              </p>

              <h2 className="text-3xl md:text-4xl font-rye text-[#5b3a29]">
                Hitta oss på Bonnatösens Saloon
              </h2>

              <p className="text-lg leading-relaxed">
                Ladan har stängt för sommarsäsongen, men Bonnatösen fortsätter
                inne i Nora. Välkommen till vår Saloon på Prästgatan 27!
              </p>

              {/* ÖPPETTIDER SALOON */}
              <div className="bg-[#fff5e8] border border-[#f1c07b] rounded-2xl p-5">

                <p className="font-semibold text-[#5b3a29] mb-3">
                  Saloonens öppettider
                </p>

                <div className="space-y-2">

                  <div className="flex justify-between gap-6">
                    <span>Torsdag</span>
                    <span className="font-semibold">
                      10:30–15:00
                    </span>
                  </div>

                  <div className="flex justify-between gap-6">
                    <span>Fredag</span>
                    <span className="font-semibold">
                      10:30–20:00
                    </span>
                  </div>

                  <div className="flex justify-between gap-6">
                    <span>Lördag</span>
                    <span className="font-semibold">
                      11:00–20:00
                    </span>
                  </div>

                  <div className="flex justify-between gap-6">
                    <span>Söndag</span>
                    <span className="font-semibold">
                      11:00–16:00
                    </span>
                  </div>

                </div>
              </div>

            
            </div>

          </div>
        </section>

        {/* VÅR RESA */}
        <section className="mb-12 md:mb-20 bg-white border border-[#e2c9a7] rounded-3xl shadow-md overflow-hidden">

          <div className="grid lg:grid-cols-2">

            <motion.img
              src={hanna}
              alt="Vår resa"
              className="w-full h-72 sm:h-96 lg:h-full object-cover cursor-pointer"
              onClick={() => setActiveImage(hanna)}
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

        {/* RENOVERING */}
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
              Renoveringen har stärkt konstruktionen och gett ett nytt,
              hållbart tak som gör det möjligt att fortsätta utveckla gården
              som en samlingsplats för både lokala aktörer och besökare.
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