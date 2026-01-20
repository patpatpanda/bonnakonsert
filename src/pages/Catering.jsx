import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Catering() {
  return (
    <div className="min-h-screen bg-bonna-light text-bonna-dark p-8">
      <div className="max-w-5xl mx-auto">

        {/* 🔙 Tillbaka-knapp */}
        <div className="mb-10">
          <Link
            to="/"
            className="inline-block mb-8 text-[#5b3a29] hover:text-[#f8a109] font-semibold transition-colors duration-200"
          >
            ← Tillbaka
          </Link>
        </div>

        <h1 className="text-5xl font-bold font-rye text-center mb-12 drop-shadow-sm">
          Catering
        </h1>

        {/* ================================
           NAVIGATION + FÖRFRÅGAN-KNAPP
        ================================= */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

          {/* Menysektionerna */}
          {[
            { label: "Hamburgare", id: "hamburgare" },
            { label: "Bonnaplock", id: "bonnaplock" },
            { label: "Tex-Mex-plock", id: "texmex" },
            { label: "Caesarsallad", id: "caesar" },
            { label: "Korv", id: "korvfest" },
          ].map((section) => (
            <motion.button
              key={section.id}
              onClick={() =>
                document.getElementById(section.id)?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="bg-[#f8a109] text-white font-semibold text-lg px-6 py-2 rounded-lg shadow hover:bg-[#d87d00] transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {section.label}
            </motion.button>
          ))}

          {/* FLYTTADE FÖRFRÅGAN-KNAPPEN */}
          

        </motion.div>

       {/* === Introsektion med animerad text och bakgrund === */}
<motion.section
  className="relative mb-24 py-16 px-6 bg-[#fff8ec]/80 rounded-2xl border border-[#e2c6a3] shadow-[0_4px_20px_rgba(91,58,41,0.1)] overflow-hidden"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  {/* Subtil bakgrundstextur */}
  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-30 pointer-events-none"></div>

  {/* Dekorativ accent överst */}
  

  <div className="relative z-10 text-center max-w-3xl mx-auto">
    <motion.p
      className="text-2xl font-light leading-relaxed mb-6 text-[#3c2a1d]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      Letar du efter catering till ditt nästa event?
      <br />
      <span className="font-rye text-[#f8a109] text-3xl inline-block mt-2">
        Bonnatösen
      </span>{" "}
      erbjuder menyer för alla tillställningar – från företagsevent till privata
      fester.
    </motion.p>

    <motion.p
      className="text-lg leading-relaxed text-[#4a3527] font-[400] mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
    Vi gillar bra käk och vi är noga med det vi lagar. Säg bara till vad ni har på gång, så styr vi ihop något som passar ert gäng – på vårt sätt, rätt ifrån gården 🤠
    </motion.p>

   <Link to="/cateringbooking">
  <motion.button
    className="bg-[#f8a109] text-white font-semibold text-lg px-8 py-3 rounded-full shadow hover:bg-[#d87d00] transition"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Skicka cateringförfrågan
  </motion.button>
</Link>
  </div>
</motion.section>


    <motion.section
  id="hamburgare"
  className="mb-48 scroll-mt-32 py-12 px-6"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
>
  <h2 className="text-3xl font-bold font-rye mb-4">Hamburgare</h2>
  <p className="text-lg leading-relaxed">
    Sugen på våra hamburgare på er tillställning? Vi kan åka ut med ett
    eller två stekbord och smasha burgare till er – allt vi behöver är
    tillgång till 3-fas. Vi erbjuder chips och vår egen dip vid sidan av
    burgaren.
  </p>
  <p className="text-lg leading-relaxed mt-2">
    Vi tar en fast avgift på 2500–3000 kr inom Nora kommun (inkl. 2
    personal). Utanför Nora tillkommer avgift. Burgarpriset varierar
    beroende på antal gäster och storlek. Under högsäsong och
    storhelger kan tillgängligheten vara begränsad – men skicka gärna en
    förfrågan så ser vi vad vi kan lösa.
  </p>
</motion.section>

<motion.section
  id="bonnaplock"
  className="mb-40 scroll-mt-24 relative max-w-3xl mx-auto"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: 'easeOut' }}
  viewport={{ once: true, amount: 0.3 }}
>
 {/* Rubrikskylt */}
<div
  className="absolute -top-10 left-1/2 -translate-x-1/2 
  bg-[#f8a109] text-white px-10 py-3 
  rounded-full font-rye text-2xl 
  shadow-[0_4px_10px_rgba(0,0,0,0.25)] 
  border-2 border-[#d88b00] 
  transform rotate-[-2deg] z-10"
>
  Bonnaplock
</div>

  {/* Menybox */}
  <div className="bg-[#fffaf3] border border-[#d1b48c] rounded-2xl shadow-[4px_4px_0px_#d1b48c] p-10 pt-12 relative overflow-hidden">
    {/* Subtil textur */}
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-40 pointer-events-none"></div>

    <ul className="relative list-none space-y-3 text-lg leading-relaxed text-[#3c2a1d] font-[400]">
      {[
        "Bröd med örtkräm (färskost)",
        "Tomatsallad att toppa brödet med",
        "2 sorters ostar med fikonmarmelad",
        "2 sorters chark",
        "Saltgurka med honung och vispad smetana",
        "Cheddarchips",
        "Senapsslungad potatissallad",
        "Creamy corn",
        "Caesarsallad (endast dressad sallad, ej protein)",
        "2 sorters korv av bra kvalitet med BBQ-ketchup och sötstark senap",
        "Ekologisk grillost från Väddö gårdsmejeri",
        "Picklad rödlök, cheddarchips",
      ].map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-3 transition hover:translate-x-1"
        >
          <span className="w-2.5 h-2.5 bg-[#f8a109] rounded-full mt-2 shadow-sm"></span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
</motion.section>


{/* === Caesarsallad á la Bonnatösen === */}
<motion.section
  id="caesar"
  className="mb-60 scroll-mt-10 relative max-w-3xl mx-auto 
             rounded-[1rem] border border-[#ead8b8] 
             bg-gradient-to-b from-[#fffefb] to-[#fff9f0] 
             shadow-[0_10px_30px_rgba(91,58,41,0.07)]"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
  viewport={{ once: true, amount: 0.3 }}
>
  {/* Rubrikband med lätt lutning och glans */}
  <div
  className="
    absolute -top-6 left-1/2 -translate-x-1/2 
    bg-[#f8a109] text-white 
    px-4 py-1               /* Mobil: tunn */
    md:px-8 md:py-2         /* Desktop: större och lyxigare */
    rounded-xl 
    font-rye 
    text-base md:text-xl    /* Mindre text på mobil */
    shadow-md 
    border border-[#d88b00]
    transform rotate-[-1deg]
    bg-gradient-to-r from-[#f8a109] to-[#e89500]
  "
>
  Caesarsallad á la Bonnatösen
</div>


  {/* Innehåll */}
  <div className="relative z-10 p-12 pt-24 text-center space-y-6">
    <p className="text-lg md:text-xl leading-loose text-[#3c2a1d]/90 font-[400]">
      Romansallad toppad med stekt marinerad kyckling, krispigt bacon och vår
      hemlagade caesardressing. Serveras med vårlök, rostade pinjenötter, färska
      örter, cherrytomater och krutonger.
    </p>

    <p className="text-2xl font-semibold text-[#5b3a29] tracking-wide">
      129 kr <span className="text-lg font-normal opacity-80">per person</span>
    </p>
  </div>

  {/* Subtil textur */}
  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-25 pointer-events-none"></div>
</motion.section>

{/* === Tex-Mex-plock === */}
<motion.section
  id="texmex"
  className="mb-48 scroll-mt-32 relative max-w-3xl mx-auto 
             rounded-[2rem] border border-[#ead8b8] 
             bg-gradient-to-b from-[#fffefb] to-[#fff9f0] 
             shadow-[0_10px_30px_rgba(91,58,41,0.07)]"
             
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
  viewport={{ once: true, amount: 0.3 }}
  
>
 <div className="
  absolute -top-7 left-1/2 -translate-x-1/2 
  bg-[#f8a109] text-white 
  px-4 py-1 text-lg
  md:px-10 md:py-2 md:text-2xl 
  rounded-full font-rye shadow-md 
  border-2 border-[#d88b00]
  transform rotate-[1deg]
  bg-gradient-to-r from-[#f8a109] to-[#e89500]
">
  Tex-Mex-plock
</div>


  <div className="relative z-10 p-12 pt-16 text-center space-y-6">
    <p className="text-lg md:text-xl leading-loose text-[#3c2a1d]/90 font-[400]">
      Fredagstaco 2.0 – en smakrik plockupplevelse med nachofärs (eller
      kyckling), smörfräst majs, guacamole, pico de gallo, smashed beans och
      spicy mango med koriander. Serveras med gräddfil, salsa, riven ost,
      picklad rödlök, fetaost, jalapeño och sallad.
    </p>

    <p className="text-lg italic text-[#705438] opacity-90">
      Perfekt för AW, buffé eller taco night med twist 
    </p>
  </div>

  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-25 pointer-events-none"></div>
</motion.section>


{/* === Korvfest === */}
<motion.section
  id="korvfest"
  className="mb-36 scroll-mt-24 bg-[#fffaf3] border border-[#d1b48c] rounded-2xl shadow-md p-8 relative"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
>
  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#f8a109] text-white px-6 py-2 rounded-full font-rye text-xl shadow">
    Korv
  </div>

  <div className="pt-6">
    <p className="text-lg leading-relaxed mb-4">
      Vi fixar goda tillbehör och korvar av bra kvalitet. Det enda ni
      behöver göra är att grilla korven och toppa med tillbehör. Vi lagar
      en klassisk korv med bröd och en med asiatisk touch.
    </p>

    <p className="text-lg leading-relaxed mb-4">
      <strong>2 sorters korv av bra kvalitet</strong> (1 smal spicy och 1
      tjock mild)
    </p>

    <div className="border-l-4 border-bonna-dark pl-6 mb-6">
      <h3 className="text-2xl font-semibold font-rye mb-2">Korv 1.</h3>
      <p className="text-lg leading-relaxed">
        Chili ramslökskorv i briochebröd<br />
        Friterad lök (vår egna)<br />
        Bonnatösens bostongurka<br />
        Senapsmajonnäs & ketchup<br />
        Färska örter
      </p>
    </div>

    <div className="border-l-4 border-bonna-dark pl-6 mb-6">
      <h3 className="text-2xl font-semibold font-rye mb-2">Korv 2.</h3>
      <p className="text-lg leading-relaxed">
        Asiatisk kålsallad<br />
        Picklad rödlök<br />
        Kanderad jalapeño<br />
        Soya & ingefärsmajo<br />
        Koriander<br />
        Friterad lök
      </p>
    </div>

    <p className="text-lg leading-relaxed">
      <strong>179 kr p.p.</strong> (med chips vid sidan +15 kr p.p)
      <br />
      <em>Minimum 10 personer</em>
    </p>
  </div>
</motion.section>

    


      </div>
    </div>
  );
}
