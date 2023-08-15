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
    else {
        alert("Sorry we don't sell " + "\"" + s_box + "\"");
    }
});
// search button ends
// Buy now button 
document.getElementById("addC-btn").addEventListener('click', () => {
    window.open("/add to cart/add_to_cart.html", "_parent");
});
document.getElementById("buy-btn").addEventListener('click', () => {
    window.open("/bn.html", "_parent");
});