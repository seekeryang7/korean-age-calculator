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
                ? "bg-[#1B3A5C] text-[#C9A84C] shadow-md"
                : "bg-[#FFF8F0] text-[#1B3A5C] hover:bg-[#F5EDD6] dark:bg-[#152A3E] dark:text-[#F5EDD6] dark:hover:bg-[#1B3A5C]"
            } border border-[#C9A84C]/30`}
          >
            {translations[l].meta.flag} {translations[l].meta.langLabel}
          </button>
        );
      })}
    </div>
  );
}
