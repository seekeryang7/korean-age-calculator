"use client";

import { useState, useMemo } from "react";
import { useLanguage } from "./LanguageContext";
import CelebrityCard from "./CelebrityCard";
import { getCelebMatches, getKoreanAge, getShareText } from "../lib/funFacts";

interface AgeResult {
  koreanAge: number;
  internationalAge: number;
  birthYear: number;
}

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate();
}

export default function AgeCalculator() {
  const { t } = useLanguage();
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [result, setResult] = useState<AgeResult | null>(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const currentYear = new Date().getFullYear();

  const years = useMemo(() => {
    const arr: number[] = [];
    for (let y = currentYear; y >= 1900; y--) arr.push(y);
    return arr;
  }, [currentYear]);

  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  const days = useMemo(() => {
    const y = year ? parseInt(year) : currentYear;
    const m = month ? parseInt(month) : 1;
    const max = getDaysInMonth(y, m);
    return Array.from({ length: max }, (_, i) => i + 1);
  }, [year, month, currentYear]);

  const celebResult = useMemo(
    () => (result ? getCelebMatches(result.koreanAge, currentYear) : null),
    [result, currentYear]
  );

  const twitterShareUrl = useMemo(() => {
    if (!result || !celebResult) return "";
    const firstMatch =
      celebResult.exact[0] || celebResult.fallbackCelebs?.[0] || null;
    const shareText = getShareText(
      result.koreanAge,
      firstMatch?.name || null,
      firstMatch?.nationality || null
    );
    const text = encodeURIComponent(shareText);
    return `https://twitter.com/intent/tweet?text=${text}`;
  }, [result, celebResult]);

  function calculate() {
    setError("");
    setResult(null);

    if (!year || !month || !day) {
      setError(t.calculator.errorEmpty);
      return;
    }

    const y = parseInt(year);
    const m = parseInt(month);
    const d = parseInt(day);
    const birth = new Date(y, m - 1, d);
    const today = new Date();

    if (birth > today) {
      setError(t.calculator.errorFuture);
      return;
    }

    const birthYear = birth.getFullYear();
    const koreanAge = currentYear - birthYear + 1;

    let internationalAge = currentYear - birthYear;
    const hadBirthdayThisYear =
      today.getMonth() > birth.getMonth() ||
      (today.getMonth() === birth.getMonth() &&
        today.getDate() >= birth.getDate());
    if (!hadBirthdayThisYear) {
      internationalAge -= 1;
    }

    setResult({ koreanAge, internationalAge, birthYear });
  }

  function reset() {
    setYear("");
    setMonth("");
    setDay("");
    setResult(null);
    setError("");
  }

  async function handleCopy() {
    if (!result || !celebResult) return;
    const firstMatch =
      celebResult.exact[0] || celebResult.fallbackCelebs?.[0] || null;
    const shareText = getShareText(
      result.koreanAge,
      firstMatch?.name || null,
      firstMatch?.nationality || null
    );
    await navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const selectClass =
    "w-full rounded-lg border border-[#8B5CF6]/30 bg-[#251D3A] px-3 py-2.5 text-white focus:border-[#EC4899] focus:ring-2 focus:ring-[#EC4899]/20 focus:outline-none";

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="glass-card rounded-2xl p-6 shadow-xl">
        <h2 className="mb-6 text-xl font-semibold text-white">
          {t.calculator.heading}
        </h2>

        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-white/70">
              {t.calculator.label}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {/* Year */}
              <div>
                <label className="mb-1 block text-xs text-white/40">
                  {t.calculator.yearLabel}
                </label>
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className={selectClass}
                >
                  <option value="">--</option>
                  {years.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>
              {/* Month */}
              <div>
                <label className="mb-1 block text-xs text-white/40">
                  {t.calculator.monthLabel}
                </label>
                <select
                  value={month}
                  onChange={(e) => {
                    setMonth(e.target.value);
                    setDay("");
                  }}
                  className={selectClass}
                >
                  <option value="">--</option>
                  {months.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>
              {/* Day */}
              <div>
                <label className="mb-1 block text-xs text-white/40">
                  {t.calculator.dayLabel}
                </label>
                <select
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  className={selectClass}
                >
                  <option value="">--</option>
                  {days.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {error && <p className="text-sm text-[#F43F5E]">{error}</p>}

          <button
            onClick={calculate}
            className="w-full cursor-pointer rounded-lg bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] px-4 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] hover:scale-[1.02] focus:ring-2 focus:ring-[#EC4899]/50 focus:outline-none active:scale-[0.98]"
          >
            {t.calculator.button}
          </button>
        </div>

        {/* Results */}
        {result && (
          <div className="animate-fade-in mt-8 space-y-8">
            {/* Korean Age Display */}
            <div className="text-center">
              <p className="text-sm text-white/50">{t.calculator.koreanAge}</p>
              <p className="text-7xl font-extrabold animate-count-up kpop-shimmer mt-2">
                {result.koreanAge}
              </p>
              <div className="mt-4">
                <span className="text-sm text-white/40">
                  {t.calculator.internationalAge}:{" "}
                  <strong className="text-white">
                    {result.internationalAge}
                  </strong>
                </span>
              </div>
              <p className="mt-3 text-sm text-white/40">
                {t.calculator.resultBornIn(result.birthYear)} &middot;{" "}
                {t.calculator.resultDiff(
                  result.koreanAge - result.internationalAge
                )}
              </p>
            </div>

            {/* Celebrity Twins */}
            {celebResult && (
              <div>
                <h3 className="text-xl font-bold text-center text-white mb-6">
                  {celebResult.fallbackMessage || t.results.twinsTitle}
                </h3>

                <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory justify-center">
                  {celebResult.exact.length > 0
                    ? celebResult.exact.map((celeb) => (
                        <div key={celeb.name} className="snap-center shrink-0">
                          <CelebrityCard
                            celebrity={celeb}
                            koreanAge={result.koreanAge}
                            badge={t.results.sameAgeBadge}
                            size="lg"
                            labels={{
                              koreanAgeLabel: t.gallery.koreanAgeLabel,
                              bornLabel: t.gallery.bornLabel,
                            }}
                          />
                        </div>
                      ))
                    : celebResult.fallbackCelebs?.map((celeb) => (
                        <div key={celeb.name} className="snap-center shrink-0">
                          <CelebrityCard
                            celebrity={celeb}
                            koreanAge={getKoreanAge(
                              celeb.birthYear,
                              currentYear
                            )}
                            size="lg"
                            labels={{
                              koreanAgeLabel: t.gallery.koreanAgeLabel,
                              bornLabel: t.gallery.bornLabel,
                            }}
                          />
                        </div>
                      ))}
                </div>
              </div>
            )}

            {/* Share Buttons */}
            <div className="flex flex-col gap-3">
              <a
                href={twitterShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-lg bg-[#1DA1F2]/10 border border-[#1DA1F2]/30 px-4 py-3 text-center font-medium text-[#1DA1F2] transition-all hover:bg-[#1DA1F2]/20 active:scale-[0.98]"
              >
                {t.results.shareTwitter}
              </a>
              <button
                onClick={handleCopy}
                className="w-full cursor-pointer rounded-lg border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 px-4 py-3 font-medium text-[#8B5CF6] transition-all hover:bg-[#8B5CF6]/20 active:scale-[0.98]"
              >
                {copied ? t.results.copied : t.results.copyLink}
              </button>
              <button
                onClick={reset}
                className="w-full cursor-pointer rounded-lg border border-white/10 bg-white/5 px-4 py-3 font-medium text-white/70 transition-all hover:bg-white/10 active:scale-[0.98]"
              >
                {t.results.recalculate}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
