import bred from "../assets/bred.webp";
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
            block md:hidden
            w-full h-full
            object-cover
            object-center
          "
        />

        {/* Desktopbild */}
        <img
          src={bred}
          alt="Bonnatösen Burgare"
          className="
            hidden md:block
            w-full h-full
            object-contain
            bg-black
          "
        />


        <div className="absolute inset-0 bg-black/40" />


        <div className="
          absolute inset-0
          flex flex-col
          items-center
          justify-center
          text-center
          px-6
        ">

          <a
            href="/"
            className="
              absolute
              top-6 left-6
              md:top-10 md:left-10
              text-white/90
              hover:text-[#fbbf04]
              font-semibold
              transition
            "
          >
            ← Tillbaka
          </a>


          <div className="
            bg-black/30
            backdrop-blur-sm
            rounded-[2rem]
            px-8 py-10
          ">

            <h1 className="
              text-white
              text-5xl md:text-8xl
              font-rye
              drop-shadow-2xl
              mb-5
            ">
              Våra Burgare
            </h1>


            <p className="
              text-white
              text-lg md:text-2xl
              max-w-xl
              leading-relaxed
              drop-shadow-lg
            ">
              Nya smaker varje vecka
            </p>

          </div>

        </div>

      </section>



      {/* CONTENT */}
      <main className="
        max-w-5xl
        mx-auto
        px-4
        py-12 md:py-20
      ">
{/* INFORMATION */}
<div
  className="
    max-w-3xl
    mx-auto
    mb-12
    bg-amber-50
    border border-[#fbbf04]
    rounded-3xl
    p-6 md:p-8
    text-center
  "
>
  <h3
    className="
      text-2xl
      font-rye
      text-[#5b3a29]
      mb-4
    "
  >
    Bra att veta
  </h3>

  <p
    className="
      text-[#6b4a35]
      leading-relaxed
    "
  >
    Under våra mest intensiva veckor under industrisemestern serverar vi
    endast enkelburgare. För att hålla nere väntetiderna har vi inte
    möjlighet att göra ändringar på burgarna, förutom vid allergier.
    Tack för din förståelse!
  </p>
</div>

        {/* MENY */}
        <section className="
          bg-[#fffaf3]
          border border-[#e2c9a7]
          rounded-[2.5rem]
          shadow-2xl
          p-6 md:p-12
          overflow-hidden
        ">


          <p className="
            text-lg md:text-xl
            text-center
            max-w-3xl
            mx-auto
            text-[#5b3a29]
            leading-relaxed
            mb-12
          ">
            Vi serverar en burgare i taget – och byter ut den varje vecka.
            Alltid gjord på vår egen hemliga köttblandning från närområdet
            (100% nötkött), briochebröd och våra egna toppings.
            Vilken burgare som gäller just nu visar vi alltid på våra sociala medier.
          </p>



          <div className="flex justify-center mb-5">

            <span className="
              bg-[#fbbf04]
              text-[#5b3a29]
              px-6 py-2
              rounded-full
              font-bold
              uppercase
              tracking-widest
              text-sm
            ">
              Meny
            </span>

          </div>



          <h2 className="
            text-4xl md:text-5xl
            font-rye
            text-[#5b3a29]
            text-center
            mb-10
          ">
            Våra burgare
          </h2>



          <div className="
            grid
            md:grid-cols-2
            gap-5
          ">


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
              desc="Pommes med lök, jalapeñomajo, gurka och riven ost"
              price="69 kr"
            />

{/* 
            <MenuItem
              name="Cornribs"
              desc="Majs med BT-krydda, jalapeñomajo, riven ost och örter"
              price="59 kr"
            /> */}

          </div>


        </section>



{/* RECENSION */}
<section className="
  mt-16
  max-w-lg
  mx-auto
  text-center
  bg-white
  border border-[#e2c9a7]
  rounded-3xl
  p-8
  shadow-lg
">


  <h3 className="
    text-3xl
    font-rye
    text-[#5b3a29]
    mb-3
  ">
    Burgerdudes
  </h3>


  <p className="
    text-[#6b4a35]
    leading-relaxed
    mb-6
  ">
    En av Sveriges mest uppskattade burgarrecensenter har testat oss.
  </p>


  <a
    href="https://burgerdudes.se/sweden/nora/bonnatosens-burgare"
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-block
      bg-[#fbbf04]
      text-[#5b3a29]
      px-7 py-3
      rounded-full
      font-bold
      hover:opacity-80
      transition
    "
  >
    Läs recensionen →
  </a>


</section>
      </main>

    </div>
  );
}




function MenuItem({ name, desc, price }) {

  return (

    <div
      className="
        group
        bg-white
        border border-[#ead6b8]
        rounded-3xl
        p-6
        shadow-sm
        hover:shadow-xl
        hover:-translate-y-1
        transition-all
        duration-300
      "
    >

      <div className="
        flex
        justify-between
        gap-5
      ">


        <div>

          <h3 className="
            text-xl
            font-bold
            text-[#5b3a29]
            group-hover:text-[#c57a00]
            transition
          ">
            {name}
          </h3>


          <p className="
            text-[#6b4a35]
            mt-2
            leading-relaxed
          ">
            {desc}
          </p>


        </div>



        <span className="
          h-fit
          bg-[#fbbf04]
          text-[#5b3a29]
          font-bold
          px-4 py-2
          rounded-full
          whitespace-nowrap
        ">
          {price}
        </span>


      </div>


    </div>

  );

}