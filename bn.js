function isempty() {
    let fn = document.getElementById("fn").value;
    let ln = document.getElementById("ln").value;
    let ad = document.getElementById("ad").value;
    let mn = document.getElementById("mn").value;
    let st = document.getElementById("st").value;
    let pc = document.getElementById("pc").value;
    let cn = document.getElementById("cn").value;
    let ex = document.getElementById("ex").value;
    let cv = document.getElementById("cv").value;

    if (fn != "" && ln != "" && ad != "" && mn != "" && st != "" && pc != "" && cn != "" && ex != "" && cv != "") {
        document.getElementById("buy").removeAttribute("disabled");
    }
}
function success() {
    alert("your order has been placed successfully ! ! !");
}