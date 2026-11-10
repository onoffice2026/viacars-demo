// --- SISTEM PAROLĂ CU MEMORARE IP ---
const SITE_PASSWORD = "1234";

async function initGate() {
    const gate = document.getElementById('password-gate');
    if (!gate) return;
    const trustedIP = localStorage.getItem('viacars_trusted_ip');
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        const currentIP = data.ip;
        if (trustedIP === currentIP) {
            gate.style.display = 'none';
            return;
        }
    } catch (error) { console.log("Verificare IP eșuată"); }
}

function checkPassword() {
    const input = document.getElementById('pass-input').value;
    if (input === SITE_PASSWORD) {
        document.getElementById('password-gate').style.display = 'none';
        fetch('https://api.ipify.org?format=json')
            .then(res => res.json())
            .then(data => localStorage.setItem('viacars_trusted_ip', data.ip));
    } else {
        document.getElementById('pass-error').style.display = 'block';
        document.getElementById('pass-input').value = '';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const passInput = document.getElementById('pass-input');
    if (passInput) {
        passInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') checkPassword();
        });
    }
    initGate();
});

// --- SISTEM DE TRADUCERE ---
const translations = {
    ro: {
        nav_buy: "Cumpără", nav_sell: "Vinde", nav_dealers: "Dealeri", nav_news: "Noutăți",
        nav_login: "Logare", nav_add: "Adaugă Anunț",
        hero_title: "Găsește mașina perfectă", hero_subtitle: "Peste 12.450 de anunțuri verificate",
        filter_brand: "Marca", filter_model: "Modelul", filter_body: "Caroserie", filter_fuel: "Combustibil",
        filter_price_min: "Preț Min (€)", filter_price_max: "Preț Max (€)",
        filter_year_min: "An Min", filter_year_max: "An Max",
        body_sedan: "Sedan", body_suv: "SUV", fuel_diesel: "Diesel", fuel_gas: "Benzină",
        search_button: "Caută în 12.450 de anunțuri",
        sell_button: "Vinde mașina ta cu noi",
        cat_cheap: "Ieftine și puternice", cat_cheap_desc: "Cea mai bună putere/bani",
        cat_exclusive: "Exclusiviste", cat_exclusive_desc: "Peste 100.000 €",
        cat_electric: "Electrice", cat_electric_desc: "100% electric",
        cat_suv: "SUV-uri", cat_suv_desc: "4x4 și off-road",
        cat_cabrio: "Cabrio", cat_cabrio_desc: "Acoperiș decapotabil",
        cat_sport: "Sport", cat_sport_desc: "Performanță maximă",
        cat_family: "Familiale", cat_family_desc: "7+ locuri",
        cat_vintage: "Vintage", cat_vintage_desc: "Clasice și de colecție",
        cat_hybrid: "Hybrid", cat_hybrid_desc: "Eco-friendly",
        cat_business: "Business", cat_business_desc: "Clase premium",
        cat_pickup: "Pick-up", cat_pickup_desc: "Utilitare și 4x4",
        cat_new: "Noutăți 2026", cat_new_desc: "Cele mai noi modele",
        brands_title: "Explorează după Marcă",
        why_title: "ViaCars.eu - Marketplace-ul auto premium",
        why_1: "Caută în cea mai mare ofertă online", why_2: "Opțiuni avansate de filtrare",
        why_3: "Salvează căutările tale", why_4: "Vinde o mașină gratuit",
        recent_title: "Anunțuri Recente", see_all: "Vezi toate",
        badge_verified: "VERIFICAT", badge_dealer: "DEALER", badge_top: "TOP OFERTĂ",
        fuel_hybrid: "Hybrid", trans_auto: "Automată", trans_manual: "Manuală",
        btn_details: "Vezi Detalii",
        footer_about: "Despre ViaCars", footer_who: "Cine suntem", footer_how: "Cum funcționează",
        footer_buyers: "Cumpărători", footer_search: "Caută mașini", footer_guide: "Ghid cumpărare",
        footer_sellers: "Vânzători", footer_add: "Adaugă anunț", footer_packages: "Pachete premium",
        footer_contact: "Contact", footer_rights: "Toate drepturile rezervate.",
        sell_page_title: "Vinde mașina ta cu noi",
        sell_page_subtitle: "Obține o evaluare gratuită în câteva minute",
        sell_brand_label: "Care este marca mașinii tale?",
        sell_brand_select: "Selectează marca",
        sell_model_label: "Care este modelul?",
        sell_model_select: "Selectează modelul",
        sell_year_label: "În ce an a fost înmatriculată?",
        sell_year_select: "Selectează anul",
        sell_start_btn: "Începe evaluarea",
        sell_powered: "Oferit de"
    },
    bg: {
        nav_buy: "Купи", nav_sell: "Продай", nav_dealers: "Дилъри", nav_news: "Новини",
        nav_login: "Вход", nav_add: "Добави обява",
        hero_title: "Намерете перфектния автомобил", hero_subtitle: "Над 12 450 проверени обяви",
        filter_brand: "Марка", filter_model: "Модел", filter_body: "Каросерия", filter_fuel: "Гориво",
        filter_price_min: "Мин. цена (€)", filter_price_max: "Макс. цена (€)",
        filter_year_min: "Мин. година", filter_year_max: "Макс. година",
        body_sedan: "Седан", body_suv: "SUV", fuel_diesel: "Дизел", fuel_gas: "Бензин",
        search_button: "Търси в 12 450 обяви",
        sell_button: "Продай колата си с нас",
        cat_cheap: "Евтини и мощни", cat_cheap_desc: "Най-добра мощност/цена",
        cat_exclusive: "Ексклузивни", cat_exclusive_desc: "Над 100 000 €",
        cat_electric: "Електрически", cat_electric_desc: "100% електрически",
        cat_suv: "SUV", cat_suv_desc: "4x4 и офроуд",
        cat_cabrio: "Кабрио", cat_cabrio_desc: "Отварящ се покрив",
        cat_sport: "Спортни", cat_sport_desc: "Максимална производителност",
        cat_family: "Семейни", cat_family_desc: "7+ места",
        cat_vintage: "Винтидж", cat_vintage_desc: "Класически и колекционерски",
        cat_hybrid: "Хибридни", cat_hybrid_desc: "Екологични",
        cat_business: "Бизнес", cat_business_desc: "Премиум класове",
        cat_pickup: "Пикап", cat_pickup_desc: "Ползотворни и 4x4",
        cat_new: "Новини 2026", cat_new_desc: "Най-новите модели",
        brands_title: "Разгледай по марка",
        why_title: "ViaCars.eu - Премиум автомобилен пазар",
        why_1: "Търсете в най-голямата онлайн оферта", why_2: "Разширени опции за филтриране",
        why_3: "Запазете вашите търсения", why_4: "Продайте автомобил безплатно",
        recent_title: "Последни обяви", see_all: "Виж всички",
        badge_verified: "ПРОВЕРЕНО", badge_dealer: "ДИЛЪР", badge_top: "ТОП ОФЕРТА",
        fuel_hybrid: "Хибрид", trans_auto: "Автоматична", trans_manual: "Ръчна",
        btn_details: "Виж детайли",
        footer_about: "За ViaCars", footer_who: "Кой сме ние", footer_how: "Как работи",
        footer_buyers: "Купувачи", footer_search: "Търси автомобили", footer_guide: "Ръководство за купувачи",
        footer_sellers: "Продавачи", footer_add: "Добави обява", footer_packages: "Премиум пакети",
        footer_contact: "Контакт", footer_rights: "Всички права запазени.",
        sell_page_title: "Продай колата си с нас",
        sell_page_subtitle: "Получете безплатна оценка за минути",
        sell_brand_label: "Каква е марката на вашата кола?",
        sell_brand_select: "Изберете марка",
        sell_model_label: "Какъв е моделът?",
        sell_model_select: "Изберете модел",
        sell_year_label: "В коя година е регистрирана?",
        sell_year_select: "Изберете година",
        sell_start_btn: "Започни оценката",
        sell_powered: "Предоставено от"
    },
    el: {
        nav_buy: "Αγορά", nav_sell: "Πώληση", nav_dealers: "Έμποροι", nav_news: "Νέα",
        nav_login: "Σύνδεση", nav_add: "Προσθήκη Αγγελίας",
        hero_title: "Βρείτε το τέλειο αυτοκίνητο", hero_subtitle: "Πάνω από 12.450 επαληθευμένες αγγελίες",
        filter_brand: "Μάρκα", filter_model: "Μοντέλο", filter_body: "Αμάξωμα", filter_fuel: "Καύσιμο",
        filter_price_min: "Ελάχ. Τιμή (€)", filter_price_max: "Μέγ. Τιμή (€)",
        filter_year_min: "Ελάχ. Έτος", filter_year_max: "Μέγ. Έτος",
        body_sedan: "Σεντάν", body_suv: "SUV", fuel_diesel: "Ντίζελ", fuel_gas: "Βενζίνη",
        search_button: "Αναζήτηση σε 12.450 αγγελίες",
        sell_button: "Πουλήστε το αυτοκίνητό σας μαζί μας",
        cat_cheap: "Φθηνά και ισχυρά", cat_cheap_desc: "Καλύτερη ισχύς/χρήμα",
        cat_exclusive: "Αποκλειστικά", cat_exclusive_desc: "Πάνω από 100.000 €",
        cat_electric: "Ηλεκτρικά", cat_electric_desc: "100% ηλεκτρικά",
        cat_suv: "SUV", cat_suv_desc: "4x4 και off-road",
        cat_cabrio: "Καμπριολέ", cat_cabrio_desc: "Αναδιπλούμενη οροφή",
        cat_sport: "Σπορ", cat_sport_desc: "Μέγιστη απόδοση",
        cat_family: "Οικογενειακά", cat_family_desc: "7+ θέσεις",
        cat_vintage: "Βίντατζ", cat_vintage_desc: "Κλασικά και συλλεκτικά",
        cat_hybrid: "Υβριδικά", cat_hybrid_desc: "Φιλικά προς το περιβάλλον",
        cat_business: "Επιχειρηματικά", cat_business_desc: "Πρέμιουμ κατηγορίες",
        cat_pickup: "Πικ-απ", cat_pickup_desc: "Επαγγελματικά και 4x4",
        cat_new: "Νέα 2026", cat_new_desc: "Τα πιο πρόσφατα μοντέλα",
        brands_title: "Εξερεύνηση ανά Μάρκα",
        why_title: "ViaCars.eu - Η premium αγορά αυτοκινήτων",
        why_1: "Αναζητήστε στη μεγαλύτερη online προσφορά", why_2: "Προηγμένες επιλογές φιλτραρίσματος",
        why_3: "Αποθηκεύστε τις αναζητήσεις σας", why_4: "Πουλήστε ένα αυτοκίνητο δωρεάν",
        recent_title: "Πρόσφατες Αγγελίες", see_all: "Δείτε όλες",
        badge_verified: "ΕΠΑΛΗΘΕΥΜΕΝΟ", badge_dealer: "ΕΜΠΟΡΟΣ", badge_top: "ΚΟΡΥΦΑΙΑ ΠΡΟΣΦΟΡΑ",
        fuel_hybrid: "Υβριδικό", trans_auto: "Αυτόματο", trans_manual: "Χειροκίνητο",
        btn_details: "Δείτε Λεπτομέρειες",
        footer_about: "Σχετικά με ViaCars", footer_who: "Ποιοι είμαστε", footer_how: "Πώς λειτουργεί",
        footer_buyers: "Αγοραστές", footer_search: "Αναζήτηση αυτοκινήτων", footer_guide: "Οδηγός αγοραστή",
        footer_sellers: "Πωλητές", footer_add: "Προσθήκη αγγελίας", footer_packages: "Πρέμιουμ πακέτα",
        footer_contact: "Επικοινωνία", footer_rights: "Όλα τα δικαιώματα διατηρούνται.",
        sell_page_title: "Πουλήστε το αυτοκίνητό σας μαζί μας",
        sell_page_subtitle: "Λάβετε δωρεάν αξιολόγηση σε λίγα λεπτά",
        sell_brand_label: "Ποια είναι η μάρκα του αυτοκινήτου σας;",
        sell_brand_select: "Επιλέξτε μάρκα",
        sell_model_label: "Ποιο είναι το μοντέλο;",
        sell_model_select: "Επιλέξτε μοντέλο",
        sell_year_label: "Ποιο έτος καταχωρήθηκε;",
        sell_year_select: "Επιλέξτε έτος",
        sell_start_btn: "Ξεκινήστε την αξιολόγηση",
        sell_powered: "Υποστηρίζεται από"
    },
    en: {
        nav_buy: "Buy", nav_sell: "Sell", nav_dealers: "Dealers", nav_news: "News",
        nav_login: "Login", nav_add: "Add Listing",
        hero_title: "Find the perfect car", hero_subtitle: "Over 12,450 verified listings",
        filter_brand: "Brand", filter_model: "Model", filter_body: "Body Type", filter_fuel: "Fuel",
        filter_price_min: "Min Price (€)", filter_price_max: "Max Price (€)",
        filter_year_min: "Min Year", filter_year_max: "Max Year",
        body_sedan: "Sedan", body_suv: "SUV", fuel_diesel: "Diesel", fuel_gas: "Petrol",
        search_button: "Search in 12,450 listings",
        sell_button: "Sell your car with us",
        cat_cheap: "Cheap & Powerful", cat_cheap_desc: "Best power/money ratio",
        cat_exclusive: "Exclusive", cat_exclusive_desc: "Over €100,000",
        cat_electric: "Electric", cat_electric_desc: "100% electric",
        cat_suv: "SUVs", cat_suv_desc: "4x4 and off-road",
        cat_cabrio: "Cabrio", cat_cabrio_desc: "Convertible roof",
        cat_sport: "Sport", cat_sport_desc: "Maximum performance",
        cat_family: "Family", cat_family_desc: "7+ seats",
        cat_vintage: "Vintage", cat_vintage_desc: "Classic & collector",
        cat_hybrid: "Hybrid", cat_hybrid_desc: "Eco-friendly",
        cat_business: "Business", cat_business_desc: "Premium classes",
        cat_pickup: "Pick-up", cat_pickup_desc: "Utility & 4x4",
        cat_new: "New 2026", cat_new_desc: "Latest models",
        brands_title: "Explore by Brand",
        why_title: "ViaCars.eu - Premium Auto Marketplace",
        why_1: "Search the largest online offering", why_2: "Advanced filtering options",
        why_3: "Save your searches", why_4: "Sell a car for free",
        recent_title: "Recent Listings", see_all: "See all",
        badge_verified: "VERIFIED", badge_dealer: "DEALER", badge_top: "TOP DEAL",
        fuel_hybrid: "Hybrid", trans_auto: "Automatic", trans_manual: "Manual",
        btn_details: "View Details",
        footer_about: "About ViaCars", footer_who: "Who we are", footer_how: "How it works",
        footer_buyers: "Buyers", footer_search: "Search cars", footer_guide: "Buying guide",
        footer_sellers: "Sellers", footer_add: "Add listing", footer_packages: "Premium packages",
        footer_contact: "Contact", footer_rights: "All rights reserved.",
        sell_page_title: "Sell your car with us",
        sell_page_subtitle: "Get a free valuation in minutes",
        sell_brand_label: "What is the brand of your car?",
        sell_brand_select: "Select brand",
        sell_model_label: "What is the model?",
        sell_model_select: "Select model",
        sell_year_label: "In which year was it registered?",
        sell_year_select: "Select year",
        sell_start_btn: "Start valuation",
        sell_powered: "Powered by"
    }
};

function switchLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key]) el.setAttribute('placeholder', dict[key]);
    });
    document.querySelectorAll('.flag-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    localStorage.setItem('viacars_lang', lang);
    document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('viacars_lang') || 'ro';
    switchLanguage(savedLang);
});
