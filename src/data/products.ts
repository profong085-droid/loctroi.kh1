export type CategoryType = 'all' | 'molluscicide' | 'herbicide' | 'insecticide' | 'fungicide' | 'fertilizer' | 'seed' | 'special';

export type LocaleText = string | { kh: string; en: string; vi: string; ar?: string; hi?: string; ja?: string; ko?: string; zh?: string };

export interface Product {
  id: string;
  name: LocaleText;
  image: string;
  category: string;
  categoryKh: string;
  usage: LocaleText;
  ingredients?: LocaleText;
  ingredientDetails?: LocaleText;
  benefits?: LocaleText[];
}

export function getLocalizedText(text: LocaleText | undefined, locale: string): string {
  if (!text) return "";
  if (typeof text === "string") return text;
  return (text as Record<string, string>)[locale] || text.kh || "";
}

export const productsData: Product[] = [
  // I. ថ្នាំកម្ចាត់ខ្យងមាស (Molluscicides)
  { 
    id: "anhead-12-gr", 
    name: { kh: "ANHEAD 12 GR (អានហុីត 12 GR)", en: "ANHEAD 12 GR", vi: "ANHEAD 12 GR", ar: "أنهيد 12 GR", hi: "एनहेड 12 GR", ja: "アンヘッド 12 GR", ko: "앤헤드 12 GR", zh: "ANHEAD 12 GR" }, 
    image: "photo/ANHEAD 12.png", 
    category: "molluscicide", 
    categoryKh: "ថ្នាំកម្ចាត់ខ្យងមាស", 
    usage: { 
      kh: "របៀបប្រើប្រាស់: ០.៥ - ០.៨ គ.ក្រ/១០០០ម២។ ប្រើមុនសាបព្រួស ឬក្រោយសាបព្រួស ១-២ ថ្ងៃ ឬ មុនស្ទូង ១-៣ ថ្ងៃ។",
      en: "Usage: 0.5 - 0.8 kg/1000m2. Apply 1-2 days before or after sowing, or 1-3 days before transplanting.",
      vi: "Cách sử dụng: 0.5 - 0.8 kg/1000m2. Rải trước hoặc sau khi sạ 1-2 ngày, hoặc 1-3 ngày trước khi cấy.",
      ar: "الاستخدام: 0.5 - 0.8 كجم / 1000 م 2. يوضع قبل أو بعد البذر بـ 1-2 يوم، أو 1-3 أيام قبل الزرع.",
      hi: "उपयोग: 0.5 - 0.8 किग्रा/1000 वर्ग मीटर। बुवाई के 1-2 दिन पहले या बाद में, या रोपाई के 1-3 दिन पहले डालें।",
      ja: "使用方法: 0.5 - 0.8 kg/1000m2。播種の1〜2日前または後、あるいは移植の1〜3日前に散布します。",
      ko: "사용법: 0.5 - 0.8 kg/1000m2. 파종 전후 1~2일, 또는 이앙 전 1~3일에 살포합니다.",
      zh: "使用说明: 0.5 - 0.8公斤/1000平方米。在播种前或后1-2天，或移栽前1-3天施用。"
    }, 
    ingredients: { kh: "Metaldehyde 12% w/w", en: "Metaldehyde 12% w/w", vi: "Metaldehyde 12% w/w", ar: "ميتالديهايد 12٪ وزن/وزن", hi: "मेटलडिहाइड 12% w/w", ja: "メタアルデヒド 12% w/w", ko: "메트알데하이드 12% w/w", zh: "四聚乙醛 12% w/w" }, 
    benefits: [
      { kh: "ងាយស្រួលប្រើប្រាស់ដោយបាច", en: "Easy to use by broadcasting", vi: "Dễ sử dụng bằng cách rải", ar: "سهل الاستخدام عن طريق النثر", hi: "प्रसारण द्वारा उपयोग में आसान", ja: "散布で簡単に使用可能", ko: "살포를 통해 쉽게 사용 가능", zh: "通过撒播易于使用" },
      { kh: "សម្លាប់ខ្យងមាសបានលឿន និងមានប្រសិទ្ធភាព", en: "Kills golden apple snails quickly and effectively", vi: "Tiêu diệt ốc bươu vàng nhanh chóng và hiệu quả", ar: "يقتل حلزون التفاح الذهبي بسرعة وفعالية", hi: "गोल्डन एप्पल स्नेल को जल्दी और प्रभावी ढंग से मारता है", ja: "スクミリンゴガイを迅速かつ効果的に駆除", ko: "황금사과달팽이를 빠르고 효과적으로 제거", zh: "快速有效地杀死福寿螺" },
      { kh: "មិនមានផលប៉ះពាល់ដល់គ្រាប់ពូជនិងពន្លកស្រូវ", en: "No adverse effect on seeds and rice shoots", vi: "Không ảnh hưởng đến hạt giống và mầm lúa", ar: "ليس له تأثير سلبي على البذور وبراعم الأرز", hi: "बीज और चावल की टहनियों पर कोई प्रतिकूल प्रभाव नहीं", ja: "種子や稲の苗に悪影響を与えない", ko: "종자 및 벼 새싹에 악영향 없음", zh: "对种子和稻苗没有不良影响" }
    ] 
  },

  // II. ថ្នាំកម្ចាត់ស្មៅ (Herbicides)
  { 
    id: "meco-60-ec", 
    name: { kh: "MECO 60 EC (មេកូ 60 EC)", en: "MECO 60 EC", vi: "MECO 60 EC", ar: "ميكو 60 EC", hi: "मेको 60 EC", ja: "メコ 60 EC", ko: "메코 60 EC", zh: "MECO 60 EC" }, 
    image: "photo/Meco 60 EC 1.png", 
    category: "herbicide", 
    categoryKh: "ថ្នាំកម្ចាត់ស្មៅ", 
    usage: {
      kh: "របៀបប្រើប្រាស់: ១-១.២ លីត្រ/ហិចតា ឬ ១០០-១៥០ ម.ល/ធុង ២៥ លីត្រទឹក។ បរិមាណទឹកចាប់ពី ៣២០ លីត្រ/ហិចតា។ បាញ់ក្រោយសាបព្រោះ ១-៤ ថ្ងៃ។",
      en: "Usage: 1-1.2 liters/hectare or 100-150 ml/25L tank. Water volume from 320 liters/hectare. Spray 1-4 days after sowing.",
      vi: "Cách sử dụng: 1-1.2 lít/ha hoặc 100-150 ml/bình 25L. Lượng nước từ 320 lít/ha. Phun 1-4 ngày sau khi sạ.",
      ar: "الاستخدام: 1-1.2 لتر/هكتار أو 100-150 مل/خزان 25 لتر. حجم الماء من 320 لتر/هكتار. رش 1-4 أيام بعد البذر.",
      hi: "उपयोग: 1-1.2 लीटर/हेक्टेयर या 100-150 मिली/25 लीटर टैंक। 320 लीटर/हेक्टेयर से पानी की मात्रा। बुवाई के 1-4 दिन बाद स्प्रे करें।",
      ja: "使用方法: 1-1.2 L/haまたは100-150 ml/25Lタンク。水量は320 L/ha以上。播種の1〜4日後に散布。",
      ko: "사용법: 1-1.2 리터/헥타르 또는 100-150 ml/25L 탱크. 수량은 320 리터/헥타르부터. 파종 후 1~4일 뒤에 분무.",
      zh: "使用说明: 1-1.2升/公顷或100-150毫升/25升水箱。水量至少320升/公顷。播种后1-4天喷施。"
    }, 
    ingredients: { kh: "Butachlor", en: "Butachlor", vi: "Butachlor", ar: "بوتاكلور", hi: "ब्यूटाक्लोर", ja: "ブタクロール", ko: "부타클로르", zh: "丁草胺" }, 
    benefits: [
      { 
        kh: "មេកូ 60 EC ជាថ្នាំមានប្រសិទ្ធភាពកម្ចាត់ស្មៅបំពង់កង្កែប ស្មៅកន្ទុយឆ្កែ ស្មៅពក កក់ក្ដួប កក់ផ្កាយ", 
        en: "MECO 60 EC effectively controls Leptochloa chinensis, Echinochloa spp, Cyperus iria and other grasses.", 
        vi: "MECO 60 EC là thuốc trừ cỏ hiệu quả cao đối với cỏ lồng vực, cỏ đuôi phụng, cỏ cháo, cỏ bợ...", 
        ar: "ميكو 60 EC هو مبيد أعشاب فعال للسيطرة على الأعشاب الضارة وأنواع مختلفة من الحشائش.", 
        hi: "मेको 60 EC घास और विभिन्न प्रकार के खरपतवारों को प्रभावी ढंग से नियंत्रित करता है।", 
        ja: "MECO 60 ECは、ヒエやその他の雑草を効果的に防除します。", 
        ko: "MECO 60 EC는 피 및 기타 잡초를 효과적으로 방제합니다.", 
        zh: "MECO 60 EC有效控制千金子、稗草、莎草和其他杂草。" 
      }
    ] 
  },
  { 
    id: "ricebeaux", 
    name: { kh: "RICEBEAUX (រ៉ាយប័រ)", en: "RICEBEAUX", vi: "RICEBEAUX", ar: "رايس بوكس", hi: "राइसबॉक्स", ja: "ライスボウ", ko: "라이스보우", zh: "RICEBEAUX" }, 
    image: "photo/RICEBEAUX.png", 
    category: "herbicide", 
    categoryKh: "ថ្នាំកម្ចាត់ស្មៅ", 
    usage: {
      kh: "របៀបប្រើប្រាស់: ២-២.៥ លីត្រ/ហិចតា ឬ ២០០-២៥០ ម.ល/ធុង ២៥ លីត្រ។ លាយ ១០-១៥ ធុង/ហិចតា។ បាញ់ ៥-១០ ថ្ងៃក្រោយសាបព្រោះ។",
      en: "Usage: 2-2.5 liters/hectare or 200-250 ml/25L tank. Mix 10-15 tanks/hectare. Spray 5-10 days after sowing.",
      vi: "Cách sử dụng: 2-2.5 lít/ha hoặc 200-250 ml/bình 25L. Pha 10-15 bình/ha. Phun 5-10 ngày sau khi sạ.",
      ar: "الاستخدام: 2-2.5 لتر/هكتار أو 200-250 مل/خزان 25 لتر. امزج 10-15 خزان/هكتار. رش 5-10 أيام بعد البذر.",
      hi: "उपयोग: 2-2.5 लीटर/हेक्टेयर या 200-250 मिली/25 लीटर टैंक। 10-15 टैंक/हेक्टेयर मिलाएं। बुवाई के 5-10 दिन बाद स्प्रे करें।",
      ja: "使用方法: 2-2.5 L/haまたは200-250 ml/25Lタンク。10-15タンク/haを混合。播種の5〜10日後に散布。",
      ko: "사용법: 2-2.5 리터/헥타르 또는 200-250 ml/25L 탱크. 10-15 탱크/헥타르 혼합. 파종 후 5~10일 뒤에 분무.",
      zh: "使用说明: 2-2.5升/公顷或200-250毫升/25升水箱。每公顷混合10-15箱。播种后5-10天喷施。"
    }, 
    ingredients: { kh: "Propanil 400g/L + Penoxsulam 10g/L", en: "Propanil 400g/L + Penoxsulam 10g/L", vi: "Propanil 400g/L + Penoxsulam 10g/L", ar: "بروبانيل 400 جم/لتر + بينوكسولام 10 جم/لتر", hi: "प्रोपैनिल 400g/L + पेनॉक्ससुलम 10g/L", ja: "プロパニル 400g/L + ペノキススラム 10g/L", ko: "프로파닐 400g/L + 페녹슐람 10g/L", zh: "敌稗 400克/升 + 五氟磺草胺 10克/升" }, 
    benefits: [
      { 
        kh: "កម្ចាត់យ៉ាងមានប្រសិទ្ធភាពនូវស្មៅសូត្រតូច ស្មៅសូត្រធំ ស្មៅបំពង់កង្កែប កក់ក្តួប កក់ផ្កាយ និងស្មៅស្លឹកធំ", 
        en: "Effectively controls small and large sedges, grasses, and broadleaf weeds.", 
        vi: "Tiêu diệt hiệu quả cỏ chác lác, cỏ lồng vực và các loại cỏ lá rộng.", 
        ar: "يسيطر بفعالية على الأعشاب الصغيرة والكبيرة والحشائش عريضة الأوراق.", 
        hi: "छोटी और बड़ी घास और चौड़ी पत्ती वाले खरपतवारों को प्रभावी ढंग से नियंत्रित करता है।", 
        ja: "カヤツリグサ科や広葉雑草を効果的に防除します。", 
        ko: "사초과 잡초 및 광엽 잡초를 효과적으로 방제합니다.", 
        zh: "有效控制小莎草、大莎草、千金子和阔叶杂草。" 
      }
    ] 
  },
  { 
    id: "ankill-a", 
    name: { kh: "ANKILL A 40WP-n (អានគីល អា 40WP-n)", en: "ANKILL A 40WP-n", vi: "ANKILL A 40WP-n", ar: "أنكيل أ 40WP-n", hi: "एनकिल ए 40WP-n", ja: "アンキル A 40WP-n", ko: "안킬 A 40WP-n", zh: "ANKILL A 40WP-n" }, 
    image: "photo/Ankill A-n.png", 
    category: "herbicide", 
    categoryKh: "ថ្នាំកម្ចាត់ស្មៅ", 
    usage: {
      kh: "របៀបប្រើប្រាស់: ២៥-៣០ ក្រាម/ធុង ២៥ លីត្រ។ លាយ ១០-១៥ កញ្ចប់/ហិចតា។ ពេលវេលាបាញ់ ៨-១៥ ថ្ងៃក្រោយសាបព្រោះ (ស្មៅមានពី ២-៣ ស្លឹក)។",
      en: "Usage: 25-30g/25L tank. Mix 10-15 packets/hectare. Spraying time: 8-15 days after sowing (weeds have 2-3 leaves).",
      vi: "Cách sử dụng: 25-30g/bình 25L. Pha 10-15 gói/ha. Thời gian phun: 8-15 ngày sau sạ (cỏ có 2-3 lá).",
      ar: "الاستخدام: 25-30 جم/خزان 25 لتر. امزج 10-15 عبوة/هكتار. وقت الرش: 8-15 يوما بعد البذر (الأعشاب لها 2-3 أوراق).",
      hi: "उपयोग: 25-30 ग्राम/25 लीटर टैंक। 10-15 पैकेट/हेक्टेयर मिलाएं। छिड़काव का समय: बुवाई के 8-15 दिन बाद (खरपतवार के 2-3 पत्ते होते हैं)।",
      ja: "使用方法: 25-30g/25Lタンク。10-15パケット/haを混合。散布時期：播種後8-15日（雑草が2-3葉の時）。",
      ko: "사용법: 25-30g/25L 탱크. 10-15 패킷/헥타르 혼합. 살포 시기: 파종 후 8-15일 (잡초가 2-3개의 잎을 가질 때).",
      zh: "使用说明: 25-30克/25升水箱。每公顷混合10-15包。喷施时间：播种后8-15天（杂草长出2-3片叶子时）。"
    }, 
    ingredients: { kh: "Quinclorac 360g/kg + Bensulfuron methyl 40g/kg", en: "Quinclorac 360g/kg + Bensulfuron methyl 40g/kg", vi: "Quinclorac 360g/kg + Bensulfuron methyl 40g/kg", ar: "كوينكلوراك 360 جم/كجم + بينسولفورون ميثيل 40 جم/كجم", hi: "क्विन्क्लोरैक 360g/kg + बेनसल्फ्यूरॉन मिथाइल 40g/kg", ja: "キンクロラック 360g/kg + ベンスルフロンメチル 40g/kg", ko: "퀸클로락 360g/kg + 벤설퓨론 메틸 40g/kg", zh: "二氯喹啉酸 360克/千克 + 苄嘧磺隆 40克/千克" }, 
    benefits: [
      { 
        kh: "ប្រើដើម្បីកម្ចាត់ ស្មៅសូត្រតូចធំ ស្មៅបំពង់កង្កែប កក់ក្តួប កក់ផ្កាយ និងស្មៅស្លឹកធំ ក្នុងស្រែ", 
        en: "Used to control small and large sedges, grasses, broadleaf weeds in rice fields.", 
        vi: "Dùng để diệt các loại cỏ chác lác, cỏ lồng vực và cỏ lá rộng trong ruộng lúa.", 
        ar: "يستخدم للسيطرة على الأعشاب الصغيرة والكبيرة، والحشائش، والأعشاب عريضة الأوراق في حقول الأرز.", 
        hi: "चावल के खेतों में छोटी और बड़ी घास, चौड़ी पत्ती वाले खरपतवारों को नियंत्रित करने के लिए उपयोग किया जाता है।", 
        ja: "田んぼのカヤツリグサ科、イネ科、広葉雑草の防除に使用します。", 
        ko: "논의 사초과, 화본과, 광엽 잡초를 방제하는 데 사용됩니다.", 
        zh: "用于防除稻田中的小莎草、大莎草、千金子和阔叶杂草。" 
      }
    ] 
  },
  { 
    id: "saltare", 
    name: { kh: "SALTARE (សាលធា)", en: "SALTARE", vi: "SALTARE", ar: "سالتير", hi: "सॉल्टेयर", ja: "サルタレ", ko: "살타레", zh: "SALTARE" }, 
    image: "photo/SALTARE 1.png", 
    category: "herbicide", 
    categoryKh: "ថ្នាំកម្ចាត់ស្មៅ", 
    usage: {
      kh: "របៀបប្រើប្រាស់: ២.២៥-៣ លីត្រ/ហិចតា ឬ ២៥០ ម.ល/ធុង ២៥ លីត្រទឹក។ បាញ់ ៧-១២ ថ្ងៃក្រោយព្រោះ (ពេលស្មៅមានស្លឹក ២-៣ ស្លឹក)។",
      en: "Usage: 2.25-3 liters/hectare or 250 ml/25L tank. Spray 7-12 days after sowing (when weeds have 2-3 leaves).",
      vi: "Cách sử dụng: 2.25-3 lít/ha hoặc 250 ml/bình 25L. Phun 7-12 ngày sau sạ (khi cỏ có 2-3 lá).",
      ar: "الاستخدام: 2.25-3 لتر/هكتار أو 250 مل/خزان 25 لتر. رش 7-12 يوما بعد البذر (عندما يكون للأعشاب 2-3 أوراق).",
      hi: "उपयोग: 2.25-3 लीटर/हेक्टेयर या 250 मिली/25 लीटर टैंक। बुवाई के 7-12 दिन बाद स्प्रे करें (जब खरपतवार के 2-3 पत्ते हों)।",
      ja: "使用方法: 2.25-3 L/haまたは250 ml/25Lタンク。播種後7-12日（雑草が2-3葉の時）に散布。",
      ko: "사용법: 2.25-3 리터/헥타르 또는 250 ml/25L 탱크. 파종 후 7-12일 뒤에 분무 (잡초가 2-3개의 잎을 가질 때).",
      zh: "使用说明: 2.25-3升/公顷或250毫升/25升水箱。播种后7-12天喷施（当杂草长出2-3片叶子时）。"
    }, 
    ingredients: { kh: "Propanil 220g/L + Flusulfinam 30g/L", en: "Propanil 220g/L + Flusulfinam 30g/L", vi: "Propanil 220g/L + Flusulfinam 30g/L", ar: "بروبانيل 220 جم/لتر + فلوسلفينام 30 جم/لتر", hi: "प्रोपैनिल 220g/L + फ्लुसल्फिनम 30g/L", ja: "プロパニル 220g/L + フルズルフィナム 30g/L", ko: "프로파닐 220g/L + 플루설피남 30g/L", zh: "敌稗 220克/升 + 氟草胺 30克/升" }, 
    benefits: [
      { 
        kh: "សាលតារ៉េ (SALTARE) ជាប្រភេទថ្នាំសម្លាប់ស្មៅចំរុះ ដែលមានប្រសិទ្ធភាពខ្ពស់ក្នុងការកម្ចាត់ស្មៅបំពង់កង្កែប ស្មៅកន្ទុយឆ្កែ កក់ក្ដួប កក់ផ្កាយ និងស្មៅស្លឹកធំ", 
        en: "SALTARE is a mixed herbicide highly effective in controlling grasses, sedges and broadleaf weeds.", 
        vi: "SALTARE là loại thuốc trừ cỏ hỗn hợp có hiệu quả cao trong việc tiêu diệt các loại cỏ lồng vực, đuôi phụng, cỏ chác lác và cỏ lá rộng.", 
        ar: "سالتير هو مبيد أعشاب مختلط فعال للغاية في السيطرة على الأعشاب الضارة والحشائش والحشائش عريضة الأوراق.", 
        hi: "सॉल्टेयर एक मिश्रित शाकनाशी है जो घास और चौड़ी पत्ती वाले खरपतवारों को नियंत्रित करने में अत्यधिक प्रभावी है।", 
        ja: "サルタレは、イネ科、カヤツリグサ科、広葉雑草の防除に高い効果を発揮する混合除草剤です。", 
        ko: "살타레는 화본과, 사초과 및 광엽 잡초를 방제하는 데 매우 효과적인 혼합 제초제입니다。", 
        zh: "SALTARE是一种混合除草剂，在防除杂草、莎草和阔叶杂草方面非常有效。" 
      }
    ] 
  },
  { 
    id: "savant", 
    name: { kh: "SAVANT (សាវ៉ាន់)", en: "SAVANT", vi: "SAVANT", ar: "سافانت", hi: "सावंत", ja: "サバント", ko: "사반트", zh: "SAVANT" }, 
    image: "photo/SAVANT.png", 
    category: "herbicide", 
    categoryKh: "ថ្នាំកម្ចាត់ស្មៅ", 
    usage: {
      kh: "របៀបប្រើប្រាស់: ១.២-១.៨ លីត្រ/ហិចតា ឬ ១០០-១៥០ ម.ល/ធុង ២៥ លីត្រ។ បាញ់នៅពេលស្មៅមាន ២-៤ ស្លឹក (៨-១៥ ថ្ងៃក្រោយព្រោះ)។",
      en: "Usage: 1.2-1.8 liters/hectare or 100-150 ml/25L tank. Spray when weeds have 2-4 leaves (8-15 days after sowing).",
      vi: "Cách sử dụng: 1.2-1.8 lít/ha hoặc 100-150 ml/bình 25L. Phun khi cỏ có 2-4 lá (8-15 ngày sau sạ).",
      ar: "الاستخدام: 1.2-1.8 لتر/هكتار أو 100-150 مل/خزان 25 لتر. رش عندما يكون للأعشاب 2-4 أوراق (8-15 يوما بعد البذر).",
      hi: "उपयोग: 1.2-1.8 लीटर/हेक्टेयर या 100-150 मिली/25 लीटर टैंक। स्प्रे करें जब खरपतवार के 2-4 पत्ते हों (बुवाई के 8-15 दिन बाद)।",
      ja: "使用方法: 1.2-1.8 L/haまたは100-150 ml/25Lタンク。雑草が2-4葉の時に散布（播種後8-15日）。",
      ko: "사용법: 1.2-1.8 리터/헥타르 또는 100-150 ml/25L 탱크. 잡초가 2-4개의 잎을 가질 때 분무 (파종 후 8-15일).",
      zh: "使用说明: 1.2-1.8升/公顷或100-150毫升/25升水箱。在杂草长出2-4片叶子时喷施（播种后8-15天）。"
    }, 
    ingredients: { kh: "MCPA-isooctyl 150g/L + Metamifop 100g/L + Fluchloraminopyr-tefuryl 30g/L", en: "MCPA-isooctyl 150g/L + Metamifop 100g/L + Fluchloraminopyr-tefuryl 30g/L", vi: "MCPA-isooctyl 150g/L + Metamifop 100g/L + Fluchloraminopyr-tefuryl 30g/L", ar: "إم سي بي إيه-أيزوأوكتيل 150 جم/لتر + ميتاميفوب 100 جم/لتر + فلوكلورأمينوبير-تيفوريل 30 جم/لتر", hi: "MCPA-isooctyl 150g/L + Metamifop 100g/L + Fluchloraminopyr-tefuryl 30g/L", ja: "MCPA-イソオクチル 150g/L + メタミホップ 100g/L + フルクロラミノピルテフリル 30g/L", ko: "MCPA-이소옥틸 150g/L + 메타미폽 100g/L + 플루클로라미노피르-테푸릴 30g/L", zh: "MCPA异辛酯 150克/升 + 噁唑酰草胺 100克/升 + 氟氯吡啶酯 30克/升" }, 
    benefits: [
      { 
        kh: "សាវ៉ាន់ (SAVANT) ប្រើដើម្បីកម្ចាត់ស្មៅសូត្រតូច ស្មៅសូត្រធំ ស្មៅបំពង់កង្កែប កក់ក្តួប កក់ផ្កាយ ស្មៅកន្ទុយឆ្កែ និងស្មៅស្លឹកធំ", 
        en: "SAVANT is used to control small and large sedges, grasses, broadleaf weeds.", 
        vi: "SAVANT được sử dụng để tiêu diệt các loại cỏ chác lác, cỏ lồng vực, cỏ đuôi phụng và cỏ lá rộng.", 
        ar: "يستخدم سافانت للسيطرة على الأعشاب الصغيرة والكبيرة، والحشائش، والأعشاب عريضة الأوراق.", 
        hi: "सावंत का उपयोग छोटी और बड़ी घास, चौड़ी पत्ती वाले खरपतवारों को नियंत्रित करने के लिए किया जाता है।", 
        ja: "SAVANTは、カヤツリグサ科、イネ科、広葉雑草の防除に使用されます。", 
        ko: "사반트는 사초과, 화본과 및 광엽 잡초를 방제하는 데 사용됩니다.", 
        zh: "SAVANT用于控制小莎草、大莎草、千金子和阔叶杂草。" 
      }
    ] 
  },
  { 
    id: "anco-600sl", 
    name: { kh: "ANCO 600 SL (អានកូ 600 SL)", en: "ANCO 600 SL", vi: "ANCO 600 SL", ar: "أنكو 600 SL", hi: "एनको 600 SL", ja: "アンコ 600 SL", ko: "안코 600 SL", zh: "ANCO 600 SL" }, 
    image: "photo/Anco 600SL-480ml.png", 
    category: "herbicide", 
    categoryKh: "ថ្នាំកម្ចាត់ស្មៅ", 
    usage: {
      kh: "របៀបប្រើប្រាស់: លាយ ១០០ ម.ល/ធុង ២៥ លីត្រ។ បាញ់ថ្នាំក្នុងកម្រិត ២០ ធុង/ហិចតា (ក្រោយព្រោះ ២០-៤០ ថ្ងៃ) សម្រាប់ការបាញ់ថ្នាំ និង ១០-១៥ ថ្ងៃក្រោយស្ទូង។",
      en: "Usage: Mix 100 ml/25L tank. Spray at 20 tanks/hectare (20-40 days after sowing) or 10-15 days after transplanting.",
      vi: "Cách sử dụng: Pha 100 ml/bình 25L. Phun với liều lượng 20 bình/ha (sau sạ 20-40 ngày) và 10-15 ngày sau khi cấy.",
      ar: "الاستخدام: امزج 100 مل/خزان 25 لتر. رش بمعدل 20 خزانًا/هكتار (20-40 يومًا بعد البذر) أو 10-15 يومًا بعد الزرع.",
      hi: "उपयोग: 100 मिली/25 लीटर टैंक मिलाएं। 20 टैंक/हेक्टेयर (बुवाई के 20-40 दिन बाद) या रोपाई के 10-15 दिन बाद स्प्रे करें।",
      ja: "使用方法: 100 ml/25Lタンクを混合。20タンク/ha（播種後20-40日）または移植後10-15日に散布。",
      ko: "사용법: 100 ml/25L 탱크 혼합. 20 탱크/헥타르(파종 후 20-40일) 또는 이앙 후 10-15일에 분무.",
      zh: "使用说明: 混合100毫升/25升水箱。以20箱/公顷喷施（播种后20-40天）或移栽后10-15天喷施。"
    }, 
    ingredients: { kh: "2,4 D Dimethyl amine 600g/L", en: "2,4 D Dimethyl amine 600g/L", vi: "2,4 D Dimethyl amine 600g/L", ar: "2,4 D ثنائي ميثيل أمين 600 جم/لتر", hi: "2,4 D डाइमिथाइल अमीन 600g/L", ja: "2,4-D ジメチルアミン塩 600g/L", ko: "2,4-D 디메틸 아민 600g/L", zh: "2,4-滴二甲胺 600克/升" }, 
    benefits: [
      { 
        kh: "អានកូ 600 SL ប្រើដើម្បីកម្ចាត់ស្មៅស្លឹកធំ និងកក់ ដែលដុះក្នុងស្រែស្រូវ និងដីចម្ការ", 
        en: "ANCO 600 SL is used to control broadleaf weeds and sedges growing in rice fields and farms.", 
        vi: "ANCO 600 SL được dùng để tiêu diệt cỏ lá rộng và cói lát mọc trong ruộng lúa và đất rẫy.", 
        ar: "يستخدم أنكو 600 SL للسيطرة على الأعشاب عريضة الأوراق والحشائش في حقول الأرز والمزارع.", 
        hi: "एनको 600 SL का उपयोग चावल के खेतों और खेतों में उगने वाले चौड़ी पत्ती वाले खरपतवारों को नियंत्रित करने के लिए किया जाता है।", 
        ja: "ANCO 600 SLは、水田や農地に生える広葉雑草やカヤツリグサ科の防除に使用されます。", 
        ko: "안코 600 SL은 논과 밭에서 자라는 광엽 잡초와 사초과 잡초를 방제하는 데 사용됩니다.", 
        zh: "ANCO 600 SL用于控制稻田和农田中的阔叶杂草和莎草。" 
      }
    ] 
  },
  { 
    id: "anco-720sl", 
    name: { kh: "ANCO 720 SL (អានកូ 720 SL)", en: "ANCO 720 SL", vi: "ANCO 720 SL", ar: "أنكو 720 SL", hi: "एनको 720 SL", ja: "アンコ 720 SL", ko: "안코 720 SL", zh: "ANCO 720 SL" }, 
    image: "photo/Anco 720SL.png", 
    category: "herbicide", 
    categoryKh: "ថ្នាំកម្ចាត់ស្មៅ", 
    usage: {
      kh: "របៀបប្រើប្រាស់: ១-១.២ លីត្រ/ហិចតា ឬលាយ ៥០-៦០ ម.ល/ធុង ២៥ លីត្រ។ បាញ់ក្រោយពេលព្រោះ ១០ ថ្ងៃ ក្រោយពេលស្ទូង ២០ ថ្ងៃ។",
      en: "Usage: 1-1.2 liters/hectare or mix 50-60 ml/25L tank. Spray 10 days after sowing or 20 days after transplanting.",
      vi: "Cách sử dụng: 1-1.2 lít/ha hoặc pha 50-60 ml/bình 25L. Phun sau khi sạ 10 ngày hoặc sau khi cấy 20 ngày.",
      ar: "الاستخدام: 1-1.2 لتر/هكتار أو امزج 50-60 مل/خزان 25 لتر. رش بعد 10 أيام من البذر أو 20 يوما من الزرع.",
      hi: "उपयोग: 1-1.2 लीटर/हेक्टेयर या 50-60 मिली/25 लीटर टैंक मिलाएं। बुवाई के 10 दिन बाद या रोपाई के 20 दिन बाद स्प्रे करें।",
      ja: "使用方法: 1-1.2 L/haまたは50-60 ml/25Lタンク。播種後10日、または移植後20日に散布。",
      ko: "사용법: 1-1.2 리터/헥타르 또는 50-60 ml/25L 탱크 혼합. 파종 후 10일 또는 이앙 후 20일에 분무.",
      zh: "使用说明: 1-1.2升/公顷或混合50-60毫升/25升水箱。播种后10天或移栽后20天喷施。"
    }, 
    ingredients: { kh: "2,4 D Dimethyl amine 720g/L", en: "2,4 D Dimethyl amine 720g/L", vi: "2,4 D Dimethyl amine 720g/L", ar: "2,4 D ثنائي ميثيل أمين 720 جم/لتر", hi: "2,4 D डाइमिथाइल अमीन 720g/L", ja: "2,4-D ジメチルアミン塩 720g/L", ko: "2,4-D 디메틸 아민 720g/L", zh: "2,4-滴二甲胺 720克/升" }, 
    benefits: [
      { 
        kh: "អានកូ 720 SL ប្រើដើម្បីកម្ចាត់ស្មៅស្លឹកធំ កក់គ្រប់ប្រភេទ ដែលដុះក្នុងចំការកៅស៊ូ និងស្រូវក្នុងស្រែ", 
        en: "ANCO 720 SL is used to control broadleaf weeds and sedges in rubber plantations and rice fields.", 
        vi: "ANCO 720 SL được dùng để tiêu diệt cỏ lá rộng, các loại cói lát mọc trong vườn cao su và ruộng lúa.", 
        ar: "يستخدم أنكو 720 SL للسيطرة على الأعشاب عريضة الأوراق والحشائش في مزارع المطاط وحقول الأرز.", 
        hi: "एनको 720 SL का उपयोग रबर के बागानों और चावल के खेतों में चौड़ी पत्ती वाले खरपतवारों को नियंत्रित करने के लिए किया जाता है।", 
        ja: "ANCO 720 SLは、ゴム農園や水田の広葉雑草やカヤツリグサ科の防除に使用されます。", 
        ko: "안코 720 SL은 고무 농장 및 논의 광엽 잡초와 사초과 잡초를 방제하는 데 사용됩니다.", 
        zh: "ANCO 720 SL用于控制橡胶园和稻田中的阔叶杂草和莎草。" 
      }
    ] 
  },
  { 
    id: "glyphosan-480-sl", 
    name: { kh: "GLYPHOSAN 480 SL (គ្លីហ្វូសាន 480 SL)", en: "GLYPHOSAN 480 SL", vi: "GLYPHOSAN 480 SL", ar: "غليفوسان 480 SL", hi: "ग्लाइफोसन 480 SL", ja: "グリホサン 480 SL", ko: "글리포산 480 SL", zh: "GLYPHOSAN 480 SL" }, 
    image: "photo/Glyphosan 480 SL.png", 
    category: "herbicide", 
    categoryKh: "ថ្នាំកម្ចាត់ស្មៅ", 
    usage: {
      kh: "របៀបប្រើប្រាស់: ៣.៥-៤ លីត្រ/ហិចតា ឬ ១៧៥-២០០ ម.ល/ធុង ២៥ លីត្រ។",
      en: "Usage: 3.5-4 liters/hectare or 175-200 ml/25L tank.",
      vi: "Cách sử dụng: 3.5-4 lít/ha hoặc 175-200 ml/bình 25L.",
      ar: "الاستخدام: 3.5-4 لتر/هكتار أو 175-200 مل/خزان 25 لتر.",
      hi: "उपयोग: 3.5-4 लीटर/हेक्टेयर या 175-200 मिली/25 लीटर टैंक।",
      ja: "使用方法: 3.5-4 L/haまたは175-200 ml/25Lタンク。",
      ko: "사용법: 3.5-4 리터/헥타르 또는 175-200 ml/25L 탱크.",
      zh: "使用说明: 3.5-4升/公顷或175-200毫升/25升水箱。"
    }, 
    ingredients: { kh: "Glyphosate IPA 480g/L", en: "Glyphosate IPA 480g/L", vi: "Glyphosate IPA 480g/L", ar: "غليفوسات IPA 480 جم/لتر", hi: "ग्लाइफोसेट IPA 480g/L", ja: "グリホサートイソプロピルアミン塩 480g/L", ko: "글리포세이트 IPA 480g/L", zh: "草甘膦异丙胺盐 480克/升" }, 
    benefits: [
      { 
        kh: "គ្លីហ្វូសាន 480 SL ជាថ្នាំកម្ចាត់ស្មៅរាល់ឆ្នាំ និងស្មៅដុះជាច្រើនឆ្នាំ ដែលដុះក្នុងចំការកៅស៊ូ និងចំការដំណាំហូបផ្លែ", 
        en: "GLYPHOSAN 480 SL is used to control annual and perennial weeds growing in rubber plantations and fruit orchards.", 
        vi: "GLYPHOSAN 480 SL là thuốc trừ cỏ hàng năm và đa niên mọc trong vườn cao su và vườn cây ăn trái.", 
        ar: "يستخدم غليفوسان 480 SL للسيطرة على الأعشاب السنوية والمعمرة التي تنمو في مزارع المطاط وبساتين الفاكهة.", 
        hi: "ग्लाइफोसन 480 SL का उपयोग रबर के बागानों और फलों के बागों में उगने वाले वार्षिक और बारहमासी खरपतवारों को नियंत्रित करने के लिए किया जाता है।", 
        ja: "GLYPHOSAN 480 SLは、ゴム農園や果樹園に生える一年生および多年生雑草の防除に使用されます。", 
        ko: "글리포산 480 SL은 고무 농장 및 과수원에서 자라는 일년생 및 다년생 잡초를 방제하는 데 사용됩니다.", 
        zh: "GLYPHOSAN 480 SL用于控制橡胶园和果园中生长的单子叶和多年生杂草。" 
      }
    ] 
  },
  { 
    id: "glyphosan-757sg", 
    name: { kh: "GLYPHOSAN 757 SG (គ្លីហ្វូសាន 757 SG)", en: "GLYPHOSAN 757 SG", vi: "GLYPHOSAN 757 SG", ar: "غليفوسان 757 SG", hi: "ग्लाइफोसन 757 SG", ja: "グリホサン 757 SG", ko: "글리포산 757 SG", zh: "GLYPHOSAN 757 SG" }, 
    image: "photo/Glyphosan 757SG.png", 
    category: "herbicide", 
    categoryKh: "ថ្នាំកម្ចាត់ស្មៅ", 
    usage: {
      kh: "របៀបប្រើប្រាស់: ២-២.៥ គីឡូក្រាម/ហិចតា ឬ ១០០-១២៥ ក្រាម/ធុង ២៥ លីត្រ។",
      en: "Usage: 2-2.5 kg/hectare or 100-125 g/25L tank.",
      vi: "Cách sử dụng: 2-2.5 kg/ha hoặc 100-125 g/bình 25L.",
      ar: "الاستخدام: 2-2.5 كجم/هكتار أو 100-125 جم/خزان 25 لتر.",
      hi: "उपयोग: 2-2.5 किग्रा/हेक्टेयर या 100-125 ग्राम/25 लीटर टैंक।",
      ja: "使用方法: 2-2.5 kg/haまたは100-125 g/25Lタンク。",
      ko: "사용법: 2-2.5 kg/헥타르 또는 100-125 g/25L 탱크.",
      zh: "使用说明: 2-2.5千克/公顷或100-125克/25升水箱。"
    }, 
    ingredients: { kh: "Glyphosate Ammonium 757g/kg", en: "Glyphosate Ammonium 757g/kg", vi: "Glyphosate Ammonium 757g/kg", ar: "غليفوسات الأمونيوم 757 جم/كجم", hi: "ग्लाइफोसेट अमोनियम 757g/kg", ja: "グリホサートアンモニウム塩 757g/kg", ko: "글리포세이트 암모늄 757g/kg", zh: "草甘膦铵盐 757克/千克" }, 
    benefits: [
      { 
        kh: "គ្លីហ្វូសាន 757 SG ជាថ្នាំកម្ចាត់ស្មៅរាល់ឆ្នាំ និងស្មៅដុះជាច្រើនឆ្នាំ ដែលដុះក្នុងចំការកៅស៊ូ និងចំការដំណាំហូបផ្លែ", 
        en: "GLYPHOSAN 757 SG is used to control annual and perennial weeds growing in rubber plantations and fruit orchards.", 
        vi: "GLYPHOSAN 757 SG là thuốc trừ cỏ hàng năm và đa niên mọc trong vườn cao su và vườn cây ăn trái.", 
        ar: "يستخدم غليفوسان 757 SG للسيطرة على الأعشاب السنوية والمعمرة التي تنمو في مزارع المطاط وبساتين الفاكهة.", 
        hi: "ग्लाइफोसन 757 SG का उपयोग रबर के बागानों और फलों के बागों में उगने वाले वार्षिक और बारहमासी खरपतवारों को नियंत्रित करने के लिए किया जाता है।", 
        ja: "GLYPHOSAN 757 SGは、ゴム農園や果樹園に生える一年生および多年生雑草の防除に使用されます。", 
        ko: "글리포산 757 SG는 고무 농장 및 과수원에서 자라는 일년생 및 다년생 잡초를 방제하는 데 사용됩니다.", 
        zh: "GLYPHOSAN 757 SG用于控制橡胶园和果园中生长的单子叶和多年生杂草。" 
      }
    ] 
  },
  { 
    id: "facinate", 
    name: { kh: "FASCINATE 150 SL (ហ្វាសស៊ីនេត 150 SL)", en: "FASCINATE 150 SL", vi: "FASCINATE 150 SL", ar: "فاسينيت 150 SL", hi: "फैसिनेट 150 SL", ja: "ファシネート 150 SL", ko: "파시네이트 150 SL", zh: "FASCINATE 150 SL" }, 
    image: "photo/Facinate.png", 
    category: "herbicide", 
    categoryKh: "ថ្នាំកម្ចាត់ស្មៅ", 
    usage: {
      kh: "របៀបប្រើប្រាស់: ប្រើ ៣-៣.៣ លីត្រ/ហិចតា ឬលាយ ១០០-១១០ ម.ល/ធុង ២០ លីត្រទឹក។ បាញ់លើស្មៅដុះលូតលាស់ល្អ ស្មៅកំពុងចេញផ្កា និងពេលដីមានសំណើម។",
      en: "Usage: Use 3-3.3 liters/hectare or mix 100-110 ml/20L tank. Spray on actively growing or flowering weeds and when the soil is moist.",
      vi: "Cách sử dụng: Dùng 3-3.3 lít/ha hoặc pha 100-110 ml/bình 20L. Phun khi cỏ đang phát triển mạnh, cỏ đang ra hoa và khi đất ẩm.",
      ar: "الاستخدام: استخدم 3-3.3 لتر/هكتار أو امزج 100-110 مل/خزان 20 لتر. رش على الأعشاب سريعة النمو أو المزهرة وعندما تكون التربة رطبة.",
      hi: "उपयोग: 3-3.3 लीटर/हेक्टेयर का उपयोग करें या 100-110 मिली/20 लीटर टैंक मिलाएं। सक्रिय रूप से बढ़ने वाले या फूल वाले खरपतवारों पर और मिट्टी नम होने पर स्प्रे करें।",
      ja: "使用方法: 3-3.3 L/haを使用、または100-110 ml/20Lタンクを混合。生育期または開花期の雑草、および土壌が湿っている時に散布します。",
      ko: "사용법: 3-3.3 리터/헥타르를 사용하거나 100-110 ml/20L 탱크를 혼합합니다. 활발히 자라거나 개화 중인 잡초에 토양이 촉촉할 때 분무합니다.",
      zh: "使用说明: 使用3-3.3升/公顷或混合100-110毫升/20升水箱。在杂草旺盛生长或开花时，且土壤湿润时喷施。"
    }, 
    ingredients: { kh: "Glufosinate Ammonium", en: "Glufosinate Ammonium", vi: "Glufosinate Ammonium", ar: "غلوفوسينات الأمونيوم", hi: "ग्लूफ़ोसिनेट अमोनियम", ja: "グルホシネートアンモニウム塩", ko: "글루포시네이트 암모늄", zh: "草铵膦" }, 
    benefits: [
      { 
        kh: "ហ្វាស៊ីណេត 150 SL ប្រើសម្រាប់កម្ចាត់ស្មៅស្លឹកតូច និងស្មៅស្លឹកធំ កម្ចាត់ស្មៅទើបដុះ ឬស្មៅដែលកំពុងចេញផ្កា ឬស្មៅចាស់ៗ ដែលដុះក្នុងចំការកៅស៊ូ ចំការកាហ្វេ ចំការដំណាំហូបផ្លែ និងដីទំនេរ", 
        en: "FASCINATE 150 SL is used to control narrow and broadleaf weeds, newly grown, flowering or old weeds in rubber, coffee, fruit orchards, and vacant lands.", 
        vi: "FASCINATE 150 SL được dùng để tiêu diệt cỏ lá hẹp và cỏ lá rộng, cỏ mới mọc, cỏ đang ra hoa hoặc cỏ già trong vườn cao su, cà phê, vườn cây ăn trái và đất trống.", 
        ar: "يستخدم فاسينيت 150 SL للسيطرة على الأعشاب ضيقة وعريضة الأوراق، والأعشاب المزروعة حديثا أو المزهرة أو القديمة في مزارع المطاط والقهوة وبساتين الفاكهة والأراضي الفضاء.", 
        hi: "फैसिनेट 150 SL का उपयोग रबर, कॉफी, फलों के बागों और खाली जमीनों में संकरी और चौड़ी पत्ती वाले खरपतवारों, नए उगे, फूल वाले या पुराने खरपतवारों को नियंत्रित करने के लिए किया जाता है।", 
        ja: "FASCINATE 150 SLは、ゴム、コーヒー、果樹園、空き地の狭葉および広葉雑草、新芽、開花中または古い雑草の防除に使用されます。", 
        ko: "파시네이트 150 SL은 고무, 커피, 과수원 및 공터의 세엽 및 광엽 잡초, 새로 자라거나 개화 중이거나 오래된 잡초를 방제하는 데 사용됩니다.", 
        zh: "FASCINATE 150 SL用于控制橡胶、咖啡、果园和空地上的窄叶和阔叶杂草，新长出的、开花的或老杂草。" 
      }
    ] 
  },
  { 
    id: "facinate-4-5l", 
    name: { kh: "FASCINATE 150 SL (ហ្វាស៊ីនេត 150 SL) ចំណុះ 4.5L", en: "FASCINATE 150 SL 4.5L", vi: "FASCINATE 150 SL 4.5L", ar: "فاسينيت 150 SL 4.5 لتر", hi: "फैसिनेट 150 SL 4.5L", ja: "ファシネート 150 SL 4.5L", ko: "파시네이트 150 SL 4.5L", zh: "FASCINATE 150 SL 4.5升" }, 
    image: "photo/Facinate 4.5L-1.png", 
    category: "herbicide", 
    categoryKh: "ថ្នាំកម្ចាត់ស្មៅ", 
    usage: {
      kh: "របៀបប្រើប្រាស់: ប្រើ ៣-៣.៣ លីត្រ/ហិចតា ឬលាយ ១០០-១១០ ម.ល/ធុង ២០ លីត្រទឹក។ បាញ់លើស្មៅដុះលូតលាស់ល្អ ស្មៅកំពុងចេញផ្កា និងពេលដីមានសំណើម។",
      en: "Usage: Use 3-3.3 liters/hectare or mix 100-110 ml/20L tank. Spray on actively growing or flowering weeds and when the soil is moist.",
      vi: "Cách sử dụng: Dùng 3-3.3 lít/ha hoặc pha 100-110 ml/bình 20L. Phun khi cỏ đang phát triển mạnh, cỏ đang ra hoa và khi đất ẩm.",
      ar: "الاستخدام: استخدم 3-3.3 لتر/هكتار أو امزج 100-110 مل/خزان 20 لتر. رش على الأعشاب سريعة النمو أو المزهرة وعندما تكون التربة رطبة.",
      hi: "उपयोग: 3-3.3 लीटर/हेक्टेयर का उपयोग करें या 100-110 मिली/20 लीटर टैंक मिलाएं। सक्रिय रूप से बढ़ने वाले या फूल वाले खरपतवारों पर और मिट्टी नम होने पर स्प्रे करें।",
      ja: "使用方法: 3-3.3 L/haを使用、または100-110 ml/20Lタンクを混合。生育期または開花期の雑草、および土壌が湿っている時に散布します。",
      ko: "사용법: 3-3.3 리터/헥타르를 사용하거나 100-110 ml/20L 탱크를 혼합합니다. 활발히 자라거나 개화 중인 잡초에 토양이 촉촉할 때 분무합니다.",
      zh: "使用说明: 使用3-3.3升/公顷或混合100-110毫升/20升水箱。在杂草旺盛生长或开花时，且土壤湿润时喷施。"
    }, 
    ingredients: { kh: "Glufosinate Ammonium", en: "Glufosinate Ammonium", vi: "Glufosinate Ammonium", ar: "غلوفوسينات الأمونيوم", hi: "ग्लूफ़ोसिनेट अमोनियम", ja: "グルホシネートアンモニウム塩", ko: "글루포시네이트 암모늄", zh: "草铵膦" }, 
    benefits: [
      { 
        kh: "ហ្វាស៊ីណេត 150 SL ប្រើសម្រាប់កម្ចាត់ស្មៅស្លឹកតូច និងស្មៅស្លឹកធំ កម្ចាត់ស្មៅទើបដុះ ឬស្មៅដែលកំពុងចេញផ្កា ឬស្មៅចាស់ៗ ដែលដុះក្នុងចំការកៅស៊ូ ចំការកាហ្វេ ចំការដំណាំហូបផ្លែ និងដីទំនេរ", 
        en: "FASCINATE 150 SL is used to control narrow and broadleaf weeds, newly grown, flowering or old weeds in rubber, coffee, fruit orchards, and vacant lands.", 
        vi: "FASCINATE 150 SL được dùng để tiêu diệt cỏ lá hẹp và cỏ lá rộng, cỏ mới mọc, cỏ đang ra hoa hoặc cỏ già trong vườn cao su, cà phê, vườn cây ăn trái và đất trống.", 
        ar: "يستخدم فاسينيت 150 SL للسيطرة على الأعشاب ضيقة وعريضة الأوراق، والأعشاب المزروعة حديثا أو المزهرة أو القديمة في مزارع المطاط والقهوة وبساتين الفاكهة والأراضي الفضاء.", 
        hi: "फैसिनेट 150 SL का उपयोग रबर, कॉफी, फलों के बागों और खाली जमीनों में संकरी और चौड़ी पत्ती वाले खरपतवारों, नए उगे, फूल वाले या पुराने खरपतवारों को नियंत्रित करने के लिए किया जाता है।", 
        ja: "FASCINATE 150 SLは、ゴム、コーヒー、果樹園、空き地の狭葉および広葉雑草、新芽、開花中または古い雑草の防除に使用されます。", 
        ko: "파시네이트 150 SL은 고무, 커피, 과수원 및 공터의 세엽 및 광엽 잡초, 새로 자라거나 개화 중이거나 오래된 잡초를 방제하는 데 사용됩니다.", 
        zh: "FASCINATE 150 SL用于控制橡胶、咖啡、果园和空地上的窄叶和阔叶杂草，新长出的、开花的或老杂草。" 
      }
    ] 
  },
  { 
    id: "metazin-67sc", 
    name: { kh: "METAZIN 67 SC (ម៉េតាហ្សុីន 67 SC)", en: "METAZIN 67 SC", vi: "METAZIN 67 SC", ar: "ميتازين 67 SC", hi: "मेटाज़िन 67 SC", ja: "メタジン 67 SC", ko: "메타진 67 SC", zh: "METAZIN 67 SC" }, 
    image: "photo/METAZIN 67SC.png", 
    category: "herbicide", 
    categoryKh: "ថ្នាំកម្ចាត់ស្មៅ", 
    usage: {
      kh: "របៀបប្រើប្រាស់: ១ លីត្រ/ហិចតា (២ ដប)។ បាញ់ថ្នាំពេលស្មៅដុះលូតលាស់ល្អ (ស្មៅខ្ចីៗ) និងដីមានសំណើមល្អ។",
      en: "Usage: 1 liter/hectare (2 bottles). Spray when weeds are actively growing (young weeds) and soil has good moisture.",
      vi: "Cách sử dụng: 1 lít/ha (2 chai). Phun khi cỏ đang phát triển mạnh (cỏ non) và đất có độ ẩm tốt.",
      ar: "الاستخدام: 1 لتر/هكتار (زجاجتان). رش عندما تنمو الأعشاب الضارة بنشاط (الأعشاب الصغيرة) وتكون التربة ذات رطوبة جيدة.",
      hi: "उपयोग: 1 लीटर/हेक्टेयर (2 बोतलें)। स्प्रे करें जब खरपतवार सक्रिय रूप से बढ़ रहे हों (युवा खरपतवार) और मिट्टी में अच्छी नमी हो।",
      ja: "使用方法: 1 L/ha（2ボトル）。雑草が活発に成長している時（若い雑草）かつ土壌の水分が良好な時に散布します。",
      ko: "사용법: 1 리터/헥타르(2 병). 잡초가 활발히 자라고(어린 잡초) 토양 수분이 좋을 때 분무합니다.",
      zh: "使用说明: 1升/公顷（2瓶）。当杂草旺盛生长（幼草）且土壤水分良好时喷施。"
    }, 
    ingredients: { kh: "Atrazine: 60% + Mesotrione: 7%", en: "Atrazine: 60% + Mesotrione: 7%", vi: "Atrazine: 60% + Mesotrione: 7%", ar: "أترازين: 60٪ + ميزوتريون: 7٪", hi: "एट्राज़िन: 60% + मेसोट्रियोन: 7%", ja: "アトラジン: 60% + メソトリオン: 7%", ko: "아트라진: 60% + 메소트리온: 7%", zh: "莠去津: 60% + 硝磺草酮: 7%" }, 
    benefits: [
      { 
        kh: "មេតាស៊ីន 67 SC ប្រើសម្រាប់កម្ចាត់ស្មៅស្លឹកតូច (ស្មៅបា) និងស្មៅស្លឹកធំ (ស្មៅកំពីងពួយ...) ដុះក្នុងចំការពោត", 
        en: "METAZIN 67 SC is used to control narrow-leaf weeds (grasses) and broadleaf weeds growing in corn fields.", 
        vi: "METAZIN 67 SC được sử dụng để trừ cỏ lá hẹp và cỏ lá rộng mọc trong ruộng ngô.", 
        ar: "يستخدم ميتازين 67 SC للسيطرة على الأعشاب ضيقة الأوراق (الحشائش) والأعشاب عريضة الأوراق التي تنمو في حقول الذرة.", 
        hi: "मेटाज़िन 67 SC का उपयोग मकई के खेतों में उगने वाले संकरी पत्ती वाले खरपतवारों (घास) और चौड़ी पत्ती वाले खरपतवारों को नियंत्रित करने के लिए किया जाता है।", 
        ja: "METAZIN 67 SCは、トウモロコシ畑に生える狭葉雑草（イネ科）や広葉雑草の防除に使用されます。", 
        ko: "메타진 67 SC는 옥수수밭에서 자라는 세엽 잡초(화본과) 및 광엽 잡초를 방제하는 데 사용됩니다.", 
        zh: "METAZIN 67 SC用于控制玉米田中生长的窄叶杂草（禾本科）和阔叶杂草。" 
      }
    ] 
  },
  { 
    id: "ag-fop-10-ec", 
    name: { kh: "AG-FOP 10 EC (អេជី-ហ្វប 10 EC)", en: "AG-FOP 10 EC", vi: "AG-FOP 10 EC", ar: "أجي-فوب 10 EC", hi: "एजी-फॉप 10 EC", ja: "AG-FOP 10 EC", ko: "AG-FOP 10 EC", zh: "AG-FOP 10 EC" }, 
    image: "photo/AG-FOP.png", 
    category: "herbicide", 
    categoryKh: "ថ្នាំកម្ចាត់ស្មៅ", 
    usage: {
      kh: "របៀបប្រើប្រាស់: ១០០ ម.ល/ធុង ២៥ លីត្រ ឬ ១ លីត្រ/ហិចតា។ បាញ់នៅពេលស្មៅដុះលូតលាស់ល្អ (ស្មៅមាន ២-៥ ស្លឹក)។ បរិមាណប្រើប្រាស់រួមជាមួយ អេជី-ហ្វេន ២៥ គឺ ២ លីត្រ (២ ដប) ក្នុងមួយហិចតា។",
      en: "Usage: 100 ml/25L tank or 1 liter/hectare. Spray when weeds are growing well (weeds have 2-5 leaves). Total volume used together with AG-FEN 25 is 2 liters (2 bottles) per hectare.",
      vi: "Cách sử dụng: 100 ml/bình 25L hoặc 1 lít/ha. Phun khi cỏ đang phát triển tốt (cỏ có 2-5 lá). Lượng dùng chung với AG-FEN 25 là 2 lít (2 chai) trên một ha.",
      ar: "الاستخدام: 100 مل/خزان 25 لتر أو 1 لتر/هكتار. رش عندما تنمو الأعشاب الضارة جيدا (تحتوي الأعشاب الضارة على 2-5 أوراق). الحجم الإجمالي المستخدم مع AG-FEN 25 هو 2 لتر (زجاجتان) لكل هكتار.",
      hi: "उपयोग: 100 मिली/25 लीटर टैंक या 1 लीटर/हेक्टेयर। स्प्रे करें जब खरपतवार अच्छी तरह से बढ़ रहे हों (खरपतवार के 2-5 पत्ते हों)। AG-FEN 25 के साथ उपयोग की जाने वाली कुल मात्रा 2 लीटर (2 बोतलें) प्रति हेक्टेयर है।",
      ja: "使用方法: 100 ml/25Lタンクまたは1 L/ha。雑草がよく成長している時（雑草が2-5葉）に散布します。AG-FEN 25と一緒に使用する総量は1ヘクタールあたり2 L（2ボトル）です。",
      ko: "사용법: 100 ml/25L 탱크 또는 1 리터/헥타르. 잡초가 잘 자랄 때(잡초가 2-5개의 잎을 가질 때) 분무합니다. AG-FEN 25와 함께 사용되는 총량은 헥타르당 2 리터(2 병)입니다.",
      zh: "使用说明: 100毫升/25升水箱或1升/公顷。在杂草生长良好时喷施（杂草有2-5片叶子）。与AG-FEN 25一起使用的总量为每公顷2升（2瓶）。"
    }, 
    ingredients: { kh: "Quizalofop-p-ethyl: 10%", en: "Quizalofop-p-ethyl: 10%", vi: "Quizalofop-p-ethyl: 10%", ar: "كويزالوفوب-بي-إيثيل: 10٪", hi: "क्विज़ालोफॉप-पी-इथाइल: 10%", ja: "キザロホップエチル: 10%", ko: "퀴잘로폽-P-에틸: 10%", zh: "精喹禾灵: 10%" }, 
    benefits: [
      { 
        kh: "អេជី-ហ្វប 10 EC ជាថ្នាំកម្ចាត់ស្មៅដែលមានប្រសិទ្ធភាពបំផុត និងជួយសម្លាប់ស្មៅស្លឹកតូច ដែលដុះក្នុងចំការសណ្តែកបាយ និងសណ្តែកសៀង", 
        en: "AG-FOP 10 EC is a highly effective herbicide that helps kill narrow-leaf weeds growing in mung bean and soybean fields.", 
        vi: "AG-FOP 10 EC là thuốc trừ cỏ có hiệu quả cao giúp tiêu diệt cỏ lá hẹp mọc trong ruộng đậu xanh và đậu nành.", 
        ar: "AG-FOP 10 EC هو مبيد أعشاب فعال للغاية يساعد على قتل الأعشاب ضيقة الأوراق التي تنمو في حقول حبوب المونج وفول الصويا.", 
        hi: "AG-FOP 10 EC एक अत्यधिक प्रभावी शाकनाशी है जो मूंग और सोयाबीन के खेतों में उगने वाले संकरी पत्ती वाले खरपतवारों को मारने में मदद करता है।", 
        ja: "AG-FOP 10 ECは、緑豆や大豆畑に生える狭葉雑草を枯らすのに非常に効果的な除草剤です。", 
        ko: "AG-FOP 10 EC는 녹두 및 대두밭에서 자라는 세엽 잡초를 죽이는 데 매우 효과적인 제초제입니다.", 
        zh: "AG-FOP 10 EC是一种高效除草剂，有助于杀死绿豆和大豆田中生长的窄叶杂草。" 
      }
    ] 
  },
  { 
    id: "ag-fen-25-sl", 
    name: { kh: "AG-FEN 25 SL (អេជី-ហ្វេន 25 SL)", en: "AG-FEN 25 SL", vi: "AG-FEN 25 SL", ar: "أجي-فين 25 SL", hi: "एजी-फेन 25 SL", ja: "AG-FEN 25 SL", ko: "AG-FEN 25 SL", zh: "AG-FEN 25 SL" }, 
    image: "photo/AG-FEN.png", 
    category: "herbicide", 
    categoryKh: "ថ្នាំកម្ចាត់ស្មៅ", 
    usage: {
      kh: "របៀបប្រើប្រាស់: ១០០ ម.ល/ធុង ២៥ លីត្រ ឬ ១ លីត្រ/ហិចតា។ បាញ់នៅពេលស្មៅដុះលូតលាស់ល្អ (ស្មៅមាន ២-៥ ស្លឹក)។ បរិមាណប្រើប្រាស់រួមជាមួយ អេជី-ហ្វប ១០ គឺ ២ លីត្រ (២ ដប) ក្នុងមួយហិចតា។",
      en: "Usage: 100 ml/25L tank or 1 liter/hectare. Spray when weeds are growing well (weeds have 2-5 leaves). Total volume used together with AG-FOP 10 is 2 liters (2 bottles) per hectare.",
      vi: "Cách sử dụng: 100 ml/bình 25L hoặc 1 lít/ha. Phun khi cỏ đang phát triển tốt (cỏ có 2-5 lá). Lượng dùng chung với AG-FOP 10 là 2 lít (2 chai) trên một ha.",
      ar: "الاستخدام: 100 مل/خزان 25 لتر أو 1 لتر/هكتار. رش عندما تنمو الأعشاب الضارة جيدا (تحتوي الأعشاب الضارة على 2-5 أوراق). الحجم الإجمالي المستخدم مع AG-FOP 10 هو 2 لتر (زجاجتان) لكل هكتار.",
      hi: "उपयोग: 100 मिली/25 लीटर टैंक या 1 लीटर/हेक्टेयर। स्प्रे करें जब खरपतवार अच्छी तरह से बढ़ रहे हों (खरपतवार के 2-5 पत्ते हों)। AG-FOP 10 के साथ उपयोग की जाने वाली कुल मात्रा 2 लीटर (2 बोतलें) प्रति हेक्टेयर है।",
      ja: "使用方法: 100 ml/25Lタンクまたは1 L/ha。雑草がよく成長している時（雑草が2-5葉）に散布します。AG-FOP 10と一緒に使用する総量は1ヘクタールあたり2 L（2ボトル）です。",
      ko: "사용법: 100 ml/25L 탱크 또는 1 리터/헥타르. 잡초가 잘 자랄 때(잡초가 2-5개의 잎을 가질 때) 분무합니다. AG-FOP 10과 함께 사용되는 총량은 헥타르당 2 리터(2 병)입니다.",
      zh: "使用说明: 100毫升/25升水箱或1升/公顷。在杂草生长良好时喷施（杂草有2-5片叶子）。与AG-FOP 10一起使用的总量为每公顷2升（2瓶）。"
    }, 
    ingredients: { kh: "Fomesafen: 25%", en: "Fomesafen: 25%", vi: "Fomesafen: 25%", ar: "فوميسافين: 25٪", hi: "फोमेसाफेन: 25%", ja: "ホメサフェン: 25%", ko: "포메사펜: 25%", zh: "氟磺胺草醚: 25%" }, 
    benefits: [
      { 
        kh: "អេជី-ហ្វេន 25 SL ជាថ្នាំកម្ចាត់ស្មៅដែលមានប្រសិទ្ធភាពបំផុត និងជួយសម្លាប់ស្មៅស្លឹកធំ ដែលដុះក្នុងចំការសណ្តែកបាយ និងសណ្តែកសៀង", 
        en: "AG-FEN 25 SL is a highly effective herbicide that helps kill broadleaf weeds growing in mung bean and soybean fields.", 
        vi: "AG-FEN 25 SL là thuốc trừ cỏ có hiệu quả cao giúp tiêu diệt cỏ lá rộng mọc trong ruộng đậu xanh và đậu nành.", 
        ar: "AG-FEN 25 SL هو مبيد أعشاب فعال للغاية يساعد على قتل الأعشاب عريضة الأوراق التي تنمو في حقول حبوب المونج وفول الصويا.", 
        hi: "AG-FEN 25 SL एक अत्यधिक प्रभावी शाकनाशी है जो मूंग और सोयाबीन के खेतों में उगने वाले चौड़ी पत्ती वाले खरपतवारों को मारने में मदद करता है।", 
        ja: "AG-FEN 25 SLは、緑豆や大豆畑に生える広葉雑草を枯らすのに非常に効果的な除草剤です。", 
        ko: "AG-FEN 25 SL은 녹두 및 대두밭에서 자라는 광엽 잡초를 죽이는 데 매우 효과적인 제초제입니다.", 
        zh: "AG-FEN 25 SL是一种高效除草剂，有助于杀死绿豆和大豆田中生长的阔叶杂草。" 
      }
    ] 
  },

  // III. ថ្នាំកម្ចាត់សត្វល្អិត (Insecticides)
  { 
    id: "diazan-50-ec", 
    name: { kh: "DIAZAN 50 EC (ឌីអាសាន 50 EC)", en: "DIAZAN 50 EC", vi: "DIAZAN 50 EC", ar: "ديازان 50 EC", hi: "डायज़ान 50 EC", ja: "ダイアザン 50 EC", ko: "디아잔 50 EC", zh: "DIAZAN 50 EC" }, 
    image: "photo/Diazan 50 EC.png", 
    category: "insecticide", 
    categoryKh: "ថ្នាំកម្ចាត់សត្វល្អិត", 
    usage: {
      kh: "របៀបប្រើប្រាស់: ស្រូវ លាយ ៦០-៧៥ ម.ល/ធុង ២៥ លីត្រ។ ពោត សណ្តែកសៀង ស្ពៃក្តោប លាយ ១០០-១២០ ម.ល/ធុង ២៥ លីត្រ។ ម្រេច កាហ្វេ លាយ ១០០-១៥០ ម.ល/ធុង ២៥ លីត្រ។ បរិមាណទឹក ៤០០-៥០០ លីត្រ/ហិចតា។ បាញ់នៅពេលសត្វល្អិតទើបបំផ្លាញ និងដង្កូវនៅតូចៗ (ព្រឹកព្រលឹម ឬល្ងាច)។",
      en: "Usage: Rice: Mix 60-75 ml/25L tank. Corn, soybean, cabbage: Mix 100-120 ml/25L tank. Pepper, coffee: Mix 100-150 ml/25L tank. Water volume: 400-500 liters/hectare. Spray when insects just attack and caterpillars are small (early morning or evening).",
      vi: "Cách sử dụng: Lúa: Pha 60-75 ml/bình 25L. Ngô, đậu nành, bắp cải: Pha 100-120 ml/bình 25L. Tiêu, cà phê: Pha 100-150 ml/bình 25L. Lượng nước: 400-500 lít/ha. Phun khi sâu rầy mới chớm xuất hiện và sâu non còn nhỏ (sáng sớm hoặc chiều mát).",
      ar: "الاستخدام: الأرز: امزج 60-75 مل/خزان 25 لتر. الذرة وفول الصويا والملفوف: امزج 100-120 مل/خزان 25 لتر. الفلفل والقهوة: امزج 100-150 مل/خزان 25 لتر. حجم الماء: 400-500 لتر/هكتار. رش عندما تهاجم الحشرات للتو واليرقات صغيرة (في الصباح الباكر أو في المساء).",
      hi: "उपयोग: चावल: 60-75 मिली/25 लीटर टैंक मिलाएं। मक्का, सोयाबीन, गोभी: 100-120 मिली/25 लीटर टैंक मिलाएं। काली मिर्च, कॉफी: 100-150 मिली/25 लीटर टैंक मिलाएं। पानी की मात्रा: 400-500 लीटर/हेक्टेयर। स्प्रे करें जब कीड़े अभी हमला करते हैं और कैटरपिलर छोटे होते हैं (सुबह या शाम)।",
      ja: "使用方法: 稲: 60-75 ml/25Lタンクを混合。トウモロコシ、大豆、キャベツ: 100-120 ml/25Lタンクを混合。コショウ、コーヒー: 100-150 ml/25Lタンクを混合。水量: 400-500 L/ha。昆虫が発生し始め、幼虫が小さい時（早朝または夕方）に散布します。",
      ko: "사용법: 벼: 60-75 ml/25L 탱크 혼합. 옥수수, 대두, 양배추: 100-120 ml/25L 탱크 혼합. 후추, 커피: 100-150 ml/25L 탱크 혼합. 수량: 400-500 리터/헥타르. 곤충이 막 발생하고 애벌레가 작을 때(이른 아침이나 저녁) 분무합니다。",
      zh: "使用说明: 水稻：混合60-75毫升/25升水箱。玉米、大豆、卷心菜：混合100-120毫升/25升水箱。胡椒、咖啡：混合100-150毫升/25升水箱。水量：400-500升/公顷。在昆虫刚开始攻击且毛虫较小（清晨或傍晚）时喷施。"
    }, 
    ingredients: { kh: "Diazinon 50%", en: "Diazinon 50%", vi: "Diazinon 50%", ar: "ديازينون 50٪", hi: "डायज़िनॉन 50%", ja: "ダイアジノン 50%", ko: "다이아지논 50%", zh: "二嗪磷 50%" }, 
    benefits: [
      { 
        kh: "ឌីសាន 50 EC កម្ចាត់បានយ៉ាងមានប្រសិទ្ធភាព ដង្កូវមូរស្មឹក ដង្កូវស៊ីស្លឹក សត្វល្អិតផ្សេងៗ ដែលបំផ្លាញដំណាំស្រូវ ពោត សណ្តែកសៀង ស្ពៃក្តោប ម្រេច និងកាហ្វេ", 
        en: "DIAZAN 50 EC effectively controls leaf rollers, leaf-eating caterpillars, and other insects damaging rice, corn, soybean, cabbage, pepper, and coffee.", 
        vi: "DIAZAN 50 EC tiêu diệt hiệu quả sâu cuốn lá, sâu ăn lá, các loại côn trùng khác gây hại lúa, ngô, đậu nành, bắp cải, tiêu và cà phê.", 
        ar: "يتحكم ديازان 50 EC بشكل فعال في بكرات الأوراق واليرقات الآكلة للأوراق والحشرات الأخرى التي تتلف الأرز والذرة وفول الصويا والملفوف والفلفل والقهوة.", 
        hi: "डायज़ान 50 EC चावल, मक्का, सोयाबीन, गोभी, काली मिर्च और कॉफी को नुकसान पहुंचाने वाले लीफ रोलर्स, पत्ती खाने वाले कैटरपिलर और अन्य कीड़ों को प्रभावी ढंग से नियंत्रित करता है।", 
        ja: "DIAZAN 50 ECは、稲、トウモロコシ、大豆、キャベツ、コショウ、コーヒーに被害を与えるハマキムシ、葉食い毛虫、その他の昆虫を効果的に防除します。", 
        ko: "디아잔 50 EC는 벼, 옥수수, 대두, 양배추, 후추 및 커피를 손상시키는 잎말이나방, 잎을 먹는 애벌레 및 기타 곤충을 효과적으로 방제합니다。", 
        zh: "DIAZAN 50 EC有效控制卷叶虫、食叶毛虫和其他危害水稻、玉米、大豆、卷心菜、胡椒和咖啡的昆虫。" 
      }
    ] 
  },
  { 
    id: "cyperan-100-ec", 
    name: { kh: "CYPERAN 100 EC (ស៊ីប៉េរ៉ង់ 100 EC)", en: "CYPERAN 100 EC", vi: "CYPERAN 100 EC", ar: "سيبران 100 EC", hi: "साइपेरान 100 EC", ja: "シペラン 100 EC", ko: "시페란 100 EC", zh: "CYPERAN 100 EC" }, 
    image: "photo/Cyperan.png", 
    category: "insecticide", 
    categoryKh: "ថ្នាំកម្ចាត់សត្វល្អិត", 
    usage: {
      kh: "របៀបប្រើប្រាស់: ស្រូវ និងសណ្តែកសៀង លាយ ៧៥-៨០ ម.ល/ធុង ២៥ លីត្រ។ ស្វាយចន្ទី លាយ ២០០-៣០០ ម.ល/ធុង ១០០ លីត្រ។ បរិមាណទឹក ៣២០ លីត្រ/ហិចតា។ បាញ់នៅពេលសត្វល្អិតចាប់ផ្តើមបំផ្លាញ និងដង្កូវនៅតូចៗ (ព្រឹកព្រលឹម ឬល្ងាច)។",
      en: "Usage: Rice and soybean: Mix 75-80 ml/25L tank. Cashew: Mix 200-300 ml/100L tank. Water volume: 320 liters/hectare. Spray when insects start to attack and caterpillars are small (early morning or evening).",
      vi: "Cách sử dụng: Lúa và đậu nành: Pha 75-80 ml/bình 25L. Điều: Pha 200-300 ml/bình 100L. Lượng nước: 320 lít/ha. Phun khi côn trùng bắt đầu phá hoại và sâu non còn nhỏ (sáng sớm hoặc chiều mát).",
      ar: "الاستخدام: الأرز وفول الصويا: امزج 75-80 مل/خزان 25 لتر. الكاجو: امزج 200-300 مل/خزان 100 لتر. حجم الماء: 320 لتر/هكتار. رش عندما تبدأ الحشرات في الهجوم وتكون اليرقات صغيرة (في الصباح الباكر أو في المساء).",
      hi: "उपयोग: चावल और सोयाबीन: 75-80 मिली/25 लीटर टैंक मिलाएं। काजू: 200-300 मिली/100 लीटर टैंक मिलाएं। पानी की मात्रा: 320 लीटर/हेक्टेयर। स्प्रे करें जब कीड़े हमला करना शुरू करते हैं और कैटरपिलर छोटे होते हैं (सुबह या शाम)।",
      ja: "使用方法: 稲と大豆: 75-80 ml/25Lタンクを混合。カシューナッツ: 200-300 ml/100Lタンクを混合。水量: 320 L/ha。昆虫が攻撃し始め、幼虫が小さい時（早朝または夕方）に散布します。",
      ko: "사용법: 벼 및 대두: 75-80 ml/25L 탱크 혼합. 캐슈넛: 200-300 ml/100L 탱크 혼합. 수량: 320 리터/헥타르. 곤충이 공격을 시작하고 애벌레가 작을 때(이른 아침이나 저녁) 분무합니다。",
      zh: "使用说明: 水稻和大豆：混合75-80毫升/25升水箱。腰果：混合200-300毫升/100升水箱。水量：320升/公顷。在昆虫开始攻击且毛虫较小（清晨或傍晚）时喷施。"
    }, 
    ingredients: { kh: "Cypermethrin 100g/L", en: "Cypermethrin 100g/L", vi: "Cypermethrin 100g/L", ar: "سايبرمثرين 100 جم/لتر", hi: "साइपरमेथ्रिन 100 ग्राम/लीटर", ja: "シペルメトリン 100g/L", ko: "사이퍼메트린 100g/L", zh: "氯氰菊酯 100克/升" }, 
    benefits: [
      { 
        kh: "ស៊ីពែរ៉ាន់ 100 EC កម្ចាត់បានយ៉ាងមានប្រសិទ្ធភាព ដង្កូវមូរស្មឹក ដង្កូវស៊ីស្លឹក ដង្កូវចោះផ្លែ ស្រឹង ដែលបំផ្លាញដំណាំស្រូវ សណ្តែកសៀង និងស្វាយចន្ទី", 
        en: "CYPERAN 100 EC effectively controls leaf rollers, leaf-eating caterpillars, fruit borers, and bugs that damage rice, soybean, and cashew crops.", 
        vi: "CYPERAN 100 EC tiêu diệt hiệu quả sâu cuốn lá, sâu ăn lá, sâu đục quả, bọ xít gây hại trên lúa, đậu nành và điều.", 
        ar: "يتحكم سيبران 100 EC بشكل فعال في بكرات الأوراق واليرقات الآكلة للأوراق وحفار الفاكهة والبق التي تتلف محاصيل الأرز وفول الصويا والكاجو.", 
        hi: "साइपेरान 100 EC चावल, सोयाबीन और काजू की फसलों को नुकसान पहुंचाने वाले लीफ रोलर्स, पत्ती खाने वाले कैटरपिलर, फ्रूट बोरर और बग्स को प्रभावी ढंग से नियंत्रित करता है।", 
        ja: "CYPERAN 100 ECは、稲、大豆、カシューナッツ作物に被害を与えるハマキムシ、葉食い毛虫、果実穿孔虫、カメムシを効果的に防除します。", 
        ko: "시페란 100 EC는 벼, 대두 및 캐슈넛 작물에 피해를 주는 잎말이나방, 잎을 먹는 애벌레, 과일 천공충 및 노린재를 효과적으로 방제합니다。", 
        zh: "CYPERAN 100 EC有效控制危害水稻、大豆和腰果作物的卷叶虫、食叶毛虫、蛀果虫和蝽。" 
      }
    ] 
  },
  { 
    id: "jetan", 
    name: { kh: "JETAN 50 EC (យេតាន 50 EC)", en: "JETAN 50 EC", vi: "JETAN 50 EC", ar: "جيتان 50 EC", hi: "जेटन 50 EC", ja: "ジェタン 50 EC", ko: "제탄 50 EC", zh: "JETAN 50 EC" }, 
    image: "photo/Jetan.png", 
    category: "insecticide", 
    categoryKh: "ថ្នាំកម្ចាត់សត្វល្អិត", 
    usage: {
      kh: "របៀបប្រើប្រាស់: ស្រូវ លាយ ៨០-៩០ ម.ល/ធុង ២៥ លីត្រ។ ដំណាំហូបផ្លែ កាហ្វេ ស្វាយចន្ទី លាយ ៤៨០ ម.ល/ធុង ២០០ លីត្រ។ បាញ់នៅពេលសត្វល្អិតទើបកើតមានឡើង។",
      en: "Usage: Rice: Mix 80-90 ml/25L tank. Fruit trees, coffee, cashew: Mix 480 ml/200L tank. Spray when insects first appear.",
      vi: "Cách sử dụng: Lúa: Pha 80-90 ml/bình 25L. Cây ăn quả, cà phê, điều: Pha 480 ml/bình 200L. Phun khi côn trùng mới xuất hiện.",
      ar: "الاستخدام: الأرز: امزج 80-90 مل/خزان 25 لتر. أشجار الفاكهة والقهوة والكاجو: امزج 480 مل/خزان 200 لتر. رش عندما تظهر الحشرات لأول مرة.",
      hi: "उपयोग: चावल: 80-90 मिली/25 लीटर टैंक मिलाएं। फलों के पेड़, कॉफी, काजू: 480 मिली/200 लीटर टैंक मिलाएं। कीड़े पहली बार दिखाई देने पर स्प्रे करें।",
      ja: "使用方法: 稲: 80-90 ml/25Lタンクを混合。果樹、コーヒー、カシューナッツ: 480 ml/200Lタンクを混合。昆虫が初めて発生した時に散布します。",
      ko: "사용법: 벼: 80-90 ml/25L 탱크 혼합. 과수, 커피, 캐슈넛: 480 ml/200L 탱크 혼합. 곤충이 처음 나타날 때 분무합니다。",
      zh: "使用说明: 水稻：混合80-90毫升/25升水箱。果树、咖啡、腰果：混合480毫升/200升水箱。在昆虫首次出现时喷施。"
    }, 
    ingredients: { kh: "Fenobucarb 50% w/w", en: "Fenobucarb 50% w/w", vi: "Fenobucarb 50% w/w", ar: "فينوبوكارب 50٪ وزن/وزن", hi: "फेनोबुकार्ब 50% w/w", ja: "フェノブカルブ 50% w/w", ko: "페노뷰카브 50% w/w", zh: "仲丁威 50% w/w" }, 
    benefits: [
      { 
        kh: "ជេតាន 50 EC ជាថ្នាំសម្លាប់សត្វល្អិតមានប្រសិទ្ធភាព កម្ចាត់មមាចត្នោត ចៃស ចៃម្សៅ មមាច ដែលបំផ្លាញដំណាំស្រូវ ដំណាំហូបផ្លែ កាហ្វេ និងស្វាយចន្ទី", 
        en: "JETAN 50 EC is an effective insecticide controlling brown planthoppers, whiteflies, mealybugs, and leafhoppers that damage rice, fruit trees, coffee, and cashew.", 
        vi: "JETAN 50 EC là thuốc trừ sâu hiệu quả kiểm soát rầy nâu, ruồi trắng, rệp sáp và rầy lá gây hại lúa, cây ăn quả, cà phê và điều.", 
        ar: "جيتان 50 EC هو مبيد حشري فعال يتحكم في نطاطات النباتات البنية والذباب الأبيض والبق الدقيقي ونطاطات الأوراق التي تتلف الأرز وأشجار الفاكهة والقهوة والكاجو.", 
        hi: "जेटन 50 EC एक प्रभावी कीटनाशक है जो ब्राउन प्लांटहॉपर, व्हाइटफ्लाइज़, मीलीबग्स और लीफहॉपर को नियंत्रित करता है जो चावल, फलों के पेड़ों, कॉफी और काजू को नुकसान पहुंचाते हैं।", 
        ja: "JETAN 50 ECは、稲、果樹、コーヒー、カシューナッツに被害を与えるトビイロウンカ、コナジラミ、コナカイガラムシ、ヨコバイを効果的に防除する殺虫剤です。", 
        ko: "제탄 50 EC는 벼, 과수, 커피 및 캐슈넛을 손상시키는 벼멸구, 가루이, 깍지벌레 및 매미충을 효과적으로 방제하는 살충제입니다。", 
        zh: "JETAN 50 EC是一种有效的杀虫剂，可控制危害水稻、果树、咖啡和腰果的褐飞虱、粉虱、粉蚧和叶蝉。" 
      }
    ] 
  },
  { 
    id: "anboom-40-ec", 
    name: { kh: "ANBOOM 40 EC (អានប៊ុម 40 EC)", en: "ANBOOM 40 EC", vi: "ANBOOM 40 EC", ar: "أنبوم 40 EC", hi: "अनबूम 40 EC", ja: "アンブーム 40 EC", ko: "안붐 40 EC", zh: "ANBOOM 40 EC" }, 
    image: "photo/Anboom 40.png", 
    category: "insecticide", 
    categoryKh: "ថ្នាំកម្ចាត់សត្វល្អិត", 
    usage: {
      kh: "របៀបប្រើប្រាស់: ស្រូវ សណ្តែកដី សណ្តែកខៀវ សណ្តែកសៀង លាយ ៧៥ ម.ល/ធុង ២៥ លីត្រ។ កាហ្វេ ដំណាំហូបផ្លែ និងមានមើម លាយ ៥០ ម.ល/ធុង ២៥ លីត្រ។ ស្វាយចន្ទី កៅស៊ូ ម្រេច លាយ ១០០-២០០ ម.ល/ធុង ១០០ លីត្រទឹក។ បរិមាណទឹក ៣២០ លីត្រ/ហិចតា។ បាញ់នៅពេលសត្វល្អិតចាប់ផ្តើមបំផ្លាញ (ព្រឹកព្រលឹម ឬល្ងាច)។",
      en: "Usage: Rice, peanut, mung bean, soybean: Mix 75 ml/25L tank. Coffee, fruit trees, root crops: Mix 50 ml/25L tank. Cashew, rubber, pepper: Mix 100-200 ml/100L tank. Water volume: 320 liters/hectare. Spray when insects start to attack (early morning or evening).",
      vi: "Cách sử dụng: Lúa, đậu phộng, đậu xanh, đậu nành: Pha 75 ml/bình 25L. Cà phê, cây ăn quả, cây lấy củ: Pha 50 ml/bình 25L. Điều, cao su, tiêu: Pha 100-200 ml/bình 100L. Lượng nước: 320 lít/ha. Phun khi côn trùng bắt đầu phá hoại (sáng sớm hoặc chiều mát).",
      ar: "الاستخدام: الأرز والفول السوداني وحبوب المونج وفول الصويا: امزج 75 مل/خزان 25 لتر. القهوة وأشجار الفاكهة والمحاصيل الجذرية: امزج 50 مل/خزان 25 لتر. الكاجو والمطاط والفلفل: امزج 100-200 مل/خزان 100 لتر. حجم الماء: 320 لتر/هكتار. رش عندما تبدأ الحشرات في الهجوم (في الصباح الباكر أو في المساء).",
      hi: "उपयोग: चावल, मूंगफली, मूंग, सोयाबीन: 75 मिली/25 लीटर टैंक मिलाएं। कॉफी, फलों के पेड़, जड़ वाली फसलें: 50 मिली/25 लीटर टैंक मिलाएं। काजू, रबर, काली मिर्च: 100-200 मिली/100 लीटर टैंक मिलाएं। पानी की मात्रा: 320 लीटर/हेक्टेयर। स्प्रे करें जब कीड़े हमला करना शुरू करते हैं (सुबह या शाम)।",
      ja: "使用方法: 稲、ピーナッツ、緑豆、大豆: 75 ml/25Lタンクを混合。コーヒー、果樹、根菜類: 50 ml/25Lタンクを混合。カシューナッツ、ゴム、コショウ: 100-200 ml/100Lタンクを混合。水量: 320 L/ha。昆虫が攻撃し始めた時（早朝または夕方）に散布します。",
      ko: "사용법: 벼, 땅콩, 녹두, 대두: 75 ml/25L 탱크 혼합. 커피, 과수, 뿌 작물: 50 ml/25L 탱크 혼합. 캐슈넛, 고무, 후추: 100-200 ml/100L 탱크 혼합. 수량: 320 리터/헥타르. 곤충이 공격을 시작할 때(이른 아침이나 저녁) 분무합니다。",
      zh: "使用说明: 水稻、花生、绿豆、大豆：混合75毫升/25升水箱。咖啡、果树、块根作物：混合50毫升/25升水箱。腰果、橡胶、胡椒：混合100-200毫升/100升水箱。水量：320升/公顷。在昆虫开始攻击时（清晨或傍晚）喷施。"
    }, 
    ingredients: { kh: "Chlorpyrifos Ethyl 400g/L", en: "Chlorpyrifos Ethyl 400g/L", vi: "Chlorpyrifos Ethyl 400g/L", ar: "كلوربيريفوس إيثيل 400 جم/لتر", hi: "क्लोरपाइरीफॉस एथिल 400 ग्राम/लीटर", ja: "クロルピリホスエチル 400g/L", ko: "클로르피리포스 에틸 400g/L", zh: "毒死蜱 400克/升" }, 
    benefits: [
      { 
        kh: "អានប៊ូម 40 EC ជាថ្នាំកម្ចាត់សត្វល្អិតពិសេស កម្ចាត់បានយ៉ាងមានប្រសិទ្ធភាព មមាចត្នោត កណ្តៀរ ចៃម្សៅ ចៃទន់ បំផ្លាញដំណាំហូបផ្លែ ដំណាំមានមើម កាហ្វេ និងដង្កូវហ្វូងដែលបំផ្លាញសណ្តែក", 
        en: "ANBOOM 40 EC is a special insecticide that effectively controls brown planthoppers, termites, mealybugs, and aphids damaging fruit trees, root crops, coffee, and armyworms damaging beans.", 
        vi: "ANBOOM 40 EC là thuốc trừ sâu đặc trị kiểm soát hiệu quả rầy nâu, mối, rệp sáp và rệp mềm gây hại cây ăn quả, cây lấy củ, cà phê và sâu keo gây hại các loại đậu.", 
        ar: "أنبوم 40 EC هو مبيد حشري خاص يتحكم بشكل فعال في نطاطات النباتات البنية والنمل الأبيض والبق الدقيقي والمن الذي يتلف أشجار الفاكهة والمحاصيل الجذرية والقهوة وديدان الحشد التي تتلف الفاصوليا.", 
        hi: "अनबूम 40 EC एक विशेष कीटनाशक है जो फलों के पेड़ों, जड़ वाली फसलों, कॉफी को नुकसान पहुंचाने वाले ब्राउन प्लांटहॉपर, दीमक, मीलीबग्स और एफिड्स और बीन्स को नुकसान पहुंचाने वाले आर्मीवर्म को प्रभावी ढंग से नियंत्रित करता है।", 
        ja: "ANBOOM 40 ECは、果樹、根菜類、コーヒーに被害を与えるトビイロウンカ、シロアリ、コナカイガラムシ、アブラムシ、および豆類に被害を与えるヨトウムシを効果的に防除する特別な殺虫剤です。", 
        ko: "안붐 40 EC는 과수, 뿌리 작물, 커피에 피해를 주는 벼멸구, 흰개미, 깍지벌레, 진딧물 및 콩에 피해를 주는 멸강나방을 효과적으로 방제하는 특수 살충제입니다。", 
        zh: "ANBOOM 40 EC是一种特殊的杀虫剂，能有效控制危害果树、块根作物、咖啡的褐飞虱、白蚁、粉蚧和蚜虫，以及危害豆类的粘虫。" 
      }
    ] 
  },
  { 
    id: "kinalux", 
    name: { kh: "KINALUX 25 EC (គីណាលុច 25 EC)", en: "KINALUX 25 EC", vi: "KINALUX 25 EC", ar: "كينالوكس 25 EC", hi: "किनालक्स 25 EC", ja: "キナルックス 25 EC", ko: "키날룩스 25 EC", zh: "KINALUX 25 EC" }, 
    image: "photo/Kinalux.png", 
    category: "insecticide", 
    categoryKh: "ថ្នាំកម្ចាត់សត្វល្អិត", 
    usage: {
      kh: "របៀបប្រើប្រាស់: ស្រូវ លាយ ៩០-១២៥ ម.ល/ធុង ២៥ លីត្រ។ សណ្តែកដី និងសណ្តែកសៀង លាយ ៨០-៩០ ម.ល/ធុង ២៥ លីត្រ។ ស្វាយចន្ទី លាយ ១០០ ម.ល/ធុង ២៥ លីត្រ។ បរិមាណទឹក ៤០០-៥០០ លីត្រ/ហិចតា។ បាញ់នៅពេលសត្វល្អិតចាប់ផ្តើមបំផ្លាញ (ព្រឹកព្រលឹម ឬល្ងាច)។",
      en: "Usage: Rice: Mix 90-125 ml/25L tank. Peanut and soybean: Mix 80-90 ml/25L tank. Cashew: Mix 100 ml/25L tank. Water volume: 400-500 liters/hectare. Spray when insects start to attack (early morning or evening).",
      vi: "Cách sử dụng: Lúa: Pha 90-125 ml/bình 25L. Đậu phộng và đậu nành: Pha 80-90 ml/bình 25L. Điều: Pha 100 ml/bình 25L. Lượng nước: 400-500 lít/ha. Phun khi côn trùng bắt đầu phá hoại (sáng sớm hoặc chiều mát).",
      ar: "الاستخدام: الأرز: امزج 90-125 مل/خزان 25 لتر. الفول السوداني وفول الصويا: امزج 80-90 مل/خزان 25 لتر. الكاجو: امزج 100 مل/خزان 25 لتر. حجم الماء: 400-500 لتر/هكتار. رش عندما تبدأ الحشرات في الهجوم (في الصباح الباكر أو في المساء).",
      hi: "उपयोग: चावल: 90-125 मिली/25 लीटर टैंक मिलाएं। मूंगफली और सोयाबीन: 80-90 मिली/25 लीटर टैंक मिलाएं। काजू: 100 मिली/25 लीटर टैंक मिलाएं। पानी की मात्रा: 400-500 लीटर/हेक्टेयर। स्प्रे करें जब कीड़े हमला करना शुरू करते हैं (सुबह या शाम)।",
      ja: "使用方法: 稲: 90-125 ml/25Lタンクを混合。ピーナッツと大豆: 80-90 ml/25Lタンクを混合。カシューナッツ: 100 ml/25Lタンクを混合。水量: 400-500 L/ha。昆虫が攻撃し始めた時（早朝または夕方）に散布します。",
      ko: "사용법: 벼: 90-125 ml/25L 탱크 혼합. 땅콩 및 대두: 80-90 ml/25L 탱크 혼합. 캐슈넛: 100 ml/25L 탱크 혼합. 수량: 400-500 리터/헥타르. 곤충이 공격을 시작할 때(이른 아침이나 저녁) 분무합니다。",
      zh: "使用说明: 水稻：混合90-125毫升/25升水箱。花生和大豆：混合80-90毫升/25升水箱。腰果：混合100毫升/25升水箱。水量：400-500升/公顷。在昆虫开始攻击时（清晨或傍晚）喷施。"
    }, 
    ingredients: { kh: "Quinalphos 250g/L", en: "Quinalphos 250g/L", vi: "Quinalphos 250g/L", ar: "كينالفوس 250 جم/لتر", hi: "क्विनलफॉस 250 ग्राम/लीटर", ja: "キナルホス 250g/L", ko: "퀴날포스 250g/L", zh: "喹硫磷 250克/升" }, 
    benefits: [
      { 
        kh: "គីណាលុច 25 EC កម្ចាត់បានច្រើនប្រភេទសត្វល្អិត ដូចជាដង្កូវបំពង់កាត់ស្លឹក ដង្កូវមូរស្មឹកពឹងពាងបំផ្លាញគួរ មូសខ្មូតបំផ្លាញស្រូវ ដង្កូវបាត់ខូងលើសណ្តែកដី ដង្កូវហ្វូង(ចោះផ្លែនិងផ្កា)បំផ្លាញលើសណ្តែកសៀង និងដង្កូវស៊ីមើមបំផ្លាញស្វាយចន្ទី", 
        en: "KINALUX 25 EC controls various insects such as case worms, leaf folders, spider mites damaging panicles, gall midges damaging rice, pod borers on peanuts, armyworms (boring fruits and flowers) damaging soybeans, and root-eating caterpillars damaging cashew.", 
        vi: "KINALUX 25 EC phòng trừ nhiều loại côn trùng như sâu phao, sâu cuốn lá, nhện gié hại bông, muỗi hành hại lúa, sâu đục vỏ đậu phộng, sâu keo (đục quả và hoa) hại đậu nành và sâu cắn rễ hại điều.", 
        ar: "كينالوكس 25 EC يتحكم في العديد من الحشرات مثل ديدان العلبة وبكرات الأوراق وعث العنكبوت الذي يتلف العناقيد وبراغيث المرارة التي تتلف الأرز وحفار القرون على الفول السوداني وديدان الحشد (التي تثقب الفواكه والزهور) التي تتلف فول الصويا واليرقات الآكلة للجذور التي تتلف الكاجو.", 
        hi: "किनालक्स 25 EC विभिन्न कीड़ों को नियंत्रित करता है जैसे केस वर्म, लीफ फोल्डर, स्पाइडर माइट्स जो पैनिकल को नुकसान पहुंचाते हैं, गॉल मिज जो चावल को नुकसान पहुंचाते हैं, मूंगफली पर पॉड बोरर, आर्मीवर्म (फलों और फूलों को भेदने वाले) सोयाबीन को नुकसान पहुंचाते हैं, और जड़ खाने वाले कैटरपिलर काजू को नुकसान पहुंचाते हैं।", 
        ja: "KINALUX 25 ECは、ツツムシ、コブノメイガ、穂を食害するハダニ、稲を食害するイネタマバエ、ピーナッツの莢穿孔虫、大豆を食害するヨトウムシ（果実や花を穿孔する）、カシューナッツを食害する根食い毛虫など、さまざまな昆虫を防除します。", 
        ko: "키날룩스 25 EC는 혹명나방, 잎말이나방, 이삭을 손상시키는 응애, 벼를 손상시키는 혹파리, 땅콩의 꼬투리 천공충, 대두를 손상시키는 멸강나방(과일 및 꽃 천공), 캐슈넛을 손상시키는 뿌리 먹는 애벌레 등 다양한 곤충을 방제합니다。", 
        zh: "KINALUX 25 EC控制多种昆虫，如筒水螟、稻纵卷叶螟、危害穗的蜘蛛螨、危害水稻的瘿蚊、花生上的荚斑螟、危害大豆的粘虫（蛀果和花），以及危害腰果的食根毛虫。" 
      }
    ] 
  },
  { 
    id: "aceta-5ec", 
    name: { kh: "ACETA 5 EC (អាសេសតា 5 EC)", en: "ACETA 5 EC", vi: "ACETA 5 EC", ar: "أسيتا 5 EC", hi: "एसीटा 5 EC", ja: "アセタ 5 EC", ko: "아세타 5 EC", zh: "ACETA 5 EC" }, 
    image: "photo/ACETA 5EC-1.png", 
    category: "insecticide", 
    categoryKh: "ថ្នាំកម្ចាត់សត្វល្អិត", 
    usage: {
      kh: "របៀបប្រើប្រាស់: ត្រសក់ ឪឡឹក ល្ពៅ ស្រូវ ពោត ប្រើ ២២៥-៣០០ ម.ល/ហិចតា។ ស្វាយ ស្វាយចន្ទី លាយ ២៥០-៣០០ ម.ល ក្នុងទឹក ១០០០ លីត្រ។ បាញ់ឲ្យជោគលើដំណាំនៅពេលសត្វល្អិតទើបចាប់ផ្តើមបំផ្លាញ។",
      en: "Usage: Cucumber, watermelon, pumpkin, rice, corn: Use 225-300 ml/hectare. Mango, cashew: Mix 250-300 ml in 1000 liters of water. Spray thoroughly on crops when insects start to attack.",
      vi: "Cách sử dụng: Dưa chuột, dưa hấu, bí ngô, lúa, ngô: Dùng 225-300 ml/ha. Xoài, điều: Pha 250-300 ml trong 1000 lít nước. Phun ướt đều cây trồng khi côn trùng bắt đầu phá hoại.",
      ar: "الاستخدام: الخيار والبطيخ واليقطين والأرز والذرة: استخدم 225-300 مل / هكتار. المانجو والكاجو: اخلط 250-300 مل في 1000 لتر من الماء. رش جيدا على المحاصيل عندما تبدأ الحشرات في الهجوم.",
      hi: "उपयोग: ककड़ी, तरबूज, कद्दू, चावल, मक्का: 225-300 मिली/हेक्टेयर उपयोग करें। आम, काजू: 1000 लीटर पानी में 250-300 मिली मिलाएं। कीड़े हमला करना शुरू करने पर फसलों पर अच्छी तरह से स्प्रे करें।",
      ja: "使用方法: キュウリ、スイカ、カボチャ、稲、トウモロコシ: 225-300 ml/haを使用。マンゴー、カシューナッツ: 1000 Lの水に250-300 mlを混合。昆虫が攻撃し始めた時に作物に十分に散布します。",
      ko: "사용법: 오이, 수박, 호박, 벼, 옥수수: 225-300 ml/헥타르 사용. 망고, 캐슈넛: 물 1000 리터에 250-300 ml 혼합. 곤충이 공격을 시작할 때 작물에 충분히 분무합니다。",
      zh: "使用说明: 黄瓜、西瓜、南瓜、水稻、玉米：使用225-300毫升/公顷。芒果、腰果：在1000升水中混合250-300毫升。在昆虫开始攻击时彻底喷洒在作物上。"
    }, 
    ingredients: { kh: "Abamectin 2% + Acetamiprid 3%", en: "Abamectin 2% + Acetamiprid 3%", vi: "Abamectin 2% + Acetamiprid 3%", ar: "أبامكتين 2٪ + أسيتاميبريد 3٪", hi: "एबामेक्टिन 2% + एसेटामिप्रिड 3%", ja: "アバメクチン 2% + アセタミプリド 3%", ko: "아바멕틴 2% + 아세타미프리드 3%", zh: "阿维菌素 2% + 啶虫脒 3%" }, 
    benefits: [
      { 
        kh: "អាសេសតា 5 EC អាចកម្ចាត់សត្វល្អិតបានច្រើនប្រភេទដូចជា៖ រុយស សត្វទ្រីប ចៃទន់ ដង្កូវហ្វូង បំផ្លាញឪឡឹក ត្រសក់ ល្ពៅ, សត្វទ្រីប ចៃទន់ បំផ្លាញស្វាយ ស្វាយចន្ទី, ដង្កូវមូរស្មឹក មមាចត្នោតបំផ្លាញស្រូវ ពោត", 
        en: "ACETA 5 EC can control many types of insects such as: whiteflies, thrips, aphids, armyworms damaging watermelon, cucumber, pumpkin; thrips, aphids damaging mango, cashew; leaf rollers, brown planthoppers damaging rice, corn.", 
        vi: "ACETA 5 EC có thể kiểm soát nhiều loại côn trùng như: ruồi trắng, bọ trĩ, rệp mềm, sâu keo phá hoại dưa hấu, dưa chuột, bí ngô; bọ trĩ, rệp mềm phá hoại xoài, điều; sâu cuốn lá, rầy nâu phá hoại lúa, ngô.", 
        ar: "يمكن أن يتحكم أسيتا 5 EC في العديد من أنواع الحشرات مثل: الذباب الأبيض والتربس والمن وديدان الحشد التي تتلف البطيخ والخيار واليقطين؛ والتربس والمن الذي يتلف المانجو والكاجو؛ وبكرات الأوراق ونطاطات النباتات البنية التي تتلف الأرز والذرة.", 
        hi: "एसीटा 5 EC कई प्रकार के कीड़ों को नियंत्रित कर सकता है जैसे: सफेद मक्खी, थ्रिप्स, एफिड्स, आर्मीवर्म तरबूज, ककड़ी, कद्दू को नुकसान पहुंचाते हैं; थ्रिप्स, एफिड्स आम, काजू को नुकसान पहुंचाते हैं; लीफ रोलर, ब्राउन प्लांटहॉपर चावल, मक्का को नुकसान पहुंचाते हैं।", 
        ja: "ACETA 5 ECは、スイカ、キュウリ、カボチャに被害を与えるコナジラミ、アザミウマ、アブラムシ、ヨトウムシ、マンゴー、カシューナッツに被害を与えるアザミウマ、アブラムシ、稲、トウモロコシに被害を与えるハマキムシ、トビイロウンカなど、さまざまな種類の昆虫を防除できます。", 
        ko: "아세타 5 EC는 수박, 오이, 호박에 피해를 주는 가루이, 총채벌레, 진딧물, 멸강나방; 망고, 캐슈넛에 피해를 주는 총채벌레, 진딧물; 벼, 옥수수에 피해를 주는 잎말이나방, 벼멸구 등 다양한 종류의 곤충을 방제할 수 있습니다。", 
        zh: "ACETA 5 EC可以控制许多类型的昆虫，例如：破坏西瓜、黄瓜、南瓜的粉虱、蓟马、蚜虫、粘虫；破坏芒果、腰果的蓟马、蚜虫；破坏水稻、玉米的卷叶虫、褐飞虱。" 
      }
    ] 
  },
  { 
    id: "i-dol", 
    name: { kh: "I-DOL 70 WDG (អាយ ដល 70 WDG)", en: "I-DOL 70 WDG", vi: "I-DOL 70 WDG", ar: "آي-دول 70 WDG", hi: "आई-डोल 70 WDG", ja: "アイ・ドル 70 WDG", ko: "아이돌 70 WDG", zh: "I-DOL 70 WDG" }, 
    image: "photo/I-dol.png", 
    category: "insecticide", 
    categoryKh: "ថ្នាំកម្ចាត់សត្វល្អិត", 
    usage: {
      kh: "របៀបប្រើប្រាស់: ស្វាយ ស្វាយចន្ទី លាយ ៣០០-៤៥០ ក្រាម ក្នុងទឹក ១០០០ លីត្រ។ ស្រូវ ប្រើ ៣០០-៤៥០ ក្រាម/ហិចតា (បរិមាណទឹក ៣២០ លីត្រ/ហិចតា)។ បាញ់ឲ្យជោកលើដំណាំនៅពេលសត្វល្អិតទើបកើតមាន។",
      en: "Usage: Mango, cashew: Mix 300-450 grams in 1000 liters of water. Rice: Use 300-450 grams/hectare (Water volume: 320 liters/hectare). Spray thoroughly on crops when insects just appear.",
      vi: "Cách sử dụng: Xoài, điều: Pha 300-450 gram trong 1000 lít nước. Lúa: Dùng 300-450 gram/ha (Lượng nước: 320 lít/ha). Phun ướt đều cây trồng khi côn trùng mới xuất hiện.",
      ar: "الاستخدام: المانجو والكاجو: اخلط 300-450 جرامًا في 1000 لتر من الماء. الأرز: استخدم 300-450 جرام / هكتار (حجم الماء: 320 لتر / هكتار). رش جيدا على المحاصيل عندما تظهر الحشرات للتو.",
      hi: "उपयोग: आम, काजू: 1000 लीटर पानी में 300-450 ग्राम मिलाएं। चावल: 300-450 ग्राम/हेक्टेयर उपयोग करें (पानी की मात्रा: 320 लीटर/हेक्टेयर)। कीड़े अभी दिखाई देने पर फसलों पर अच्छी तरह से स्प्रे करें।",
      ja: "使用方法: マンゴー、カシューナッツ: 1000 Lの水に300-450 gを混合。稲: 300-450 g/haを使用（水量: 320 L/ha）。昆虫が発生したばかりの時に作物に十分に散布します。",
      ko: "사용법: 망고, 캐슈넛: 물 1000 리터에 300-450g 혼합. 벼: 300-450g/헥타르 사용(수량: 320 리터/헥타르). 곤충이 막 나타날 때 작물에 충분히 분무합니다。",
      zh: "使用说明: 芒果、腰果：在1000升水中混合300-450克。水稻：使用300-450克/公顷（水量：320升/公顷）。在昆虫刚出现时彻底喷洒在作物上。"
    }, 
    ingredients: { kh: "Imidacloprid 70%", en: "Imidacloprid 70%", vi: "Imidacloprid 70%", ar: "إيميداكلوبريد 70٪", hi: "इमिडाक्लोप्रिड 70%", ja: "イミダクロプリド 70%", ko: "이미다클로프리드 70%", zh: "吡虫啉 70%" }, 
    benefits: [
      { 
        kh: "អាយ ដុល 70 WDG អាចកម្ចាត់ សត្វល្អិតជាច្រើនប្រភេទដូចជា៖ សត្វទ្រីប មូសតែ បំផ្លាញស្វាយ ស្វាយចន្ទី និងសត្វទ្រីបបំផ្លាញស្រូវ", 
        en: "I-DOL 70 WDG can control many types of insects such as: thrips, mosquito bugs damaging mango, cashew, and thrips damaging rice.", 
        vi: "I-DOL 70 WDG có thể kiểm soát nhiều loại côn trùng như: bọ trĩ, bọ xít muỗi phá hoại xoài, điều và bọ trĩ phá hoại lúa.", 
        ar: "يمكن أن يتحكم آي-دول 70 WDG في العديد من أنواع الحشرات مثل: التربس وبق البعوض الذي يتلف المانجو والكاجو والتربس الذي يتلف الأرز.", 
        hi: "आई-डोल 70 WDG कई प्रकार के कीड़ों को नियंत्रित कर सकता है जैसे: थ्रिप्स, मच्छर बग आम, काजू को नुकसान पहुंचाते हैं, और थ्रिप्स चावल को नुकसान पहुंचाते हैं।", 
        ja: "I-DOL 70 WDGは、マンゴーやカシューナッツに被害を与えるアザミウマ、カスミカメムシ、稲に被害を与えるアザミウマなど、さまざまな種類の昆虫を防除できます。", 
        ko: "아이돌 70 WDG는 망고와 캐슈넛에 피해를 주는 총채벌레, 장님노린재, 벼에 피해를 주는 총채벌레 등 다양한 종류의 곤충을 방제할 수 있습니다。", 
        zh: "I-DOL 70 WDG可以控制许多类型的昆虫，例如：破坏芒果、腰果的蓟马、盲蝽，以及破坏水稻的蓟马。" 
      }
    ] 
  },
  { 
    id: "pup-g-6ec", 
    name: { kh: "PUB-G 6 EC (ផប់-ជី 6 EC)", en: "PUB-G 6 EC", vi: "PUB-G 6 EC", ar: "بوب-جي 6 EC", hi: "पब-जी 6 EC", ja: "PUB-G 6 EC", ko: "펍지 6 EC", zh: "PUB-G 6 EC" }, 
    image: "photo/PUP-G 6EC.png", 
    category: "insecticide", 
    categoryKh: "ថ្នាំកម្ចាត់សត្វល្អិត", 
    usage: {
      kh: "របៀបប្រើប្រាស់: ស្រូវ និងពោត ប្រើ ៣៧៥-៤៥០ ម.ល/ហិចតា (បរិមាណទឹក ៣២០ លីត្រ/ហិចតា)។ បាញ់ឲ្យជោកលើដំណាំនៅពេលសត្វល្អិតទើបកើតមានឡើង (ព្រឹកព្រលឹម ឬល្ងាចត្រជាក់)។",
      en: "Usage: Rice and corn: Use 375-450 ml/hectare (Water volume: 320 liters/hectare). Spray thoroughly on crops when insects just appear (early morning or cool evening).",
      vi: "Cách sử dụng: Lúa và ngô: Dùng 375-450 ml/ha (Lượng nước: 320 lít/ha). Phun ướt đều cây trồng khi côn trùng mới xuất hiện (sáng sớm hoặc chiều mát).",
      ar: "الاستخدام: الأرز والذرة: استخدم 375-450 مل / هكتار (حجم الماء: 320 لتر / هكتار). رش جيدا على المحاصيل عندما تظهر الحشرات للتو (في الصباح الباكر أو في المساء البارد).",
      hi: "उपयोग: चावल और मक्का: 375-450 मिली/हेक्टेयर उपयोग करें (पानी की मात्रा: 320 लीटर/हेक्टेयर)। कीड़े अभी दिखाई देने पर फसलों पर अच्छी तरह से स्प्रे करें (सुबह या ठंडी शाम)।",
      ja: "使用方法: 稲とトウモロコシ: 375-450 ml/haを使用（水量: 320 L/ha）。昆虫が発生したばかりの時に作物に十分に散布します（早朝または涼しい夕方）。",
      ko: "사용법: 벼 및 옥수수: 375-450 ml/헥타르 사용(수량: 320 리터/헥타르). 곤충이 막 나타날 때 작물에 충분히 분무합니다(이른 아침이나 서늘한 저녁).",
      zh: "使用说明: 水稻和玉米：使用375-450毫升/公顷（水量：320升/公顷）。在昆虫刚出现时彻底喷洒在作物上（清晨或凉爽的傍晚）。"
    }, 
    ingredients: { kh: "Lufenuron 4% + Emamectin benzoate 2%", en: "Lufenuron 4% + Emamectin benzoate 2%", vi: "Lufenuron 4% + Emamectin benzoate 2%", ar: "لوفينورون 4٪ + إيمامكتين بنزوات 2٪", hi: "लुफेन्युरोन 4% + एमेमेक्टिन बेंजोएट 2%", ja: "ルフェヌロン 4% + エマメクチン安息香酸塩 2%", ko: "루페누론 4% + 에마멕틴 벤조에이트 2%", zh: "虱螨脲 4% + 甲维盐 2%" }, 
    benefits: [
      { 
        kh: "ផាប់ ជី 6 EC អាចកម្ចាត់សត្វល្អិត បំផ្លាញដំណាំបានយ៉ាងមានប្រសិទ្ធភាពដូចជា៖ ដង្កូវមូរស្មឹកបំផ្លាញស្រូវ និងដង្កូវហ្វូងបំផ្លាញពោត", 
        en: "PUB-G 6 EC can effectively control insects damaging crops such as: leaf rollers damaging rice and armyworms damaging corn.", 
        vi: "PUB-G 6 EC có thể kiểm soát hiệu quả côn trùng phá hoại cây trồng như: sâu cuốn lá phá hoại lúa và sâu keo phá hoại ngô.", 
        ar: "يمكن لـ بوب-جي 6 EC مكافحة الحشرات التي تتلف المحاصيل بشكل فعال مثل: بكرات الأوراق التي تتلف الأرز وديدان الحشد التي تتلف الذرة.", 
        hi: "पब-जी 6 EC फसलों को नुकसान पहुंचाने वाले कीड़ों को प्रभावी ढंग से नियंत्रित कर सकता है जैसे: चावल को नुकसान पहुंचाने वाले लीफ रोलर्स और मकई को नुकसान पहुंचाने वाले आर्मीवर्म।", 
        ja: "PUB-G 6 ECは、稲に被害を与えるハマキムシやトウモロコシに被害を与えるヨトウムシなど、作物に被害を与える昆虫を効果的に防除できます。", 
        ko: "펍지 6 EC는 벼에 피해를 주는 잎말이나방과 옥수수에 피해를 주는 멸강나방 등 작물에 피해를 주는 곤충을 효과적으로 방제할 수 있습니다。", 
        zh: "PUB-G 6 EC可以有效控制破坏作物的昆虫，例如：破坏水稻的卷叶虫和破坏玉米的粘虫。" 
      }
    ] 
  },
  { 
    id: "lancer-gold", 
    name: { kh: "LANCER GOLD 55 WG (លែនសឺ ហ្គោល 55 WG)", en: "LANCER GOLD 55 WG", vi: "LANCER GOLD 55 WG", ar: "لانسر جولد 55 WG", hi: "लांसर गोल्ड 55 WG", ja: "ランサーゴールド 55 WG", ko: "랜서 골드 55 WG", zh: "LANCER GOLD 55 WG" }, 
    image: "photo/Lancer Gold.png", 
    category: "insecticide", 
    categoryKh: "ថ្នាំកម្ចាត់សត្វល្អិត", 
    usage: {
      kh: "របៀបប្រើប្រាស់: ស្វាយ ស្វាយចន្ទី លាយ ៤០០-៥០០ ក្រាម/ទឹក ១០០០ លីត្រ។ ស្រូវ និងបន្លែគ្រប់ប្រភេទ ប្រើ ៧៥០-១០០០ ក្រាម/ហិចតា។ បាញ់ឲ្យជោកលើដំណាំនៅពេលសត្វល្អិតទើបកើតមាន។",
      en: "Usage: Mango, cashew: Mix 400-500 grams in 1000 liters of water. Rice and all types of vegetables: Use 750-1000 grams/hectare. Spray thoroughly on crops when insects just appear.",
      vi: "Cách sử dụng: Xoài, điều: Pha 400-500 gram/1000 lít nước. Lúa và các loại rau: Dùng 750-1000 gram/ha. Phun ướt đều cây trồng khi côn trùng mới xuất hiện.",
      ar: "الاستخدام: المانجو والكاجو: اخلط 400-500 جرام في 1000 لتر من الماء. الأرز وجميع أنواع الخضروات: استخدم 750-1000 جرام / هكتار. رش جيدا على المحاصيل عندما تظهر الحشرات للتو.",
      hi: "उपयोग: आम, काजू: 1000 लीटर पानी में 400-500 ग्राम मिलाएं। चावल और सभी प्रकार की सब्जियां: 750-1000 ग्राम/हेक्टेयर उपयोग करें। कीड़े अभी दिखाई देने पर फसलों पर अच्छी तरह से स्प्रे करें।",
      ja: "使用方法: マンゴー、カシューナッツ: 1000 Lの水に400-500 gを混合。稲とすべての種類の野菜: 750-1000 g/haを使用。昆虫が発生したばかりの時に作物に十分に散布します。",
      ko: "사용법: 망고, 캐슈넛: 물 1000 리터에 400-500g 혼합. 벼 및 모든 종류의 채소: 750-1000g/헥타르 사용. 곤충이 막 나타날 때 작물에 충분히 분무합니다。",
      zh: "使用说明: 芒果、腰果：在1000升水中混合400-500克。水稻和所有类型的蔬菜：使用750-1000克/公顷。在昆虫刚出现时彻底喷洒在作物上。"
    }, 
    ingredients: { kh: "Acephate 50% + Imidacloprid 5%", en: "Acephate 50% + Imidacloprid 5%", vi: "Acephate 50% + Imidacloprid 5%", ar: "أسيفات 50٪ + إيميداكلوبريد 5٪", hi: "ऐसीफेट 50% + इमिडाक्लोप्रिड 5%", ja: "アセフェート 50% + イミダクロプリド 5%", ko: "아세페이트 50% + 이미다클로프리드 5%", zh: "乙酰甲胺磷 50% + 吡虫啉 5%" }, 
    benefits: [
      { 
        kh: "លេនសឺ ហ្គោល 55 WG អាចកម្ចាត់សត្វល្អិតជាច្រើនប្រភេទដូចជា សត្វទ្រីប ចៃទន់ ដង្កូវស៊ីផ្កា បំផ្លាញស្វាយចន្ទី ស្វាយ, ដង្កូវស៊ីរូងដើម ដង្កូវមូរស្មឹក មមាចត្នោត មមាចខៀវ បំផ្លាញស្រូវ និងសត្វទ្រីប ចៃទន់ ពីងពាងក្រហម បំផ្លាញបន្លែគ្រប់ប្រភេទ", 
        en: "LANCER GOLD 55 WG can control many types of insects such as thrips, aphids, flower-eating caterpillars damaging cashew, mango; stem borers, leaf rollers, brown planthoppers, green leafhoppers damaging rice; and thrips, aphids, red spider mites damaging all kinds of vegetables.", 
        vi: "LANCER GOLD 55 WG có thể kiểm soát nhiều loại côn trùng như bọ trĩ, rệp mềm, sâu ăn hoa phá hoại điều, xoài; sâu đục thân, sâu cuốn lá, rầy nâu, rầy xanh phá hoại lúa; và bọ trĩ, rệp mềm, nhện đỏ phá hoại các loại rau.", 
        ar: "يمكن أن يتحكم لانسر جولد 55 WG في العديد من أنواع الحشرات مثل التربس والمن واليرقات الآكلة للزهور التي تتلف الكاجو والمانجو؛ وحفار الساق وبكرات الأوراق ونطاطات النباتات البنية ونطاطات الأوراق الخضراء التي تتلف الأرز؛ والتربس والمن وسوس العنكبوت الأحمر الذي يتلف جميع أنواع الخضروات.", 
        hi: "लांसर गोल्ड 55 WG कई प्रकार के कीड़ों को नियंत्रित कर सकता है जैसे थ्रिप्स, एफिड्स, फूल खाने वाले कैटरपिलर काजू, आम को नुकसान पहुंचाते हैं; स्टेम बोरर, लीफ रोलर्स, ब्राउन प्लांटहॉपर, ग्रीन लीफहॉपर चावल को नुकसान पहुंचाते हैं; और थ्रिप्स, एफिड्स, लाल मकड़ी के कण सभी प्रकार की सब्जियों को नुकसान पहुंचाते हैं।", 
        ja: "LANCER GOLD 55 WGは、カシューナッツやマンゴーに被害を与えるアザミウマ、アブラムシ、花食い毛虫、稲に被害を与えるメイチュウ、ハマキムシ、トビイロウンカ、ツマグロヨコバイ、すべての種類の野菜に被害を与えるアザミウマ、アブラムシ、ハダニなど、さまざまな種類の昆虫を防除できます。", 
        ko: "랜서 골드 55 WG는 캐슈넛, 망고에 피해를 주는 총채벌레, 진딧물, 꽃 먹는 애벌레; 벼에 피해를 주는 이화명나방, 잎말이나방, 벼멸구, 끝동매미충; 모든 종류의 채소에 피해를 주는 총채벌레, 진딧물, 점박이응애 등 다양한 종류의 곤충을 방제할 수 있습니다。", 
        zh: "LANCER GOLD 55 WG可以控制许多类型的昆虫，如破坏腰果、芒果的蓟马、蚜虫、食花毛虫；破坏水稻的二化螟、卷叶虫、褐飞虱、绿叶蝉；以及破坏各种蔬菜的蓟马、蚜虫、红蜘蛛螨。" 
      }
    ] 
  },
  { 
    id: "lt-thrip-250-wg", 
    name: { kh: "LT-THRIP 250 WG (អិលធី-ទ្រីប 250 WG)", en: "LT-THRIP 250 WG", vi: "LT-THRIP 250 WG", ar: "إل تي-ثريب 250 WG", hi: "एलटी-थ्रिप 250 WG", ja: "LT-THRIP 250 WG", ko: "LT-THRIP 250 WG", zh: "LT-THRIP 250 WG" }, 
    image: "photo/LT-THRIP 250 WG.png", 
    category: "insecticide", 
    categoryKh: "ថ្នាំកម្ចាត់សត្វល្អិត", 
    usage: {
      kh: "របៀបប្រើប្រាស់: ស្រូវ ស្វាយ ស្វាយចន្ទី ប្រើ ០.៤ គ.ក្រ (៤០០ក្រាម) /ហិចតា (ចំពោះស្រូវ បរិមាណទឹក ៣២០ លីត្រ/ហិចតា)។ បាញ់ឲ្យជោកលើដំណាំនៅពេលសត្វល្អិតទើបកើតមានឡើង។",
      en: "Usage: Rice, mango, cashew: Use 0.4 kg (400 grams)/hectare (For rice, water volume: 320 liters/hectare). Spray thoroughly on crops when insects just appear.",
      vi: "Cách sử dụng: Lúa, xoài, điều: Dùng 0.4 kg (400 gram)/ha (Đối với lúa, lượng nước: 320 lít/ha). Phun ướt đều cây trồng khi côn trùng mới xuất hiện.",
      ar: "الاستخدام: الأرز والمانجو والكاجو: استخدم 0.4 كجم (400 جرام) / هكتار (بالنسبة للأرز، حجم الماء: 320 لتر / هكتار). رش جيدا على المحاصيل عندما تظهر الحشرات للتو.",
      hi: "उपयोग: चावल, आम, काजू: 0.4 किग्रा (400 ग्राम)/हेक्टेयर उपयोग करें (चावल के लिए, पानी की मात्रा: 320 लीटर/हेक्टेयर)। कीड़े अभी दिखाई देने पर फसलों पर अच्छी तरह से स्प्रे करें।",
      ja: "使用方法: 稲、マンゴー、カシューナッツ: 0.4 kg（400 g）/haを使用（稲の場合、水量: 320 L/ha）。昆虫が発生したばかりの時に作物に十分に散布します。",
      ko: "사용법: 벼, 망고, 캐슈넛: 0.4kg(400g)/헥타르 사용(벼의 경우 수량: 320 리터/헥타르). 곤충이 막 나타날 때 작물에 충분히 분무합니다。",
      zh: "使用说明: 水稻、芒果、腰果：使用0.4千克（400克）/公顷（对于水稻，水量：320升/公顷）。在昆虫刚出现时彻底喷洒在作物上。"
    }, 
    ingredients: { kh: "Thiamethoxam 250 ក្រាម/គ.ក្រ", en: "Thiamethoxam 250 g/kg", vi: "Thiamethoxam 250 g/kg", ar: "ثياميثوكسام 250 جم/كجم", hi: "थियामेथोक्सम 250 ग्राम/किग्रा", ja: "チアメトキサム 250g/kg", ko: "티아메톡삼 250g/kg", zh: "噻虫嗪 250克/千克" }, 
    benefits: [
      { 
        kh: "អិលធី-ទ្រីប 250 WG ថ្នាំកម្ចាត់បានយ៉ាងមានប្រសិទ្ធភាពចំពោះសត្វទ្រីបបំផ្លាញលើស្រូវ ស្វាយ និងស្វាយចន្ទី", 
        en: "LT-THRIP 250 WG is highly effective against thrips damaging rice, mango, and cashew.", 
        vi: "LT-THRIP 250 WG rất hiệu quả trong việc kiểm soát bọ trĩ phá hoại lúa, xoài và điều.", 
        ar: "إل تي-ثريب 250 WG فعال للغاية ضد التربس الذي يتلف الأرز والمانجو والكاجو.", 
        hi: "एलटी-थ्रिप 250 WG चावल, आम और काजू को नुकसान पहुंचाने वाले थ्रिप्स के खिलाफ अत्यधिक प्रभावी है।", 
        ja: "LT-THRIP 250 WGは、稲、マンゴー、カシューナッツに被害を与えるアザミウマに対して非常に効果的です。", 
        ko: "LT-THRIP 250 WG는 벼, 망고 및 캐슈넛에 피해를 주는 총채벌레에 매우 효과적입니다。", 
        zh: "LT-THRIP 250 WG对破坏水稻、芒果和腰果的蓟马非常有效。" 
      }
    ] 
  },
  { 
    id: "floram-500wp", 
    name: { kh: "FLORAM 500WP", en: "FLORAM 500WP", vi: "FLORAM 500WP", ar: "فلورام 500WP", hi: "फ्लोराम 500WP", ja: "フローラム 500WP", ko: "플로람 500WP", zh: "FLORAM 500WP" }, 
    image: "photo/FLORAM 500WP.png", 
    category: "insecticide", 
    categoryKh: "ថ្នាំកម្ចាត់សត្វល្អិត", 
    usage: {
      kh: "របៀបប្រើប្រាស់: ស្រូវ ដំណាំមានមើម កាហ្វេ ស្វាយ ស្វាយចន្ទី លាយ ១០០ ក្រាម ក្នុងទឹក ២៥ លីត្រ ឬ ១ គីឡូក្រាម/ហិចតា (ចំពោះស្រូវ បរិមាណទឹក ៣២០ លីត្រ/ហិចតា)។ បាញ់ឲ្យជោកលើដំណាំនៅពេលសត្វល្អិតទើបកើតមាន។",
      en: "Usage: Rice, tuber crops, coffee, mango, cashew: Mix 100 grams in 25 liters of water or 1 kg/hectare (For rice, water volume: 320 liters/hectare). Spray thoroughly on crops when insects just appear.",
      vi: "Cách sử dụng: Lúa, cây lấy củ, cà phê, xoài, điều: Pha 100 gram trong 25 lít nước hoặc 1 kg/ha (Đối với lúa, lượng nước: 320 lít/ha). Phun ướt đều cây trồng khi côn trùng mới xuất hiện.",
      ar: "الاستخدام: الأرز والمحاصيل الدرنية والقهوة والمانجو والكاجو: اخلط 100 جرام في 25 لترًا من الماء أو 1 كجم / هكتار (بالنسبة للأرز، حجم الماء: 320 لتر / هكتار). رش جيدا على المحاصيل عندما تظهر الحشرات للتو.",
      hi: "उपयोग: चावल, कंद फसलें, कॉफी, आम, काजू: 25 लीटर पानी में 100 ग्राम या 1 किलो/हेक्टेयर मिलाएं (चावल के लिए, पानी की मात्रा: 320 लीटर/हेक्टेयर)। कीड़े अभी दिखाई देने पर फसलों पर अच्छी तरह से स्प्रे करें।",
      ja: "使用方法: 稲、塊根作物、コーヒー、マンゴー、カシューナッツ: 25 Lの水に100 gを混合するか、1 kg/haを使用（稲の場合、水量: 320 L/ha）。昆虫が発生したばかりの時に作物に十分に散布します。",
      ko: "사용법: 벼, 덩이줄기 작물, 커피, 망고, 캐슈넛: 물 25 리터에 100g 혼합 또는 1kg/헥타르 사용(벼의 경우 수량: 320 리터/헥타르). 곤충이 막 나타날 때 작물에 충분히 분무합니다。",
      zh: "使用说明: 水稻、块茎作物、咖啡、芒果、腰果：在25升水中混合100克或1千克/公顷（对于水稻，水量：320升/公顷）。在昆虫刚出现时彻底喷洒在作物上。"
    }, 
    ingredients: { kh: "Flonicamid 10% + Nitenpyram 40%", en: "Flonicamid 10% + Nitenpyram 40%", vi: "Flonicamid 10% + Nitenpyram 40%", ar: "فلونيكاميد 10٪ + نيتينبيرام 40٪", hi: "फ्लोनिकैमिड 10% + निटेनपाइरम 40%", ja: "フロニカミド 10% + ニテンピラム 40%", ko: "플로니카미드 10% + 니텐피람 40%", zh: "氟啶虫酰胺 10% + 烯啶虫胺 40%" }, 
    benefits: [
      { 
        kh: "FLORAM 500WP គឺជាថ្នាំកម្ចាត់សត្វល្អិតបានយ៉ាងទូលំទូលាយ វាមានឥទ្ធិពលប៉ះពាល់ផ្ទាល់ ជ្រាបចូល។ កម្ចាត់យ៉ាងមានប្រសិទ្ធភាព មមាចត្នោតបំផ្លាញស្រូវ ចៃទន់បំផ្លាញដំណាំមានមើម ចៃសបំផ្លាញកាហ្វេ និងមមាចផ្កាស្វាយ", 
        en: "FLORAM 500WP is a broad-spectrum insecticide with contact and systemic action. Effectively controls brown planthoppers damaging rice, aphids damaging tuber crops, mealybugs damaging coffee, and mango leafhoppers.", 
        vi: "FLORAM 500WP là thuốc trừ sâu phổ rộng có tác dụng tiếp xúc và lưu dẫn. Kiểm soát hiệu quả rầy nâu phá hoại lúa, rệp mềm phá hoại cây lấy củ, rệp sáp phá hoại cà phê và rầy bông xoài.", 
        ar: "فلورام 500WP هو مبيد حشري واسع الطيف ذو تأثير ملامس وجهازي. يكافح بشكل فعال نطاطات النباتات البنية التي تتلف الأرز، والمن الذي يتلف المحاصيل الدرنية، والبق الدقيقي الذي يتلف القهوة، ونطاطات أوراق المانجو.", 
        hi: "फ्लोराम 500WP संपर्क और प्रणालीगत क्रिया के साथ एक व्यापक स्पेक्ट्रम कीटनाशक है। चावल को नुकसान पहुंचाने वाले ब्राउन प्लांटहॉपर, कंद फसलों को नुकसान पहुंचाने वाले एफिड्स, कॉफी को नुकसान पहुंचाने वाले मीलीबग्स और आम के लीफहॉपर को प्रभावी ढंग से नियंत्रित करता है।", 
        ja: "FLORAM 500WPは、接触および浸透移行性作用を持つ広域殺虫剤です。稲に被害を与えるトビイロウンカ、塊根作物に被害を与えるアブラムシ、コーヒーに被害を与えるコナカイガラムシ、マンゴーヨコバイを効果的に防除します。", 
        ko: "플로람 500WP는 접촉 및 침투 이행성 작용을 하는 광범위 살충제입니다. 벼에 피해를 주는 벼멸구, 덩이줄기 작물에 피해를 주는 진딧물, 커피에 피해를 주는 깍지벌레 및 망고 매미충을 효과적으로 방제합니다。", 
        zh: "FLORAM 500WP是一种具有触杀和内吸作用的广谱杀虫剂。有效控制破坏水稻的褐飞虱、破坏块茎作物的蚜虫、破坏咖啡的粉蚧和芒果叶蝉。" 
      }
    ] 
  },
  { 
    id: "dongkov-36-ec", 
    name: { kh: "DONGKOV 36 EC (ដង្កូវ 36 EC)", en: "DONGKOV 36 EC", vi: "DONGKOV 36 EC", ar: "دونجكوف 36 EC", hi: "डोंगकोव 36 EC", ja: "ドンコフ 36 EC", ko: "동코브 36 EC", zh: "DONGKOV 36 EC" }, 
    image: "photo/DONGKOV.png", 
    category: "insecticide", 
    categoryKh: "ថ្នាំកម្ចាត់សត្វល្អិត", 
    usage: {
      kh: "របៀបប្រើប្រាស់: ត្រសក់ ឪឡឹក ល្ពៅ ស្វាយ ស្វាយចន្ទី ស្រូវ និងពោត ប្រើ ០.១៥-០.២០ លីត្រ (១៥០-២០០ ម.ល) /ហិចតា (បរិមាណទឹក ៣២០-៤០០ លីត្រ/ហិចតា)។ បាញ់ឲ្យជោកលើដំណាំនៅពេលសត្វល្អិតទើបកើតមាន។",
      en: "Usage: Cucumber, watermelon, pumpkin, mango, cashew, rice and corn: Use 0.15-0.20 liters (150-200 ml)/hectare (Water volume: 320-400 liters/hectare). Spray thoroughly on crops when insects just appear.",
      vi: "Cách sử dụng: Dưa chuột, dưa hấu, bí ngô, xoài, điều, lúa và ngô: Dùng 0.15-0.20 lít (150-200 ml)/ha (Lượng nước: 320-400 lít/ha). Phun ướt đều cây trồng khi côn trùng mới xuất hiện.",
      ar: "الاستخدام: الخيار والبطيخ واليقطين والمانجو والكاجو والأرز والذرة: استخدم 0.15-0.20 لتر (150-200 مل) / هكتار (حجم الماء: 320-400 لتر / هكتار). رش جيدا على المحاصيل عندما تظهر الحشرات للتو.",
      hi: "उपयोग: ककड़ी, तरबूज, कद्दू, आम, काजू, चावल और मक्का: 0.15-0.20 लीटर (150-200 मिली)/हेक्टेयर उपयोग करें (पानी की मात्रा: 320-400 लीटर/हेक्टेयर)। कीड़े अभी दिखाई देने पर फसलों पर अच्छी तरह से स्प्रे करें।",
      ja: "使用方法: キュウリ、スイカ、カボチャ、マンゴー、カシューナッツ、稲、トウモロコシ: 0.15-0.20 L（150-200 ml）/haを使用（水量: 320-400 L/ha）。昆虫が発生したばかりの時に作物に十分に散布します。",
      ko: "사용법: 오이, 수박, 호박, 망고, 캐슈넛, 벼 및 옥수수: 0.15-0.20 리터(150-200 ml)/헥타르 사용(수량: 320-400 리터/헥타르). 곤충이 막 나타날 때 작물에 충분히 분무합니다。",
      zh: "使用说明: 黄瓜、西瓜、南瓜、芒果、腰果、水稻和玉米：使用0.15-0.20升（150-200毫升）/公顷（水量：320-400升/公顷）。在昆虫刚出现时彻底喷洒在作物上。"
    }, 
    ingredients: { kh: "Abamectin 36 ក្រាម/លីត្រ", en: "Abamectin 36 g/liter", vi: "Abamectin 36 g/lít", ar: "أبامكتين 36 جم / لتر", hi: "एबामेक्टिन 36 ग्राम/लीटर", ja: "アバメクチン 36 g/L", ko: "아바멕틴 36g/L", zh: "阿维菌素 36克/升" }, 
    benefits: [
      { 
        kh: "ដង្កូវ 36 EC កម្ចាត់សត្វល្អិតបានច្រើនប្រភេទដូចជា៖ រុយស សត្វទ្រីប ចៃទន់ ដង្កូវហ្វូងបំផ្លាញឪឡឹក ត្រសក់ ល្ពៅ, សត្វទ្រីប ចៃទន់ បំផ្លាញស្វាយ ស្វាយចន្ទី, ដង្កូវមូរស្មឹក ខ្យងមាស បំផ្លាញស្រូវ ពោត", 
        en: "DONGKOV 36 EC can control many types of insects such as: whiteflies, thrips, aphids, armyworms damaging watermelon, cucumber, pumpkin; thrips, aphids damaging mango, cashew; leaf rollers, golden apple snails damaging rice, corn.", 
        vi: "DONGKOV 36 EC có thể kiểm soát nhiều loại côn trùng như: ruồi trắng, bọ trĩ, rệp mềm, sâu keo phá hoại dưa hấu, dưa chuột, bí ngô; bọ trĩ, rệp mềm phá hoại xoài, điều; sâu cuốn lá, ốc bươu vàng phá hoại lúa, ngô.", 
        ar: "يمكن أن يتحكم دونجكوف 36 EC في العديد من أنواع الحشرات مثل: الذباب الأبيض والتربس والمن وديدان الحشد التي تتلف البطيخ والخيار واليقطين؛ والتربس والمن الذي يتلف المانجو والكاجو؛ وبكرات الأوراق وحلزون التفاح الذهبي الذي يتلف الأرز والذرة.", 
        hi: "डोंगकोव 36 EC कई प्रकार के कीड़ों को नियंत्रित कर सकता है जैसे: सफेद मक्खी, थ्रिप्स, एफिड्स, आर्मीवर्म तरबूज, ककड़ी, कद्दू को नुकसान पहुंचाते हैं; थ्रिप्स, एफिड्स आम, काजू को नुकसान पहुंचाते हैं; लीफ रोलर, गोल्डन एप्पल घोंघा चावल, मक्का को नुकसान पहुंचाते हैं।", 
        ja: "DONGKOV 36 ECは、スイカ、キュウリ、カボチャに被害を与えるコナジラミ、アザミウマ、アブラムシ、ヨトウムシ、マンゴー、カシューナッツに被害を与えるアザミウマ、アブラムシ、稲、トウモロコシに被害を与えるハマキムシ、スクミリンゴガイなど、さまざまな種類の昆虫を防除できます。", 
        ko: "동코브 36 EC는 수박, 오이, 호박에 피해를 주는 가루이, 총채벌레, 진딧물, 멸강나방; 망고, 캐슈넛에 피해를 주는 총채벌레, 진딧물; 벼, 옥수수에 피해를 주는 잎말이나방, 왕우렁이 등 다양한 종류의 곤충을 방제할 수 있습니다。", 
        zh: "DONGKOV 36 EC可以控制许多类型的昆虫，例如：破坏西瓜、黄瓜、南瓜的粉虱、蓟马、蚜虫、粘虫；破坏芒果、腰果的蓟马、蚜虫；破坏水稻、玉米的卷叶虫、福寿螺。" 
      }
    ] 
  },
  { 
    id: "kla-khlang", 
    name: { kh: "KLA KLANG 333 SC (ខ្លាខ្លាំង 333 SC)", en: "KLA KHLANG 333 SC", vi: "KLA KHLANG 333 SC", ar: "كلا خلانج 333 SC", hi: "कला ख्लांग 333 SC", ja: "クラ・クラン 333 SC", ko: "클라 클랑 333 SC", zh: "KLA KHLANG 333 SC" }, 
    image: "photo/KLA KHLANG.png", 
    category: "insecticide", 
    categoryKh: "ថ្នាំកម្ចាត់សត្វល្អិត", 
    usage: {
      kh: "របៀបប្រើប្រាស់: ស្រូវ សណ្តែក បន្លែ និងដំណាំហូបផ្លែ ប្រើ ០.២៥-០.៣ លីត្រ /ហិចតា (បរិមាណទឹក ៣២០-៤០០ លីត្រ/ហិចតា)។ បាញ់ឲ្យជោកលើដំណាំនៅពេលសត្វល្អិតទើបកើតមាន។",
      en: "Usage: Rice, beans, vegetables, and fruit trees: Use 0.25-0.3 liters/hectare (Water volume: 320-400 liters/hectare). Spray thoroughly on crops when insects just appear.",
      vi: "Cách sử dụng: Lúa, đậu, rau và cây ăn quả: Dùng 0.25-0.3 lít/ha (Lượng nước: 320-400 lít/ha). Phun ướt đều cây trồng khi côn trùng mới xuất hiện.",
      ar: "الاستخدام: الأرز والفاصوليا والخضروات وأشجار الفاكهة: استخدم 0.25-0.3 لتر / هكتار (حجم الماء: 320-400 لتر / هكتار). رش جيدا على المحاصيل عندما تظهر الحشرات للتو.",
      hi: "उपयोग: चावल, सेम, सब्जियां और फलों के पेड़: 0.25-0.3 लीटर/हेक्टेयर उपयोग करें (पानी की मात्रा: 320-400 लीटर/हेक्टेयर)। कीड़े अभी दिखाई देने पर फसलों पर अच्छी तरह से स्प्रे करें।",
      ja: "使用方法: 稲、豆類、野菜、果樹: 0.25-0.3 L/haを使用（水量: 320-400 L/ha）。昆虫が発生したばかりの時に作物に十分に散布します。",
      ko: "사용법: 벼, 콩, 채소 및 과수: 0.25-0.3 리터/헥타르 사용(수량: 320-400 리터/헥타르). 곤충이 막 나타날 때 작물에 충분히 분무합니다。",
      zh: "使用说明: 水稻、豆类、蔬菜和果树：使用0.25-0.3升/公顷（水量：320-400升/公顷）。在昆虫刚出现时彻底喷洒在作物上。"
    }, 
    ingredients: { kh: "Chlorfenapyr 333 ក្រាម/លីត្រ", en: "Chlorfenapyr 333 g/liter", vi: "Chlorfenapyr 333 g/lít", ar: "كلورفينابير 333 جم / لتر", hi: "क्लोरफेनापायर 333 ग्राम/लीटर", ja: "クロルフェナピル 333 g/L", ko: "클로르페나피르 333g/L", zh: "虫螨腈 333克/升" }, 
    benefits: [
      { 
        kh: "ខ្លាខ្លាំង 333 SC កម្ចាត់បានយ៉ាងពិសេសដង្កូវមូរស្មឹក ដង្កូវស៊ីរូងដើមបំផ្លាញស្រូវ, ដង្កូវខៀវ ដង្កូវហ្វូង បំផ្លាញសណ្តែកនិងបន្លែ, ដង្កូវចោះផ្លែបំផ្លាញដំណាំហូបផ្លែ", 
        en: "KLA KHLANG 333 SC specially controls leaf rollers, stem borers damaging rice; green caterpillars, armyworms damaging beans and vegetables; fruit borers damaging fruit trees.", 
        vi: "KLA KHLANG 333 SC đặc biệt kiểm soát sâu cuốn lá, sâu đục thân phá hoại lúa; sâu xanh, sâu keo phá hoại đậu và rau; sâu đục quả phá hoại cây ăn quả.", 
        ar: "يتحكم كلا خلانج 333 SC بشكل خاص في بكرات الأوراق وحفار الساق الذي يتلف الأرز؛ واليرقات الخضراء وديدان الحشد التي تتلف الفاصوليا والخضروات؛ وحفار الفاكهة الذي يتلف أشجار الفاكهة.", 
        hi: "कला ख्लांग 333 SC विशेष रूप से चावल को नुकसान पहुंचाने वाले लीफ रोलर्स, स्टेम बोरर्स; सेम और सब्जियों को नुकसान पहुंचाने वाले ग्रीन कैटरपिलर, आर्मीवर्म; फलों के पेड़ों को नुकसान पहुंचाने वाले फ्रूट बोरर को नियंत्रित करता है।", 
        ja: "KLA KHLANG 333 SCは、特に稲に被害を与えるハマキムシ、メイチュウ、豆類や野菜に被害を与えるアオムシ、ヨトウムシ、果樹に被害を与えるシンクイムシを防除します。", 
        ko: "클라 클랑 333 SC는 벼에 피해를 주는 잎말이나방, 이화명나방; 콩과 채소에 피해를 주는 푸른 애벌레, 멸강나방; 과수에 피해를 주는 과일 뚫는 벌레를 특별히 방제합니다。", 
        zh: "KLA KHLANG 333 SC专门控制破坏水稻的卷叶虫、二化螟；破坏豆类和蔬菜的青虫、粘虫；破坏果树的蛀果虫。" 
      }
    ] 
  },

  // IV. ថ្នាំកម្ចាត់ជំងឺ (Fungicides)
  { 
    id: "validan-3-sl", 
    name: { kh: "VALIDAN 3 SL (វ៉ាលីដាន 3 SL)", en: "VALIDAN 3 SL", vi: "VALIDAN 3 SL", ar: "فاليدان 3 SL", hi: "वैलिडान 3 SL", ja: "バリダン 3 SL", ko: "발리단 3 SL", zh: "VALIDAN 3 SL" }, 
    image: "photo/Validan 3 SL.png", 
    category: "fungicide", 
    categoryKh: "ថ្នាំកម្ចាត់ជំងឺ", 
    usage: {
      kh: "របៀបប្រើប្រាស់: ស្រូវ លាយ ៨០-១៣០ ម.ល/ធុង ២៥លីត្រ។ ពោត លាយ ១៦០ ម.ល/ធុង ២៥លីត្រ (បរិមាណទឹក ៣២០ លីត្រ/ហិចតា)។ អាចបាញ់ ២លើកគឺនៅពេលស្រូវកំពុងកំណើតកូន និងបាញ់ឱ្យសើមជោកកន្លែងដែលមានស្នាមជំងឺ។",
      en: "Usage: Rice: Mix 80-130 ml/25-liter tank. Corn: Mix 160 ml/25-liter tank (Water volume: 320 liters/hectare). Can be sprayed twice: during tillering and spray thoroughly on diseased areas.",
      vi: "Cách sử dụng: Lúa: Pha 80-130 ml/bình 25 lít. Ngô: Pha 160 ml/bình 25 lít (Lượng nước: 320 lít/ha). Có thể phun 2 lần: giai đoạn lúa đẻ nhánh và phun ướt đều vùng bị bệnh.",
      ar: "الاستخدام: الأرز: اخلط 80-130 مل / خزان 25 لترًا. الذرة: اخلط 160 مل / خزان 25 لترًا (حجم الماء: 320 لتر / هكتار). يمكن رشه مرتين: أثناء التزهير ورشه جيدًا على المناطق المريضة.",
      hi: "उपयोग: चावल: 25 लीटर टैंक में 80-130 मिली मिलाएं। मक्का: 25 लीटर टैंक में 160 मिली मिलाएं (पानी की मात्रा: 320 लीटर/हेक्टेयर)। दो बार स्प्रे किया जा सकता है: कल्ले निकलते समय और रोगग्रस्त क्षेत्रों पर अच्छी तरह से स्प्रे करें।",
      ja: "使用方法: 稲: 25 Lのタンクに80-130 mlを混合。トウモロコシ: 25 Lのタンクに160 mlを混合（水量: 320 L/ha）。2回散布可能: 分げつ期および病斑部に十分に散布します。",
      ko: "사용법: 벼: 25리터 탱크에 80-130ml 혼합. 옥수수: 25리터 탱크에 160ml 혼합(수량: 320 리터/헥타르). 2회 분무 가능: 분얼기 및 병반 부위에 충분히 분무합니다。",
      zh: "使用说明: 水稻：在25升水箱中混合80-130毫升。玉米：在25升水箱中混合160毫升（水量：320升/公顷）。可以喷洒两次：分蘖期和在病区彻底喷洒。"
    }, 
    ingredients: { kh: "Validamycin A 3% w/w", en: "Validamycin A 3% w/w", vi: "Validamycin A 3% w/w", ar: "فاليداميسين أ 3٪ وزن / وزن", hi: "वैलिडामाइसिन ए 3% w/w", ja: "バリダマイシン A 3% w/w", ko: "발리다마이신 A 3% w/w", zh: "井冈霉素 A 3% w/w" }, 
    benefits: [
      { 
        kh: "វ៉ាលីដាន 3 SL ប្រើដើម្បីកម្ចាត់ ជំងឺរលាកស្រទបបំផ្លាញស្រូវនិងពោត", 
        en: "VALIDAN 3 SL is used to control sheath blight damaging rice and corn.", 
        vi: "VALIDAN 3 SL được sử dụng để kiểm soát bệnh khô vằn phá hoại lúa và ngô.", 
        ar: "يستخدم فاليدان 3 SL للسيطرة على آفة الغمد التي تتلف الأرز والذرة.", 
        hi: "वैलिडान 3 SL का उपयोग चावल और मक्का को नुकसान पहुंचाने वाले शीथ ब्लाइट को नियंत्रित करने के लिए किया जाता है।", 
        ja: "VALIDAN 3 SLは、稲やトウモロコシに被害を与える紋枯病の防除に使用されます。", 
        ko: "발리단 3 SL은 벼와 옥수수에 피해를 주는 잎집무늬마름병을 방제하는 데 사용됩니다。", 
        zh: "VALIDAN 3 SL用于控制破坏水稻和玉米的纹枯病。" 
      }
    ] 
  },
  { 
    id: "validan-5sl", 
    name: { kh: "Validan 5SL (វ៉ាលីដាន 5SL)", en: "Validan 5SL", vi: "Validan 5SL", ar: "فاليدان 5SL", hi: "वैलिडान 5SL", ja: "バリダン 5SL", ko: "발리단 5SL", zh: "Validan 5SL" }, 
    image: "photo/Validan 5SL.png", 
    category: "fungicide", 
    categoryKh: "ថ្នាំកម្ចាត់ជំងឺ", 
    usage: {
      kh: "របៀបប្រើប្រាស់: លាយ ២០-២៥ ម.ល ក្នុងទឹក ២៥ លីត្រ។ បាញ់ការពារមុនពេលមានជំងឺ ឬបាញ់ពេលសង្កេតឃើញរោគសញ្ញា។",
      en: "Usage: Mix 20-25 ml in 25 liters of water. Spray to prevent before disease occurs or spray when symptoms are observed.",
      vi: "Cách sử dụng: Pha 20-25 ml trong 25 lít nước. Phun phòng ngừa trước khi bệnh xuất hiện hoặc phun khi quan sát thấy triệu chứng.",
      ar: "الاستخدام: اخلط 20-25 مل في 25 لترًا من الماء. رش للوقاية قبل حدوث المرض أو رش عند ملاحظة الأعراض.",
      hi: "उपयोग: 25 लीटर पानी में 20-25 मिली मिलाएं। रोग होने से पहले बचाव के लिए स्प्रे करें या लक्षण दिखने पर स्प्रे करें।",
      ja: "使用方法: 25 Lの水に20-25 mlを混合。病気が発生する前に予防として散布するか、症状が観察されたときに散布します。",
      ko: "사용법: 물 25 리터에 20-25ml 혼합. 질병이 발생하기 전에 예방하기 위해 분무하거나 증상이 관찰될 때 분무합니다。",
      zh: "使用说明: 在25升水中混合20-25毫升。在疾病发生前喷洒预防，或在观察到症状时喷洒。"
    }, 
    ingredients: { kh: "សារធាតុកំចាត់ផ្សិតសកម្មខ្ពស់", en: "Highly active fungicide", vi: "Thuốc trừ nấm hoạt tính cao", ar: "مبيد فطريات عالي النشاط", hi: "अत्यधिक सक्रिय कवकनाशी", ja: "高活性殺菌剤", ko: "고활성 살균제", zh: "高活性杀菌剂" }, 
    benefits: [
      { 
        kh: "ការពារ និងព្យាបាលជំងឺផ្សិតបានយ៉ាងពូកែ", 
        en: "Excellent prevention and treatment of fungal diseases.", 
        vi: "Phòng ngừa và điều trị tuyệt vời các bệnh do nấm.", 
        ar: "وقاية وعلاج ممتاز للأمراض الفطرية.", 
        hi: "फंगल रोगों की उत्कृष्ट रोकथाम और उपचार।", 
        ja: "真菌性疾患の優れた予防と治療。", 
        ko: "곰팡이 질환의 우수한 예방 및 치료。", 
        zh: "对真菌病害有极好的预防和治疗作用。" 
      },
      { 
        kh: "ជួយឲ្យគ្រាប់ស្រូវភ្លឺថ្លា ពណ៌ស្អាត", 
        en: "Helps rice grains to be bright, clear, and beautiful in color.", 
        vi: "Giúp hạt lúa sáng, trong và màu sắc đẹp.", 
        ar: "يساعد حبات الأرز على أن تكون مشرقة وصافية وجميلة اللون.", 
        hi: "चावल के दानों को चमकीला, साफ और रंग में सुंदर बनाने में मदद करता है।", 
        ja: "米粒を明るく、透明で、美しい色にするのに役立ちます。", 
        ko: "쌀알이 밝고 맑고 아름다운 색이 되도록 도와줍니다。", 
        zh: "帮助稻谷明亮、清澈，色泽美丽。" 
      },
      { 
        kh: "ជួយបង្កើនទិន្នផល និងគុណភាពគ្រាប់", 
        en: "Helps increase yield and grain quality.", 
        vi: "Giúp tăng năng suất và chất lượng hạt.", 
        ar: "يساعد على زيادة المحصول وجودة الحبوب.", 
        hi: "उपज और अनाज की गुणवत्ता बढ़ाने में मदद करता है।", 
        ja: "収量と穀物の品質を向上させるのに役立ちます。", 
        ko: "수확량과 곡물 품질을 높이는 데 도움이 됩니다。", 
        zh: "有助于提高产量和谷物质量。" 
      }
    ] 
  },
  { 
    id: "fuan-40ec", 
    name: { kh: "FUAN 40 EC (ហ្វុយអាន 40EC)", en: "FUAN 40 EC", vi: "FUAN 40 EC", ar: "فوان 40 EC", hi: "फुआन 40 EC", ja: "フアン 40 EC", ko: "푸안 40 EC", zh: "FUAN 40 EC" }, 
    image: "photo/FUAN 40EC.png", 
    category: "fungicide", 
    categoryKh: "ថ្នាំកម្ចាត់ជំងឺ", 
    usage: {
      kh: "របៀបប្រើប្រាស់: ស្រូវ លាយ ៨០-៩០ ម.ល/ធុង ២៥ លីត្រ (ជំងឺប្លាសលើស្លឹក) ឬ ១០០-១១០ ម.ល/ធុង ២៥ លីត្រ (ជំងឺប្លាសលើកកួរ)។ (បរិមាណទឹក ៣២០ លីត្រ/ហិចតា)។ បាញ់ថ្នាំនៅពេលជំងឺទើបតែបំផ្លាញ ឬបាញ់ការពារនៅដំណាក់កាល ១០-១៥ ថ្ងៃមុនពេលស្រូវចេញ។",
      en: "Usage: Rice: Mix 80-90 ml/25-liter tank (leaf blast) or 100-110 ml/25-liter tank (neck blast). (Water volume: 320 liters/hectare). Spray when the disease just starts to damage or spray preventively 10-15 days before rice heading.",
      vi: "Cách sử dụng: Lúa: Pha 80-90 ml/bình 25 lít (đạo ôn lá) hoặc 100-110 ml/bình 25 lít (đạo ôn cổ bông). (Lượng nước: 320 lít/ha). Phun khi bệnh vừa mới bắt đầu phá hoại hoặc phun phòng ngừa 10-15 ngày trước khi lúa trỗ.",
      ar: "الاستخدام: الأرز: اخلط 80-90 مل / خزان 25 لترًا (انفجار الأوراق) أو 100-110 مل / خزان 25 لترًا (انفجار العنق). (حجم الماء: 320 لتر / هكتار). رش عندما يبدأ المرض للتو في التلف أو رش وقائيًا قبل 10-15 يومًا من ظهور الأرز.",
      hi: "उपयोग: चावल: 25 लीटर टैंक में 80-90 मिली मिलाएं (लीफ ब्लास्ट) या 25 लीटर टैंक में 100-110 मिली मिलाएं (नेक ब्लास्ट)। (पानी की मात्रा: 320 लीटर/हेक्टेयर)। बीमारी के शुरू होने पर स्प्रे करें या चावल निकलने से 10-15 दिन पहले निवारक रूप से स्प्रे करें।",
      ja: "使用方法: 稲: 25 Lのタンクに80-90 mlを混合（いもち病（葉））または100-110 mlを混合（いもち病（穂首））。（水量: 320 L/ha）。病気が被害を与え始めたときに散布するか、出穂の10-15日前に予防的に散布します。",
      ko: "사용법: 벼: 25리터 탱크에 80-90ml 혼합(잎도열병) 또는 25리터 탱크에 100-110ml 혼합(목도열병). (수량: 320 리터/헥타르). 질병이 막 피해를 입히기 시작할 때 분무하거나 벼 이삭 패기 10-15일 전에 예방적으로 분무합니다。",
      zh: "使用说明: 水稻：在25升水箱中混合80-90毫升（叶瘟）或100-110毫升（穗颈瘟）。（水量：320升/公顷）。在疾病刚开始破坏时喷洒，或在水稻抽穗前10-15天进行预防性喷洒。"
    }, 
    ingredients: { kh: "Isoprothiolane 40% w/w", en: "Isoprothiolane 40% w/w", vi: "Isoprothiolane 40% w/w", ar: "إيزوبروثيولان 40٪ وزن / وزن", hi: "आइसोप्रोथिओलेन 40% w/w", ja: "イソプロチオラン 40% w/w", ko: "이소프로티올란 40% w/w", zh: "稻瘟灵 40% w/w" }, 
    benefits: [
      { 
        kh: "ហ្វួយ អាន 40 EC ប្រើដើម្បីកម្ចាត់ជំងឺប្លាស(លើស្លឹក និងលើកកួរ)បំផ្លាញស្រូវ", 
        en: "FUAN 40 EC is used to control blast disease (on leaves and panicle neck) damaging rice.", 
        vi: "FUAN 40 EC được sử dụng để kiểm soát bệnh đạo ôn (trên lá và cổ bông) phá hoại lúa.", 
        ar: "يستخدم فوان 40 EC للسيطرة على مرض الانفجار (على الأوراق وعنق العنقود) الذي يتلف الأرز.", 
        hi: "फुआन 40 EC का उपयोग चावल को नुकसान पहुंचाने वाले ब्लास्ट रोग (पत्तियों और पैनिकल गर्दन पर) को नियंत्रित करने के लिए किया जाता है।", 
        ja: "FUAN 40 ECは、稲に被害を与えるいもち病（葉および穂首）の防除に使用されます。", 
        ko: "푸안 40 EC는 벼에 피해를 주는 도열병(잎 및 이삭목)을 방제하는 데 사용됩니다。", 
        zh: "FUAN 40 EC用于控制破坏水稻的稻瘟病（叶面和穗颈）。" 
      }
    ] 
  },
  { 
    id: "totan-200-wp", 
    name: { kh: "TOTAN 200 WP (តូតាន 200 WP)", en: "TOTAN 200 WP", vi: "TOTAN 200 WP", ar: "توتان 200 WP", hi: "तोटान 200 WP", ja: "トタン 200 WP", ko: "토탄 200 WP", zh: "TOTAN 200 WP" }, 
    image: "photo/TOTAN.png", 
    category: "fungicide", 
    categoryKh: "ថ្នាំកម្ចាត់ជំងឺ", 
    usage: {
      kh: "របៀបប្រើប្រាស់: ស្រូវ លាយ ៣០ ក្រាម/ធុង ២៥លីត្រ។ ស្ពៃក្តោប និងបន្លែ លាយ ៣០-៦០ ក្រាម/ធុង ២៥លីត្រ។ ម្រេច លាយ ៣០-៦០ ក្រាម/ធុង ២៥លីត្រ ឬ ១០០-២០០ក្រាម/១០០លីត្រទឹក។ (បរិមាណទឹក ៤០០ លីត្រ/ហិចតា)។ បាញ់នៅពេលព្រឹកព្រលឹម ឬល្ងាចត្រជាក់។",
      en: "Usage: Rice: Mix 30 grams/25-liter tank. Cabbage and vegetables: Mix 30-60 grams/25-liter tank. Pepper: Mix 30-60 grams/25-liter tank or 100-200 grams/100 liters of water. (Water volume: 400 liters/hectare). Spray early in the morning or cool evening.",
      vi: "Cách sử dụng: Lúa: Pha 30 gram/bình 25 lít. Bắp cải và rau: Pha 30-60 gram/bình 25 lít. Tiêu: Pha 30-60 gram/bình 25 lít hoặc 100-200 gram/100 lít nước. (Lượng nước: 400 lít/ha). Phun vào sáng sớm hoặc chiều mát.",
      ar: "الاستخدام: الأرز: اخلط 30 جرامًا / خزان 25 لترًا. الملفوف والخضروات: اخلط 30-60 جرامًا / خزان 25 لترًا. الفلفل: اخلط 30-60 جرامًا / خزان 25 لترًا أو 100-200 جرام / 100 لتر من الماء. (حجم الماء: 400 لتر / هكتار). رش في الصباح الباكر أو في المساء البارد.",
      hi: "उपयोग: चावल: 25 लीटर टैंक में 30 ग्राम मिलाएं। गोभी और सब्जियां: 25 लीटर टैंक में 30-60 ग्राम मिलाएं। काली मिर्च: 25 लीटर टैंक में 30-60 ग्राम या 100 लीटर पानी में 100-200 ग्राम मिलाएं। (पानी की मात्रा: 400 लीटर/हेक्टेयर)। सुबह जल्दी या ठंडी शाम को स्प्रे करें।",
      ja: "使用方法: 稲: 25 Lのタンクに30 gを混合。キャベツと野菜: 25 Lのタンクに30-60 gを混合。コショウ: 25 Lのタンクに30-60 gを混合するか、100 Lの水に100-200 gを混合。（水量: 400 L/ha）。早朝または涼しい夕方に散布します。",
      ko: "사용법: 벼: 25리터 탱크에 30g 혼합. 양배추 및 채소: 25리터 탱크에 30-60g 혼합. 후추: 25리터 탱크에 30-60g 또는 물 100리터에 100-200g 혼합. (수량: 400 리터/헥타르). 이른 아침이나 서늘한 저녁에 분무합니다。",
      zh: "使用说明: 水稻：在25升水箱中混合30克。卷心菜和蔬菜：在25升水箱中混合30-60克。胡椒：在25升水箱中混合30-60克或在100升水中混合100-200克。（水量：400升/公顷）。清晨或凉爽的傍晚喷洒。"
    }, 
    ingredients: { kh: "Bronopol 200 ក្រាម/គ.ក្រ", en: "Bronopol 200 g/kg", vi: "Bronopol 200 g/kg", ar: "برونوبول 200 جم / كجم", hi: "ब्रोनोपोल 200 ग्राम/किग्रा", ja: "ブロノポール 200 g/kg", ko: "브로노폴 200g/kg", zh: "布罗波尔 200克/千克" }, 
    benefits: [
      { 
        kh: "តូតាន 200 WP កម្ចាត់បានជាពិសេសជំងឺបាក់កកួរ(កញ្ចឹងក) ជំងឺលឿងស្លឹកមុនពេល ជំងឺរលួយគល់បង្កដោយបាក់តេរី និងជំងឺបាក់កកួរគ្រាប់បំផ្លាញស្រូវ, ជំងឺបាក់កកួររលួយទន់បំផ្លាញស្ពៃក្តោប, ជំងឺស្អុយខៀវបំផ្លាញបន្លែ, ជំងឺរលាកបាតឬជ្រុះស្លឹកបំផ្លាញម្រេច", 
        en: "TOTAN 200 WP specially controls neck blast disease, premature leaf yellowing, bacterial basal rot and panicle blight damaging rice; soft rot damaging cabbage; blue mold damaging vegetables; basal blight or leaf drop damaging pepper.", 
        vi: "TOTAN 200 WP đặc biệt kiểm soát bệnh đạo ôn cổ bông, vàng lá sớm, thối gốc vi khuẩn và đạo ôn gié phá hoại lúa; bệnh thối nhũn phá hoại bắp cải; bệnh nấm mốc xanh phá hoại rau; bệnh cháy lá hoặc rụng lá phá hoại tiêu.", 
        ar: "يتحكم توتان 200 WP بشكل خاص في مرض انفجار العنق، اصفرار الأوراق المبكر، تعفن القاعدة البكتيري ولفحة العنقود التي تتلف الأرز؛ التعفن الناعم الذي يتلف الملفوف؛ العفن الأزرق الذي يتلف الخضروات؛ اللفحة القاعدية أو تساقط الأوراق الذي يتلف الفلفل.", 
        hi: "तोटान 200 WP विशेष रूप से चावल को नुकसान पहुंचाने वाले नेक ब्लास्ट रोग, समय से पहले पत्ते पीले पड़ने, बैक्टीरियल बेसल रॉट और पैनिकल ब्लाइट को नियंत्रित करता है; गोभी को नुकसान पहुंचाने वाले सॉफ्ट रॉट; सब्जियों को नुकसान पहुंचाने वाले ब्लू मोल्ड; काली मिर्च को नुकसान पहुंचाने वाले बेसल ब्लाइट या लीफ ड्रॉप।", 
        ja: "TOTAN 200 WPは、稲に被害を与える穂首いもち病、早期葉の黄化、細菌性基腐病、穂枯れ病、キャベツに被害を与える軟腐病、野菜に被害を与える青かび病、コショウに被害を与える基腐病や落葉を特別に防除します。", 
        ko: "토탄 200 WP는 벼에 피해를 주는 목도열병, 조기 잎 황화, 세균성 기부 썩음병 및 이삭마름병; 양배추에 피해를 주는 무름병; 채소에 피해를 주는 푸른 곰팡이병; 후추에 피해를 주는 기부 마름병 또는 낙엽병을 특별히 방제합니다。", 
        zh: "TOTAN 200 WP专门控制破坏水稻的穗颈瘟、过早叶片发黄、细菌性基腐病和穗枯病；破坏卷心菜的软腐病；破坏蔬菜的蓝霉病；破坏胡椒的基腐病或落叶病。" 
      }
    ] 
  },
  { 
    id: "totan-c-o-21sl", 
    name: { kh: "TOTAN C-O 21SL (តូតាន ស៊ី-អូ 21SL)", en: "TOTAN C-O 21SL", vi: "TOTAN C-O 21SL", ar: "توتان سي-أو 21SL", hi: "तोटान सी-ओ 21SL", ja: "トタン C-O 21SL", ko: "토탄 C-O 21SL", zh: "TOTAN C-O 21SL" }, 
    image: "photo/Totan C-O 21SL.png", 
    category: "fungicide", 
    categoryKh: "ថ្នាំកម្ចាត់ជំងឺ", 
    usage: {
      kh: "របៀបប្រើប្រាស់: គ្រប់ដំណាំ (ស្រូវ ស្ពៃក្តោប បន្លែ ម្រេច) លាយ ៥០ ម.ល/ធុង ២៥លីត្រ ឬប្រើ ៥០០ម.ល/ហិចតា។ (បរិមាណទឹក ២៥០-៣០០ លីត្រ/ហិចតា)។ បាញ់នៅពេលព្រឹកព្រលឹម ឬល្ងាចត្រជាក់។",
      en: "Usage: All crops (rice, cabbage, vegetables, pepper): Mix 50 ml/25-liter tank or use 500 ml/hectare. (Water volume: 250-300 liters/hectare). Spray early in the morning or cool evening.",
      vi: "Cách sử dụng: Tất cả các loại cây trồng (lúa, bắp cải, rau, tiêu): Pha 50 ml/bình 25 lít hoặc dùng 500 ml/ha. (Lượng nước: 250-300 lít/ha). Phun vào sáng sớm hoặc chiều mát.",
      ar: "الاستخدام: جميع المحاصيل (الأرز، الملفوف، الخضروات، الفلفل): اخلط 50 مل / خزان 25 لترًا أو استخدم 500 مل / هكتار. (حجم الماء: 250-300 لتر / هكتار). رش في الصباح الباكر أو في المساء البارد.",
      hi: "उपयोग: सभी फसलें (चावल, गोभी, सब्जियां, काली मिर्च): 25 लीटर टैंक में 50 मिली मिलाएं या 500 मिली/हेक्टेयर उपयोग करें। (पानी की मात्रा: 250-300 लीटर/हेक्टेयर)। सुबह जल्दी या ठंडी शाम को स्प्रे करें।",
      ja: "使用方法: すべての作物（稲、キャベツ、野菜、コショウ）: 25 Lのタンクに50 mlを混合するか、500 ml/haを使用。（水量: 250-300 L/ha）。早朝または涼しい夕方に散布します。",
      ko: "사용법: 모든 작물(벼, 양배추, 채소, 후추): 25리터 탱크에 50ml 혼합 또는 500ml/헥타르 사용. (수량: 250-300 리터/헥타르). 이른 아침이나 서늘한 저녁에 분무합니다。",
      zh: "使用说明: 所有作物（水稻、卷心菜、蔬菜、胡椒）：在25升水箱中混合50毫升或使用500毫升/公顷。（水量：250-300升/公顷）。清晨或凉爽的傍晚喷洒。"
    }, 
    ingredients: { kh: "Copper sulfate Pentahydrate 21%", en: "Copper sulfate Pentahydrate 21%", vi: "Copper sulfate Pentahydrate 21%", ar: "كبريتات النحاس بينتاهيدرات 21٪", hi: "कॉपर सल्फेट पेंटाहाइड्रेट 21%", ja: "硫酸銅五水和物 21%", ko: "황산구리 오수화물 21%", zh: "五水硫酸铜 21%" }, 
    benefits: [
      { 
        kh: "តូតាន ស៊ី-អូ 21SL គឺជាថ្នាំកម្ចាត់ជំងឺ ដែលបង្កដោយបាក់តេរី មានឥទ្ធិពលប៉ះផ្ទាល់ និងជ្រាបចូលខ្លាំង។ កម្ចាត់ជំងឺបាក់កកួរ ជំងឺលឿងស្លឹក ជំងឺរលួយគល់បង្កដោយបាក់តេរី និងជំងឺបាក់កកួរគ្រាប់បំផ្លាញស្រូវ, ជំងឺបាក់កកួររលួយទន់ស្ពៃក្តោប, ជំងឺស្អុយខៀវបន្លែ, ជំងឺរលាកបាតឬជ្រុះស្លឹកម្រេច", 
        en: "TOTAN C-O 21SL is a bactericide with strong contact and systemic action. Controls neck blast disease, leaf yellowing, bacterial basal rot and panicle blight damaging rice; soft rot damaging cabbage; blue mold damaging vegetables; basal blight or leaf drop damaging pepper.", 
        vi: "TOTAN C-O 21SL là thuốc diệt vi khuẩn có tác dụng tiếp xúc và lưu dẫn mạnh. Kiểm soát bệnh đạo ôn cổ bông, vàng lá, thối gốc vi khuẩn và đạo ôn gié phá hoại lúa; bệnh thối nhũn phá hoại bắp cải; bệnh nấm mốc xanh phá hoại rau; bệnh cháy lá hoặc rụng lá phá hoại tiêu.", 
        ar: "توتان سي-أو 21SL هو مبيد للجراثيم ذو تأثير قوي على التلامس والجهاز. يكافح مرض انفجار العنق، اصفرار الأوراق، تعفن القاعدة البكتيري ولفحة العنقود التي تتلف الأرز؛ التعفن الناعم الذي يتلف الملفوف؛ العفن الأزرق الذي يتلف الخضروات؛ اللفحة القاعدية أو تساقط الأوراق الذي يتلف الفلفل.", 
        hi: "तोटान सी-ओ 21SL मजबूत संपर्क और प्रणालीगत क्रिया वाला एक जीवाणुनाशक है। चावल को नुकसान पहुंचाने वाले नेक ब्लास्ट रोग, पत्ते पीले पड़ने, बैक्टीरियल बेसल रॉट और पैनिकल ब्लाइट को नियंत्रित करता है; गोभी को नुकसान पहुंचाने वाले सॉफ्ट रॉट; सब्जियों को नुकसान पहुंचाने वाले ब्लू मोल्ड; काली मिर्च को नुकसान पहुंचाने वाले बेसल ब्लाइट या लीफ ड्रॉप।", 
        ja: "TOTAN C-O 21SLは、強力な接触および浸透移行性作用を持つ殺菌剤です。稲に被害を与える穂首いもち病、葉の黄化、細菌性基腐病、穂枯れ病、キャベツに被害を与える軟腐病、野菜に被害を与える青かび病、コショウに被害を与える基腐病や落葉を防除します。", 
        ko: "토탄 C-O 21SL은 강력한 접촉 및 침투 이행성 작용을 하는 살균제입니다. 벼에 피해를 주는 목도열병, 잎 황화, 세균성 기부 썩음병 및 이삭마름병; 양배추에 피해를 주는 무름병; 채소에 피해를 주는 푸른 곰팡이병; 후추에 피해를 주는 기부 마름병 또는 낙엽병을 방제합니다。", 
        zh: "TOTAN C-O 21SL是一种具有强力触杀和内吸作用的杀菌剂。控制破坏水稻的穗颈瘟、叶片发黄、细菌性基腐病和穗枯病；破坏卷心菜的软腐病；破坏蔬菜的蓝霉病；破坏胡椒的基腐病或落叶病。" 
      }
    ] 
  },

  { 
    id: "insuran-50-wg", 
    name: { kh: "INSURAN 50 WG (អ៊ីនស៊រ៉ែន 50 WG)", en: "INSURAN 50 WG", vi: "INSURAN 50 WG", ar: "إنسوران 50 WG", hi: "इंसुरन 50 WG", ja: "インスラン 50 WG", ko: "인수란 50 WG", zh: "INSURAN 50 WG" }, 
    image: "photo/Insuran-N.png", 
    category: "fungicide", 
    categoryKh: "ថ្នាំកម្ចាត់ជំងឺ", 
    usage: {
      kh: "របៀបប្រើប្រាស់: ម្រេច លាយ ១.៥ ក្រាម/១លីត្រទឹក។ ប៉េងប៉ោះ ត្រសក់ ពោត លាយ ៥០ ក្រាម/ធុង ២៥ លីត្រ។ ដំណាំមានមើម ដំឡូង កៅស៊ូ លាយ ៥០-៧៥ ក្រាម/ធុង ២៥ លីត្រ ឬលាយ ៦-៨ ក្រាម/១ លីត្រទឹក ដើម្បីលាបលើស្នាមជំងឺ។ (បរិមាណទឹក ៥០០-៦០០ លីត្រ/ហិចតា)។",
      en: "Usage: Pepper: Mix 1.5 grams/1 liter of water. Tomato, cucumber, corn: Mix 50 grams/25-liter tank. Tuber crops, cassava, rubber: Mix 50-75 grams/25-liter tank or mix 6-8 grams/1 liter of water to apply on the diseased mark. (Water volume: 500-600 liters/hectare).",
      vi: "Cách sử dụng: Tiêu: Pha 1.5 gram/1 lít nước. Cà chua, dưa chuột, ngô: Pha 50 gram/bình 25 lít. Cây lấy củ, sắn, cao su: Pha 50-75 gram/bình 25 lít hoặc pha 6-8 gram/1 lít nước để bôi lên vết bệnh. (Lượng nước: 500-600 lít/ha).",
      ar: "الاستخدام: الفلفل: اخلط 1.5 جرام / 1 لتر من الماء. الطماطم والخيار والذرة: اخلط 50 جرامًا / خزان 25 لترًا. المحاصيل الدرنية والكسافا والمطاط: اخلط 50-75 جرامًا / خزان 25 لترًا أو اخلط 6-8 جرام / 1 لتر من الماء للتطبيق على العلامة المريضة. (حجم الماء: 500-600 لتر / هكتار).",
      hi: "उपयोग: काली मिर्च: 1 लीटर पानी में 1.5 ग्राम मिलाएं। टमाटर, ककड़ी, मक्का: 25 लीटर टैंक में 50 ग्राम मिलाएं। कंद फसलें, कसावा, रबर: 25 लीटर टैंक में 50-75 ग्राम मिलाएं या रोगग्रस्त निशान पर लगाने के लिए 1 लीटर पानी में 6-8 ग्राम मिलाएं। (पानी की मात्रा: 500-600 लीटर/हेक्टेयर)।",
      ja: "使用方法: コショウ: 1 Lの水に1.5 gを混合。トマト、キュウリ、トウモロコシ: 25 Lのタンクに50 gを混合。塊根作物、キャッサバ、ゴム: 25 Lのタンクに50-75 gを混合するか、1 Lの水に6-8 gを混合して病斑に塗布します。（水量: 500-600 L/ha）。",
      ko: "사용법: 후추: 물 1리터에 1.5g 혼합. 토마토, 오이, 옥수수: 25리터 탱크에 50g 혼합. 덩이줄기 작물, 카사바, 고무: 25리터 탱크에 50-75g 혼합 또는 물 1리터에 6-8g을 혼합하여 병반에 바릅니다. (수량: 500-600 리터/헥타르).",
      zh: "使用说明: 胡椒：在1升水中混合1.5克。西红柿、黄瓜、玉米：在25升水箱中混合50克。块茎作物、木薯、橡胶：在25升水箱中混合50-75克或在1升水中混合6-8克涂抹在病斑上。（水量：500-600升/公顷）。"
    }, 
    ingredients: { kh: "Dimethomorph 50% w/w", en: "Dimethomorph 50% w/w", vi: "Dimethomorph 50% w/w", ar: "ديميثومورف 50٪ وزن / وزن", hi: "डायमेथोमोर्फ 50% w/w", ja: "ジメトモルフ 50% w/w", ko: "디메토모르프 50% w/w", zh: "烯酰吗啉 50% w/w" }, 
    benefits: [
      { 
        kh: "អ៊ិនស៊ូរ៉ែន 50WG ការពារ និងកម្ចាត់ជំងឺរលួយគល់ ជំងឺលឿងស្លឹក និងជំងឺស្អុយឫសបំផ្លាញម្រេច, ជំងឺក្រៀមស្លឹកប៉េងប៉ោះ, ជំងឺអុចមូសត្រសក់, ជំងឺឆ្កួតស្លឹកពោត, ជំងឺស្អុយដើមនិងហៀរជ័រលើដំណាំមានមើម ដំឡូង, ជំងឺរលាកមុខជ័រកៅស៊ូ", 
        en: "INSURAN 50 WG prevents and controls basal rot, leaf yellowing, and root rot damaging pepper; late blight on tomato; downy mildew on cucumber; downy mildew on corn; stem rot and gummosis on tuber crops, cassava; tapping panel dryness on rubber.", 
        vi: "INSURAN 50 WG phòng ngừa và kiểm soát bệnh thối gốc, vàng lá và thối rễ phá hoại tiêu; bệnh sương mai trên cà chua; bệnh sương mai trên dưa chuột; bệnh sương mai trên ngô; bệnh thối thân và chảy mủ trên cây lấy củ, sắn; bệnh khô miệng cạo trên cao su.", 
        ar: "يمنع إنسوران 50 WG ويتحكم في تعفن القاعدة واصفرار الأوراق وتعفن الجذور الذي يتلف الفلفل؛ اللفحة المتأخرة على الطماطم؛ العفن الزغبي على الخيار؛ العفن الزغبي على الذرة؛ تعفن الساق وتصمغ المحاصيل الدرنية والكسافا؛ جفاف لوحة التنصت على المطاط.", 
        hi: "इंसुरन 50 WG काली मिर्च को नुकसान पहुंचाने वाले बेसल रॉट, पत्ते पीले पड़ने और जड़ सड़ने को रोकता है और नियंत्रित करता है; टमाटर पर लेट ब्लाइट; ककड़ी पर डाउनी मिल्ड्यू; मकई पर डाउनी मिल्ड्यू; कंद फसलों, कसावा पर तना सड़न और गमोसिस; रबर पर टैपिंग पैनल का सूखापन।", 
        ja: "INSURAN 50 WGは、コショウに被害を与える基腐病、葉の黄化、根腐れ病、トマトの疫病、キュウリのべと病、トウモロコシのべと病、塊根作物やキャッサバの茎腐れや樹脂細菌病、ゴムのタッピングパネル乾燥症を予防および防除します。", 
        ko: "인수란 50 WG는 후추에 피해를 주는 기부 썩음병, 잎 황화 및 뿌리 썩음병; 토마토의 역병; 오이의 노균병; 옥수수의 노균병; 덩이줄기 작물, 카사바의 줄기 썩음 및 고무병; 고무나무의 껍질 마름병을 예방하고 방제합니다.", 
        zh: "INSURAN 50 WG可预防和控制破坏胡椒的基腐病、叶片发黄和根腐病；西红柿上的晚疫病；黄瓜上的霜霉病；玉米上的霜霉病；块茎作物、木薯上的茎腐病和流胶病；橡胶上的割面条溃疡病。" 
      }
    ] 
  },
  { 
    id: "evitin-50-sc", 
    name: { kh: "EVITIN 50 SC (អេវីទីន 50 SC)", en: "EVITIN 50 SC", vi: "EVITIN 50 SC", ar: "إيفيتين 50 SC", hi: "एविटिन 50 SC", ja: "エビチン 50 SC", ko: "에비틴 50 SC", zh: "EVITIN 50 SC" }, 
    image: "photo/Evitin 50 SC.png", 
    category: "fungicide", 
    categoryKh: "ថ្នាំកម្ចាត់ជំងឺ", 
    usage: {
      kh: "របៀបប្រើប្រាស់: ស្រូវ ពោត កៅស៊ូ សណ្តែក ស្វាយ ស្វាយចន្ទី លាយ ៨០-៩០ ម.ល/ធុង ២៥ លីត្រ (ឬ ៥០០-៧០០ម.ល/ធុង ២០០លីត្រ សម្រាប់ឈើហូបផ្លែ)។ ត្រសក់ ឪឡឹក ត្រឡាច ល្ពៅ លាយ ៧០-៨០ ម.ល/ធុង ២៥ លីត្រ។ (បរិមាណទឹក ៣២០ លីត្រ/ហិចតា)។",
      en: "Usage: Rice, corn, rubber, beans, mango, cashew: Mix 80-90 ml/25-liter tank (or 500-700 ml/200-liter tank for fruit trees). Cucumber, watermelon, winter melon, pumpkin: Mix 70-80 ml/25-liter tank. (Water volume: 320 liters/hectare).",
      vi: "Cách sử dụng: Lúa, ngô, cao su, đậu, xoài, điều: Pha 80-90 ml/bình 25 lít (hoặc 500-700 ml/phuy 200 lít đối với cây ăn quả). Dưa chuột, dưa hấu, bí đao, bí ngô: Pha 70-80 ml/bình 25 lít. (Lượng nước: 320 lít/ha).",
      ar: "الاستخدام: الأرز والذرة والمطاط والفاصوليا والمانجو والكاجو: اخلط 80-90 مل / خزان 25 لترًا (أو 500-700 مل / خزان 200 لتر لأشجار الفاكهة). الخيار والبطيخ والبطيخ الشتوي واليقطين: اخلط 70-80 مل / خزان 25 لترًا. (حجم الماء: 320 لتر / هكتار).",
      hi: "उपयोग: चावल, मक्का, रबर, सेम, आम, काजू: 25 लीटर टैंक में 80-90 मिली मिलाएं (या फलों के पेड़ों के लिए 200 लीटर टैंक में 500-700 मिली)। ककड़ी, तरबूज, विंटर मेलन, कद्दू: 25 लीटर टैंक में 70-80 मिली मिलाएं। (पानी की मात्रा: 320 लीटर/हेक्टेयर)।",
      ja: "使用方法: 稲、トウモロコシ、ゴム、豆類、マンゴー、カシューナッツ: 25 Lのタンクに80-90 mlを混合（果樹の場合は200 Lのタンクに500-700 ml）。キュウリ、スイカ、トウガン、カボチャ: 25 Lのタンクに70-80 mlを混合。（水量: 320 L/ha）。",
      ko: "사용법: 벼, 옥수수, 고무, 콩, 망고, 캐슈넛: 25리터 탱크에 80-90ml 혼합(또는 과수의 경우 200리터 탱크에 500-700ml). 오이, 수박, 동아, 호박: 25리터 탱크에 70-80ml 혼합. (수량: 320 리터/헥타르).",
      zh: "使用说明: 水稻、玉米、橡胶、豆类、芒果、腰果：在25升水箱中混合80-90毫升（或对于果树，在200升水箱中混合500-700毫升）。黄瓜、西瓜、冬瓜、南瓜：在25升水箱中混合70-80毫升。（水量：320升/公顷）。"
    }, 
    ingredients: { kh: "Hexaconazole 50 ក្រាម/លីត្រ", en: "Hexaconazole 50 g/liter", vi: "Hexaconazole 50 g/lít", ar: "هيكساكونازول 50 جم / لتر", hi: "हेक्साकोनाज़ोल 50 ग्राम/लीटर", ja: "ヘキサコナゾール 50 g/L", ko: "헥사코나졸 50g/L", zh: "己唑醇 50克/升" }, 
    benefits: [
      { 
        kh: "អេវីទីន 50 SC កម្ចាត់និងការពារ ជំងឺស្អៀតគ្រាប់ ជំងឺលឿងស្លឹក ជំងឺរលាកស្រទបស្ទឹតលើស្រូវ, ជំងឺរលាកស្រទបពោត, ជំងឺផ្សិតម្សៅនិងលឿងជ្រុះស្លឹកកៅស៊ូ, ជំងឺអុចពងមាន់លើស្វាយនិងស្វាយចន្ទី, ជំងឺរលាកគល់កូនដំណាំលើសណ្តែកនិងអម្បូរត្រសក់", 
        en: "EVITIN 50 SC controls and prevents grain discoloration, leaf yellowing, sheath blight on rice; sheath blight on corn; powdery mildew and yellow leaf fall on rubber; anthracnose on mango and cashew; damping-off on beans and cucumber family.", 
        vi: "EVITIN 50 SC kiểm soát và phòng ngừa bệnh lem lép hạt, vàng lá, khô vằn trên lúa; bệnh khô vằn trên ngô; bệnh phấn trắng và vàng rụng lá trên cao su; bệnh thán thư trên xoài và điều; bệnh lở cổ rễ trên đậu và họ dưa chuột.", 
        ar: "يتحكم إيفيتين 50 SC ويمنع تغير لون الحبوب واصفرار الأوراق ولفحة الغمد على الأرز؛ لفحة الغمد على الذرة؛ البياض الدقيقي وسقوط الأوراق الصفراء على المطاط؛ أنثراكنوز على المانجو والكاجو؛ التخميد على الفاصوليا وعائلة الخيار.", 
        hi: "एविटिन 50 SC चावल पर अनाज मलिनकिरण, पत्ते पीले पड़ने, शीथ ब्लाइट को नियंत्रित करता है और रोकता है; मकई पर शीथ ब्लाइट; रबर पर पाउडर फफूंदी और पीले पत्ते का गिरना; आम और काजू पर एन्थ्रेक्नोज; बीन्स और ककड़ी परिवार पर डंपिंग-ऑफ।", 
        ja: "EVITIN 50 SCは、稲の変色米、葉の黄化、紋枯病、トウモロコシの紋枯病、ゴムのうどんこ病や落葉病、マンゴーやカシューナッツの炭疽病、豆類やキュウリ科の苗立枯病を防除および予防します。", 
        ko: "에비틴 50 SC는 벼의 변색미, 잎 황화, 잎집무늬마름병; 옥수수의 잎집무늬마름병; 고무나무의 흰가루병 및 황색 낙엽병; 망고와 캐슈넛의 탄저병; 콩과 오이과의 모잘록병을 방제하고 예방합니다.", 
        zh: "EVITIN 50 SC可控制和预防变色米、叶片发黄、水稻纹枯病；玉米纹枯病；橡胶树白粉病和黄叶落叶病；芒果和腰果炭疽病；豆类和黄瓜科的猝倒病。" 
      }
    ] 
  },
  { 
    id: "bipro-super-300-ec", 
    name: { kh: "BIPRO SUPER 300 EC (ប៊ីប្រូ ស៊ុបពែរ 300 EC)", en: "BIPRO SUPER 300 EC", vi: "BIPRO SUPER 300 EC", ar: "بيبرو سوبر 300 EC", hi: "बिप्रो সুপার 300 EC", ja: "ビプロ スーパー 300 EC", ko: "비프로 슈퍼 300 EC", zh: "BIPRO SUPER 300 EC" }, 
    image: "photo/BIPRO SUPER.png", 
    category: "fungicide", 
    categoryKh: "ថ្នាំកម្ចាត់ជំងឺ", 
    usage: {
      kh: "របៀបប្រើប្រាស់: គ្រប់ដំណាំ (ស្រូវ សណ្តែក កៅស៊ូ ពោត) ប្រើ ០.៣-០.៤ លីត្រ/ហិចតា (៣០០-៤០០ ម.ល/ហិចតា)។ (បរិមាណទឹក ៥០០-៦០០ លីត្រ/ហិចតា)។ បាញ់នៅពេលជំងឺទើបតែបំផ្លាញ និងឱ្យជោគលើដំណាំ។",
      en: "Usage: All crops (rice, beans, rubber, corn): Use 0.3-0.4 liters/hectare (300-400 ml/hectare). (Water volume: 500-600 liters/hectare). Spray when the disease just starts to damage and thoroughly on the crop.",
      vi: "Cách sử dụng: Tất cả các loại cây trồng (lúa, đậu, cao su, ngô): Dùng 0.3-0.4 lít/ha (300-400 ml/ha). (Lượng nước: 500-600 lít/ha). Phun khi bệnh vừa mới bắt đầu phá hoại và phun ướt đều cây trồng.",
      ar: "الاستخدام: جميع المحاصيل (الأرز والفاصوليا والمطاط والذرة): استخدم 0.3-0.4 لتر / هكتار (300-400 مل / هكتار). (حجم الماء: 500-600 لتر / هكتار). رش عندما يبدأ المرض للتو في التلف ورشه جيدًا على المحصول.",
      hi: "उपयोग: सभी फसलें (चावल, सेम, रबर, मक्का): 0.3-0.4 लीटर/हेक्टेयर (300-400 मिली/हेक्टेयर) उपयोग करें। (पानी की मात्रा: 500-600 लीटर/हेक्टेयर)। बीमारी के शुरू होने पर और फसल पर अच्छी तरह से स्प्रे करें।",
      ja: "使用方法: すべての作物（稲、豆類、ゴム、トウモロコシ）: 0.3-0.4 L/ha（300-400 ml/ha）を使用。（水量: 500-600 L/ha）。病気が被害を与え始めたときに作物に十分に散布します。",
      ko: "사용법: 모든 작물(벼, 콩, 고무, 옥수수): 0.3-0.4 리터/헥타르(300-400 ml/헥타르) 사용. (수량: 500-600 리터/헥타르). 질병이 막 피해를 입히기 시작할 때 작물에 충분히 분무합니다.",
      zh: "使用说明: 所有作物（水稻、豆类、橡胶、玉米）：使用0.3-0.4升/公顷（300-400毫升/公顷）。（水量：500-600升/公顷）。在疾病刚开始破坏时彻底喷洒在作物上。"
    }, 
    ingredients: { kh: "Propiconazole 150 ក្រាម/លីត្រ + Difenoconazole 150 ក្រាម/លីត្រ", en: "Propiconazole 150 g/liter + Difenoconazole 150 g/liter", vi: "Propiconazole 150 g/lít + Difenoconazole 150 g/lít", ar: "بروبيكونازول 150 جم / لتر + ديفينوكونازول 150 جم / لتر", hi: "प्रोपिकोनाज़ोल 150 ग्राम/लीटर + डिफेनोकोनाज़ोल 150 ग्राम/लीटर", ja: "プロピコナゾール 150 g/L + ジフェノコナゾール 150 g/L", ko: "프로피코나졸 150g/L + 디페노코나졸 150g/L", zh: "丙环唑 150克/升 + 苯醚甲环唑 150克/升" }, 
    benefits: [
      { 
        kh: "ប៊ីប្រូ ស៊ុបពែរ 300 EC កម្ចាត់ជំងឺស្អៀតគ្រាប់និងរលាកស្រទបលើស្រូវ, ជំងឺប្រេះសំបកនិងអុចស្លឹកសណ្តែក, ជំងឺប្រេះសំបកនិងជ័រលុយលើកៅស៊ូ, ជំងឺលឿងស្លឹក(ប្រេះស្លឹក)និងផ្សិតផ្កាកុលាបលើកៅស៊ូ, ជំងឺរលាកស្រទបពោត", 
        en: "BIPRO SUPER 300 EC controls grain discoloration and sheath blight on rice; pod blight and leaf spot on beans; bark cracking and gummosis on rubber; leaf yellowing (leaf cracking) and pink disease on rubber; sheath blight on corn.", 
        vi: "BIPRO SUPER 300 EC kiểm soát bệnh lem lép hạt và khô vằn trên lúa; bệnh khô nứt vỏ và đốm lá trên đậu; bệnh nứt vỏ và chảy mủ trên cao su; bệnh vàng lá (nứt lá) và bệnh nấm hồng trên cao su; bệnh khô vằn trên ngô.", 
        ar: "يتحكم بيبرو سوبر 300 EC في تغير لون الحبوب ولفحة الغمد على الأرز؛ لفحة القرون وتبقع الأوراق على الفاصوليا؛ تكسر اللحاء والتصمغ على المطاط؛ اصفرار الأوراق (تكسر الأوراق) والمرض الوردي على المطاط؛ لفحة الغمد على الذرة.", 
        hi: "बिप्रो सुपर 300 EC चावल पर अनाज मलिनकिरण और शीथ ब्लाइट को नियंत्रित करता है; बीन्स पर पॉड ब्लाइट और लीफ स्पॉट; रबर पर छाल का टूटना और गमोसिस; रबर पर पत्ते पीले पड़ना (पत्ते टूटना) और गुलाबी रोग; मकई पर शीथ ब्लाइट।", 
        ja: "BIPRO SUPER 300 ECは、稲の変色米および紋枯病、豆類のさや枯病および褐斑病、ゴムの樹皮割れおよび樹脂細菌病、ゴムの葉の黄化（葉割れ）および赤衣病、トウモロコシの紋枯病を防除します。", 
        ko: "비프로 슈퍼 300 EC는 벼의 변색미 및 잎집무늬마름병; 콩의 꼬투리 마름병 및 점무늬병; 고무나무의 껍질 갈라짐 및 고무병; 고무나무의 잎 황화(잎 갈라짐) 및 핑크병; 옥수수의 잎집무늬마름병을 방제합니다.", 
        zh: "BIPRO SUPER 300 EC控制水稻变色米和纹枯病；豆类的荚枯病和叶斑病；橡胶的树皮开裂和流胶病；橡胶的叶片发黄（叶片开裂）和红根病；玉米的纹枯病。" 
      }
    ] 
  },
  { 
    id: "bistar-top-325-sc", 
    name: { kh: "BISTAR TOP 325 SC (ប៊ីស្តារ តុប 325 SC)", en: "BISTAR TOP 325 SC", vi: "BISTAR TOP 325 SC", ar: "بيستار توب 325 SC", hi: "बिस्टार टॉप 325 SC", ja: "ビスター トップ 325 SC", ko: "비스타 탑 325 SC", zh: "BISTAR TOP 325 SC" }, 
    image: "photo/BISTAR TOP.png", 
    category: "fungicide", 
    categoryKh: "ថ្នាំកម្ចាត់ជំងឺ", 
    usage: {
      kh: "របៀបប្រើប្រាស់: គ្រប់ដំណាំ (ស្រូវ ពោត ស្វាយ ប៉េងប៉ោះ កៅស៊ូ សណ្តែក) ប្រើ ០.៥ លីត្រ/ហិចតា (៥០០ ម.ល/ហិចតា)។ (បរិមាណទឹក ៥០០-៦០០ លីត្រ/ហិចតា)។ បាញ់នៅពេលព្រឹកព្រលឹម ឬល្ងាចត្រជាក់។",
      en: "Usage: All crops (rice, corn, mango, tomato, rubber, beans): Use 0.5 liters/hectare (500 ml/hectare). (Water volume: 500-600 liters/hectare). Spray early in the morning or cool evening.",
      vi: "Cách sử dụng: Tất cả các loại cây trồng (lúa, ngô, xoài, cà chua, cao su, đậu): Dùng 0.5 lít/ha (500 ml/ha). (Lượng nước: 500-600 lít/ha). Phun vào sáng sớm hoặc chiều mát.",
      ar: "الاستخدام: جميع المحاصيل (الأرز والذرة والمانجو والطماطم والمطاط والفاصوليا): استخدم 0.5 لتر / هكتار (500 مل / هكتار). (حجم الماء: 500-600 لتر / هكتار). رش في الصباح الباكر أو في المساء البارد.",
      hi: "उपयोग: सभी फसलें (चावल, मक्का, आम, टमाटर, रबर, सेम): 0.5 लीटर/हेक्टेयर (500 मिली/हेक्टेयर) उपयोग करें। (पानी की मात्रा: 500-600 लीटर/हेक्टेयर)। सुबह जल्दी या ठंडी शाम को स्प्रे करें।",
      ja: "使用方法: すべての作物（稲、トウモロコシ、マンゴー、トマト、ゴム、豆類）: 0.5 L/ha（500 ml/ha）を使用。（水量: 500-600 L/ha）。早朝または涼しい夕方に散布します。",
      ko: "사용법: 모든 작물(벼, 옥수수, 망고, 토마토, 고무, 콩): 0.5 리터/헥타르(500 ml/헥타르) 사용. (수량: 500-600 리터/헥타르). 이른 아침이나 서늘한 저녁에 분무합니다.",
      zh: "使用说明: 所有作物（水稻、玉米、芒果、西红柿、橡胶、豆类）：使用0.5升/公顷（500毫升/公顷）。（水量：500-600升/公顷）。清晨或凉爽的傍晚喷洒。"
    }, 
    ingredients: { kh: "Azoxystrobin 200 ក្រាម/លីត្រ + Difenoconazole 125 ក្រាម/លីត្រ", en: "Azoxystrobin 200 g/liter + Difenoconazole 125 g/liter", vi: "Azoxystrobin 200 g/lít + Difenoconazole 125 g/lít", ar: "أزوكسيستروبين 200 جم / لتر + ديفينوكونازول 125 جم / لتر", hi: "एज़ोक्सीस्ट्रोबिन 200 ग्राम/लीटर + डिफेनोकोनाज़ोल 125 ग्राम/लीटर", ja: "アゾキシストロビン 200 g/L + ジフェノコナゾール 125 g/L", ko: "아족시스트로빈 200g/L + 디페노코나졸 125g/L", zh: "嘧菌酯 200克/升 + 苯醚甲环唑 125克/升" }, 
    benefits: [
      { 
        kh: "ប៊ីស្តារ តុប 325 SC កម្ចាត់ជំងឺស្អៀតគ្រាប់ ជំងឺរលាកស្រទបស្ទឹត ជំងឺលឿងស្លឹកនិងប្លាសលើស្រូវ, ជំងឺអុចស្លឹកនិងប្រេះសំបកពោត, ជំងឺរលាកគល់កូនដំណាំសណ្តែក, ជំងឺក្រៀមស្លឹកនិងអុចរង្វង់ប៉េងប៉ោះ, ជំងឺផ្សិតអុចត្រកាក់ផ្លែស្វាយ, ជំងឺផ្សិតម្សៅនិងលឿងស្លឹកកៅស៊ូ", 
        en: "BISTAR TOP 325 SC controls grain discoloration, sheath blight, leaf yellowing and blast on rice; leaf spot and stalk rot on corn; damping-off on beans; leaf blight and early blight on tomato; anthracnose on mango; powdery mildew and yellow leaf fall on rubber.", 
        vi: "BISTAR TOP 325 SC kiểm soát bệnh lem lép hạt, khô vằn, vàng lá và đạo ôn trên lúa; đốm lá và thối thân trên ngô; lở cổ rễ trên đậu; cháy lá và mốc sương trên cà chua; thán thư trên xoài; phấn trắng và vàng rụng lá trên cao su.", 
        ar: "يتحكم بيستار توب 325 SC في تغير لون الحبوب ولفحة الغمد واصفرار الأوراق والانفجار على الأرز؛ تبقع الأوراق وتعفن الساق على الذرة؛ التخميد على الفاصوليا؛ لفحة الأوراق واللفحة المبكرة على الطماطم؛ أنثراكنوز على المانجو؛ البياض الدقيقي وسقوط الأوراق الصفراء على المطاط.", 
        hi: "बिस्टार टॉप 325 SC चावल पर अनाज मलिनकिरण, शीथ ब्लाइट, पत्ते पीले पड़ने और ब्लास्ट को नियंत्रित करता है; मकई पर लीफ स्पॉट और डंठल सड़ांध; बीन्स पर डंपिंग-ऑफ; टमाटर पर लीफ ब्लाइट और अर्ली ब्लाइट; आम पर एन्थ्रेक्नोज; रबर पर पाउडर फफूंदी और पीले पत्ते का गिरना।", 
        ja: "BISTAR TOP 325 SCは、稲の変色米、紋枯病、葉の黄化、いもち病、トウモロコシの褐斑病および茎腐病、豆類の苗立枯病、トマトの葉枯病および夏疫病、マンゴーの炭疽病、ゴムのうどんこ病および落葉病を防除します。", 
        ko: "비스타 탑 325 SC는 벼의 변색미, 잎집무늬마름병, 잎 황화 및 도열병; 옥수수의 점무늬병 및 줄기 썩음병; 콩의 모잘록병; 토마토의 잎마름병 및 겹무늬병; 망고의 탄저병; 고무나무의 흰가루병 및 황색 낙엽병을 방제합니다.", 
        zh: "BISTAR TOP 325 SC控制水稻变色米、纹枯病、叶片发黄和稻瘟病；玉米叶斑病和茎腐病；豆类猝倒病；西红柿叶枯病和早疫病；芒果炭疽病；橡胶白粉病和黄叶落叶病。" 
      }
    ] 
  },
  { 
    id: "fila-super-525-se", 
    name: { kh: "FILA SUPER 525 SE (ហ្វីឡា ស៊ុបពែរ 525 SE)", en: "FILA SUPER 525 SE", vi: "FILA SUPER 525 SE", ar: "فيلا سوبر 525 SE", hi: "फिला सुपर 525 SE", ja: "フィラ スーパー 525 SE", ko: "필라 슈퍼 525 SE", zh: "FILA SUPER 525 SE" }, 
    image: "photo/FILA SUPER.png", 
    category: "fungicide", 
    categoryKh: "ថ្នាំកម្ចាត់ជំងឺ", 
    usage: {
      kh: "របៀបប្រើប្រាស់: ស្រូវ ប្រើ ០.៥ លីត្រ/ហិចតា។ (បរិមាណទឹក ៣២០ លីត្រ/ហិចតា)។ បាញ់ថ្នាំនៅពេលជំងឺទើបតែបំផ្លាញ ឬបាញ់ការពារ នៅដំណាក់កាល ១០-១៥ថ្ងៃ មុនពេលស្រូវចេញ និងឱ្យជោគលើដំណាំ។",
      en: "Usage: Rice: Use 0.5 liters/hectare. (Water volume: 320 liters/hectare). Spray when the disease just starts to damage or spray preventively 10-15 days before rice heading and thoroughly on the crop.",
      vi: "Cách sử dụng: Lúa: Dùng 0.5 lít/ha. (Lượng nước: 320 lít/ha). Phun khi bệnh vừa mới bắt đầu phá hoại hoặc phun phòng ngừa 10-15 ngày trước khi lúa trỗ và phun ướt đều cây trồng.",
      ar: "الاستخدام: الأرز: استخدم 0.5 لتر / هكتار. (حجم الماء: 320 لتر / هكتار). رش عندما يبدأ المرض للتو في التلف أو رش وقائيًا قبل 10-15 يومًا من ظهور الأرز ورشه جيدًا على المحصول.",
      hi: "उपयोग: चावल: 0.5 लीटर/हेक्टेयर उपयोग करें। (पानी की मात्रा: 320 लीटर/हेक्टेयर)। बीमारी के शुरू होने पर स्प्रे करें या चावल निकलने से 10-15 दिन पहले निवारक रूप से स्प्रे करें और फसल पर अच्छी तरह से स्प्रे करें।",
      ja: "使用方法: 稲: 0.5 L/haを使用。（水量: 320 L/ha）。病気が被害を与え始めたときに散布するか、出穂の10-15日前に予防的に散布し、作物に十分に散布します。",
      ko: "사용법: 벼: 0.5 리터/헥타르 사용. (수량: 320 리터/헥타르). 질병이 막 피해를 입히기 시작할 때 분무하거나 벼 이삭 패기 10-15일 전에 예방적으로 분무하고 작물에 충분히 분무합니다.",
      zh: "使用说明: 水稻：使用0.5升/公顷。（水量：320升/公顷）。在疾病刚开始破坏时喷洒，或在水稻抽穗前10-15天进行预防性喷洒，并彻底喷洒在作物上。"
    }, 
    ingredients: { kh: "Tricyclazole 400 ក្រាម/លីត្រ + Propiconazole 125 ក្រាម/លីត្រ", en: "Tricyclazole 400 g/liter + Propiconazole 125 g/liter", vi: "Tricyclazole 400 g/lít + Propiconazole 125 g/lít", ar: "تريسيكلازول 400 جم / لتر + بروبيكونازول 125 جم / لتر", hi: "ट्राइसाइक्लोज़ोल 400 ग्राम/लीटर + प्रोपिकोनाज़ोल 125 ग्राम/लीटर", ja: "トリシクラゾール 400 g/L + プロピコナゾール 125 g/L", ko: "트리시클라졸 400g/L + 프로피코나졸 125g/L", zh: "三环唑 400克/升 + 丙环唑 125克/升" }, 
    benefits: [
      { 
        kh: "ហ្វីឡា ស៊ុបពែរ 525 SE ប្រើដើម្បីកម្ចាត់ជំងឺប្លាសលើស្លឹក និងជំងឺប្លាសលើកកួរ (ជំងឺស្អៀតគ្រាប់) បំផ្លាញស្រូវ", 
        en: "FILA SUPER 525 SE is used to control leaf blast and neck blast (grain discoloration) damaging rice.", 
        vi: "FILA SUPER 525 SE được sử dụng để kiểm soát đạo ôn lá và đạo ôn cổ bông (lem lép hạt) phá hoại lúa.", 
        ar: "يستخدم فيلا سوبر 525 SE للسيطرة على انفجار الأوراق وانفجار العنق (تغير لون الحبوب) الذي يتلف الأرز.", 
        hi: "फिला सुपर 525 SE का उपयोग चावल को नुकसान पहुंचाने वाले लीफ ब्लास्ट और नेक ब्लास्ट (अनाज मलिनकिरण) को नियंत्रित करने के लिए किया जाता है।", 
        ja: "FILA SUPER 525 SEは、稲に被害を与えるいもち病（葉および穂首、変色米）の防除に使用されます。", 
        ko: "필라 슈퍼 525 SE는 벼에 피해를 주는 잎도열병 및 목도열병(변색미)을 방제하는 데 사용됩니다.", 
        zh: "FILA SUPER 525 SE用于控制破坏水稻的叶瘟和穗颈瘟（变色米）。" 
      }
    ] 
  },
  { 
    id: "apropo-200se", 
    name: { kh: "APROPO 200SE (អាប្រូប៉ូ 200SE)", en: "APROPO 200SE", vi: "APROPO 200SE", ar: "أبروبو 200SE", hi: "एप्रोपो 200SE", ja: "アプロポ 200SE", ko: "아프로포 200SE", zh: "APROPO 200SE" }, 
    image: "photo/APROPO 200SE.png", 
    category: "fungicide", 
    categoryKh: "ថ្នាំកម្ចាត់ជំងឺ", 
    usage: {
      kh: "របៀបប្រើប្រាស់: ស្រូវ លាយ ៤០-៥០ ម.ល/ធុង ២៥លីត្រទឹក បាញ់ ១០-១២ ធុង/ហិចតា។ ស្វាយ ធុរេន លាយ ៧០-១០០ ម.ល/ធុង ១០០លីត្រទឹក ឬ ០.៧៥-១ លីត្រ/១០០០ លីត្រទឹក។ (បរិមាណទឹក ៥០០-៦០០ លីត្រ/ហិចតា)។",
      en: "Usage: Rice: Mix 40-50 ml/25-liter tank, spray 10-12 tanks/hectare. Mango, durian: Mix 70-100 ml/100-liter tank or 0.75-1 liter/1000 liters of water. (Water volume: 500-600 liters/hectare).",
      vi: "Cách sử dụng: Lúa: Pha 40-50 ml/bình 25 lít nước, phun 10-12 bình/ha. Xoài, sầu riêng: Pha 70-100 ml/phuy 100 lít nước hoặc 0.75-1 lít/1000 lít nước. (Lượng nước: 500-600 lít/ha).",
      ar: "الاستخدام: الأرز: اخلط 40-50 مل / خزان 25 لترًا، ورش 10-12 خزانًا / هكتار. المانجو والدوريان: اخلط 70-100 مل / خزان 100 لتر أو 0.75-1 لتر / 1000 لتر من الماء. (حجم الماء: 500-600 لتر / هكتار).",
      hi: "उपयोग: चावल: 25 लीटर टैंक में 40-50 मिली मिलाएं, 10-12 टैंक/हेक्टेयर स्प्रे करें। आम, डुरियन: 100 लीटर टैंक में 70-100 मिली या 1000 लीटर पानी में 0.75-1 लीटर मिलाएं। (पानी की मात्रा: 500-600 लीटर/हेक्टेयर)।",
      ja: "使用方法: 稲: 25 Lのタンクに40-50 mlを混合し、10-12タンク/ha散布。マンゴー、ドリアン: 100 Lのタンクに70-100 mlを混合するか、1000 Lの水に0.75-1 Lを混合。（水量: 500-600 L/ha）。",
      ko: "사용법: 벼: 25리터 탱크에 40-50ml 혼합, 10-12 탱크/헥타르 분무. 망고, 두리안: 100리터 탱크에 70-100ml 혼합 또는 물 1000리터에 0.75-1리터 혼합. (수량: 500-600 리터/헥타르).",
      zh: "使用说明: 水稻：在25升水箱中混合40-50毫升，喷洒10-12箱/公顷。芒果、榴莲：在100升水箱中混合70-100毫升或在1000升水中混合0.75-1升。（水量：500-600升/公顷）。"
    }, 
    ingredients: { kh: "Azoxystrobin 75 ក្រាម/លីត្រ + Propiconazole 125 ក្រាម/លីត្រ", en: "Azoxystrobin 75 g/liter + Propiconazole 125 g/liter", vi: "Azoxystrobin 75 g/lít + Propiconazole 125 g/lít", ar: "أزوكسيستروبين 75 جم / لتر + بروبيكونازول 125 جم / لتر", hi: "एज़ोक्सीस्ट्रोबिन 75 ग्राम/लीटर + प्रोपिकोनाज़ोल 125 ग्राम/लीटर", ja: "アゾキシストロビン 75 g/L + プロピコナゾール 125 g/L", ko: "아족시스트로빈 75g/L + 프로피코나졸 125g/L", zh: "嘧菌酯 75克/升 + 丙环唑 125克/升" }, 
    benefits: [
      { 
        kh: "អាប្រូប៉ូ 200SE ជាថ្នាំការពារនិងកម្ចាត់ជំងឺបង្កដោយផ្សិតច្រើនប្រភេទ មានសមត្ថភាពជ្រាបចូលសរីរាង្គដំណាំស្រូវពីគល់ដល់ចុងស្លឹកនិងគ្រាប់។", 
        en: "APROPO 200SE is a fungicide that prevents and controls many types of fungal diseases, with the ability to penetrate rice plant organs from roots to leaf tips and grains.", 
        vi: "APROPO 200SE là thuốc phòng và trừ nhiều loại bệnh do nấm gây ra, có khả năng thẩm thấu vào các cơ quan của cây lúa từ gốc đến ngọn lá và hạt.", 
        ar: "أبروبو 200SE هو مبيد للفطريات يمنع ويتحكم في العديد من أنواع الأمراض الفطرية، مع القدرة على اختراق أعضاء نبات الأرز من الجذور إلى أطراف الأوراق والحبوب.", 
        hi: "एप्रोपो 200SE एक कवकनाशी है जो कई प्रकार के कवक रोगों को रोकता है और नियंत्रित करता है, जिसमें जड़ों से लेकर पत्तियों की युक्तियों और अनाज तक चावल के पौधे के अंगों में प्रवेश करने की क्षमता होती है।", 
        ja: "APROPO 200SEは、多くの種類の真菌性疾患を予防および防除する殺菌剤であり、根から葉先や穀物に至るまで稲の器官に浸透する能力があります。", 
        ko: "아프로포 200SE는 많은 종류의 곰팡이 질환을 예방하고 방제하는 살균제로, 뿌리부터 잎 끝과 곡물까지 벼 식물 기관에 침투하는 능력이 있습니다.", 
        zh: "APROPO 200SE是一种预防和控制多种真菌病害的杀菌剂，能够从根部渗透到叶尖和谷粒等水稻器官。" 
      },
      { 
        kh: "កម្ចាត់យ៉ាងមានប្រសិទ្ធភាព ជំងឺរលាកស្រទបស្ទឹត ជំងឺប្លាស(ស្លឹក កកួរ) និងជំងឺលឿងស្លឹកបង្កដោយផ្សិតលើស្រូវ", 
        en: "Effectively controls sheath blight, blast (leaf, neck) and leaf yellowing caused by fungi on rice.", 
        vi: "Kiểm soát hiệu quả bệnh khô vằn, đạo ôn (lá, cổ bông) và vàng lá do nấm gây ra trên lúa.", 
        ar: "يكافح بشكل فعال لفحة الغمد والانفجار (ورقة، عنق) واصفرار الأوراق الناجم عن الفطريات على الأرز.", 
        hi: "चावल पर कवक के कारण होने वाले शीथ ब्लाइट, ब्लास्ट (पत्ता, गर्दन) और पत्ते पीले पड़ने को प्रभावी ढंग से नियंत्रित करता है।", 
        ja: "稲の真菌によって引き起こされる紋枯病、いもち病（葉、穂首）、葉の黄化を効果的に防除します。", 
        ko: "벼의 곰팡이로 인한 잎집무늬마름병, 도열병(잎, 목) 및 잎 황화를 효과적으로 방제합니다。", 
        zh: "有效控制真菌引起的水稻纹枯病、稻瘟病（叶面、穗颈）和叶片发黄。" 
      },
      { 
        kh: "កម្ចាត់ជំងឺផ្សិតអុចត្រកាក់ផ្លែលើស្វាយ និងធុរេន", 
        en: "Controls anthracnose on mango and durian fruits.", 
        vi: "Kiểm soát bệnh thán thư trên quả xoài và sầu riêng.", 
        ar: "يكافح أنثراكنوز على ثمار المانجو والدوريان.", 
        hi: "आम और डुरियन फलों पर एन्थ्रेक्नोज को नियंत्रित करता है।", 
        ja: "マンゴーとドリアンの果実の炭疽病を防除します。", 
        ko: "망고와 두리안 과일의 탄저병을 방제합니다。", 
        zh: "控制芒果和榴莲果实上的炭疽病。" 
      }
    ] 
  },
  { 
    id: "mastercop", 
    name: { kh: "MASTERCOP (ម៉ាស្ទើរខប)", en: "MASTERCOP", vi: "MASTERCOP", ar: "ماستركوب", hi: "मास्टरकॉप", ja: "マスターコップ", ko: "마스터콥", zh: "MASTERCOP" }, 
    image: "photo/Mastercop.png", 
    category: "fungicide", 
    categoryKh: "ថ្នាំកម្ចាត់ជំងឺ", 
    usage: {
      kh: "របៀបប្រើប្រាស់: ស្រូវ ប្រើ ៦០០ ម.ល / ១ ហិចតា។ ម្រេច ប្រើ ១២០ ម.ល / ១០០ លីត្រទឹក។ បាញ់ការពារ ឬនៅពេលជំងឺទើបតែបំផ្លាញ និងឱ្យជោគលើដំណាំ។",
      en: "Usage: Rice: Use 600 ml / 1 hectare. Pepper: Use 120 ml / 100 liters of water. Spray preventively or when the disease just starts to damage, and spray thoroughly on the crop.",
      vi: "Cách sử dụng: Lúa: Dùng 600 ml / 1 ha. Tiêu: Dùng 120 ml / 100 lít nước. Phun phòng ngừa hoặc khi bệnh vừa mới bắt đầu phá hoại và phun ướt đều cây trồng.",
      ar: "الاستخدام: الأرز: استخدم 600 مل / 1 هكتار. الفلفل: استخدم 120 مل / 100 لتر من الماء. رش وقائيًا أو عندما يبدأ المرض للتو في التلف، ورش جيدًا على المحصول.",
      hi: "उपयोग: चावल: 600 मिली / 1 हेक्टेयर उपयोग करें। काली मिर्च: 100 लीटर पानी में 120 मिली उपयोग करें। निवारक रूप से या बीमारी के शुरू होने पर स्प्रे करें, और फसल पर अच्छी तरह से स्प्रे करें।",
      ja: "使用方法: 稲: 600 ml / 1 haを使用。コショウ: 100 Lの水に120 mlを使用。予防的または病気が被害を与え始めたときに散布し、作物に十分に散布します。",
      ko: "사용법: 벼: 600 ml / 1 헥타르 사용. 후추: 물 100 리터에 120 ml 사용. 예방적으로 또는 질병이 막 피해를 입히기 시작할 때 분무하고 작물에 충분히 분무합니다.",
      zh: "使用说明: 水稻：使用600毫升/1公顷。胡椒：在100升水中混合120毫升。预防性喷洒或在疾病刚开始破坏时喷洒，并彻底喷洒在作物上。"
    }, 
    ingredients: { kh: "Copper Sulphate Pentahydrate 6%W/V", en: "Copper Sulphate Pentahydrate 6%W/V", vi: "Copper Sulphate Pentahydrate 6%W/V", ar: "كبريتات النحاس بينتاهيدرات 6٪ وزن / حجم", hi: "कॉपर सल्फेट पेंटाहाइड्रेट 6%W/V", ja: "硫酸銅五水和物 6%W/V", ko: "황산구리 오수화물 6%W/V", zh: "五水硫酸铜 6%W/V" }, 
    benefits: [
      { 
        kh: "ម៉ាស្ទ័រខុប គឺជាថ្នាំការពារនិងកម្ចាត់ជំងឺបង្កដោយបាក់តេរី ដូចជាជំងឺឆេះគែមស្លឹក ជំងឺអុចស្លឹក បំផ្លាញស្រូវ", 
        en: "MASTERCOP is a bactericide that prevents and controls bacterial diseases such as bacterial leaf blight and leaf spot damaging rice.", 
        vi: "MASTERCOP là thuốc diệt vi khuẩn phòng ngừa và kiểm soát các bệnh do vi khuẩn như bạc lá và đốm lá phá hoại lúa.", 
        ar: "ماستركوب هو مبيد للجراثيم يمنع ويتحكم في الأمراض البكتيرية مثل لفحة الأوراق البكتيرية وتبقع الأوراق التي تتلف الأرز.", 
        hi: "मास्टरकॉप एक जीवाणुनाशक है जो चावल को नुकसान पहुंचाने वाले जीवाणु रोगों जैसे बैक्टीरियल लीफ ब्लाइट और लीफ स्पॉट को रोकता है और नियंत्रित करता है।", 
        ja: "MASTERCOPは、稲に被害を与える白葉枯病や褐斑病などの細菌性疾患を予防および防除する殺菌剤です。", 
        ko: "마스터콥은 벼에 피해를 주는 흰잎마름병 및 점무늬병과 같은 세균성 질환을 예방하고 방제하는 살균제입니다。", 
        zh: "MASTERCOP是一种杀菌剂，可预防和控制破坏水稻的白叶枯病和叶斑病等细菌性病害。" 
      },
      { 
        kh: "កម្ចាត់ជំងឺជ្រុះទម្លុះស្លឹក បំផ្លាញម្រេច", 
        en: "Controls leaf drop and leaf spot damaging pepper.", 
        vi: "Kiểm soát bệnh rụng lá và đốm lá phá hoại tiêu.", 
        ar: "يكافح تساقط الأوراق وتبقع الأوراق الذي يتلف الفلفل.", 
        hi: "काली मिर्च को नुकसान पहुंचाने वाले लीफ ड्रॉप और लीफ स्पॉट को नियंत्रित करता है।", 
        ja: "コショウに被害を与える落葉や斑点病を防除します。", 
        ko: "후추에 피해를 주는 낙엽병 및 점무늬병을 방제합니다。", 
        zh: "控制破坏胡椒的落叶和叶斑病。" 
      }
    ] 
  },

  { 
    id: "boom-flower", 
    name: { kh: "BOOM FLOWER-n (ប៊ុមផ្លាវអឺ-អែន)", en: "BOOM FLOWER-n", vi: "BOOM FLOWER-n", ar: "بوم فلاور إن", hi: "बूम फ्लावर-n", ja: "ブームフラワー-n", ko: "붐 플라워-n", zh: "BOOM FLOWER-n" }, 
    image: "photo/BOOM-FLOWER (2019_500ml)-02.png", 
    category: "fertilizer", 
    categoryKh: "ជីសរីរាង្គជីវសាស្រ្ត និងជីសរីរាង្គ", 
    usage: {
      kh: "របៀបប្រើប្រាស់: ស្រូវ លាយ ៧៥ ម.ល/ធុង ២៥ លីត្រ។ ឪឡឹក ត្រសក់ ប៉េងប៉ោះ លាយ ៤៥ ម.ល/ធុង ២៥ លីត្រ។ ពោត លាយ ៧៥ ម.ល/ធុង ២៥ លីត្រ។ កៅស៊ូ លាយ ៥០០ ម.ល/ធុង ២០០ លីត្រ។ បាញ់ឱ្យជោគលើស្លឹកដំណាំ។",
      en: "Usage: Rice: Mix 75 ml/25-liter tank. Watermelon, cucumber, tomato: Mix 45 ml/25-liter tank. Corn: Mix 75 ml/25-liter tank. Rubber: Mix 500 ml/200-liter tank. Spray thoroughly on crop leaves.",
      vi: "Cách sử dụng: Lúa: Pha 75 ml/bình 25 lít. Dưa hấu, dưa chuột, cà chua: Pha 45 ml/bình 25 lít. Ngô: Pha 75 ml/bình 25 lít. Cao su: Pha 500 ml/phuy 200 lít. Phun ướt đều trên lá cây trồng.",
      ar: "الاستخدام: الأرز: اخلط 75 مل / خزان 25 لترًا. البطيخ والخيار والطماطم: اخلط 45 مل / خزان 25 لترًا. الذرة: اخلط 75 مل / خزان 25 لترًا. المطاط: اخلط 500 مل / خزان 200 لتر. رش جيدًا على أوراق المحصول.",
      hi: "उपयोग: चावल: 25 लीटर टैंक में 75 मिली मिलाएं। तरबूज, ककड़ी, टमाटर: 25 लीटर टैंक में 45 मिली मिलाएं। मक्का: 25 लीटर टैंक में 75 मिली मिलाएं। रबर: 200 लीटर टैंक में 500 मिली मिलाएं। फसल के पत्तों पर अच्छी तरह से स्प्रे करें。",
      ja: "使用方法: 稲: 25 Lのタンクに75 mlを混合。スイカ、キュウリ、トマト: 25 Lのタンクに45 mlを混合。トウモロコシ: 25 Lのタンクに75 mlを混合。ゴム: 200 Lのタンクに500 mlを混合。作物の葉に十分に散布します。",
      ko: "사용법: 벼: 25리터 탱크에 75ml 혼합. 수박, 오이, 토마토: 25리터 탱크에 45ml 혼합. 옥수수: 25리터 탱크에 75ml 혼합. 고무: 200리터 탱크에 500ml 혼합. 작물 잎에 충분히 분무합니다.",
      zh: "使用说明: 水稻：在25升水箱中混合75毫升。西瓜、黄瓜、西红柿：在25升水箱中混合45毫升。玉米：在25升水箱中混合75毫升。橡胶：在200升水箱中混合500毫升。彻底喷洒在作物叶片上。"
    }, 
    ingredients: { kh: "Nitro Benzen 20%", en: "Nitro Benzen 20%", vi: "Nitro Benzen 20%", ar: "نيترو بنزين 20٪", hi: "नाइट्रो बेंजीन 20%", ja: "ニトロベンゼン 20%", ko: "니트로 벤젠 20%", zh: "硝基苯 20%" }, 
    benefits: [
      { 
        kh: "ប៊ូមហ្វាវ័រ-អ៊ិន ជាជីជំរុញការលូតលាស់ និងបង្កើនទិន្នផល", 
        en: "BOOM FLOWER-n is a fertilizer that stimulates growth and increases yield.", 
        vi: "BOOM FLOWER-n là loại phân bón kích thích tăng trưởng và tăng năng suất.", 
        ar: "بوم فلاور إن هو سماد يحفز النمو ويزيد من الإنتاجية.", 
        hi: "बूम फ्लावर-n एक उर्वरक है जो विकास को उत्तेजित करता है और उपज बढ़ाता है।", 
        ja: "BOOM FLOWER-nは成長を刺激し、収量を増加させる肥料です。", 
        ko: "붐 플라워-n은 성장을 촉진하고 수확량을 늘리는 비료입니다.", 
        zh: "BOOM FLOWER-n是一种刺激生长和增加产量的肥料。" 
      },
      { 
        kh: "ជួយឱ្យដំណាំលូតលាស់ខ្លាំង បង្កើនអត្រាចេញផ្កា", 
        en: "Helps crops grow vigorously and increases the flowering rate.", 
        vi: "Giúp cây trồng phát triển mạnh mẽ và tăng tỷ lệ ra hoa.", 
        ar: "يساعد المحاصيل على النمو بقوة ويزيد من معدل الإزهار.", 
        hi: "फसलों को मजबूती से बढ़ने में मदद करता है और फूल आने की दर को बढ़ाता है।", 
        ja: "作物の力強い成長を助け、開花率を高めます。", 
        ko: "작물이 튼튼하게 자라도록 돕고 개화율을 높입니다.", 
        zh: "帮助作物茁壮成长并提高开花率。" 
      },
      { 
        kh: "កាត់បន្ថយការជ្រុះផ្កានិងផ្លែ បង្កើនទិន្នផល និងគុណភាពកសិផល", 
        en: "Reduces flower and fruit drop, increases yield and quality of agricultural products.", 
        vi: "Giảm rụng hoa và quả, tăng năng suất và chất lượng nông sản.", 
        ar: "يقلل من تساقط الأزهار والفاكهة، ويزيد من إنتاجية وجودة المنتجات الزراعية.", 
        hi: "फूल और फल के झड़ने को कम करता है, कृषि उत्पादों की उपज और गुणवत्ता बढ़ाता है।", 
        ja: "花や果実の落下を減らし、農産物の収量と品質を向上させます。", 
        ko: "꽃과 과일의 낙하를 줄이고 농산물의 수확량과 품질을 높입니다.", 
        zh: "减少落花落果，提高农产品的产量和质量。" 
      },
      { 
        kh: "ប្រើបានលើដំណាំស្រូវ ពោត ឪឡឹក ប៉េងប៉ោះ បន្លែ សណ្តែក ដំណាំហូបផ្លែ និងដំណាំឧស្សាហកម្ម", 
        en: "Can be used on rice, corn, watermelon, tomato, vegetables, beans, fruit crops, and industrial crops.", 
        vi: "Có thể sử dụng trên lúa, ngô, dưa hấu, cà chua, rau, đậu, cây ăn quả và cây công nghiệp.", 
        ar: "يمكن استخدامه على الأرز والذرة والبطيخ والطماطم والخضروات والفاصوليا ومحاصيل الفاكهة والمحاصيل الصناعية.", 
        hi: "चावल, मक्का, तरबूज, टमाटर, सब्जियां, बीन्स, फलों की फसलें और औद्योगिक फसलों पर इस्तेमाल किया जा सकता है।", 
        ja: "稲、トウモロコシ、スイカ、トマト、野菜、豆類、果樹、および工業用作物に使用できます。", 
        ko: "벼, 옥수수, 수박, 토마토, 채소, 콩, 과일 작물 및 산업용 작물에 사용할 수 있습니다.", 
        zh: "可用于水稻、玉米、西瓜、西红柿、蔬菜、豆类、水果作物和经济作物。" 
      }
    ] 
  },
  { 
    id: "vitazyme-n", 
    name: { kh: "VITAZYME-n (វីតាហ្ស៊ីម-អែន)", en: "VITAZYME-n", vi: "VITAZYME-n", ar: "فيتازيم إن", hi: "विटाजाइम-n", ja: "ビタザイム-n", ko: "비타자임-n", zh: "VITAZYME-n" }, 
    image: "photo/Vitazyme-n.png", 
    category: "fertilizer", 
    categoryKh: "ជីសរីរាង្គជីវសាស្រ្ត និងជីសរីរាង្គ", 
    usage: {
      kh: "របៀបប្រើប្រាស់: លាយ ៧៥-៨០ ម.ល/ធុង ២៥ លីត្រទឹក (ឬ ៥០០ ម.ល/ធុង ២០០ លីត្រទឹក)។ បាញ់ឱ្យជោគពាសពេញលើស្លឹកដំណាំ។",
      en: "Usage: Mix 75-80 ml/25-liter tank of water (or 500 ml/200-liter tank of water). Spray thoroughly on all crop leaves.",
      vi: "Cách sử dụng: Pha 75-80 ml/bình 25 lít nước (hoặc 500 ml/phuy 200 lít nước). Phun ướt đều trên toàn bộ lá cây trồng.",
      ar: "الاستخدام: اخلط 75-80 مل / خزان 25 لترًا من الماء (أو 500 مل / خزان 200 لتر من الماء). رش جيدًا على جميع أوراق المحصول.",
      hi: "उपयोग: पानी के 25 लीटर टैंक में 75-80 मिली (या 200 लीटर टैंक में 500 मिली) मिलाएं। सभी फसल के पत्तों पर अच्छी तरह से स्प्रे करें।",
      ja: "使用方法: 25 Lの水のタンクに75-80 ml（または200 Lのタンクに500 ml）を混合します。すべての作物の葉に十分に散布します。",
      ko: "사용법: 물 25리터 탱크에 75-80ml 혼합(또는 200리터 탱크에 500ml). 모든 작물 잎에 충분히 분무합니다.",
      zh: "使用说明: 在25升水箱中混合75-80毫升（或在200升水箱中混合500毫升）。彻底喷洒在所有作物叶片上。"
    }, 
    ingredients: { kh: "Brassinolide: 22ppm, 1-Triacontanol: 30ppm, Vitamin B complex (B1 B2 B6): 6ppm, Cu (EDTA): 700ppm, Zn (EDTA): 600ppm, Fe (EDTA): 2000ppm", en: "Brassinolide: 22ppm, 1-Triacontanol: 30ppm, Vitamin B complex (B1 B2 B6): 6ppm, Cu (EDTA): 700ppm, Zn (EDTA): 600ppm, Fe (EDTA): 2000ppm", vi: "Brassinolide: 22ppm, 1-Triacontanol: 30ppm, Vitamin B complex (B1 B2 B6): 6ppm, Cu (EDTA): 700ppm, Zn (EDTA): 600ppm, Fe (EDTA): 2000ppm", ar: "براسينوليد: 22 جزء في المليون، 1-تريكونتانول: 30 جزء في المليون، مركب فيتامين ب (ب1 ب2 ب6): 6 جزء في المليون، النحاس (EDTA): 700 جزء في المليون، الزنك (EDTA): 600 جزء في المليون، الحديد (EDTA): 2000 جزء في المليون", hi: "ब्रैसिनोलाइड: 22ppm, 1-ट्रायाकोंटानोल: 30ppm, विटामिन बी कॉम्प्लेक्स (B1 B2 B6): 6ppm, Cu (EDTA): 700ppm, Zn (EDTA): 600ppm, Fe (EDTA): 2000ppm", ja: "ブラシノライド: 22ppm、1-トリアコンタノール: 30ppm、ビタミンB群（B1 B2 B6）: 6ppm、Cu（EDTA）: 700ppm、Zn（EDTA）: 600ppm、Fe（EDTA）: 2000ppm", ko: "브라시놀라이드: 22ppm, 1-트리아콘타놀: 30ppm, 비타민 B 복합체(B1 B2 B6): 6ppm, Cu(EDTA): 700ppm, Zn(EDTA): 600ppm, Fe(EDTA): 2000ppm", zh: "油菜素内酯: 22ppm, 1-三十烷醇: 30ppm, 维生素B复合体 (B1 B2 B6): 6ppm, 铜 (EDTA): 700ppm, 锌 (EDTA): 600ppm, 铁 (EDTA): 2000ppm" }, 
    benefits: [
      { 
        kh: "វីតាហ្ស៊ីម-អ៊ិន ជួយឱ្យដំណាំលូតលាស់ល្អ កសិកររីករាយ", 
        en: "VITAZYME-n helps crops grow well, making farmers happy.", 
        vi: "VITAZYME-n giúp cây trồng phát triển tốt, mang lại niềm vui cho nông dân.", 
        ar: "يساعد فيتازيم إن المحاصيل على النمو بشكل جيد، مما يسعد المزارعين.", 
        hi: "विटाजाइम-n फसलों को अच्छी तरह से बढ़ने में मदद करता है, जिससे किसान खुश होते हैं।", 
        ja: "VITAZYME-nは作物の良好な成長を助け、農家に喜びをもたらします。", 
        ko: "비타자임-n은 작물이 잘 자라도록 도와 농부들을 기쁘게 합니다.", 
        zh: "VITAZYME-n帮助作物生长良好，让农民开心。" 
      },
      { 
        kh: "ជាភ្នាក់ងារជំរុញការចេញពន្លក ជួយធ្វើឱ្យរលាយធាតុចិញ្ចឹម", 
        en: "Acts as a shoot sprouting promoter and helps dissolve nutrients.", 
        vi: "Hoạt động như một tác nhân thúc đẩy nảy chồi và giúp hòa tan các chất dinh dưỡng.", 
        ar: "يعمل كعامل معزز لنمو البراعم ويساعد على إذابة العناصر الغذائية.", 
        hi: "अंकुरण को बढ़ावा देने वाले एजेंट के रूप में कार्य करता है और पोषक तत्वों को घोलने में मदद करता है।", 
        ja: "発芽促進剤として機能し、栄養素の溶解を助けます。", 
        ko: "새싹 발아 촉진제로 작용하며 영양분을 용해하는 데 도움을 줍니다.", 
        zh: "作为发芽促进剂，有助于溶解营养物质。" 
      },
      { 
        kh: "បង្កើនទិន្នផល និងកែលម្អគុណភាពកសិផល", 
        en: "Increases yield and improves the quality of agricultural products.", 
        vi: "Tăng năng suất và cải thiện chất lượng nông sản.", 
        ar: "يزيد من المحصول ويحسن جودة المنتجات الزراعية.", 
        hi: "उपज बढ़ाता है और कृषि उत्पादों की गुणवत्ता में सुधार करता है।", 
        ja: "収量を増やし、農産物の品質を向上させます。", 
        ko: "수확량을 늘리고 농산물의 품질을 향상시킵니다。", 
        zh: "提高产量并改善农产品质量。" 
      },
      { 
        kh: "ប្រើបានលើស្រូវ ពោត ប៉េងប៉ោះ ម្នាស់ ដំឡូង សណ្តែកដី ម្រេច កាហ្វេ ស្រកានាគ និងដំណាំហូបផ្លែ", 
        en: "Can be used on rice, corn, tomato, pineapple, potato, peanut, pepper, coffee, dragon fruit, and fruit crops.", 
        vi: "Có thể sử dụng trên lúa, ngô, cà chua, dứa, khoai tây, lạc, tiêu, cà phê, thanh long và cây ăn quả.", 
        ar: "يمكن استخدامه على الأرز والذرة والطماطم والأناناس والبطاطس والفول السوداني والفلفل والقهوة وفاكهة التنين ومحاصيل الفاكهة.", 
        hi: "चावल, मक्का, टमाटर, अनानास, आलू, मूंगफली, काली मिर्च, कॉफी, ड्रैगन फ्रूट और फलों की फसलों पर इस्तेमाल किया जा सकता है।", 
        ja: "稲、トウモロコシ、トマト、パイナップル、ジャガイモ、ピーナッツ、コショウ、コーヒー、ドラゴンフルーツ、果樹に使用できます。", 
        ko: "벼, 옥수수, 토마토, 파인애플, 감자, 땅콩, 후추, 커피, 용과 및 과일 작물에 사용할 수 있습니다.", 
        zh: "可用于水稻、玉米、西红柿、菠萝、土豆、花生、胡椒、咖啡、火龙果和水果作物。" 
      }
    ] 
  },
  { 
    id: "hi-boron-7-14", 
    name: { kh: "HI-BORON 7-14 (ហាយ-បររ៉ុន 7-14)", en: "HI-BORON 7-14", vi: "HI-BORON 7-14", ar: "هاي-بورون 7-14", hi: "हाई-बोरॉन 7-14", ja: "ハイ-ホウ素 7-14", ko: "하이-붕소 7-14", zh: "HI-BORON 7-14" }, 
    image: "photo/Hi-Boron.png", 
    category: "fertilizer", 
    categoryKh: "ជីសរីរាង្គជីវសាស្រ្ត និងជីសរីរាង្គ", 
    usage: {
      kh: "របៀបប្រើប្រាស់: ស្រូវ និងបន្លែ លាយ ១៥-៣០ ម.ល / ២៥ លីត្រទឹក។ ដំណាំហូបផ្លែនិងឧស្សាហកម្ម លាយ ៣៥-៥០ ម.ល / ២៥ លីត្រទឹក ឬ ២០០-៤០០ ម.ល/ធុង ២០០ លីត្រទឹក។ (បាញ់ឱ្យជោគពាសពេញលើស្លឹកដំណាំ)",
      en: "Usage: Rice and vegetables: Mix 15-30 ml / 25 liters of water. Fruit and industrial crops: Mix 35-50 ml / 25 liters of water or 200-400 ml/200-liter tank of water. (Spray thoroughly on all crop leaves)",
      vi: "Cách sử dụng: Lúa và rau: Pha 15-30 ml / 25 lít nước. Cây ăn quả và cây công nghiệp: Pha 35-50 ml / 25 lít nước hoặc 200-400 ml/phuy 200 lít nước. (Phun ướt đều trên toàn bộ lá cây trồng)",
      ar: "الاستخدام: الأرز والخضروات: اخلط 15-30 مل / 25 لترًا من الماء. الفاكهة والمحاصيل الصناعية: اخلط 35-50 مل / 25 لترًا من الماء أو 200-400 مل / خزان 200 لتر من الماء. (رش جيدًا على جميع أوراق المحصول)",
      hi: "उपयोग: चावल और सब्जियां: 25 लीटर पानी में 15-30 मिली मिलाएं। फल और औद्योगिक फसलें: 25 लीटर पानी में 35-50 मिली या 200 लीटर पानी के टैंक में 200-400 मिली मिलाएं। (सभी फसल के पत्तों पर अच्छी तरह से स्प्रे करें)",
      ja: "使用方法: 稲と野菜: 25 Lの水に15-30 mlを混合。果樹および工業用作物: 25 Lの水に35-50 mlを混合するか、200 Lの水タンクに200-400 mlを混合。（すべての作物の葉に十分に散布します）",
      ko: "사용법: 벼 및 채소: 물 25리터에 15-30ml 혼합. 과수 및 산업용 작물: 물 25리터에 35-50ml 혼합 또는 물 200리터 탱크에 200-400ml 혼합. (모든 작물 잎에 충분히 분무합니다)",
      zh: "使用说明: 水稻和蔬菜：在25升水中混合15-30毫升。水果和经济作物：在25升水中混合35-50毫升或在200升水箱中混合200-400毫升。（彻底喷洒在所有作物叶片上）"
    }, 
    ingredients: { kh: "N: 7.0%, B: 13.0%, Zn: 25%, ចរ (B) សរីរាង្គ", en: "N: 7.0%, B: 13.0%, Zn: 25%, Organic Boron (B)", vi: "N: 7.0%, B: 13.0%, Zn: 25%, Bo hữu cơ (B)", ar: "النيتروجين: 7.0٪، البورون: 13.0٪، الزنك: 25٪، البورون العضوي (B)", hi: "N: 7.0%, B: 13.0%, Zn: 25%, कार्बनिक बोरॉन (B)", ja: "N: 7.0%, B: 13.0%, Zn: 25%, 有機ホウ素 (B)", ko: "N: 7.0%, B: 13.0%, Zn: 25%, 유기 붕소(B)", zh: "N: 7.0%, B: 13.0%, Zn: 25%, 有机硼 (B)" }, 
    benefits: [
      { 
        kh: "ហាយ-បូរ៉ុន 7-14 ជួយឱ្យដំណាំលូតលាស់ល្អ ផ្កាផ្លែពេញមែក", 
        en: "HI-BORON 7-14 helps crops grow well with branches full of flowers and fruits.", 
        vi: "HI-BORON 7-14 giúp cây trồng phát triển tốt, hoa quả trĩu cành.", 
        ar: "يساعد هاي-بورون 7-14 المحاصيل على النمو بشكل جيد مع فروع مليئة بالزهور والفواكه.", 
        hi: "हाई-बोरॉन 7-14 फसलों को अच्छी तरह से बढ़ने में मदद करता है जिससे शाखाएं फूलों और फलों से भर जाती हैं。", 
        ja: "HI-BORON 7-14は作物の良好な成長を助け、枝いっぱいの花や実をつけさせます。", 
        ko: "하이-붕소 7-14는 작물이 꽃과 과일로 가득 찬 가지와 함께 잘 자라도록 돕습니다.", 
        zh: "HI-BORON 7-14帮助作物生长良好，枝头长满花果。" 
      },
      { 
        kh: "បង្កើនកម្លាំងកោសិកាសកម្ម កាត់បន្ថយការជ្រុះផ្កា និងផ្លែ", 
        en: "Increases active cell strength, reduces flower and fruit drop.", 
        vi: "Tăng cường sức mạnh tế bào hoạt động, giảm rụng hoa và quả.", 
        ar: "يزيد من قوة الخلية النشطة ويقلل من تساقط الأزهار والفواكه.", 
        hi: "सक्रिय कोशिका की ताकत बढ़ाता है, फूल और फल के झड़ने को कम करता है。", 
        ja: "活発な細胞の強度を高め、花や果実の落下を減らします。", 
        ko: "활성 세포 강도를 높이고 꽃과 과일의 낙하를 줄입니다.", 
        zh: "增强活性细胞的强度，减少落花落果。" 
      },
      { 
        kh: "កាត់បន្ថយផ្លែប្រេះ ស្អុយផ្លែ ខ្មៅគ្រាប់", 
        en: "Reduces fruit cracking, fruit rot, and blackened seeds.", 
        vi: "Giảm nứt quả, thối quả và đen hạt.", 
        ar: "يقلل من تشقق الفاكهة وتعفنها واسوداد البذور.", 
        hi: "फलों के फटने, फलों के सड़ने और बीजों के कालेपन को कम करता है。", 
        ja: "果実の割れ、果実の腐敗、種子の黒ずみを減らします。", 
        ko: "과일 갈라짐, 과일 썩음 및 씨앗이 검게 변하는 것을 줄입니다.", 
        zh: "减少果实开裂、果实腐烂和种子变黑。" 
      },
      { 
        kh: "ជួយឱ្យដើមរឹងមាំ បង្កើនទិន្នផល និងគុណភាពកសិផល", 
        en: "Helps stems be strong, increases yield and quality of agricultural products.", 
        vi: "Giúp thân cây chắc khỏe, tăng năng suất và chất lượng nông sản.", 
        ar: "يساعد على أن تكون السيقان قوية، ويزيد من إنتاجية وجودة المنتجات الزراعية.", 
        hi: "तनों को मजबूत बनाने में मदद करता है, कृषि उत्पादों की उपज और गुणवत्ता बढ़ाता है。", 
        ja: "茎を丈夫にし、農産物の収量と品質を向上させます。", 
        ko: "줄기를 튼튼하게 하고 농산물의 수확량과 품질을 높입니다.", 
        zh: "帮助茎干强壮，提高农产品的产量和质量。" 
      }
    ] 
  },
  { 
    id: "hi-potassium-c30", 
    name: { kh: "HI-POTASSIUM C30 (ហាយ-ប៉ូតាស្យូម C30)", en: "HI-POTASSIUM C30", vi: "HI-POTASSIUM C30", ar: "هاي-بوتاسيوم C30", hi: "हाई-पोटेशियम C30", ja: "ハイ-カリウム C30", ko: "하이-칼륨 C30", zh: "HI-POTASSIUM C30" }, 
    image: "photo/Hi-Potassium C30.png", 
    category: "fertilizer", 
    categoryKh: "ជីសរីរាង្គជីវសាស្រ្ត និងជីសរីរាង្គ", 
    usage: {
      kh: "របៀបប្រើប្រាស់: ស្រូវ បាញ់នៅដំណាក់កាលកករកូរនិងក្រោយពេលស្រូវចេញស្រុះ លាយ ៦០-៨០ ម.ល/២៥ លីត្រ។ ដំណាំហូបផ្លែនិងឧស្សាហកម្ម លាយ ៦០-៨០ ម.ល/២៥ លីត្រ ឬ ៥០០ ម.ល/ធុង ២០០ លីត្រ។ បន្លែគ្រប់ប្រភេទ លាយ ៥០-៦០ ម.ល/២៥ លីត្រ។ (បាញ់ឱ្យជោគពាសពេញលើស្លឹកដំណាំ)",
      en: "Usage: Rice: Spray at the panicle initiation stage and after rice heads fully. Mix 60-80 ml/25 liters. Fruit and industrial crops: Mix 60-80 ml/25 liters or 500 ml/200-liter tank. All kinds of vegetables: Mix 50-60 ml/25 liters. (Spray thoroughly on all crop leaves)",
      vi: "Cách sử dụng: Lúa: Phun ở giai đoạn đòng và sau khi lúa trỗ đều. Pha 60-80 ml/25 lít. Cây ăn quả và cây công nghiệp: Pha 60-80 ml/25 lít hoặc 500 ml/phuy 200 lít. Tất cả các loại rau: Pha 50-60 ml/25 lít. (Phun ướt đều trên toàn bộ lá cây trồng)",
      ar: "الاستخدام: الأرز: رش في مرحلة تكوين السنابل وبعد اكتمال سنابل الأرز. اخلط 60-80 مل / 25 لترًا. الفاكهة والمحاصيل الصناعية: اخلط 60-80 مل / 25 لترًا أو 500 مل / خزان 200 لتر. جميع أنواع الخضروات: اخلط 50-60 مل / 25 لترًا. (رش جيدًا على جميع أوراق المحصول)",
      hi: "उपयोग: चावल: पैनिकल शुरुआत के चरण में और चावल के पूरी तरह से निकलने के बाद स्प्रे करें। 25 लीटर में 60-80 मिली मिलाएं। फल और औद्योगिक फसलें: 25 लीटर में 60-80 मिली या 200 लीटर टैंक में 500 मिली मिलाएं। सभी प्रकार की सब्जियां: 25 लीटर में 50-60 मिली मिलाएं। (सभी फसल के पत्तों पर अच्छी तरह से स्प्रे करें)",
      ja: "使用方法: 稲: 幼穂形成期と稲穂が完全に出た後に散布。25 Lに60-80 mlを混合。果樹および工業用作物: 25 Lに60-80 mlを混合するか、200 Lのタンクに500 mlを混合。すべての種類の野菜: 25 Lに50-60 mlを混合。（すべての作物の葉に十分に散布します）",
      ko: "사용법: 벼: 유수 형성기 및 벼 이삭이 완전히 나온 후 분무. 25리터에 60-80ml 혼합. 과수 및 산업용 작물: 25리터에 60-80ml 혼합 또는 200리터 탱크에 500ml 혼합. 모든 종류의 채소: 25리터에 50-60ml 혼합. (모든 작물 잎에 충분히 분무합니다)",
      zh: "使用说明: 水稻：在幼穗分化期和水稻完全抽穗后喷洒。在25升水中混合60-80毫升。水果和经济作物：在25升水中混合60-80毫升或在200升水箱中混合500毫升。各类蔬菜：在25升水中混合50-60毫升。（彻底喷洒在所有作物叶片上）"
    }, 
    ingredients: { kh: "K2O: 300 ក្រាម/លីត្រ, ស័ង្កសី: 200-250 ក្រាម/លីត្រ, FULVATE + ប៉ូតាស្យូម (K) + មិនបណ្តាលឱ្យពុលដល់ដំណាំ", en: "K2O: 300 g/liter, Zinc: 200-250 g/liter, FULVATE + Potassium (K) + Non-toxic to crops", vi: "K2O: 300 g/lít, Kẽm: 200-250 g/lít, FULVATE + Kali (K) + Không gây độc cho cây trồng", ar: "K2O: 300 جم / لتر، زنك: 200-250 جم / لتر، فولفات + بوتاسيوم (K) + غير سام للمحاصيل", hi: "K2O: 300 ग्राम/लीटर, जिंक: 200-250 ग्राम/लीटर, फुलवेट + पोटेशियम (K) + फसलों के लिए गैर विषैले", ja: "K2O: 300 g/L、亜鉛: 200-250 g/L、フルボ酸塩 + カリウム（K） + 作物に無毒", ko: "K2O: 300 g/L, 아연: 200-250 g/L, 풀베이트 + 칼륨(K) + 작물에 무독성", zh: "K2O: 300克/升, 锌: 200-250克/升, 黄腐酸盐 + 钾 (K) + 对作物无毒" }, 
    benefits: [
      { 
        kh: "ហាយ-ប៉ូតាស្យូម C30 បង្កើនគុណភាពដំណាំ មានពណ៌ភ្លឺស្អាត", 
        en: "HI-POTASSIUM C30 enhances crop quality, giving a bright and beautiful color.", 
        vi: "HI-POTASSIUM C30 nâng cao chất lượng cây trồng, mang lại màu sắc tươi sáng và đẹp mắt.", 
        ar: "يعزز هاي-بوتاسيوم C30 جودة المحاصيل، مما يعطي لونًا مشرقًا وجميلًا.", 
        hi: "हाई-पोटेशियम C30 फसल की गुणवत्ता को बढ़ाता है, एक चमकीला और सुंदर रंग देता है।", 
        ja: "HI-POTASSIUM C30は作物の品質を高め、明るく美しい色を与えます。", 
        ko: "하이-칼륨 C30은 작물 품질을 향상시켜 밝고 아름다운 색상을 제공합니다。", 
        zh: "HI-POTASSIUM C30提高作物质量，使其呈现明亮美丽的颜色。" 
      },
      { 
        kh: "បង្កើនការទទួលបានទម្ងន់ធ្ងន់ទៅលើដំណាំ ទោះក្នុងលក្ខខណ្ឌរាំងស្ងួត ត្រជាក់ លិចទឹក ជាតិជូរប្រៃ", 
        en: "Increases heavy weight gain on crops, even under conditions of drought, cold, waterlogging, or high salinity/acidity.", 
        vi: "Tăng trọng lượng nặng cho cây trồng, ngay cả trong điều kiện hạn hán, lạnh, ngập úng hoặc độ mặn/chua cao.", 
        ar: "يزيد من اكتساب الوزن الثقيل للمحاصيل، حتى في ظل ظروف الجفاف أو البرد أو التشبع بالمياه أو الملوحة / الحموضة العالية.", 
        hi: "फसलों पर भारी वजन बढ़ाता है, यहां तक कि सूखे, ठंड, जलभराव या उच्च लवणता/अम्लता की स्थिति में भी।", 
        ja: "干ばつ、寒さ、冠水、または高い塩分/酸性度の条件下でも、作物の重量を増加させます。", 
        ko: "가뭄, 추위, 침수 또는 높은 염도/산성 조건에서도 작물의 체중 증가를 높입니다.", 
        zh: "即使在干旱、寒冷、涝渍或高盐/酸度条件下，也能增加作物的重量。" 
      },
      { 
        kh: "ជួយឱ្យចេញផ្កាស្រុះគ្នា ធន់នឹងការជ្រុះផ្កានិងក្តឹប", 
        en: "Helps promote uniform flowering, resistant to dropping of flowers and young fruits.", 
        vi: "Giúp ra hoa đồng loạt, chống rụng hoa và quả non.", 
        ar: "يساعد على تعزيز الإزهار المنتظم والمقاوم لتساقط الأزهار والفواكه الصغيرة.", 
        hi: "समान रूप से फूल आने को बढ़ावा देने में मदद करता है, फूलों और छोटे फलों के झड़ने का प्रतिरोध करता है।", 
        ja: "均一な開花を促進し、花や幼果の落下に強いです。", 
        ko: "균일한 개화를 촉진하고 꽃과 어린 과일이 떨어지는 것을 방지합니다.", 
        zh: "有助于促进均匀开花，抗落花和落幼果。" 
      },
      { 
        kh: "ជួយឱ្យដើម ផ្លែ គ្រាប់រឹងមាំ ទុំស្រុះគ្នា និងចូលគ្រាប់លឿន", 
        en: "Helps stems, fruits, and seeds be strong, ripens uniformly, and fills grains quickly.", 
        vi: "Giúp thân, quả, hạt chắc khỏe, chín đồng đều và mẩy hạt nhanh.", 
        ar: "يساعد السيقان والفواكه والبذور على أن تكون قوية وتنضج بشكل موحد وتملأ الحبوب بسرعة.", 
        hi: "तनों, फलों और बीजों को मजबूत बनाने में मदद करता है, समान रूप से पकता है, और अनाज को जल्दी भरता है।", 
        ja: "茎、果実、種子を丈夫にし、均一に熟し、穀物を素早く満たすのを助けます。", 
        ko: "줄기, 과일 및 씨앗을 튼튼하게 하고 고르게 익으며 곡물을 빨리 채우는 데 도움이 됩니다.", 
        zh: "帮助茎干、果实和种子坚固，均匀成熟，并快速灌浆。" 
      }
    ] 
  },
  { 
    id: "brano-0-01sl", 
    name: { kh: "BRANO 0.01SL (ប្រាណូ 0.01SL)", en: "BRANO 0.01SL", vi: "BRANO 0.01SL", ar: "برانو 0.01SL", hi: "ब्रानो 0.01SL", ja: "ブラノ 0.01SL", ko: "브라노 0.01SL", zh: "BRANO 0.01SL" }, 
    image: "photo/BRANO 0.01SL.png", 
    category: "fertilizer", 
    categoryKh: "ជីសរីរាង្គជីវសាស្រ្ត និងជីសរីរាង្គ", 
    usage: {
      kh: "របៀបប្រើប្រាស់: ប្រើ ០.២៥ ម.ល/លីត្រទឹក ឬ ៦.២៥ ម.ល/ធុង ២៥ លីត្រ។ បាញ់លើកទី១ នៅពេល ៧-១០ ថ្ងៃក្រោយព្រោះ លើកទី២ នៅពេលស្រូវចាប់ផ្តើមផ្កា។ (បាញ់ឱ្យទទឹកពាសពេញស្លឹកដំណាំ)",
      en: "Usage: Use 0.25 ml/liter of water or 6.25 ml/25-liter tank. Spray the 1st time at 7-10 days after sowing, and the 2nd time when rice starts to flower. (Spray to wet all crop leaves)",
      vi: "Cách sử dụng: Dùng 0.25 ml/lít nước hoặc 6.25 ml/bình 25 lít. Phun lần 1 vào lúc 7-10 ngày sau khi gieo sạ, lần 2 khi lúa bắt đầu trỗ. (Phun ướt đều toàn bộ lá cây trồng)",
      ar: "الاستخدام: استخدم 0.25 مل / لتر من الماء أو 6.25 مل / خزان 25 لترًا. رش للمرة الأولى بعد 7-10 أيام من البذر، والمرة الثانية عندما يبدأ الأرز في التزهير. (رش لتبليل جميع أوراق المحصول)",
      hi: "उपयोग: 1 लीटर पानी में 0.25 मिली या 25 लीटर टैंक में 6.25 मिली उपयोग करें। बुवाई के 7-10 दिन बाद पहली बार स्प्रे करें, और दूसरी बार जब चावल में फूल आने लगे। (फसल के सभी पत्तों को गीला करने के लिए स्प्रे करें)",
      ja: "使用方法: 1 Lの水に0.25 ml、または25 Lのタンクに6.25 mlを使用します。播種後7-10日で1回目、稲の開花が始まる時期に2回目を散布します。（作物の葉全体を濡らすように散布します）",
      ko: "사용법: 물 1리터당 0.25ml 또는 25리터 탱크에 6.25ml 사용. 파종 후 7-10일에 1차 분무하고 벼가 개화하기 시작할 때 2차 분무합니다. (모든 작물 잎이 젖도록 분무합니다)",
      zh: "使用说明: 在1升水中混合0.25毫升或在25升水箱中混合6.25毫升。播种后7-10天进行第一次喷洒，当水稻开始开花时进行第二次喷洒。（喷洒以湿润所有作物叶片）"
    }, 
    ingredients: { kh: "24-Epibrassinolide: 0.01% w/w, សារធាតុផ្សំ: 99.99% w/w", en: "24-Epibrassinolide: 0.01% w/w, Additives: 99.99% w/w", vi: "24-Epibrassinolide: 0.01% w/w, Phụ gia: 99.99% w/w", ar: "24-إيبيبراسينوليد: 0.01٪ وزن / وزن، إضافات: 99.99٪ وزن / وزن", hi: "24-एपिब्रैसिनोलाइड: 0.01% w/w, योजक: 99.99% w/w", ja: "24-エピブラシノライド: 0.01% w/w、添加物: 99.99% w/w", ko: "24-에피브라시놀라이드: 0.01% w/w, 첨가제: 99.99% w/w", zh: "24-表芸苔素内酯: 0.01% w/w, 辅料: 99.99% w/w" }, 
    benefits: [
      { 
        kh: "ប្រាណូ 0.01SL ជួយឱ្យឫសវែង ដើមធំកាត់ប្រវែងថ្នាំង កករកូរធំ", 
        en: "BRANO 0.01SL helps grow long roots, large stems, shorten internodes, and large panicles.", 
        vi: "BRANO 0.01SL giúp rễ dài, thân to, rút ngắn đốt và đòng to.", 
        ar: "يساعد برانو 0.01SL على نمو جذور طويلة وسيقان كبيرة وتقصير العقد الداخلية والسنابل الكبيرة.", 
        hi: "ब्रानो 0.01SL लंबी जड़ें, बड़े तने, इंटर्नोड्स को छोटा करने और बड़े पैनिकल विकसित करने में मदद करता है।", 
        ja: "BRANO 0.01SLは、長い根、太い茎、節間の短縮、大きな穂の成長を助けます。", 
        ko: "브라노 0.01SL은 긴 뿌리, 큰 줄기, 절간 단축 및 큰 원추화서를 자라게 하는 데 도움이 됩니다.", 
        zh: "BRANO 0.01SL有助于生长长根、大茎，缩短节间并促进大穗生长。" 
      },
      { 
        kh: "ជំរុញការលូតលាស់ និងបង្កើនទិន្នផល", 
        en: "Stimulates growth and increases yield.", 
        vi: "Kích thích tăng trưởng và tăng năng suất.", 
        ar: "يحفز النمو ويزيد المحصول.", 
        hi: "विकास को उत्तेजित करता है और उपज बढ़ाता है।", 
        ja: "成長を促進し、収量を増加させます。", 
        ko: "성장을 촉진하고 수확량을 늘립니다.", 
        zh: "刺激生长并增加产量。" 
      },
      { 
        kh: "ជំរុញការបំបែកកោសិកា លូតលាស់លឿន និងជំនួយការដកដង្ហើម", 
        en: "Promotes cell division, fast growth, and assists respiration.", 
        vi: "Thúc đẩy quá trình phân chia tế bào, phát triển nhanh và hỗ trợ hô hấp.", 
        ar: "يعزز انقسام الخلايا والنمو السريع ويساعد على التنفس.", 
        hi: "कोशिका विभाजन, तेजी से विकास को बढ़ावा देता है और श्वसन में सहायता करता है।", 
        ja: "細胞分裂、急速な成長を促進し、呼吸を補助します。", 
        ko: "세포 분열, 빠른 성장을 촉진하고 호흡을 돕습니다.", 
        zh: "促进细胞分裂、快速生长，并辅助呼吸。" 
      },
      { 
        kh: "ជំនួយឱ្យរុក្ខជាតិរឹងមាំ កាត់បន្ថយជំងឺនិងសត្វល្អិត", 
        en: "Helps plants become strong, reducing diseases and insects.", 
        vi: "Giúp cây trồng khỏe mạnh, giảm thiểu sâu bệnh.", 
        ar: "يساعد النباتات على أن تصبح قوية، مما يقلل من الأمراض والحشرات.", 
        hi: "पौधों को मजबूत बनाने में मदद करता है, बीमारियों और कीड़ों को कम करता है।", 
        ja: "植物を丈夫にし、病気や昆虫を減らすのを助けます。", 
        ko: "식물을 튼튼하게 하고 질병과 곤충을 줄이는 데 도움이 됩니다.", 
        zh: "帮助植物变得强壮，减少病虫害。" 
      }
    ] 
  },
  { 
    id: "dam-black-lt", 
    name: { kh: "DAM BLACK-LT (ដាម ប្លេក-អិលធី)", en: "DAM BLACK-LT", vi: "DAM BLACK-LT", ar: "دام بلاك-إل تي", hi: "डैम ब्लैक-LT", ja: "ダム ブラック-LT", ko: "담 블랙-LT", zh: "DAM BLACK-LT" }, 
    image: "photo/BAO Dam Black-LT.png", 
    category: "fertilizer", 
    categoryKh: "ជីសរីរាង្គជីវសាស្រ្ត និងជីសរីរាង្គ", 
    usage: {
      kh: "របៀបប្រើប្រាស់: ស្រូវ ដំណាំហូបផ្លែ បាច ១២០-២០០ គ.ក្រ/ហ.ត។ កៅស៊ូ កាហ្វេ ស្វាយចន្ទី ម្រេច ដំឡូងមី បាច ០.១-០.២៥ គ.ក្រ/ដើម/លើក។ បន្លែ និងផ្កា បាច ៤០-៨០ គ.ក្រ/ហ.ត/លើក។ (អាចបាចផ្ទាល់ ឬលាយជាមួយជី NPK)",
      en: "Usage: Rice, fruit crops: Broadcast 120-200 kg/ha. Rubber, coffee, cashew, pepper, cassava: Broadcast 0.1-0.25 kg/tree/time. Vegetables and flowers: Broadcast 40-80 kg/ha/time. (Can be broadcast directly or mixed with NPK fertilizer)",
      vi: "Cách sử dụng: Lúa, cây ăn quả: Rải 120-200 kg/ha. Cao su, cà phê, điều, tiêu, sắn: Rải 0.1-0.25 kg/cây/lần. Rau và hoa: Rải 40-80 kg/ha/lần. (Có thể rải trực tiếp hoặc trộn với phân NPK)",
      ar: "الاستخدام: الأرز ومحاصيل الفاكهة: انثر 120-200 كجم / هكتار. المطاط والقهوة والكاجو والفلفل والكسافا: انثر 0.1-0.25 كجم / شجرة / مرة. الخضروات والزهور: انثر 40-80 كجم / هكتار / مرة. (يمكن نثره مباشرة أو مزجه مع سماد NPK)",
      hi: "उपयोग: चावल, फलों की फसलें: 120-200 किग्रा/हेक्टेयर फैलाएं। रबर, कॉफी, काजू, काली मिर्च, कसावा: 0.1-0.25 किग्रा/पेड़/बार फैलाएं। सब्जियां और फूल: 40-80 किग्रा/हेक्टेयर/बार फैलाएं। (सीधे फैलाया जा सकता है या एनपीके उर्वरक के साथ मिलाया जा सकता है)",
      ja: "使用方法: 稲、果樹: 120-200 kg/haを散布。ゴム、コーヒー、カシューナッツ、コショウ、キャッサバ: 1回につき0.1-0.25 kg/木を散布。野菜や花: 1回につき40-80 kg/haを散布。（直接散布するか、NPK肥料と混合できます）",
      ko: "사용법: 벼, 과일 작물: 120-200 kg/ha 살포. 고무, 커피, 캐슈넛, 후추, 카사바: 1회에 0.1-0.25 kg/나무 살포. 채소 및 꽃: 1회에 40-80 kg/ha 살포. (직접 살포하거나 NPK 비료와 혼합 가능)",
      zh: "使用说明: 水稻、水果作物：撒施120-200公斤/公顷。橡胶、咖啡、腰果、胡椒、木薯：每次撒施0.1-0.25公斤/树。蔬菜和花卉：每次撒施40-80公斤/公顷。（可直接撒施或与NPK肥料混合）"
    }, 
    ingredients: { kh: "N: 40.06%, Mg: 10%, pH H2O: 6%, សំណើម: 9%, HUMIC ACID: 2%", en: "N: 40.06%, Mg: 10%, pH H2O: 6%, Moisture: 9%, HUMIC ACID: 2%", vi: "N: 40.06%, Mg: 10%, pH H2O: 6%, Độ ẩm: 9%, HUMIC ACID: 2%", ar: "النيتروجين: 40.06٪، المغنيسيوم: 10٪، درجة الحموضة H2O: 6٪، الرطوبة: 9٪، حمض الدبالية: 2٪", hi: "N: 40.06%, Mg: 10%, pH H2O: 6%, नमी: 9%, ह्यूमिक एसिड: 2%", ja: "N: 40.06%、Mg: 10%、pH H2O: 6%、水分: 9%、フミン酸: 2%", ko: "N: 40.06%, Mg: 10%, pH H2O: 6%, 수분: 9%, 휴믹산: 2%", zh: "N: 40.06%, Mg: 10%, pH H2O: 6%, 湿度: 9%, 腐植酸: 2%" }, 
    benefits: [
      { 
        kh: "ដាម ប្លេក-អិលធី ដីមានជីជាតិ ឫសវែង ការពារការបាត់បង់ជីជាតិ", 
        en: "DAM BLACK-LT provides fertile soil, long roots, and prevents nutrient loss.", 
        vi: "DAM BLACK-LT cung cấp đất đai màu mỡ, rễ dài và ngăn ngừa thất thoát chất dinh dưỡng.", 
        ar: "يوفر دام بلاك-إل تي تربة خصبة وجذور طويلة ويمنع فقدان العناصر الغذائية.", 
        hi: "डैम ब्लैक-LT उपजाऊ मिट्टी, लंबी जड़ें प्रदान करता है और पोषक तत्वों के नुकसान को रोकता है。", 
        ja: "DAM BLACK-LTは肥沃な土壌と長い根を提供し、栄養素の損失を防ぎます。", 
        ko: "담 블랙-LT는 비옥한 토양, 긴 뿌리를 제공하고 영양 손실을 방지합니다.", 
        zh: "DAM BLACK-LT提供肥沃的土壤、长根，并防止养分流失。" 
      },
      { 
        kh: "ជាជីសរីរាង្គសម្បូរដោយសារធាតុសរីរាង្គមានប្រយោជន៍", 
        en: "It is an organic fertilizer rich in beneficial organic matter.", 
        vi: "Là loại phân bón hữu cơ giàu chất hữu cơ có lợi.", 
        ar: "هو سماد عضوي غني بالمواد العضوية المفيدة.", 
        hi: "यह लाभकारी कार्बनिक पदार्थों से भरपूर एक जैविक उर्वरक है।", 
        ja: "有益な有機物が豊富な有機肥料です。", 
        ko: "유익한 유기물이 풍부한 유기질 비료입니다.", 
        zh: "它是一种富含有益有机物质的有机肥料。" 
      },
      { 
        kh: "បន្សាបភាពអាស៊ីតនិងកាត់បន្ថយជាតិពុលនៃដី ដីមានសំណើម", 
        en: "Neutralizes acidity and reduces soil toxicity, keeps soil moist.", 
        vi: "Trung hòa độ axit và giảm độc tính của đất, giữ ẩm cho đất.", 
        ar: "يعادل الحموضة ويقلل من سمية التربة، ويحافظ على رطوبة التربة.", 
        hi: "अम्लता को बेअसर करता है और मिट्टी की विषाक्तता को कम करता है, मिट्टी को नम रखता है।", 
        ja: "酸性度を中和し、土壌の毒性を減らし、土壌の水分を保ちます。", 
        ko: "산도를 중화하고 토양 독성을 줄여 토양을 촉촉하게 유지합니다.", 
        zh: "中和酸度并降低土壤毒性，保持土壤湿润。" 
      },
      { 
        kh: "ជួយឱ្យដីធូរ មានខ្យល់ កាត់បន្ថយការហូរច្រោះ ជួយប្រព័ន្ធឫសលូតលាស់ល្អ", 
        en: "Helps loosen soil, aerate, reduce erosion, and helps the root system grow well.", 
        vi: "Giúp làm tơi xốp đất, thoáng khí, giảm xói mòn và giúp hệ rễ phát triển tốt.", 
        ar: "يساعد على فك التربة وتهويتها وتقليل التآكل ويساعد نظام الجذر على النمو بشكل جيد.", 
        hi: "मिट्टी को ढीला करने, हवादार बनाने, कटाव को कम करने में मदद करता है और जड़ प्रणाली को अच्छी तरह से बढ़ने में मदद करता है।", 
        ja: "土壌をほぐし、空気を入れ、侵食を減らし、根系がよく成長するのを助けます。", 
        ko: "토양을 풀고 공기를 통하게 하며 침식을 줄이고 뿌리 시스템이 잘 자라도록 돕습니다.", 
        zh: "有助于疏松土壤、通气、减少侵蚀，并帮助根系良好生长。" 
      }
    ] 
  },
  { 
    id: "npk-20-10-10", 
    name: { kh: "NPK AMINO 20-10-10+TE (ជីអិន ប៉េ កា 20-10-10+TE)", en: "NPK AMINO 20-10-10+TE", vi: "NPK AMINO 20-10-10+TE", ar: "NPK أمينو 20-10-10+TE", hi: "NPK अमीनो 20-10-10+TE", ja: "NPK アミノ 20-10-10+TE", ko: "NPK 아미노 20-10-10+TE", zh: "NPK AMINO 20-10-10+TE" }, 
    image: "photo/NPK -20-10-10.png", 
    category: "fertilizer", 
    categoryKh: "ជីសរីរាង្គជីវសាស្រ្ត និងជីសរីរាង្គ", 
    usage: {
      kh: "របៀបប្រើប្រាស់: ស្រូវ លើកទី១ (១០-១៥ ថ្ងៃក្រោយសាប) បាច ១០០-១៥០ គ.ក្រ/ហ.ត, លើកទី២ (២០-២៥ ថ្ងៃក្រោយសាប) បាច ១៥០-២០០ គ.ក្រ/ហ.ត។ បន្លែគ្រប់ប្រភេទ ប្រើ ៣-៤ ដង/រដូវ បាច ៨០-១០០ គ.ក្រ/ហ.ត/ដង។ ដំណាំហូបផ្លែ និងឧស្សាហកម្ម ប្រើ ១-២ គ.ក្រ/ដើម/លើក។",
      en: "Usage: Rice: 1st time (10-15 days after sowing) broadcast 100-150 kg/ha, 2nd time (20-25 days after sowing) broadcast 150-200 kg/ha. All vegetables: Use 3-4 times/season, broadcast 80-100 kg/ha/time. Fruit and industrial crops: Use 1-2 kg/tree/time.",
      vi: "Cách sử dụng: Lúa: Lần 1 (10-15 ngày sau sạ) rải 100-150 kg/ha, lần 2 (20-25 ngày sau sạ) rải 150-200 kg/ha. Các loại rau: Dùng 3-4 lần/vụ, rải 80-100 kg/ha/lần. Cây ăn quả và cây công nghiệp: Dùng 1-2 kg/cây/lần.",
      ar: "الاستخدام: الأرز: المرة الأولى (بعد 10-15 يومًا من البذر) انثر 100-150 كجم / هكتار، المرة الثانية (بعد 20-25 يومًا من البذر) انثر 150-200 كجم / هكتار. جميع الخضروات: استخدم 3-4 مرات / موسم، انثر 80-100 كجم / هكتار / مرة. الفاكهة والمحاصيل الصناعية: استخدم 1-2 كجم / شجرة / مرة.",
      hi: "उपयोग: चावल: पहली बार (बुवाई के 10-15 दिन बाद) 100-150 किग्रा/हेक्टेयर फैलाएं, दूसरी बार (बुवाई के 20-25 दिन बाद) 150-200 किग्रा/हेक्टेयर फैलाएं। सभी सब्जियां: 3-4 बार/सीजन उपयोग करें, 80-100 किग्रा/हेक्टेयर/बार फैलाएं। फल और औद्योगिक फसलें: 1-2 किग्रा/पेड़/बार उपयोग करें।",
      ja: "使用方法: 稲: 1回目（播種後10-15日）に100-150 kg/haを散布、2回目（播種後20-25日）に150-200 kg/haを散布。すべての野菜: 1シーズンに3-4回使用し、1回に80-100 kg/haを散布。果樹および工業用作物: 1回に1-2 kg/木を使用。",
      ko: "사용법: 벼: 1차(파종 후 10-15일) 100-150kg/ha 살포, 2차(파종 후 20-25일) 150-200kg/ha 살포. 모든 채소: 한 시즌에 3-4번 사용, 1회에 80-100kg/ha 살포. 과수 및 산업용 작물: 1회에 1-2kg/나무 사용.",
      zh: "使用说明: 水稻：第一次（播种后10-15天）撒施100-150公斤/公顷，第二次（播种后20-25天）撒施150-200公斤/公顷。所有蔬菜：每季使用3-4次，每次撒施80-100公斤/公顷。水果和经济作物：每次使用1-2公斤/树。"
    }, 
    ingredients: { kh: "N: 20%, P2O5: 10%, K2O: 10%, សំណើម: 5%, TE: B: 330ppm, Zn: 180ppm, Cu: 100ppm", en: "N: 20%, P2O5: 10%, K2O: 10%, Moisture: 5%, TE: B: 330ppm, Zn: 180ppm, Cu: 100ppm", vi: "N: 20%, P2O5: 10%, K2O: 10%, Độ ẩm: 5%, TE: B: 330ppm, Zn: 180ppm, Cu: 100ppm", ar: "النيتروجين: 20٪، الفوسفور (P2O5): 10٪، البوتاسيوم (K2O): 10٪، الرطوبة: 5٪، العناصر النزرة: البورون: 330 جزء في المليون، الزنك: 180 جزء في المليون، النحاس: 100 جزء في المليون", hi: "N: 20%, P2O5: 10%, K2O: 10%, नमी: 5%, TE: B: 330ppm, Zn: 180ppm, Cu: 100ppm", ja: "N: 20%、P2O5: 10%、K2O: 10%、水分: 5%、TE: B: 330ppm、Zn: 180ppm、Cu: 100ppm", ko: "N: 20%, P2O5: 10%, K2O: 10%, 수분: 5%, TE: B: 330ppm, Zn: 180ppm, Cu: 100ppm", zh: "N: 20%, P2O5: 10%, K2O: 10%, 湿度: 5%, TE: B: 330ppm, Zn: 180ppm, Cu: 100ppm" }, 
    benefits: [
      { 
        kh: "មានតុល្យភាព N, P, K និង TE ជាធាតុរួមផ្សំដែលជួយឱ្យរុក្ខជាតិលូតលាស់លឿន", 
        en: "Balanced N, P, K and TE as combined elements that help plants grow fast.", 
        vi: "Cân bằng N, P, K và TE như các yếu tố kết hợp giúp cây phát triển nhanh.", 
        ar: "توازن النيتروجين والفوسفور والبوتاسيوم والعناصر النزرة كعناصر مدمجة تساعد النباتات على النمو بسرعة.", 
        hi: "संतुलित N, P, K और TE संयुक्त तत्वों के रूप में जो पौधों को तेजी से बढ़ने में मदद करते हैं।", 
        ja: "植物の急速な成長を助ける複合要素としてのバランスの取れたN、P、K、TE。", 
        ko: "식물이 빨리 자라는 데 도움이 되는 결합 요소로서의 균형 잡힌 N, P, K 및 TE.", 
        zh: "平衡的N、P、K和TE作为组合元素帮助植物快速生长。" 
      },
      { 
        kh: "ជួយឱ្យស្លឹករុក្ខជាតិមានពណ៌បៃតងស្រស់ ដើមធំរឹងមាំ បង្កើនការសំយោគពន្លឺ", 
        en: "Helps plant leaves have a fresh green color, big strong stems, and increases photosynthesis.", 
        vi: "Giúp lá cây có màu xanh tươi, thân to khỏe và tăng cường quang hợp.", 
        ar: "يساعد أوراق النبات على أن يكون لها لون أخضر نقي، وسيقان قوية كبيرة، ويزيد من عملية التمثيل الضوئي.", 
        hi: "पौधे की पत्तियों को ताज़ा हरा रंग देने, बड़े मजबूत तनों और प्रकाश संश्लेषण को बढ़ाने में मदद करता है।", 
        ja: "植物の葉を鮮やかな緑色にし、大きくて丈夫な茎にし、光合成を高めるのを助けます。", 
        ko: "식물 잎이 신선한 녹색을 띠고 크고 튼튼한 줄기를 가지며 광합성을 증가시키는 데 도움이 됩니다.", 
        zh: "帮助植物叶片保持鲜绿色，茎干粗壮，并增加光合作用。" 
      },
      { 
        kh: "ធ្វើឱ្យប្រព័ន្ធប្ញសដុះលូតលាស់ល្អ កាត់បន្ថយការបាត់បង់ជី", 
        en: "Makes the root system grow well, reducing fertilizer loss.", 
        vi: "Làm cho hệ rễ phát triển tốt, giảm thất thoát phân bón.", 
        ar: "يجعل نظام الجذر ينمو جيدًا، مما يقلل من فقدان الأسمدة.", 
        hi: "जड़ प्रणाली को अच्छी तरह से विकसित करता है, उर्वरक के नुकसान को कम करता है।", 
        ja: "根系をよく成長させ、肥料の損失を減らします。", 
        ko: "뿌리 시스템을 잘 자라게 하여 비료 손실을 줄입니다.", 
        zh: "使根系良好生长，减少肥料流失。" 
      },
      { 
        kh: "បង្កើនទិន្នផល គុណភាពកសិផល និងភាពធន់ទ្រាំនឹងអាកាសធាតុប្រែប្រួល", 
        en: "Increases yield, agricultural product quality, and resilience to climate change.", 
        vi: "Tăng năng suất, chất lượng nông sản và khả năng chống chịu biến đổi khí hậu.", 
        ar: "يزيد المحصول وجودة المنتجات الزراعية والقدرة على الصمود في وجه تغير المناخ.", 
        hi: "उपज, कृषि उत्पाद की गुणवत्ता और जलवायु परिवर्तन के प्रति लचीलापन बढ़ाता है।", 
        ja: "収量、農産物の品質、気候変動への回復力を高めます。", 
        ko: "수확량, 농산물 품질 및 기후 변화에 대한 탄력성을 높입니다.", 
        zh: "提高产量、农产品质量和对气候变化的适应能力。" 
      }
    ] 
  },
  { 
    id: "bao-urea-black", 
    name: { kh: "BAO Urea Black", en: "BAO Urea Black", vi: "BAO Urea Black", ar: "BAO Urea Black", hi: "BAO Urea Black", ja: "BAO Urea Black", ko: "BAO Urea Black", zh: "BAO Urea Black" }, 
    image: "photo/BAO Urea Black.png", 
    category: "fertilizer", 
    categoryKh: "ជីសរីរាង្គជីវសាស្រ្ត និងជីសរីរាង្គ", 
    usage: { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" }, 
    ingredients: { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" }, 
    benefits: [ { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" } ] 
  },
  { 
    id: "vian-5-2-2", 
    name: { kh: "VIAN 5-2-2 (រ៉ាវ/ហូ)", en: "VIAN 5-2-2", vi: "VIAN 5-2-2", ar: "VIAN 5-2-2", hi: "VIAN 5-2-2", ja: "VIAN 5-2-2", ko: "VIAN 5-2-2", zh: "VIAN 5-2-2" }, 
    image: "photo/BAO VIAN-5-2-2 RAU_HOA.png", 
    category: "fertilizer", 
    categoryKh: "ជីសរីរាង្គជីវសាស្រ្ត និងជីសរីរាង្គ", 
    usage: { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" }, 
    ingredients: { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" }, 
    benefits: [ { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" } ] 
  },
  { 
    id: "vian-6-4-2", 
    name: { kh: "VIAN 6-4-2 (ស្រូវ/ពោត)", en: "VIAN 6-4-2", vi: "VIAN 6-4-2", ar: "VIAN 6-4-2", hi: "VIAN 6-4-2", ja: "VIAN 6-4-2", ko: "VIAN 6-4-2", zh: "VIAN 6-4-2" }, 
    image: "photo/BAO VIAN-6-4-2 LUA_BAP.png", 
    category: "fertilizer", 
    categoryKh: "ជីសរីរាង្គជីវសាស្រ្ត និងជីសរីរាង្គ", 
    usage: { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" }, 
    ingredients: { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" }, 
    benefits: [ { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" } ] 
  },
  { 
    id: "silimax", 
    name: { kh: "SILIMAX", en: "SILIMAX", vi: "SILIMAX", ar: "SILIMAX", hi: "SILIMAX", ja: "SILIMAX", ko: "SILIMAX", zh: "SILIMAX" }, 
    image: "photo/SILIMAX.png", 
    category: "fertilizer", 
    categoryKh: "ជីសរីរាង្គជីវសាស្រ្ត និងជីសរីរាង្គ", 
    usage: { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" }, 
    ingredients: { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" }, 
    benefits: [ { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" } ] 
  },

  // VI. គ្រាប់ពូជ (Seeds)
  { 
    id: "ltc-loc-troi-28", 
    name: { kh: "LTC-LOC TROI 28", en: "LTC-LOC TROI 28", vi: "LTC-LỘC TRỜI 28", ar: "إل تي سي-لوك تروي 28", hi: "LTC-लोच त्रोई 28", ja: "LTC-ロックトロイ 28", ko: "LTC-록 트로이 28", zh: "LTC-禄天 28" }, 
    image: "photo/LTC-LOC TROI 28.png", 
    category: "seed", 
    categoryKh: "គ្រាប់ពូជ", 
    usage: { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" }, 
    ingredients: { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" }, 
    benefits: [ { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" } ] 
  },
  { 
    id: "ltc-nang-hoa-9", 
    name: { kh: "LTC-NANG HOA 9", en: "LTC-NANG HOA 9", vi: "LTC-NÀNG HOA 9", ar: "إل تي سي-نانغ هوا 9", hi: "LTC-नांग होआ 9", ja: "LTC-ナンホア 9", ko: "LTC-낭 호아 9", zh: "LTC-娘花 9" }, 
    image: "photo/LTC-NANG HOA9.png", 
    category: "seed", 
    categoryKh: "គ្រាប់ពូជ", 
    usage: { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" }, 
    ingredients: { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" }, 
    benefits: [ { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" } ] 
  },
  { 
    id: "ir50404-nc", 
    name: { kh: "IR50404 NC", en: "IR50404 NC", vi: "IR50404 NC", ar: "IR50404 NC", hi: "IR50404 NC", ja: "IR50404 NC", ko: "IR50404 NC", zh: "IR50404 NC" }, 
    image: "photo/3D - IR50404 NC.png", 
    category: "seed", 
    categoryKh: "គ្រាប់ពូជ", 
    usage: { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" }, 
    ingredients: { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" }, 
    benefits: [ { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" } ] 
  },
  { 
    id: "ir50404-xn1", 
    name: { kh: "IR50404 XN1", en: "IR50404 XN1", vi: "IR50404 XN1", ar: "IR50404 XN1", hi: "IR50404 XN1", ja: "IR50404 XN1", ko: "IR50404 XN1", zh: "IR50404 XN1" }, 
    image: "photo/3D - IR50404 XN1.png", 
    category: "seed", 
    categoryKh: "គ្រាប់ពូជ", 
    usage: { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" }, 
    ingredients: { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" }, 
    benefits: [ { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" } ] 
  },
  { 
    id: "bap-nu-1kg", 
    name: { kh: "BAP NU 1kg", en: "BAP NU 1kg", vi: "BẮP NỮ 1kg", ar: "باب نو 1 كجم", hi: "बैप नू 1kg", ja: "バップヌー 1kg", ko: "밥 누 1kg", zh: "玉米 1kg" }, 
    image: "photo/3D - LTC - BAP NU - 1kg.png", 
    category: "seed", 
    categoryKh: "គ្រាប់ពូជ", 
    usage: { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" }, 
    ingredients: { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" }, 
    benefits: [ { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" } ] 
  },
  { 
    id: "bap-nu-20kg", 
    name: { kh: "BAP NU 20kg", en: "BAP NU 20kg", vi: "BẮP NỮ 20kg", ar: "باب نو 20 كجم", hi: "बैप नू 20kg", ja: "バップヌー 20kg", ko: "밥 누 20kg", zh: "玉米 20kg" }, 
    image: "photo/3D - LTC - BAP NU - 20kg.png", 
    category: "seed", 
    categoryKh: "គ្រាប់ពូជ", 
    usage: { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" }, 
    ingredients: { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" }, 
    benefits: [ { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" } ] 
  },
  { 
    id: "lt11", 
    name: { kh: "LT11", en: "LT11", vi: "LT11", ar: "LT11", hi: "LT11", ja: "LT11", ko: "LT11", zh: "LT11" }, 
    image: "photo/3D - LTC - LT11 - mat truoc.png", 
    category: "seed", 
    categoryKh: "គ្រាប់ពូជ", 
    usage: { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" }, 
    ingredients: { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" }, 
    benefits: [ { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" } ] 
  },
  { 
    id: "lvn10-1kg", 
    name: { kh: "LVN10 1kg", en: "LVN10 1kg", vi: "LVN10 1kg", ar: "LVN10 1 كجم", hi: "LVN10 1kg", ja: "LVN10 1kg", ko: "LVN10 1kg", zh: "LVN10 1kg" }, 
    image: "photo/3D - LTC - LVN10 - 1kg.png", 
    category: "seed", 
    categoryKh: "គ្រាប់ពូជ", 
    usage: { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" }, 
    ingredients: { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" }, 
    benefits: [ { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ رہا है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" } ] 
  },
  { 
    id: "lvn10-20kg", 
    name: { kh: "LVN10 20kg", en: "LVN10 20kg", vi: "LVN10 20kg", ar: "LVN10 20 كجم", hi: "LVN10 20kg", ja: "LVN10 20kg", ko: "LVN10 20kg", zh: "LVN10 20kg" }, 
    image: "photo/3D - LTC - LVN10 - 20kg.png", 
    category: "seed", 
    categoryKh: "គ្រាប់ពូជ", 
    usage: { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" }, 
    ingredients: { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" }, 
    benefits: [ { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" } ] 
  },
  { 
    id: "om5451-nc", 
    name: { kh: "OM5451 NC", en: "OM5451 NC", vi: "OM5451 NC", ar: "OM5451 NC", hi: "OM5451 NC", ja: "OM5451 NC", ko: "OM5451 NC", zh: "OM5451 NC" }, 
    image: "photo/3D - OM5451 NC.png", 
    category: "seed", 
    categoryKh: "គ្រាប់ពូជ", 
    usage: { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" }, 
    ingredients: { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" }, 
    benefits: [ { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" } ] 
  },
  { 
    id: "om5451-xn1", 
    name: { kh: "OM5451 XN1", en: "OM5451 XN1", vi: "OM5451 XN1", ar: "OM5451 XN1", hi: "OM5451 XN1", ja: "OM5451 XN1", ko: "OM5451 XN1", zh: "OM5451 XN1" }, 
    image: "photo/3D - OM5451 XN1.png", 
    category: "seed", 
    categoryKh: "គ្រាប់ពូជ", 
    usage: { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" }, 
    ingredients: { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" }, 
    benefits: [ { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" } ] 
  },
  { 
    id: "dx208-20kg", 
    name: { kh: "DX208 20kg", en: "DX208 20kg", vi: "ĐX208 20kg", ar: "DX208 20 كجم", hi: "DX208 20kg", ja: "DX208 20kg", ko: "DX208 20kg", zh: "DX208 20kg" }, 
    image: "photo/LTC_DX208-LTS MAT TRUOC - 20kg.png", 
    category: "seed", 
    categoryKh: "គ្រាប់ពូជ", 
    usage: { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" }, 
    ingredients: { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" }, 
    benefits: [ { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" } ] 
  },
  { 
    id: "dx208-1kg", 
    name: { kh: "DX208 1kg", en: "DX208 1kg", vi: "ĐX208 1kg", ar: "DX208 1 كجم", hi: "DX208 1kg", ja: "DX208 1kg", ko: "DX208 1kg", zh: "DX208 1kg" }, 
    image: "photo/LTC_DX208-LTS mat truoc - tui 1kg.png", 
    category: "seed", 
    categoryKh: "គ្រាប់ពូជ", 
    usage: { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" }, 
    ingredients: { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" }, 
    benefits: [ { kh: "ឆាប់ៗនេះ", en: "Coming soon", vi: "Sắp ra mắt", ar: "قريباً", hi: "जल्द आ रहा है", ja: "近日公開", ko: "곧 출시 예정", zh: "即将推出" } ] 
  },

  // VII. ផ្សេងៗ (Special Products)
];

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export const categories: Category[] = [
  { id: "all", name: "ទាំងអស់", icon: "layout-grid" },
  { id: "molluscicide", name: "ថ្នាំកម្ចាត់ខ្យងមាស", icon: "snail" },
  { id: "herbicide", name: "ថ្នាំកម្ចាត់ស្មៅ", icon: "leaf" },
  { id: "insecticide", name: "ថ្នាំកម្ចាត់សត្វល្អិត", icon: "bug" },
  { id: "fungicide", name: "ថ្នាំកម្ចាត់ជំងឺ", icon: "shield-alert" },
  { id: "fertilizer", name: "ជីសរីរាង្គជីវសាស្រ្ត និងជីសរីរាង្គ", icon: "flask-conical" },
  { id: "seed", name: "គ្រាប់ពូជ", icon: "wheat" },
  { id: "special", name: "ផលិតផលពិសេស", icon: "star" },
];
