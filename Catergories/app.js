// menu button starts

var menu = document.querySelector(".menu_btn");
menu.addEventListener('click', () => {
    var line = document.querySelector(".line");

    var side_menu = document.querySelector(".side-menu");

    line.classList.toggle("active");
    side_menu.classList.toggle("side-atv");

});

// menu button ends

var logo_btn = document.querySelector("#logo-btn").addEventListener('click', () => {
    window.open("/main.html", "_parent");
});

// search button starts
var s_btn = document.getElementById("search-btn");

s_btn.addEventListener('click', () => {
    var s_box = document.getElementById("search-box").value;

    if (s_box == "Mobile" || s_box == "mobile" || s_box == "MOBILE" || s_box == "Phone" || s_box == "phone" || s_box == "PHONE") {
        window.open("soon.html", "_parent");
    }
    else if (s_box == "Laptop" || s_box == "laptop" || s_box == "LAPTOP" || s_box == "Computer" || s_box == "COMPUTER" || s_box == "computer") {
        window.open("laptop-section.html", "_parent");
    }
    else if (s_box == "Watch" || s_box == "WATCH" || s_box == "watch" || s_box == "Digital Watch" || s_box == "digital watch" || s_box == "DIGITAL WATCH") {
        window.open("soon.html", "_parent");
    }
    else if (s_box == "Oneplus 10 Pro" || s_box == "OnePlus 10 pro" || s_box == "Oneplus 10 pro" || s_box == "oneplus10pro" || s_box == "ONEPLUS 10 PRO" || s_box == "One plus 10 pro" || s_box == "oneplus 10 pro" || s_box == "OnePlus 10 Pro" || s_box == "oneplus10pro") {
        window.open("Readmore/Mobile Phones/OnePlus 10 Pro/oneplus_10pro.html", "_parent");
    }
    else if (s_box == "Oppo Reno 7" || s_box == "Oppo reno 7" || s_box == "oppo Reno 7" || s_box == "opporeno7" || s_box == "OPPO RENO 7" || s_box == "oppo reno 7") {
        window.open("Readmore/Mobile Phones/Oppo Reno 7/oppo_reno7.html", "_parent");
    }
    else {
        alert("Sorry we don't sell " + "\"" + s_box + "\"" + "😅");
    }
});
// search button ends 

// Image sliding Starts
var image = document.querySelector(".slide");
var i = 0;
var images = ["url(Banner_Images/Oppo_f21_pro.jpg)", "url(Banner_Images/mi_12pro.jpg)", "url(Banner_Images/oneplus_10pro.jpg)"];

function move() {
    if (++i >= images.length) {
        i = 0;
    }

    image.style.backgroundImage = images[i];
}

setInterval(move, 3000);
// Image sliding Ends

// categories starts
document.querySelector(".mobile").addEventListener("click", () => {
    window.open("Catergories/Mobile.html", "_parent");
});
document.querySelector(".watch").addEventListener("click", () => {
    window.open("Catergories/smart watches.html", "_parent");
});
document.querySelector(".laptop").addEventListener("click", () => {
    window.open("Catergories/Laptops.html", "_parent");
});
document.querySelector(".headphone").addEventListener("click", () => {
    window.open("Catergories/Headphone.html", "_parent");
});
// categories ends

// Add to cart

var cart = document.getElementById("cart-btn").addEventListener('click', () => {
    window.open("add to cart/add_to_cart.html", "_parent");
});