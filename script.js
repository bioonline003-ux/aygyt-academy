
/* AYGYT ACADEMY - MULTILINGUAL WEBSITE */

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-menu");

// MOBILE MENU
if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("active");
    });

    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.addEventListener("click", () => {
            navigation.classList.remove("active");
        });
    });
}

// TRANSLATIONS
const translations = {
    en: {
        nav: ["Home", "About Us", "Competitions", "Conferences", "Partnerships", "News", "Contact"],
        slogan: ["Take Your", "Step", "Decisively"],
        eyebrow: "INTERNATIONAL ACADEMIC PLATFORM",
        heroTitle: "AYGYT ACADEMY",
        heroSubtitle: 'Empowering the Next Generation of <span>Scientific Leaders</span>',
        heroText: "Connecting talented minds through international olympiads, academic competitions, conferences and scientific innovation.",
        heroButtons: ["Explore Competitions", "Discover Our Mission"],
        aboutLabel: "WHO WE ARE",
        aboutTitle: "About AYGYT ACADEMY",
        aboutText: "AYGYT ACADEMY is an emerging academic initiative dedicated to promoting education, scientific research and international collaboration. We aim to create opportunities for students, young researchers and educators worldwide.",
        competitionLabel: "DISCOVER YOUR POTENTIAL",
        competitionTitle: "International Competitions",
        competitionIntro: "Explore opportunities to demonstrate your knowledge, creativity and scientific abilities.",
        competitionCards: [
            ["Biology & Ecology", "Discover life sciences, biodiversity and environmental innovation."],
            ["STEM & Technology", "Explore artificial intelligence, engineering and technology."],
            ["Chemistry & Physics", "Challenge your knowledge through scientific experiments and theories."],
            ["Scientific Projects", "Present innovative research and original scientific ideas."]
        ],
        learnMore: "Learn More →",
        conferenceLabel: "CONNECT • DISCOVER • INNOVATE",
        conferenceTitle: "Conferences & Events",
        conferenceIntro: "Bringing together young researchers, students and academic professionals to exchange knowledge, share discoveries and inspire innovation.",
        conferenceCards: [
            ["RESEARCH", "Scientific Conferences", "Present research findings, exchange ideas and explore scientific discoveries."],
            ["EDUCATION", "Academic Seminars", "Learn from experienced educators, researchers and international experts."],
            ["INNOVATION", "Innovation Forums", "Discover new technologies, creative ideas and solutions for tomorrow."]
        ],
        conferenceBottom: "Knowledge connects the world.",
        participant: "Become a Participant →",
        partnershipLabel: "BUILDING GLOBAL CONNECTIONS",
        partnershipTitle: "Partnerships",
        partnershipIntro: "We believe that meaningful collaboration creates opportunities for educational growth, scientific development and international exchange.",
        partnershipCards: [
            ["Educational Organizations", "Collaborate with academic organizations to expand educational opportunities worldwide."],
            ["Universities & Institutions", "Develop connections with universities, research centers and educational institutions."],
            ["Olympiad Partners", "Work together to organize international olympiads and academic competitions."]
        ],
        partnershipCtaLabel: "LET'S WORK TOGETHER",
        partnershipCtaTitle: "Become an AYGYT ACADEMY Partner",
        partnershipCtaText: "Join us in creating new opportunities for the next generation.",
        partnershipLink: "Partnership Inquiry →",
        newsLabel: "STAY INFORMED",
        newsTitle: "Latest News & Announcements",
        newsIntro: "Discover the latest updates, upcoming competitions and academic opportunities from AYGYT Academy.",
        newsCards: [
            ["Announcement", "AYGYT ACADEMY Official Launch", "Stay tuned for exciting academic initiatives, competitions and international opportunities."],
            ["Competitions", "Upcoming Academic Competitions", "Explore opportunities to demonstrate your knowledge, creativity and scientific skills."],
            ["Conferences", "Scientific Events & Conferences", "Connect with young researchers and discover new ideas through academic events."]
        ],
        readMore: "Read More →",
        contactLabel: "GET IN TOUCH",
        contactTitle: "Contact AYGYT ACADEMY",
        contactIntro: "Have a question or interested in collaboration? We would be happy to hear from you.",
        contactSubTitle: "Let's Connect",
        contactText: "Join us in creating new academic opportunities and inspiring the next generation of young researchers.",
        contactDetails: [
            ["Email", "info@aygytacademy.com"],
            ["Location", "Turkmenistan"],
            ["Partnerships", "We welcome collaboration with universities, educational organizations and academic institutions."]
        ],
        formPlaceholders: ["Your Name", "Your Email", "Subject", "Your Message"],
        send: "Send Message",
        quickLinks: "Quick Links",
        contactUs: "Contact Us",
        getInTouch: "Get in Touch",
        footerAbout: "Empowering young minds through academic competitions, scientific research and international collaboration.",
        footerSlogan: "Empowering Knowledge. Inspiring Excellence.",
        copyright: "© 2026 AYGYT ACADEMY. All Rights Reserved."
    },

    ru: {
        nav: ["Главная", "О нас", "Олимпиады", "Конференции", "Партнёрство", "Новости", "Контакты"],
        slogan: ["Сделай свой", "шаг", "решительно"],
        eyebrow: "МЕЖДУНАРОДНАЯ АКАДЕМИЧЕСКАЯ ПЛАТФОРМА",
        heroTitle: "AYGYT ACADEMY",
        heroSubtitle: 'Поддерживая новое поколение <span>научных лидеров</span>',
        heroText: "Объединяем талантливых людей посредством международных олимпиад, академических конкурсов, конференций и научных инноваций.",
        heroButtons: ["Конкурсы", "Наша миссия"],
        aboutLabel: "КТО МЫ",
        aboutTitle: "Об AYGYT ACADEMY",
        aboutText: "AYGYT ACADEMY — развивающаяся академическая инициатива, направленная на продвижение образования, научных исследований и международного сотрудничества. Мы стремимся создавать возможности для студентов, молодых исследователей и преподавателей по всему миру.",
        competitionLabel: "РАСКРОЙТЕ СВОЙ ПОТЕНЦИАЛ",
        competitionTitle: "Международные конкурсы",
        competitionIntro: "Откройте возможности продемонстрировать свои знания, творческие способности и научный потенциал.",
        competitionCards: [
            ["Биология и экология", "Изучайте науки о жизни, биоразнообразие и экологические инновации."],
            ["STEM и технологии", "Исследуйте искусственный интеллект, инженерию и технологии."],
            ["Химия и физика", "Проверьте свои знания с помощью научных экспериментов и теорий."],
            ["Научные проекты", "Представляйте инновационные исследования и оригинальные научные идеи."]
        ],
        learnMore: "Подробнее →",
        conferenceLabel: "ОБЪЕДИНЯЕМ • ОТКРЫВАЕМ • ВДОХНОВЛЯЕМ",
        conferenceTitle: "Конференции и мероприятия",
        conferenceIntro: "Объединяем молодых исследователей, студентов и академических специалистов для обмена знаниями, открытиями и инновационными идеями.",
        conferenceCards: [
            ["ИССЛЕДОВАНИЯ", "Научные конференции", "Представляйте результаты исследований, обменивайтесь идеями и знакомьтесь с научными открытиями."],
            ["ОБРАЗОВАНИЕ", "Академические семинары", "Учитесь у опытных преподавателей, исследователей и международных экспертов."],
            ["ИННОВАЦИИ", "Инновационные форумы", "Открывайте новые технологии, творческие идеи и решения будущего."]
        ],
        conferenceBottom: "Знания объединяют мир.",
        participant: "Стать участником →",
        partnershipLabel: "СОЗДАВАЯ ГЛОБАЛЬНЫЕ СВЯЗИ",
        partnershipTitle: "Партнёрство",
        partnershipIntro: "Мы верим, что эффективное сотрудничество создаёт возможности для развития образования, науки и международного обмена.",
        partnershipCards: [
            ["Образовательные организации", "Сотрудничайте с академическими организациями для расширения образовательных возможностей во всём мире."],
            ["Университеты и учреждения", "Развивайте связи с университетами, исследовательскими центрами и образовательными учреждениями."],
            ["Партнёры олимпиад", "Сотрудничайте в организации международных олимпиад и академических конкурсов."]
        ],
        partnershipCtaLabel: "ДАВАЙТЕ СОТРУДНИЧАТЬ",
        partnershipCtaTitle: "Станьте партнёром AYGYT ACADEMY",
        partnershipCtaText: "Присоединяйтесь к созданию новых возможностей для молодого поколения.",
        partnershipLink: "Запрос о партнёрстве →",
        newsLabel: "БУДЬТЕ В КУРСЕ",
        newsTitle: "Последние новости и объявления",
        newsIntro: "Узнавайте последние новости, предстоящие конкурсы и академические возможности AYGYT Academy.",
        newsCards: [
            ["Объявление", "Официальный запуск AYGYT ACADEMY", "Следите за новыми академическими инициативами, конкурсами и международными возможностями."],
            ["Конкурсы", "Предстоящие академические конкурсы", "Откройте возможности продемонстрировать свои знания, творческие способности и научные навыки."],
            ["Конференции", "Научные мероприятия и конференции", "Общайтесь с молодыми исследователями и открывайте новые идеи на академических мероприятиях."]
        ],
        readMore: "Подробнее →",
        contactLabel: "СВЯЖИТЕСЬ С НАМИ",
        contactTitle: "Контакты AYGYT ACADEMY",
        contactIntro: "У вас есть вопрос или вы заинтересованы в сотрудничестве? Мы будем рады вашему сообщению.",
        contactSubTitle: "Давайте общаться",
        contactText: "Присоединяйтесь к созданию новых академических возможностей и вдохновляйте новое поколение молодых исследователей.",
        contactDetails: [
            ["Электронная почта", "info@aygytacademy.com"],
            ["Местоположение", "Туркменистан"],
            ["Партнёрство", "Мы приветствуем сотрудничество с университетами, образовательными организациями и академическими учреждениями."]
        ],
        formPlaceholders: ["Ваше имя", "Ваш Email", "Тема", "Ваше сообщение"],
        send: "Отправить сообщение",
        quickLinks: "Быстрые ссылки",
        contactUs: "Связаться с нами",
        getInTouch: "Написать нам",
        footerAbout: "Поддерживаем молодые таланты через академические конкурсы, научные исследования и международное сотрудничество.",
        footerSlogan: "Расширяем знания. Вдохновляем на достижения.",
        copyright: "© 2026 AYGYT ACADEMY. Все права защищены."
    },

    tk: {
        nav: ["Baş sahypa", "Biz barada", "Bäsleşikler", "Konferensiýalar", "Hyzmatdaşlyk", "Täzelikler", "Habarlaşmak"],
        slogan: ["Ädimiňi", "aýgytly", "äde"],
        eyebrow: "HALKARA AKADEMIK PLATFORMASY",
        heroTitle: "AYGYT ACADEMY",
        heroSubtitle: 'Täze nesliň <span>ylmy liderlerini</span> ösdürýäris',
        heroText: "Zehinli ýaşlary halkara olimpiadalaryň, akademiki bäsleşikleriň, konferensiýalaryň we ylmy innowasiýalaryň üsti bilen birleşdirýäris.",
        heroButtons: ["Bäsleşiklere göz aýla", "Maksadymyz bilen tanyş"],
        aboutLabel: "BIZ KIM",
        aboutTitle: "AYGYT ACADEMY barada",
        aboutText: "AYGYT ACADEMY — bilimi, ylmy barlaglary we halkara hyzmatdaşlygy ösdürmäge gönükdirilen täze akademiki başlangyçdyr. Biz dünýäniň dürli künjeklerindäki talyplar, ýaş ylmy işgärler we mugallymlar üçin täze mümkinçilikleri döretmegi maksat edinýäris.",
        competitionLabel: "ÖZ MÜMKINÇILIGIŇI AÇ",
        competitionTitle: "Halkara bäsleşikler",
        competitionIntro: "Bilimiňi, döredijiligiňi we ylmy başarnyklaryňy görkezmek üçin mümkinçilikleri öwren.",
        competitionCards: [
            ["Biologiýa we ekologiýa", "Janly tebigat ylymlaryny, biodürlüligi we ekologik innowasiýalary öwren."],
            ["STEM we tehnologiýa", "Emeli aňy, inženerçiligi we häzirki zaman tehnologiýalaryny öwren."],
            ["Himiýa we fizika", "Ylmy tejribeleriň we nazaryýetleriň üsti bilen bilimiňi synagdan geçir."],
            ["Ylmy taslamalar", "Innowasion barlaglaryňy we özboluşly ylmy pikirleriňi hödürle."]
        ],
        learnMore: "Giňişleýin →",
        conferenceLabel: "BIRLEŞDIRÝÄRIS • AÇÝARYS • ÖSdürÝÄRIS",
        conferenceTitle: "Konferensiýalar we çäreler",
        conferenceIntro: "Bilim alyşmak, açyşlary paýlaşmak we innowasiýalary höweslendirmek üçin ýaş ylmy işgärleri, talyplary we akademiki hünärmenleri bir ýere jemleýäris.",
        conferenceCards: [
            ["YLŇY BARLAG", "Ylmy konferensiýalar", "Barlag netijeleriňi hödürle, pikir alyş we ylmy açyşlar bilen tanyş."],
            ["BILIM", "Akademiki seminarlar", "Tejribeli mugallymlardan, ylmy işgärlerden we halkara bilermenlerden öwren."],
            ["INNOWASIÝA", "Innowasiýa forumlary", "Täze tehnologiýalar, döredijilikli pikirler we geljegiň çözgütleri bilen tanyş."]
        ],
        conferenceBottom: "Bilim dünýäni birleşdirýär.",
        participant: "Gatnaşyjy bol →",
        partnershipLabel: "HALKARA HYZMATDAŞLYGY ÖSDÜRMEK",
        partnershipTitle: "Hyzmatdaşlyk",
        partnershipIntro: "Netijeli hyzmatdaşlygyň bilimiň ösmegi, ylmy ösüş we halkara tejribe alyşmak üçin täze mümkinçilikleri döredýändigine ynanýarys.",
        partnershipCards: [
            ["Bilim edaralary", "Bilim mümkinçiliklerini dünýäde giňeltmek üçin akademiki guramalar bilen hyzmatdaşlyk et."],
            ["Uniwersitetler we edaralar", "Uniwersitetler, ylmy merkezler we bilim edaralary bilen gatnaşyklary ösdür."],
            ["Olimpiada hyzmatdaşlary", "Halkara olimpiadalary we akademiki bäsleşikleri guramak üçin bilelikde işle."]
        ],
        partnershipCtaLabel: "GEL, BILE IŞLEŞELIŇ",
        partnershipCtaTitle: "AYGYT ACADEMY bilen hyzmatdaş boluň",
        partnershipCtaText: "Geljekki nesil üçin täze mümkinçilikleri döretmäge goşulyň.",
        partnershipLink: "Hyzmatdaşlyk teklibi →",
        newsLabel: "HABARLAR BILEN TANYŞ BOLUŇ",
        newsTitle: "Soňky täzelikler we bildirişler",
        newsIntro: "AYGYT Academy-niň soňky täzelikleri, geçiriljek bäsleşikleri we akademiki mümkinçilikleri bilen tanyş boluň.",
        newsCards: [
            ["Bildiriş", "AYGYT ACADEMY-niň resmi işe başlamagy", "Täze akademiki başlangyçlar, bäsleşikler we halkara mümkinçilikler barada habarly boluň."],
            ["Bäsleşikler", "Ýakyn wagtda geçiriljek akademiki bäsleşikler", "Bilimiňizi, döredijiligiňizi we ylmy başarnyklaryňyzy görkezmek üçin mümkinçilikleri öwreniň."],
            ["Konferensiýalar", "Ylmy çäreler we konferensiýalar", "Akademiki çäreleriň üsti bilen ýaş ylmy işgärler bilen tanyşyň we täze pikirleri açyň."]
        ],
        readMore: "Dowamyny oka →",
        contactLabel: "BIZ BILEN HABARLAŞYŇ",
        contactTitle: "AYGYT ACADEMY bilen habarlaşyň",
        contactIntro: "Soragyňyz barmy ýa-da hyzmatdaşlyk etmek isleýärsiňizmi? Siziň ýüzlenmäňize şatlyk bilen garaşýarys.",
        contactSubTitle: "Geliň, habarlaşalyň",
        contactText: "Täze akademiki mümkinçilikleri döretmäge we ýaş ylmy işgärleriň täze neslini ruhlandyrmaga goşulyň.",
        contactDetails: [
            ["Elektron poçta", "info@aygytacademy.com"],
            ["Ýerleşýän ýeri", "Türkmenistan"],
            ["Hyzmatdaşlyk", "Uniwersitetler, bilim guramalary we akademiki edaralar bilen hyzmatdaşlyga açykdyrys."]
        ],
        formPlaceholders: ["Adyňyz", "Elektron poçtaňyz", "Mowzuk", "Habaryňyz"],
        send: "Habary iber",
        quickLinks: "Çalt geçiş",
        contactUs: "Habarlaşmak",
        getInTouch: "Habarlaş",
        footerAbout: "Akademiki bäsleşikler, ylmy barlaglar we halkara hyzmatdaşlyk arkaly ýaş zehinleri ösdürýäris.",
        footerSlogan: "Bilimi ösdürýäris. Üstünlige ruhlandyrýarys.",
        copyright: "© 2026 AYGYT ACADEMY. Ähli hukuklar goragly."
    }
};

