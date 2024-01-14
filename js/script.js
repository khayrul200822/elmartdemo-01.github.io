//sticky header script
$(document).ready(() => {

  const heroSectionBottom = $("#hero_section").offset().top + $("#hero_section").outerHeight();
  $(window).on("scroll", () => {
    const scrollPosition = $(window).scrollTop();

    if (scrollPosition >= (heroSectionBottom-300)) {
      $("#header").addClass("sticky_animation");
    } else {
      $("#header").removeClass("sticky_animation");
    }
  });
});

//get elements
const optionMenu = document.querySelectorAll(".currency_option li");
const option_value = document.querySelector(".value_area");
const language_option = document.querySelectorAll(".ln_option li")
const language_value =document.querySelector(".ln_value");
optionMenu.forEach(item => {
    item.addEventListener("click" , () => {
        option_value.textContent = item.textContent;
    })
})
language_option.forEach(ln_item => {
    ln_item.addEventListener("click" , () => {
        language_value.textContent = ln_item.textContent;
    })
})


//add to cart count
const increase_button = document.querySelectorAll(".increase");
const decrease_button = document.querySelectorAll(".decrease");
const cart_value_input = document.querySelectorAll(".cart_value");

// let input_value = cart_value_input.value;
increase_button.forEach((btn , index) => {
  btn.addEventListener("click", () => { 
    let inputValue = parseInt(cart_value_input[index].value);
    cart_value_input[index].value = inputValue+1;
   
  })
})
decrease_button.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    let input_value = parseInt(cart_value_input[index].value);
    if(input_value > 1)
    cart_value_input[index].value = input_value-1;
  })
})


  var swiper = new Swiper(".mySwiper", {
    // loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1060: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    }
  });
  var swiper2 = new Swiper(".mySwiper2", {
    // loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    thumbs: {
      swiper: swiper,
    },
  
  });

  var swiper = new Swiper(".mySwiper3", {
  //  autoplay: true,
    spaceBetween: 10,
    slidesPerView: 3,
    navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
    },
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1060: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    }
  });