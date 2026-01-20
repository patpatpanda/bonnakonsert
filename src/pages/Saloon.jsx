import { Link } from "react-router-dom";
import bildsaloon from "../assets/bildsaloon.webp";
import saloonen from "../assets/Saloonen.jpeg";
import ologbild from "../assets/vår egna öl.JPG";


export default function Saloon() {
  return (
    <div className="min-h-screen bg-[#fff8ec] text-[#3c2a1d] flex flex-col items-center p-6 md:p-10">
      <div className="w-full max-w-5xl">

        {/* Tillbaka */}
        <Link
          to="/"
          className="inline-block mb-6 text-[#5b3a29] hover:text-[#f8a109] font-semibold transition"
        >
          ← Tillbaka
        </Link>

        {/* Titel */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-rye text-[#5b3a29] drop-shadow-sm mb-4">
            Bonnatösens Saloon
          </h1>
          <p className="text-lg md:text-xl text-[#5b3a29]/80 max-w-2xl mx-auto">
            Välkommen till vår vinteroas i bryggeriområdet i Nora – där burgare,
            hantverksöl och gemenskap möts.
          </p>
        </div>

        {/* SEKTION 1: Stor bild + text (side-by-side på desktop) */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
      <div className="rounded-2xl overflow-hidden shadow-xl border border-[#d1b48c] transform rotate-1 hover:rotate-0 transition duration-300">
  <img
    src={bildsaloon}
    alt="Saloonen"
    className="w-full h-[28rem] md:h-[34rem] object-cover"
  />
</div>



          <div className="bg-[#fffaf3] border border-[#d1b48c] shadow-md rounded-2xl p-8 leading-relaxed text-lg">
            <p className="mb-4">
              Vintern gör det svårt att hålla öppet ute i ladan kontinuerligt – därför hittar ni oss inne i Saloonen under vintern. 
            </p>

            <p className="mb-4">
             Här serverar vi våra populära burgare tillsammans med hantverksöl från Örebro Brygghus. På helgerna fyller vi på med brunch – freakshakes, glass, American pancakes och lite annat GÖTT!
            </p>

            <p>
              Tillsammans med bryggeriet har vi dessutom tagit fram vår egen USA-inspirerade lager. Den – och många andra brygder – hittar du inne i Saloonen.
            </p>
            {/* Bild av vår egen öl */}
<div className="w-full flex justify-center my-12">
  <div className="
    bg-white 
    p-3 
    shadow-xl 
    rounded-xl 
    border border-[#e2c9a7] 
    transform -rotate-2 hover:rotate-0 
    transition duration-300 
    max-w-sm
  ">
    <img
      src={ologbild}
      alt="Vår egen öl"
      className="w-full h-64 md:h-80 object-cover rounded-lg"
    />
    <p className="text-sm text-center text-[#5b3a29]/70 mt-2 italic">
      Vår egen öl – framtagen tillsammans med Örebro Brygghus 🍺
    </p>
  </div>
</div>

          </div>
        </div>

     
        {/* SEKTION 3: Liten textdel innan öppettider */}
        <div className="text-center max-w-2xl mx-auto mb-20 text-lg leading-relaxed">
          <p className="mb-4">
            Vill ni se hur det gick till när vi bryggde vår egen öl?
          </p>
          <a
            href="https://www.youtube.com/watch?v=Ine6zQrFJRY&t"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c57a00] underline hover:text-[#8a5600]"
          >
            Kika bakom kulisserna →
          </a>
        </div>

       {/* Öppettider – nu med andra bilden */}
<section className="relative bg-[#fffaf3] border border-[#d1b48c] shadow-md rounded-2xl p-10 mb-20">

  {/* Rubriken på skylten */}
  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#f8a109] text-white px-10 py-2 rounded-full font-rye text-2xl shadow-md border-2 border-[#d88b00] rotate-[-2deg]">
    Öppettider
  </div>

  {/* Innehåll */}
  <div className="mt-10 grid md:grid-cols-2 gap-8 items-start">

    {/* Tider */}
    <ul className="text-left text-lg leading-relaxed">
      <li><strong>Tors–Fre (Lunch):</strong> 10:30–15:00</li>
      <li><strong>Fre kväll:</strong> 17:00–21:00</li>
      <li><strong>Lördag:</strong> 11:00–21:00</li>
      <li><strong>Söndag:</strong> 10:00–15:00</li>
    </ul>

    {/* Bilden */}
    <div className="flex justify-center">
      <div className="bg-white p-3 shadow-lg rounded-xl border border-[#e2c9a7] transform rotate-1 hover:rotate-0 transition duration-300 max-w-xs">
        <img
          src={saloonen}
          alt="Insidan av Saloonen"
          className="w-full h-52 md:h-64 object-cover rounded-lg"
        />
        <p className="text-sm text-center text-[#5b3a29]/70 mt-2 italic">
          Varmt välkommen! 🤠
        </p>
      </div>
    </div>

  </div>
</section>


        {/* SEKTION 5: Bordsbokning */}
        <div className="text-center mb-20">
          <p className="text-lg mb-3">Vill du boka bord hos oss?</p>
          <Link
            to="/booking"
            className="inline-block bg-[#f8a109] text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-[#cf8600] transition"
          >
            Bordsbokning →
          </Link>
        </div>
      </div>
    </div>
  );
}
