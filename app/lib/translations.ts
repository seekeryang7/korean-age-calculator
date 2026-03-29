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
    howP2: string;
    howFormula: string;
    vsTitle: string;
    vsP1: string;
    vsP2: string;
    reformTitle: string;
    reformP1: string;
    reformP2: string;
  };
  guide: {
    title: string;
    cultureTitle: string;
    cultureP1: string;
    cultureP2: string;
    examplesTitle: string;
    examplesP1: string;
    tipsTitle: string;
    tipsP1: string;
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
      howP2: "This system has its roots in ancient East Asian traditions, where the time spent in the womb was considered the first year of life. The shared New Year birthday also reflects the collectivist nature of Korean culture, where community milestones are celebrated together rather than individually.",
      howFormula: "Korean Age = Current Year \u2212 Birth Year + 1",
      vsTitle: "Korean Age vs. International Age",
      vsP1: 'International age (\ub9cc \ub098\uc774, man-nai) counts the actual number of full years you\u2019ve been alive since birth. You start at 0 and gain a year on each birthday. Korean age, on the other hand, starts at 1 and increments every New Year\u2019s Day. That\u2019s why Koreans often ask \u201cWhat year were you born?\u201d instead of \u201cHow old are you?\u201d',
      vsP2: "There is also a third system called \u201cyear age\u201d (\uc5f0 \ub098\uc774, yeon-nai), which is calculated as the current year minus the birth year. This was previously used for school enrollment and military service in South Korea. Understanding these different systems helps you navigate age-related conversations and traditions in Korean culture.",
      reformTitle: "2023 Age Reform in South Korea",
      reformP1: "As of June 28, 2023, South Korea officially adopted the international age system for all legal and administrative purposes. This means that in official documents, contracts, and government services, only the international age is used. However, Korean age is still widely used in everyday conversation and social settings.",
      reformP2: "The reform was introduced to reduce confusion caused by having multiple age-counting systems. Before the change, Koreans might state different ages depending on the context \u2014 one for legal documents, another for social situations, and yet another for school enrollment. The unified system simplifies things, but cultural habits take time to change.",
    },
    guide: {
      title: "Complete Guide to Korean Age",
      cultureTitle: "Korean Age in Culture and Society",
      cultureP1: "Age plays a central role in Korean culture. It determines how you speak to someone, what honorifics to use, and even who pours drinks at a dinner table. When Koreans meet someone new, one of the first questions they ask is \u201cWhat year were you born?\u201d (\uba87 \ub144\uc0dd\uc774\uc138\uc694?). This is not considered rude \u2014 it\u2019s essential for establishing the proper level of formality in conversation.",
      cultureP2: "If two people are born in the same year, they are considered the same age (\ub3d9\uac11, dong-gap) and can speak casually to each other. Even a one-year difference can change the entire dynamic of a relationship. The older person (\uc624\ube60/\uc5b8\ub2c8, oppa/unni for females, \ud615/\ub204\ub098, hyung/nuna for males) is expected to take care of the younger, while the younger person shows respect through language and behavior.",
      examplesTitle: "Korean Age Examples and Scenarios",
      examplesP1: "Let\u2019s say you were born on December 31, 1999. On your birthday, your international age is 0 and your Korean age is 1. The very next day, January 1, 2000, your international age is still 0, but your Korean age jumps to 2! This extreme example shows how Korean age can be up to 2 years higher. For someone born on January 1, the difference is always exactly 1 year. K-pop fans often notice this when comparing ages of their favorite idols \u2014 two members born months apart in different calendar years will have a 1-year Korean age gap.",
      tipsTitle: "Tips for K-pop Fans and Korea Travelers",
      tipsP1: "When talking about your favorite K-pop idols, you might hear fans refer to ages differently. BTS, BLACKPINK, aespa, and NewJeans members all grew up with the Korean age system. If you\u2019re traveling to South Korea, knowing your Korean age can be a fun conversation starter. Try telling a local \u201cMy Korean age is...\u201d in Korean: \u201c\uc81c \ud55c\uad6d \ub098\uc774\ub294 ___\uc0b4\uc774\uc5d0\uc694\u201d. It\u2019s a great icebreaker and shows cultural awareness!",
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
          a: "Officially, South Korea switched to international age in June 2023. But in daily life, many Koreans still refer to their Korean age in casual conversation, especially among friends, family, and fans of K-pop culture.",
        },
        {
          q: "Can my Korean age be 2 years more than my international age?",
          a: "Yes! If you haven\u2019t had your birthday yet this year, your Korean age can be 2 years higher. For example, if you were born in December, in January your international age hasn\u2019t incremented yet, but your Korean age has.",
        },
        {
          q: 'What is "\ub9cc \ub098\uc774" (man-nai)?',
          a: '\ub9cc \ub098\uc774 literally means "full age" and refers to the international age counting system \u2014 the way most countries in the world calculate age. Since the 2023 reform, this is the official system in South Korea.',
        },
        {
          q: 'What does "\ub3d9\uac11" (dong-gap) mean?',
          a: '\ub3d9\uac11 means "same age" and refers to people born in the same year. In Korean culture, being dong-gap with someone creates an instant bond \u2014 you can speak casually and treat each other as equals. K-pop fans often check if they are dong-gap with their favorite idols!',
        },
        {
          q: "How do K-pop idols calculate their age?",
          a: "K-pop idols grew up with the Korean age system, so when they mention their age in variety shows or interviews, they often use Korean age. However, for international fans, agencies sometimes list international ages. Our calculator helps you compare directly!",
        },
        {
          q: 'What is "\ud559\ubc88" (hakbeon)?',
          a: '\ud559\ubc88 refers to your university entry year and is commonly used in Korean social culture. For example, if you entered university in 2020, your hakbeon is "20\ud559\ubc88." It\u2019s another way Koreans establish seniority and social hierarchy.',
        },
        {
          q: "Do other countries use a similar age system?",
          a: "Historically, China, Japan, Vietnam, and Mongolia used similar age-counting systems. However, most of these countries have already transitioned to the international system. South Korea was one of the last to officially change in 2023.",
        },
        {
          q: "Why is birth year so important in Korea?",
          a: "In Korea, your birth year determines your social relationships. People born in the same year are peers (\ub3d9\uac11), while even a one-year gap means using formal language with the older person. This is why Koreans ask \u201cWhat year were you born?\u201d rather than \u201cHow old are you?\u201d",
        },
        {
          q: "What is the Korean zodiac (\ub744)?",
          a: "Korea uses a 12-year zodiac cycle similar to the Chinese zodiac, called \ub744 (tti). Each year is associated with an animal: Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Sheep, Monkey, Rooster, Dog, and Pig. Koreans often mention their zodiac animal when discussing birth years.",
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
      howP2: "이 체계는 고대 동아시아 전통에 뿌리를 두고 있으며, 어머니 뱃속에서 보낸 시간을 첫 번째 해로 간주했습니다. 새해에 모두 함께 나이를 먹는 것은 공동체의 이정표를 개인이 아닌 함께 축하하는 한국 문화의 집단주의적 성격을 반영합니다.",
      howFormula: "\ud55c\uad6d \ub098\uc774 = \ud604\uc7ac \uc5f0\ub3c4 \u2212 \ucd9c\uc0dd \uc5f0\ub3c4 + 1",
      vsTitle: "\ud55c\uad6d \ub098\uc774 vs. \ub9cc \ub098\uc774",
      vsP1: "\ub9cc \ub098\uc774\ub294 \ud0dc\uc5b4\ub09c \ud6c4 \uc2e4\uc81c\ub85c \uc0b4\uc544\uc628 \ud587\uc218\ub97c \uc138\ub294 \ubc29\uc2dd\uc785\ub2c8\ub2e4. 0\uc0b4\uc5d0\uc11c \uc2dc\uc791\ud574 \uc0dd\uc77c\ub9c8\ub2e4 \ud55c \uc0b4\uc529 \ub354\ud569\ub2c8\ub2e4. \ubc18\uba74 \ud55c\uad6d \ub098\uc774\ub294 1\uc0b4\uc5d0\uc11c \uc2dc\uc791\ud574 \ub9e4\ub144 \uc0c8\ud574\uc5d0 \ub098\uc774\uac00 \uc62c\ub77c\uac11\ub2c8\ub2e4. \uadf8\ub798\uc11c \ud55c\uad6d \uc0ac\ub78c\ub4e4\uc740 \"\uba87 \uc0b4\uc774\uc5d0\uc694?\"\ubcf4\ub2e4 \"\uba87 \ub144\uc0dd\uc774\uc5d0\uc694?\"\ub77c\uace0 \uc790\uc8fc \ubb3b\uc2b5\ub2c8\ub2e4.",
      vsP2: "'연 나이'(연 나이, yeon-nai)라는 세 번째 체계도 있는데, 현재 연도에서 출생 연도를 빼서 계산합니다. 이전에는 한국에서 학교 입학과 군 복무에 사용되었습니다. 이러한 다양한 체계를 이해하면 한국 문화에서 나이와 관련된 대화와 전통을 잘 이해할 수 있습니다.",
      reformTitle: "2023\ub144 \ud55c\uad6d \ub098\uc774 \uac1c\uc815",
      reformP1: "2023\ub144 6\uc6d4 28\uc77c\ubd80\ud130 \ub300\ud55c\ubbfc\uad6d\uc740 \ubaa8\ub4e0 \ubc95\uc801\u00b7\ud589\uc815\uc801 \ubaa9\uc801\uc5d0\uc11c \ub9cc \ub098\uc774 \uccb4\uacc4\ub97c \uacf5\uc2dd \ucc44\ud0dd\ud588\uc2b5\ub2c8\ub2e4. \uacf5\ubb38\uc11c, \uacc4\uc57d\uc11c, \uc815\ubd80 \uc11c\ube44\uc2a4\uc5d0\uc11c\ub294 \ub9cc \ub098\uc774\ub9cc \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc77c\uc0c1 \ub300\ud654\uc5d0\uc11c\ub294 \uc5ec\uc804\ud788 \ud55c\uad6d \ub098\uc774\uac00 \ub113\ub9ac \uc0ac\uc6a9\ub429\ub2c8\ub2e4.",
      reformP2: "이 개혁은 여러 나이 계산 체계로 인한 혼란을 줄이기 위해 도입되었습니다. 변경 전에는 한국인들이 상황에 따라 다른 나이를 말할 수 있었습니다 — 법적 문서용, 사회적 상황용, 학교 입학용 각각 다른 나이가 있었습니다. 통일된 체계가 상황을 단순화하지만, 문화적 습관은 바뀌는 데 시간이 걸립니다.",
    },
    guide: {
      title: "한국 나이 완벽 가이드",
      cultureTitle: "문화와 사회에서의 한국 나이",
      cultureP1: "나이는 한국 문화에서 핵심적인 역할을 합니다. 나이는 상대방에게 어떻게 말해야 하는지, 어떤 존칭을 사용해야 하는지, 심지어 식사 자리에서 누가 술을 따르는지까지 결정합니다. 한국인들이 새로운 사람을 만나면 가장 먼저 묻는 질문 중 하나가 '몇 년생이세요?'입니다. 이것은 무례한 것이 아니라, 대화에서 적절한 격식 수준을 정하는 데 필수적입니다.",
      cultureP2: "두 사람이 같은 해에 태어나면 동갑(동갑)으로 간주되어 서로 반말을 할 수 있습니다. 1년 차이만으로도 관계의 역학이 완전히 바뀔 수 있습니다. 나이가 많은 사람(여성의 경우 오빠/언니, 남성의 경우 형/누나)은 동생을 돌봐야 하고, 어린 사람은 언어와 행동으로 존경을 표합니다.",
      examplesTitle: "한국 나이 예시와 시나리오",
      examplesP1: "예를 들어 1999년 12월 31일에 태어났다고 가정해 봅시다. 생일에 만 나이는 0살이고 한국 나이는 1살입니다. 바로 다음 날인 2000년 1월 1일, 만 나이는 여전히 0살이지만 한국 나이는 2살이 됩니다! 이 극단적인 예시는 한국 나이가 최대 2살까지 더 많을 수 있음을 보여줍니다. K-pop 팬들은 좋아하는 아이돌의 나이를 비교할 때 이런 점을 자주 발견합니다 — 다른 연도에 태어난 두 멤버는 몇 달 차이밖에 나지 않아도 한국 나이 1살 차이가 납니다.",
      tipsTitle: "K-pop 팬과 한국 여행자를 위한 팁",
      tipsP1: "좋아하는 K-pop 아이돌에 대해 이야기할 때, 팬들이 나이를 다르게 언급하는 것을 들을 수 있습니다. BTS, BLACKPINK, aespa, NewJeans 멤버들은 모두 한국 나이 체계에서 자랐습니다. 한국 여행 중이라면 한국 나이를 아는 것이 재미있는 대화 소재가 될 수 있습니다. '제 한국 나이는 ___살이에요'라고 한국어로 말해 보세요. 좋은 아이스브레이커가 되고 문화적 이해를 보여줍니다!",
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
        {
          q: '"동갑"이 무슨 뜻인가요?',
          a: '동갑은 같은 해에 태어난 사람을 의미합니다. 한국 문화에서 동갑인 사람과는 즉각적인 유대감이 생기며, 반말을 사용하고 서로를 동등하게 대할 수 있습니다. K-pop 팬들은 종종 좋아하는 아이돌과 동갑인지 확인합니다!',
        },
        {
          q: "K-pop 아이돌은 나이를 어떻게 계산하나요?",
          a: "K-pop 아이돌은 한국 나이 체계에서 자랐기 때문에 예능이나 인터뷰에서 나이를 언급할 때 종종 한국 나이를 사용합니다. 하지만 해외 팬을 위해 소속사에서 만 나이를 표기하기도 합니다. 저희 계산기로 직접 비교해 보세요!",
        },
        {
          q: '"학번"이 무슨 뜻인가요?',
          a: '학번은 대학 입학 연도를 말하며, 한국 사회 문화에서 흔히 사용됩니다. 예를 들어 2020년에 대학에 입학했다면 학번은 "20학번"입니다. 한국인들이 선후배 관계와 사회적 위계를 정하는 또 다른 방법입니다.',
        },
        {
          q: "다른 나라도 비슷한 나이 체계를 사용하나요?",
          a: "역사적으로 중국, 일본, 베트남, 몽골도 비슷한 나이 계산 체계를 사용했습니다. 하지만 이들 나라 대부분은 이미 만 나이 체계로 전환했습니다. 한국은 2023년에 공식적으로 변경한 마지막 국가 중 하나입니다.",
        },
        {
          q: "왜 한국에서는 출생연도가 그렇게 중요한가요?",
          a: '한국에서는 출생연도가 사회적 관계를 결정합니다. 같은 해에 태어난 사람은 동갑이고, 1년 차이만으로도 나이 많은 사람에게 존댓말을 사용해야 합니다. 그래서 한국인들은 "몇 살이에요?"보다 "몇 년생이에요?"라고 묻습니다.',
        },
        {
          q: "한국 띠(tti)란 무엇인가요?",
          a: "한국은 중국 띠와 유사한 12년 주기의 띠(tti)를 사용합니다. 각 해는 동물과 연결됩니다: 쥐, 소, 호랑이, 토끼, 용, 뱀, 말, 양, 원숭이, 닭, 개, 돼지. 한국인들은 출생연도를 이야기할 때 종종 자신의 띠 동물을 언급합니다.",
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
      howP2: "この体系は古代東アジアの伝統に根ざしており、母親の胎内で過ごした期間を最初の1年と見なしていました。全員が新年に一緒に年を取るという共通の誕生日は、個人ではなくコミュニティ全体で節目を祝う韓国文化の集団主義的な性格を反映しています。",
      howFormula: "\u97d3\u56fd\u5e74\u9f62 = \u73fe\u5728\u306e\u5e74 \u2212 \u8a95\u751f\u5e74 + 1",
      vsTitle: "\u97d3\u56fd\u5e74\u9f62 vs. \u6e80\u5e74\u9f62",
      vsP1: "\u6e80\u5e74\u9f62\uff08\ub9cc \ub098\uc774\uff09\u306f\u3001\u751f\u307e\u308c\u3066\u304b\u3089\u5b9f\u969b\u306b\u751f\u304d\u305f\u5e74\u6570\u3092\u6570\u3048\u307e\u3059\u30020\u6b73\u304b\u3089\u59cb\u307e\u308a\u3001\u8a95\u751f\u65e5\u3054\u3068\u306b1\u6b73\u305a\u3064\u52a0\u7b97\u3055\u308c\u307e\u3059\u3002\u4e00\u65b9\u3001\u97d3\u56fd\u5e74\u9f62\u306f1\u6b73\u304b\u3089\u59cb\u307e\u308a\u3001\u6bce\u5e74\u5143\u65e5\u306b\u5e74\u9f62\u304c\u4e0a\u304c\u308a\u307e\u3059\u3002",
      vsP2: "「年齢」（연 나이、ヨンナイ）と呼ばれる3番目の体系もあり、現在の年から生まれた年を引いて計算します。以前は韓国で学校の入学や兵役に使用されていました。これらの異なる体系を理解することで、韓国文化における年齢に関する会話や伝統をうまく理解できるようになります。",
      reformTitle: "2023\u5e74 \u97d3\u56fd\u306e\u5e74\u9f62\u6539\u6b63",
      reformP1: "2023\u5e746\u670828\u65e5\u3088\u308a\u3001\u97d3\u56fd\u306f\u3059\u3079\u3066\u306e\u6cd5\u7684\u30fb\u884c\u653f\u7684\u76ee\u7684\u3067\u6e80\u5e74\u9f62\u5236\u5ea6\u3092\u516c\u5f0f\u63a1\u7528\u3057\u307e\u3057\u305f\u3002\u305f\u3060\u3057\u3001\u65e5\u5e38\u4f1a\u8a71\u3067\u306f\u97d3\u56fd\u5e74\u9f62\u304c\u4eca\u3067\u3082\u5e83\u304f\u4f7f\u308f\u308c\u3066\u3044\u307e\u3059\u3002",
      reformP2: "この改革は、複数の年齢計算システムによる混乱を減らすために導入されました。変更前は、韓国人は状況に応じて異なる年齢を述べることがありました — 法的文書用、社会的な場面用、学校入学用でそれぞれ異なる年齢がありました。統一されたシステムは物事を簡素化しますが、文化的な習慣が変わるには時間がかかります。",
    },
    guide: {
      title: "韓国年齢の完全ガイド",
      cultureTitle: "文化と社会における韓国年齢",
      cultureP1: "年齢は韓国文化で中心的な役割を果たしています。相手にどう話すか、どの敬称を使うか、さらには食事の席で誰がお酒を注ぐかまで決まります。韓国人が初対面の人に最初に聞く質問の一つは「何年生まれですか？」（몇 년생이세요?）です。これは失礼ではなく、会話で適切な丁寧さのレベルを決めるために不可欠なのです。",
      cultureP2: "同じ年に生まれた二人は同い年（동갑、トンガプ）とみなされ、気軽に話すことができます。たった1年の違いでも関係のダイナミクスが完全に変わります。年上の人（女性の場合はオッパ/オンニ、男性の場合はヒョン/ヌナ）は年下の面倒を見ることが期待され、年下の人は言葉遣いや行動で敬意を示します。",
      examplesTitle: "韓国年齢の例とシナリオ",
      examplesP1: "例えば、1999年12月31日に生まれたとしましょう。誕生日の時点で満年齢は0歳、韓国年齢は1歳です。翌日の2000年1月1日、満年齢はまだ0歳ですが、韓国年齢は2歳になります！この極端な例は、韓国年齢が最大2歳多くなることを示しています。K-popファンはお気に入りのアイドルの年齢を比較する際にこの点に気づくことがよくあります — 異なる年に生まれた2人のメンバーは、数ヶ月しか違わなくても韓国年齢では1歳差になります。",
      tipsTitle: "K-popファンと韓国旅行者のためのヒント",
      tipsP1: "お気に入りのK-popアイドルについて話すとき、ファンが年齢を違う形で言及するのを聞くことがあるでしょう。BTS、BLACKPINK、aespa、NewJeansのメンバーはみな韓国年齢の体系で育ちました。韓国旅行中なら、韓国年齢を知っていることは楽しい会話のきっかけになります。「제 한국 나이는 ___살이에요」（私の韓国年齢は___歳です）と韓国語で言ってみてください。素晴らしいアイスブレイカーになり、文化的な理解を示せます！",
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
        {
          q: "「동갑」（トンガプ）とはどういう意味ですか？",
          a: "동갑は「同い年」を意味し、同じ年に生まれた人を指します。韓国文化では、동갑の人とは即座に絆が生まれ、気軽に話すことができ、お互いを対等に扱えます。K-popファンはお気に入りのアイドルと동갑かどうかをよくチェックします！",
        },
        {
          q: "K-popアイドルはどうやって年齢を計算しますか？",
          a: "K-popアイドルは韓国年齢の体系で育ったため、バラエティ番組やインタビューで年齢に言及する際、韓国年齢を使うことがよくあります。ただし、海外ファン向けに事務所が満年齢を記載することもあります。当計算機で直接比較できます！",
        },
        {
          q: "「학번」（ハクボン）とは何ですか？",
          a: "학번は大学の入学年度を指し、韓国の社会文化で一般的に使われます。例えば、2020年に大学に入学した場合、학번は「20학번」です。韓国人が先輩後輩関係と社会的階層を確立するもう一つの方法です。",
        },
        {
          q: "他の国も似たような年齢体系を使っていますか？",
          a: "歴史的に、中国、日本、ベトナム、モンゴルも似たような年齢計算体系を使用していました。しかし、これらの国のほとんどはすでに国際的な体系に移行しています。韓国は2023年に公式に変更した最後の国の一つです。",
        },
        {
          q: "なぜ韓国では生まれ年がそれほど重要なのですか？",
          a: "韓国では、生まれ年が社会的関係を決定します。同じ年に生まれた人は同い年（동갑）であり、たった1年の差でも年上の人には敬語を使わなければなりません。だから韓国人は「何歳ですか？」ではなく「何年生まれですか？」と聞くのです。",
        },
        {
          q: "韓国の干支（띠）とは何ですか？",
          a: "韓国は中国の干支に似た12年周期の干支（띠、ッティ）を使用しています。各年は動物と関連付けられています：ネズミ、ウシ、トラ、ウサギ、リュウ、ヘビ、ウマ、ヒツジ、サル、トリ、イヌ、ブタ。韓国人は生まれ年について話す際に、自分の干支の動物をよく言及します。",
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
      howP2: "这个体系根植于古代东亚传统，母亲怀孕期间被视为生命的第一年。所有人在新年一起长一岁，也反映了韩国文化的集体主义特征——社区的里程碑是大家一起庆祝的，而非个人单独庆祝。",
      howFormula: "\u97e9\u56fd\u5e74\u9f84 = \u5f53\u524d\u5e74\u4efd \u2212 \u51fa\u751f\u5e74\u4efd + 1",
      vsTitle: "\u97e9\u56fd\u5e74\u9f84 vs. \u56fd\u9645\u5e74\u9f84",
      vsP1: "\u56fd\u9645\u5e74\u9f84\uff08\ub9cc \ub098\uc774\uff09\u8ba1\u7b97\u7684\u662f\u4f60\u51fa\u751f\u4ee5\u6765\u5b9e\u9645\u6d3b\u4e86\u591a\u5c11\u4e2a\u5b8c\u6574\u7684\u5e74\u4efd\u3002\u4ece0\u5c81\u5f00\u59cb\uff0c\u6bcf\u4e2a\u751f\u65e5\u589e\u52a01\u5c81\u3002\u800c\u97e9\u56fd\u5e74\u9f84\u4ece1\u5c81\u5f00\u59cb\uff0c\u6bcf\u5e74\u5143\u65e6\u589e\u957f\u3002",
      vsP2: "还有第三种体系叫\u201c年龄\u201d（연 나이，yeon-nai），计算方式是当前年份减去出生年份。以前在韩国用于学校入学和服兵役。了解这些不同的体系有助于你更好地理解韩国文化中与年龄相关的对话和传统。",
      reformTitle: "2023\u5e74\u97e9\u56fd\u5e74\u9f84\u6539\u9769",
      reformP1: "\u81ea2023\u5e746\u670828\u65e5\u8d77\uff0c\u97e9\u56fd\u5728\u6240\u6709\u6cd5\u5f8b\u548c\u884c\u653f\u4e8b\u52a1\u4e2d\u6b63\u5f0f\u91c7\u7528\u56fd\u9645\u5e74\u9f84\u5236\u5ea6\u3002\u4e0d\u8fc7\uff0c\u97e9\u56fd\u5e74\u9f84\u5728\u65e5\u5e38\u5bf9\u8bdd\u4e2d\u4ecd\u7136\u88ab\u5e7f\u6cdb\u4f7f\u7528\u3002",
      reformP2: "这项改革的推出是为了减少多种年龄计算体系造成的混乱。在改革之前，韩国人可能会根据不同场合说出不同的年龄——法律文件用一个年龄，社交场合用另一个，学校入学又用另一个。统一的体系简化了事情，但文化习惯的改变需要时间。",
    },
    guide: {
      title: "韩国年龄完全指南",
      cultureTitle: "韩国年龄在文化和社会中的作用",
      cultureP1: "年龄在韩国文化中扮演着核心角色。它决定了你如何与他人交谈、使用什么敬语，甚至在餐桌上谁来倒酒。韩国人认识新朋友时，最先问的问题之一就是\u201c你是哪年出生的？\u201d（몇 년생이세요?）。这并不被认为是无礼的——这对于确定对话中适当的礼貌程度是必不可少的。",
      cultureP2: "如果两个人出生在同一年，他们被视为同龄人（동갑，dong-gap），可以用非正式语言交谈。即使只差一岁，也会完全改变关系的动态。年长者（对女性来说是오빠/언니，对男性来说是형/누나）应该照顾年幼者，而年幼者则通过语言和行为表达尊重。",
      examplesTitle: "韩国年龄示例和场景",
      examplesP1: "假设你出生于1999年12月31日。在你生日那天，你的国际年龄是0岁，韩国年龄是1岁。第二天，即2000年1月1日，你的国际年龄仍然是0岁，但韩国年龄跳到了2岁！这个极端的例子展示了韩国年龄最多可以比国际年龄大2岁。K-pop粉丝在比较偶像年龄时经常会注意到这一点——出生在不同年份的两个成员，即使只差几个月，韩国年龄也会差1岁。",
      tipsTitle: "K-pop粉丝和韩国旅行者的小贴士",
      tipsP1: "当谈论你最喜欢的K-pop偶像时，你可能会听到粉丝们以不同的方式提到年龄。BTS、BLACKPINK、aespa和NewJeans的成员都是在韩国年龄体系下长大的。如果你正在韩国旅行，知道自己的韩国年龄可以成为有趣的话题。试着用韩语说\u201c제 한국 나이는 ___살이에요\u201d（我的韩国年龄是___岁）。这是很好的破冰话题，也展示了你对文化的了解！",
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
        {
          q: "\u201c동갑\u201d（dong-gap）是什么意思？",
          a: "동갑意为\u201c同龄\u201d，指的是出生在同一年的人。在韩国文化中，与某人同龄会产生一种即时的纽带——你们可以随意交谈，彼此平等对待。K-pop粉丝经常查看自己是否与喜欢的偶像同龄！",
        },
        {
          q: "K-pop偶像是怎么计算年龄的？",
          a: "K-pop偶像在韩国年龄体系下长大，所以当他们在综艺节目或采访中提到年龄时，通常使用韩国年龄。不过，为了方便国际粉丝，经纪公司有时会列出国际年龄。我们的计算器可以帮你直接比较！",
        },
        {
          q: "\u201c학번\u201d（hakbeon）是什么？",
          a: "학번指的是大学入学年份，在韩国社会文化中很常用。例如，如果你2020年进入大学，你的학번就是\u201c20학번\u201d。这是韩国人建立前后辈关系和社会等级的另一种方式。",
        },
        {
          q: "其他国家也使用类似的年龄体系吗？",
          a: "历史上，中国、日本、越南和蒙古都使用过类似的年龄计算体系。然而，这些国家大多已经过渡到了国际体系。韩国是2023年最后一批正式更改的国家之一。",
        },
        {
          q: "为什么出生年份在韩国如此重要？",
          a: "在韩国，出生年份决定了你的社会关系。同年出生的人是同龄人（동갑），即使只差一岁也意味着要对年长者使用敬语。这就是为什么韩国人问\u201c你是哪年出生的？\u201d而不是\u201c你几岁？\u201d",
        },
        {
          q: "韩国生肖（띠）是什么？",
          a: "韩国使用与中国生肖类似的12年周期生肖，称为띠（tti）。每年与一种动物相关联：鼠、牛、虎、兔、龙、蛇、马、羊、猴、鸡、狗、猪。韩国人在讨论出生年份时，经常会提到自己的生肖动物。",
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
      howP2: "ระบบนี้มีรากฐานจากประเพณีเอเชียตะวันออกโบราณ ซึ่งถือว่าช่วงเวลาที่อยู่ในครรภ์มารดาเป็นปีแรกของชีวิต การที่ทุกคนเพิ่มอายุพร้อมกันในวันปีใหม่ยังสะท้อนถึงลักษณะรวมหมู่ของวัฒนธรรมเกาหลี ที่เฉลิมฉลองเหตุการณ์สำคัญร่วมกันแทนที่จะเป็นรายบุคคล",
      howFormula: "\u0e2d\u0e32\u0e22\u0e38\u0e40\u0e01\u0e32\u0e2b\u0e25\u0e35 = \u0e1b\u0e35\u0e1b\u0e31\u0e08\u0e08\u0e38\u0e1a\u0e31\u0e19 \u2212 \u0e1b\u0e35\u0e40\u0e01\u0e34\u0e14 + 1",
      vsTitle: "\u0e2d\u0e32\u0e22\u0e38\u0e40\u0e01\u0e32\u0e2b\u0e25\u0e35 vs. \u0e2d\u0e32\u0e22\u0e38\u0e2a\u0e32\u0e01\u0e25",
      vsP1: "\u0e2d\u0e32\u0e22\u0e38\u0e2a\u0e32\u0e01\u0e25 (\ub9cc \ub098\uc774) \u0e19\u0e31\u0e1a\u0e08\u0e33\u0e19\u0e27\u0e19\u0e1b\u0e35\u0e40\u0e15\u0e47\u0e21\u0e17\u0e35\u0e48\u0e04\u0e38\u0e13\u0e21\u0e35\u0e0a\u0e35\u0e27\u0e34\u0e15\u0e2d\u0e22\u0e39\u0e48\u0e15\u0e31\u0e49\u0e07\u0e41\u0e15\u0e48\u0e40\u0e01\u0e34\u0e14 \u0e40\u0e23\u0e34\u0e48\u0e21\u0e17\u0e35\u0e48 0 \u0e41\u0e25\u0e30\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e02\u0e36\u0e49\u0e19\u0e1b\u0e35\u0e25\u0e30\u0e04\u0e23\u0e31\u0e49\u0e07\u0e43\u0e19\u0e27\u0e31\u0e19\u0e40\u0e01\u0e34\u0e14",
      vsP2: "ยังมีระบบที่สามเรียกว่า 'อายุปี' (연 나이, ยอน-นาอิ) ซึ่งคำนวณโดยเอาปีปัจจุบันลบปีเกิด ก่อนหน้านี้ใช้สำหรับการเข้าเรียนและการเกณฑ์ทหารในเกาหลีใต้ การเข้าใจระบบต่างๆ เหล่านี้จะช่วยให้คุณเข้าใจบทสนทนาและประเพณีเกี่ยวกับอายุในวัฒนธรรมเกาหลีได้ดียิ่งขึ้น",
      reformTitle: "\u0e01\u0e32\u0e23\u0e1b\u0e0f\u0e34\u0e23\u0e39\u0e1b\u0e2d\u0e32\u0e22\u0e38\u0e40\u0e01\u0e32\u0e2b\u0e25\u0e35 \u0e1b\u0e35 2023",
      reformP1: "\u0e15\u0e31\u0e49\u0e07\u0e41\u0e15\u0e48\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48 28 \u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19 2023 \u0e40\u0e01\u0e32\u0e2b\u0e25\u0e35\u0e43\u0e15\u0e49\u0e44\u0e14\u0e49\u0e19\u0e33\u0e23\u0e30\u0e1a\u0e1a\u0e2d\u0e32\u0e22\u0e38\u0e2a\u0e32\u0e01\u0e25\u0e21\u0e32\u0e43\u0e0a\u0e49\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e40\u0e1b\u0e47\u0e19\u0e17\u0e32\u0e07\u0e01\u0e32\u0e23 \u0e41\u0e15\u0e48\u0e2d\u0e32\u0e22\u0e38\u0e40\u0e01\u0e32\u0e2b\u0e25\u0e35\u0e22\u0e31\u0e07\u0e04\u0e07\u0e43\u0e0a\u0e49\u0e01\u0e31\u0e19\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e41\u0e1e\u0e23\u0e48\u0e2b\u0e25\u0e32\u0e22\u0e43\u0e19\u0e0a\u0e35\u0e27\u0e34\u0e15\u0e1b\u0e23\u0e30\u0e08\u0e33\u0e27\u0e31\u0e19",
      reformP2: "การปฏิรูปนี้ถูกนำมาใช้เพื่อลดความสับสนที่เกิดจากการมีระบบนับอายุหลายแบบ ก่อนการเปลี่ยนแปลง ชาวเกาหลีอาจบอกอายุที่แตกต่างกันขึ้นอยู่กับบริบท — อายุหนึ่งสำหรับเอกสารทางกฎหมาย อีกอายุหนึ่งสำหรับสถานการณ์ทางสังคม และอีกอายุหนึ่งสำหรับการเข้าเรียน ระบบที่เป็นหนึ่งเดียวช่วยทำให้สิ่งต่างๆ ง่ายขึ้น แต่นิสัยทางวัฒนธรรมต้องใช้เวลาในการเปลี่ยนแปลง",
    },
    guide: {
      title: "คู่มือฉบับสมบูรณ์เรื่องอายุเกาหลี",
      cultureTitle: "อายุเกาหลีในวัฒนธรรมและสังคม",
      cultureP1: "อายุมีบทบาทสำคัญในวัฒนธรรมเกาหลี มันกำหนดว่าคุณจะพูดกับใครอย่างไร ใช้คำเรียกแบบไหน และแม้แต่ใครเป็นคนรินเครื่องดื่มบนโต๊ะอาหาร เมื่อชาวเกาหลีพบคนใหม่ คำถามแรกๆ ที่พวกเขาถามคือ 'คุณเกิดปีอะไร?' (몇 년생이세요?) ซึ่งไม่ถือว่าเป็นการเสียมารยาท แต่จำเป็นสำหรับการกำหนดระดับความเป็นทางการที่เหมาะสมในการสนทนา",
      cultureP2: "ถ้าสองคนเกิดปีเดียวกัน พวกเขาถือว่าอายุเท่ากัน (동갑, ทงกับ) และสามารถพูดจาไม่เป็นทางการกับกันได้ แม้แต่ความแตกต่างเพียงหนึ่งปีก็สามารถเปลี่ยนพลวัตของความสัมพันธ์ได้ทั้งหมด คนที่อายุมากกว่า (โอปป้า/อนนี่ สำหรับผู้หญิง, ฮยอง/นูน่า สำหรับผู้ชาย) ควรดูแลน้อง ขณะที่น้องแสดงความเคารพผ่านภาษาและพฤติกรรม",
      examplesTitle: "ตัวอย่างและสถานการณ์อายุเกาหลี",
      examplesP1: "สมมติว่าคุณเกิดวันที่ 31 ธันวาคม 1999 ในวันเกิดของคุณ อายุสากลคือ 0 ปีและอายุเกาหลีคือ 1 ปี วันถัดมาคือ 1 มกราคม 2000 อายุสากลยังคงเป็น 0 แต่อายุเกาหลีกระโดดเป็น 2! ตัวอย่างสุดขั้วนี้แสดงให้เห็นว่าอายุเกาหลีสามารถมากกว่าได้ถึง 2 ปี แฟน K-pop มักสังเกตเห็นเรื่องนี้เมื่อเปรียบเทียบอายุไอดอลที่ชื่นชอบ — สมาชิกสองคนที่เกิดต่างปีแม้ห่างกันเพียงไม่กี่เดือนก็จะมีอายุเกาหลีต่างกัน 1 ปี",
      tipsTitle: "เคล็ดลับสำหรับแฟน K-pop และนักท่องเที่ยวเกาหลี",
      tipsP1: "เมื่อพูดถึงไอดอล K-pop ที่คุณชื่นชอบ คุณอาจได้ยินแฟนๆ อ้างถึงอายุแตกต่างกัน สมาชิก BTS, BLACKPINK, aespa และ NewJeans ล้วนเติบโตมากับระบบอายุเกาหลี หากคุณกำลังเดินทางไปเกาหลีใต้ การรู้อายุเกาหลีของคุณเป็นเรื่องสนุกที่จะเริ่มต้นบทสนทนา ลองพูดว่า '제 한국 나이는 ___살이에요' (อายุเกาหลีของฉันคือ ___ปี) เป็นภาษาเกาหลี เป็นการทำลายน้ำแข็งที่ดีและแสดงความเข้าใจทางวัฒนธรรม!",
    },
    faq: {
      title: "\u0e04\u0e33\u0e16\u0e32\u0e21\u0e17\u0e35\u0e48\u0e1e\u0e1a\u0e1a\u0e48\u0e2d\u0e22",
      items: [
        { q: "\u0e17\u0e33\u0e44\u0e21\u0e09\u0e31\u0e19\u0e16\u0e36\u0e07\u0e2d\u0e32\u0e22\u0e38\u0e21\u0e32\u0e01\u0e01\u0e27\u0e48\u0e32\u0e43\u0e19\u0e40\u0e01\u0e32\u0e2b\u0e25\u0e35?", a: "\u0e40\u0e1e\u0e23\u0e32\u0e30\u0e23\u0e30\u0e1a\u0e1a\u0e2d\u0e32\u0e22\u0e38\u0e40\u0e01\u0e32\u0e2b\u0e25\u0e35\u0e19\u0e31\u0e1a\u0e0a\u0e48\u0e27\u0e07\u0e40\u0e27\u0e25\u0e32\u0e43\u0e19\u0e04\u0e23\u0e23\u0e20\u0e4c\u0e40\u0e1b\u0e47\u0e19\u0e1b\u0e35\u0e41\u0e23\u0e01 \u0e41\u0e25\u0e30\u0e17\u0e38\u0e01\u0e04\u0e19\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e2d\u0e32\u0e22\u0e38\u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e01\u0e31\u0e19\u0e43\u0e19\u0e27\u0e31\u0e19\u0e1b\u0e35\u0e43\u0e2b\u0e21\u0e48" },
        { q: "\u0e2d\u0e32\u0e22\u0e38\u0e40\u0e01\u0e32\u0e2b\u0e25\u0e35\u0e22\u0e31\u0e07\u0e04\u0e07\u0e43\u0e0a\u0e49\u0e2d\u0e22\u0e39\u0e48\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48?", a: "\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e40\u0e1b\u0e47\u0e19\u0e17\u0e32\u0e07\u0e01\u0e32\u0e23 \u0e40\u0e01\u0e32\u0e2b\u0e25\u0e35\u0e43\u0e15\u0e49\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e21\u0e32\u0e43\u0e0a\u0e49\u0e2d\u0e32\u0e22\u0e38\u0e2a\u0e32\u0e01\u0e25\u0e43\u0e19\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19 2023 \u0e41\u0e15\u0e48\u0e43\u0e19\u0e0a\u0e35\u0e27\u0e34\u0e15\u0e1b\u0e23\u0e30\u0e08\u0e33\u0e27\u0e31\u0e19\u0e22\u0e31\u0e07\u0e43\u0e0a\u0e49\u0e2d\u0e22\u0e39\u0e48" },
        { q: "\u0e2d\u0e32\u0e22\u0e38\u0e40\u0e01\u0e32\u0e2b\u0e25\u0e35\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e21\u0e32\u0e01\u0e01\u0e27\u0e48\u0e32\u0e2d\u0e32\u0e22\u0e38\u0e2a\u0e32\u0e01\u0e25 2 \u0e1b\u0e35\u0e44\u0e14\u0e49\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48?", a: "\u0e44\u0e14\u0e49! \u0e16\u0e49\u0e32\u0e1b\u0e35\u0e19\u0e35\u0e49\u0e27\u0e31\u0e19\u0e40\u0e01\u0e34\u0e14\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e21\u0e32\u0e16\u0e36\u0e07 \u0e2d\u0e32\u0e22\u0e38\u0e40\u0e01\u0e32\u0e2b\u0e25\u0e35\u0e08\u0e30\u0e21\u0e32\u0e01\u0e01\u0e27\u0e48\u0e32 2 \u0e1b\u0e35" },
        { q: "\"\ub9cc \ub098\uc774\" (\u0e21\u0e31\u0e19-\u0e19\u0e32\u0e2d\u0e34) \u0e04\u0e37\u0e2d\u0e2d\u0e30\u0e44\u0e23?", a: "\ub9cc \ub098\uc774 \u0e41\u0e1b\u0e25\u0e15\u0e23\u0e07\u0e15\u0e31\u0e27\u0e27\u0e48\u0e32 \"\u0e2d\u0e32\u0e22\u0e38\u0e40\u0e15\u0e47\u0e21\" \u0e2b\u0e21\u0e32\u0e22\u0e16\u0e36\u0e07\u0e23\u0e30\u0e1a\u0e1a\u0e19\u0e31\u0e1a\u0e2d\u0e32\u0e22\u0e38\u0e2a\u0e32\u0e01\u0e25" },
        { q: '"동갑" (ทงกับ) หมายความว่าอะไร?', a: '동갑 หมายถึง "อายุเท่ากัน" หมายถึงคนที่เกิดปีเดียวกัน ในวัฒนธรรมเกาหลี การเป็นทงกับกับใครสักคนสร้างความผูกพันทันที — คุณสามารถพูดจาไม่เป็นทางการและปฏิบัติต่อกันอย่างเท่าเทียม แฟน K-pop มักตรวจสอบว่าตัวเองเป็นทงกับกับไอดอลที่ชื่นชอบหรือไม่!' },
        { q: "ไอดอล K-pop คำนวณอายุอย่างไร?", a: "ไอดอล K-pop เติบโตมากับระบบอายุเกาหลี ดังนั้นเมื่อพวกเขาพูดถึงอายุในรายการวาไรตี้หรือสัมภาษณ์ มักใช้อายุเกาหลี อย่างไรก็ตาม สำหรับแฟนต่างชาติ ค่ายมักจะระบุอายุสากล เครื่องคำนวณของเราช่วยให้คุณเปรียบเทียบได้โดยตรง!" },
        { q: '"학번" (ฮักบอน) คืออะไร?', a: '학번 หมายถึงปีที่เข้ามหาวิทยาลัย และใช้กันทั่วไปในวัฒนธรรมสังคมเกาหลี ตัวอย่างเช่น ถ้าคุณเข้ามหาวิทยาลัยในปี 2020 학번 ของคุณคือ "20학번" เป็นอีกวิธีหนึ่งที่ชาวเกาหลีใช้กำหนดลำดับอาวุโสและลำดับชั้นทางสังคม' },
        { q: "ประเทศอื่นใช้ระบบอายุคล้ายกันหรือไม่?", a: "ในอดีต จีน ญี่ปุ่น เวียดนาม และมองโกเลียใช้ระบบนับอายุที่คล้ายกัน อย่างไรก็ตาม ประเทศเหล่านี้ส่วนใหญ่ได้เปลี่ยนไปใช้ระบบสากลแล้ว เกาหลีใต้เป็นหนึ่งในประเทศสุดท้ายที่เปลี่ยนอย่างเป็นทางการในปี 2023" },
        { q: "ทำไมปีเกิดถึงสำคัญมากในเกาหลี?", a: "ในเกาหลี ปีเกิดกำหนดความสัมพันธ์ทางสังคมของคุณ คนที่เกิดปีเดียวกันเป็นเพื่อนรุ่นเดียวกัน (동갑) แม้ต่างกันแค่หนึ่งปีก็ต้องใช้ภาษาทางการกับคนที่อายุมากกว่า นี่คือเหตุผลที่ชาวเกาหลีถามว่า 'คุณเกิดปีอะไร?' แทนที่จะถามว่า 'คุณอายุเท่าไหร่?'" },
        { q: "นักษัตรเกาหลี (띠) คืออะไร?", a: "เกาหลีใช้ระบบนักษัตร 12 ปี คล้ายกับนักษัตรจีน เรียกว่า 띠 (ตี) แต่ละปีเชื่อมโยงกับสัตว์: หนู วัว เสือ กระต่าย มังกร งู ม้า แพะ ลิง ไก่ สุนัข และหมู ชาวเกาหลีมักพูดถึงสัตว์นักษัตรของตนเมื่อพูดคุยเรื่องปีเกิด" },
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
      howP2: "Hệ thống này bắt nguồn từ truyền thống Đông Á cổ đại, nơi thời gian trong bụng mẹ được coi là năm đầu tiên của cuộc đời. Việc cùng nhau tăng tuổi vào ngày Tết Dương lịch cũng phản ánh bản chất tập thể của văn hóa Hàn Quốc, nơi các cột mốc cộng đồng được kỷ niệm cùng nhau thay vì từng cá nhân.",
      howFormula: "Tu\u1ed5i H\u00e0n Qu\u1ed1c = N\u0103m hi\u1ec7n t\u1ea1i \u2212 N\u0103m sinh + 1",
      vsTitle: "Tu\u1ed5i H\u00e0n Qu\u1ed1c vs. Tu\u1ed5i Qu\u1ed1c T\u1ebf",
      vsP1: "Tu\u1ed5i qu\u1ed1c t\u1ebf (\ub9cc \ub098\uc774) \u0111\u1ebfm s\u1ed1 n\u0103m \u0111\u1ea7y \u0111\u1ee7 b\u1ea1n \u0111\u00e3 s\u1ed1ng k\u1ec3 t\u1eeb khi sinh. B\u1eaft \u0111\u1ea7u t\u1eeb 0 v\u00e0 t\u0103ng 1 v\u00e0o m\u1ed7i ng\u00e0y sinh. Ng\u01b0\u1ee3c l\u1ea1i, tu\u1ed5i H\u00e0n Qu\u1ed1c b\u1eaft \u0111\u1ea7u t\u1eeb 1 v\u00e0 t\u0103ng m\u1ed7i ng\u00e0y T\u1ebft D\u01b0\u01a1ng l\u1ecbch.",
      vsP2: "Còn có hệ thống thứ ba gọi là 'tuổi năm' (연 나이, yeon-nai), được tính bằng năm hiện tại trừ năm sinh. Trước đây hệ thống này được sử dụng cho việc nhập học và nghĩa vụ quân sự ở Hàn Quốc. Hiểu được các hệ thống khác nhau này giúp bạn nắm bắt tốt hơn các cuộc trò chuyện và truyền thống liên quan đến tuổi tác trong văn hóa Hàn Quốc.",
      reformTitle: "C\u1ea3i c\u00e1ch tu\u1ed5i H\u00e0n Qu\u1ed1c n\u0103m 2023",
      reformP1: "T\u1eeb ng\u00e0y 28 th\u00e1ng 6 n\u0103m 2023, H\u00e0n Qu\u1ed1c ch\u00ednh th\u1ee9c \u00e1p d\u1ee5ng h\u1ec7 th\u1ed1ng tu\u1ed5i qu\u1ed1c t\u1ebf cho t\u1ea5t c\u1ea3 m\u1ee5c \u0111\u00edch ph\u00e1p l\u00fd. Tuy nhi\u00ean, tu\u1ed5i H\u00e0n Qu\u1ed1c v\u1eabn \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng r\u1ed9ng r\u00e3i trong giao ti\u1ebfp h\u00e0ng ng\u00e0y.",
      reformP2: "Cải cách được đưa ra nhằm giảm bớt sự nhầm lẫn do có nhiều hệ thống tính tuổi. Trước khi thay đổi, người Hàn Quốc có thể nói tuổi khác nhau tùy theo ngữ cảnh — một tuổi cho giấy tờ pháp lý, một tuổi khác cho các tình huống xã hội, và một tuổi khác nữa cho việc nhập học. Hệ thống thống nhất giúp đơn giản hóa mọi thứ, nhưng thói quen văn hóa cần thời gian để thay đổi.",
    },
    guide: {
      title: "Hướng Dẫn Đầy Đủ Về Tuổi Hàn Quốc",
      cultureTitle: "Tuổi Hàn Quốc Trong Văn Hóa và Xã Hội",
      cultureP1: "Tuổi tác đóng vai trò trung tâm trong văn hóa Hàn Quốc. Nó quyết định cách bạn nói chuyện với ai đó, dùng kính ngữ nào, và thậm chí ai rót đồ uống trên bàn ăn. Khi người Hàn gặp ai đó lần đầu, một trong những câu hỏi đầu tiên họ hỏi là 'Bạn sinh năm nào?' (몇 년생이세요?). Điều này không bị coi là bất lịch sự — nó cần thiết để xác định mức độ trang trọng phù hợp trong cuộc trò chuyện.",
      cultureP2: "Nếu hai người sinh cùng năm, họ được coi là đồng tuổi (동갑, dong-gap) và có thể nói chuyện thân mật với nhau. Thậm chí chênh lệch một năm cũng có thể thay đổi hoàn toàn động lực của mối quan hệ. Người lớn tuổi hơn (oppa/unni cho nữ, hyung/nuna cho nam) được kỳ vọng chăm sóc người nhỏ tuổi hơn, trong khi người trẻ thể hiện sự tôn trọng qua ngôn ngữ và hành vi.",
      examplesTitle: "Ví Dụ và Tình Huống Về Tuổi Hàn Quốc",
      examplesP1: "Giả sử bạn sinh ngày 31 tháng 12 năm 1999. Vào ngày sinh nhật, tuổi quốc tế của bạn là 0 và tuổi Hàn Quốc là 1. Ngay ngày hôm sau, 1 tháng 1 năm 2000, tuổi quốc tế vẫn là 0, nhưng tuổi Hàn Quốc nhảy lên 2! Ví dụ cực đoan này cho thấy tuổi Hàn Quốc có thể nhiều hơn tới 2 tuổi. Fan K-pop thường nhận thấy điều này khi so sánh tuổi của các idol yêu thích — hai thành viên sinh cách nhau vài tháng nhưng khác năm sẽ có tuổi Hàn chênh 1.",
      tipsTitle: "Mẹo Cho Fan K-pop và Du Khách Hàn Quốc",
      tipsP1: "Khi nói về các idol K-pop yêu thích, bạn có thể nghe fan đề cập tuổi theo cách khác nhau. Các thành viên BTS, BLACKPINK, aespa và NewJeans đều lớn lên với hệ thống tuổi Hàn Quốc. Nếu bạn đang du lịch Hàn Quốc, biết tuổi Hàn của mình có thể là một chủ đề trò chuyện thú vị. Hãy thử nói '제 한국 나이는 ___살이에요' (Tuổi Hàn Quốc của tôi là ___) bằng tiếng Hàn. Đó là cách phá vỡ bầu không khí tuyệt vời và thể hiện sự hiểu biết văn hóa!",
    },
    faq: {
      title: "C\u00e2u H\u1ecfi Th\u01b0\u1eddng G\u1eb7p",
      items: [
        { q: "T\u1ea1i sao t\u00f4i l\u1edbn tu\u1ed5i h\u01a1n \u1edf H\u00e0n Qu\u1ed1c?", a: "V\u00ec h\u1ec7 th\u1ed1ng tu\u1ed5i H\u00e0n Qu\u1ed1c t\u00ednh th\u1eddi gian trong b\u1ee5ng m\u1eb9 l\u00e0 n\u0103m \u0111\u1ea7u ti\u00ean, v\u00e0 m\u1ecdi ng\u01b0\u1eddi c\u00f9ng t\u0103ng tu\u1ed5i v\u00e0o ng\u00e0y T\u1ebft." },
        { q: "Tu\u1ed5i H\u00e0n Qu\u1ed1c c\u00f2n \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng kh\u00f4ng?", a: "Ch\u00ednh th\u1ee9c th\u00ec H\u00e0n Qu\u1ed1c \u0111\u00e3 chuy\u1ec3n sang tu\u1ed5i qu\u1ed1c t\u1ebf v\u00e0o th\u00e1ng 6 n\u0103m 2023. Nh\u01b0ng nhi\u1ec1u ng\u01b0\u1eddi H\u00e0n v\u1eabn d\u00f9ng tu\u1ed5i H\u00e0n trong giao ti\u1ebfp." },
        { q: "Tu\u1ed5i H\u00e0n c\u00f3 th\u1ec3 nhi\u1ec1u h\u01a1n tu\u1ed5i qu\u1ed1c t\u1ebf 2 tu\u1ed5i kh\u00f4ng?", a: "C\u00f3! N\u1ebfu sinh nh\u1eadt ch\u01b0a \u0111\u1ebfn trong n\u0103m nay, tu\u1ed5i H\u00e0n c\u00f3 th\u1ec3 nhi\u1ec1u h\u01a1n 2 tu\u1ed5i." },
        { q: "\"\ub9cc \ub098\uc774\" (man-nai) l\u00e0 g\u00ec?", a: "\ub9cc \ub098\uc774 ngh\u0129a l\u00e0 \"tu\u1ed5i \u0111\u1ea7y \u0111\u1ee7\" v\u00e0 ch\u1ec9 h\u1ec7 th\u1ed1ng t\u00ednh tu\u1ed5i qu\u1ed1c t\u1ebf." },
        { q: '"동갑" (dong-gap) có nghĩa là gì?', a: '동갑 có nghĩa là "cùng tuổi" và chỉ những người sinh cùng năm. Trong văn hóa Hàn Quốc, khi bạn là dong-gap với ai đó, bạn ngay lập tức có sự gắn kết — có thể nói chuyện thân mật và đối xử bình đẳng. Fan K-pop thường kiểm tra xem mình có dong-gap với idol yêu thích không!' },
        { q: "Idol K-pop tính tuổi như thế nào?", a: "Idol K-pop lớn lên với hệ thống tuổi Hàn Quốc, nên khi nhắc đến tuổi trong các chương trình giải trí hay phỏng vấn, họ thường dùng tuổi Hàn. Tuy nhiên, để phục vụ fan quốc tế, các công ty giải trí đôi khi liệt kê tuổi quốc tế. Công cụ tính của chúng tôi giúp bạn so sánh trực tiếp!" },
        { q: '"학번" (hakbeon) là gì?', a: '학번 chỉ năm nhập học đại học và được sử dụng phổ biến trong văn hóa xã hội Hàn Quốc. Ví dụ, nếu bạn vào đại học năm 2020, hakbeon của bạn là "20학번". Đây là một cách khác mà người Hàn thiết lập thứ bậc xã hội và mối quan hệ tiền bối-hậu bối.' },
        { q: "Các nước khác có dùng hệ thống tuổi tương tự không?", a: "Trong lịch sử, Trung Quốc, Nhật Bản, Việt Nam và Mông Cổ đều sử dụng hệ thống tính tuổi tương tự. Tuy nhiên, hầu hết các nước này đã chuyển sang hệ thống quốc tế. Hàn Quốc là một trong những nước cuối cùng chính thức thay đổi vào năm 2023." },
        { q: "Tại sao năm sinh lại quan trọng đến vậy ở Hàn Quốc?", a: 'Ở Hàn Quốc, năm sinh quyết định các mối quan hệ xã hội. Những người sinh cùng năm là bạn đồng trang lứa (동갑), trong khi chỉ chênh một năm cũng có nghĩa phải dùng ngôn ngữ trang trọng với người lớn tuổi hơn. Đó là lý do người Hàn hỏi "Bạn sinh năm nào?" thay vì "Bạn bao nhiêu tuổi?"' },
        { q: "Cung hoàng đạo Hàn Quốc (띠) là gì?", a: "Hàn Quốc sử dụng hệ thống 12 con giáp tương tự như Trung Quốc, gọi là 띠 (tti). Mỗi năm gắn liền với một con vật: Chuột, Trâu, Hổ, Mèo, Rồng, Rắn, Ngựa, Dê, Khỉ, Gà, Chó và Lợn. Người Hàn thường đề cập đến con giáp của mình khi thảo luận về năm sinh." },
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
      howP2: "Sistem ini berakar pada tradisi Asia Timur kuno, di mana waktu yang dihabiskan dalam kandungan dianggap sebagai tahun pertama kehidupan. Ulang tahun bersama di Tahun Baru juga mencerminkan sifat kolektivis budaya Korea, di mana pencapaian komunitas dirayakan bersama, bukan secara individual.",
      howFormula: "Usia Korea = Tahun Sekarang \u2212 Tahun Lahir + 1",
      vsTitle: "Usia Korea vs. Usia Internasional",
      vsP1: "Usia internasional (\ub9cc \ub098\uc774) menghitung jumlah tahun penuh sejak lahir. Dimulai dari 0 dan bertambah 1 setiap ulang tahun. Sebaliknya, usia Korea dimulai dari 1 dan bertambah setiap Tahun Baru.",
      vsP2: "Ada juga sistem ketiga yang disebut 'usia tahun' (연 나이, yeon-nai), yang dihitung dengan tahun saat ini dikurangi tahun lahir. Sebelumnya sistem ini digunakan untuk pendaftaran sekolah dan wajib militer di Korea Selatan. Memahami berbagai sistem ini membantu Anda memahami percakapan dan tradisi terkait usia dalam budaya Korea.",
      reformTitle: "Reformasi Usia Korea 2023",
      reformP1: "Sejak 28 Juni 2023, Korea Selatan secara resmi mengadopsi sistem usia internasional untuk semua tujuan hukum. Namun, usia Korea masih banyak digunakan dalam percakapan sehari-hari.",
      reformP2: "Reformasi ini diperkenalkan untuk mengurangi kebingungan yang disebabkan oleh beberapa sistem penghitungan usia. Sebelum perubahan, orang Korea mungkin menyatakan usia yang berbeda tergantung konteksnya — satu untuk dokumen hukum, yang lain untuk situasi sosial, dan yang lain lagi untuk pendaftaran sekolah. Sistem yang seragam menyederhanakan hal-hal tersebut, tetapi kebiasaan budaya membutuhkan waktu untuk berubah.",
    },
    guide: {
      title: "Panduan Lengkap Usia Korea",
      cultureTitle: "Usia Korea dalam Budaya dan Masyarakat",
      cultureP1: "Usia memainkan peran sentral dalam budaya Korea. Usia menentukan cara Anda berbicara dengan seseorang, gelar kehormatan apa yang digunakan, dan bahkan siapa yang menuangkan minuman di meja makan. Ketika orang Korea bertemu seseorang yang baru, salah satu pertanyaan pertama yang mereka ajukan adalah 'Tahun berapa Anda lahir?' (몇 년생이세요?). Ini tidak dianggap tidak sopan — ini penting untuk menetapkan tingkat formalitas yang tepat dalam percakapan.",
      cultureP2: "Jika dua orang lahir di tahun yang sama, mereka dianggap seusia (동갑, dong-gap) dan bisa berbicara santai satu sama lain. Bahkan selisih satu tahun pun bisa mengubah seluruh dinamika hubungan. Orang yang lebih tua (oppa/unni untuk perempuan, hyung/nuna untuk laki-laki) diharapkan merawat yang lebih muda, sementara yang lebih muda menunjukkan rasa hormat melalui bahasa dan perilaku.",
      examplesTitle: "Contoh dan Skenario Usia Korea",
      examplesP1: "Misalnya Anda lahir pada 31 Desember 1999. Di hari ulang tahun Anda, usia internasional Anda 0 dan usia Korea 1. Keesokan harinya, 1 Januari 2000, usia internasional masih 0, tapi usia Korea melompat ke 2! Contoh ekstrem ini menunjukkan bagaimana usia Korea bisa sampai 2 tahun lebih tua. Penggemar K-pop sering menyadari hal ini saat membandingkan usia idol favorit — dua anggota yang lahir berselang beberapa bulan di tahun kalender berbeda akan memiliki selisih 1 tahun usia Korea.",
      tipsTitle: "Tips untuk Penggemar K-pop dan Wisatawan Korea",
      tipsP1: "Saat membicarakan idol K-pop favorit Anda, Anda mungkin mendengar penggemar menyebut usia secara berbeda. Anggota BTS, BLACKPINK, aespa, dan NewJeans semuanya tumbuh dengan sistem usia Korea. Jika Anda bepergian ke Korea Selatan, mengetahui usia Korea Anda bisa menjadi pembuka percakapan yang menyenangkan. Coba katakan '제 한국 나이는 ___살이에요' (Usia Korea saya ___tahun) dalam bahasa Korea. Ini cara yang bagus untuk mencairkan suasana dan menunjukkan kesadaran budaya!",
    },
    faq: {
      title: "Pertanyaan yang Sering Diajukan",
      items: [
        { q: "Mengapa saya lebih tua di Korea?", a: "Karena sistem usia Korea menghitung waktu di dalam kandungan sebagai tahun pertama, dan semua orang bertambah usia bersama pada Tahun Baru." },
        { q: "Apakah usia Korea masih digunakan?", a: "Secara resmi beralih ke usia internasional pada Juni 2023. Namun banyak orang Korea masih menggunakan usia Korea dalam percakapan." },
        { q: "Bisakah usia Korea 2 tahun lebih tua?", a: "Bisa! Jika ulang tahun tahun ini belum tiba, usia Korea bisa 2 tahun lebih tua." },
        { q: "Apa itu \"\ub9cc \ub098\uc774\" (man-nai)?", a: "\ub9cc \ub098\uc774 berarti \"usia penuh\" dan mengacu pada sistem penghitungan usia internasional." },
        { q: 'Apa arti "동갑" (dong-gap)?', a: '동갑 berarti "seusia" dan merujuk pada orang yang lahir di tahun yang sama. Dalam budaya Korea, menjadi dong-gap dengan seseorang menciptakan ikatan instan — Anda bisa berbicara santai dan memperlakukan satu sama lain secara setara. Penggemar K-pop sering mengecek apakah mereka dong-gap dengan idol favorit!' },
        { q: "Bagaimana idol K-pop menghitung usia mereka?", a: "Idol K-pop tumbuh dengan sistem usia Korea, jadi ketika mereka menyebut usia di acara variety atau wawancara, mereka sering menggunakan usia Korea. Namun, untuk penggemar internasional, agensi terkadang mencantumkan usia internasional. Kalkulator kami membantu Anda membandingkan langsung!" },
        { q: 'Apa itu "학번" (hakbeon)?', a: '학번 merujuk pada tahun masuk universitas dan umum digunakan dalam budaya sosial Korea. Misalnya, jika Anda masuk universitas pada 2020, hakbeon Anda adalah "20학번". Ini cara lain orang Korea menetapkan senioritas dan hierarki sosial.' },
        { q: "Apakah negara lain menggunakan sistem usia serupa?", a: "Secara historis, Tiongkok, Jepang, Vietnam, dan Mongolia menggunakan sistem penghitungan usia serupa. Namun, sebagian besar negara ini sudah beralih ke sistem internasional. Korea Selatan adalah salah satu yang terakhir secara resmi mengubah pada 2023." },
        { q: "Mengapa tahun lahir begitu penting di Korea?", a: 'Di Korea, tahun lahir menentukan hubungan sosial Anda. Orang yang lahir di tahun yang sama adalah teman sebaya (동갑), sementara selisih satu tahun saja berarti menggunakan bahasa formal kepada yang lebih tua. Inilah mengapa orang Korea bertanya "Tahun berapa Anda lahir?" daripada "Berapa umur Anda?"' },
        { q: "Apa itu zodiak Korea (띠)?", a: "Korea menggunakan siklus zodiak 12 tahun mirip zodiak Tiongkok, disebut 띠 (tti). Setiap tahun dikaitkan dengan hewan: Tikus, Kerbau, Harimau, Kelinci, Naga, Ular, Kuda, Kambing, Monyet, Ayam, Anjing, dan Babi. Orang Korea sering menyebutkan hewan zodiak mereka saat membahas tahun lahir." },
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
      howP2: "Ce système trouve ses racines dans les traditions anciennes d'Asie de l'Est, où le temps passé dans le ventre maternel était considéré comme la première année de vie. L'anniversaire commun du Nouvel An reflète également la nature collectiviste de la culture coréenne, où les étapes importantes sont célébrées ensemble plutôt qu'individuellement.",
      howFormula: "\u00c2ge cor\u00e9en = Ann\u00e9e actuelle \u2212 Ann\u00e9e de naissance + 1",
      vsTitle: "\u00c2ge cor\u00e9en vs. \u00c2ge international",
      vsP1: "L\u2019\u00e2ge international (\ub9cc \ub098\uc774) compte le nombre d\u2019ann\u00e9es compl\u00e8tes v\u00e9cues. Vous commencez \u00e0 0 et gagnez un an \u00e0 chaque anniversaire. L\u2019\u00e2ge cor\u00e9en commence \u00e0 1 et augmente chaque Jour de l\u2019An.",
      vsP2: "Il existe également un troisième système appelé « âge de l'année » (연 나이, yeon-nai), calculé en soustrayant l'année de naissance de l'année en cours. Ce système était auparavant utilisé pour l'inscription scolaire et le service militaire en Corée du Sud. Comprendre ces différents systèmes vous aide à naviguer les conversations et traditions liées à l'âge dans la culture coréenne.",
      reformTitle: "R\u00e9forme de l\u2019\u00e2ge en Cor\u00e9e du Sud en 2023",
      reformP1: "Depuis le 28 juin 2023, la Cor\u00e9e du Sud a officiellement adopt\u00e9 le syst\u00e8me d\u2019\u00e2ge international pour toutes les fins l\u00e9gales. Cependant, l\u2019\u00e2ge cor\u00e9en est encore largement utilis\u00e9 dans les conversations quotidiennes.",
      reformP2: "La réforme a été introduite pour réduire la confusion causée par l'existence de plusieurs systèmes de calcul de l'âge. Avant le changement, les Coréens pouvaient déclarer des âges différents selon le contexte — un pour les documents juridiques, un autre pour les situations sociales, et encore un autre pour l'inscription scolaire. Le système unifié simplifie les choses, mais les habitudes culturelles mettent du temps à changer.",
    },
    guide: {
      title: "Guide Complet de l'Âge Coréen",
      cultureTitle: "L'Âge Coréen dans la Culture et la Société",
      cultureP1: "L'âge joue un rôle central dans la culture coréenne. Il détermine comment vous parlez à quelqu'un, quels honorifiques utiliser, et même qui sert les boissons à table. Lorsque les Coréens rencontrent quelqu'un de nouveau, l'une des premières questions qu'ils posent est « Quelle est votre année de naissance ? » (몇 년생이세요?). Ce n'est pas considéré comme impoli — c'est essentiel pour établir le niveau de formalité approprié dans la conversation.",
      cultureP2: "Si deux personnes sont nées la même année, elles sont considérées comme ayant le même âge (동갑, dong-gap) et peuvent se parler de manière informelle. Même une différence d'un an peut changer toute la dynamique d'une relation. La personne plus âgée (oppa/unni pour les femmes, hyung/nuna pour les hommes) est censée prendre soin de la plus jeune, tandis que la plus jeune montre du respect par le langage et le comportement.",
      examplesTitle: "Exemples et Scénarios d'Âge Coréen",
      examplesP1: "Imaginons que vous êtes né(e) le 31 décembre 1999. Le jour de votre anniversaire, votre âge international est 0 et votre âge coréen est 1. Le lendemain, le 1er janvier 2000, votre âge international est toujours 0, mais votre âge coréen passe à 2 ! Cet exemple extrême montre que l'âge coréen peut être jusqu'à 2 ans supérieur. Les fans de K-pop remarquent souvent cela en comparant les âges de leurs idols préférés — deux membres nés à quelques mois d'intervalle dans des années civiles différentes auront 1 an d'écart en âge coréen.",
      tipsTitle: "Conseils pour les Fans de K-pop et les Voyageurs en Corée",
      tipsP1: "Lorsque vous parlez de vos idols K-pop préférés, vous pourriez entendre les fans mentionner les âges différemment. Les membres de BTS, BLACKPINK, aespa et NewJeans ont tous grandi avec le système d'âge coréen. Si vous voyagez en Corée du Sud, connaître votre âge coréen peut être un sujet de conversation amusant. Essayez de dire « 제 한국 나이는 ___살이에요 » (Mon âge coréen est ___ans) en coréen. C'est un excellent brise-glace et cela montre votre connaissance culturelle !",
    },
    faq: {
      title: "Questions fr\u00e9quentes",
      items: [
        { q: "Pourquoi suis-je plus \u00e2g\u00e9(e) en Cor\u00e9e ?", a: "Parce que le syst\u00e8me cor\u00e9en compte le temps dans le ventre de la m\u00e8re comme la premi\u00e8re ann\u00e9e, et tout le monde vieillit ensemble au Jour de l\u2019An." },
        { q: "L\u2019\u00e2ge cor\u00e9en est-il encore utilis\u00e9 ?", a: "Officiellement, la Cor\u00e9e du Sud est pass\u00e9e \u00e0 l\u2019\u00e2ge international en juin 2023. Mais beaucoup utilisent encore l\u2019\u00e2ge cor\u00e9en au quotidien." },
        { q: "Mon \u00e2ge cor\u00e9en peut-il \u00eatre de 2 ans sup\u00e9rieur ?", a: "Oui ! Si votre anniversaire n\u2019est pas encore pass\u00e9 cette ann\u00e9e, votre \u00e2ge cor\u00e9en peut \u00eatre de 2 ans sup\u00e9rieur." },
        { q: "Qu\u2019est-ce que \u00ab \ub9cc \ub098\uc774 \u00bb ?", a: "\ub9cc \ub098\uc774 signifie \u00ab \u00e2ge complet \u00bb et d\u00e9signe le syst\u00e8me de calcul d\u2019\u00e2ge international." },
        { q: "Que signifie « 동갑 » (dong-gap) ?", a: "동갑 signifie « même âge » et désigne les personnes nées la même année. Dans la culture coréenne, être dong-gap avec quelqu'un crée un lien instantané — vous pouvez parler de manière informelle et vous traiter en égaux. Les fans de K-pop vérifient souvent s'ils sont dong-gap avec leurs idols préférés !" },
        { q: "Comment les idols K-pop calculent-ils leur âge ?", a: "Les idols K-pop ont grandi avec le système d'âge coréen, donc lorsqu'ils mentionnent leur âge dans les émissions de variétés ou les interviews, ils utilisent souvent l'âge coréen. Cependant, pour les fans internationaux, les agences listent parfois les âges internationaux. Notre calculateur vous aide à comparer directement !" },
        { q: "Qu'est-ce que « 학번 » (hakbeon) ?", a: "학번 désigne l'année d'entrée à l'université et est couramment utilisé dans la culture sociale coréenne. Par exemple, si vous êtes entré à l'université en 2020, votre hakbeon est « 20학번 ». C'est une autre façon pour les Coréens d'établir l'ancienneté et la hiérarchie sociale." },
        { q: "D'autres pays utilisent-ils un système d'âge similaire ?", a: "Historiquement, la Chine, le Japon, le Vietnam et la Mongolie utilisaient des systèmes de calcul d'âge similaires. Cependant, la plupart de ces pays sont déjà passés au système international. La Corée du Sud a été l'un des derniers à changer officiellement en 2023." },
        { q: "Pourquoi l'année de naissance est-elle si importante en Corée ?", a: "En Corée, votre année de naissance détermine vos relations sociales. Les personnes nées la même année sont des pairs (동갑), tandis qu'un écart d'un an seulement signifie utiliser un langage formel avec la personne plus âgée. C'est pourquoi les Coréens demandent « Quelle est votre année de naissance ? » plutôt que « Quel âge avez-vous ? »" },
        { q: "Qu'est-ce que le zodiaque coréen (띠) ?", a: "La Corée utilise un cycle zodiacal de 12 ans similaire au zodiaque chinois, appelé 띠 (tti). Chaque année est associée à un animal : Rat, Bœuf, Tigre, Lapin, Dragon, Serpent, Cheval, Mouton, Singe, Coq, Chien et Cochon. Les Coréens mentionnent souvent leur animal du zodiaque lorsqu'ils parlent de leur année de naissance." },
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
      howP2: "Este sistema tiene sus raíces en antiguas tradiciones de Asia Oriental, donde el tiempo pasado en el vientre materno se consideraba el primer año de vida. El cumpleaños compartido en Año Nuevo también refleja la naturaleza colectivista de la cultura coreana, donde los hitos comunitarios se celebran juntos en lugar de individualmente.",
      howFormula: "Edad coreana = A\u00f1o actual \u2212 A\u00f1o de nacimiento + 1",
      vsTitle: "Edad coreana vs. Edad internacional",
      vsP1: "La edad internacional (\ub9cc \ub098\uc774) cuenta los a\u00f1os completos vividos desde el nacimiento. Comienzas en 0 y ganas un a\u00f1o en cada cumplea\u00f1os. La edad coreana comienza en 1 y aumenta cada A\u00f1o Nuevo.",
      vsP2: "También existe un tercer sistema llamado 'edad del año' (연 나이, yeon-nai), que se calcula restando el año de nacimiento del año actual. Anteriormente se usaba para la inscripción escolar y el servicio militar en Corea del Sur. Comprender estos diferentes sistemas te ayuda a navegar las conversaciones y tradiciones relacionadas con la edad en la cultura coreana.",
      reformTitle: "Reforma de la edad en Corea del Sur en 2023",
      reformP1: "Desde el 28 de junio de 2023, Corea del Sur adopt\u00f3 oficialmente el sistema de edad internacional para todos los fines legales. Sin embargo, la edad coreana todav\u00eda se usa en conversaciones cotidianas.",
      reformP2: "La reforma se introdujo para reducir la confusión causada por tener múltiples sistemas de cálculo de edad. Antes del cambio, los coreanos podían declarar edades diferentes según el contexto — una para documentos legales, otra para situaciones sociales, y otra más para la inscripción escolar. El sistema unificado simplifica las cosas, pero los hábitos culturales toman tiempo para cambiar.",
    },
    guide: {
      title: "Guía Completa de la Edad Coreana",
      cultureTitle: "La Edad Coreana en la Cultura y la Sociedad",
      cultureP1: "La edad juega un papel central en la cultura coreana. Determina cómo le hablas a alguien, qué honoríficos usar, e incluso quién sirve las bebidas en la mesa. Cuando los coreanos conocen a alguien nuevo, una de las primeras preguntas que hacen es '¿En qué año naciste?' (몇 년생이세요?). Esto no se considera grosero — es esencial para establecer el nivel apropiado de formalidad en la conversación.",
      cultureP2: "Si dos personas nacieron en el mismo año, se consideran de la misma edad (동갑, dong-gap) y pueden hablarse de manera informal. Incluso una diferencia de un año puede cambiar toda la dinámica de una relación. La persona mayor (oppa/unni para mujeres, hyung/nuna para hombres) se espera que cuide al menor, mientras que el menor muestra respeto a través del lenguaje y el comportamiento.",
      examplesTitle: "Ejemplos y Escenarios de Edad Coreana",
      examplesP1: "Supongamos que naciste el 31 de diciembre de 1999. En tu cumpleaños, tu edad internacional es 0 y tu edad coreana es 1. Al día siguiente, 1 de enero de 2000, tu edad internacional sigue siendo 0, ¡pero tu edad coreana salta a 2! Este ejemplo extremo muestra cómo la edad coreana puede ser hasta 2 años mayor. Los fans de K-pop a menudo notan esto al comparar las edades de sus idols favoritos — dos miembros nacidos con meses de diferencia en años calendario distintos tendrán 1 año de diferencia en edad coreana.",
      tipsTitle: "Consejos para Fans de K-pop y Viajeros a Corea",
      tipsP1: "Cuando hablas sobre tus idols de K-pop favoritos, podrías escuchar a los fans referirse a las edades de manera diferente. Los miembros de BTS, BLACKPINK, aespa y NewJeans crecieron con el sistema de edad coreano. Si estás viajando a Corea del Sur, conocer tu edad coreana puede ser un tema de conversación divertido. Intenta decir '제 한국 나이는 ___살이에요' (Mi edad coreana es ___años) en coreano. ¡Es un excelente rompehielos y muestra conciencia cultural!",
    },
    faq: {
      title: "Preguntas frecuentes",
      items: [
        { q: "\u00bfPor qu\u00e9 soy mayor en Corea?", a: "Porque el sistema coreano cuenta el tiempo en el vientre materno como el primer a\u00f1o, y todos envejecen juntos en A\u00f1o Nuevo." },
        { q: "\u00bfLa edad coreana todav\u00eda se usa hoy?", a: "Oficialmente se cambi\u00f3 a la edad internacional en junio de 2023. Pero muchos coreanos a\u00fan usan su edad coreana." },
        { q: "\u00bfMi edad coreana puede ser 2 a\u00f1os m\u00e1s?", a: "\u00a1S\u00ed! Si a\u00fan no has cumplido a\u00f1os este a\u00f1o, tu edad coreana puede ser 2 a\u00f1os mayor." },
        { q: "\u00bfQu\u00e9 es \u00ab\ub9cc \ub098\uc774\u00bb?", a: "\ub9cc \ub098\uc774 significa \u00abedad completa\u00bb y se refiere al sistema de c\u00e1lculo de edad internacional." },
        { q: '¿Qué significa "동갑" (dong-gap)?', a: '동갑 significa "misma edad" y se refiere a personas nacidas en el mismo año. En la cultura coreana, ser dong-gap con alguien crea un vínculo instantáneo — puedes hablar de manera informal y tratarse como iguales. ¡Los fans de K-pop a menudo verifican si son dong-gap con sus idols favoritos!' },
        { q: "¿Cómo calculan su edad los idols de K-pop?", a: "Los idols de K-pop crecieron con el sistema de edad coreano, así que cuando mencionan su edad en programas de variedades o entrevistas, a menudo usan la edad coreana. Sin embargo, para los fans internacionales, las agencias a veces listan las edades internacionales. ¡Nuestra calculadora te ayuda a comparar directamente!" },
        { q: '¿Qué es "학번" (hakbeon)?', a: '학번 se refiere al año de ingreso a la universidad y es comúnmente usado en la cultura social coreana. Por ejemplo, si entraste a la universidad en 2020, tu hakbeon es "20학번". Es otra forma en que los coreanos establecen la antigüedad y la jerarquía social.' },
        { q: "¿Otros países usan un sistema de edad similar?", a: "Históricamente, China, Japón, Vietnam y Mongolia usaban sistemas de cálculo de edad similares. Sin embargo, la mayoría de estos países ya han hecho la transición al sistema internacional. Corea del Sur fue uno de los últimos en cambiar oficialmente en 2023." },
        { q: "¿Por qué el año de nacimiento es tan importante en Corea?", a: '¿En Corea, tu año de nacimiento determina tus relaciones sociales. Las personas nacidas en el mismo año son compañeros (동갑), mientras que incluso una diferencia de un año significa usar lenguaje formal con la persona mayor. Por eso los coreanos preguntan "¿En qué año naciste?" en lugar de "¿Cuántos años tienes?"' },
        { q: "¿Qué es el zodiaco coreano (띠)?", a: "Corea usa un ciclo zodiacal de 12 años similar al zodiaco chino, llamado 띠 (tti). Cada año está asociado con un animal: Rata, Buey, Tigre, Conejo, Dragón, Serpiente, Caballo, Oveja, Mono, Gallo, Perro y Cerdo. Los coreanos a menudo mencionan su animal del zodiaco cuando hablan sobre años de nacimiento." },
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
      howP2: "Dieses System hat seine Wurzeln in alten ostasiatischen Traditionen, in denen die Zeit im Mutterleib als erstes Lebensjahr gezählt wurde. Der gemeinsame Neujahrs-Geburtstag spiegelt auch die kollektivistische Natur der koreanischen Kultur wider, in der Meilensteine der Gemeinschaft gemeinsam gefeiert werden, statt individuell.",
      howFormula: "Koreanisches Alter = Aktuelles Jahr \u2212 Geburtsjahr + 1",
      vsTitle: "Koreanisches Alter vs. Internationales Alter",
      vsP1: "Das internationale Alter (\ub9cc \ub098\uc774) z\u00e4hlt die vollen Jahre seit der Geburt. Sie beginnen bei 0 und werden an jedem Geburtstag ein Jahr \u00e4lter. Das koreanische Alter beginnt bei 1 und erh\u00f6ht sich jedes Neujahr.",
      vsP2: "Es gibt auch ein drittes System namens 'Jahresalter' (연 나이, yeon-nai), das berechnet wird, indem man das Geburtsjahr vom aktuellen Jahr abzieht. Dieses System wurde früher in Südkorea für die Schuleinschreibung und den Militärdienst verwendet. Das Verständnis dieser verschiedenen Systeme hilft Ihnen, Gespräche und Traditionen rund um das Alter in der koreanischen Kultur zu verstehen.",
      reformTitle: "Altersreform in S\u00fcdkorea 2023",
      reformP1: "Seit dem 28. Juni 2023 hat S\u00fcdkorea das internationale Alterssystem f\u00fcr alle rechtlichen Zwecke offiziell eingef\u00fchrt. Das koreanische Alter wird jedoch im Alltag weiterhin h\u00e4ufig verwendet.",
      reformP2: "Die Reform wurde eingeführt, um die Verwirrung zu verringern, die durch mehrere Altersberechnungssysteme verursacht wurde. Vor der Änderung konnten Koreaner je nach Kontext unterschiedliche Alter angeben — eines für rechtliche Dokumente, ein anderes für soziale Situationen und wieder ein anderes für die Schuleinschreibung. Das einheitliche System vereinfacht die Dinge, aber kulturelle Gewohnheiten brauchen Zeit, um sich zu ändern.",
    },
    guide: {
      title: "Vollständiger Leitfaden zum Koreanischen Alter",
      cultureTitle: "Koreanisches Alter in Kultur und Gesellschaft",
      cultureP1: "Das Alter spielt eine zentrale Rolle in der koreanischen Kultur. Es bestimmt, wie Sie mit jemandem sprechen, welche Höflichkeitsformen Sie verwenden und sogar, wer bei Tisch die Getränke einschenkt. Wenn Koreaner jemanden Neues kennenlernen, ist eine der ersten Fragen 'In welchem Jahr sind Sie geboren?' (몇 년생이세요?). Das wird nicht als unhöflich angesehen — es ist wesentlich, um das angemessene Maß an Formalität im Gespräch festzulegen.",
      cultureP2: "Wenn zwei Personen im selben Jahr geboren sind, gelten sie als gleichaltrig (동갑, dong-gap) und können ungezwungen miteinander sprechen. Selbst ein Unterschied von nur einem Jahr kann die gesamte Dynamik einer Beziehung verändern. Die ältere Person (Oppa/Unni für Frauen, Hyung/Nuna für Männer) wird erwartet, sich um die jüngere zu kümmern, während die jüngere Person durch Sprache und Verhalten Respekt zeigt.",
      examplesTitle: "Beispiele und Szenarien zum Koreanischen Alter",
      examplesP1: "Nehmen wir an, Sie sind am 31. Dezember 1999 geboren. An Ihrem Geburtstag ist Ihr internationales Alter 0 und Ihr koreanisches Alter 1. Am nächsten Tag, dem 1. Januar 2000, ist Ihr internationales Alter immer noch 0, aber Ihr koreanisches Alter springt auf 2! Dieses extreme Beispiel zeigt, dass das koreanische Alter bis zu 2 Jahre höher sein kann. K-Pop-Fans bemerken dies oft, wenn sie das Alter ihrer Lieblings-Idols vergleichen — zwei Mitglieder, die nur Monate auseinander in verschiedenen Kalenderjahren geboren wurden, haben einen Unterschied von 1 Jahr im koreanischen Alter.",
      tipsTitle: "Tipps für K-Pop-Fans und Korea-Reisende",
      tipsP1: "Wenn Sie über Ihre K-Pop-Lieblings-Idols sprechen, hören Sie vielleicht, dass Fans das Alter unterschiedlich angeben. Die Mitglieder von BTS, BLACKPINK, aespa und NewJeans sind alle mit dem koreanischen Alterssystem aufgewachsen. Wenn Sie nach Südkorea reisen, kann das Wissen um Ihr koreanisches Alter ein unterhaltsamer Gesprächsstarter sein. Versuchen Sie, auf Koreanisch '제 한국 나이는 ___살이에요' (Mein koreanisches Alter ist ___Jahre) zu sagen. Es ist ein großartiger Eisbrecher und zeigt kulturelles Bewusstsein!",
    },
    faq: {
      title: "H\u00e4ufig gestellte Fragen",
      items: [
        { q: "Warum bin ich in Korea \u00e4lter?", a: "Weil das koreanische Alterssystem die Zeit im Mutterleib als erstes Lebensjahr z\u00e4hlt und alle gemeinsam am Neujahrstag \u00e4lter werden." },
        { q: "Wird das koreanische Alter noch verwendet?", a: "Offiziell hat S\u00fcdkorea im Juni 2023 auf das internationale Alter umgestellt. Im Alltag verwenden viele Koreaner weiterhin das koreanische Alter." },
        { q: "Kann mein koreanisches Alter 2 Jahre mehr sein?", a: "Ja! Wenn Sie dieses Jahr noch nicht Geburtstag hatten, kann Ihr koreanisches Alter 2 Jahre h\u00f6her sein." },
        { q: "Was ist \u00ab\ub9cc \ub098\uc774\u00bb?", a: "\ub9cc \ub098\uc774 bedeutet \u00abvolles Alter\u00bb und bezieht sich auf das internationale Altersberechnungssystem." },
        { q: 'Was bedeutet "동갑" (dong-gap)?', a: '동갑 bedeutet "gleiches Alter" und bezeichnet Personen, die im selben Jahr geboren sind. In der koreanischen Kultur schafft es eine sofortige Verbindung, wenn man mit jemandem dong-gap ist — man kann ungezwungen sprechen und sich als Gleiche behandeln. K-Pop-Fans überprüfen oft, ob sie dong-gap mit ihren Lieblings-Idols sind!' },
        { q: "Wie berechnen K-Pop-Idols ihr Alter?", a: "K-Pop-Idols sind mit dem koreanischen Alterssystem aufgewachsen, daher verwenden sie oft das koreanische Alter, wenn sie in Variety-Shows oder Interviews ihr Alter erwähnen. Für internationale Fans listen Agenturen jedoch manchmal das internationale Alter auf. Unser Rechner hilft Ihnen beim direkten Vergleich!" },
        { q: 'Was ist "학번" (Hakbeon)?', a: '학번 bezieht sich auf das Universitätseintrittsjahr und wird in der koreanischen Sozialkultur häufig verwendet. Wenn Sie zum Beispiel 2020 an die Universität gekommen sind, ist Ihr Hakbeon "20학번". Es ist eine weitere Möglichkeit, wie Koreaner Seniorität und soziale Hierarchie festlegen.' },
        { q: "Verwenden andere Länder ein ähnliches Alterssystem?", a: "Historisch verwendeten China, Japan, Vietnam und die Mongolei ähnliche Altersberechnungssysteme. Die meisten dieser Länder sind jedoch bereits zum internationalen System übergegangen. Südkorea war eines der letzten Länder, das 2023 offiziell wechselte." },
        { q: "Warum ist das Geburtsjahr in Korea so wichtig?", a: 'In Korea bestimmt Ihr Geburtsjahr Ihre sozialen Beziehungen. Menschen, die im selben Jahr geboren sind, sind Gleichaltrige (동갑), während selbst ein Unterschied von einem Jahr bedeutet, dass man formelle Sprache gegenüber der älteren Person verwenden muss. Deshalb fragen Koreaner "In welchem Jahr sind Sie geboren?" statt "Wie alt sind Sie?"' },
        { q: "Was ist der koreanische Tierkreis (띠)?", a: "Korea verwendet einen 12-Jahres-Tierkreiszyklus ähnlich dem chinesischen Tierkreis, genannt 띠 (Tti). Jedes Jahr ist mit einem Tier verbunden: Ratte, Ochse, Tiger, Hase, Drache, Schlange, Pferd, Schaf, Affe, Hahn, Hund und Schwein. Koreaner erwähnen oft ihr Tierkreistier, wenn sie über Geburtsjahre sprechen." },
      ],
    },
    footer: "Koreanischer Altersrechner. F\u00fcr alle, die sich f\u00fcr die koreanische Kultur interessieren.",
  },
};
