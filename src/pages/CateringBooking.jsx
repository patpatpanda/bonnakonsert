import { useState } from "react";
import { Link } from "react-router-dom";

export default function CateringBooking() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = new FormData(e.currentTarget);

    const payload = {
      namn: form.get("namn"),
      telefon: form.get("telefon"),
      mail: form.get("mail"),
      eventtyp: form.get("eventtyp"),
      onskadMat: form.get("onskadMat"),
      antal: form.get("antal"),
      datumTid: `${form.get("datum")} ${form.get("tid")}`,
      plats: form.get("plats"),
      ovrigt: form.get("ovrigt"),
      hpfield: form.get("hpfield"),

    };

    try {
     const res = await fetch("https://bonnaapi-d7gfhabzf0a0fqeh.westeurope-01.azurewebsites.net/api/catering-request", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload),
});


      if (!res.ok) throw new Error("Kunde inte skicka förfrågan.");
      setSent(true);
    } catch (err) {
      setError(err.message || "Något gick fel.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-bonna-light text-bonna-dark px-6 py-10">
      <div className="max-w-2xl mx-auto">

        {/* Tillbaka-knapp */}
        <Link
          to="/catering"
          className="inline-block mb-6 text-[#5b3a29] hover:text-[#f8a109] font-semibold transition-colors duration-200"
        >
          ← Tillbaka till catering
        </Link>

        <h1 className="text-4xl font-rye font-bold text-center mb-10">
          Cateringförfrågan
        </h1>

        <section className="py-10 px-8 bg-[#fff8ec] rounded-2xl border border-[#d1b48c] shadow-[0_4px_15px_rgba(91,58,41,0.15)] relative">

          {!sent ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">

              {/* Namn & Telefon */}
              <div className="grid md:grid-cols-2 gap-6">
                <label className="flex flex-col text-sm font-semibold">
                  Namn
                  <input
                    name="namn"
                    type="text"
                    required
                    className="p-3 mt-1 bg-white border border-[#d1b48c] rounded-md shadow-inner focus:border-[#f8a109] focus:ring-1 focus:ring-[#f8a109] transition"
                  />
                </label>

                <label className="flex flex-col text-sm font-semibold">
                  Telefonnummer
                  <input
                    name="telefon"
                    type="tel"
                    required
                    className="p-3 mt-1 bg-white border border-[#d1b48c] rounded-md shadow-inner focus:border-[#f8a109] focus:ring-1 focus:ring-[#f8a109] transition"
                  />
                </label>
              </div>

              {/* Mail & Eventtyp */}
              <div className="grid md:grid-cols-2 gap-6">
                <label className="flex flex-col text-sm font-semibold">
                  Mailadress
                  <input
                    name="mail"
                    type="email"
                    required
                    className="p-3 mt-1 bg-white border border-[#d1b48c] rounded-md shadow-inner focus:border-[#f8a109] focus:ring-1 focus:ring-[#f8a109] transition"
                  />
                </label>

                <label className="flex flex-col text-sm font-semibold">
                  Typ av event/tillställning
                  <input
                    name="eventtyp"
                    type="text"
                    className="p-3 mt-1 bg-white border border-[#d1b48c] rounded-md shadow-inner focus:border-[#f8a109] focus:ring-1 focus:ring-[#f8a109] transition"
                  />
                </label>
              </div>

              {/* Mat */}
              <label className="flex flex-col text-sm font-semibold">
                Vad önskar ni för typ av mat?
                <input
                  name="onskadMat"
                  type="text"
                  className="p-3 mt-1 bg-white border border-[#d1b48c] rounded-md shadow-inner focus:border-[#f8a109] focus:ring-1 focus:ring-[#f8a109] transition"
                />
              </label>

              {/* Antal, datum, tid */}
              <div className="grid md:grid-cols-3 gap-6">
                <label className="flex flex-col text-sm font-semibold">
                  Antal
                  <input
                    name="antal"
                    type="number"
                    min="1"
                    className="p-3 mt-1 bg-white border border-[#d1b48c] rounded-md shadow-inner focus:border-[#f8a109] focus:ring-1 focus:ring-[#f8a109] transition"
                  />
                </label>

                <label className="flex flex-col text-sm font-semibold">
                  Datum
                  <input
                    name="datum"
                    type="date"
                    required
                    className="p-3 mt-1 bg-white border border-[#d1b48c] rounded-md shadow-inner focus:border-[#f8a109] focus:ring-1 focus:ring-[#f8a109] transition cursor-pointer"
                  />
                </label>

                <label className="flex flex-col text-sm font-semibold">
                  Tid
                  <input
                    name="tid"
                    type="time"
                    required
                    step="900"
                    className="p-3 mt-1 bg-white border border-[#d1b48c] rounded-md shadow-inner focus:border-[#f8a109] focus:ring-1 focus:ring-[#f8a109] transition cursor-pointer"
                  />
                </label>
              </div>

              {/* Plats */}
              <label className="flex flex-col text-sm font-semibold">
                Plats
                <input
                  name="plats"
                  type="text"
                  className="p-3 mt-1 bg-white border border-[#d1b48c] rounded-md shadow-inner focus:border-[#f8a109] focus:ring-1 focus:ring-[#f8a109] transition"
                />
              </label>

              {/* Övrigt */}
              <label className="flex flex-col text-sm font-semibold">
                Övrig info och önskemål
                <textarea
                  name="ovrigt"
                  rows="4"
                  className="p-3 mt-1 bg-white border border-[#d1b48c] rounded-md shadow-inner focus:border-[#f8a109] focus:ring-1 focus:ring-[#f8a109] transition resize-none"
                ></textarea>
              </label>
              <input
  type="text"
  name="hpfield"
  style={{ display: "none" }}
  tabIndex="-1"
  autoComplete="off"
/>


              {/* Felmeddelande */}
              {error && (
                <p className="text-red-600 font-semibold text-center">
                  {error}
                </p>
              )}

              {/* Skicka */}
              <div className="text-center mt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#f8a109] text-white font-semibold py-3 px-10 rounded-md shadow-md hover:bg-[#cf8600] transition disabled:opacity-60"
                >
                  {loading ? "Skickar..." : "Skicka förfrågan"}
                </button>
              </div>

            </form>
          ) : (
            <p className="text-center text-xl text-[#3c2a1d] font-semibold mt-8">
              Tack! Din förfrågan har skickats 🤠  
              <br />
              Vi återkopplar så snart vi kan.
            </p>
          )}

        </section>
      </div>
    </div>
  );
}
