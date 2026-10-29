export default function Karta() {
  return (
    <div className="min-h-screen bg-[#fff8ec] text-[#3c2a1d] flex flex-col items-center p-8">
      <div className="max-w-4xl w-full">

        {/* Tillbaka */}
        <a
          href="/"
          className="inline-block mb-6 text-[#5b3a29] hover:text-[#f8a109] font-semibold transition"
        >
          ← Tillbaka
        </a>

        {/* Titel */}
        <h1 className="text-5xl font-rye text-center text-[#5b3a29] drop-shadow-sm mb-10">
          Hitta till Bonnatösens Saloon
        </h1>

        {/* Info */}
        <div className="text-center mt-8 bg-white rounded-2xl shadow-md border border-[#d1b48c] p-6">
          <p className="uppercase tracking-[0.25em] text-[#c57a00] font-semibold text-xs mb-3">
            Hitta hit
          </p>

          <p className="text-2xl font-rye text-[#5b3a29] mb-3">
            Bonnatösens Saloon
          </p>

          <p className="text-lg">
            📍 Prästgatan 27
          </p>

          <p className="text-lg">
            Nora
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Prästgatan+27+Nora"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-[#f8a109] text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-[#cf8600] transition"
          >
            Öppna i Google Maps →
          </a>
        </div>

      </div>
    </div>
  );
}