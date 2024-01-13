
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

  var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
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