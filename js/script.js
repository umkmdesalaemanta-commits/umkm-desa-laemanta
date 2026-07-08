/*==================================================
    DIGITALISASI UMKM DESA LAEMANTA
===================================================*/


/*==================================================
            NAVBAR SCROLL EFFECT
===================================================*/

const navbar = document.querySelector("nav");

if (navbar) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            navbar.style.background = "rgba(27,94,32,.98)";
            navbar.style.boxShadow = "0 8px 20px rgba(0,0,0,.15)";

        } else {

            navbar.style.background = "rgba(27,94,32,.88)";
            navbar.style.boxShadow = "none";

        }

    });

}


/*==================================================
            ACTIVE MENU
===================================================*/

const currentPage =
window.location.pathname.split("/").pop();

const menu =
document.querySelectorAll("nav ul li a");

menu.forEach(link=>{

    const href = link.getAttribute("href");

    if(href===currentPage){

        link.classList.add("active");

    }

});


/*==================================================
            SMOOTH SCROLL
===================================================*/

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

anchor.addEventListener("click",

function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute("href")
);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


/*==================================================
            BACK TO TOP BUTTON
===================================================*/

const backTop =
document.createElement("div");

backTop.className="back-top";

backTop.innerHTML='<i class="fas fa-arrow-up"></i>';

document.body.appendChild(backTop);


backTop.style.display="none";


window.addEventListener("scroll",()=>{

if(window.scrollY>350){

backTop.style.display="flex";

}

else{

backTop.style.display="none";

}

});


backTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


/*==================================================
            SIMPLE FADE ANIMATION
===================================================*/

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade");

}

});

},

{

threshold:.2

});


document.querySelectorAll(

".section-title,.welcome-box,.preview-card,.product-card,.gallery-item,.contact-card,.program-card,.stat-card"

)

.forEach(el=>{

observer.observe(el);

});


/*==================================================
            BUTTON RIPPLE EFFECT
===================================================*/

const buttons =
document.querySelectorAll(".btn");

buttons.forEach(button=>{

button.addEventListener("click",function(e){

const circle =
document.createElement("span");

const size =
Math.max(

this.clientWidth,

this.clientHeight

);

circle.style.width=size+"px";

circle.style.height=size+"px";

circle.style.left=

e.offsetX-size/2+"px";

circle.style.top=

e.offsetY-size/2+"px";

circle.classList.add("ripple");

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});


/*==================================================
            CONSOLE MESSAGE
===================================================*/

console.log(

"%cDigitalisasi UMKM Desa Laemanta",

"color:green;font-size:20px;font-weight:bold;"

);


/*==================================================
            HERO BACKGROUND SLIDESHOW
===================================================*/

const hero = document.querySelector("header");

const heroImages = [

    "img/hero.jpg",
    "img/hero2.jpg",
    "img/hero3.jpg",
    "img/hero4.jpg"

];

let heroIndex = 0;

function changeHeroBackground(){

    if(!hero) return;

    hero.style.background = `
    linear-gradient(
    rgba(27,94,32,.65),
    rgba(27,94,32,.65)
    ),
    url('${heroImages[heroIndex]}')
    `;

    hero.style.backgroundSize = "cover";
    hero.style.backgroundPosition = "center";

    heroIndex++;

    if(heroIndex >= heroImages.length){

        heroIndex = 0;

    }

}

setInterval(changeHeroBackground,5000);


/*==================================================
            COUNTER ANIMATION
===================================================*/

const counters =
document.querySelectorAll(".counter");

const speed = 100;

function startCounter(counter){

    const target =
    +counter.getAttribute("data-target");

    let count = 0;

    const updateCounter = ()=>{

        const increment =
        Math.ceil(target/speed);

        if(count < target){

            count += increment;

            if(count > target){

                count = target;

            }

            counter.innerText = count;

            requestAnimationFrame(updateCounter);

        }

        else{

            counter.innerText = target;

        }

    };

    updateCounter();

}

const counterObserver =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

startCounter(entry.target);

counterObserver.unobserve(entry.target);

}

});

},{threshold:0.5});

