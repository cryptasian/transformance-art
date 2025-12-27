/**
* Template Name: Moderna
* Template URL: https://bootstrapmade.com/free-bootstrap-template-corporate-moderna/
* Updated: May 7 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 20
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-wrap',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Animation on scroll
   */
  document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

  /**
   * Init Clients swiper sliders
   */
  function initClientsSwiper() {
    document.querySelectorAll('.clients-swiper').forEach(function(swiper) {
      let config = JSON.parse(swiper.querySelector('.swiper-config').innerHTML.trim());
      new Swiper(swiper, config);
    });
  }
  window.addEventListener('load', initClientsSwiper);

})()

const rotatingWordContainer = document.getElementById("rotating-word");

if (rotatingWordContainer) {
  const words = ["dance", "music", "poetry", "sculpture", "theater", "painting", "storytelling", "opera", "photography", "expression!"];
  let i = 0;

  function animateWord(word) {
    rotatingWordContainer.innerHTML = ""; // Clear previous content

    word.split("").forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.className = "letter";
      span.style.animationDelay = `${index * 0.05}s`;
      rotatingWordContainer.appendChild(span);
    });
  }

  animateWord(words[i]);

  setInterval(() => {
    i = (i + 1) % words.length;
    animateWord(words[i]);
  }, 3000);
}


if (document.getElementById("belle-bio-btn")) {
  document.getElementById("belle-bio-btn").addEventListener("click", bellebiobtn);
}
if (document.getElementById("ada-bio-btn")) {
  document.getElementById("ada-bio-btn").addEventListener("click", adabiobtn);
}
if (document.getElementById("alison-bio-btn")) {
  document.getElementById("alison-bio-btn").addEventListener("click", alisonbiobtn);
}
if (document.getElementById("natalie-bio-btn")) {
  document.getElementById("natalie-bio-btn").addEventListener("click", nataliebiobtn);
}
if (document.getElementById("philipwharton-bio-btn")) {
  document.getElementById("philipwharton-bio-btn").addEventListener("click", philipwhartonbiobtn);
}
if (document.getElementById("gregtardy-bio-btn")) {
  document.getElementById("gregtardy-bio-btn").addEventListener("click", gregtardybiobtn);
}
if (document.getElementById("nickkircher-bio-btn")) {
  document.getElementById("nickkircher-bio-btn").addEventListener("click", nickkircherbiobtn);
}
if (document.getElementById("tinahoffmann-bio-btn")) {
  document.getElementById("tinahoffmann-bio-btn").addEventListener("click", tinahoffmannbiobtn);
}
if (document.getElementById("carlahanson-bio-btn")) {
  document.getElementById("carlahanson-bio-btn").addEventListener("click", carlahansonbiobtn);
}
if (document.getElementById("williamthompson-bio-btn")) {
  document.getElementById("williamthompson-bio-btn").addEventListener("click", williamthompsonbiobtn);
}

function bellebiobtn() {
  var bio = document.getElementById("belle-bio")
  var biobtn = document.getElementById("belle-bio-btn")

  if (bio.classList.contains('text-overflow-clamp')) {
    bio.classList.remove("text-overflow-clamp")
    biobtn.innerHTML = "Read Less"
  } else {
    bio.classList.add("text-overflow-clamp")
    biobtn.innerHTML = "Read More"
  }
}
function adabiobtn() {
  var bio = document.getElementById("ada-bio")
  var biobtn = document.getElementById("ada-bio-btn")

  if (bio.classList.contains('text-overflow-clamp')) {
    bio.classList.remove("text-overflow-clamp")
    biobtn.innerHTML = "Read Less"
  } else {
    bio.classList.add("text-overflow-clamp")
    biobtn.innerHTML = "Read More"
  }
}
function alisonbiobtn() {
  var bio = document.getElementById("alison-bio")
  var biobtn = document.getElementById("alison-bio-btn")

  if (bio.classList.contains('text-overflow-clamp')) {
    bio.classList.remove("text-overflow-clamp")
    biobtn.innerHTML = "Read Less"
  } else {
    bio.classList.add("text-overflow-clamp")
    biobtn.innerHTML = "Read More"
  }
}

function nataliebiobtn() {
  var bio = document.getElementById("natalie-bio")
  var biobtn = document.getElementById("natalie-bio-btn")

  if (bio.classList.contains('text-overflow-clamp')) {
    bio.classList.remove("text-overflow-clamp")
    biobtn.innerHTML = "Read Less"
  } else {
    bio.classList.add("text-overflow-clamp")
    biobtn.innerHTML = "Read More"
  }
}

function philipwhartonbiobtn() {
  var bio = document.getElementById("philipwharton-bio")
  var biobtn = document.getElementById("philipwharton-bio-btn")

  if (bio.classList.contains('text-overflow-clamp')) {
    bio.classList.remove("text-overflow-clamp")
    biobtn.innerHTML = "Read Less"
  } else {
    bio.classList.add("text-overflow-clamp")
    biobtn.innerHTML = "Read More"
  }
}

function gregtardybiobtn() {
  var bio = document.getElementById("gregtardy-bio")
  var biobtn = document.getElementById("gregtardy-bio-btn")

  if (bio.classList.contains('text-overflow-clamp')) {
    bio.classList.remove("text-overflow-clamp")
    biobtn.innerHTML = "Read Less"
  } else {
    bio.classList.add("text-overflow-clamp")
    biobtn.innerHTML = "Read More"
  }
}

function nickkircherbiobtn() {
  var bio = document.getElementById("nickkircher-bio")
  var biobtn = document.getElementById("nickkircher-bio-btn")

  if (bio.classList.contains('text-overflow-clamp')) {
    bio.classList.remove("text-overflow-clamp")
    biobtn.innerHTML = "Read Less"
  } else {
    bio.classList.add("text-overflow-clamp")
    biobtn.innerHTML = "Read More"
  }
}

function tinahoffmannbiobtn() {
  var bio = document.getElementById("tinahoffmann-bio")
  var biobtn = document.getElementById("tinahoffmann-bio-btn")

  if (bio.classList.contains('text-overflow-clamp')) {
    bio.classList.remove("text-overflow-clamp")
    biobtn.innerHTML = "Read Less"
  } else {
    bio.classList.add("text-overflow-clamp")
    biobtn.innerHTML = "Read More"
  }
}

function carlahansonbiobtn() {
  var bio = document.getElementById("carlahanson-bio")
  var biobtn = document.getElementById("carlahanson-bio-btn")

  if (bio.classList.contains('text-overflow-clamp')) {
    bio.classList.remove("text-overflow-clamp")
    biobtn.innerHTML = "Read Less"
  } else {
    bio.classList.add("text-overflow-clamp")
    biobtn.innerHTML = "Read More"
  }
}

function williamthompsonbiobtn() {
  var bio = document.getElementById("williamthompson-bio")
  var biobtn = document.getElementById("williamthompson-bio-btn")

  if (bio.classList.contains('text-overflow-clamp')) {
    bio.classList.remove("text-overflow-clamp")
    biobtn.innerHTML = "Read Less"
  } else {
    bio.classList.add("text-overflow-clamp")
    biobtn.innerHTML = "Read More"
  }
}