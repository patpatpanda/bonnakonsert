import { Link } from "react-router-dom";
import bildsaloon from "../assets/bildsaloon.webp";
import saloonen from "../assets/Saloonen.jpeg";
import ologbild from "../assets/vår egna öl.JPG";


export default function Saloon() {
  return (
    <div className="min-h-screen bg-[#fff8ec] text-[#3c2a1d]">
   {/* HERO */}
<section className="relative min-h-[60vh] md:min-h-[68vh] bg-black overflow-hidden flex items-center justify-center">

  {/* mörk overlay/bakgrund */}
  <div className="absolute inset-0 bg-gradient-to-b from-black via-[#111] to-[#1a1a1a]" />

  {/* Tillbaka */}
  <Link
    to="/"
    className="absolute top-6 left-5 md:top-10 md:left-10 z-10 text-white hover:text-[#f8c04d] font-semibold transition"
  >
    ← Tillbaka
  </Link>

  {/* Hero-content */}
  <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

    <p className="uppercase tracking-[0.35em] text-[#f8c04d] font-semibold text-xs md:text-sm mb-4">
       bryggeriområdet
    </p>

    <h1 className="text-5xl sm:text-6xl md:text-8xl font-rye text-white drop-shadow-2xl mb-6">
      Bonnatösens Saloon
    </h1>

    <p className="text-white/90 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">
      Välkommen till vår vinteroas i bryggeriområdet i Nora – där burgare, hantverksöl och gemenskap möts.
    </p>

  </div>
</section>

      {/* CONTENT */}
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20">
        {/* INTRO */}
     {/* INTRO */}
<section className="bg-white border border-[#d1b48c] shadow-xl rounded-3xl p-8 md:p-14 mb-16 md:mb-24">
  
  <div className="max-w-4xl mx-auto text-center">
    
    <p className="uppercase tracking-[0.25em] text-[#c57a00] font-semibold text-xs mb-4">
      Vinteroas i Nora
    </p>

    <h2 className="text-3xl md:text-5xl font-rye text-[#5b3a29] mb-8">
      Burgare, öl & skön stämning
    </h2>

    <div className="space-y-6 text-lg md:text-xl leading-relaxed text-[#4b3728]">
      
   <p>
  När ladan håller stängt för säsongen hittar ni oss istället inne i Saloonen i bryggeriområdet i Nora.
</p>

<p>
  Här serverar vi våra populära burgare tillsammans med hantverksöl från Örebro Brygghus.
</p>

<p>
  Tillsammans med bryggeriet har vi dessutom tagit fram vår egen USA-inspirerade lager. Den och många andra brygder  hittar du inne i Saloonen.
</p>
    </div>
  </div>
</section>

        {/* ÖL */}
        <section className="mb-16 md:mb-24">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-12 items-center">
            <div className="bg-white p-4 shadow-xl rounded-3xl border border-[#e2c9a7] rotate-[-1deg] hover:rotate-0 transition duration-300 max-w-md mx-auto">
              <img
                src={ologbild}
                alt="Vår egen öl"
                className="w-full h-80 md:h-[30rem] object-cover rounded-2xl"
              />

              <p className="text-sm text-center text-[#5b3a29]/70 mt-3 italic">
                Vår egen öl – framtagen tillsammans med Örebro Brygghus 🍺
              </p>
            </div>

            <div className="bg-[#fffaf3] border border-[#d1b48c] shadow-md rounded-3xl p-6 md:p-10 text-center lg:text-left">
              <p className="uppercase tracking-[0.25em] text-[#c57a00] font-semibold text-xs mb-3">
                Bakom kulisserna
              </p>

              <h2 className="text-3xl md:text-5xl font-rye text-[#5b3a29] mb-5">
                Vår egen öl
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                Vill ni se hur det gick till när vi bryggde vår egen öl?
              </p>

              <a
                href="https://www.youtube.com/watch?v=Ine6zQrFJRY&t"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#f8a109] text-white px-7 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-[#cf8600] transition"
              >
                Kika bakom kulisserna →
              </a>
            </div>
          </div>
        </section>

        {/* ÖPPETTIDER */}
        <section className="relative bg-[#fffaf3] border border-[#d1b48c] shadow-xl rounded-3xl p-6 md:p-10 mb-16 md:mb-24">
          <div className="text-center mb-10">
            <p className="uppercase tracking-[0.3em] text-[#c57a00] font-semibold text-xs mb-3">
              Välkommen in
            </p>

            <h2 className="text-4xl md:text-6xl font-rye text-[#5b3a29]">
              Öppettider
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="bg-white rounded-2xl border border-[#e2c9a7] shadow-md p-6 md:p-8">
              <ul className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-3 text-lg md:text-xl leading-relaxed">
                <li className="font-semibold">Torsdag:</li>
                <li>10:30–15:00</li>

                <li className="font-semibold">Fredag:</li>
                <li>10:30–20:00</li>

                <li className="font-semibold">Lördag:</li>
                <li>11:00–16:00</li>

                <li className="font-semibold">Söndag:</li>
                <li>11:00–16:00</li>
              </ul>
            </div>

            <div className="flex justify-center">
              <div className="bg-white p-3 shadow-lg rounded-2xl border border-[#e2c9a7] rotate-1 hover:rotate-0 transition duration-300 max-w-sm">
                <img
                  src={saloonen}
                  alt="Insidan av Saloonen"
                  className="w-full h-64 md:h-80 object-cover rounded-xl"
                />

                <p className="text-sm text-center text-[#5b3a29]/70 mt-2 italic">
                  Varmt välkommen! 🤠
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BORDSBOKNING */}
        <section className="text-center  text-black rounded-3xl shadow-xl px-6 py-12 md:py-16">
          <p className="text-lg md:text-xl mb-5">
            Vill du boka bord hos oss?
          </p>

          <Link
            to="/booking"
            className="inline-block bg-[#f8a109] text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-[#cf8600] transition"
          >
            Bordsbokning →
          </Link>
        </section>
      </div>
    </div>
  );
}