

//search bar
const search_input_area = document.querySelector("#search_input");
const search_suggestion = document.querySelector(".search_suggestion")
const close_btn = document.querySelector(".search_close");
const search_container = document.querySelector(".search_bar");
const show_button =document.querySelector(".search_icon");


search_input_area.addEventListener("focus", () => {
  search_suggestion.style.animation = "fade_top 1s ease-out forwards alternate";
})

//show searh bar 
show_button.addEventListener("click", () => {
  search_container.style.animation = "show_searchbar 1s ease-out forwards alternate";
  document.body.style.overflow = "hidden";
})

//hide search bar
close_btn.addEventListener("click", () => {
  search_container.style.animation = "fade_down 1s ease-out forwards alternate";
  document.body.style.overflow = "auto";
  search_suggestion.style.animation = "none";
})

// cookies accept button function
const cookies_button = document.querySelector(".open_btn");
const cookies_area = document.querySelector(".cookies_alert");
const close_button = document.querySelector(".close_btn")


//preloader
const preloader_area = document.querySelector(".preloader")
window.addEventListener("load", () => {
  setTimeout(() => {
 preloader_area.style.display = "none"
  },2000)
  close_button.addEventListener("click", () => {
    cookies_area.style.animation = "cookies_close 2s ease-in-out  forwards alternate"
    })
    cookies_area.style.animation="cookies_open 2s ease-in 2s forwards alternate";
  cookies_button.addEventListener("click", () => {
    cookies_area.style.animation = "cookies_close 2s ease-in-out  forwards alternate"
    })
})

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
    navigation: {
      nextEl: ".swiper-button-next3",
      prevEl: ".swiper-button-prev3",
    },
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
      el: ".swiper-paginationH",
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

  var swiper = new Swiper(".mySwiper4", {
    //  autoplay: true,
      spaceBetween: 0,
      slidesPerView: 1,
      navigation: {
        nextEl: ".swiper-button-next4",
        prevEl: ".swiper-button-prev4",
      },
      pagination: {
        el: ".swiper-pagination4",
        clickable: true,
      },
      breakpoints: {
       
        576: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        800: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
        1140:{
          slidesPerView: 4,
          spaceBetween: 25,
        }
      }
    });
  

  // accordian script
  $(".accordion-content").css("display", "none");

  $(".accordion-title").click(function () {
     $(".accordion-title").not(this).removeClass("open");
     $(".accordion-title").not(this).next().slideUp(300);
     $(this).toggleClass("open");
     $(this).next().slideToggle(300);
  });