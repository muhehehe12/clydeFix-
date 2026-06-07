document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Loading Screen ---
    const loadingScreen = document.getElementById("loading-screen");
    setTimeout(() => {
        loadingScreen.style.opacity = "0";
        setTimeout(() => {
            loadingScreen.style.visibility = "hidden";
        }, 500);
    }, 900);

    // --- 2. Hamburger Menu Interaction ---
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        
        const spans = hamburger.querySelectorAll("span");
        if (navLinks.classList.contains("active")) {
            spans[0].style.transform = "rotate(45deg) translate(5px, 6px)";
            spans[1].style.opacity = "0";
            spans[2].style.transform = "rotate(-45deg) translate(5px, -6px)";
        } else {
            spans.forEach(s => s.style.transform = "none");
            spans[1].style.opacity = "1";
        }
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            hamburger.querySelectorAll("span").forEach(s => s.style.transform = "none");
            hamburger.querySelectorAll("span")[1].style.opacity = "1";
        });
    });

    // --- 3. Scroll Reveal Engine ---
    const reveals = document.querySelectorAll(".reveal");
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

    reveals.forEach(reveal => revealObserver.observe(reveal));

    // --- 4. Language System (EN / RO) ---
    const dictionary = {
        en: {
            "loading": "Loading...",
            "nav-home": "Home",
            "nav-about": "About Us",
            "nav-services": "Services",
            "nav-areas": "Areas",
            "nav-contact": "Contact",
            "hero-badge": "Building • Landscaping • Groundworks",
            "hero-title": "Professional Landscaping & Fencing Specialists",
            "hero-subtitle": "Delivering quality workmanship from start to finish. From complete garden transformations to expert groundworks and drainage solutions across Glasgow and surrounding areas.",
            "hero-cta": "Call for a Free Quote",
            "about-title": "Why Choose ClydeFix?",
            "about-desc-1": "We are a fully insured, professional team undertaking both domestic and commercial projects. Whether you are looking for a new patio, venetian fencing, or a complete site clearance, we have the experience and equipment to get the job done properly.",
            "feat-1": "Free, No-Obligation Quotes",
            "feat-2": "Fully Insured & Reliable Service",
            "feat-3": "Competitive Rates & Quality Materials",
            "feat-4": "Clean, Tidy, and Professional Finish",
            "services-title": "Our Core Services",
            "srv-1-title": "Landscaping & Fencing",
            "srv-1-desc": "Complete garden makeovers, artificial grass installation, sleeper beds, and premium fencing including bespoke Venetian designs.",
            "srv-2-title": "Patios & Paving",
            "srv-2-desc": "Expert installation of Indian Sandstone and Porcelain patios, alongside durable driveways, pathways, and precise kerbing.",
            "srv-3-title": "Groundworks & Drainage",
            "srv-3-desc": "Structural groundwork, retaining walls construction, and comprehensive drainage installation, repairs, and rainwater systems.",
            "srv-4-title": "Digger Work & Clearance",
            "srv-4-desc": "Site preparation, dig outs, demolition services, and professional digger & dumper hire with fully trained operators.",
            "areas-title": "Areas We Cover",
            "areas-subtitle": "Operating across Glasgow, Renfrewshire, Dunbartonshire, Stirlingshire, and the Loch Lomond area.",
            "contact-title": "Start Your Project Today",
            "contact-desc": "From small repairs to large commercial groundworks, ClydeFix is ready to assist. Contact us via call or WhatsApp.",
            "contact-name": "ClydeFix",
            "contact-role": "Landscaping & Groundwork Specialists",
            "contact-availability": "Available for emergency repairs and scheduled projects.",
            "footer-rights": "All rights reserved."
        },
        ro: {
            "loading": "Se încarcă...",
            "nav-home": "Acasă",
            "nav-about": "Despre Noi",
            "nav-services": "Servicii",
            "nav-areas": "Zone Acoperite",
            "nav-contact": "Contact",
            "hero-badge": "Construcții • Peisagistică • Lucrări Funciare",
            "hero-title": "Specialiști în Peisagistică și Garduri Premium",
            "hero-subtitle": "Oferim manoperă de calitate de la început până la sfârșit. De la transformări complete ale grădinii, la lucrări funciare și sisteme de drenaj în Glasgow și împrejurimi.",
            "hero-cta": "Cere o Ofertă Gratuită",
            "about-title": "De ce să alegi ClydeFix?",
            "about-desc-1": "Suntem o echipă de profesioniști, complet asigurată, care preia atât proiecte rezidențiale, cât și comerciale. Fie că dorești o terasă nouă, garduri tip venețian sau debarasarea completă a terenului, avem experiența și echipamentul necesar pentru o execuție perfectă.",
            "feat-1": "Cotații Gratuite, Fără Obligații",
            "feat-2": "Serviciu de Încredere & Asigurare Completă",
            "feat-3": "Prețuri Competitive & Materiale de Calitate",
            "feat-4": "Finisaje Curate, Îngrijite și Profesionale",
            "services-title": "Serviciile Noastre Principale",
            "srv-1-title": "Peisagistică & Garduri",
            "srv-1-desc": "Reamenajări complete ale grădinilor, montaj gazon artificial, paturi supraînălțate și garduri premium, inclusiv modele venețiene.",
            "srv-2-title": "Terase & Pavaje",
            "srv-2-desc": "Montaj expert de terase din gresie porțelanată și piatră indiană, alei durabile, drumuri de acces și borduri de precizie.",
            "srv-3-title": "Lucrări Funciare & Drenaj",
            "srv-3-desc": "Infrastructură funciară, construcția zidurilor de sprijin și instalarea completă a sistemelor de drenaj și colectare a apei pluviale.",
            "srv-4-title": "Excavații & Debarasare Teren",
            "srv-4-desc": "Pregătirea șantierului, săpături, servicii de demolare și închiriere excavatoare/basculante cu operatori calificați.",
            "areas-title": "Zone Acoperite",
            "areas-subtitle": "Activăm în Glasgow, Renfrewshire, Dunbartonshire, Stirlingshire și zona Loch Lomond.",
            "contact-title": "Începe Proiectul Tău Astăzi",
            "contact-desc": "De la reparații minore la lucrări funciare comerciale masive, ClydeFix îți stă la dispoziție. Contactează-ne telefonic sau pe WhatsApp.",
            "contact-name": "ClydeFix",
            "contact-role": "Specialiști Peisagistică & Lucrări Funciare",
            "contact-availability": "Disponibil pentru intervenții de urgență și proiecte planificate.",
            "footer-rights": "Toate drepturile rezervate."
        }
    };

    const btnEn = document.getElementById("lang-en");
    const btnRo = document.getElementById("lang-ro");
    const translatableElements = document.querySelectorAll("[data-i18n]");

    const switchLanguage = (lang) => {
        translatableElements.forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (dictionary[lang][key]) {
                el.innerText = dictionary[lang][key];
            }
        });

        if (lang === 'ro') {
            btnRo.classList.add("active");
            btnEn.classList.remove("active");
            document.documentElement.lang = "ro";
        } else {
            btnEn.classList.add("active");
            btnRo.classList.remove("active");
            document.documentElement.lang = "en";
        }
    };

    btnEn.addEventListener("click", () => switchLanguage('en'));
    btnRo.addEventListener("click", () => switchLanguage('ro'));
});