// HELPER FUNCTION
function setText(selector, value) {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    if (Array.isArray(value)) {
        elements.forEach((element, index) => {
            if (value[index] !== undefined) {
                element.textContent = value[index];
            }
        });
    } else {
        elements[0].textContent = value;
    }
}

// CHANGE WEBSITE LANGUAGE
function changeLanguage(language) {
    const t = translations[language];
    if (!t) return;

    document.documentElement.lang = language;

    setText(".nav-menu > a", t.nav);

    setText(".hero-slogan span:not(.quote-mark)", [
        t.slogan[0], t.slogan[2]
    ]);
    setText(".hero-slogan strong", t.slogan[1]);

    setText(".hero .eyebrow", t.eyebrow);
    setText(".hero h1", t.heroTitle);
    document.querySelector(".hero h2").innerHTML = t.heroSubtitle;
    setText(".hero-content > p", t.heroText);
    setText(".hero-buttons a", t.heroButtons);

    setText("#about .section-label", t.aboutLabel);
    setText("#about h2", t.aboutTitle);
    setText("#about .container > p", t.aboutText);

    setText("#competitions .section-label", t.competitionLabel);
    setText("#competitions h2", t.competitionTitle);
    setText("#competitions .container > p", t.competitionIntro);
    setText(".competition-card h3", t.competitionCards.map(x => x[0]));
    setText(".competition-card p", t.competitionCards.map(x => x[1]));
    setText(".competition-card a", t.learnMore);

    setText("#conferences .section-label", t.conferenceLabel);
    setText("#conferences h2", t.conferenceTitle);
    setText(".conference-heading p", t.conferenceIntro);
    setText(".conference-card > span", t.conferenceCards.map(x => x[0]));
    setText(".conference-card h3", t.conferenceCards.map(x => x[1]));
    setText(".conference-card p", t.conferenceCards.map(x => x[2]));
    setText(".conference-bottom p", t.conferenceBottom);
    setText(".conference-bottom a", t.participant);

    setText("#partnerships .section-label", t.partnershipLabel);
    setText("#partnerships h2", t.partnershipTitle);
    setText(".partnership-heading p", t.partnershipIntro);
    setText(".partnership-card h3", t.partnershipCards.map(x => x[0]));
    setText(".partnership-card p", t.partnershipCards.map(x => x[1]));
    setText(".partnership-cta span", t.partnershipCtaLabel);
    setText(".partnership-cta h3", t.partnershipCtaTitle);
    setText(".partnership-cta p", t.partnershipCtaText);
    setText(".partnership-cta a", t.partnershipLink);

    setText("#news .section-subtitle", t.newsLabel);
    setText("#news h2", t.newsTitle);
    setText("#news .section-heading p", t.newsIntro);
    setText(".news-category", t.newsCards.map(x => x[0]));
    setText(".news-card h3", t.newsCards.map(x => x[1]));
    setText(".news-card p", t.newsCards.map(x => x[2]));
    setText(".news-card a", t.readMore);

    setText("#contact .section-subtitle", t.contactLabel);
    setText("#contact .section-heading h2", t.contactTitle);
    setText("#contact .section-heading p", t.contactIntro);
    setText(".contact-info h3", t.contactSubTitle);
    setText(".contact-info > p", t.contactText);
    setText(".contact-item strong", t.contactDetails.map(x => x[0]));
    setText(".contact-item p", t.contactDetails.map(x => x[1]));

    const form = document.querySelector(".contact-form form");
    if (form) {
        const fields = form.querySelectorAll("input:not([type=hidden]), textarea");
        fields.forEach((field, index) => {
            field.placeholder = t.formPlaceholders[index] || field.placeholder;
        });
        const submitButton = form.querySelector("button");
        if (submitButton) submitButton.textContent = t.send;
    }

    setText(".footer > .container > p:first-of-type", t.footerSlogan);
    setText(".footer-about p", t.footerAbout);
    setText(".footer-links h3", t.quickLinks);
    setText(".footer-contact h3", t.contactUs);
    setText(".footer-contact a", t.getInTouch);
    setText(".footer-bottom p", t.copyright);

    document.querySelectorAll(".footer").forEach(footer => {
        footer.querySelectorAll("p").forEach(p => {
            if (p.textContent.includes("© 2026")) {
                p.textContent = t.copyright;
            }
        });
    });

    localStorage.setItem("aygytLanguage", language);

    const selector = document.getElementById("languageSelect");
    if (selector) selector.value = language;
}

// LOAD SAVED LANGUAGE
document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem("aygytLanguage") || "en";
    const selector = document.getElementById("languageSelect");

    if (selector) {
        selector.value = savedLanguage;
        changeLanguage(savedLanguage);
    }
});
