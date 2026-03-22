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
  { name: "Taylor Swift", role: "Singer", group: "Solo", birthYear: 1989, nationality: "\ud83c\uddfa\ud83c\uddf8", gradient: ["#F472B6", "#FCA5A5"], imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Taylor_Swift_at_the_2023_MTV_Video_Music_Awards_%283%29.png/250px-Taylor_Swift_at_the_2023_MTV_Video_Music_Awards_%283%29.png" },
  { name: "Nicki Minaj", role: "Rapper", group: "Solo", birthYear: 1990, nationality: "\ud83c\uddf9\ud83c\uddf9", gradient: ["#F43F5E", "#EC4899"], imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Nicki_Minaj_2025_%283x4_cropped%29.jpg/250px-Nicki_Minaj_2025_%283x4_cropped%29.jpg" },
  { name: "Ed Sheeran", role: "Singer", group: "Solo", birthYear: 1991, nationality: "\ud83c\uddec\ud83c\udde7", gradient: ["#FB923C", "#F97316"], imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Ed_Sheeran-6886_%28cropped%29.jpg/250px-Ed_Sheeran-6886_%28cropped%29.jpg" },
  { name: "Dua Lipa", role: "Singer", group: "Solo", birthYear: 1992, nationality: "\ud83c\udde6\ud83c\uddf1", gradient: ["#A78BFA", "#F472B6"], imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Dua_Lipa-69798_%28cropped%29.jpg/250px-Dua_Lipa-69798_%28cropped%29.jpg" },
  { name: "IU", role: "K-POP", group: "Solo", birthYear: 1993, nationality: "\ud83c\uddf0\ud83c\uddf7", gradient: ["#A78BFA", "#C084FC"], imageUrl: "" },
  { name: "RM", role: "K-POP", group: "BTS", birthYear: 1994, nationality: "\ud83c\uddf0\ud83c\uddf7", gradient: ["#7C3AED", "#EC4899"], imageUrl: "" },
  { name: "Justin Bieber", role: "Singer", group: "Solo", birthYear: 1994, nationality: "\ud83c\udde8\ud83c\udde6", gradient: ["#6366F1", "#A78BFA"], imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Justin_Bieber_in_2015.jpg/250px-Justin_Bieber_in_2015.jpg" },
  { name: "Jimin", role: "K-POP", group: "BTS", birthYear: 1995, nationality: "\ud83c\uddf0\ud83c\uddf7", gradient: ["#EC4899", "#F472B6"], imageUrl: "" },
  { name: "Jennie", role: "K-POP", group: "BLACKPINK", birthYear: 1996, nationality: "\ud83c\uddf0\ud83c\uddf7", gradient: ["#F43F5E", "#FB923C"], imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Jennie_2026_GDA_1.jpg/250px-Jennie_2026_GDA_1.jpg" },
  { name: "Jungkook", role: "K-POP", group: "BTS", birthYear: 1997, nationality: "\ud83c\uddf0\ud83c\uddf7", gradient: ["#6366F1", "#8B5CF6"], imageUrl: "" },
  { name: "Lisa", role: "K-POP", group: "BLACKPINK", birthYear: 1997, nationality: "\ud83c\uddf9\ud83c\udded", gradient: ["#EC4899", "#F43F5E"], imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/20240314_Lisa_Manoban_07.jpg/250px-20240314_Lisa_Manoban_07.jpg" },
  { name: "Cardi B", role: "Rapper", group: "Solo", birthYear: 1998, nationality: "\ud83c\uddfa\ud83c\uddf8", gradient: ["#EF4444", "#F97316"], imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Cardi_B_March_2024.png/250px-Cardi_B_March_2024.png" },
  { name: "Nayeon", role: "K-POP", group: "TWICE", birthYear: 1999, nationality: "\ud83c\uddf0\ud83c\uddf7", gradient: ["#FB923C", "#FBBF24"], imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Nayeon_251120_1.jpg/250px-Nayeon_251120_1.jpg" },
  { name: "Karina", role: "K-POP", group: "aespa", birthYear: 2000, nationality: "\ud83c\uddf0\ud83c\uddf7", gradient: ["#8B5CF6", "#6366F1"], imageUrl: "" },
  { name: "Billie Eilish", role: "Singer", group: "Solo", birthYear: 2001, nationality: "\ud83c\uddfa\ud83c\uddf8", gradient: ["#4ADE80", "#22D3EE"], imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/BillieEilishO2140725-39_-_54665577407_%28cropped%29.jpg/250px-BillieEilishO2140725-39_-_54665577407_%28cropped%29.jpg" },
  { name: "Minji", role: "K-POP", group: "NewJeans", birthYear: 2001, nationality: "\ud83c\uddf0\ud83c\uddf7", gradient: ["#2DD4BF", "#6366F1"], imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Minji_Olens_2024_FW_1.jpg/250px-Minji_Olens_2024_FW_1.jpg" },
  { name: "Kazuha", role: "K-POP", group: "LE SSERAFIM", birthYear: 2002, nationality: "\ud83c\uddef\ud83c\uddf5", gradient: ["#34D399", "#6EE7B7"], imageUrl: "" },
  { name: "Olivia Rodrigo", role: "Singer", group: "Solo", birthYear: 2003, nationality: "\ud83c\uddfa\ud83c\uddf8", gradient: ["#C084FC", "#F472B6"], imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Glasto2025-546_%28cropped%29_%282%29.jpg/250px-Glasto2025-546_%28cropped%29_%282%29.jpg" },
  { name: "Winter", role: "K-POP", group: "aespa", birthYear: 2003, nationality: "\ud83c\uddf0\ud83c\uddf7", gradient: ["#60A5FA", "#818CF8"], imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Winter_at_Kilian_Paris_event_on_27012026_%284%29.png/250px-Winter_at_Kilian_Paris_event_on_27012026_%284%29.png" },
  { name: "Hanni", role: "K-POP", group: "NewJeans", birthYear: 2004, nationality: "\ud83c\udde6\ud83c\uddfa", gradient: ["#FBBF24", "#F472B6"], imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Hanni_OLENS_2.jpg/250px-Hanni_OLENS_2.jpg" },
  { name: "Wonhee", role: "K-POP", group: "ILLIT", birthYear: 2005, nationality: "\ud83c\uddf0\ud83c\uddf7", gradient: ["#F0ABFC", "#C084FC"], imageUrl: "" },
];

const legends: Celebrity[] = [
  { name: "Elvis Presley", role: "Singer", group: "Solo", birthYear: 1935, nationality: "\ud83c\uddfa\ud83c\uddf8", gradient: ["#FBBF24", "#F59E0B"], imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Elvis_Presley_promoting_Jailhouse_Rock.jpg/250px-Elvis_Presley_promoting_Jailhouse_Rock.jpg" },
  { name: "Michael Jackson", role: "Singer", group: "Solo", birthYear: 1958, nationality: "\ud83c\uddfa\ud83c\uddf8", gradient: ["#EF4444", "#DC2626"], imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Michael_Jackson_1983_%283x4_cropped%29_%28contrast%29.jpg/250px-Michael_Jackson_1983_%283x4_cropped%29_%28contrast%29.jpg" },
  { name: "Madonna", role: "Singer", group: "Solo", birthYear: 1958, nationality: "\ud83c\uddfa\ud83c\uddf8", gradient: ["#EC4899", "#F43F5E"], imageUrl: "" },
];

export interface CelebMatchResult {
  exact: Celebrity[];
  fallbackMessage?: string;
  fallbackCelebs?: Celebrity[];
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
    return { exact: exactMatches };
  }

  if (targetBirthYear < 1989) {
    const sorted = [...legends].sort(
      (a, b) =>
        Math.abs(a.birthYear - targetBirthYear) -
        Math.abs(b.birthYear - targetBirthYear)
    );
    return {
      exact: [],
      fallbackMessage: "You share your Korean age with legends! \ud83c\udf1f",
      fallbackCelebs: sorted.slice(0, 2),
    };
  }

  if (targetBirthYear > 2005) {
    return {
      exact: [],
      fallbackMessage: "You're the next generation star! \u2b50",
      fallbackCelebs: [celebrities[celebrities.length - 1]],
    };
  }

  return { exact: [] };
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
