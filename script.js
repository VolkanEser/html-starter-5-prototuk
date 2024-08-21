// const toggleBtn = document.querySelector("");
// const mobileMenu = document.querySelector(".click");



// toggleBtn.addEventListener("click", function(){
//     mobileMenu.classList.toggle("active");
// });
// var modal = document.getElementById("giris-yap");

// document.getElementById("giris-yap").onclick = function() {
//     modal.style.display = "block";  }




var modal = document.getElementById("myModal");
var btn = document.getElementById("giris-yap");
var modall = document.getElementById("modall");
var span = document.getElementsByClassName("close")[0];


btn.onclick = function () { modal.style.display = "block"; }

// Kapatma butonuna tıklama olayını ayarla
modall.onclick = function () {
    modal.style.display = "none";
}

document.addEventListener('DOMContentLoaded', function () {
    var yukari = document.getElementById('yukari');

    // Butonu göstermek için scroll event listener
    window.addEventListener('scroll', function () {

        console.log("mevcut yukseklık", window.scrollY )


        if (window.scrollY >=200  ) { // 200px'lik kaydırmadan sonra butonu göster
            yukari.style.display = 'block' ;
        } else {
            yukari.style.display = 'none';
        }
    });

    // Butona tıklandığında sayfayı yukarı kaydır
    yukari.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});


// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }