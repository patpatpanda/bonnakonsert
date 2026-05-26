import { motion } from "framer-motion";
import dreng from "../assets/dreng.png";


export default function Konsert() {
  return (
    <div className="min-h-screen bg-stone-950 text-white">
      <div className="relative bg-stone-900 border-b border-amber-900/40 py-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12"
        >
          <div className="flex-1 text-center md:text-left">
            <p className="text-amber-400 tracking-widest uppercase text-sm font-semibold mb-4">
              Live-konsert
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Drängarna hos Bonnatösen
            </h1>
            <p className="text-amber-300 text-xl mb-2">
              Fredag den 10 juli 2026, kl 20:00
            </p>
            <p className="text-stone-400 text-lg">
              Bonnatösens Burgare i Nora
            </p>
          </div>
       <div className="flex-shrink-0 w-full md:w-[600px] lg:w-[850px]">
    <img
  src={dreng}
  alt="Drängarna hos Bonnatösen"
  className="w-full rounded-2xl object-cover shadow-2xl ring-1 ring-amber-400/20"
/>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto max-w-2xl space-y-8 px-6 py-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-5 text-lg leading-relaxed text-stone-300"
        >
          <p>
            Den 10 juli kommer Drängarna till Bonnatösen för en unik kväll på
            Bonnatösens gård.
          </p>

          <p>
            Kvällen börjar med en vanlig spelning med Drängarna, där de kör
            sina låtar live från scenen. Därefter avslutar vi med något extra:
            vi spelar in den officiella musikvideon till vår egen låt som vi
            har skrivit tillsammans med Drängarna, live med publiken på plats.
          </p>

          <p className="text-xl font-semibold text-white">
            Köper du biljett får du alltså både en konsert med Drängarna och
            chansen att vara med i musikvideon.
          </p>

          <p>
            På plats serverar vi våra omtalade burgare och annat gott från
            Bonnatösen. Vår egen lageröl samt vin serveras inom avgränsat
            serveringsområde. 18-årsgräns gäller vid köp av alkohol.
          </p>
          <p className="text-base font-semibold text-amber-400">
            Det här händer bara en gång.
          </p>

          <p>Begränsat antal biljetter.</p>

          <p className="pt-2">
            Mer om Bonnatösen på Instagram och TikTok:
            @bonnatosensburgare
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-4"
        >
          <a
            href="https://secure.tickster.com/sv/391evty74n4jkgb/products"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-xl bg-amber-400 px-8 py-5 text-center text-xl font-bold text-stone-900 transition hover:bg-amber-300"
          >
            Köp biljett
          </a>
          
        </motion.div>

       
      <motion.div
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.5 }}
  className="space-y-8 rounded-2xl border border-amber-900/40 bg-stone-900/70 p-6 md:p-8"
>
  <div>
     <h2 className="mb-4 text-2xl font-bold text-red-400">
      Praktisk information
    </h2>

    <p className="text-stone-400">
      Läs igenom informationen nedan inför ditt besök på konserten.
    </p>
  </div>

  <div className="space-y-3">
    <h3 className="text-xl font-semibold text-white">
      Biljetter och entré
    </h3>

    <p className="text-stone-300">
      Biljett krävs för att komma in på området under evenemanget.
      Biljetter köps via Tickster.
    </p>

    <p className="text-stone-300">
      Pris: <span className="font-semibold text-white">290 kr</span>{" "}
      
    </p>

    <p className="text-stone-300">
      Antalet biljetter är begränsat.
    </p>
  </div>

  <div className="space-y-3">
    <h3 className="text-xl font-semibold text-white">
      Tider
    </h3>

    <ul className="space-y-2 text-stone-300">
      <li>• Området öppnar för allmänheten: 17.00</li>
      <li>• Drängarna på scen: 20.00</li>
      <li>• Konserten beräknas vara slut: ca 21.00</li>
    </ul>

    <p className="pt-2 text-stone-300">
      Efter konserten spelar vi in en musikvideo tillsammans med
      Drängarna till vår egen låt. Låten kommer att spelas cirka tre
      gånger i samband med inspelningen, och vi hoppas att så många som
      möjligt vill stanna kvar och vara en del av kvällen.
    </p>
  </div>

  <div className="space-y-3">
    <h3 className="text-xl font-semibold text-white">
      Mat och dryck
    </h3>

    <p className="text-stone-300">
      Det kommer finnas mat, dryck, öl och alkoholfria alternativ på
      området.
    </p>

    <p className="text-stone-300">
      Egen mat och dryck får inte tas med in på området.
    </p>

    <p className="text-stone-300">
      Betalning sker med kort eller Swish. Vi är kontantfria.
    </p>
  </div>

  <div className="space-y-3">
    <h3 className="text-xl font-semibold text-white">
      Åldersgräns och legitimation
    </h3>

    <p className="text-stone-300">
      Vi har ingen Åldersgräns.
    </p>

    <p className="text-stone-300">
      Eftersom alkoholservering sker på området kan legitimation komma
      att kontrolleras. Ta därför med giltig ID-handling.
    </p>
  </div>

  <div className="space-y-3">
    <h3 className="text-xl font-semibold text-white">
      Parkering
    </h3>

    <ul className="space-y-2 text-stone-300">
      <li>
        • Parkering sker på anvisad plats i närheten av området.
      </li>

      <li>
        • Följ skyltning och instruktioner från parkeringsvärdar på
        plats.
      </li>

      <li>• Samåk gärna om ni har möjlighet.</li>

      <li>
        • Kom i god tid, eftersom det kan bli mycket trafik i samband
        med insläpp.
      </li>
      <li>
        • Parkering kostar 50kr och betalas via Swish.
        
      </li>
    </ul>
  </div>

  <div className="space-y-3">
    <h3 className="text-xl font-semibold text-white">
      Tillgänglighet
    </h3>

    <p className="text-stone-300">
      Har du behov av tillgänglig parkering eller annan hjälp inför
      besöket? Kontakta oss i förväg så försöker vi lösa det på bästa
      möjliga sätt.
    </p>
  </div>

  <div className="space-y-3">
    <h3 className="text-xl font-semibold text-white">
      Hundar
    </h3>

    <p className="text-stone-300">
      Hundar får tyvärr stanna hemma denna kväll.
    </p>
  </div>

  <div className="space-y-3">
    

    

    
  </div>

  <div className="space-y-3">
    <h3 className="text-xl font-semibold text-white">
      Övrigt
    </h3>

    <p className="text-stone-300">
      Evenemanget sker utomhus på gården. Klä er efter väder och tänk
      på att underlaget kan vara ojämnt på vissa delar av området.
    </p>

    
  </div>
</motion.div>
      </div>
    </div>
  );
}