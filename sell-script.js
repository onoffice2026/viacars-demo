<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ViaCars.eu - Vinde mașina ta</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- ECRAN DE PAROLĂ -->
    <div id="password-gate">
        <div class="pass-box">
            <h2 style="color: white; margin-bottom: 10px; font-size: 24px;">ViaCars.eu</h2>
            <p style="color: rgba(255,255,255,0.6); margin-bottom: 20px; font-size: 14px;">Acces restricționat. Introdu parola.</p>
            <input type="password" id="pass-input" class="pass-input" placeholder="Parola">
            <br>
            <button onclick="checkPassword()" class="pass-btn">Intră</button>
            <p id="pass-error" style="color: #ef4444; font-size: 12px; margin-top: 10px; display: none;">Parolă incorectă!</p>
        </div>
    </div>

    <!-- HEADER -->
    <header class="header-integrated sticky top-0 z-50">
        <div class="container mx-auto px-6 py-3 flex justify-between items-center">
            <div class="flex items-center space-x-3">
                <a href="index.html" class="logo-container rounded-lg p-2 flex items-center space-x-2 no-underline">
                    <svg class="w-8 h-8" viewBox="0 0 40 40" fill="none">
                        <path d="M5 25 Q20 10 35 25 L35 32 Q20 35 5 32 Z" fill="rgba(255,255,255,0.9)"/>
                        <path d="M12 22 L28 18 L26 24 L14 26 Z" fill="#1e3a8a"/>
                        <circle cx="18" cy="23" r="2" fill="#60a5fa"/>
                        <circle cx="22" cy="22" r="1.5" fill="#60a5fa"/>
                    </svg>
                    <span class="text-xl font-bold text-white">ViaCars<span class="text-blue-300">.eu</span></span>
                </a>
            </div>
            <nav class="hidden md:flex space-x-6 text-sm font-medium">
                <a href="index.html" class="text-white/90 hover:text-white transition" data-i18n="nav_buy">Cumpără</a>
                <a href="sell.html" class="text-white transition font-bold" data-i18n="nav_sell">Vinde</a>
                <a href="#" class="text-white/90 hover:text-white transition" data-i18n="nav_dealers">Dealeri</a>
                <a href="#" class="text-white/90 hover:text-white transition" data-i18n="nav_news">Noutăți</a>
            </nav>
            <div class="flex items-center space-x-4">
                <div class="flex items-center space-x-2">
                    <div class="flag-btn active" data-lang="ro" onclick="switchLanguage('ro')" title="Română">
                        <svg viewBox="0 0 60 40"><rect width="20" height="40" fill="#002B7F"/><rect x="20" width="20" height="40" fill="#FCD116"/><rect x="40" width="20" height="40" fill="#CE1126"/></svg>
                    </div>
                    <div class="flag-btn" data-lang="bg" onclick="switchLanguage('bg')" title="Български">
                        <svg viewBox="0 0 60 40"><rect width="60" height="13.33" fill="#FFFFFF"/><rect y="13.33" width="60" height="13.33" fill="#00966E"/><rect y="26.66" width="60" height="13.34" fill="#D62612"/></svg>
                    </div>
                    <div class="flag-btn" data-lang="el" onclick="switchLanguage('el')" title="Ελληνικά">
                        <svg viewBox="0 0 60 40"><rect width="60" height="40" fill="#0D5EAF"/><rect y="4.44" width="60" height="4.44" fill="#FFFFFF"/><rect y="13.33" width="60" height="4.44" fill="#FFFFFF"/><rect y="22.22" width="60" height="4.44" fill="#FFFFFF"/><rect y="31.11" width="60" height="4.44" fill="#FFFFFF"/><rect width="22.22" height="22.22" fill="#0D5EAF"/><rect y="8.89" width="22.22" height="4.44" fill="#FFFFFF"/><rect x="8.89" width="4.44" height="22.22" fill="#FFFFFF"/></svg>
                    </div>
                    <div class="flag-btn" data-lang="en" onclick="switchLanguage('en')" title="English">
                        <svg viewBox="0 0 60 40"><rect width="60" height="40" fill="#012169"/><path d="M0 0 L60 40 M60 0 L0 40" stroke="#FFFFFF" stroke-width="6"/><path d="M0 0 L60 40 M60 0 L0 40" stroke="#C8102E" stroke-width="3"/><path d="M30 0 L30 40 M0 20 L60 20" stroke="#FFFFFF" stroke-width="10"/><path d="M30 0 L30 40 M0 20 L60 20" stroke="#C8102E" stroke-width="6"/></svg>
                    </div>
                </div>
                <a href="#" class="text-sm text-white/70 hover:text-white transition px-3 py-1.5" data-i18n="nav_login">Logare</a>
            </div>
        </div>
    </header>

    <!-- CONȚINUT PAGINA DE VÂNZARE -->
    <section class="py-12">
        <div class="container mx-auto px-6">
            <div class="sell-container">
                <h1 class="sell-title" data-i18n="sell_page_title">Vinde mașina ta cu noi</h1>
                <p class="sell-subtitle" data-i18n="sell_page_subtitle">Obține o evaluare gratuită în câteva minute</p>

                <form id="sell-form">
                    <div class="form-group">
                        <label class="form-label" data-i18n="sell_brand_label">Care este marca mașinii tale?</label>
                        <select class="form-select" id="sell-brand" required>
                            <option value="" data-i18n="sell_brand_select">Selectează marca</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label class="form-label" data-i18n="sell_model_label">Care este modelul?</label>
                        <select class="form-select" id="sell-model" required disabled>
                            <option value="" data-i18n="sell_model_select">Selectează modelul</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label class="form-label" data-i18n="sell_year_label">În ce an a fost înmatriculată?</label>
                        <select class="form-select" id="sell-year" required>
                            <option value="" data-i18n="sell_year_select">Selectează anul</option>
                        </select>
                    </div>

                    <button type="submit" class="btn-start">
                        <span data-i18n="sell_start_btn">Începe evaluarea</span> <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </form>

                <p class="powered-by">
                    <span data-i18n="sell_powered">Oferit de</span> <a href="#">viacars.eu</a>
                </p>
            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <footer class="section-darker border-t border-blue-900/30 py-8 mt-12">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                <div><h4 class="text-white font-bold mb-3 text-sm" data-i18n="footer_about">Despre ViaCars</h4><ul class="space-y-1 text-xs text-white/50"><li><a href="#" class="hover:text-white transition" data-i18n="footer_who">Cine suntem</a></li><li><a href="#" class="hover:text-white transition" data-i18n="footer_how">Cum funcționează</a></li></ul></div>
                <div><h4 class="text-white font-bold mb-3 text-sm" data-i18n="footer_buyers">Cumpărători</h4><ul class="space-y-1 text-xs text-white/50"><li><a href="#" class="hover:text-white transition" data-i18n="footer_search">Caută mașini</a></li><li><a href="#" class="hover:text-white transition" data-i18n="footer_guide">Ghid cumpărare</a></li></ul></div>
                <div><h4 class="text-white font-bold mb-3 text-sm" data-i18n="footer_sellers">Vânzători</h4><ul class="space-y-1 text-xs text-white/50"><li><a href="#" class="hover:text-white transition" data-i18n="footer_add">Adaugă anunț</a></li><li><a href="#" class="hover:text-white transition" data-i18n="footer_packages">Pachete premium</a></li></ul></div>
                <div><h4 class="text-white font-bold mb-3 text-sm" data-i18n="footer_contact">Contact</h4><ul class="space-y-1 text-xs text-white/50"><li><i class="fa-solid fa-envelope mr-1"></i>contact@viacars.eu</li><li><i class="fa-solid fa-phone mr-1"></i>+40 123 456 789</li></ul></div>
            </div>
            <div class="accent-line mb-4"></div>
            <div class="text-center text-xs text-white/40"><p>&copy; 2026 ViaCars.eu. <span data-i18n="footer_rights">Toate drepturile rezervate.</span></p></div>
        </div>
    </footer>

    <script src="brands.js"></script>
    <script src="script.js"></script>
    <script src="sell-script.js"></script>
</body>
</html>
