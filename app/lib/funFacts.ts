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
  imageUrl: string;
}

const celebrities: Celebrity[] = [
  // BTS
  { name: "Jin", group: "BTS", birthYear: 1992, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Kim_Seok-jin_at_the_White_House%2C_May_2022.jpg/220px-Kim_Seok-jin_at_the_White_House%2C_May_2022.jpg" },
  { name: "Suga", group: "BTS", birthYear: 1993, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Suga_at_the_White_House%2C_May_2022.jpg/220px-Suga_at_the_White_House%2C_May_2022.jpg" },
  { name: "RM", group: "BTS", birthYear: 1994, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/RM_at_the_White_House%2C_May_2022.jpg/220px-RM_at_the_White_House%2C_May_2022.jpg" },
  { name: "J-Hope", group: "BTS", birthYear: 1994, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/J-Hope_at_the_White_House%2C_May_2022.jpg/220px-J-Hope_at_the_White_House%2C_May_2022.jpg" },
  { name: "Jimin", group: "BTS", birthYear: 1995, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Jimin_at_the_White_House%2C_May_2022.jpg/220px-Jimin_at_the_White_House%2C_May_2022.jpg" },
  { name: "V", group: "BTS", birthYear: 1995, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/V_at_the_White_House%2C_May_2022.jpg/220px-V_at_the_White_House%2C_May_2022.jpg" },
  { name: "Jungkook", group: "BTS", birthYear: 1997, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Jungkook_at_the_White_House%2C_May_2022.jpg/220px-Jungkook_at_the_White_House%2C_May_2022.jpg" },
  // BLACKPINK
  { name: "Jisoo", group: "BLACKPINK", birthYear: 1995, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Kim_Ji-soo_at_Dior_fashion_show%2C_February_2022.jpg/220px-Kim_Ji-soo_at_Dior_fashion_show%2C_February_2022.jpg" },
  { name: "Jennie", group: "BLACKPINK", birthYear: 1996, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Jennie_Kim_at_the_Met_Gala_2023.jpg/220px-Jennie_Kim_at_the_Met_Gala_2023.jpg" },
  { name: "Ros\u00e9", group: "BLACKPINK", birthYear: 1997, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Ros%C3%A9_at_the_Met_Gala_2023.png/220px-Ros%C3%A9_at_the_Met_Gala_2023.png" },
  { name: "Lisa", group: "BLACKPINK", birthYear: 1997, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/230903_%EB%A6%AC%EC%82%AC_%ED%8C%A8%EC%85%98%EC%9C%84%ED%81%AC_2.jpg/220px-230903_%EB%A6%AC%EC%82%AC_%ED%8C%A8%EC%85%98%EC%9C%84%ED%81%AC_2.jpg" },
  // Solo / Actors
  { name: "IU", group: "Solo", birthYear: 1993, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/IU_at_%22Broker%22_premiere%2C_May_2022.jpg/220px-IU_at_%22Broker%22_premiere%2C_May_2022.jpg" },
  { name: "Park Bo-gum", group: "Actor", birthYear: 1993, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Park_Bo-gum_at_MAMA_2018.jpg/220px-Park_Bo-gum_at_MAMA_2018.jpg" },
  { name: "Song Hye-kyo", group: "Actress", birthYear: 1981, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Song_Hye-kyo_at_the_Blue_Dragon_Film_Awards_2023.jpg/220px-Song_Hye-kyo_at_the_Blue_Dragon_Film_Awards_2023.jpg" },
  { name: "Hyun Bin", group: "Actor", birthYear: 1982, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Hyun_Bin_at_APAN_Star_Awards%2C_2020.jpg/220px-Hyun_Bin_at_APAN_Star_Awards%2C_2020.jpg" },
  { name: "Son Ye-jin", group: "Actress", birthYear: 1982, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Son_Ye-jin_at_Baeksang_Arts_Awards_2020.jpg/220px-Son_Ye-jin_at_Baeksang_Arts_Awards_2020.jpg" },
  { name: "Lee Min-ho", group: "Actor", birthYear: 1987, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Lee_Min-ho_at_Incheon_Airport%2C_March_2023.jpg/220px-Lee_Min-ho_at_Incheon_Airport%2C_March_2023.jpg" },
  { name: "Kim Soo-hyun", group: "Actor", birthYear: 1988, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Kim_Soo-hyun_at_BIFF%2C_October_2023.jpg/220px-Kim_Soo-hyun_at_BIFF%2C_October_2023.jpg" },
  { name: "Park Seo-joon", group: "Actor", birthYear: 1988, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Park_Seo-joon_at_Midnight_Runners_VIP_premiere_in_August_2017.jpg/220px-Park_Seo-joon_at_Midnight_Runners_VIP_premiere_in_August_2017.jpg" },
  { name: "Bae Suzy", group: "Solo/Actress", birthYear: 1994, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Bae_Su-ji_at_Baeksang_Arts_Awards_2023.jpg/220px-Bae_Su-ji_at_Baeksang_Arts_Awards_2023.jpg" },
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
