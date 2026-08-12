// Official WorldSkills Mobile Applications Development (Skill 08) Data
// Source Document: WSC2026_TD08_en (Technical Description)

export const OFFICIAL_TD_INFO = {
  skillName: "Mobile Applications Development",
  skillNumber: "Skill 08",
  documentCode: "WSC2026_TD08_en",
  lastUpdated: "05.03.2026",
  ageLimit: "حداکثر ۲۲ سال در سال برگزاری رقابت‌ها (Section 1.1.4)",
  teamFormat: "انفرادی (Single Competitor - Section 1.1.3)",
  totalTestDuration: "۱۸ ساعت (در قالب ۴ ماژول تخصصی)",
  contactEmail: "contact@skill08.ir",
  scopeDescription: `توسعه برنامه‌های کاربردی موبایل شامل تمامی مراحل نیازسنجی و تحلیل سناریو، طراحی تفکر گام به گام (Design Thinking)، طراحی رابط کاربری (UI/UX)، ساخت معماری نرم‌افزار، کدنویسی نیتیو و کراس‌پلتفرم، اتصال به وب‌سرویس‌های RESTful، پیاده‌سازی پایگاه داده محلی، مدیریت امنیت داده‌ها و نویسندگی تست‌های اتوماتیک (Unit & UI Testing) در محیط آفلاین است.`
};

export const WSOS_SECTIONS = [
  {
    section: 1,
    title: "سازماندهی و مدیریت کار",
    englishTitle: "Work organization and management",
    weighting: 8,
    knowledge: [
      "اصول، مقررات و استانداردهای مربوط به محیط کار ایمن",
      "حفظ اصول اخلاقی و رازداری اطلاعات مشتریان و کاربران",
      "برنامه‌ریزی، زمان‌بندی و اولویت‌بندی وظایف توسعه",
      "خودارزیابی مداوم و ارتقاء مهارت‌های حرفه‌ای"
    ]
  },
  {
    section: 2,
    title: "مهارت‌های ارتباطی و بین‌فردی",
    englishTitle: "Communication and interpersonal skills",
    weighting: 7,
    knowledge: [
      "تکنولوژی‌ها و اصول استخراج دقیق نیازمندی‌های کارفرما",
      "مستندسازی استاندارد کدهای نرم‌افزاری و پروتکل‌های فنی",
      "تکنولوژی‌های ارائه راه‌حل‌های نرم‌افزاری نهایی به مشتریان"
    ]
  },
  {
    section: 3,
    title: "توسعه پایدار و کدنویسی سبز",
    englishTitle: "Sustainable Practice",
    weighting: 5,
    knowledge: [
      "نوشتن کد بهینه و کاهش مصرف انرژی و منابع سیستم",
      "کاهش اثرات دی‌اکسید کربن ناشی از پردازش‌های سنگین",
      "رعایت قوانین حریم خصوصی، امنیت داده‌ها و دسترس‌پذیری (Accessibility)",
      "مدیریت چرخه حیات نرم‌افزار جهت نگهداری‌پذیری بلندمدت"
    ]
  },
  {
    section: 4,
    title: "برنامه‌ریزی اولیه، طراحی و چارچوب تست",
    englishTitle: "Initial planning, design, and test framework",
    weighting: 25,
    knowledge: [
      "شناخت ویژگی‌های پلتفرم‌های توسعه (iOS, Android)",
      "اصول فرآیندهای Design Thinking و طراحی Wireframe",
      "طراحی رابط کاربری (UI) و تجربه کاربری (UX) در Figma / Adobe XD",
      "طراحی سناریوها و فریم‌ورک‌های تست نرم‌افزار (Test Plans)"
    ]
  },
  {
    section: 5,
    title: "برنامه‌ریزی معماری سیستم‌ها",
    englishTitle: "Systems architecture planning",
    weighting: 15,
    knowledge: [
      "اصول ساخت معماری‌های نرم‌افزاری و الگوی Clean Architecture",
      "شناخت مفاهیم Cross-Platform و فریم‌ورک Flutter",
      "طراحی پایگاه داده محلی (SQL / Room / CoreData)",
      "طراحی RESTful API، فرمت‌های JSON/XML و الگوی Repository"
    ]
  },
  {
    section: 6,
    title: "پیاده‌سازی و توسعه محصول",
    englishTitle: "Implementation and product development",
    weighting: 30,
    knowledge: [
      "پیاده‌سازی کد نیتیو بر اساس استانداردهای Android و iOS",
      "استفاده از سخت‌افزارهای دستگاه (GPS، دوربین، شتاب‌سنج، بلوتوث)",
      "کدنویسی الگوریتم‌ها، ساختار داده‌ها و انیمیشن‌های تعاملی",
      "رمزنگاری داده‌ها، امضای دیجیتال و ایمن‌سازی ارتباطات کلاینت-سرور"
    ]
  },
  {
    section: 7,
    title: "تست محصول نهایی، اشکال‌زدایی و بهینه‌سازی",
    englishTitle: "Final product tests, troubleshooting, and optimization",
    weighting: 10,
    knowledge: [
      "ارزیابی کارایی و کارآمدی برنامه بر اساس سناریوی آزمون",
      "تحلیل نتایج تست‌ها و اشکال‌زدایی (Debugging)",
      "بهینه‌سازی مصرف حافظه RAM، باتری و سرعت پاسخگویی"
    ]
  }
];

