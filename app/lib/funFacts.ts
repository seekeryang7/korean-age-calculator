export interface ZodiacInfo {
  animal: string;
  emoji: string;
}

const zodiacCycle: ZodiacInfo[] = [
  { animal: "Monkey", emoji: "\ud83d\udc12" },
  { animal: "Rooster", emoji: "\ud83d\udc13" },
  { animal: "Dog", emoji: "\ud83d\udc15" },
  { animal: "Pig", emoji: "\ud83d\udc37" },
  { animal: "Rat", emoji: "\ud83d\udc00" },
  { animal: "Ox", emoji: "\ud83d\udc02" },
  { animal: "Tiger", emoji: "\ud83d\udc05" },
  { animal: "Rabbit", emoji: "\ud83d\udc07" },
  { animal: "Dragon", emoji: "\ud83d\udc09" },
  { animal: "Snake", emoji: "\ud83d\udc0d" },
  { animal: "Horse", emoji: "\ud83d\udc0e" },
  { animal: "Sheep", emoji: "\ud83d\udc11" },
];

export function getZodiac(birthYear: number): ZodiacInfo {
  return zodiacCycle[birthYear % 12];
}

export interface Celebrity {
  name: string;
  role: string;
  group: string;
  birthYear: number;
  nationality: string;
  gradient: [string, string];
  imageUrl: string;
}

const celebrities: Celebrity[] = [
  // K-POP
  { name: "RM", role: "K-POP", group: "BTS", birthYear: 1994, nationality: "\ud83c\uddf0\ud83c\uddf7", gradient: ["#7C3AED", "#EC4899"], imageUrl: "" },
  { name: "Jungkook", role: "K-POP", group: "BTS", birthYear: 1997, nationality: "\ud83c\uddf0\ud83c\uddf7", gradient: ["#6366F1", "#8B5CF6"], imageUrl: "" },
  { name: "Lisa", role: "K-POP", group: "BLACKPINK", birthYear: 1997, nationality: "\ud83c\uddf9\ud83c\udded", gradient: ["#EC4899", "#F43F5E"], imageUrl: "/celebrities/lisa.jpg" },
  { name: "Jennie", role: "K-POP", group: "BLACKPINK", birthYear: 1996, nationality: "\ud83c\uddf0\ud83c\uddf7", gradient: ["#F43F5E", "#FB923C"], imageUrl: "/celebrities/jennie.jpg" },
  { name: "IU", role: "K-POP", group: "Solo", birthYear: 1993, nationality: "\ud83c\uddf0\ud83c\uddf7", gradient: ["#A78BFA", "#C084FC"], imageUrl: "" },
  { name: "Bang Chan", role: "K-POP", group: "Stray Kids", birthYear: 1997, nationality: "\ud83c\udde6\ud83c\uddfa", gradient: ["#2DD4BF", "#6366F1"], imageUrl: "/celebrities/bang-chan.png" },
  // Global
  { name: "Taylor Swift", role: "Singer", group: "Solo", birthYear: 1989, nationality: "\ud83c\uddfa\ud83c\uddf8", gradient: ["#F472B6", "#FCA5A5"], imageUrl: "/celebrities/taylor-swift.png" },
  { name: "Harry Styles", role: "Singer", group: "Solo", birthYear: 1994, nationality: "\ud83c\uddec\ud83c\udde7", gradient: ["#34D399", "#6EE7B7"], imageUrl: "/celebrities/harry-styles.jpg" },
  { name: "Billie Eilish", role: "Singer", group: "Solo", birthYear: 2001, nationality: "\ud83c\uddfa\ud83c\uddf8", gradient: ["#4ADE80", "#22D3EE"], imageUrl: "/celebrities/billie-eilish.jpg" },
  { name: "Olivia Rodrigo", role: "Singer", group: "Solo", birthYear: 2003, nationality: "\ud83c\uddfa\ud83c\uddf8", gradient: ["#C084FC", "#F472B6"], imageUrl: "/celebrities/olivia-rodrigo.jpg" },
];

export interface CelebMatchResult {
  exact: Celebrity[];
  closest: Celebrity[];
}

export function getCelebMatches(
  koreanAge: number,
  currentYear: number
): CelebMatchResult {
  const targetBirthYear = currentYear - koreanAge + 1;

  const exactMatches = celebrities.filter(
    (c) => c.birthYear === targetBirthYear
  );
  if (exactMatches.length > 0) {
    return { exact: exactMatches, closest: [] };
  }

  const sorted = [...celebrities].sort(
    (a, b) =>
      Math.abs(a.birthYear - targetBirthYear) -
      Math.abs(b.birthYear - targetBirthYear)
  );
  return { exact: [], closest: sorted.slice(0, 2) };
}

export function getAllCelebrities(): Celebrity[] {
  return celebrities;
}

export function getKoreanAge(birthYear: number, currentYear: number): number {
  return currentYear - birthYear + 1;
}

export function getHakbeon(birthYear: number): string {
  const entryYear = birthYear + 19;
  const suffix = String(entryYear).slice(-2);
  return suffix;
}

export function getShareText(
  koreanAge: number,
  celebName: string | null,
  celebNationality: string | null
): string {
  const agePart = `My Korean age is ${koreanAge}!`;
  const celebPart = celebName
    ? `\nI share my Korean age with ${celebName} ${celebNationality || ""}`
    : "";
  return `${agePart}${celebPart}\nFind YOUR Korean age twin!\n\ud83d\udc49 https://korean-age-calculator-sooty.vercel.app`;
}
