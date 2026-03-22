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
  group: string;
  birthYear: number;
}

const celebrities: Celebrity[] = [
  // BTS
  { name: "Jin", group: "BTS", birthYear: 1992 },
  { name: "Suga", group: "BTS", birthYear: 1993 },
  { name: "RM", group: "BTS", birthYear: 1994 },
  { name: "J-Hope", group: "BTS", birthYear: 1994 },
  { name: "Jimin", group: "BTS", birthYear: 1995 },
  { name: "V", group: "BTS", birthYear: 1995 },
  { name: "Jungkook", group: "BTS", birthYear: 1997 },
  // BLACKPINK
  { name: "Jisoo", group: "BLACKPINK", birthYear: 1995 },
  { name: "Jennie", group: "BLACKPINK", birthYear: 1996 },
  { name: "Ros\u00e9", group: "BLACKPINK", birthYear: 1997 },
  { name: "Lisa", group: "BLACKPINK", birthYear: 1997 },
  // Solo / Actors
  { name: "IU", group: "Solo", birthYear: 1993 },
  { name: "Park Bo-gum", group: "Actor", birthYear: 1993 },
  { name: "Song Hye-kyo", group: "Actress", birthYear: 1981 },
  { name: "Hyun Bin", group: "Actor", birthYear: 1982 },
  { name: "Son Ye-jin", group: "Actress", birthYear: 1982 },
  { name: "Lee Min-ho", group: "Actor", birthYear: 1987 },
  { name: "Kim Soo-hyun", group: "Actor", birthYear: 1988 },
  { name: "Park Seo-joon", group: "Actor", birthYear: 1988 },
  { name: "Bae Suzy", group: "Solo/Actress", birthYear: 1994 },
];

export interface CelebMatch {
  celeb: Celebrity;
  exact: boolean;
}

export function getCelebMatch(
  koreanAge: number,
  currentYear: number
): CelebMatch {
  const targetBirthYear = currentYear - koreanAge + 1;

  const exactMatches = celebrities.filter(
    (c) => c.birthYear === targetBirthYear
  );
  if (exactMatches.length > 0) {
    const pick = exactMatches[Math.floor(Math.random() * exactMatches.length)];
    return { celeb: pick, exact: true };
  }

  let closest = celebrities[0];
  let minDiff = Math.abs(celebrities[0].birthYear - targetBirthYear);
  for (const c of celebrities) {
    const diff = Math.abs(c.birthYear - targetBirthYear);
    if (diff < minDiff) {
      minDiff = diff;
      closest = c;
    }
  }
  return { celeb: closest, exact: false };
}

export function getHakbeon(birthYear: number): string {
  const entryYear = birthYear + 19;
  const suffix = String(entryYear).slice(-2);
  return suffix;
}

export function getShareText(
  zodiac: ZodiacInfo,
  celebMatch: CelebMatch,
  koreanAge: number
): string {
  const zodiacPart = `I'm a ${zodiac.animal} ${zodiac.emoji}`;
  const celebPart = celebMatch.exact
    ? `and the same Korean age as ${celebMatch.celeb.group} ${celebMatch.celeb.name}!`
    : `and close in Korean age to ${celebMatch.celeb.group} ${celebMatch.celeb.name}!`;
  return `${zodiacPart} ${celebPart} My Korean age is ${koreanAge}. Calculate yours!\nhttps://korean-age-calculator-sooty.vercel.app`;
}
