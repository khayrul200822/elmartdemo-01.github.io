
//search bar
const search_input_area = document.querySelector("#search_input");
const search_suggestion = document.querySelector(".search_suggestion")
const close_btn = document.querySelector(".search_close");
const search_container = document.querySelector(".search_bar");
const show_button = document.querySelectorAll(".search_icon");


search_input_area.addEventListener("focus", () => {
  search_suggestion.style.animation = "fade_top 1s ease-out forwards alternate";
})

//show searh bar 
show_button.forEach(btn => {
  btn.addEventListener("click", () => {
    search_container.style.animation = "show_searchbar 1s ease-out forwards alternate";
    document.body.style.overflow = "hidden";
  })
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
  }, 2000)
  close_button.addEventListener("click", () => {
    cookies_area.style.animation = "cookies_close 2s ease-in-out  forwards alternate"
  })
  cookies_area.style.animation = "cookies_open 2s ease-in 2s forwards alternate";
  cookies_button.addEventListener("click", () => {
    cookies_area.style.animation = "cookies_close 2s ease-in-out  forwards alternate"
  })
})

//sticky header script
$(document).ready(() => {
  const heroSectionBottom = $(".archive-header").offset().top + $(".archive-header").outerHeight();
  $(window).on("scroll", () => {
    const scrollPosition = $(window).scrollTop();

    if (scrollPosition >= (heroSectionBottom)) {
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
const language_value = document.querySelector(".ln_value");
optionMenu.forEach(item => {
  item.addEventListener("click", () => {
    option_value.textContent = item.textContent;
  })
})
language_option.forEach(ln_item => {
  ln_item.addEventListener("click", () => {
    language_value.textContent = ln_item.textContent;
  })
})
// accordian script
$(".accordion-content").css("display", "none");

$(".accordion-title").click(function () {
  $(".accordion-title").not(this).removeClass("open");
  $(".accordion-title").not(this).next().slideUp(300);
  $(this).toggleClass("open");
  $(this).next().slideToggle(300);
});


//for side bar handling
const sideBar_close = document.querySelector(".side_bar_close");
const side_bar = document.querySelector("aside");
const product_container = document.querySelector(".product_container");
const sideBar_show = document.querySelector(".sidebar_show");

sideBar_close.addEventListener("click", () => {
  side_bar.style.display = "none";
  product_container.style.width = "100%";
  sideBar_show.style.display = "grid";

})
sideBar_show.addEventListener("click", () => {
  side_bar.style.display = "block";
  product_container.style.width = "calc(100% - 300px)";
  sideBar_show.style.display="none"
})
//for sortby popup and filtaring popup
const dropdown = document.querySelector(".pageShow_item_popup")
const dropdown2 = document.querySelector(".short_list")
const dropdown_btn = document.querySelector(".pageShow_select_btn")
const dropdown_btn2 = document.querySelector(".short_by_btn")

let isclicked = true;
const dropdown_handler = (dropdown_area, dropdown_button) => {
  dropdown_button.addEventListener("click", () => {
    if (isclicked) {
      dropdown_area.style.animation = "list_anim 1s linear forwards alternate";
      dropdown_area.style.display = "block"
    } else {
      dropdown_area.style.animation = "list_anim_close 1s linear forwards alternate";
      dropdown_area.style.display = "none"
    }
    isclicked = !isclicked;
  })

}
dropdown_handler(dropdown, dropdown_btn)
dropdown_handler(dropdown2, dropdown_btn2)





//script for price range making
const price_ranges = document.querySelectorAll(".range_div input");
const progress_bar = document.querySelector(".price_progress");
const price_inputs = document.querySelectorAll(".field input");
let price_gap = 100;

price_inputs.forEach(input => {
  input.addEventListener("input", (e) => {
    let minValue = parseInt(price_inputs[0].value);
    let maxValue = parseInt(price_inputs[1].value)
    if (maxValue - minValue >= price_gap && maxValue <= 1000) {
      if (e.target.className === "minNumber") {
        price_ranges[0].value = minValue;
        progress_bar.style.left = (minValue / price_ranges[0].max) * 100 + "%";
      } else {
        price_ranges[1].value = maxValue;
        progress_bar.style.right = 100 - (maxValue / price_ranges[1].max) * 100
      }
    }
  })
})

price_ranges.forEach(input => {
  input.addEventListener("input", (e) => {
    let minValue = parseInt(price_ranges[0].value);
    let maxValue = parseInt(price_ranges[1].value)
    if (maxValue - minValue < price_gap) {
      if (e.target.className === "min_price_range") {
        price_ranges[0].value = maxValue - price_gap
      } else {
        price_ranges[1].value = minValue + price_gap
      }
    } else {
      price_inputs[0].value = minValue;
      price_inputs[1].value = maxValue;
      progress_bar.style.left = (minValue / price_ranges[0].max) * 100 + "%";
      progress_bar.style.right = 100 - (maxValue / price_ranges[1].max) * 100 + "%"
    }
  })
})
