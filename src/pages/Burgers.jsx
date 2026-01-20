import { Link } from "react-router-dom";
import ladaImg from "../assets/lada.png";
import liggandeImg from "../assets/Liggande.png"; // ändra om den heter .jpg etc.


export default function Burgers() {
  return (
    <div className="min-h-screen bg-[#fdf8f3] text-[#3a2a1d] flex flex-col items-center p-8">
      <div className="max-w-4xl w-full mt-12">

        {/* Tillbaka */}
        <Link
          to="/"
          className="inline-block mb-6 text-[#5b3a29] hover:text-[#f8a109] font-semibold transition-colors duration-200"
        >
          ← Tillbaka
        </Link>

        {/* Titel */}
        <h1 className="text-6xl font-rye text-center text-[#f8a109] mb-8 drop-shadow-sm">
          Bonnatösens Lada
        </h1>

        {/* Ingress */}
        <p className="text-xl text-center text-[#4b3728] max-w-3xl mx-auto leading-relaxed mb-16">
          Bonnatösens Burgare började ute på vår gård i Järnboås. Det var först
          tänkt som en engångsgrej – men växte snabbt till något större än vi
          någonsin hade räknat med.
        </p>

        {/* Vår resa */}
        <section className="mb-20 bg-white/70 backdrop-blur-sm border border-[#e2c9a7] rounded-2xl shadow-md p-10 leading-relaxed space-y-5">
          <h2 className="text-3xl font-rye text-[#5b3a29] mb-3">
            Vår resa
          </h2>

          <p>
            Det började egentligen som ett skämt – en grill, några vänner och ett
            test under Bergslagens loppishelg 2021. Men det visade sig snabbt att
            våra burgare var här för att stanna.
          </p>

          <p>
            På vårt allra första event, med bara en grill, dök runt 300 personer
            upp på gården. På bara några timmar var allt slut.
          </p>

          <p>
            Det blev startskottet för något mycket större. Idag, under
            högsäsong, kommer tusentals människor för att äta våra burgare – och
            hänga i vår lada.
         
          </p>

         <p>
  Vill man följa hela resan – allt bakom kulisserna, bygget av ladan
  och livet här ute – så finns den på vår YouTube-kanal
  <a href="https://www.youtube.com/feed/subscriptions/UCaIAV31L9DGmwuf_6Q8k2Ig" target="_blank"><strong> Bonnalife</strong></a>.
</p>



        </section>
{/* Renovering av ladans tak */}
<section className="mb-20 bg-white border border-[#e2c9a7] rounded-2xl shadow-md p-10 leading-relaxed space-y-6">
  <h2 className="text-3xl font-rye text-[#5b3a29] mb-3 text-center">
    Renovering av ladans tak
  </h2>

  <div className="flex flex-col items-center space-y-6">
    <img
      src={ladaImg}
      alt="Renovering av ladans tak"
      className="rounded-lg shadow-md max-w-full"
    />

    <p className="text-lg max-w-3xl text-center">
      Med stöd från EU och Leader Bergslagen har vi renoverat den del av ladans
      tak som var i störst behov av åtgärd. Syftet var att säkra byggnaden och
      skapa förutsättningar för att utveckla ladan till en
      året-runt-anpassad mötesplats för evenemang, marknader och samarbeten.
    </p>

    <img
      src={liggandeImg}
      alt="Renoverad taksektion"
      className="rounded-lg shadow-md max-w-full"
    />

    <p className="text-lg max-w-3xl text-center">
      Renoveringen har stärkt den bärande konstruktionen och gett ett nytt,
      hållbart tak som gör det möjligt att fortsätta utveckla gården som en
      samlingsplats för både lokala aktörer och besökare.
    </p>
  </div>
</section>

        {/* När har ladan öppet? */}
        <section className="mb-20 bg-[#fff5e8] border border-[#f1c07b] rounded-2xl shadow-inner p-10">
          <h2 className="text-3xl font-rye text-[#f8a109] mb-4 text-center">
            När har ladan öppet?
          </h2>

          <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-4">
            Vi håller öppet från våren och hela sommaren. Under vintern kan det
            även dyka upp enstaka event i ladan – och då berättar vi om det på
            våra sociala medier.
          </p>

          <p className="text-lg leading-relaxed max-w-2xl mx-auto">
            Vi går också ut med våra öppettider för ladan våren 2026 när det
            närmar sig.
          </p>

          <p className="text-lg leading-relaxed max-w-2xl mx-auto mt-4">
            Vill du hyra ladan för ett företagsevent eller något kul med
            vännerna? Hör av er så kollar vi möjligheterna.
          </p>
        </section>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg mb-4">
            Vill du veta mer eller boka oss till ditt event?
          </p>
          <Link
            to="/catering"
            className="inline-block bg-[#f8a409ff] text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-[#7a4a30] transition"
          >
            Catering →
          </Link>
        </div>
      </div>
    </div>
  );
}
