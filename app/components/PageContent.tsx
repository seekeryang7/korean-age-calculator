"use client";

import { useLanguage } from "./LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import AgeCalculator from "./AgeCalculator";

export default function PageContent() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-1 flex-col font-sans">
      {/* Language Switcher */}
      <nav className="hero-bg px-4 pt-6">
        <LanguageSwitcher />
      </nav>

      {/* Hero */}
      <header className="hero-bg px-4 pt-12 pb-14 text-center">
        <p className="gold-shimmer mb-3 text-sm font-semibold tracking-widest uppercase">
          &#9672; Korean Age &#9672;
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-[#1B3A5C] sm:text-5xl dark:text-[#F5EDD6]">
          {t.hero.title}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-[#1B3A5C]/70 dark:text-[#F5EDD6]/60">
          {t.hero.subtitle}
        </p>
      </header>

      {/* Calculator */}
      <section className="hero-bg px-4 pb-16">
        <AgeCalculator />
      </section>

      {/* Decorative divider */}
      <div className="korean-divider px-8 py-2 text-sm">&#9830;</div>

      {/* Explanation */}
      <section className="bg-[var(--korean-cream)] px-4 py-16">
        <div className="mx-auto max-w-2xl space-y-8">
          <div className="glass-card rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-[#1B3A5C] dark:text-[#F5EDD6]">
              {t.explanation.howTitle}
            </h2>
            <p className="mt-3 leading-7 text-[#1B3A5C]/75 dark:text-[#F5EDD6]/65">
              {t.explanation.howP1}
            </p>
            <p className="mt-4 rounded-lg bg-[#C9A84C]/10 px-4 py-3 text-center font-semibold text-[#1B3A5C] dark:bg-[#C9A84C]/15 dark:text-[#C9A84C]">
              {t.explanation.howFormula}
            </p>
          </div>

          <div className="glass-card rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-[#1B3A5C] dark:text-[#F5EDD6]">
              {t.explanation.vsTitle}
            </h2>
            <p className="mt-3 leading-7 text-[#1B3A5C]/75 dark:text-[#F5EDD6]/65">
              {t.explanation.vsP1}
            </p>
          </div>

          <div className="glass-card rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-[#1B3A5C] dark:text-[#F5EDD6]">
              {t.explanation.reformTitle}
            </h2>
            <p className="mt-3 leading-7 text-[#1B3A5C]/75 dark:text-[#F5EDD6]/65">
              {t.explanation.reformP1}
            </p>
          </div>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="korean-divider px-8 py-2 text-sm">&#9830;</div>

      {/* FAQ */}
      <section className="bg-[var(--korean-cream)] px-4 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-8 text-center text-2xl font-semibold text-[#1B3A5C] dark:text-[#F5EDD6]">
            {t.faq.title}
          </h2>
          <dl className="space-y-4">
            {t.faq.items.map((item, i) => (
              <div key={i} className="glass-card rounded-xl p-5">
                <dt className="font-semibold text-[#C73E3A] dark:text-[#E8A09E]">
                  {item.q}
                </dt>
                <dd className="mt-2 leading-7 text-[#1B3A5C]/75 dark:text-[#F5EDD6]/65">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1B3A5C] px-4 py-8 text-center text-sm text-[#F5EDD6]/70">
        <p>
          {t.footer} &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
