// menu button starts

let menu = document.querySelector(".menu_btn");
menu.addEventListener("click", () => {
  let line = document.querySelector(".line");

  let side_menu = document.querySelector(".side-menu");

  line.classList.toggle("active");
  side_menu.classList.toggle("side-atv");
});

// menu button ends

let logo_btn = document
  .querySelector("#logo-btn")
  .addEventListener("click", () => {
    window.open("main.html", "_parent");
  });

// search button starts
let s_btn = document.getElementById("search-btn");

s_btn.addEventListener("click", () => {
  const categories = [
    { keyword: ["mobile", "mobiles", "phone", "phones", "mobile phone", "mobile phones"], url: "Catergories/Mobile.html" },
    { keyword: ["laptop", "computer", "laptops", "computers"], url: "Catergories/Laptops.html" },
    {
      keyword: [
        "headset",
        "headphone",
        "headphones",
        "earbud",
        "earpod",
        "airpod",
        "earbuds",
        "earpods",
        "airpods",
      ],
      url: "Catergories/Headphone.html",
    },
    {
      keyword: [
        "watch",
        "digital watch",
        "wrist watch",
        "wrist band",
        "smart watch",
      ],
      url: "Catergories/Watches.html",
    },
  ];

  let s_box = document.getElementById("search-box").value.toLowerCase();
  let foundMatch = false;

  categories.forEach((category) => {
    if (category.keyword.some(keyword => keyword === s_box)) {
      window.open(category.url, "_parent");
      foundMatch = true;
    }
  });

  if (!foundMatch) {
    alert("Match Not Found!");
  }
});

// search button ends

// Image sliding Starts
let image = document.querySelector(".slide");
let i = 0;
let images = [
  "url(Banner_Images/Oppo_f21_pro.jpg)",
  "url(Banner_Images/mi_12pro.jpg)",
  "url(Banner_Images/oneplus_10pro.jpg)",
];

function move() {
  if (++i >= images.length) {
    i = 0;
  }

  image.style.backgroundImage = images[i];
}

setInterval(move, 3000);
// Image sliding Ends