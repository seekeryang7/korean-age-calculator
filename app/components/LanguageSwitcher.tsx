"use client";

import { locales, translations } from "../lib/translations";
import { useLanguage } from "./LanguageContext";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {locales.map((l) => {
        const active = l === locale;
        return (
          <button
            key={l}
            onClick={() => setLocale(l)}
            className={`cursor-pointer rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
              active
                ? "bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] text-white shadow-md shadow-[#EC4899]/20"
                : "bg-[#251D3A] text-white/70 hover:bg-[#1A1230]"
            } border border-[#8B5CF6]/20`}
          >
            {translations[l].meta.flag} {translations[l].meta.langLabel}
          </button>
        );
      })}
    </div>
  );
}
