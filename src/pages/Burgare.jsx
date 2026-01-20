import varaburgare from "../assets/Våra burgare.jpg";

export default function Burgare() {
  return (
    <div className="min-h-screen bg-[#fdf8f3] text-[#3a2a1d] flex flex-col items-center p-8">
      <div className="max-w-4xl w-full mt-12">

        {/* Tillbaka */}
        <a
          href="/"
          className="inline-block mb-6 text-[#5b3a29] hover:text-[#f8a109] font-semibold transition-colors duration-200"
        >
          ← Tillbaka
        </a>

        {/* Titel */}
        <h1 className="text-5xl font-rye text-[#5b3a29] mb-10 text-center">
          Våra Burgare
        </h1>

        {/* Bild med overlay-text */}
        <div className="relative w-full mb-14 flex justify-center">
          <div
            className="
              max-w-2xl 
              rounded-2xl 
              overflow-hidden 
              shadow-xl 
              border border-[#e2c9a7] 
              bg-white 
              transform rotate-1 hover:rotate-0 
              transition duration-300
            "
          >
            <img
              src={varaburgare}
              alt="Våra Burgare"
              className="w-full h-72 md:h-[30rem] object-cover"
            />

            {/* 📸 Overlay Credit */}
            <div className="absolute bottom-3 right-4 bg-black/40 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm tracking-wide">
              📸 @burgerdudes
            </div>
          </div>
        </div>

        {/* Polaroid-stilad recension */}
        <div
          className="
            bg-white 
            p-6 
            mb-14 
            rounded-xl 
            border border-[#e2c9a7] 
            shadow-md 
            max-w-sm 
            mx-auto 
            transform rotate-1 hover:rotate-0 
            transition
          "
        >
          <h3 className="text-xl font-rye text-[#5b3a29] mb-2">
             Burgerdudes säger:
          </h3>
          <p className="italic text-[#5b3a29] leading-relaxed">
           
          </p>

          <a
            href="https://burgerdudes.se/sweden/nora/bonnatosens-burgare"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3 text-[#c57a00] underline hover:text-[#8a5600]"
          >
            Läs hela recensionen →
          </a>
        </div>

        {/* Textsektion */}
        <section className="bg-white border border-[#e2c9a7] rounded-2xl shadow-md p-10 space-y-6 leading-relaxed text-lg">

          {/* Intro */}
          <p>
            Vi serverar en burgare i taget – och byter ut den varje vecka.
            Alltid gjord på vår egen hemliga köttblandning från närområdet
            (100% nötkött), cheddar från Väddö gårdsmejeri, briochebröd och våra
            egna toppings. Vilken burgare som gäller just nu visar vi alltid på
            våra sociala medier.
          </p>

         

          {/* Priser */}
          <h2 className="text-2xl font-rye text-[#5b3a29] mt-8 mb-2">
            Priser
          </h2>

          <ul className="list-none space-y-1 text-lg">
            <li> Ekologisk grillost från Väddö Gårdsmejeri (veg)<strong>139 kr</strong></li>
            <li> Enkelburgare <strong>139 kr</strong></li>
            <li> Dubbelburgare <strong>179 kr</strong></li>
            <li> Vegetarisk (grillost) <strong>139 kr</strong></li>
            <li> Barnburgare <strong>89 kr</strong></li>
          </ul>

          {/* Pommes */}
          <h2 className="text-2xl font-rye text-[#5b3a29] mt-8 mb-2">
            Pommes & Tillbehör
          </h2>

          <ul className="list-none space-y-1 text-lg">
            <li> Liten pommes med dipp <strong>39 kr</strong></li>
            <li> Stor pommes med dipp <strong>69 kr</strong></li>
            <li>
              Dirty Fries — cheddarsås, majo, lök, färska örter{" "}
              <strong>89 kr</strong>
            </li>
            <li>
              Beersnacks — chips med parmesan, cheddarsås, kanderad
              jalapeños, färska örter, lök
            </li>
          </ul>

          {/* Sötsaker */}
          <h2 className="text-2xl font-rye text-[#5b3a29] mt-8 mb-2">
            Sött
          </h2>

          <ul className="list-none space-y-1 text-lg">
            <li>
              Freakshake — en maxad milkshake <strong>79 kr</strong>
            </li>
            <li> Mjukglass i bägare <strong>39 kr</strong></li>
          </ul>
        </section>
      </div>
    </div>
  );
}
