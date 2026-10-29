import { Link } from "react-router-dom";
import lol from "../assets/lol.webp";

export default function Saloon() {
  return (
    <div className="min-h-screen bg-[#fff8ec] text-[#3c2a1d]">

      {/* HERO */}
      <section className="relative min-h-[105vh] md:min-h-screen bg-black overflow-hidden flex items-center justify-center">

        {/* BAKGRUNDSBILD */}
        <img
          src={lol}
          alt="Bonnatösens Saloon"
          className="absolute inset-0 w-full h-full object-cover object-[center_65%]"
        />

        {/* MÖRK OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />

        {/* TILLBAKA */}
        <Link
          to="/"
          className="
            absolute top-6 left-5
            md:top-10 md:left-10
            z-20
            text-white
            hover:text-[#f8c04d]
            font-semibold
            transition-colors duration-200
          "
        >
          ← Tillbaka
        </Link>

        {/* INNEHÅLL */}
        <div className="relative z-10 text-center px-5 max-w-5xl mx-auto py-24">

          {/* LITEN RUBRIK */}
          <p
            className="
              uppercase
              tracking-[0.35em]
              text-[#f8c04d]
              font-semibold
              text-xs md:text-sm
              mb-4
            "
          >
            Bonnatösens Saloon
          </p>

          {/* HUVUDRUBRIK */}
          <h1
            className="
              text-5xl
              sm:text-6xl
              md:text-8xl
              font-rye
              text-white
              drop-shadow-2xl
              mb-5
            "
          >
            Nu har vi öppnat!
          </h1>

          {/* INTRO + ADRESS */}
          <div className="mb-10">
            <p
              className="
                text-white/90
                text-lg md:text-2xl
                max-w-3xl
                mx-auto
                leading-relaxed
                drop-shadow-lg
              "
            >
              Välkommen till Bonnatösens Saloon i Nora
            </p>

            <p
              className="
                mt-3
                text-[#f8c04d]
                text-base md:text-lg
                font-semibold
                tracking-wide
                drop-shadow-lg
              "
            >
              Prästgatan 27, Nora
            </p>
          </div>

          {/* ÖPPETTIDER */}
          <div
            className="
              max-w-xl
              mx-auto
              bg-[#fff8ec]/95
              backdrop-blur-md
              text-[#3c2a1d]
              rounded-3xl
              border border-white/20
              shadow-2xl
              overflow-hidden
            "
          >

            {/* GUL TOPPLINJE */}
            <div className="h-1.5 bg-[#f8a109]" />

            <div className="p-6 sm:p-8">

              <p
                className="
                  uppercase
                  tracking-[0.25em]
                  text-[#c57a00]
                  font-semibold
                  text-xs
                  mb-2
                "
              >
                När ses vi?
              </p>

              <h2
                className="
                  text-3xl md:text-4xl
                  font-rye
                  text-[#5b3a29]
                  mb-7
                "
              >
                Öppettider
              </h2>

              <div className="space-y-1">

                {/* TORSDAG */}
                <div
                  className="
                    flex items-center justify-between
                    border-b border-[#d1b48c]/50
                    py-3
                  "
                >
                  <span className="text-base sm:text-lg font-semibold">
                    Torsdag
                  </span>

                  <span className="text-base sm:text-lg font-bold text-[#c57a00]">
                    10:30–15:00
                  </span>
                </div>

                {/* FREDAG */}
                <div
                  className="
                    flex items-center justify-between
                    border-b border-[#d1b48c]/50
                    py-3
                  "
                >
                  <span className="text-base sm:text-lg font-semibold">
                    Fredag
                  </span>

                  <span className="text-base sm:text-lg font-bold text-[#c57a00]">
                    10:30–20:00
                  </span>
                </div>

                {/* LÖRDAG */}
                <div
                  className="
                    flex items-center justify-between
                    border-b border-[#d1b48c]/50
                    py-3
                  "
                >
                  <span className="text-base sm:text-lg font-semibold">
                    Lördag
                  </span>

                  <span className="text-base sm:text-lg font-bold text-[#c57a00]">
                    11:00–20:00
                  </span>
                </div>

                {/* SÖNDAG */}
                <div
                  className="
                    flex items-center justify-between
                    py-3
                  "
                >
                  <span className="text-base sm:text-lg font-semibold">
                    Söndag
                  </span>

                  <span className="text-base sm:text-lg font-bold text-[#c57a00]">
                    11:00–16:00
                  </span>
                </div>

              </div>

              {/* ADRESS / INFO */}
              <div
                className="
                  mt-6
                  bg-[#f8a109]
                  text-[#2b1b10]
                  rounded-2xl
                  px-5 py-4
                  text-center
                "
              >
                <p className="font-rye text-xl mb-1">
                  Bonnatösens Saloon
                </p>

                <p className="font-semibold">
                  Prästgatan 27, Nora
                </p>

                <p className="text-sm mt-1">
                  Välkommen in!
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}