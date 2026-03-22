"use client";

import { useState } from "react";

interface AgeResult {
  koreanAge: number;
  internationalAge: number;
  birthYear: number;
}

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [result, setResult] = useState<AgeResult | null>(null);
  const [error, setError] = useState("");

  function calculate() {
    setError("");
    setResult(null);

    if (!birthDate) {
      setError("Please select your date of birth.");
      return;
    }

    const birth = new Date(birthDate);
    const today = new Date();

    if (birth > today) {
      setError("Date of birth cannot be in the future.");
      return;
    }

    if (birth.getFullYear() < 1900) {
      setError("Please enter a year after 1900.");
      return;
    }

    const birthYear = birth.getFullYear();
    const currentYear = today.getFullYear();

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

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-900">
        <h2 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">
          Enter Your Birthday
        </h2>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="birthdate"
              className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Date of Birth
            </label>
            <input
              id="birthdate"
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              max={new Date().toISOString().split("T")[0]}
              min="1900-01-01"
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            />
          </div>

          {error && (
            <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
          )}

          <button
            onClick={calculate}
            className="w-full cursor-pointer rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 px-4 py-2.5 font-medium text-white transition-opacity hover:opacity-90 focus:ring-2 focus:ring-indigo-500/50 focus:outline-none"
          >
            Calculate My Korean Age
          </button>
        </div>

        {result && (
          <div className="animate-fade-in mt-6 space-y-4">
            <div className="rounded-xl bg-indigo-50 p-4 dark:bg-indigo-950/40">
              <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                Korean Age (한국 나이)
              </p>
              <p className="text-3xl font-bold text-indigo-700 dark:text-indigo-300">
                {result.koreanAge}
              </p>
            </div>

            <div className="rounded-xl bg-blue-50 p-4 dark:bg-blue-950/40">
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                International Age (만 나이)
              </p>
              <p className="text-3xl font-bold text-blue-700 dark:text-blue-300">
                {result.internationalAge}
              </p>
            </div>

            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              Born in {result.birthYear} — your Korean age is{" "}
              <strong>{result.koreanAge - result.internationalAge} year(s) more</strong>{" "}
              than your international age.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
