export type Locale =
  | "en"
  | "ko"
  | "ja"
  | "zh"
  | "th"
  | "vi"
  | "id"
  | "fr"
  | "es"
  | "de";

export interface Translation {
  meta: {
    langLabel: string;
    flag: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  calculator: {
    heading: string;
    label: string;
    yearLabel: string;
    monthLabel: string;
    dayLabel: string;
    placeholder: string;
    button: string;
    koreanAge: string;
    internationalAge: string;
    errorEmpty: string;
    errorFuture: string;
    errorYear: string;
    resultDiff: (diff: number) => string;
    resultBornIn: (year: number) => string;
  };
  gallery: {
    title: string;
    subtitle: string;
    koreanAgeLabel: string;
    bornLabel: string;
  };
  results: {
    twinsTitle: string;
    sameAgeBadge: string;
    shareTwitter: string;
    copyLink: string;
    recalculate: string;
    copied: string;
  };
  explanation: {
    howTitle: string;
    howP1: string;
    howFormula: string;
    vsTitle: string;
    vsP1: string;
    reformTitle: string;
    reformP1: string;
  };
  faq: {
    title: string;
    items: { q: string; a: string }[];
  };
  footer: string;
}

export const locales: Locale[] = [
  "en",
  "ko",
  "ja",
  "zh",
  "th",
  "vi",
  "id",
  "fr",
  "es",
  "de",
];

export const translations: Record<Locale, Translation> = {
  en: {
    meta: { langLabel: "English", flag: "\ud83c\uddfa\ud83c\uddf8" },
    hero: {
      title: "Who shares your Korean Age?",
      subtitle:
        "Enter your birthday to find your Korean age twin!",
    },
    calculator: {
      heading: "Enter Your Birthday",
      label: "Date of Birth",
      yearLabel: "Year",
      monthLabel: "Month",
      dayLabel: "Day",
      placeholder: "",
      button: "Calculate My Korean Age",
      koreanAge: "Korean Age",
      internationalAge: "International Age",
      errorEmpty: "Please select your date of birth.",
      errorFuture: "Date of birth cannot be in the future.",
      errorYear: "Please enter a year after 1900.",
      resultDiff: (diff) =>
        `Your Korean age is ${diff} year(s) more than your international age.`,
      resultBornIn: (year) => `Born in ${year}`,
    },
    gallery: {
      title: "Korean Age Twins Gallery",
      subtitle: "Calculate to see who you match with!",
      koreanAgeLabel: "Korean Age",
      bornLabel: "Born",
    },
    results: {
      twinsTitle: "\ud83c\udf89 Your Korean Age Twins!",
      sameAgeBadge: "Same Korean Age as you!",
      shareTwitter: "Share on X",
      copyLink: "Copy Link",
      recalculate: "Calculate Again",
      copied: "Copied!",
    },
    explanation: {
      howTitle: "How Does Korean Age Work?",
      howP1: "In the traditional Korean age system, a baby is considered 1 year old at birth. Everyone then gains one year on January 1st, regardless of their actual birthday. This means a Korean person\u2019s age can be one or even two years higher than their international age.",
      howFormula: "Korean Age = Current Year \u2212 Birth Year + 1",
      vsTitle: "Korean Age vs. International Age",
      vsP1: 'International age (\ub9cc \ub098\uc774, man-nai) counts the actual number of full years you\u2019ve been alive since birth. You start at 0 and gain a year on each birthday. Korean age, on the other hand, starts at 1 and increments every New Year\u2019s Day. That\u2019s why Koreans often ask \u201cWhat year were you born?\u201d instead of \u201cHow old are you?\u201d',
      reformTitle: "2023 Age Reform in South Korea",
      reformP1: "As of June 28, 2023, South Korea officially adopted the international age system for all legal and administrative purposes. This means that in official documents, contracts, and government services, only the international age is used. However, Korean age is still widely used in everyday conversation and social settings.",
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          q: "Why am I older in Korea?",
          a: "Because the Korean age system counts the time in the womb as your first year, and everyone ages together on New Year\u2019s Day rather than on individual birthdays.",
        },
        {
          q: "Is Korean age still used today?",
          a: "Officially, South Korea switched to international age in June 2023. But in daily life, many Koreans still refer to their Korean age in casual conversation.",
        },
        {
          q: "Can my Korean age be 2 years more than my international age?",
          a: "Yes! If you haven\u2019t had your birthday yet this year, your Korean age can be 2 years higher. For example, if you were born in December, in January your international age hasn\u2019t incremented yet, but your Korean age has.",
        },
        {
          q: 'What is "\ub9cc \ub098\uc774" (man-nai)?',
          a: '\ub9cc \ub098\uc774 literally means "full age" and refers to the international age counting system \u2014 the way most countries in the world calculate age.',
        },
      ],
    },
    footer: "Korean Age Calculator. Built for anyone curious about Korean culture.",
  },

  ko: {
    meta: { langLabel: "\ud55c\uad6d\uc5b4", flag: "\ud83c\uddf0\ud83c\uddf7" },
    hero: {
      title: "\ub2f9\uc2e0\uacfc \uac19\uc740 \ud55c\uad6d \ub098\uc774\uc778 \uc2a4\ud0c0\ub294?",
      subtitle:
        "\uc0dd\ub144\uc6d4\uc77c\uc744 \uc785\ub825\ud558\uace0 \ub098\uc640 \uac19\uc740 \ud55c\uad6d \ub098\uc774\uc778 \uc2a4\ud0c0\ub97c \ucc3e\uc544\ubcf4\uc138\uc694!",
    },
    calculator: {
      heading: "\uc0dd\ub144\uc6d4\uc77c \uc785\ub825",
      label: "\uc0dd\ub144\uc6d4\uc77c",
      yearLabel: "\ub144",
      monthLabel: "\uc6d4",
      dayLabel: "\uc77c",
      placeholder: "",
      button: "\ud55c\uad6d \ub098\uc774 \uacc4\uc0b0\ud558\uae30",
      koreanAge: "\ud55c\uad6d \ub098\uc774",
      internationalAge: "\ub9cc \ub098\uc774",
      errorEmpty: "\uc0dd\ub144\uc6d4\uc77c\uc744 \uc120\ud0dd\ud574 \uc8fc\uc138\uc694.",
      errorFuture: "\ubbf8\ub798 \ub0a0\uc9dc\ub294 \uc785\ub825\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
      errorYear: "1900\ub144 \uc774\ud6c4\uc758 \uc5f0\ub3c4\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694.",
      resultDiff: (diff) => `\ud55c\uad6d \ub098\uc774\uac00 \ub9cc \ub098\uc774\ubcf4\ub2e4 ${diff}\uc0b4 \ub354 \ub9ce\uc2b5\ub2c8\ub2e4.`,
      resultBornIn: (year) => `${year}\ub144\uc0dd`,
    },
    gallery: {
      title: "\ud55c\uad6d \ub098\uc774 \uc30d\ub465\uc774 \uac24\ub7ec\ub9ac",
      subtitle: "\uacc4\uc0b0\ud574\uc11c \ub204\uad6c\uc640 \ub9e4\uce6d\ub418\ub294\uc9c0 \ud655\uc778\ud574 \ubcf4\uc138\uc694!",
      koreanAgeLabel: "\ud55c\uad6d \ub098\uc774",
      bornLabel: "\ucd9c\uc0dd",
    },
    results: {
      twinsTitle: "\ud83c\udf89 \ub2f9\uc2e0\uc758 \ud55c\uad6d \ub098\uc774 \uc30d\ub465\uc774!",
      sameAgeBadge: "\ub2f9\uc2e0\uacfc \uac19\uc740 \ud55c\uad6d \ub098\uc774!",
      shareTwitter: "X\uc5d0 \uacf5\uc720",
      copyLink: "\ub9c1\ud06c \ubcf5\uc0ac",
      recalculate: "\ub2e4\uc2dc \uacc4\uc0b0\ud558\uae30",
      copied: "\ubcf5\uc0ac\ub428!",
    },
    explanation: {
      howTitle: "\ud55c\uad6d \ub098\uc774\ub294 \uc5b4\ub5bb\uac8c \uacc4\uc0b0\ud558\ub098\uc694?",
      howP1: "\uc804\ud1b5\uc801\uc778 \ud55c\uad6d \ub098\uc774 \uccb4\uacc4\uc5d0\uc11c\ub294 \ud0dc\uc5b4\ub0a0 \ub54c 1\uc0b4\ub85c \uc2dc\uc791\ud569\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \uc2e4\uc81c \uc0dd\uc77c\uacfc \uad00\uacc4\uc5c6\uc774 \ub9e4\ub144 1\uc6d4 1\uc77c\uc5d0 \ud55c \uc0b4\uc529 \ub098\uc774\uac00 \ucd94\uac00\ub429\ub2c8\ub2e4. \uadf8\ub798\uc11c \ud55c\uad6d \ub098\uc774\ub294 \ub9cc \ub098\uc774\ubcf4\ub2e4 1~2\uc0b4 \ub354 \ub9ce\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
      howFormula: "\ud55c\uad6d \ub098\uc774 = \ud604\uc7ac \uc5f0\ub3c4 \u2212 \ucd9c\uc0dd \uc5f0\ub3c4 + 1",
      vsTitle: "\ud55c\uad6d \ub098\uc774 vs. \ub9cc \ub098\uc774",
      vsP1: "\ub9cc \ub098\uc774\ub294 \ud0dc\uc5b4\ub09c \ud6c4 \uc2e4\uc81c\ub85c \uc0b4\uc544\uc628 \ud587\uc218\ub97c \uc138\ub294 \ubc29\uc2dd\uc785\ub2c8\ub2e4. 0\uc0b4\uc5d0\uc11c \uc2dc\uc791\ud574 \uc0dd\uc77c\ub9c8\ub2e4 \ud55c \uc0b4\uc529 \ub354\ud569\ub2c8\ub2e4. \ubc18\uba74 \ud55c\uad6d \ub098\uc774\ub294 1\uc0b4\uc5d0\uc11c \uc2dc\uc791\ud574 \ub9e4\ub144 \uc0c8\ud574\uc5d0 \ub098\uc774\uac00 \uc62c\ub77c\uac11\ub2c8\ub2e4. \uadf8\ub798\uc11c \ud55c\uad6d \uc0ac\ub78c\ub4e4\uc740 \"\uba87 \uc0b4\uc774\uc5d0\uc694?\"\ubcf4\ub2e4 \"\uba87 \ub144\uc0dd\uc774\uc5d0\uc694?\"\ub77c\uace0 \uc790\uc8fc \ubb3b\uc2b5\ub2c8\ub2e4.",
      reformTitle: "2023\ub144 \ud55c\uad6d \ub098\uc774 \uac1c\uc815",
      reformP1: "2023\ub144 6\uc6d4 28\uc77c\ubd80\ud130 \ub300\ud55c\ubbfc\uad6d\uc740 \ubaa8\ub4e0 \ubc95\uc801\u00b7\ud589\uc815\uc801 \ubaa9\uc801\uc5d0\uc11c \ub9cc \ub098\uc774 \uccb4\uacc4\ub97c \uacf5\uc2dd \ucc44\ud0dd\ud588\uc2b5\ub2c8\ub2e4. \uacf5\ubb38\uc11c, \uacc4\uc57d\uc11c, \uc815\ubd80 \uc11c\ube44\uc2a4\uc5d0\uc11c\ub294 \ub9cc \ub098\uc774\ub9cc \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc77c\uc0c1 \ub300\ud654\uc5d0\uc11c\ub294 \uc5ec\uc804\ud788 \ud55c\uad6d \ub098\uc774\uac00 \ub113\ub9ac \uc0ac\uc6a9\ub429\ub2c8\ub2e4.",
    },
    faq: {
      title: "\uc790\uc8fc \ubb3b\ub294 \uc9c8\ubb38",
      items: [
        {
          q: "\uc65c \ud55c\uad6d\uc5d0\uc11c\ub294 \ub098\uc774\uac00 \ub354 \ub9ce\ub098\uc694?",
          a: "\ud55c\uad6d \ub098\uc774 \uccb4\uacc4\ub294 \uc5b4\uba38\ub2c8 \ubc43\uc18d\uc5d0 \uc788\ub294 \uae30\uac04\uc744 \uccab \ud574\ub85c \uc138\uace0, \uac1c\uc778\uc758 \uc0dd\uc77c\uc774 \uc544\ub2c8\ub77c \uc0c8\ud574\uc5d0 \ubaa8\ub450 \ud568\uaed8 \ub098\uc774\ub97c \uba39\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4.",
        },
        {
          q: "\ud55c\uad6d \ub098\uc774\ub294 \uc544\uc9c1\ub3c4 \uc0ac\uc6a9\ub418\ub098\uc694?",
          a: "\uacf5\uc2dd\uc801\uc73c\ub85c\ub294 2023\ub144 6\uc6d4\uc5d0 \ub9cc \ub098\uc774\ub85c \uc804\ud658\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc77c\uc0c1\uc0dd\ud65c\uc5d0\uc11c\ub294 \uc5ec\uc804\ud788 \ub9ce\uc740 \ud55c\uad6d\uc778\uc774 \ud55c\uad6d \ub098\uc774\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.",
        },
        {
          q: "\ud55c\uad6d \ub098\uc774\uac00 \ub9cc \ub098\uc774\ubcf4\ub2e4 2\uc0b4 \ub354 \ub9ce\uc744 \uc218 \uc788\ub098\uc694?",
          a: "\ub124! \uc62c\ud574 \uc0dd\uc77c\uc774 \uc544\uc9c1 \uc9c0\ub098\uc9c0 \uc54a\uc558\ub2e4\uba74, \ud55c\uad6d \ub098\uc774\uac00 2\uc0b4 \ub354 \ub9ce\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
        },
        {
          q: "\"\ub9cc \ub098\uc774\"\ub780 \ubb34\uc5c7\uc778\uac00\uc694?",
          a: "\ub9cc \ub098\uc774\ub294 \ub9d0 \uadf8\ub300\ub85c '\uac00\ub4dd \ucc2c \ub098\uc774'\ub97c \uc758\ubbf8\ud558\uba70, \uc138\uacc4 \ub300\ubd80\ubd84\uc758 \ub098\ub77c\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \uad6d\uc81c \ub098\uc774 \uacc4\uc0b0 \ubc29\uc2dd\uc785\ub2c8\ub2e4.",
        },
      ],
    },
    footer: "\ud55c\uad6d \ub098\uc774 \uacc4\uc0b0\uae30. \ud55c\uad6d \ubb38\ud654\uc5d0 \uad00\uc2ec \uc788\ub294 \ubaa8\ub4e0 \ubd84\uc744 \uc704\ud574 \ub9cc\ub4e4\uc5c8\uc2b5\ub2c8\ub2e4.",
  },

  ja: {
    meta: { langLabel: "\u65e5\u672c\u8a9e", flag: "\ud83c\uddef\ud83c\uddf5" },
    hero: {
      title: "\u3042\u306a\u305f\u3068\u540c\u3058\u97d3\u56fd\u5e74\u9f62\u306e\u30b9\u30bf\u30fc\u306f\uff1f",
      subtitle: "\u8a95\u751f\u65e5\u3092\u5165\u529b\u3057\u3066\u3001\u97d3\u56fd\u5e74\u9f62\u30c4\u30a4\u30f3\u3092\u898b\u3064\u3051\u3088\u3046\uff01",
    },
    calculator: {
      heading: "\u8a95\u751f\u65e5\u3092\u5165\u529b",
      label: "\u751f\u5e74\u6708\u65e5",
      yearLabel: "\u5e74",
      monthLabel: "\u6708",
      dayLabel: "\u65e5",
      placeholder: "",
      button: "\u97d3\u56fd\u5e74\u9f62\u3092\u8a08\u7b97\u3059\u308b",
      koreanAge: "\u97d3\u56fd\u5e74\u9f62",
      internationalAge: "\u6e80\u5e74\u9f62",
      errorEmpty: "\u751f\u5e74\u6708\u65e5\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
      errorFuture: "\u672a\u6765\u306e\u65e5\u4ed8\u306f\u5165\u529b\u3067\u304d\u307e\u305b\u3093\u3002",
      errorYear: "1900\u5e74\u4ee5\u964d\u306e\u5e74\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
      resultDiff: (diff) => `\u97d3\u56fd\u5e74\u9f62\u306f\u6e80\u5e74\u9f62\u3088\u308a${diff}\u6b73\u591a\u3044\u3067\u3059\u3002`,
      resultBornIn: (year) => `${year}\u5e74\u751f\u307e\u308c`,
    },
    gallery: {
      title: "\u97d3\u56fd\u5e74\u9f62\u30c4\u30a4\u30f3\u30ae\u30e3\u30e9\u30ea\u30fc",
      subtitle: "\u8a08\u7b97\u3057\u3066\u8ab0\u3068\u30de\u30c3\u30c1\u3059\u308b\u304b\u78ba\u8a8d\uff01",
      koreanAgeLabel: "\u97d3\u56fd\u5e74\u9f62",
      bornLabel: "\u751f\u5e74",
    },
    results: {
      twinsTitle: "\ud83c\udf89 \u3042\u306a\u305f\u306e\u97d3\u56fd\u5e74\u9f62\u30c4\u30a4\u30f3\uff01",
      sameAgeBadge: "\u3042\u306a\u305f\u3068\u540c\u3058\u97d3\u56fd\u5e74\u9f62\uff01",
      shareTwitter: "X\u3067\u30b7\u30a7\u30a2",
      copyLink: "\u30ea\u30f3\u30af\u3092\u30b3\u30d4\u30fc",
      recalculate: "\u3082\u3046\u4e00\u5ea6\u8a08\u7b97",
      copied: "\u30b3\u30d4\u30fc\u3057\u307e\u3057\u305f\uff01",
    },
    explanation: {
      howTitle: "\u97d3\u56fd\u5e74\u9f62\u306e\u4ed5\u7d44\u307f",
      howP1: "\u97d3\u56fd\u306e\u4f1d\u7d71\u7684\u306a\u5e74\u9f62\u8a08\u7b97\u3067\u306f\u3001\u8d64\u3061\u3083\u3093\u306f\u751f\u307e\u308c\u305f\u6642\u306b1\u6b73\u3068\u3055\u308c\u307e\u3059\u3002\u305d\u3057\u3066\u5b9f\u969b\u306e\u8a95\u751f\u65e5\u306b\u95a2\u4fc2\u306a\u304f\u3001\u6bce\u5e741\u6708 1\u65e5\u306b1\u6b73\u52a0\u7b97\u3055\u308c\u307e\u3059\u3002",
      howFormula: "\u97d3\u56fd\u5e74\u9f62 = \u73fe\u5728\u306e\u5e74 \u2212 \u8a95\u751f\u5e74 + 1",
      vsTitle: "\u97d3\u56fd\u5e74\u9f62 vs. \u6e80\u5e74\u9f62",
      vsP1: "\u6e80\u5e74\u9f62\uff08\ub9cc \ub098\uc774\uff09\u306f\u3001\u751f\u307e\u308c\u3066\u304b\u3089\u5b9f\u969b\u306b\u751f\u304d\u305f\u5e74\u6570\u3092\u6570\u3048\u307e\u3059\u30020\u6b73\u304b\u3089\u59cb\u307e\u308a\u3001\u8a95\u751f\u65e5\u3054\u3068\u306b1\u6b73\u305a\u3064\u52a0\u7b97\u3055\u308c\u307e\u3059\u3002\u4e00\u65b9\u3001\u97d3\u56fd\u5e74\u9f62\u306f1\u6b73\u304b\u3089\u59cb\u307e\u308a\u3001\u6bce\u5e74\u5143\u65e5\u306b\u5e74\u9f62\u304c\u4e0a\u304c\u308a\u307e\u3059\u3002",
      reformTitle: "2023\u5e74 \u97d3\u56fd\u306e\u5e74\u9f62\u6539\u6b63",
      reformP1: "2023\u5e746\u670828\u65e5\u3088\u308a\u3001\u97d3\u56fd\u306f\u3059\u3079\u3066\u306e\u6cd5\u7684\u30fb\u884c\u653f\u7684\u76ee\u7684\u3067\u6e80\u5e74\u9f62\u5236\u5ea6\u3092\u516c\u5f0f\u63a1\u7528\u3057\u307e\u3057\u305f\u3002\u305f\u3060\u3057\u3001\u65e5\u5e38\u4f1a\u8a71\u3067\u306f\u97d3\u56fd\u5e74\u9f62\u304c\u4eca\u3067\u3082\u5e83\u304f\u4f7f\u308f\u308c\u3066\u3044\u307e\u3059\u3002",
    },
    faq: {
      title: "\u3088\u304f\u3042\u308b\u8cea\u554f",
      items: [
        {
          q: "\u306a\u305c\u97d3\u56fd\u3067\u306f\u5e74\u9f62\u304c\u591a\u3044\u306e\u3067\u3059\u304b\uff1f",
          a: "\u97d3\u56fd\u306e\u5e74\u9f62\u5236\u5ea6\u3067\u306f\u3001\u304a\u8179\u306e\u4e2d\u306b\u3044\u308b\u671f\u9593\u3092\u6700\u521d\u306e1\u5e74\u3068\u3057\u3066\u6570\u3048\u3001\u5143\u65e5\u306b\u307f\u3093\u306a\u4e00\u7dd2\u306b\u5e74\u3092\u53d6\u308b\u304b\u3089\u3067\u3059\u3002",
        },
        {
          q: "\u97d3\u56fd\u5e74\u9f62\u306f\u4eca\u3067\u3082\u4f7f\u308f\u308c\u3066\u3044\u307e\u3059\u304b\uff1f",
          a: "\u516c\u5f0f\u306b\u306f2023\u5e746\u6708\u306b\u6e80\u5e74\u9f62\u306b\u5207\u308a\u66ff\u308f\u308a\u307e\u3057\u305f\u3002\u3057\u304b\u3057\u65e5\u5e38\u751f\u6d3b\u3067\u306f\u3001\u591a\u304f\u306e\u97d3\u56fd\u4eba\u304c\u4eca\u3067\u3082\u97d3\u56fd\u5e74\u9f62\u3092\u4f7f\u3063\u3066\u3044\u307e\u3059\u3002",
        },
        {
          q: "\u97d3\u56fd\u5e74\u9f62\u304c\u6e80\u5e74\u9f62\u3088\u308a2\u6b73\u591a\u3044\u3053\u3068\u306f\u3042\u308a\u307e\u3059\u304b\uff1f",
          a: "\u306f\u3044\uff01\u4eca\u5e74\u306e\u8a95\u751f\u65e5\u304c\u307e\u3060\u6765\u3066\u3044\u306a\u3044\u5834\u5408\u30012\u6b73\u591a\u304f\u306a\u308a\u307e\u3059\u3002",
        },
        {
          q: "\u300c\ub9cc \ub098\uc774\uff08\u30de\u30f3\u30ca\u30a4\uff09\u300d\u3068\u306f\u4f55\u3067\u3059\u304b\uff1f",
          a: "\ub9cc \ub098\uc774\u306f\u300c\u6e80\u5e74\u9f62\u300d\u3092\u610f\u5473\u3057\u3001\u4e16\u754c\u306e\u307b\u3068\u3093\u3069\u306e\u56fd\u3067\u4f7f\u308f\u308c\u3066\u3044\u308b\u56fd\u969b\u7684\u306a\u5e74\u9f62\u8a08\u7b97\u65b9\u5f0f\u3067\u3059\u3002",
        },
      ],
    },
    footer: "\u97d3\u56fd\u5e74\u9f62\u8a08\u7b97\u6a5f\u3002\u97d3\u56fd\u6587\u5316\u306b\u8208\u5473\u306e\u3042\u308b\u3059\u3079\u3066\u306e\u65b9\u3078\u3002",
  },

  zh: {
    meta: { langLabel: "\u4e2d\u6587", flag: "\ud83c\udde8\ud83c\uddf3" },
    hero: {
      title: "\u8c01\u548c\u4f60\u7684\u97e9\u56fd\u5e74\u9f84\u4e00\u6837\uff1f",
      subtitle: "\u8f93\u5165\u751f\u65e5\uff0c\u627e\u5230\u4f60\u7684\u97e9\u56fd\u5e74\u9f84\u53cc\u80de\u80ce\uff01",
    },
    calculator: {
      heading: "\u8f93\u5165\u4f60\u7684\u751f\u65e5",
      label: "\u51fa\u751f\u65e5\u671f",
      yearLabel: "\u5e74",
      monthLabel: "\u6708",
      dayLabel: "\u65e5",
      placeholder: "",
      button: "\u8ba1\u7b97\u97e9\u56fd\u5e74\u9f84",
      koreanAge: "\u97e9\u56fd\u5e74\u9f84",
      internationalAge: "\u56fd\u9645\u5e74\u9f84",
      errorEmpty: "\u8bf7\u9009\u62e9\u51fa\u751f\u65e5\u671f\u3002",
      errorFuture: "\u51fa\u751f\u65e5\u671f\u4e0d\u80fd\u662f\u672a\u6765\u7684\u65e5\u671f\u3002",
      errorYear: "\u8bf7\u8f93\u51651900\u5e74\u4ee5\u540e\u7684\u5e74\u4efd\u3002",
      resultDiff: (diff) => `\u4f60\u7684\u97e9\u56fd\u5e74\u9f84\u6bd4\u56fd\u9645\u5e74\u9f84\u5927${diff}\u5c81\u3002`,
      resultBornIn: (year) => `\u51fa\u751f\u4e8e${year}\u5e74`,
    },
    gallery: {
      title: "\u97e9\u56fd\u5e74\u9f84\u53cc\u80de\u80ce\u753b\u5eca",
      subtitle: "\u8ba1\u7b97\u770b\u770b\u4f60\u548c\u8c01\u5339\u914d\uff01",
      koreanAgeLabel: "\u97e9\u56fd\u5e74\u9f84",
      bornLabel: "\u51fa\u751f",
    },
    results: {
      twinsTitle: "\ud83c\udf89 \u4f60\u7684\u97e9\u56fd\u5e74\u9f84\u53cc\u80de\u80ce\uff01",
      sameAgeBadge: "\u548c\u4f60\u540c\u6837\u7684\u97e9\u56fd\u5e74\u9f84\uff01",
      shareTwitter: "\u5206\u4eab\u5230X",
      copyLink: "\u590d\u5236\u94fe\u63a5",
      recalculate: "\u91cd\u65b0\u8ba1\u7b97",
      copied: "\u5df2\u590d\u5236\uff01",
    },
    explanation: {
      howTitle: "\u97e9\u56fd\u5e74\u9f84\u662f\u600e\u4e48\u7b97\u7684\uff1f",
      howP1: "\u5728\u97e9\u56fd\u4f20\u7edf\u7684\u5e74\u9f84\u8ba1\u7b97\u4f53\u7cfb\u4e2d\uff0c\u5a74\u513f\u51fa\u751f\u65f6\u5c31\u88ab\u8ba4\u4e3a\u662f1\u5c81\u3002\u7136\u540e\u65e0\u8bba\u5b9e\u9645\u751f\u65e5\u662f\u54ea\u5929\uff0c\u6bcf\u5e741\u6708 1\u65e5\u6240\u6709\u4eba\u90fd\u4f1a\u589e\u52a01\u5c81\u3002",
      howFormula: "\u97e9\u56fd\u5e74\u9f84 = \u5f53\u524d\u5e74\u4efd \u2212 \u51fa\u751f\u5e74\u4efd + 1",
      vsTitle: "\u97e9\u56fd\u5e74\u9f84 vs. \u56fd\u9645\u5e74\u9f84",
      vsP1: "\u56fd\u9645\u5e74\u9f84\uff08\ub9cc \ub098\uc774\uff09\u8ba1\u7b97\u7684\u662f\u4f60\u51fa\u751f\u4ee5\u6765\u5b9e\u9645\u6d3b\u4e86\u591a\u5c11\u4e2a\u5b8c\u6574\u7684\u5e74\u4efd\u3002\u4ece0\u5c81\u5f00\u59cb\uff0c\u6bcf\u4e2a\u751f\u65e5\u589e\u52a01\u5c81\u3002\u800c\u97e9\u56fd\u5e74\u9f84\u4ece1\u5c81\u5f00\u59cb\uff0c\u6bcf\u5e74\u5143\u65e6\u589e\u957f\u3002",
      reformTitle: "2023\u5e74\u97e9\u56fd\u5e74\u9f84\u6539\u9769",
      reformP1: "\u81ea2023\u5e746\u670828\u65e5\u8d77\uff0c\u97e9\u56fd\u5728\u6240\u6709\u6cd5\u5f8b\u548c\u884c\u653f\u4e8b\u52a1\u4e2d\u6b63\u5f0f\u91c7\u7528\u56fd\u9645\u5e74\u9f84\u5236\u5ea6\u3002\u4e0d\u8fc7\uff0c\u97e9\u56fd\u5e74\u9f84\u5728\u65e5\u5e38\u5bf9\u8bdd\u4e2d\u4ecd\u7136\u88ab\u5e7f\u6cdb\u4f7f\u7528\u3002",
    },
    faq: {
      title: "\u5e38\u89c1\u95ee\u9898",
      items: [
        {
          q: "\u4e3a\u4ec0\u4e48\u6211\u5728\u97e9\u56fd\u5e74\u9f84\u66f4\u5927\uff1f",
          a: "\u56e0\u4e3a\u97e9\u56fd\u5e74\u9f84\u4f53\u7cfb\u5c06\u5728\u6bcd\u4eb2\u5b50\u5bab\u4e2d\u7684\u65f6\u95f4\u7b97\u4f5c\u7b2c\u4e00\u5e74\uff0c\u800c\u4e14\u6240\u6709\u4eba\u5728\u5143\u65e6\u4e00\u8d77\u589e\u957f\u5e74\u9f84\u3002",
        },
        {
          q: "\u97e9\u56fd\u5e74\u9f84\u73b0\u5728\u8fd8\u5728\u4f7f\u7528\u5417\uff1f",
          a: "\u5b98\u65b9\u57282023\u5e746\u6708\u5df2\u5207\u6362\u4e3a\u56fd\u9645\u5e74\u9f84\u3002\u4f46\u5728\u65e5\u5e38\u751f\u6d3b\u4e2d\uff0c\u8bb8\u591a\u97e9\u56fd\u4eba\u4ecd\u7136\u4f7f\u7528\u97e9\u56fd\u5e74\u9f84\u3002",
        },
        {
          q: "\u97e9\u56fd\u5e74\u9f84\u4f1a\u6bd4\u56fd\u9645\u5e74\u9f84\u59272\u5c81\u5417\uff1f",
          a: "\u4f1a\u7684\uff01\u5982\u679c\u4eca\u5e74\u7684\u751f\u65e5\u8fd8\u6ca1\u5230\uff0c\u97e9\u56fd\u5e74\u9f84\u5c31\u4f1a\u59272\u5c81\u3002",
        },
        {
          q: "\u4ec0\u4e48\u662f\u201c\ub9cc \ub098\uc774\u201d\uff1f",
          a: "\ub9cc \ub098\uc774\u7684\u5b57\u9762\u610f\u601d\u662f\u201c\u8db3\u5c81\u201d\uff0c\u6307\u7684\u662f\u56fd\u9645\u5e74\u9f84\u8ba1\u7b97\u65b9\u5f0f\u3002",
        },
      ],
    },
    footer: "\u97e9\u56fd\u5e74\u9f84\u8ba1\u7b97\u5668\u3002\u4e3a\u6240\u6709\u5bf9\u97e9\u56fd\u6587\u5316\u611f\u5174\u8da3\u7684\u4eba\u800c\u5efa\u3002",
  },

  th: {
    meta: { langLabel: "\u0e44\u0e17\u0e22", flag: "\ud83c\uddf9\ud83c\udded" },
    hero: {
      title: "\u0e43\u0e04\u0e23\u0e21\u0e35\u0e2d\u0e32\u0e22\u0e38\u0e40\u0e01\u0e32\u0e2b\u0e25\u0e35\u0e40\u0e17\u0e48\u0e32\u0e04\u0e38\u0e13?",
      subtitle: "\u0e01\u0e23\u0e2d\u0e01\u0e27\u0e31\u0e19\u0e40\u0e01\u0e34\u0e14\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e04\u0e39\u0e48\u0e41\u0e1d\u0e14\u0e2d\u0e32\u0e22\u0e38\u0e40\u0e01\u0e32\u0e2b\u0e25\u0e35\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13!",
    },
    calculator: {
      heading: "\u0e01\u0e23\u0e2d\u0e01\u0e27\u0e31\u0e19\u0e40\u0e01\u0e34\u0e14\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13",
      label: "\u0e27\u0e31\u0e19\u0e40\u0e01\u0e34\u0e14",
      yearLabel: "\u0e1b\u0e35",
      monthLabel: "\u0e40\u0e14\u0e37\u0e2d\u0e19",
      dayLabel: "\u0e27\u0e31\u0e19",
      placeholder: "",
      button: "\u0e04\u0e33\u0e19\u0e27\u0e13\u0e2d\u0e32\u0e22\u0e38\u0e40\u0e01\u0e32\u0e2b\u0e25\u0e35",
      koreanAge: "\u0e2d\u0e32\u0e22\u0e38\u0e40\u0e01\u0e32\u0e2b\u0e25\u0e35",
      internationalAge: "\u0e2d\u0e32\u0e22\u0e38\u0e2a\u0e32\u0e01\u0e25",
      errorEmpty: "\u0e01\u0e23\u0e38\u0e13\u0e32\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e27\u0e31\u0e19\u0e40\u0e01\u0e34\u0e14\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13",
      errorFuture: "\u0e27\u0e31\u0e19\u0e40\u0e01\u0e34\u0e14\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1b\u0e47\u0e19\u0e27\u0e31\u0e19\u0e43\u0e19\u0e2d\u0e19\u0e32\u0e04\u0e15\u0e44\u0e14\u0e49",
      errorYear: "\u0e01\u0e23\u0e38\u0e13\u0e32\u0e01\u0e23\u0e2d\u0e01\u0e1b\u0e35\u0e2b\u0e25\u0e31\u0e07 \u0e04.\u0e28. 1900",
      resultDiff: (diff) => `\u0e2d\u0e32\u0e22\u0e38\u0e40\u0e01\u0e32\u0e2b\u0e25\u0e35\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e21\u0e32\u0e01\u0e01\u0e27\u0e48\u0e32\u0e2d\u0e32\u0e22\u0e38\u0e2a\u0e32\u0e01\u0e25 ${diff} \u0e1b\u0e35`,
      resultBornIn: (year) => `\u0e40\u0e01\u0e34\u0e14\u0e1b\u0e35 ${year}`,
    },
    gallery: {
      title: "\u0e41\u0e01\u0e25\u0e40\u0e25\u0e2d\u0e23\u0e35\u0e04\u0e39\u0e48\u0e41\u0e1d\u0e14\u0e2d\u0e32\u0e22\u0e38\u0e40\u0e01\u0e32\u0e2b\u0e25\u0e35",
      subtitle: "\u0e04\u0e33\u0e19\u0e27\u0e13\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e14\u0e39\u0e27\u0e48\u0e32\u0e04\u0e38\u0e13\u0e41\u0e21\u0e17\u0e0a\u0e4c\u0e01\u0e31\u0e1a\u0e43\u0e04\u0e23!",
      koreanAgeLabel: "\u0e2d\u0e32\u0e22\u0e38\u0e40\u0e01\u0e32\u0e2b\u0e25\u0e35",
      bornLabel: "\u0e40\u0e01\u0e34\u0e14",
    },
    results: {
      twinsTitle: "\ud83c\udf89 \u0e04\u0e39\u0e48\u0e41\u0e1d\u0e14\u0e2d\u0e32\u0e22\u0e38\u0e40\u0e01\u0e32\u0e2b\u0e25\u0e35\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13!",
      sameAgeBadge: "\u0e2d\u0e32\u0e22\u0e38\u0e40\u0e01\u0e32\u0e2b\u0e25\u0e35\u0e40\u0e17\u0e48\u0e32\u0e01\u0e31\u0e19!",
      shareTwitter: "\u0e41\u0e0a\u0e23\u0e4c\u0e1a\u0e19 X",
      copyLink: "\u0e04\u0e31\u0e14\u0e25\u0e2d\u0e01\u0e25\u0e34\u0e07\u0e01\u0e4c",
      recalculate: "\u0e04\u0e33\u0e19\u0e27\u0e13\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07",
      copied: "\u0e04\u0e31\u0e14\u0e25\u0e2d\u0e01\u0e41\u0e25\u0e49\u0e27!",
    },
    explanation: {
      howTitle: "\u0e2d\u0e32\u0e22\u0e38\u0e40\u0e01\u0e32\u0e2b\u0e25\u0e35\u0e04\u0e33\u0e19\u0e27\u0e13\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e44\u0e23?",
      howP1: "\u0e43\u0e19\u0e23\u0e30\u0e1a\u0e1a\u0e2d\u0e32\u0e22\u0e38\u0e41\u0e1a\u0e1a\u0e14\u0e31\u0e49\u0e07\u0e40\u0e14\u0e34\u0e21\u0e02\u0e2d\u0e07\u0e40\u0e01\u0e32\u0e2b\u0e25\u0e35 \u0e17\u0e32\u0e23\u0e01\u0e08\u0e30\u0e16\u0e39\u0e01\u0e19\u0e31\u0e1a\u0e27\u0e48\u0e32\u0e21\u0e35\u0e2d\u0e32\u0e22\u0e38 1 \u0e1b\u0e35\u0e15\u0e31\u0e49\u0e07\u0e41\u0e15\u0e48\u0e40\u0e01\u0e34\u0e14 \u0e08\u0e32\u0e01\u0e19\u0e31\u0e49\u0e19\u0e17\u0e38\u0e01\u0e04\u0e19\u0e08\u0e30\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e2d\u0e32\u0e22\u0e38 1 \u0e1b\u0e35\u0e43\u0e19\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48 1 \u0e21\u0e01\u0e23\u0e32\u0e04\u0e21",
      howFormula: "\u0e2d\u0e32\u0e22\u0e38\u0e40\u0e01\u0e32\u0e2b\u0e25\u0e35 = \u0e1b\u0e35\u0e1b\u0e31\u0e08\u0e08\u0e38\u0e1a\u0e31\u0e19 \u2212 \u0e1b\u0e35\u0e40\u0e01\u0e34\u0e14 + 1",
      vsTitle: "\u0e2d\u0e32\u0e22\u0e38\u0e40\u0e01\u0e32\u0e2b\u0e25\u0e35 vs. \u0e2d\u0e32\u0e22\u0e38\u0e2a\u0e32\u0e01\u0e25",
      vsP1: "\u0e2d\u0e32\u0e22\u0e38\u0e2a\u0e32\u0e01\u0e25 (\ub9cc \ub098\uc774) \u0e19\u0e31\u0e1a\u0e08\u0e33\u0e19\u0e27\u0e19\u0e1b\u0e35\u0e40\u0e15\u0e47\u0e21\u0e17\u0e35\u0e48\u0e04\u0e38\u0e13\u0e21\u0e35\u0e0a\u0e35\u0e27\u0e34\u0e15\u0e2d\u0e22\u0e39\u0e48\u0e15\u0e31\u0e49\u0e07\u0e41\u0e15\u0e48\u0e40\u0e01\u0e34\u0e14 \u0e40\u0e23\u0e34\u0e48\u0e21\u0e17\u0e35\u0e48 0 \u0e41\u0e25\u0e30\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e02\u0e36\u0e49\u0e19\u0e1b\u0e35\u0e25\u0e30\u0e04\u0e23\u0e31\u0e49\u0e07\u0e43\u0e19\u0e27\u0e31\u0e19\u0e40\u0e01\u0e34\u0e14",
      reformTitle: "\u0e01\u0e32\u0e23\u0e1b\u0e0f\u0e34\u0e23\u0e39\u0e1b\u0e2d\u0e32\u0e22\u0e38\u0e40\u0e01\u0e32\u0e2b\u0e25\u0e35 \u0e1b\u0e35 2023",
      reformP1: "\u0e15\u0e31\u0e49\u0e07\u0e41\u0e15\u0e48\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48 28 \u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19 2023 \u0e40\u0e01\u0e32\u0e2b\u0e25\u0e35\u0e43\u0e15\u0e49\u0e44\u0e14\u0e49\u0e19\u0e33\u0e23\u0e30\u0e1a\u0e1a\u0e2d\u0e32\u0e22\u0e38\u0e2a\u0e32\u0e01\u0e25\u0e21\u0e32\u0e43\u0e0a\u0e49\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e40\u0e1b\u0e47\u0e19\u0e17\u0e32\u0e07\u0e01\u0e32\u0e23 \u0e41\u0e15\u0e48\u0e2d\u0e32\u0e22\u0e38\u0e40\u0e01\u0e32\u0e2b\u0e25\u0e35\u0e22\u0e31\u0e07\u0e04\u0e07\u0e43\u0e0a\u0e49\u0e01\u0e31\u0e19\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e41\u0e1e\u0e23\u0e48\u0e2b\u0e25\u0e32\u0e22\u0e43\u0e19\u0e0a\u0e35\u0e27\u0e34\u0e15\u0e1b\u0e23\u0e30\u0e08\u0e33\u0e27\u0e31\u0e19",
    },
    faq: {
      title: "\u0e04\u0e33\u0e16\u0e32\u0e21\u0e17\u0e35\u0e48\u0e1e\u0e1a\u0e1a\u0e48\u0e2d\u0e22",
      items: [
        { q: "\u0e17\u0e33\u0e44\u0e21\u0e09\u0e31\u0e19\u0e16\u0e36\u0e07\u0e2d\u0e32\u0e22\u0e38\u0e21\u0e32\u0e01\u0e01\u0e27\u0e48\u0e32\u0e43\u0e19\u0e40\u0e01\u0e32\u0e2b\u0e25\u0e35?", a: "\u0e40\u0e1e\u0e23\u0e32\u0e30\u0e23\u0e30\u0e1a\u0e1a\u0e2d\u0e32\u0e22\u0e38\u0e40\u0e01\u0e32\u0e2b\u0e25\u0e35\u0e19\u0e31\u0e1a\u0e0a\u0e48\u0e27\u0e07\u0e40\u0e27\u0e25\u0e32\u0e43\u0e19\u0e04\u0e23\u0e23\u0e20\u0e4c\u0e40\u0e1b\u0e47\u0e19\u0e1b\u0e35\u0e41\u0e23\u0e01 \u0e41\u0e25\u0e30\u0e17\u0e38\u0e01\u0e04\u0e19\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e2d\u0e32\u0e22\u0e38\u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e01\u0e31\u0e19\u0e43\u0e19\u0e27\u0e31\u0e19\u0e1b\u0e35\u0e43\u0e2b\u0e21\u0e48" },
        { q: "\u0e2d\u0e32\u0e22\u0e38\u0e40\u0e01\u0e32\u0e2b\u0e25\u0e35\u0e22\u0e31\u0e07\u0e04\u0e07\u0e43\u0e0a\u0e49\u0e2d\u0e22\u0e39\u0e48\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48?", a: "\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e40\u0e1b\u0e47\u0e19\u0e17\u0e32\u0e07\u0e01\u0e32\u0e23 \u0e40\u0e01\u0e32\u0e2b\u0e25\u0e35\u0e43\u0e15\u0e49\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e21\u0e32\u0e43\u0e0a\u0e49\u0e2d\u0e32\u0e22\u0e38\u0e2a\u0e32\u0e01\u0e25\u0e43\u0e19\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19 2023 \u0e41\u0e15\u0e48\u0e43\u0e19\u0e0a\u0e35\u0e27\u0e34\u0e15\u0e1b\u0e23\u0e30\u0e08\u0e33\u0e27\u0e31\u0e19\u0e22\u0e31\u0e07\u0e43\u0e0a\u0e49\u0e2d\u0e22\u0e39\u0e48" },
        { q: "\u0e2d\u0e32\u0e22\u0e38\u0e40\u0e01\u0e32\u0e2b\u0e25\u0e35\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e21\u0e32\u0e01\u0e01\u0e27\u0e48\u0e32\u0e2d\u0e32\u0e22\u0e38\u0e2a\u0e32\u0e01\u0e25 2 \u0e1b\u0e35\u0e44\u0e14\u0e49\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48?", a: "\u0e44\u0e14\u0e49! \u0e16\u0e49\u0e32\u0e1b\u0e35\u0e19\u0e35\u0e49\u0e27\u0e31\u0e19\u0e40\u0e01\u0e34\u0e14\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e21\u0e32\u0e16\u0e36\u0e07 \u0e2d\u0e32\u0e22\u0e38\u0e40\u0e01\u0e32\u0e2b\u0e25\u0e35\u0e08\u0e30\u0e21\u0e32\u0e01\u0e01\u0e27\u0e48\u0e32 2 \u0e1b\u0e35" },
        { q: "\"\ub9cc \ub098\uc774\" (\u0e21\u0e31\u0e19-\u0e19\u0e32\u0e2d\u0e34) \u0e04\u0e37\u0e2d\u0e2d\u0e30\u0e44\u0e23?", a: "\ub9cc \ub098\uc774 \u0e41\u0e1b\u0e25\u0e15\u0e23\u0e07\u0e15\u0e31\u0e27\u0e27\u0e48\u0e32 \"\u0e2d\u0e32\u0e22\u0e38\u0e40\u0e15\u0e47\u0e21\" \u0e2b\u0e21\u0e32\u0e22\u0e16\u0e36\u0e07\u0e23\u0e30\u0e1a\u0e1a\u0e19\u0e31\u0e1a\u0e2d\u0e32\u0e22\u0e38\u0e2a\u0e32\u0e01\u0e25" },
      ],
    },
    footer: "\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e04\u0e33\u0e19\u0e27\u0e13\u0e2d\u0e32\u0e22\u0e38\u0e40\u0e01\u0e32\u0e2b\u0e25\u0e35 \u0e2a\u0e23\u0e49\u0e32\u0e07\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e17\u0e38\u0e01\u0e04\u0e19\u0e17\u0e35\u0e48\u0e2a\u0e19\u0e43\u0e08\u0e27\u0e31\u0e12\u0e19\u0e18\u0e23\u0e23\u0e21\u0e40\u0e01\u0e32\u0e2b\u0e25\u0e35",
  },

  vi: {
    meta: { langLabel: "Ti\u1ebfng Vi\u1ec7t", flag: "\ud83c\uddfb\ud83c\uddf3" },
    hero: {
      title: "Ai c\u00f3 c\u00f9ng tu\u1ed5i H\u00e0n Qu\u1ed1c v\u1edbi b\u1ea1n?",
      subtitle: "Nh\u1eadp ng\u00e0y sinh \u0111\u1ec3 t\u00ecm \u0111\u01b0\u1ee3c c\u1eb7p song sinh tu\u1ed5i H\u00e0n Qu\u1ed1c!",
    },
    calculator: {
      heading: "Nh\u1eadp Ng\u00e0y Sinh",
      label: "Ng\u00e0y sinh",
      yearLabel: "N\u0103m",
      monthLabel: "Th\u00e1ng",
      dayLabel: "Ng\u00e0y",
      placeholder: "",
      button: "T\u00ednh Tu\u1ed5i H\u00e0n Qu\u1ed1c",
      koreanAge: "Tu\u1ed5i H\u00e0n Qu\u1ed1c",
      internationalAge: "Tu\u1ed5i Qu\u1ed1c T\u1ebf",
      errorEmpty: "Vui l\u00f2ng ch\u1ecdn ng\u00e0y sinh.",
      errorFuture: "Ng\u00e0y sinh kh\u00f4ng th\u1ec3 \u1edf t\u01b0\u01a1ng lai.",
      errorYear: "Vui l\u00f2ng nh\u1eadp n\u0103m sau 1900.",
      resultDiff: (diff) => `Tu\u1ed5i H\u00e0n Qu\u1ed1c c\u1ee7a b\u1ea1n nhi\u1ec1u h\u01a1n tu\u1ed5i qu\u1ed1c t\u1ebf ${diff} tu\u1ed5i.`,
      resultBornIn: (year) => `Sinh n\u0103m ${year}`,
    },
    gallery: {
      title: "B\u1ed9 s\u01b0u t\u1eadp c\u1eb7p song sinh tu\u1ed5i H\u00e0n",
      subtitle: "T\u00ednh to\u00e1n \u0111\u1ec3 xem b\u1ea1n kh\u1edbp v\u1edbi ai!",
      koreanAgeLabel: "Tu\u1ed5i H\u00e0n",
      bornLabel: "Sinh",
    },
    results: {
      twinsTitle: "\ud83c\udf89 C\u1eb7p song sinh tu\u1ed5i H\u00e0n c\u1ee7a b\u1ea1n!",
      sameAgeBadge: "C\u00f9ng tu\u1ed5i H\u00e0n v\u1edbi b\u1ea1n!",
      shareTwitter: "Chia s\u1ebb tr\u00ean X",
      copyLink: "Sao ch\u00e9p li\u00ean k\u1ebft",
      recalculate: "T\u00ednh l\u1ea1i",
      copied: "\u0110\u00e3 sao ch\u00e9p!",
    },
    explanation: {
      howTitle: "Tu\u1ed5i H\u00e0n Qu\u1ed1c t\u00ednh nh\u01b0 th\u1ebf n\u00e0o?",
      howP1: "Trong h\u1ec7 th\u1ed1ng tu\u1ed5i truy\u1ec1n th\u1ed1ng c\u1ee7a H\u00e0n Qu\u1ed1c, em b\u00e9 \u0111\u01b0\u1ee3c t\u00ednh l\u00e0 1 tu\u1ed5i khi sinh ra. Sau \u0111\u00f3 m\u1ecdi ng\u01b0\u1eddi \u0111\u1ec1u t\u0103ng th\u00eam 1 tu\u1ed5i v\u00e0o ng\u00e0y 1 th\u00e1ng 1 h\u00e0ng n\u0103m.",
      howFormula: "Tu\u1ed5i H\u00e0n Qu\u1ed1c = N\u0103m hi\u1ec7n t\u1ea1i \u2212 N\u0103m sinh + 1",
      vsTitle: "Tu\u1ed5i H\u00e0n Qu\u1ed1c vs. Tu\u1ed5i Qu\u1ed1c T\u1ebf",
      vsP1: "Tu\u1ed5i qu\u1ed1c t\u1ebf (\ub9cc \ub098\uc774) \u0111\u1ebfm s\u1ed1 n\u0103m \u0111\u1ea7y \u0111\u1ee7 b\u1ea1n \u0111\u00e3 s\u1ed1ng k\u1ec3 t\u1eeb khi sinh. B\u1eaft \u0111\u1ea7u t\u1eeb 0 v\u00e0 t\u0103ng 1 v\u00e0o m\u1ed7i ng\u00e0y sinh. Ng\u01b0\u1ee3c l\u1ea1i, tu\u1ed5i H\u00e0n Qu\u1ed1c b\u1eaft \u0111\u1ea7u t\u1eeb 1 v\u00e0 t\u0103ng m\u1ed7i ng\u00e0y T\u1ebft D\u01b0\u01a1ng l\u1ecbch.",
      reformTitle: "C\u1ea3i c\u00e1ch tu\u1ed5i H\u00e0n Qu\u1ed1c n\u0103m 2023",
      reformP1: "T\u1eeb ng\u00e0y 28 th\u00e1ng 6 n\u0103m 2023, H\u00e0n Qu\u1ed1c ch\u00ednh th\u1ee9c \u00e1p d\u1ee5ng h\u1ec7 th\u1ed1ng tu\u1ed5i qu\u1ed1c t\u1ebf cho t\u1ea5t c\u1ea3 m\u1ee5c \u0111\u00edch ph\u00e1p l\u00fd. Tuy nhi\u00ean, tu\u1ed5i H\u00e0n Qu\u1ed1c v\u1eabn \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng r\u1ed9ng r\u00e3i trong giao ti\u1ebfp h\u00e0ng ng\u00e0y.",
    },
    faq: {
      title: "C\u00e2u H\u1ecfi Th\u01b0\u1eddng G\u1eb7p",
      items: [
        { q: "T\u1ea1i sao t\u00f4i l\u1edbn tu\u1ed5i h\u01a1n \u1edf H\u00e0n Qu\u1ed1c?", a: "V\u00ec h\u1ec7 th\u1ed1ng tu\u1ed5i H\u00e0n Qu\u1ed1c t\u00ednh th\u1eddi gian trong b\u1ee5ng m\u1eb9 l\u00e0 n\u0103m \u0111\u1ea7u ti\u00ean, v\u00e0 m\u1ecdi ng\u01b0\u1eddi c\u00f9ng t\u0103ng tu\u1ed5i v\u00e0o ng\u00e0y T\u1ebft." },
        { q: "Tu\u1ed5i H\u00e0n Qu\u1ed1c c\u00f2n \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng kh\u00f4ng?", a: "Ch\u00ednh th\u1ee9c th\u00ec H\u00e0n Qu\u1ed1c \u0111\u00e3 chuy\u1ec3n sang tu\u1ed5i qu\u1ed1c t\u1ebf v\u00e0o th\u00e1ng 6 n\u0103m 2023. Nh\u01b0ng nhi\u1ec1u ng\u01b0\u1eddi H\u00e0n v\u1eabn d\u00f9ng tu\u1ed5i H\u00e0n trong giao ti\u1ebfp." },
        { q: "Tu\u1ed5i H\u00e0n c\u00f3 th\u1ec3 nhi\u1ec1u h\u01a1n tu\u1ed5i qu\u1ed1c t\u1ebf 2 tu\u1ed5i kh\u00f4ng?", a: "C\u00f3! N\u1ebfu sinh nh\u1eadt ch\u01b0a \u0111\u1ebfn trong n\u0103m nay, tu\u1ed5i H\u00e0n c\u00f3 th\u1ec3 nhi\u1ec1u h\u01a1n 2 tu\u1ed5i." },
        { q: "\"\ub9cc \ub098\uc774\" (man-nai) l\u00e0 g\u00ec?", a: "\ub9cc \ub098\uc774 ngh\u0129a l\u00e0 \"tu\u1ed5i \u0111\u1ea7y \u0111\u1ee7\" v\u00e0 ch\u1ec9 h\u1ec7 th\u1ed1ng t\u00ednh tu\u1ed5i qu\u1ed1c t\u1ebf." },
      ],
    },
    footer: "T\u00ednh Tu\u1ed5i H\u00e0n Qu\u1ed1c. D\u00e0nh cho t\u1ea5t c\u1ea3 nh\u1eefng ai y\u00eau th\u00edch v\u0103n h\u00f3a H\u00e0n Qu\u1ed1c.",
  },

  id: {
    meta: { langLabel: "Bahasa", flag: "\ud83c\uddee\ud83c\udde9" },
    hero: {
      title: "Siapa yang seusia Korea denganmu?",
      subtitle: "Masukkan tanggal lahir dan temukan kembar usia Korea-mu!",
    },
    calculator: {
      heading: "Masukkan Tanggal Lahir",
      label: "Tanggal Lahir",
      yearLabel: "Tahun",
      monthLabel: "Bulan",
      dayLabel: "Hari",
      placeholder: "",
      button: "Hitung Usia Korea Saya",
      koreanAge: "Usia Korea",
      internationalAge: "Usia Internasional",
      errorEmpty: "Silakan pilih tanggal lahir Anda.",
      errorFuture: "Tanggal lahir tidak boleh di masa depan.",
      errorYear: "Silakan masukkan tahun setelah 1900.",
      resultDiff: (diff) => `Usia Korea Anda ${diff} tahun lebih tua dari usia internasional.`,
      resultBornIn: (year) => `Lahir tahun ${year}`,
    },
    gallery: {
      title: "Galeri Kembar Usia Korea",
      subtitle: "Hitung untuk melihat siapa yang cocok!",
      koreanAgeLabel: "Usia Korea",
      bornLabel: "Lahir",
    },
    results: {
      twinsTitle: "\ud83c\udf89 Kembar Usia Korea Anda!",
      sameAgeBadge: "Usia Korea sama denganmu!",
      shareTwitter: "Bagikan di X",
      copyLink: "Salin Tautan",
      recalculate: "Hitung Lagi",
      copied: "Tersalin!",
    },
    explanation: {
      howTitle: "Bagaimana Cara Kerja Usia Korea?",
      howP1: "Dalam sistem usia tradisional Korea, bayi dianggap berusia 1 tahun saat lahir. Kemudian semua orang bertambah 1 tahun pada 1 Januari, terlepas dari tanggal lahir sebenarnya.",
      howFormula: "Usia Korea = Tahun Sekarang \u2212 Tahun Lahir + 1",
      vsTitle: "Usia Korea vs. Usia Internasional",
      vsP1: "Usia internasional (\ub9cc \ub098\uc774) menghitung jumlah tahun penuh sejak lahir. Dimulai dari 0 dan bertambah 1 setiap ulang tahun. Sebaliknya, usia Korea dimulai dari 1 dan bertambah setiap Tahun Baru.",
      reformTitle: "Reformasi Usia Korea 2023",
      reformP1: "Sejak 28 Juni 2023, Korea Selatan secara resmi mengadopsi sistem usia internasional untuk semua tujuan hukum. Namun, usia Korea masih banyak digunakan dalam percakapan sehari-hari.",
    },
    faq: {
      title: "Pertanyaan yang Sering Diajukan",
      items: [
        { q: "Mengapa saya lebih tua di Korea?", a: "Karena sistem usia Korea menghitung waktu di dalam kandungan sebagai tahun pertama, dan semua orang bertambah usia bersama pada Tahun Baru." },
        { q: "Apakah usia Korea masih digunakan?", a: "Secara resmi beralih ke usia internasional pada Juni 2023. Namun banyak orang Korea masih menggunakan usia Korea dalam percakapan." },
        { q: "Bisakah usia Korea 2 tahun lebih tua?", a: "Bisa! Jika ulang tahun tahun ini belum tiba, usia Korea bisa 2 tahun lebih tua." },
        { q: "Apa itu \"\ub9cc \ub098\uc774\" (man-nai)?", a: "\ub9cc \ub098\uc774 berarti \"usia penuh\" dan mengacu pada sistem penghitungan usia internasional." },
      ],
    },
    footer: "Kalkulator Usia Korea. Dibuat untuk siapa saja yang tertarik dengan budaya Korea.",
  },

  fr: {
    meta: { langLabel: "Fran\u00e7ais", flag: "\ud83c\uddeb\ud83c\uddf7" },
    hero: {
      title: "Qui partage votre \u00e2ge cor\u00e9en ?",
      subtitle: "Entrez votre date de naissance et d\u00e9couvrez votre jumeau d\u2019\u00e2ge cor\u00e9en !",
    },
    calculator: {
      heading: "Entrez votre date de naissance",
      label: "Date de naissance",
      yearLabel: "Ann\u00e9e",
      monthLabel: "Mois",
      dayLabel: "Jour",
      placeholder: "",
      button: "Calculer mon \u00e2ge cor\u00e9en",
      koreanAge: "\u00c2ge cor\u00e9en",
      internationalAge: "\u00c2ge international",
      errorEmpty: "Veuillez s\u00e9lectionner votre date de naissance.",
      errorFuture: "La date de naissance ne peut pas \u00eatre dans le futur.",
      errorYear: "Veuillez entrer une ann\u00e9e apr\u00e8s 1900.",
      resultDiff: (diff) => `Votre \u00e2ge cor\u00e9en est de ${diff} an(s) de plus que votre \u00e2ge international.`,
      resultBornIn: (year) => `N\u00e9(e) en ${year}`,
    },
    gallery: {
      title: "Galerie des jumeaux d\u2019\u00e2ge cor\u00e9en",
      subtitle: "Calculez pour voir avec qui vous correspondez !",
      koreanAgeLabel: "\u00c2ge cor\u00e9en",
      bornLabel: "N\u00e9(e)",
    },
    results: {
      twinsTitle: "\ud83c\udf89 Vos jumeaux d\u2019\u00e2ge cor\u00e9en !",
      sameAgeBadge: "M\u00eame \u00e2ge cor\u00e9en que vous !",
      shareTwitter: "Partager sur X",
      copyLink: "Copier le lien",
      recalculate: "Recalculer",
      copied: "Copi\u00e9 !",
    },
    explanation: {
      howTitle: "Comment fonctionne l\u2019\u00e2ge cor\u00e9en ?",
      howP1: "Dans le syst\u00e8me traditionnel cor\u00e9en, un b\u00e9b\u00e9 est consid\u00e9r\u00e9 comme ayant 1 an \u00e0 la naissance. Ensuite, tout le monde gagne un an le 1er janvier, quel que soit le jour d\u2019anniversaire r\u00e9el.",
      howFormula: "\u00c2ge cor\u00e9en = Ann\u00e9e actuelle \u2212 Ann\u00e9e de naissance + 1",
      vsTitle: "\u00c2ge cor\u00e9en vs. \u00c2ge international",
      vsP1: "L\u2019\u00e2ge international (\ub9cc \ub098\uc774) compte le nombre d\u2019ann\u00e9es compl\u00e8tes v\u00e9cues. Vous commencez \u00e0 0 et gagnez un an \u00e0 chaque anniversaire. L\u2019\u00e2ge cor\u00e9en commence \u00e0 1 et augmente chaque Jour de l\u2019An.",
      reformTitle: "R\u00e9forme de l\u2019\u00e2ge en Cor\u00e9e du Sud en 2023",
      reformP1: "Depuis le 28 juin 2023, la Cor\u00e9e du Sud a officiellement adopt\u00e9 le syst\u00e8me d\u2019\u00e2ge international pour toutes les fins l\u00e9gales. Cependant, l\u2019\u00e2ge cor\u00e9en est encore largement utilis\u00e9 dans les conversations quotidiennes.",
    },
    faq: {
      title: "Questions fr\u00e9quentes",
      items: [
        { q: "Pourquoi suis-je plus \u00e2g\u00e9(e) en Cor\u00e9e ?", a: "Parce que le syst\u00e8me cor\u00e9en compte le temps dans le ventre de la m\u00e8re comme la premi\u00e8re ann\u00e9e, et tout le monde vieillit ensemble au Jour de l\u2019An." },
        { q: "L\u2019\u00e2ge cor\u00e9en est-il encore utilis\u00e9 ?", a: "Officiellement, la Cor\u00e9e du Sud est pass\u00e9e \u00e0 l\u2019\u00e2ge international en juin 2023. Mais beaucoup utilisent encore l\u2019\u00e2ge cor\u00e9en au quotidien." },
        { q: "Mon \u00e2ge cor\u00e9en peut-il \u00eatre de 2 ans sup\u00e9rieur ?", a: "Oui ! Si votre anniversaire n\u2019est pas encore pass\u00e9 cette ann\u00e9e, votre \u00e2ge cor\u00e9en peut \u00eatre de 2 ans sup\u00e9rieur." },
        { q: "Qu\u2019est-ce que \u00ab \ub9cc \ub098\uc774 \u00bb ?", a: "\ub9cc \ub098\uc774 signifie \u00ab \u00e2ge complet \u00bb et d\u00e9signe le syst\u00e8me de calcul d\u2019\u00e2ge international." },
      ],
    },
    footer: "Calculateur d\u2019\u00e2ge cor\u00e9en. Pour tous ceux qui s\u2019int\u00e9ressent \u00e0 la culture cor\u00e9enne.",
  },

  es: {
    meta: { langLabel: "Espa\u00f1ol", flag: "\ud83c\uddea\ud83c\uddf8" },
    hero: {
      title: "\u00bfQui\u00e9n comparte tu edad coreana?",
      subtitle: "\u00a1Ingresa tu fecha de nacimiento y descubre tu gemelo de edad coreana!",
    },
    calculator: {
      heading: "Ingresa tu fecha de nacimiento",
      label: "Fecha de nacimiento",
      yearLabel: "A\u00f1o",
      monthLabel: "Mes",
      dayLabel: "D\u00eda",
      placeholder: "",
      button: "Calcular mi edad coreana",
      koreanAge: "Edad coreana",
      internationalAge: "Edad internacional",
      errorEmpty: "Por favor selecciona tu fecha de nacimiento.",
      errorFuture: "La fecha de nacimiento no puede ser en el futuro.",
      errorYear: "Por favor ingresa un a\u00f1o posterior a 1900.",
      resultDiff: (diff) => `Tu edad coreana es ${diff} a\u00f1o(s) m\u00e1s que tu edad internacional.`,
      resultBornIn: (year) => `Nacido/a en ${year}`,
    },
    gallery: {
      title: "Galer\u00eda de gemelos de edad coreana",
      subtitle: "\u00a1Calcula para ver con qui\u00e9n coincides!",
      koreanAgeLabel: "Edad coreana",
      bornLabel: "Nacido/a",
    },
    results: {
      twinsTitle: "\ud83c\udf89 \u00a1Tus gemelos de edad coreana!",
      sameAgeBadge: "\u00a1Misma edad coreana que t\u00fa!",
      shareTwitter: "Compartir en X",
      copyLink: "Copiar enlace",
      recalculate: "Calcular de nuevo",
      copied: "\u00a1Copiado!",
    },
    explanation: {
      howTitle: "\u00bfC\u00f3mo funciona la edad coreana?",
      howP1: "En el sistema tradicional coreano, un beb\u00e9 se considera de 1 a\u00f1o al nacer. Luego, todos ganan un a\u00f1o el 1 de enero, sin importar su fecha de nacimiento real.",
      howFormula: "Edad coreana = A\u00f1o actual \u2212 A\u00f1o de nacimiento + 1",
      vsTitle: "Edad coreana vs. Edad internacional",
      vsP1: "La edad internacional (\ub9cc \ub098\uc774) cuenta los a\u00f1os completos vividos desde el nacimiento. Comienzas en 0 y ganas un a\u00f1o en cada cumplea\u00f1os. La edad coreana comienza en 1 y aumenta cada A\u00f1o Nuevo.",
      reformTitle: "Reforma de la edad en Corea del Sur en 2023",
      reformP1: "Desde el 28 de junio de 2023, Corea del Sur adopt\u00f3 oficialmente el sistema de edad internacional para todos los fines legales. Sin embargo, la edad coreana todav\u00eda se usa en conversaciones cotidianas.",
    },
    faq: {
      title: "Preguntas frecuentes",
      items: [
        { q: "\u00bfPor qu\u00e9 soy mayor en Corea?", a: "Porque el sistema coreano cuenta el tiempo en el vientre materno como el primer a\u00f1o, y todos envejecen juntos en A\u00f1o Nuevo." },
        { q: "\u00bfLa edad coreana todav\u00eda se usa hoy?", a: "Oficialmente se cambi\u00f3 a la edad internacional en junio de 2023. Pero muchos coreanos a\u00fan usan su edad coreana." },
        { q: "\u00bfMi edad coreana puede ser 2 a\u00f1os m\u00e1s?", a: "\u00a1S\u00ed! Si a\u00fan no has cumplido a\u00f1os este a\u00f1o, tu edad coreana puede ser 2 a\u00f1os mayor." },
        { q: "\u00bfQu\u00e9 es \u00ab\ub9cc \ub098\uc774\u00bb?", a: "\ub9cc \ub098\uc774 significa \u00abedad completa\u00bb y se refiere al sistema de c\u00e1lculo de edad internacional." },
      ],
    },
    footer: "Calculadora de Edad Coreana. Hecha para cualquiera que sienta curiosidad por la cultura coreana.",
  },

  de: {
    meta: { langLabel: "Deutsch", flag: "\ud83c\udde9\ud83c\uddea" },
    hero: {
      title: "Wer teilt Ihr koreanisches Alter?",
      subtitle: "Geben Sie Ihr Geburtsdatum ein und finden Sie Ihren koreanischen Alters-Zwilling!",
    },
    calculator: {
      heading: "Geben Sie Ihr Geburtsdatum ein",
      label: "Geburtsdatum",
      yearLabel: "Jahr",
      monthLabel: "Monat",
      dayLabel: "Tag",
      placeholder: "",
      button: "Koreanisches Alter berechnen",
      koreanAge: "Koreanisches Alter",
      internationalAge: "Internationales Alter",
      errorEmpty: "Bitte w\u00e4hlen Sie Ihr Geburtsdatum aus.",
      errorFuture: "Das Geburtsdatum kann nicht in der Zukunft liegen.",
      errorYear: "Bitte geben Sie ein Jahr nach 1900 ein.",
      resultDiff: (diff) => `Ihr koreanisches Alter ist ${diff} Jahr(e) h\u00f6her als Ihr internationales Alter.`,
      resultBornIn: (year) => `Geboren ${year}`,
    },
    gallery: {
      title: "Galerie der koreanischen Alters-Zwillinge",
      subtitle: "Berechnen Sie, um zu sehen, wer passt!",
      koreanAgeLabel: "Koreanisches Alter",
      bornLabel: "Geboren",
    },
    results: {
      twinsTitle: "\ud83c\udf89 Ihre koreanischen Alters-Zwillinge!",
      sameAgeBadge: "Gleiches koreanisches Alter wie Sie!",
      shareTwitter: "Auf X teilen",
      copyLink: "Link kopieren",
      recalculate: "Erneut berechnen",
      copied: "Kopiert!",
    },
    explanation: {
      howTitle: "Wie funktioniert das koreanische Alter?",
      howP1: "Im traditionellen koreanischen Alterssystem wird ein Baby bei der Geburt als 1 Jahr alt betrachtet. Danach wird jeder am 1. Januar ein Jahr \u00e4lter, unabh\u00e4ngig vom tats\u00e4chlichen Geburtstag.",
      howFormula: "Koreanisches Alter = Aktuelles Jahr \u2212 Geburtsjahr + 1",
      vsTitle: "Koreanisches Alter vs. Internationales Alter",
      vsP1: "Das internationale Alter (\ub9cc \ub098\uc774) z\u00e4hlt die vollen Jahre seit der Geburt. Sie beginnen bei 0 und werden an jedem Geburtstag ein Jahr \u00e4lter. Das koreanische Alter beginnt bei 1 und erh\u00f6ht sich jedes Neujahr.",
      reformTitle: "Altersreform in S\u00fcdkorea 2023",
      reformP1: "Seit dem 28. Juni 2023 hat S\u00fcdkorea das internationale Alterssystem f\u00fcr alle rechtlichen Zwecke offiziell eingef\u00fchrt. Das koreanische Alter wird jedoch im Alltag weiterhin h\u00e4ufig verwendet.",
    },
    faq: {
      title: "H\u00e4ufig gestellte Fragen",
      items: [
        { q: "Warum bin ich in Korea \u00e4lter?", a: "Weil das koreanische Alterssystem die Zeit im Mutterleib als erstes Lebensjahr z\u00e4hlt und alle gemeinsam am Neujahrstag \u00e4lter werden." },
        { q: "Wird das koreanische Alter noch verwendet?", a: "Offiziell hat S\u00fcdkorea im Juni 2023 auf das internationale Alter umgestellt. Im Alltag verwenden viele Koreaner weiterhin das koreanische Alter." },
        { q: "Kann mein koreanisches Alter 2 Jahre mehr sein?", a: "Ja! Wenn Sie dieses Jahr noch nicht Geburtstag hatten, kann Ihr koreanisches Alter 2 Jahre h\u00f6her sein." },
        { q: "Was ist \u00ab\ub9cc \ub098\uc774\u00bb?", a: "\ub9cc \ub098\uc774 bedeutet \u00abvolles Alter\u00bb und bezieht sich auf das internationale Altersberechnungssystem." },
      ],
    },
    footer: "Koreanischer Altersrechner. F\u00fcr alle, die sich f\u00fcr die koreanische Kultur interessieren.",
  },
};
