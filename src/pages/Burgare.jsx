import varaburgare from "../assets/Våra burgare.jpg";
import emil from "../assets/emil.jpg";
import bred from "../assets/bred.jpg";
import armfeldt from "../assets/armfeldt.jpg";
export default function Burgare() {
  return (
    <div className="min-h-screen bg-[#fdf8f3] text-[#3a2a1d]">
      
 {/* HERO */}
<section className="relative w-full h-[70vh] md:h-[65vh] overflow-hidden bg-black">
  
  {/* Mobilbild */}
  <img
    src={armfeldt}
    alt="Bonnatösen Burgare"
    className="
      block
      md:hidden
      w-full
      h-full
      object-cover
      object-center
    "
  />

  {/* Desktopbild */}
{/* Desktopbild */}
<img
  src={bred}
  alt="Bonnatösen Burgare"
  className="
    hidden
    md:block
    w-full
    h-full
    object-contain
    bg-black
  "
/>

  <div className="absolute inset-0 bg-black/35" />

  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
    <a
      href="/"
      className="absolute top-6 left-6 md:top-10 md:left-10 text-white hover:text-[#f8c04d] font-semibold transition-colors duration-200 z-10"
    >
      ← Tillbaka
    </a>

    <h1 className="text-white text-5xl md:text-8xl font-rye drop-shadow-2xl mb-6">
      Våra Burgare
    </h1>

    <p className="max-w-2xl text-white text-lg md:text-2xl leading-relaxed drop-shadow-lg">
    
    </p>
  </div>
</section>
      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-4 py-12 md:py-20">

        <section className="bg-white border border-[#e2c9a7] rounded-3xl shadow-xl p-6 md:p-10 leading-relaxed">
          
          <p className="text-lg md:text-xl mb-12 text-center max-w-3xl mx-auto text-[#5b3a29]">
            Vi serverar en burgare i taget – och byter ut den varje vecka.
            Alltid gjord på vår egen hemliga köttblandning från närområdet
            (100% nötkött), briochebröd och
            våra egna toppings. Vilken burgare som gäller just nu visar vi
            alltid på våra sociala medier.
          </p>

          <h2 className="text-3xl md:text-4xl font-rye text-[#5b3a29] mb-8 text-center">
            Meny
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            <MenuItem
              name="Enkelburgare"
              desc="150g nötkött"
              price="145 kr"
              
            />

            <MenuItem
              name="Dubbelburgare"
              desc="För dig som vill ha lite extra"
              price="185 kr"
            />

            <MenuItem
              name="Grillostburgare från Väddö"
              desc="Vegetariskt alternativ med grillost"
              price="145 kr"
            />

            <MenuItem
              name="Barnburgare"
              desc="100g nötkött, cheddarost och ketchup"
              price="89 kr"
            />

            <MenuItem
              name="Barnkorv"
              desc="Grillkorv med bröd & ketchup"
              price="59 kr"
            />

            <MenuItem
              name="Pommes med dipp"
              desc="Krispiga pommes serveras med dipp"
              price="49 kr"
            />

            <MenuItem
              name="Dirty fries"
              desc="Pommes med ostsås, lök, jalapeñomajo, gurka och riven ost"
              price="69 kr"
            />

            <MenuItem
              name="Cornribs"
              desc="Majs med BT-krydda, jalapeñomajo, riven ost och örter"
              price="59 kr"
            />
          </div>
        </section>

        {/* BURGERDUDES */}
        <div className="bg-white p-6 mt-14 rounded-2xl border border-[#e2c9a7] shadow-md max-w-md mx-auto text-center">
          <h3 className="text-2xl font-rye text-[#5b3a29] mb-2">
            Burgerdudes säger:
          </h3>

          <a
            href="https://burgerdudes.se/sweden/nora/bonnatosens-burgare"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3 text-[#c57a00] underline hover:text-[#8a5600]"
          >
            Läs hela recensionen →
          </a>
        </div>
      </div>
    </div>
  );
}

function MenuItem({ name, desc, price }) {
  return (
    <div className="border border-[#ead6b8] rounded-2xl p-5 bg-[#fffaf3] shadow-sm hover:shadow-lg transition duration-300">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-[#5b3a29]">
            {name}
          </h3>

          <p className="text-[#6b4a35] mt-1 leading-relaxed">
            {desc}
          </p>
        </div>

        <span className="font-bold text-[#c57a00] whitespace-nowrap text-lg">
          {price}
        </span>
      </div>
    </div>
  );
}