counters.forEach(counter=>{

counterObserver.observe(counter);

});


/*==================================================
            CURRENT YEAR
===================================================*/

const year =
document.querySelector("#currentYear");

if(year){

    year.textContent =
    new Date().getFullYear();

}


/*==================================================
            CURRENT TIME
===================================================*/

const clock =
document.querySelector("#clock");

function updateClock(){

    if(!clock) return;

    const now = new Date();

    const jam =
    String(now.getHours()).padStart(2,"0");

    const menit =
    String(now.getMinutes()).padStart(2,"0");

    const detik =
    String(now.getSeconds()).padStart(2,"0");

    clock.innerHTML =

    jam + ":" +

    menit + ":" +

    detik;

}

setInterval(updateClock,1000);

updateClock();


/*==================================================
            IMAGE PRELOAD
===================================================*/

heroImages.forEach(image=>{

    const img = new Image();

    img.src = image;

});


/*==================================================
            PAGE LOADED
===================================================*/

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});
/*==================================================
            GALERI LIGHTBOX
===================================================*/

const galleryImages =
document.querySelectorAll(".gallery-item img");

if(galleryImages.length > 0){

const lightbox =
document.createElement("div");

lightbox.id="lightbox";

lightbox.innerHTML=`

<span class="close-lightbox">&times;</span>

<img id="lightbox-img">

`;

document.body.appendChild(lightbox);

const lightboxImg =
document.getElementById("lightbox-img");

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.classList.add("show");

lightboxImg.src=img.src;

});

});

lightbox.addEventListener("click",()=>{

lightbox.classList.remove("show");

});

}


/*==================================================
            LIVE SEARCH PRODUK
===================================================*/

const searchInput =
document.querySelector("#searchProduk");

const products =
document.querySelectorAll(".product-card");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

const keyword =
searchInput.value.toLowerCase();

products.forEach(card=>{

const text =
card.innerText.toLowerCase();

if(text.includes(keyword)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}


/*==================================================
            WHATSAPP BUTTON
===================================================*/

const waButtons =
document.querySelectorAll(".wa-order");

waButtons.forEach(button=>{

button.addEventListener("click",()=>{

const nama =
button.dataset.nama;

const nomor =
button.dataset.nomor;

const pesan =

`Halo, saya tertarik dengan produk ${nama} yang ada di Website Digitalisasi UMKM Desa Laemanta.`;

const url=

`https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;

window.open(url,"_blank");

});

});


/*==================================================
            LOADING SCREEN
===================================================*/

const loader =
document.querySelector(".loader");

window.addEventListener("load",()=>{

if(loader){

setTimeout(()=>{

loader.classList.add("loader-hide");

},800);

}

});


/*==================================================
            IMAGE LAZY LOADING
===================================================*/

const lazyImages =
document.querySelectorAll("img[data-src]");

const lazyObserver =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const img=entry.target;

img.src=img.dataset.src;

img.removeAttribute("data-src");

lazyObserver.unobserve(img);

}

});

});

lazyImages.forEach(img=>{

lazyObserver.observe(img);

});


/*==================================================
            PREVENT EMPTY LINK
===================================================*/

document.querySelectorAll("a").forEach(link=>{

if(

link.getAttribute("href")==="#" ||

link.getAttribute("href")===""

){

link.addEventListener("click",e=>{

e.preventDefault();

});

}

});


/*==================================================
            WEBSITE INFORMATION
===================================================*/

console.log("-----------------------------------");

console.log("Digitalisasi UMKM Desa Laemanta");

console.log("Program Kerja KKN UNTAD 2026");

console.log("Author : Aisyah D Karim");

console.log("-----------------------------------");