"use client";

import { useState, useMemo } from "react";
import { getZodiac, getCelebMatch, getHakbeon, getShareText } from "../lib/funFacts";
import { useLanguage } from "./LanguageContext";

interface FunResultsProps {
  birthYear: number;
  koreanAge: number;
}

export default function FunResults({ birthYear, koreanAge }: FunResultsProps) {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);

  const zodiac = useMemo(() => getZodiac(birthYear), [birthYear]);
  const currentYear = new Date().getFullYear();
  const celebMatch = useMemo(
    () => getCelebMatch(koreanAge, currentYear),
    [koreanAge, currentYear]
  );
  const hakbeon = useMemo(() => getHakbeon(birthYear), [birthYear]);
  const shareText = useMemo(
    () => getShareText(zodiac, celebMatch, koreanAge),
    [zodiac, celebMatch, koreanAge]
  );

  async function handleCopy() {
    await navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const f = t.funResults;

  return (
    <div className="animate-fade-in mt-6 space-y-4">
      {/* Zodiac Card */}
      <div className="glass-card rounded-xl p-5 text-center">
        <p className="text-4xl">{zodiac.emoji}</p>
        <p className="mt-2 text-lg font-bold text-[#C73E3A]">
          {f.zodiacTitle(zodiac.animal)}
        </p>
        <p className="mt-1 text-sm text-[#1B3A5C]/60 dark:text-[#F5EDD6]/50">
          {f.zodiacDesc}
        </p>
      </div>

      {/* Celebrity Card */}
      <div className="glass-card rounded-xl p-5 text-center">
        <div className="flex justify-center">
          {!imgError ? (
            <img
              src={celebMatch.celeb.imageUrl}
              alt={celebMatch.celeb.name}
              className="h-20 w-20 rounded-full object-cover border-2 border-[#C9A84C]/40"
              onError={() => setImgError(true)}
            />
          ) : (
            <p className="text-4xl">{"\ud83c\udfA4"}</p>
          )}
        </div>
        <p className="mt-3 text-lg font-bold text-[#1B3A5C] dark:text-[#F5EDD6]">
          {celebMatch.exact
            ? f.celebExact(celebMatch.celeb.name, celebMatch.celeb.group)
            : f.celebClosest(celebMatch.celeb.name, celebMatch.celeb.group)}
        </p>
        <p className="mt-1 text-sm text-[#1B3A5C]/60 dark:text-[#F5EDD6]/50">
          {celebMatch.celeb.group} &middot; {f.celebBorn(celebMatch.celeb.birthYear)}
        </p>
      </div>

      {/* Hakbeon Card */}
      <div className="glass-card rounded-xl p-5 text-center">
        <p className="text-4xl">{"\ud83d\udcda"}</p>
        <p className="mt-2 text-lg font-bold text-[#C9A84C]">
          {f.hakbeonTitle(hakbeon)}
        </p>
        <p className="mt-1 text-sm text-[#1B3A5C]/60 dark:text-[#F5EDD6]/50">
          {f.hakbeonDesc}
        </p>
      </div>

      {/* Share Button */}
      <button
        onClick={handleCopy}
        className="w-full cursor-pointer rounded-lg border border-[#C9A84C]/30 bg-[#C9A84C]/10 px-4 py-3 font-medium text-[#C9A84C] transition-all duration-200 hover:bg-[#C9A84C]/20 active:scale-[0.98]"
      >
        {copied ? f.copied : f.shareButton}
      </button>
    </div>
  );
}
