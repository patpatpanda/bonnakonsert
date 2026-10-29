import { FaInstagram, FaFacebook, FaYoutube, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
        relative w-full overflow-hidden
        py-16
      "
      style={{
        background: "linear-gradient(180deg, #fbbf04 0%, #e9a900 100%)",
        color: "#ffffff",
      }}
    >

      {/* Dekorativ topp */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[3px] bg-white/40 rounded-full" />

      <div className="
        max-w-3xl mx-auto
        px-6
        flex flex-col items-center
        gap-10
      ">

        {/* Kontaktkort */}
        <div className="
          bg-white/20
          backdrop-blur-sm
          rounded-3xl
          px-8 py-7
          text-center
          shadow-sm
          max-w-md
        ">

          <h3 className="
            text-xl md:text-2xl
            font-semibold
            mb-3
          ">
            Kontakta oss
          </h3>

          <p className="
            text-sm md:text-base
            leading-relaxed
            opacity-90
            mb-6
          ">
            Vi svarar endast i telefon under våra öppettider.
            Det går alltid bra att maila oss med frågor och förfrågningar.
          </p>


          <div className="
            flex flex-col
            items-center
            gap-3
          ">

            <a
              href="tel:+46793376485"
              className="
                flex items-center gap-3
                text-lg
                font-medium
                hover:opacity-70
                transition
              "
            >
              <FaPhoneAlt />
              +46 79 337 64 85
            </a>


            <a
              href="mailto:bonnatosensburgare@gmail.com"
              className="
                text-sm md:text-base
                underline
                underline-offset-4
                hover:opacity-70
                transition
                break-all
              "
            >
              bonnatosensburgare@gmail.com
            </a>

          </div>

        </div>


        {/* Sociala medier */}
        <div className="flex gap-4">

          {[
            {
              href: "https://www.instagram.com/bonnatosensburgare",
              icon: <FaInstagram size={23} />,
              label: "Instagram",
            },
            {
              href: "https://www.facebook.com/search/top?q=bonnat%C3%B6sen",
              icon: <FaFacebook size={23} />,
              label: "Facebook",
            },
            {
              href: "https://www.youtube.com/feed/subscriptions/UCaIAV31L9DGmwuf_6Q8k2Ig",
              icon: <FaYoutube size={23} />,
              label: "YouTube",
            },
          ].map((item, i) => (

            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="
                w-12 h-12
                rounded-full
                flex items-center justify-center
                bg-white/10
                border border-white/20
                hover:bg-white
                hover:text-[#fbbf04]
                transition-all duration-300
              "
            >
              {item.icon}
            </a>

          ))}

        </div>


        {/* Copyright */}
        <div className="
          w-full
          border-t border-white/20
          pt-6
          text-center
        ">

          <p className="
            text-sm
            opacity-70
            tracking-wide
          ">
            © {new Date().getFullYear()} Bonnatösen. Alla rättigheter förbehållna.
          </p>

        </div>

      </div>

    </footer>
  );
}