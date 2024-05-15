import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="space-y-3 p-5">
      <div className="flex flex-row justify-center gap-5">
        <FiGithub
          className="text-slate-300 hover:scale-110 hover:text-blue-500"
          size={20}
          href="https://github.com/lucacucinotta"
        />
        <FaLinkedinIn
          className="text-slate-300 hover:scale-110 hover:text-blue-500"
          size={20}
          href="www.linkedin.com/in/lucacucinotta"
        />
        <FaInstagram
          className="text-slate-300 hover:scale-110 hover:text-blue-500"
          size={20}
          href="https://www.instagram.com/luca.cucinotta"
        />
        <FaFacebookF
          className="text-slate-300 hover:scale-110 hover:text-blue-500"
          size={20}
          href="https://www.facebook.com/luca.cucinotta.9"
        />
      </div>
      <p className="text-inter-500 text-center text-sm text-slate-300">
        Luca Cucinotta | Portfolio ©2024
      </p>
    </footer>
  );
}
