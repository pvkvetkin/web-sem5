// window.onload = () => {
// var btns = document.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {                   
//     btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     if (current.length > 0) { 
//     current[0].className = current[0].className.replace(" active", "");
//     }
//     this.className += " active";
//     });
// }
// };

window.onload = () => {
var current = location.pathname.split('/')[10];
var menuItems = document.querySelectorAll('.headerLi a');
for (var i = 0, len = menuItems.length; i < len; i++) {
    // console.log(menuItems[i].getAttribute("href").indexOf(current))
    if (menuItems[i].getAttribute("href").indexOf(current) !== -1) {
        menuItems[i].className += " active";
    }
}
};