export const OFFICIAL_MODULES = [
  {
    id: "module-a",
    letter: "A",
    title: "قابلیت‌ها و سرویس‌ها (Functionality)",
    englishTitle: "Module A - Functionality",
    duration: "۵ ساعت",
    device: "شبیه‌ساز یا دستگاه واقعی (Emulator / Real Device)",
    summary: "دریافت و تحلیل سناریوی مسئله، فراخوانی داده‌های RESTful API، تحلیل داده‌ها و استفاده از قابلیت‌های سیستم‌عامل دستگاه.",
    tasks: [
      "پیاده‌سازی اتصال به RESTful API و دریافت داده‌های JSON",
      "تحلیل داده‌ها و پردازش الگوریتم‌های مورد نیاز مسئله",
      "استفاده از سیستم‌های جانبی دستگاه (سنسورها، لوکیشن، ذخیره‌ساز)",
      "مدیریت وضعیت‌های شبکه و خطاها"
    ]
  },
  {
    id: "module-b",
    letter: "B",
    title: "طراحی رابط و تجربه کاربری (Design)",
    englishTitle: "Module B - Design",
    duration: "۵ ساعت",
    device: "Figma (همراه با Adobe XD به عنوان پشتیبان)",
    summary: "بررسی Wireframeها و نیازمندی‌های طرح، بهینه‌سازی رابط کاربری و خروجی فایل‌های طراحی تعاملی با عملکرد کامل.",
    tasks: [
      "بررسی دقیق Wireframeهای ارائه شده در آزمون",
      "طراحی UI/UX کامپوننت‌ها منطبق بر Material 3 یا iOS HIG",
      "ساخت پروتوتایپ تعاملی تعاملی با قابلیت کلیک و انتقال",
      "خروجی فایل‌های طراحی استاندارد"
    ]
  },
  {
    id: "module-c",
    letter: "C",
    title: "پیاده‌سازی طرح و انیمیشن‌ها (Implement)",
    englishTitle: "Module C - Implement",
    duration: "۵ ساعت",
    device: "شبیه‌ساز یا دستگاه واقعی (Emulator / Real Device)",
    summary: "پیاده‌سازی دقیق جزئیات لایوت از روی نمونه‌های اولیه و ویدیوهای مرجع، همراه با انیمیشن‌های تعاملی متناظر.",
    tasks: [
      "تطابق دقیق ۱۰۰٪ کدهای UI با لایوت‌های گرافیکی مرجع",
      "پیاده‌سازی انیمیشن‌های تعاملی ۲D و انتقال صفحات",
      "رعایت دقیق گریدها، فاصله‌ها و رنگ‌بندی استاندارد",
      "تست پاسخگویی در رزولوشن‌ها و دستگاه‌های مختلف"
    ]
  },
  {
    id: "module-d",
    letter: "D",
    title: "توسعه منطق و تست اتوماتیک (Development & Testing)",
    englishTitle: "Module D - Development and testing",
    duration: "۳ ساعت",
    device: "شبیه‌ساز یا دستگاه واقعی (Emulator / Real Device)",
    summary: "توسعه منطق اصلی عملکرد اپلیکیشن و نویسندگی اسکریپت‌های تست اتوماتیک جهت اجرای خودکار برنامه.",
    tasks: [
      "کدنویسی منطق تجاری اصلی (Business Logic)",
      "نویسندگی تست‌های واحد اتوماتیک (Unit Test Scripts)",
      "نویسندگی تست‌های UI و سناریوهای کاربری",
      "اجرا و گزارش‌گیری خودکار تست‌ها"
    ]
  }
];

