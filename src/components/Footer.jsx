import { linkArray } from "./utils/myLink";

export default function Footer() {
  return (
    <footer className="space-y-3 p-5">
      <div className="flex flex-row justify-center gap-5 md:hidden">
        {linkArray.map((link, index) => (
          <link.icon key={index} size={20} className="linkIcon" />
        ))}
      </div>
      <p className="text-inter-500 xl:e text-center text-sm text-slate-300 xl:text-base">
        Luca Cucinotta | Portfolio ©2024
      </p>
    </footer>
  );
}
