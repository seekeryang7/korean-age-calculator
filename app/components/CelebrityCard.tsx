"use client";

import { useState } from "react";
import Image from "next/image";
import type { Celebrity } from "../lib/funFacts";
import { event as gaEvent } from "../lib/gtag";

interface CelebrityCardProps {
  celebrity: Celebrity;
  koreanAge: number;
  badge?: string;
  size?: "sm" | "lg";
  labels: { koreanAgeLabel: string; bornLabel: string };
}

export default function CelebrityCard({
  celebrity,
  koreanAge,
  badge,
  size = "sm",
  labels,
}: CelebrityCardProps) {
  const isLg = size === "lg";
  const [imgError, setImgError] = useState(false);
  const initials = celebrity.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  const avatarSize = isLg ? "h-20 w-20" : "h-12 w-12";

  return (
    <div
      onClick={() => gaEvent("celebrity_click", { celebrity_name: celebrity.name, celebrity_group: celebrity.group })}
      className={`glass-card relative rounded-2xl text-center transition-all duration-300 hover:scale-[1.03] cursor-pointer ${
        isLg
          ? "min-w-[220px] p-6 animate-slide-in"
          : "p-4"
      }`}
    >
      {badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] px-3 py-1 text-xs font-bold text-white shadow-lg">
          {badge}
        </span>
      )}

      {/* Avatar */}
      <div className="flex justify-center">
        {!imgError && celebrity.imageUrl ? (
          <div className={`relative ${avatarSize} rounded-full overflow-hidden border-2 border-[#8B5CF6]/40`}>
            <Image
              src={celebrity.imageUrl}
              alt={celebrity.name}
              fill
              className="object-cover"
              sizes={isLg ? "80px" : "48px"}
              onError={() => setImgError(true)}
            />
          </div>
        ) : (
          <div
            className={`flex items-center justify-center rounded-full font-bold text-white ${
              isLg ? "h-20 w-20 text-2xl" : "h-12 w-12 text-base"
            }`}
            style={{
              background: `linear-gradient(135deg, ${celebrity.gradient[0]}, ${celebrity.gradient[1]})`,
            }}
          >
            {initials}
          </div>
        )}
      </div>

      {/* Info */}
      <p
        className={`mt-3 font-bold text-white ${
          isLg ? "text-lg" : "text-sm"
        }`}
      >
        {celebrity.name} {celebrity.nationality}
      </p>
      <p
        className={`text-white/50 ${isLg ? "text-sm mt-1" : "text-xs"}`}
      >
        {celebrity.role}
        {celebrity.group !== "Solo" ? ` \u00b7 ${celebrity.group}` : ""}
      </p>
      <p
        className={`mt-2 ${isLg ? "text-base" : "text-xs"}`}
      >
        <span className="text-white/50">{labels.koreanAgeLabel} </span>
        <span className="font-bold text-[#EC4899]">{koreanAge}</span>
      </p>
      <p className="text-xs text-white/40">
        {labels.bornLabel} {celebrity.birthYear}
      </p>
    </div>
  );
}