export const ASSESSMENT_RULES = {
  measurement: {
    title: "ارزیابی کمی و عینی (Measurement)",
    description: "ارزیابی بنچ‌مارک‌های مشخص با نمره کامل یا صفر. هیچ نمره حد وسطی تعلق نمی‌گیرد مگر در بنچ‌مارک‌های خاص تعریف شده. ثبت نمرات از طریق سیستم CIS انجام می‌شود."
  },
  judgement: {
    title: "ارزیابی توصیفی و کیفی (Judgement)",
    description: "ارزیابی بر اساس مقیاس ۰ تا ۳ توسط ۳ داور رسمی به صورت همزمان انجام می‌گیرد:",
    scale: [
      { score: "0", label: "پایین‌تر از استاندارد صنعت (Below industry standard)" },
      { score: "1", label: "منطبق با استاندارد صنعت (Meets industry standard)" },
      { score: "2", label: "فراتر از استاندارد صنعت در موارد خاص (Exceeds industry standard)" },
      { score: "3", label: "عالی و کاملاً فوق‌العاده (Wholly exceeds industry standard / Excellent)" }
    ]
  }
};

export const OFFICIAL_RULES = [
  { title: "محیط آفلاین (Offline Environment)", desc: "تمامی پودمان‌ها در محیط کاملاً آفلاین برگزار می‌شوند. دسترسی به اینترنت تنها در ایستگاه مشترک (۲ بار در روز، هر بار ۱۰ دقیقه) مجاز است." },
  { title: "تجهیزات ممنوعه (Prohibited Equipment)", desc: "ورود هرگونه فلش USB، لپ‌تاپ شخصی، گوشی تلفن همراه، دوربین و یادداشت به کارگاه مسابقه اکیداً ممنوع است." },
  { title: "تجهیزات مجاز متسابق (Competitor Equipment)", desc: "متسابقین تنها مجاز به آوردن کیبورد سیم‌دار و موس سیم‌دار شخصی در روز آشنایی (Familiarization Day) هستند." },
  { title: "قوانین فایل‌های صوتی (Music Policy)", desc: "متسابقین مجاز به آوردن حداکثر ۲۰ قطعه موسیقی بدون ویرایش (MP3) قبل از روز C-10 جهت بارگذاری در سیستم هستند." }
];

export const COMPETITION_STAGES_IRAN = [
  { stage: "۰۱", title: "آزمون ورودی و مرحله آموزشگاهی", time: "مهر و آبان", desc: "سنجش دانش نظری و آمادگی اولیه متسابقین زیر ۲۲ سال." },
  { stage: "۰۲", title: "مسابقات استانی (۳۱ استان)", time: "آذر و دی", desc: "رقابت عملی ۷ ساعته در مراکز معین استان‌ها بر اساس پروژه نمونه." },
  { stage: "۰۳", title: "مسابقات ملی مهارت (تهران)", time: "اردیبهشت", desc: "رقابت ۱۸ ساعته ۴ پودمان عملی در ۳ روز فشرده." },
  { stage: "۰۴", title: "اردوی آماده‌سازی تیم ملی", time: "خرداد تا شهریور", desc: "تمرینات شبانه‌روزی و شبیه‌سازی تست پروژه‌های بین‌المللی." },
  { stage: "۰۵", title: "مسابقات جهانی WorldSkills", time: "پاییز ۲۰۲۶", desc: "اعزام نماینده شایسته ایران به رقابت‌های جهانی." }
];
