document.addEventListener("DOMContentLoaded", function() {
  const popupVideo = document.querySelector('.pop-up_video.w-video.w-embed');
  if (popupVideo) {
    popupVideo.style.paddingTop = '0%';
  }
});

/* ---- */

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: 'vertical', // vertical, horizontal
  gestureDirection: 'vertical', // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

//get scroll value
lenis.on('scroll', ({
  scroll,
  limit,
  velocity,
  direction,
  progress
}) => {
  //console.log({ scroll, limit, velocity, direction, progress });
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

/* ---- */

gsap.registerPlugin(ScrollTrigger)

function setDropdowns() {
  const wraps = gsap.utils.toArray('.select-wrap')
  const selectItems = gsap.utils.toArray('.select-dropdown-item')

  selectItems.forEach(item => {
    const parentWrap = item?.closest('.select-wrap')

    if (!parentWrap) return

    const label = parentWrap.querySelector('.select-label')
    const dropdown = parentWrap.querySelector('.select-dropdown')
    const inputHiden = parentWrap.querySelector('.input.input_hiden')

    item.addEventListener('click', () => {
      label.textContent = item.textContent
      dropdown.classList.remove('active')

      if (inputHiden) {
        inputHiden.value = item.textContent
      }
    })
  })

  wraps.forEach(wrap => {
    const dropdown = wrap.querySelector('.select-dropdown')
    const label = wrap.querySelector('.select-label')

    label.addEventListener('click', () => {
      gsap.utils.toArray('.select-dropdown').forEach(it => {
        if (it === dropdown) return
        else {
          it?.classList?.remove('active')
        }
      })
      dropdown?.classList?.toggle('active')
    })
  })
}

function animateSlider() {
  let currentSlide = 0

  const sliderButtons = gsap.utils.toArray('.w-slider-dot')
  sliderButtons.forEach((btn, idx) => {
    currentSlide = idx
  })

  let isAnimating = false
  let previosStep = null
  console.log(sliderButtons)

  ScrollTrigger.create({
    trigger: '.sticky-wrap-outer',
    start: 'top top',
    endTrigger: '.sticky-wrap-inner.mt-100-vh',
    end: '-=300vh',
    onUpdate: ({
      progress
    }) => {
      if (progress <= .2) {
        if (previosStep === .2) return

        previosStep = .2

        sliderButtons[0]?.click()
        console.log('1')
      } else if (progress <= .4) {
        if (previosStep === .4) return
        previosStep = .4
        sliderButtons[1]?.click()
        console.log('2')
      } else if (progress <= .6) {
        if (previosStep === .6) return
        previosStep = .6
        sliderButtons[2]?.click()
        console.log('3')
      } else if (progress <= .8) {
        if (previosStep === .8) return
        previosStep = .8
        sliderButtons[3]?.click()
        console.log('4')
      } else if (progress <= 1) {
        if (previosStep === 1) return
        previosStep = 1
        sliderButtons[4]?.click()
        console.log('5')
      }
    }
  })
}

const tl = gsap.timeline();

tl.fromTo(
  ".sections section.section.pt-32", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  }, {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    ease: "none",
  }
);
ScrollTrigger.create({
  animation: tl,
  trigger: ".sections section.section.pt-32",
  start: "top top",
  end: "bottom bottom",
  scrub: true,
});



const textWrap = document.querySelectorAll(".about-slider_mask p.anim-text")

textWrap.forEach((item) => {
  const chars = item?.textContent?.split("")

  item.textContent = ""

  chars?.forEach((char) => {
    const span = document.createElement("span")

    span.classList.add("anim-char")

    span.textContent = char
    item.appendChild(span)
  })
})

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    animateSlider()
    setDropdowns()
  }, 500)

  var targetNode = document.querySelector('.about-slider_mask');
  var lastSlideChange = null;

  if (targetNode) {
    var observer = new MutationObserver(function(mutationsList, observer) {
      mutationsList.forEach(function(mutation) {
        if (mutation.type === 'childList') {
          var currentSlideChange = new Date();
          if (!lastSlideChange || (currentSlideChange - lastSlideChange) > 100) {
            const tl = gsap.timeline({
              paused: true
            })

            tl.to(".about-slider_mask_slide.w-slide p.anim-text span", {
              color: `rgba(56, 51, 47, 0.15)`,
              delay: 0.4,
              duration: 0.01,
            })

            tl.to(
              ".about-slider_mask_slide.w-slide:not(.w-slide[aria-hidden]) p.anim-text span", {
                color: "#38332f",
                duration: 0.1,
                stagger: 0.05,
              }
            )

            tl.play()
            lastSlideChange = currentSlideChange;
          }
        }
      });
    });

    var config = {
      childList: true,
      subtree: true
    };

    observer.observe(targetNode, config);
  }
});


