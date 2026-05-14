// i18n.js
const translations = {
  en: {
    shop: "Shop",
    our_story: "Our Story",
    contact: "Contact",
    cart: "Cart",
    announcement: "Complimentary shipping on all orders + 2 free luxury samples",
    hero_title: "The Art of <br>Seduction",
    hero_desc: "Discover a world of premium fragrances crafted with rare ingredients, designed exclusively for the modern woman.",
    inner_circle: "The Inner Circle",
    inner_circle_desc: "Subscribe to receive 15% off your first luxury purchase, plus early access to new releases.",
    unlock: "Unlock",
    campaign: "Campaign Film",
    podcast: "Our Podcast",
    iconic: "Iconic Creations",
    iconic_desc: "Experience our most coveted and timeless masterpieces.",
    explore_full: "Explore The Full Collection",
    community: "Join a global community of women who lead with confidence and grace. Follow our journey behind the scenes, discover styling tips, and share your signature scent.",
    follow: "Follow @JuzeyParfumes",
    all_fragrances: "All Fragrances",
    floral: "Floral",
    woody: "Woody",
    fresh: "Fresh",
    oriental: "Oriental",
    gift_sets: "Gift Sets",
    faq: "FAQ",
    social: "Social",
    rights: "© 2026 Juzey Parfumes. All Rights Reserved. Designed for luxury."
  },
  fr: {
    shop: "Boutique",
    our_story: "Notre Histoire",
    contact: "Contact",
    cart: "Panier",
    announcement: "Livraison offerte sur toutes les commandes + 2 échantillons de luxe",
    hero_title: "L'Art de la <br>Séduction",
    hero_desc: "Découvrez un monde de parfums premium créés avec des ingrédients rares, conçus exclusivement pour la femme moderne.",
    inner_circle: "Le Cercle Intime",
    inner_circle_desc: "Inscrivez-vous pour recevoir 15% de réduction sur votre premier achat de luxe, plus un accès anticipé aux nouveautés.",
    unlock: "Débloquer",
    campaign: "Film de Campagne",
    podcast: "Notre Podcast",
    iconic: "Créations Iconiques",
    iconic_desc: "Découvrez nos chefs-d'œuvre les plus convoités et intemporels.",
    explore_full: "Explorer Toute la Collection",
    community: "Rejoignez une communauté mondiale de femmes qui dirigent avec confiance et grâce. Suivez notre voyage dans les coulisses, découvrez des conseils de style et partagez votre parfum signature.",
    follow: "Suivre @JuzeyParfumes",
    all_fragrances: "Tous les Parfums",
    floral: "Floral",
    woody: "Boisé",
    fresh: "Frais",
    oriental: "Oriental",
    gift_sets: "Coffrets Cadeaux",
    faq: "FAQ",
    social: "Réseaux Sociaux",
    rights: "© 2026 Juzey Parfumes. Tous droits réservés. Conçu pour le luxe."
  }
};

function setLanguage(lang) {
  if (!translations[lang]) lang = 'en';
  localStorage.setItem('juzey_lang', lang);
  
  document.documentElement.dir = 'ltr';
  document.documentElement.lang = lang;
  document.body.style.fontFamily = "var(--font-body)";

  // Update DOM elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      if (key === 'hero_title') {
        el.innerHTML = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  // Highlight active lang button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.style.color = 'var(--color-gold)';
    } else {
      btn.style.color = 'var(--color-text-light)';
    }
  });
}

// Init language on load
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('juzey_lang') || 'en';
  setLanguage(savedLang);

  // Add click listeners to lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      setLanguage(e.target.getAttribute('data-lang'));
    });
  });
});
