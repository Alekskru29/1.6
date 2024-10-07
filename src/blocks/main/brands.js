import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// Селекторы секции брендов

// Селекторы секции брендов
const brands = document.querySelector(".brands");
const readMoreBrands = brands?.querySelector(".read-more");
const brandsList = document.querySelector(".brands-list");
const brandsElements = document.querySelectorAll(".brands__item");
const readMoreIcon = readMoreBrands?.querySelector(".read-more__icon");
const readMoreText = readMoreBrands?.querySelector(".read-more__text");
const pagination = document.querySelectorAll(".swiper-pagination");

// Селекторы секции техники
const techContainer = document.querySelector(".tech-container");
const techList = document.querySelector(".tech-list");
const techItems = document.querySelectorAll(".tech-item");
const readMoreTech = techContainer.querySelector(".read-more");
const readMoreTechIcon = readMoreTech?.querySelector(".read-more__icon");
const readMoreTechText = readMoreTech?.querySelector(".read-more__text");

// Селекторы секции с ценами
const pricesSection = document.querySelector(".prices-section");
const pricesSectionHeader = pricesSection?.querySelector(".prices-section__header");
const pricesList = pricesSection?.querySelector(".prices-list");
const pricesListItems = pricesSection?.querySelectorAll(".prices-list__item");
const pricesListServiceName = pricesSection?.querySelectorAll(".prices-list__service-name");
const pricesListServiceCost = pricesSection?.querySelectorAll(".prices-list__service-cost");
const pricesListServiceDuration = pricesSection?.querySelectorAll(".prices-list__service-duration");
const pricesListOrderBtn = pricesSection?.querySelectorAll(".prices-list__order-btn");

// Измеряем размер экрана
const checkScreen = (screenWidth) => {
  if (screenWidth < 768) { // Условия для мобильной версии
    if (!brands.classList.contains("swiper-container")) {
      readMoreBrands.style.display = "none";
      brands.classList.add("swiper-container");
      brandsList.classList.add("swiper-wrapper");
      brandsElements.forEach(e => e.classList.add("swiper-slide"));
      const brandsSwiper = new Swiper('.brands ', {
        slidesPerView: 1,
        spaceBetween: 16,
        width: 240,
        height: 72,
        pagination: {
          el: '.swiper-pagination',
        },
      });
    }
    if (!techContainer.classList.contains("swiper-container")) {
      readMoreTech.style.display = "none";
      techList.classList.add("swiper-wrapper");
      techItems.forEach(e => e.classList.add("swiper-slide"));
      const techSwiper = new Swiper('.tech-container', {
        slidesPerView: 1,
        spaceBetween: 16,
        pagination: {
          el: '.swiper-pagination',
        },
      });
    }
    if (!pricesSection.classList.contains("swiper-container")) {
      pricesSectionHeader.style.display = "none";
      pricesList.classList.add("swiper-wrapper");
      pricesListItems.forEach(e => e.classList.add("swiper-slide"));
      const pricesSwiper = new Swiper('.prices-section', {
        slidesPerView: 1,
        spaceBetween: 16,
        pagination: {
          el: '.swiper-pagination',
        },
      });
    }
    // Показываем pagination
    pagination.forEach(e => e.style.visibility = "visible");
  } else if (screenWidth < 1600) { // Условия для средней версии
    brands.classList.toggle("swiper-container", false);
    techContainer.classList.toggle("swiper-container", false);
    pricesSection.classList.toggle("swiper-container", false);
    readMoreBrands.style.display = "block";
    readMoreTech.style.display = "block";
    pricesSectionHeader.style.display = "flex";
    brandsList.style.height = "160px";
    brandsList.style.overflow = "hidden";
    techList.style.height = "160px";
    techList.style.overflow = "hidden";
    pricesList.style.height = "324px";
    pricesList.style.overflow = "hidden";
    // Скрываем pagination
    pagination.forEach(e => e.style.visibility = "hidden");
  } else { // Условия для десктопной версии
    brands.classList.toggle("swiper-container", false);
    techContainer.classList.toggle("swiper-container", false);
    pricesSection.classList.toggle("swiper-container", false);
    readMoreBrands.style.display = "block";
    readMoreTech.style.display = "block";
    pricesSectionHeader.style.display = "flex";
    brandsList.style.height = "100%";
    brandsList.style.overflow = "visible";
    techList.style.height = "auto";
    techList.style.overflow = "visible";
    pricesList.style.height = "324px";
    pricesList.style.overflow = "visible";
    // Скрываем pagination
    pagination.forEach(e => e.style.visibility = "hidden");
  }
};

window.addEventListener('resize', () => {
  checkScreen(screen.width);
});

checkScreen(screen.width);

const readMore = (container, list, icon, text) => {
  if (text.textContent === 'Показать все') {
    list.style.height = "100%";
    list.style.overflow = "visible";
    icon.style.transform = 'rotate(180deg)';
    text.textContent = 'Скрыть';

  } else {
    list.style.height = "160px";
    list.style.overflow = "hidden";
    icon.style.transform = 'rotate(0)';
    text.textContent = 'Показать все';
  }
}

readMoreBrands.addEventListener('click', () => {
  readMore(brands, brandsList, readMoreIcon, readMoreText);
});

readMoreTech.addEventListener('click', () => {
  readMore(techContainer, techList, readMoreTechIcon, readMoreTechText);
});

