// ================================
// DATA PRODUK
// ================================

const products = [

{
    id:1,
    nama:"Gorengan",
    kategori:"produk umkm",
    harga:"Rp2.000 / pcs",
    gambar:"img/gorengan.png",
    deskripsi:"Aneka gorengan hangat seperti bakwan, pisang goreng, tahu isi, dan tempe goreng yang dibuat setiap hari.",
    wa:"6281234567890"
},

{
    id:2,
    nama:"Kopi Robusta",
    kategori:"produk umkm",
    harga:"Mulai Rp30.000",
    gambar:"img/Kopi-robusta.png",
    deskripsi:"Menyediakan berbagai size dengan cita rasa khas.",
    wa:"6285256363396"
},

{
    id:3,
    nama:"Donat & Panada",
    kategori:"produk umkm",
    harga:"Rp5.000/3 pcs",
    gambar:"img/Donat-Panada.png",
    deskripsi:"Menjual donat, panada & risol dengan varian rasa dan toping.",
    wa:"62895405125016"
},

{
    id:4,
    nama:"Laundry",
    kategori:"produk umkm",
    harga:"Rp5.000/kg",
    gambar:"img/Laundry.jpeg",
    deskripsi:"Layanan laundry yang menyediakan jasa cuci dan setrika pakaian dengan hasil bersih, wangi, rapi, serta harga yang terjangkau..",
    wa:"6281355395339"
},

{
    id:5,
    nama:"Teras Celular & Foto copy",
    kategori:"produk umkm",
    harga:"Mulai Rp1.000",
    gambar:"img/Teras Celular & Fotocopy.png",
    deskripsi:" Layanan pulsa, paket data, fotokopi dan percetakan.",
    wa:"6281355395339"
}

];


// ====================================
// MENAMPILKAN PRODUK
// ====================================

const container = document.getElementById("productContainer");

function tampilProduk(data){

container.innerHTML="";

data.forEach((item)=>{

container.innerHTML+=`

<div class="product-card">

<img src="${item.gambar}" alt="${item.nama}">

<div class="product-content">

<span class="kategori">

${item.kategori}

</span>

<h3>

${item.nama}

</h3>

<p>

${item.deskripsi}

</p>

<div class="harga">

${item.harga}

</div>

<div class="produk-button">

<button>

Detail

</button>

<a

class="btn"

target="_blank"

href="https://wa.me/${item.wa}?text=Halo%20saya%20ingin%20memesan%20${item.nama}">

Pesan

</a>

</div>

</div>

</div>

`;

});

}

tampilProduk(products);


// ====================================
// PENCARIAN
// ====================================

const search=document.getElementById("searchInput");

search.addEventListener("keyup",function(){

const keyword=this.value.toLowerCase();

const hasil=products.filter(function(item){

return item.nama.toLowerCase().includes(keyword);

});

tampilProduk(hasil);

});


// ====================================
// DETAIL PRODUK
// ====================================

function detailProduk(id){

const produk=products.find(function(item){

return item.id===id;

});

document.getElementById("modalImage").src=produk.gambar;

document.getElementById("modalTitle").innerHTML=produk.nama;

document.getElementById("modalCategory").innerHTML=produk.kategori;

document.getElementById("modalDesc").innerHTML=produk.deskripsi;

document.getElementById("modalPrice").innerHTML=produk.harga;

document.getElementById("modalWhatsapp").href=

`https://wa.me/${produk.wa}?text=Halo saya ingin memesan ${produk.nama}`;

document.getElementById("productModal").style.display="flex";

}


// ====================================
// TUTUP MODAL
// ====================================

function closeModal(){

document.getElementById("productModal").style.display="none";

}


window.onclick=function(e){

const modal=document.getElementById("productModal");

if(e.target==modal){

modal.style.display="none";

}

}