/* ---- */

let mainCarousel = ".news-cms_list";
let mainSlides = ".news-cms_list_item";
let parallaxPercentage = 0;

let flkty = new Flickity(mainCarousel, {
  contain: true,
  freeScroll: true,
  percentPosition: true,
  pageDots: false,
  cellSelector: mainSlides,
  cellAlign: "left",
  resize: true,
  selectedAttraction: 0.01,
  dragThreshold: 1,
  freeScrollFriction: 0.03,
});

/* ---- */

$('.pin.is-01').on('mouseenter mouseleave', function() {
  $(this).siblings('.pin-visual.is-01').toggleClass('show');
  $(this).find('.pin-details').toggleClass('show');
});

$('.pin.is-02').on('mouseenter mouseleave', function() {
  $(this).siblings('.pin-visual.is-02').toggleClass('show');
  $(this).find('.pin-details').toggleClass('show');
});

$('.pin.is-03').on('mouseenter mouseleave', function() {
  $(this).siblings('.pin-visual.is-03').toggleClass('show');
  $(this).find('.pin-details').toggleClass('show');
});

$('.pin.is-04').on('mouseenter mouseleave', function() {
  $(this).siblings('.pin-visual.is-04').toggleClass('show');
  $(this).find('.pin-details').toggleClass('show');
});

$('.pin.is-05').on('mouseenter mouseleave', function() {
  $(this).siblings('.pin-visual.is-05').toggleClass('show');
  $(this).find('.pin-details').toggleClass('show');
});

$('.pin.is-06').on('mouseenter mouseleave', function() {
  $(this).siblings('.pin-visual.is-06').toggleClass('show');
  $(this).find('.pin-details').toggleClass('show');
});

$('.pin.is-07').on('mouseenter mouseleave', function() {
  $(this).siblings('.pin-visual.is-07').toggleClass('show');
  $(this).find('.pin-details').toggleClass('show');
});

/* ---- */

$('.area-tab').on('mouseenter', function() {
  $('.current2').removeClass('current2');
  $(this).addClass('current2');
  $(this).find('.area-tab_name').addClass('current2');
  $(this).find('.area-tab_ico-dot').addClass('current2');
  let AreaIndex = $(this).closest('.area-tabs-cms_list_item').index();
});

/* ---- */

$('.benefit-tab').eq(0).addClass('current');
$('.benefits-cms_list_item').eq(0).addClass('current');
$('.benefit-tab_ico-dot').eq(0).addClass('current');
$('.benefits-card_img-wrap').eq(0).addClass('current');

/* ---- */

$('.benefit-tab').on('mouseenter', function() {
  $('.current').removeClass('current');
  $(this).addClass('current');
  $(this).find('.benefit-tab_ico-dot').addClass('current');
  let BenefitIndex = $(this).closest('.benefit-tabs-cms_list_item').index();
  $('.benefits-cms_list_item').eq(BenefitIndex).addClass('current');
  $('.benefits-card_img-wrap').eq(BenefitIndex).addClass('current');
});

/* ---- */

$('.news-card').on('click', function() {
  let BenefitIndex = $(this).closest('.news-cms_list_item').index();
  $('.news-pop-up-cms').addClass('current3');
  $('.news-pop-up-cms_list_item').eq(BenefitIndex).addClass('current3');
});