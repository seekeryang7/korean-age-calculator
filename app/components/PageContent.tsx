"use client";

import { useLanguage } from "./LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import AgeCalculator from "./AgeCalculator";
import CelebrityCard from "./CelebrityCard";
import { getAllCelebrities, getKoreanAge } from "../lib/funFacts";

export default function PageContent() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const allCelebs = getAllCelebrities();

  return (
    <div className="flex flex-1 flex-col font-sans">
      {/* Language Switcher */}
      <nav className="hero-bg px-4 pt-6">
        <LanguageSwitcher />
      </nav>

      {/* Hero */}
      <header className="hero-bg px-4 pt-12 pb-6 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {t.hero.title}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/50">
          {t.hero.subtitle}
        </p>
      </header>

      {/* Calculator */}
      <section className="hero-bg px-4 pb-16">
        <AgeCalculator />
      </section>

      {/* Celebrity Gallery */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-white mb-2">
            {t.gallery.title}
          </h2>
          <p className="text-white/40 mb-8">
            {t.gallery.subtitle}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {allCelebs.map((celeb) => (
              <CelebrityCard
                key={celeb.name}
                celebrity={celeb}
                koreanAge={getKoreanAge(celeb.birthYear, currentYear)}
                size="sm"
                labels={{
                  koreanAgeLabel: t.gallery.koreanAgeLabel,
                  bornLabel: t.gallery.bornLabel,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Explanation */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-2xl space-y-8">
          <div className="glass-card rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-white">
              {t.explanation.howTitle}
            </h2>
            <p className="mt-3 leading-7 text-white/60">
              {t.explanation.howP1}
            </p>
            <p className="mt-3 leading-7 text-white/60">
              {t.explanation.howP2}
            </p>
            <p className="mt-4 rounded-lg bg-[#8B5CF6]/10 px-4 py-3 text-center font-semibold text-[#EC4899]">
              {t.explanation.howFormula}
            </p>
          </div>

          <div className="glass-card rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-white">
              {t.explanation.vsTitle}
            </h2>
            <p className="mt-3 leading-7 text-white/60">
              {t.explanation.vsP1}
            </p>
            <p className="mt-3 leading-7 text-white/60">
              {t.explanation.vsP2}
            </p>
          </div>

          <div className="glass-card rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-white">
              {t.explanation.reformTitle}
            </h2>
            <p className="mt-3 leading-7 text-white/60">
              {t.explanation.reformP1}
            </p>
            <p className="mt-3 leading-7 text-white/60">
              {t.explanation.reformP2}
            </p>
          </div>
        </div>
      </section>

      {/* Guide */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-2xl space-y-8">
          <h2 className="text-center text-2xl font-bold text-white">
            {t.guide.title}
          </h2>

          <div className="glass-card rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white">
              {t.guide.cultureTitle}
            </h3>
            <p className="mt-3 leading-7 text-white/60">
              {t.guide.cultureP1}
            </p>
            <p className="mt-3 leading-7 text-white/60">
              {t.guide.cultureP2}
            </p>
          </div>

          <div className="glass-card rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white">
              {t.guide.examplesTitle}
            </h3>
            <p className="mt-3 leading-7 text-white/60">
              {t.guide.examplesP1}
            </p>
          </div>

          <div className="glass-card rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white">
              {t.guide.tipsTitle}
            </h3>
            <p className="mt-3 leading-7 text-white/60">
              {t.guide.tipsP1}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-8 text-center text-2xl font-semibold text-white">
            {t.faq.title}
          </h2>
          <dl className="space-y-4">
            {t.faq.items.map((item, i) => (
              <div key={i} className="glass-card rounded-xl p-5">
                <dt className="font-semibold text-[#EC4899]">
                  {item.q}
                </dt>
                <dd className="mt-2 leading-7 text-white/60">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0718] px-4 py-8 text-center text-sm text-white/40">
        <p>
          {t.footer} &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
