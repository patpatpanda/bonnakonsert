import { FaInstagram, FaFacebook, FaYoutube, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
        relative w-full text-center
        py-[54px]
        overflow-hidden
      "
      style={{
        background: "linear-gradient(180deg, #fbbf04 0%, #f4b400 100%)",
        color: "white",
      }}
    >
      {/* Top divider */}
      

      <div className="w-full max-w-xl mx-auto flex flex-col items-center gap-10 px-4">

      {/* Kontakt */}
<div className="flex flex-col items-center gap-4 text-center">

  <p className="text-sm md:text-base text-white/90 max-w-md leading-relaxed">
    Vi svarar endast i telefon under våra öppettider.
    Det går alltid bra att maila oss med frågor och förfrågningar.
  </p>

  {/* Telefon */}
  <div className="flex items-center gap-3 text-lg md:text-xl font-medium">
    <FaPhoneAlt className="opacity-90" />

    <a
      href="tel:+46793376485"
      className="hover:opacity-80 transition"
    >
      +46 79 337 64 85
    </a>
  </div>

  {/* Mail */}
  <a
    href="mailto:bonnatosenburgare@gmail.com"
    className="
      text-sm md:text-base
      underline underline-offset-4
      hover:opacity-80 transition
      break-all
    "
  >
    bonnatosenburgare@gmail.com
  </a>



</div>
        {/* Sociala medier */}
        <div className="flex flex-wrap justify-center gap-5">

          {[
            {
              href: "https://www.instagram.com/bonnatosensburgare",
              icon: <FaInstagram size={22} />,
              label: "Instagram",
            },
            {
              href: "https://www.facebook.com/search/top?q=bonnat%C3%B6sen",
              icon: <FaFacebook size={22} />,
              label: "Facebook",
            },
            {
              href: "https://www.youtube.com/feed/subscriptions/UCaIAV31L9DGmwuf_6Q8k2Ig",
              icon: <FaYoutube size={22} />,
              label: "YouTube",
            },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-3
                px-6 py-3 rounded-full
                border border-white/60
                hover:bg-white hover:text-[#5b3a29]
                transition-all duration-200
                shadow-sm hover:shadow-md
              "
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm opacity-80 tracking-wide">
          © {new Date().getFullYear()} Bonnatösen. Alla rättigheter förbehållna.
        </p>
      </div>
    </footer>
  );
}
