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
          Hitta till Saloonen
        </h1>

        {/* Karta */}
        <div className="rounded-2xl overflow-hidden shadow-xl border border-[#d1b48c]">
          <iframe
  width="100%"
  height="450"
  loading="lazy"
  style={{ border: 0 }}
  src="https://www.openstreetmap.org/export/embed.html?bbox=15.0179%2C59.5140%2C15.0380%2C59.5250&layer=mapnik&marker=59.519688%2C15.027974"
></iframe>

        </div>

        {/* Info */}
        <div className="text-center mt-6 text-lg">
          <p className="mb-2 font-semibold">Adress:</p>
          <p>PRÄSTGATAN 27 </p>
         
        </div>
      </div>
    </div>
  );
}
