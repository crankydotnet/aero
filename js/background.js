function bgset() {
let img = localStorage.getItem("image")
if (img === null){}
else {
document.body.style.backgroundImage = "url(" + img + ")"
}
}