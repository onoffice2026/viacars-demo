// --- LOGICA PAGINII DE VÂNZARE ---
document.addEventListener('DOMContentLoaded', () => {
    const brandSelect = document.getElementById('sell-brand');
    const modelSelect = document.getElementById('sell-model');
    const yearSelect = document.getElementById('sell-year');
    const sellForm = document.getElementById('sell-form');

    // Populare branduri din brands.js
    if (brandSelect && carBrands) {
        carBrands.forEach(brand => {
            const option = document.createElement('option');
            option.value = brand.name;
            option.textContent = brand.name;
            brandSelect.appendChild(option);
        });
    }

    // Populare ani (de la 1990 la 2026)
    if (yearSelect) {
        const currentYear = 2026;
        for (let year = currentYear; year >= 1990; year--) {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = year;
            yearSelect.appendChild(option);
        }
    }

    // Activare select model când se alege brandul
    if (brandSelect) {
        brandSelect.addEventListener('change', function() {
            if (this.value) {
                modelSelect.disabled = false;
                // Aici vom adăuga ulterior lista de modele pentru fiecare brand
                modelSelect.innerHTML = '<option value="">Selectează modelul</option>';
                const models = getModelsForBrand(this.value);
                models.forEach(model => {
                    const option = document.createElement('option');
                    option.value = model;
                    option.textContent = model;
                    modelSelect.appendChild(option);
                });
            } else {
                modelSelect.disabled = true;
                modelSelect.innerHTML = '<option value="">Selectează modelul</option>';
            }
        });
    }

    // Submit formular
    if (sellForm) {
        sellForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const brand = brandSelect.value;
            const model = modelSelect.value;
            const year = yearSelect.value;
            
            if (brand && model && year) {
                alert(`Evaluare inițiată pentru: ${brand} ${model} (${year})\n\nAceastă funcționalitate va fi implementată în curând!`);
                // Aici vom redirecționa către pagina de evaluare
            } else {
                alert('Te rugăm să completezi toate câmpurile!');
            }
        });
    }
});

// Funcție pentru obținerea modelelor în funcție de brand
function getModelsForBrand(brand) {
    const models = {
        "BMW": ["Seria 1", "Seria 2", "Seria 3", "Seria 4", "Seria 5", "Seria 7", "X1", "X3", "X5", "X7"],
        "Mercedes": ["Clasa A", "Clasa B", "Clasa C", "Clasa E", "Clasa S", "GLA", "GLC", "GLE", "GLS"],
        "Audi": ["A1", "A3", "A4", "A5", "A6", "A7", "A8", "Q3", "Q5", "Q7", "Q8"],
        "VW": ["Golf", "Polo", "Passat", "Tiguan", "Touareg", "T-Roc", "ID.3", "ID.4"],
        "Ford": ["Fiesta", "Focus", "Mondeo", "Kuga", "Puma", "Explorer"],
        "Opel": ["Corsa", "Astra", "Insignia", "Crossland", "Grandland"],
        "Renault": ["Clio", "Megane", "Kadjar", "Captur", "Koleos"],
        "Toyota": ["Yaris", "Corolla", "Camry", "RAV4", "C-HR", "Land Cruiser"],
        "Porsche": ["911", "Cayenne", "Macan", "Panamera", "Taycan"],
        "Ferrari": ["488", "F8", "Roma", "Portofino", "SF90"],
        "Lamborghini": ["Huracán", "Urus", "Aventador"],
        "Tesla": ["Model 3", "Model Y", "Model S", "Model X"],
        "Nissan": ["Qashqai", "X-Trail", "Leaf", "Juke", "Micra"],
        "Honda": ["Civic", "CR-V", "HR-V", "Jazz"],
        "Mazda": ["Mazda2", "Mazda3", "Mazda6", "CX-5", "CX-30"],
        "Volvo": ["XC40", "XC60", "XC90", "S60", "S90", "V60"],
        "Jaguar": ["XE", "XF", "F-PACE", "E-PACE", "I-PACE"],
        "KIA": ["Rio", "Ceed", "Sportage", "Sorento", "Niro"],
        "Hyundai": ["i10", "i20", "i30", "Tucson", "Santa Fe", "Kona"],
        "Citroën": ["C3", "C4", "C5 Aircross", "Berlingo"],
        "Fiat": ["500", "Panda", "Tipo", "500X"],
        "Peugeot": ["208", "308", "508", "2008", "3008", "5008"],
        "Skoda": ["Fabia", "Octavia", "Superb", "Kodiaq", "Karoq"],
        "SEAT": ["Ibiza", "Leon", "Ateca", "Arona"]
    };
    return models[brand] || ["Model 1", "Model 2", "Model 3"];
}
