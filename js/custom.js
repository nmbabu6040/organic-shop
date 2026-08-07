const heroSwiper = new Swiper('.hero-part .swiper', {
  direction: 'horizontal',
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },

  // Pagination নিশ্চিত করুন
  pagination: {
    el: '.hero-part .swiper-pagination', // সঠিক ক্লাস দেওয়া হয়েছে
    clickable: true, // ডটে ক্লিক করলে স্লাইড পরিবর্তন হবে
  },

  navigation: {
    nextEl: '.hero-part .swiper-button-next',
    prevEl: '.hero-part .swiper-button-prev',
  },
});

// Best Selling Product Swiper
const productSwiper = new Swiper('.product-swiper', {
  slidesPerView: 1, // মোবাইলে ১টি প্রোডাক্ট দেখাবে
  spaceBetween: 20, // প্রোডাক্টের মাঝে ২০px গ্যাপ থাকবে
  loop: true,

  // অটো প্লে (ইচ্ছা হলে চালু রাখতে পারেন)
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // নেভিগেশন বাটন
  navigation: {
    nextEl: '.product-swiper .swiper-button-next',
    prevEl: '.product-swiper .swiper-button-prev',
  },

  // বিভিন্ন স্ক্রিন সাইজের জন্য কাস্টম সংখ্যা (Responsive Breakpoints)
  breakpoints: {
    576: {
      slidesPerView: 2, // স্মল স্ক্রিন (যেমন বড় মোবাইল)
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3, // ট্যাবলেট
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4, // ছোট ল্যাপটপ/ডেস্কটপ
      spaceBetween: 25,
    },
    1200: {
      slidesPerView: 5, // বড় স্ক্রিন
      spaceBetween: 30,
    },
  },
});

// Best Selling Product Swiper
const categorySwiper = new Swiper('.category-swiper', {
  slidesPerView: 1, // মোবাইলে ১টি প্রোডাক্ট দেখাবে
  spaceBetween: 20, // প্রোডাক্টের মাঝে ২০px গ্যাপ থাকবে
  loop: true,

  // অটো প্লে (ইচ্ছা হলে চালু রাখতে পারেন)
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // নেভিগেশন বাটন
  navigation: {
    nextEl: '.category-swiper .swiper-button-next',
    prevEl: '.category-swiper .swiper-button-prev',
  },

  // বিভিন্ন স্ক্রিন সাইজের জন্য কাস্টম সংখ্যা (Responsive Breakpoints)
  breakpoints: {
    576: {
      slidesPerView: 2, // স্মল স্ক্রিন (যেমন বড় মোবাইল)
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3, // ট্যাবলেট
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5, // ছোট ল্যাপটপ/ডেস্কটপ
      spaceBetween: 25,
    },
    1200: {
      slidesPerView: 7, // বড় স্ক্রিন
      spaceBetween: 30,
    },
  },
});

// ১. থাম্বনেইল স্লাইডার ইনিশিয়ালাইজেশন
const galleryThumbs = new Swiper('.gallery-thumbs', {
  direction: 'vertical',
  slidesPerView: 4,
  spaceBetween: 10,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    // মোবাইলে হরাইজন্টাল ডিরেকশন করার জন্য
    0: {
      direction: 'horizontal',
      slidesPerView: 4,
    },
    768: {
      direction: 'vertical',
      slidesPerView: 4,
    },
  },
});

// ২. মূল ইমেজ স্লাইডার ইনিশিয়ালাইজেশন
const galleryMain = new Swiper('.gallery-main', {
  spaceBetween: 15,
  navigation: {
    nextEl: '.gallery-main .swiper-button-next',
    prevEl: '.gallery-main .swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs, // থাম্বনেইলের সাথে লিংক করা হলো
  },
});

// count down timer
function startReusableCountdowns() {
  const timerElements = document.querySelectorAll('.timer-box');

  timerElements.forEach((timerBox) => {
    // HTML-এর data-target থেকে ডেট নিবে, না থাকলে ডিফল্ট ডেট ব্যবহার করবে
    const targetDateString =
      timerBox.getAttribute('data-target') || 'Dec 31, 2026 23:59:59';
    const targetDate = new Date(targetDateString).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference < 0) {
        clearInterval(interval);
        timerBox.innerHTML = "<span class='expired-text'>Offer Expired!</span>";
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      // নির্দিষ্ট টাইমার বক্সের ভেতরের ক্লাস অনুযায়ী ডাটা বসানো
      const daysEl = timerBox.querySelector('.cd-days');
      const hoursEl = timerBox.querySelector('.cd-hours');
      const minsEl = timerBox.querySelector('.cd-mins');
      const secsEl = timerBox.querySelector('.cd-secs');

      if (daysEl) daysEl.innerText = days < 10 ? '0' + days : days;
      if (hoursEl) hoursEl.innerText = hours < 10 ? '0' + hours : hours;
      if (minsEl) minsEl.innerText = minutes < 10 ? '0' + minutes : minutes;
      if (secsEl) secsEl.innerText = seconds < 10 ? '0' + seconds : seconds;
    }, 1000);
  });
}

// ফাংশনটি কল করা হলো
startReusableCountdowns();

//amazing slider
const amazingSwiper = new Swiper('.amazing-part', {
  direction: 'horizontal',
  loop: true,
  //   effect: 'fade',
  //   fadeEffect: {
  //     crossFade: true,
  //   },

  // Pagination নিশ্চিত করুন
  pagination: {
    el: '.amazing-part .swiper-pagination', // সঠিক ক্লাস দেওয়া হয়েছে
    clickable: true, // ডটে ক্লিক করলে স্লাইড পরিবর্তন হবে
  },

  navigation: {
    nextEl: '.amazing-part .swiper-button-next',
    prevEl: '.amazing-part .swiper-button-prev',
  },
});
