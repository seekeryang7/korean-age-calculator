"use client";

import { useState, useMemo } from "react";
import { useLanguage } from "./LanguageContext";
import FunResults from "./FunResults";

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

  const selectClass =
    "w-full rounded-lg border border-[#C9A84C]/30 bg-white/80 px-3 py-2.5 text-[#1B3A5C] focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 focus:outline-none dark:bg-[#0D1B2A]/80 dark:text-[#F5EDD6] dark:border-[#C9A84C]/20";

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="glass-card rounded-2xl p-6 shadow-xl">
        <h2 className="mb-6 text-xl font-semibold text-[#1B3A5C] dark:text-[#F5EDD6]">
          {t.calculator.heading}
        </h2>

        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-[#1B3A5C]/80 dark:text-[#F5EDD6]/80">
              {t.calculator.label}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {/* Year */}
              <div>
                <label className="mb-1 block text-xs text-[#1B3A5C]/50 dark:text-[#F5EDD6]/40">
                  {t.calculator.yearLabel}
                </label>
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className={selectClass}
                >
                  <option value="">--</option>
                  {years.map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>
              {/* Month */}
              <div>
                <label className="mb-1 block text-xs text-[#1B3A5C]/50 dark:text-[#F5EDD6]/40">
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
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>
              {/* Day */}
              <div>
                <label className="mb-1 block text-xs text-[#1B3A5C]/50 dark:text-[#F5EDD6]/40">
                  {t.calculator.dayLabel}
                </label>
                <select
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  className={selectClass}
                >
                  <option value="">--</option>
                  {days.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {error && (
            <p className="text-sm text-[#C73E3A]">{error}</p>
          )}

          <button
            onClick={calculate}
            className="w-full cursor-pointer rounded-lg bg-gradient-to-r from-[#C73E3A] to-[#1B3A5C] px-4 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-[1.02] focus:ring-2 focus:ring-[#C9A84C]/50 focus:outline-none active:scale-[0.98]"
          >
            {t.calculator.button}
          </button>
        </div>

        {result && (
          <div className="animate-fade-in mt-6 space-y-4">
            {/* Korean Age — Red */}
            <div className="rounded-xl bg-gradient-to-br from-[#C73E3A]/10 to-[#C73E3A]/5 p-5 border border-[#C73E3A]/15 dark:from-[#C73E3A]/20 dark:to-[#C73E3A]/10 dark:border-[#C73E3A]/20">
              <p className="text-sm font-medium text-[#C73E3A]">
                {t.calculator.koreanAge}
              </p>
              <p className="text-4xl font-bold text-[#C73E3A] mt-1">
                {result.koreanAge}
              </p>
            </div>

            {/* International Age — Navy */}
            <div className="rounded-xl bg-gradient-to-br from-[#1B3A5C]/10 to-[#1B3A5C]/5 p-5 border border-[#1B3A5C]/15 dark:from-[#1B3A5C]/30 dark:to-[#1B3A5C]/20 dark:border-[#1B3A5C]/30">
              <p className="text-sm font-medium text-[#1B3A5C] dark:text-[#8FACC4]">
                {t.calculator.internationalAge}
              </p>
              <p className="text-4xl font-bold text-[#1B3A5C] dark:text-[#C5D8E8] mt-1">
                {result.internationalAge}
              </p>
            </div>

            <p className="text-center text-sm text-[#1B3A5C]/60 dark:text-[#F5EDD6]/50">
              {t.calculator.resultBornIn(result.birthYear)}{" "}
              <strong className="text-[#C9A84C]">
                {t.calculator.resultDiff(
                  result.koreanAge - result.internationalAge
                )}
              </strong>
            </p>
          </div>
        )}

        {result && (
          <FunResults birthYear={result.birthYear} koreanAge={result.koreanAge} />
        )}
      </div>
    </div>
  );
}
