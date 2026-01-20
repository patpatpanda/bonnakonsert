import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="py-8 text-center mt-0 w-full overflow-hidden"
      style={{ backgroundColor: "#f8a409ff", color: "black" }}
    >
      <div className="w-full max-w-md mx-auto flex flex-col items-center gap-6 px-4">

        {/* Telefon */}
        <p className="text-sm tracking-wide leading-normal break-words">
          Telefon:{" "}
          <a
            href="tel:+46793376485"
            className="hover:opacity-70"
            style={{ color: "black" }}
          >
            +46 79 337 64 85
          </a>
        </p>

        {/* Sociala medier */}
        <div className="flex flex-col md:flex-row items-center gap-5 text-center">

          {/* Instagram */}
          <a
            href="https://www.instagram.com/bonnatosensburgare"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-70 transition text-center"
            style={{ color: "black" }}
          >
            <FaInstagram size={22} />
            <span className="text-sm">Instagram</span>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/search/top?q=bonnat%C3%B6sen"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-70 transition text-center"
            style={{ color: "black" }}
          >
            <FaFacebook size={22} />
            <span className="text-sm">Facebook</span>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/feed/subscriptions/UCaIAV31L9DGmwuf_6Q8k2Ig"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-70 transition text-center"
            style={{ color: "black" }}
          >
            <FaYoutube size={22} />
            <span className="text-sm">YouTube</span>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs opacity-80">
          © {new Date().getFullYear()} Bonnatösen. Alla rättigheter förbehållna.
        </p>
      </div>
    </footer>
  );
}
