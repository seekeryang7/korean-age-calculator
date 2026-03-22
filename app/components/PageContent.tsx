"use client";

import { useLanguage } from "./LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import AgeCalculator from "./AgeCalculator";

export default function PageContent() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-1 flex-col bg-gray-50 font-sans dark:bg-black">
      {/* Language Switcher */}
      <nav className="px-4 pt-6">
        <LanguageSwitcher />
      </nav>

      {/* Hero */}
      <header className="px-4 pt-10 pb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
          {t.hero.title}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600 dark:text-gray-400">
          {t.hero.subtitle}
        </p>
      </header>

      {/* Calculator */}
      <section className="px-4 pb-16">
        <AgeCalculator />
      </section>

      {/* Explanation */}
      <section className="border-t border-gray-200 bg-white px-4 py-16 dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto max-w-2xl space-y-10">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {t.explanation.howTitle}
            </h2>
            <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
              {t.explanation.howP1}
            </p>
            <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
              <strong className="text-gray-900 dark:text-white">
                {t.explanation.howFormula}
              </strong>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {t.explanation.vsTitle}
            </h2>
            <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
              {t.explanation.vsP1}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {t.explanation.reformTitle}
            </h2>
            <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
              {t.explanation.reformP1}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-gray-200 px-4 py-16 dark:border-gray-800">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-8 text-2xl font-semibold text-gray-900 dark:text-white">
            {t.faq.title}
          </h2>
          <dl className="space-y-6">
            {t.faq.items.map((item, i) => (
              <div key={i}>
                <dt className="font-medium text-gray-900 dark:text-white">
                  {item.q}
                </dt>
                <dd className="mt-1 leading-7 text-gray-600 dark:text-gray-400">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-4 py-8 text-center text-sm text-gray-500 dark:border-gray-800 dark:text-gray-500">
        <p>
          {t.footer} &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
