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
  { name: "RM", role: "K-POP", group: "BTS", birthYear: 1994, nationality: "\ud83c\uddf0\ud83c\uddf7", gradient: ["#7C3AED", "#EC4899"], imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/RM_at_the_White_House%2C_May_2022.jpg/220px-RM_at_the_White_House%2C_May_2022.jpg" },
  { name: "Jungkook", role: "K-POP", group: "BTS", birthYear: 1997, nationality: "\ud83c\uddf0\ud83c\uddf7", gradient: ["#6366F1", "#8B5CF6"], imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Jungkook_at_the_White_House%2C_May_2022.jpg/220px-Jungkook_at_the_White_House%2C_May_2022.jpg" },
  { name: "Lisa", role: "K-POP", group: "BLACKPINK", birthYear: 1997, nationality: "\ud83c\uddf9\ud83c\udded", gradient: ["#EC4899", "#F43F5E"], imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/230903_%EB%A6%AC%EC%82%AC_%ED%8C%A8%EC%85%98%EC%9C%84%ED%81%AC_2.jpg/220px-230903_%EB%A6%AC%EC%82%AC_%ED%8C%A8%EC%85%98%EC%9C%84%ED%81%AC_2.jpg" },
  { name: "Jennie", role: "K-POP", group: "BLACKPINK", birthYear: 1996, nationality: "\ud83c\uddf0\ud83c\uddf7", gradient: ["#F43F5E", "#FB923C"], imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Jennie_Kim_at_the_Met_Gala_2023.jpg/220px-Jennie_Kim_at_the_Met_Gala_2023.jpg" },
  { name: "IU", role: "K-POP", group: "Solo", birthYear: 1993, nationality: "\ud83c\uddf0\ud83c\uddf7", gradient: ["#A78BFA", "#C084FC"], imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/IU_at_%22Broker%22_premiere%2C_May_2022.jpg/220px-IU_at_%22Broker%22_premiere%2C_May_2022.jpg" },
  { name: "Bang Chan", role: "K-POP", group: "Stray Kids", birthYear: 1997, nationality: "\ud83c\udde6\ud83c\uddfa", gradient: ["#2DD4BF", "#6366F1"], imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Bang_Chan_at_Incheon_Airport_on_March_10%2C_2023_%282%29.jpg/220px-Bang_Chan_at_Incheon_Airport_on_March_10%2C_2023_%282%29.jpg" },
  // Global
  { name: "Taylor Swift", role: "Singer", group: "Solo", birthYear: 1989, nationality: "\ud83c\uddfa\ud83c\uddf8", gradient: ["#F472B6", "#FCA5A5"], imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Taylor_Swift_at_the_2023_MTV_Video_Music_Awards_%283%29.png/220px-Taylor_Swift_at_the_2023_MTV_Video_Music_Awards_%283%29.png" },
  { name: "Harry Styles", role: "Singer", group: "Solo", birthYear: 1994, nationality: "\ud83c\uddec\ud83c\udde7", gradient: ["#34D399", "#6EE7B7"], imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Harry_Styles_Vogue_2020.jpg/220px-Harry_Styles_Vogue_2020.jpg" },
  { name: "Billie Eilish", role: "Singer", group: "Solo", birthYear: 2001, nationality: "\ud83c\uddfa\ud83c\uddf8", gradient: ["#4ADE80", "#22D3EE"], imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Billie_Eilish_2019_by_Glenn_Francis_%28cropped%29_2.jpg/220px-Billie_Eilish_2019_by_Glenn_Francis_%28cropped%29_2.jpg" },
  { name: "Olivia Rodrigo", role: "Singer", group: "Solo", birthYear: 2003, nationality: "\ud83c\uddfa\ud83c\uddf8", gradient: ["#C084FC", "#F472B6"], imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Olivia_Rodrigo_at_the_White_House_2.jpg/220px-Olivia_Rodrigo_at_the_White_House_2.jpg" },
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
