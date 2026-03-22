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
    meta: { langLabel: "English", flag: "🇺🇸" },
    hero: {
      title: "Korean Age Calculator",
      subtitle:
        "Did you know you might be one or two years older in Korea? Enter your birthday to find out your Korean age.",
    },
    calculator: {
      heading: "Enter Your Birthday",
      label: "Date of Birth",
      placeholder: "",
      button: "Calculate My Korean Age",
      koreanAge: "Korean Age (한국 나이)",
      internationalAge: "International Age (만 나이)",
      errorEmpty: "Please select your date of birth.",
      errorFuture: "Date of birth cannot be in the future.",
      errorYear: "Please enter a year after 1900.",
      resultDiff: (diff) =>
        `your Korean age is ${diff} year(s) more than your international age.`,
      resultBornIn: (year) => `Born in ${year} —`,
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
    meta: { langLabel: "한국어", flag: "🇰🇷" },
    hero: {
      title: "한국 나이 계산기",
      subtitle:
        "한국에서는 나이를 다르게 계산한다는 것을 알고 계셨나요? 생년월일을 입력하고 한국 나이를 확인해 보세요.",
    },
    calculator: {
      heading: "생년월일 입력",
      label: "생년월일",
      placeholder: "",
      button: "한국 나이 계산하기",
      koreanAge: "한국 나이",
      internationalAge: "만 나이",
      errorEmpty: "생년월일을 선택해 주세요.",
      errorFuture: "미래 날짜는 입력할 수 없습니다.",
      errorYear: "1900년 이후의 연도를 입력해 주세요.",
      resultDiff: (diff) => `한국 나이가 만 나이보다 ${diff}살 더 많습니다.`,
      resultBornIn: (year) => `${year}년생 —`,
    },
    explanation: {
      howTitle: "한국 나이는 어떻게 계산하나요?",
      howP1: "전통적인 한국 나이 체계에서는 태어날 때 1살로 시작합니다. 그리고 실제 생일과 관계없이 매년 1월 1일에 한 살씩 나이가 추가됩니다. 그래서 한국 나이는 만 나이보다 1~2살 더 많을 수 있습니다.",
      howFormula: "한국 나이 = 현재 연도 − 출생 연도 + 1",
      vsTitle: "한국 나이 vs. 만 나이",
      vsP1: '만 나이는 태어난 후 실제로 살아온 햇수를 세는 방식입니다. 0살에서 시작해 생일마다 한 살씩 더합니다. 반면 한국 나이는 1살에서 시작해 매년 새해에 나이가 올라갑니다. 그래서 한국 사람들은 "몇 살이에요?"보다 "몇 년생이에요?"라고 자주 묻습니다.',
      reformTitle: "2023년 한국 나이 개정",
      reformP1: "2023년 6월 28일부터 대한민국은 모든 법적·행정적 목적에서 만 나이 체계를 공식 채택했습니다. 공문서, 계약서, 정부 서비스에서는 만 나이만 사용됩니다. 하지만 일상 대화에서는 여전히 한국 나이가 널리 사용됩니다.",
    },
    faq: {
      title: "자주 묻는 질문",
      items: [
        {
          q: "왜 한국에서는 나이가 더 많나요?",
          a: "한국 나이 체계는 어머니 뱃속에 있는 기간을 첫 해로 세고, 개인의 생일이 아니라 새해에 모두 함께 나이를 먹기 때문입니다.",
        },
        {
          q: "한국 나이는 아직도 사용되나요?",
          a: "공식적으로는 2023년 6월에 만 나이로 전환되었습니다. 하지만 일상생활에서는 여전히 많은 한국인이 한국 나이를 사용합니다.",
        },
        {
          q: "한국 나이가 만 나이보다 2살 더 많을 수 있나요?",
          a: "네! 올해 생일이 아직 지나지 않았다면, 한국 나이가 2살 더 많을 수 있습니다. 예를 들어 12월에 태어났다면, 1월에 만 나이는 아직 올라가지 않았지만 한국 나이는 이미 올라갑니다.",
        },
        {
          q: '"만 나이"란 무엇인가요?',
          a: "만 나이는 말 그대로 '가득 찬 나이'를 의미하며, 세계 대부분의 나라에서 사용하는 국제 나이 계산 방식입니다.",
        },
      ],
    },
    footer: "한국 나이 계산기. 한국 문화에 관심 있는 모든 분을 위해 만들었습니다.",
  },

  ja: {
    meta: { langLabel: "日本語", flag: "🇯🇵" },
    hero: {
      title: "韓国年齢計算機",
      subtitle:
        "韓国では年齢の数え方が違うことをご存知ですか？誕生日を入力して、韓国での年齢を確認しましょう。",
    },
    calculator: {
      heading: "誕生日を入力",
      label: "生年月日",
      placeholder: "",
      button: "韓国年齢を計算する",
      koreanAge: "韓国年齢（한국 나이）",
      internationalAge: "満年齢（만 나이）",
      errorEmpty: "生年月日を選択してください。",
      errorFuture: "未来の日付は入力できません。",
      errorYear: "1900年以降の年を入力してください。",
      resultDiff: (diff) => `韓国年齢は満年齢より${diff}歳多いです。`,
      resultBornIn: (year) => `${year}年生まれ —`,
    },
    explanation: {
      howTitle: "韓国年齢の仕組み",
      howP1: "韓国の伝統的な年齢計算では、赤ちゃんは生まれた時に1歳とされます。そして実際の誕生日に関係なく、毎年1月1日に1歳加算されます。そのため、韓国年齢は満年齢より1〜2歳多くなることがあります。",
      howFormula: "韓国年齢 = 現在の年 − 誕生年 + 1",
      vsTitle: "韓国年齢 vs. 満年齢",
      vsP1: "満年齢（만 나이）は、生まれてから実際に生きた年数を数えます。0歳から始まり、誕生日ごとに1歳ずつ加算されます。一方、韓国年齢は1歳から始まり、毎年元日に年齢が上がります。韓国人がよく「何年生まれですか？」と聞くのはそのためです。",
      reformTitle: "2023年 韓国の年齢改正",
      reformP1: "2023年6月28日より、韓国はすべての法的・行政的目的で満年齢制度を公式採用しました。公文書、契約書、行政サービスでは満年齢のみが使われます。ただし、日常会話では韓国年齢が今でも広く使われています。",
    },
    faq: {
      title: "よくある質問",
      items: [
        {
          q: "なぜ韓国では年齢が多いのですか？",
          a: "韓国の年齢制度では、お腹の中にいる期間を最初の1年として数え、個人の誕生日ではなく元日にみんな一緒に年を取るからです。",
        },
        {
          q: "韓国年齢は今でも使われていますか？",
          a: "公式には2023年6月に満年齢に切り替わりました。しかし日常生活では、多くの韓国人が今でも韓国年齢を使っています。",
        },
        {
          q: "韓国年齢が満年齢より2歳多いことはありますか？",
          a: "はい！今年の誕生日がまだ来ていない場合、韓国年齢が2歳多くなります。例えば12月生まれの場合、1月には満年齢はまだ上がっていませんが、韓国年齢はすでに上がっています。",
        },
        {
          q: "「만 나이（マンナイ）」とは何ですか？",
          a: "만 나이は「満年齢」を意味し、世界のほとんどの国で使われている国際的な年齢計算方式です。",
        },
      ],
    },
    footer: "韓国年齢計算機。韓国文化に興味のあるすべての方へ。",
  },

  zh: {
    meta: { langLabel: "中文", flag: "🇨🇳" },
    hero: {
      title: "韩国年龄计算器",
      subtitle:
        "你知道在韩国你可能会大一到两岁吗？输入你的生日来看看你的韩国年龄吧。",
    },
    calculator: {
      heading: "输入你的生日",
      label: "出生日期",
      placeholder: "",
      button: "计算韩国年龄",
      koreanAge: "韩国年龄（한국 나이）",
      internationalAge: "国际年龄（만 나이）",
      errorEmpty: "请选择出生日期。",
      errorFuture: "出生日期不能是未来的日期。",
      errorYear: "请输入1900年以后的年份。",
      resultDiff: (diff) => `你的韩国年龄比国际年龄大${diff}岁。`,
      resultBornIn: (year) => `出生于${year}年 —`,
    },
    explanation: {
      howTitle: "韩国年龄是怎么算的？",
      howP1: "在韩国传统的年龄计算体系中，婴儿出生时就被认为是1岁。然后无论实际生日是哪天，每年1月1日所有人都会增加1岁。因此，韩国年龄可能比国际年龄大1到2岁。",
      howFormula: "韩国年龄 = 当前年份 − 出生年份 + 1",
      vsTitle: "韩国年龄 vs. 国际年龄",
      vsP1: "国际年龄（만 나이）计算的是你出生以来实际活了多少个完整的年份。从0岁开始，每个生日增加1岁。而韩国年龄从1岁开始，每年元旦增长。这就是为什么韩国人经常问\u201c你是哪年出生的？\u201d而不是\u201c你多大了？\u201d",
      reformTitle: "2023年韩国年龄改革",
      reformP1: "自2023年6月28日起，韩国在所有法律和行政事务中正式采用国际年龄制度。在官方文件、合同和政府服务中，只使用国际年龄。不过，韩国年龄在日常对话和社交场合中仍然被广泛使用。",
    },
    faq: {
      title: "常见问题",
      items: [
        {
          q: "为什么我在韩国年龄更大？",
          a: "因为韩国年龄体系将在母亲子宫中的时间算作第一年，而且所有人在元旦一起增长年龄，而不是在各自的生日。",
        },
        {
          q: "韩国年龄现在还在使用吗？",
          a: "官方在2023年6月已切换为国际年龄。但在日常生活中，许多韩国人在非正式场合仍然使用韩国年龄。",
        },
        {
          q: "韩国年龄会比国际年龄大2岁吗？",
          a: "会的！如果你今年的生日还没到，韩国年龄就会大2岁。例如，如果你是12月出生的，在1月份你的国际年龄还没增加，但韩国年龄已经增加了。",
        },
        {
          q: "\u4ec0\u4e48\u662f\u201c\ub9cc \ub098\uc774\u201d\uff1f",
          a: "\ub9cc \ub098\uc774\u7684\u5b57\u9762\u610f\u601d\u662f\u201c\u8db3\u5c81\u201d\uff0c\u6307\u7684\u662f\u56fd\u9645\u5e74\u9f84\u8ba1\u7b97\u65b9\u5f0f\u2014\u2014\u4e16\u754c\u4e0a\u5927\u591a\u6570\u56fd\u5bb6\u4f7f\u7528\u7684\u8ba1\u7b97\u5e74\u9f84\u7684\u65b9\u6cd5\u3002",
        },
      ],
    },
    footer: "韩国年龄计算器。为所有对韩国文化感兴趣的人而建。",
  },

  th: {
    meta: { langLabel: "ไทย", flag: "🇹🇭" },
    hero: {
      title: "เครื่องคำนวณอายุเกาหลี",
      subtitle:
        "คุณรู้หรือไม่ว่าในเกาหลี คุณอาจจะอายุมากกว่า 1-2 ปี? กรอกวันเกิดเพื่อดูอายุเกาหลีของคุณ",
    },
    calculator: {
      heading: "กรอกวันเกิดของคุณ",
      label: "วันเกิด",
      placeholder: "",
      button: "คำนวณอายุเกาหลี",
      koreanAge: "อายุเกาหลี (한국 나이)",
      internationalAge: "อายุสากล (만 나이)",
      errorEmpty: "กรุณาเลือกวันเกิดของคุณ",
      errorFuture: "วันเกิดไม่สามารถเป็นวันในอนาคตได้",
      errorYear: "กรุณากรอกปีหลัง ค.ศ. 1900",
      resultDiff: (diff) =>
        `อายุเกาหลีของคุณมากกว่าอายุสากล ${diff} ปี`,
      resultBornIn: (year) => `เกิดปี ${year} —`,
    },
    explanation: {
      howTitle: "อายุเกาหลีคำนวณอย่างไร?",
      howP1: "ในระบบอายุแบบดั้งเดิมของเกาหลี ทารกจะถูกนับว่ามีอายุ 1 ปีตั้งแต่เกิด จากนั้นทุกคนจะเพิ่มอายุ 1 ปีในวันที่ 1 มกราคม โดยไม่คำนึงถึงวันเกิดจริง ซึ่งหมายความว่าอายุเกาหลีอาจมากกว่าอายุสากล 1-2 ปี",
      howFormula: "อายุเกาหลี = ปีปัจจุบัน − ปีเกิด + 1",
      vsTitle: "อายุเกาหลี vs. อายุสากล",
      vsP1: "อายุสากล (만 나이) นับจำนวนปีเต็มที่คุณมีชีวิตอยู่ตั้งแต่เกิด เริ่มที่ 0 และเพิ่มขึ้นปีละครั้งในวันเกิด ส่วนอายุเกาหลีเริ่มที่ 1 และเพิ่มขึ้นทุกวันปีใหม่ นั่นคือเหตุผลที่ชาวเกาหลีมักถามว่า \"คุณเกิดปีอะไร?\" แทนที่จะถามว่า \"คุณอายุเท่าไหร่?\"",
      reformTitle: "การปฏิรูปอายุเกาหลี ปี 2023",
      reformP1: "ตั้งแต่วันที่ 28 มิถุนายน 2023 เกาหลีใต้ได้นำระบบอายุสากลมาใช้อย่างเป็นทางการสำหรับวัตถุประสงค์ทางกฎหมายและการบริหารทั้งหมด ในเอกสารราชการ สัญญา และบริการของรัฐ จะใช้เฉพาะอายุสากลเท่านั้น อย่างไรก็ตาม อายุเกาหลียังคงใช้กันอย่างแพร่หลายในการสนทนาในชีวิตประจำวัน",
    },
    faq: {
      title: "คำถามที่พบบ่อย",
      items: [
        {
          q: "ทำไมฉันถึงอายุมากกว่าในเกาหลี?",
          a: "เพราะระบบอายุเกาหลีนับช่วงเวลาในครรภ์เป็นปีแรก และทุกคนเพิ่มอายุพร้อมกันในวันปีใหม่ แทนที่จะเป็นวันเกิดแต่ละคน",
        },
        {
          q: "อายุเกาหลียังคงใช้อยู่หรือไม่?",
          a: "อย่างเป็นทางการ เกาหลีใต้เปลี่ยนมาใช้อายุสากลในเดือนมิถุนายน 2023 แต่ในชีวิตประจำวัน ชาวเกาหลีหลายคนยังคงใช้อายุเกาหลีในการสนทนาทั่วไป",
        },
        {
          q: "อายุเกาหลีสามารถมากกว่าอายุสากล 2 ปีได้หรือไม่?",
          a: "ได้! ถ้าปีนี้วันเกิดของคุณยังไม่มาถึง อายุเกาหลีจะมากกว่า 2 ปี เช่น ถ้าคุณเกิดเดือนธันวาคม ในเดือนมกราคมอายุสากลยังไม่เพิ่ม แต่อายุเกาหลีเพิ่มแล้ว",
        },
        {
          q: "\"만 나이\" (มัน-นาอิ) คืออะไร?",
          a: "만 나이 แปลตรงตัวว่า \"อายุเต็ม\" หมายถึงระบบนับอายุสากล — วิธีที่ประเทศส่วนใหญ่ในโลกใช้คำนวณอายุ",
        },
      ],
    },
    footer: "เครื่องคำนวณอายุเกาหลี สร้างสำหรับทุกคนที่สนใจวัฒนธรรมเกาหลี",
  },

  vi: {
    meta: { langLabel: "Tiếng Việt", flag: "🇻🇳" },
    hero: {
      title: "Tính Tuổi Hàn Quốc",
      subtitle:
        "Bạn có biết ở Hàn Quốc bạn có thể lớn hơn 1-2 tuổi? Nhập ngày sinh để xem tuổi Hàn Quốc của bạn.",
    },
    calculator: {
      heading: "Nhập Ngày Sinh",
      label: "Ngày sinh",
      placeholder: "",
      button: "Tính Tuổi Hàn Quốc",
      koreanAge: "Tuổi Hàn Quốc (한국 나이)",
      internationalAge: "Tuổi Quốc Tế (만 나이)",
      errorEmpty: "Vui lòng chọn ngày sinh.",
      errorFuture: "Ngày sinh không thể ở tương lai.",
      errorYear: "Vui lòng nhập năm sau 1900.",
      resultDiff: (diff) =>
        `tuổi Hàn Quốc của bạn nhiều hơn tuổi quốc tế ${diff} tuổi.`,
      resultBornIn: (year) => `Sinh năm ${year} —`,
    },
    explanation: {
      howTitle: "Tuổi Hàn Quốc tính như thế nào?",
      howP1: "Trong hệ thống tuổi truyền thống của Hàn Quốc, em bé được tính là 1 tuổi khi sinh ra. Sau đó mọi người đều tăng thêm 1 tuổi vào ngày 1 tháng 1 hàng năm, bất kể ngày sinh thực tế. Điều này có nghĩa tuổi Hàn Quốc có thể nhiều hơn tuổi quốc tế 1-2 tuổi.",
      howFormula: "Tuổi Hàn Quốc = Năm hiện tại − Năm sinh + 1",
      vsTitle: "Tuổi Hàn Quốc vs. Tuổi Quốc Tế",
      vsP1: 'Tuổi quốc tế (만 나이, man-nai) đếm số năm đầy đủ bạn đã sống kể từ khi sinh. Bắt đầu từ 0 và tăng 1 vào mỗi ngày sinh. Ngược lại, tuổi Hàn Quốc bắt đầu từ 1 và tăng mỗi ngày Tết Dương lịch. Đó là lý do người Hàn thường hỏi "Bạn sinh năm bao nhiêu?" thay vì "Bạn bao nhiêu tuổi?"',
      reformTitle: "Cải cách tuổi Hàn Quốc năm 2023",
      reformP1: "Từ ngày 28 tháng 6 năm 2023, Hàn Quốc chính thức áp dụng hệ thống tuổi quốc tế cho tất cả mục đích pháp lý và hành chính. Trong giấy tờ chính thức, hợp đồng và dịch vụ công, chỉ sử dụng tuổi quốc tế. Tuy nhiên, tuổi Hàn Quốc vẫn được sử dụng rộng rãi trong giao tiếp hàng ngày.",
    },
    faq: {
      title: "Câu Hỏi Thường Gặp",
      items: [
        {
          q: "Tại sao tôi lớn tuổi hơn ở Hàn Quốc?",
          a: "Vì hệ thống tuổi Hàn Quốc tính thời gian trong bụng mẹ là năm đầu tiên, và mọi người cùng tăng tuổi vào ngày Tết Dương lịch thay vì ngày sinh riêng lẻ.",
        },
        {
          q: "Tuổi Hàn Quốc còn được sử dụng không?",
          a: "Chính thức thì Hàn Quốc đã chuyển sang tuổi quốc tế vào tháng 6 năm 2023. Nhưng trong cuộc sống hàng ngày, nhiều người Hàn vẫn dùng tuổi Hàn Quốc trong giao tiếp thông thường.",
        },
        {
          q: "Tuổi Hàn Quốc có thể nhiều hơn tuổi quốc tế 2 tuổi không?",
          a: "Có! Nếu năm nay sinh nhật của bạn chưa đến, tuổi Hàn Quốc có thể nhiều hơn 2 tuổi. Ví dụ, nếu bạn sinh tháng 12, vào tháng 1 tuổi quốc tế chưa tăng nhưng tuổi Hàn Quốc đã tăng rồi.",
        },
        {
          q: '"만 나이" (man-nai) là gì?',
          a: '만 나이 nghĩa đen là "tuổi đầy đủ" và chỉ hệ thống tính tuổi quốc tế — cách mà hầu hết các quốc gia trên thế giới tính tuổi.',
        },
      ],
    },
    footer: "Tính Tuổi Hàn Quốc. Dành cho tất cả những ai yêu thích văn hóa Hàn Quốc.",
  },

  id: {
    meta: { langLabel: "Bahasa", flag: "🇮🇩" },
    hero: {
      title: "Kalkulator Usia Korea",
      subtitle:
        "Tahukah Anda bahwa di Korea Anda mungkin lebih tua 1-2 tahun? Masukkan tanggal lahir untuk mengetahui usia Korea Anda.",
    },
    calculator: {
      heading: "Masukkan Tanggal Lahir",
      label: "Tanggal Lahir",
      placeholder: "",
      button: "Hitung Usia Korea Saya",
      koreanAge: "Usia Korea (한국 나이)",
      internationalAge: "Usia Internasional (만 나이)",
      errorEmpty: "Silakan pilih tanggal lahir Anda.",
      errorFuture: "Tanggal lahir tidak boleh di masa depan.",
      errorYear: "Silakan masukkan tahun setelah 1900.",
      resultDiff: (diff) =>
        `usia Korea Anda ${diff} tahun lebih tua dari usia internasional.`,
      resultBornIn: (year) => `Lahir tahun ${year} —`,
    },
    explanation: {
      howTitle: "Bagaimana Cara Kerja Usia Korea?",
      howP1: "Dalam sistem usia tradisional Korea, bayi dianggap berusia 1 tahun saat lahir. Kemudian semua orang bertambah 1 tahun pada 1 Januari, terlepas dari tanggal lahir sebenarnya. Ini berarti usia Korea bisa 1-2 tahun lebih tua dari usia internasional.",
      howFormula: "Usia Korea = Tahun Sekarang − Tahun Lahir + 1",
      vsTitle: "Usia Korea vs. Usia Internasional",
      vsP1: 'Usia internasional (만 나이, man-nai) menghitung jumlah tahun penuh sejak lahir. Dimulai dari 0 dan bertambah 1 setiap ulang tahun. Sebaliknya, usia Korea dimulai dari 1 dan bertambah setiap Tahun Baru. Itulah mengapa orang Korea sering bertanya "Kamu lahir tahun berapa?" daripada "Berapa umurmu?"',
      reformTitle: "Reformasi Usia Korea 2023",
      reformP1: "Sejak 28 Juni 2023, Korea Selatan secara resmi mengadopsi sistem usia internasional untuk semua tujuan hukum dan administratif. Dalam dokumen resmi, kontrak, dan layanan pemerintah, hanya usia internasional yang digunakan. Namun, usia Korea masih banyak digunakan dalam percakapan sehari-hari.",
    },
    faq: {
      title: "Pertanyaan yang Sering Diajukan",
      items: [
        {
          q: "Mengapa saya lebih tua di Korea?",
          a: "Karena sistem usia Korea menghitung waktu di dalam kandungan sebagai tahun pertama, dan semua orang bertambah usia bersama pada Tahun Baru, bukan pada ulang tahun masing-masing.",
        },
        {
          q: "Apakah usia Korea masih digunakan?",
          a: "Secara resmi, Korea Selatan beralih ke usia internasional pada Juni 2023. Namun dalam kehidupan sehari-hari, banyak orang Korea masih menyebut usia Korea mereka.",
        },
        {
          q: "Bisakah usia Korea 2 tahun lebih tua dari usia internasional?",
          a: "Bisa! Jika ulang tahun Anda tahun ini belum tiba, usia Korea bisa 2 tahun lebih tua. Misalnya, jika Anda lahir di bulan Desember, pada bulan Januari usia internasional belum bertambah, tapi usia Korea sudah bertambah.",
        },
        {
          q: 'Apa itu "만 나이" (man-nai)?',
          a: '만 나이 secara harfiah berarti "usia penuh" dan mengacu pada sistem penghitungan usia internasional — cara sebagian besar negara di dunia menghitung usia.',
        },
      ],
    },
    footer: "Kalkulator Usia Korea. Dibuat untuk siapa saja yang tertarik dengan budaya Korea.",
  },

  fr: {
    meta: { langLabel: "Français", flag: "🇫🇷" },
    hero: {
      title: "Calculateur d\u2019\u00e2ge cor\u00e9en",
      subtitle:
        "Saviez-vous qu\u2019en Cor\u00e9e vous pourriez avoir 1 \u00e0 2 ans de plus ? Entrez votre date de naissance pour d\u00e9couvrir votre \u00e2ge cor\u00e9en.",
    },
    calculator: {
      heading: "Entrez votre date de naissance",
      label: "Date de naissance",
      placeholder: "",
      button: "Calculer mon \u00e2ge cor\u00e9en",
      koreanAge: "\u00c2ge cor\u00e9en (\ud55c\uad6d \ub098\uc774)",
      internationalAge: "\u00c2ge international (\ub9cc \ub098\uc774)",
      errorEmpty: "Veuillez s\u00e9lectionner votre date de naissance.",
      errorFuture: "La date de naissance ne peut pas \u00eatre dans le futur.",
      errorYear: "Veuillez entrer une ann\u00e9e apr\u00e8s 1900.",
      resultDiff: (diff) =>
        `votre \u00e2ge cor\u00e9en est de ${diff} an(s) de plus que votre \u00e2ge international.`,
      resultBornIn: (year) => `N\u00e9(e) en ${year} \u2014`,
    },
    explanation: {
      howTitle: "Comment fonctionne l\u2019\u00e2ge cor\u00e9en ?",
      howP1: "Dans le syst\u00e8me traditionnel cor\u00e9en, un b\u00e9b\u00e9 est consid\u00e9r\u00e9 comme ayant 1 an \u00e0 la naissance. Ensuite, tout le monde gagne un an le 1er janvier, quel que soit le jour d\u2019anniversaire r\u00e9el. Cela signifie que l\u2019\u00e2ge cor\u00e9en peut \u00eatre de 1 \u00e0 2 ans sup\u00e9rieur \u00e0 l\u2019\u00e2ge international.",
      howFormula: "\u00c2ge cor\u00e9en = Ann\u00e9e actuelle \u2212 Ann\u00e9e de naissance + 1",
      vsTitle: "\u00c2ge cor\u00e9en vs. \u00c2ge international",
      vsP1: "L\u2019\u00e2ge international (\ub9cc \ub098\uc774, man-nai) compte le nombre d\u2019ann\u00e9es compl\u00e8tes que vous avez v\u00e9cues depuis votre naissance. Vous commencez \u00e0 0 et gagnez un an \u00e0 chaque anniversaire. L\u2019\u00e2ge cor\u00e9en, en revanche, commence \u00e0 1 et augmente chaque Jour de l\u2019An. C\u2019est pourquoi les Cor\u00e9ens demandent souvent \u00ab En quelle ann\u00e9e es-tu n\u00e9(e) ? \u00bb plut\u00f4t que \u00ab Quel \u00e2ge as-tu ? \u00bb",
      reformTitle: "R\u00e9forme de l\u2019\u00e2ge en Cor\u00e9e du Sud en 2023",
      reformP1: "Depuis le 28 juin 2023, la Cor\u00e9e du Sud a officiellement adopt\u00e9 le syst\u00e8me d\u2019\u00e2ge international pour toutes les fins l\u00e9gales et administratives. Dans les documents officiels, contrats et services gouvernementaux, seul l\u2019\u00e2ge international est utilis\u00e9. Cependant, l\u2019\u00e2ge cor\u00e9en est encore largement utilis\u00e9 dans les conversations quotidiennes.",
    },
    faq: {
      title: "Questions fr\u00e9quentes",
      items: [
        {
          q: "Pourquoi suis-je plus \u00e2g\u00e9(e) en Cor\u00e9e ?",
          a: "Parce que le syst\u00e8me cor\u00e9en compte le temps dans le ventre de la m\u00e8re comme la premi\u00e8re ann\u00e9e, et tout le monde vieillit ensemble au Jour de l\u2019An plut\u00f4t qu\u2019\u00e0 chaque anniversaire individuel.",
        },
        {
          q: "L\u2019\u00e2ge cor\u00e9en est-il encore utilis\u00e9 aujourd\u2019hui ?",
          a: "Officiellement, la Cor\u00e9e du Sud est pass\u00e9e \u00e0 l\u2019\u00e2ge international en juin 2023. Mais dans la vie quotidienne, beaucoup de Cor\u00e9ens utilisent encore l\u2019\u00e2ge cor\u00e9en dans les conversations informelles.",
        },
        {
          q: "Mon \u00e2ge cor\u00e9en peut-il \u00eatre de 2 ans sup\u00e9rieur \u00e0 mon \u00e2ge international ?",
          a: "Oui ! Si vous n\u2019avez pas encore f\u00eat\u00e9 votre anniversaire cette ann\u00e9e, votre \u00e2ge cor\u00e9en peut \u00eatre de 2 ans sup\u00e9rieur. Par exemple, si vous \u00eates n\u00e9(e) en d\u00e9cembre, en janvier votre \u00e2ge international n\u2019a pas encore augment\u00e9, mais votre \u00e2ge cor\u00e9en oui.",
        },
        {
          q: "Qu\u2019est-ce que \u00ab \ub9cc \ub098\uc774 \u00bb (man-nai) ?",
          a: "\ub9cc \ub098\uc774 signifie litt\u00e9ralement \u00ab \u00e2ge complet \u00bb et d\u00e9signe le syst\u00e8me de calcul de l\u2019\u00e2ge international \u2014 la fa\u00e7on dont la plupart des pays du monde calculent l\u2019\u00e2ge.",
        },
      ],
    },
    footer: "Calculateur d\u2019\u00e2ge cor\u00e9en. Pour tous ceux qui s\u2019int\u00e9ressent \u00e0 la culture cor\u00e9enne.",
  },

  es: {
    meta: { langLabel: "Español", flag: "🇪🇸" },
    hero: {
      title: "Calculadora de Edad Coreana",
      subtitle:
        "\u00bfSab\u00edas que en Corea podr\u00edas tener 1 o 2 a\u00f1os m\u00e1s? Ingresa tu fecha de nacimiento para descubrir tu edad coreana.",
    },
    calculator: {
      heading: "Ingresa tu fecha de nacimiento",
      label: "Fecha de nacimiento",
      placeholder: "",
      button: "Calcular mi edad coreana",
      koreanAge: "Edad coreana (\ud55c\uad6d \ub098\uc774)",
      internationalAge: "Edad internacional (\ub9cc \ub098\uc774)",
      errorEmpty: "Por favor selecciona tu fecha de nacimiento.",
      errorFuture: "La fecha de nacimiento no puede ser en el futuro.",
      errorYear: "Por favor ingresa un a\u00f1o posterior a 1900.",
      resultDiff: (diff) =>
        `tu edad coreana es ${diff} a\u00f1o(s) m\u00e1s que tu edad internacional.`,
      resultBornIn: (year) => `Nacido/a en ${year} \u2014`,
    },
    explanation: {
      howTitle: "\u00bfC\u00f3mo funciona la edad coreana?",
      howP1: "En el sistema tradicional coreano, un beb\u00e9 se considera de 1 a\u00f1o al nacer. Luego, todos ganan un a\u00f1o el 1 de enero, sin importar su fecha de nacimiento real. Esto significa que la edad coreana puede ser 1 o 2 a\u00f1os mayor que la edad internacional.",
      howFormula: "Edad coreana = A\u00f1o actual \u2212 A\u00f1o de nacimiento + 1",
      vsTitle: "Edad coreana vs. Edad internacional",
      vsP1: "La edad internacional (\ub9cc \ub098\uc774, man-nai) cuenta el n\u00famero de a\u00f1os completos que has vivido desde tu nacimiento. Comienzas en 0 y ganas un a\u00f1o en cada cumplea\u00f1os. La edad coreana, por otro lado, comienza en 1 y aumenta cada A\u00f1o Nuevo. Por eso los coreanos suelen preguntar \u00ab\u00bfEn qu\u00e9 a\u00f1o naciste?\u00bb en lugar de \u00ab\u00bfCu\u00e1ntos a\u00f1os tienes?\u00bb",
      reformTitle: "Reforma de la edad en Corea del Sur en 2023",
      reformP1: "Desde el 28 de junio de 2023, Corea del Sur adopt\u00f3 oficialmente el sistema de edad internacional para todos los fines legales y administrativos. En documentos oficiales, contratos y servicios gubernamentales, solo se utiliza la edad internacional. Sin embargo, la edad coreana todav\u00eda se usa ampliamente en conversaciones cotidianas.",
    },
    faq: {
      title: "Preguntas frecuentes",
      items: [
        {
          q: "\u00bfPor qu\u00e9 soy mayor en Corea?",
          a: "Porque el sistema coreano cuenta el tiempo en el vientre materno como el primer a\u00f1o, y todos envejecen juntos en A\u00f1o Nuevo en lugar de en cumplea\u00f1os individuales.",
        },
        {
          q: "\u00bfLa edad coreana todav\u00eda se usa hoy?",
          a: "Oficialmente, Corea del Sur cambi\u00f3 a la edad internacional en junio de 2023. Pero en la vida diaria, muchos coreanos a\u00fan se refieren a su edad coreana en conversaciones informales.",
        },
        {
          q: "\u00bfMi edad coreana puede ser 2 a\u00f1os m\u00e1s que mi edad internacional?",
          a: "\u00a1S\u00ed! Si a\u00fan no has cumplido a\u00f1os este a\u00f1o, tu edad coreana puede ser 2 a\u00f1os mayor. Por ejemplo, si naciste en diciembre, en enero tu edad internacional a\u00fan no aument\u00f3, pero tu edad coreana s\u00ed.",
        },
        {
          q: "\u00bfQu\u00e9 es \u00ab\ub9cc \ub098\uc774\u00bb (man-nai)?",
          a: "\ub9cc \ub098\uc774 significa literalmente \u00abedad completa\u00bb y se refiere al sistema de c\u00e1lculo de edad internacional \u2014 la forma en que la mayor\u00eda de los pa\u00edses del mundo calculan la edad.",
        },
      ],
    },
    footer: "Calculadora de Edad Coreana. Hecha para cualquiera que sienta curiosidad por la cultura coreana.",
  },

  de: {
    meta: { langLabel: "Deutsch", flag: "🇩🇪" },
    hero: {
      title: "Koreanischer Altersrechner",
      subtitle:
        "Wussten Sie, dass Sie in Korea 1-2 Jahre \u00e4lter sein k\u00f6nnten? Geben Sie Ihr Geburtsdatum ein, um Ihr koreanisches Alter herauszufinden.",
    },
    calculator: {
      heading: "Geben Sie Ihr Geburtsdatum ein",
      label: "Geburtsdatum",
      placeholder: "",
      button: "Koreanisches Alter berechnen",
      koreanAge: "Koreanisches Alter (\ud55c\uad6d \ub098\uc774)",
      internationalAge: "Internationales Alter (\ub9cc \ub098\uc774)",
      errorEmpty: "Bitte w\u00e4hlen Sie Ihr Geburtsdatum aus.",
      errorFuture: "Das Geburtsdatum kann nicht in der Zukunft liegen.",
      errorYear: "Bitte geben Sie ein Jahr nach 1900 ein.",
      resultDiff: (diff) =>
        `Ihr koreanisches Alter ist ${diff} Jahr(e) h\u00f6her als Ihr internationales Alter.`,
      resultBornIn: (year) => `Geboren ${year} \u2014`,
    },
    explanation: {
      howTitle: "Wie funktioniert das koreanische Alter?",
      howP1: "Im traditionellen koreanischen Alterssystem wird ein Baby bei der Geburt als 1 Jahr alt betrachtet. Danach wird jeder am 1. Januar ein Jahr \u00e4lter, unabh\u00e4ngig vom tats\u00e4chlichen Geburtstag. Das bedeutet, dass das koreanische Alter 1-2 Jahre h\u00f6her sein kann als das internationale Alter.",
      howFormula: "Koreanisches Alter = Aktuelles Jahr \u2212 Geburtsjahr + 1",
      vsTitle: "Koreanisches Alter vs. Internationales Alter",
      vsP1: "Das internationale Alter (\ub9cc \ub098\uc774, man-nai) z\u00e4hlt die Anzahl der vollen Jahre, die Sie seit Ihrer Geburt gelebt haben. Sie beginnen bei 0 und werden an jedem Geburtstag ein Jahr \u00e4lter. Das koreanische Alter hingegen beginnt bei 1 und erh\u00f6ht sich jedes Neujahr. Deshalb fragen Koreaner oft \u00abIn welchem Jahr bist du geboren?\u00bb statt \u00abWie alt bist du?\u00bb",
      reformTitle: "Altersreform in S\u00fcdkorea 2023",
      reformP1: "Seit dem 28. Juni 2023 hat S\u00fcdkorea das internationale Alterssystem f\u00fcr alle rechtlichen und verwaltungstechnischen Zwecke offiziell eingef\u00fchrt. In offiziellen Dokumenten, Vertr\u00e4gen und Regierungsdiensten wird nur das internationale Alter verwendet. Das koreanische Alter wird jedoch im Alltag weiterhin h\u00e4ufig verwendet.",
    },
    faq: {
      title: "H\u00e4ufig gestellte Fragen",
      items: [
        {
          q: "Warum bin ich in Korea \u00e4lter?",
          a: "Weil das koreanische Alterssystem die Zeit im Mutterleib als erstes Lebensjahr z\u00e4hlt und alle gemeinsam am Neujahrstag \u00e4lter werden, statt an individuellen Geburtstagen.",
        },
        {
          q: "Wird das koreanische Alter heute noch verwendet?",
          a: "Offiziell hat S\u00fcdkorea im Juni 2023 auf das internationale Alter umgestellt. Im Alltag verwenden jedoch viele Koreaner weiterhin das koreanische Alter in informellen Gespr\u00e4chen.",
        },
        {
          q: "Kann mein koreanisches Alter 2 Jahre mehr als mein internationales Alter sein?",
          a: "Ja! Wenn Sie dieses Jahr noch nicht Geburtstag hatten, kann Ihr koreanisches Alter 2 Jahre h\u00f6her sein. Wenn Sie z.B. im Dezember geboren sind, ist im Januar Ihr internationales Alter noch nicht gestiegen, aber Ihr koreanisches Alter schon.",
        },
        {
          q: "Was ist \u00ab\ub9cc \ub098\uc774\u00bb (man-nai)?",
          a: "\ub9cc \ub098\uc774 bedeutet w\u00f6rtlich \u00abvolles Alter\u00bb und bezieht sich auf das internationale Altersberechnungssystem \u2014 die Art, wie die meisten L\u00e4nder der Welt das Alter berechnen.",
        },
      ],
    },
    footer: "Koreanischer Altersrechner. F\u00fcr alle, die sich f\u00fcr die koreanische Kultur interessieren.",
  },
};
