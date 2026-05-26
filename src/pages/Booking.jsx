import { useState } from "react";
import { Link } from "react-router-dom";

export default function Booking() {
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [antalError, setAntalError] = useState(false);
  const [availableTimes, setAvailableTimes] = useState([]);

  // Skapar tider i 30-minutersintervall
  const generateTimes = (start, end) => {
    const times = [];
    for (let t = start; t <= end; t += 30) {
      const h = String(Math.floor(t / 60)).padStart(2, "0");
      const m = String(t % 60).padStart(2, "0");
      times.push(`${h}:${m}`);
    }
    return times;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const datum = form.get("datum");
    const tid = form.get("tid");

    if (!datum || !tid) {
      setError("Vänligen välj både datum och tid.");
      setLoading(false);
      return;
    }

    const payload = {
      namn: form.get("namn"),
      telefon: form.get("telefon"),
      mail: form.get("mail"),
      antal: form.get("antal"),
      datumTid: `${datum} ${tid}`,
      ovrigt: form.get("ovrigt"),
      hpfield: form.get("hpfield"),
    };

    if (Number(payload.antal) < 4) {
      setAntalError(true);
      setError("Minst 4 personer krävs för bokning.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(
        "https://bonnaapi-d7gfhabzf0a0fqeh.westeurope-01.azurewebsites.net/api/booking-request",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) throw new Error("Kunde inte skicka bokningen.");

      setSent(true);
    } catch (err) {
      setError(err.message || "Något gick fel.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fff8ec] text-[#3c2a1d] flex flex-col items-center p-8">
      <div className="max-w-2xl w-full mt-12">

        <Link to="/saloon" className="inline-block mb-6 font-semibold">
          ← Tillbaka
        </Link>

        <h1 className="text-5xl font-bold text-center mb-8">
          Boka bord
        </h1>

        <div className="bg-white rounded-xl shadow-lg p-8">
          {sent ? (
            <p className="text-center text-xl font-semibold">
              Tack för din bokning! 🤠
              Vi återkommer inom kort.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">

              {/* Namn + Telefon */}
              <div className="grid md:grid-cols-2 gap-6">
                <label className="flex flex-col text-sm font-semibold">
                  Namn
                  <input type="text" name="namn" required className="p-3 rounded-md border" />
                </label>

                <label className="flex flex-col text-sm font-semibold">
                  Telefon
                  <input type="tel" name="telefon" required className="p-3 rounded-md border" />
                </label>
              </div>

              {/* Mail */}
              <label className="flex flex-col text-sm font-semibold">
                E-post
                <input type="email" name="mail" required className="p-3 rounded-md border" />
              </label>

              {/* Datum + Tid */}
              <div className="grid md:grid-cols-2 gap-6">
                <label className="flex flex-col text-sm font-semibold">
                  Datum
                  <input
                    type="date"
                    name="datum"
                    min={new Date().toISOString().split("T")[0]}
                    required
                    onChange={(e) => {
                      const date = new Date(e.target.value);
                      const day = date.getDay();
                      let times = [];

                      if (day === 4 || day === 5) {
                        times = generateTimes(630, 900); // 10:30–15:00
                      }

                      if (day === 5) {
                        times = [...times, ...generateTimes(1020, 1260)]; // 17:00–21:00
                      }

                      if (day === 6) {
                        times = generateTimes(660, 1260); // 11:00–21:00
                      }

                      if (day === 0) {
                        times = generateTimes(630, 900); // 10:30–15:00
                      }

                      setAvailableTimes(times);
                    }}
                    className="p-3 rounded-md border"
                  />
                </label>

                <label className="flex flex-col text-sm font-semibold">
                  Tid
                  <select
                    name="tid"
                    required
                    disabled={availableTimes.length === 0}
                    className="p-3 rounded-md border bg-white disabled:opacity-50"
                  >
                    <option value="">
                      {availableTimes.length === 0
                        ? "Välj datum först / Stängt"
                        : "Välj tid"}
                    </option>
                    {availableTimes.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              {/* Antal */}
              <label className="flex flex-col text-sm font-semibold">
                Antal personer
                <input
                  type="number"
                  name="antal"
                  min="4"
                  required
                  onChange={(e) => setAntalError(Number(e.target.value) < 4)}
                  className={`p-3 rounded-md border ${
                    antalError ? "border-red-500" : ""
                  }`}
                />
                {antalError && (
                  <span className="text-xs text-red-600">
                    Minst 4 personer krävs.
                  </span>
                )}
              </label>

              {/* Honeypot */}
              <input type="text" name="hpfield" style={{ display: "none" }} />

              {/* Övrigt */}
              <label className="flex flex-col text-sm font-semibold">
                Övrig info
                <textarea name="ovrigt" rows="4" className="p-3 rounded-md border" />
              </label>

              {error && (
                <p className="text-red-600 text-center text-sm">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="bg-[#f8a109] text-white py-3 rounded-md font-semibold disabled:opacity-60"
              >
                {loading ? "Skickar..." : "Skicka bokning"}
              </button>

            

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
