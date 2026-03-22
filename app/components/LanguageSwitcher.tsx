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
            className={`cursor-pointer rounded-full px-3 py-1 text-sm font-medium transition-colors ${
              active
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            {translations[l].meta.flag} {translations[l].meta.langLabel}
          </button>
        );
      })}
    </div>
  );
}
