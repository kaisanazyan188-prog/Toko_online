
const produk = [
{
nama: "Nike Sport Red",
harga: "850.000",
gambar: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700",
deskripsi: "Sepatu sporty dengan desain modern dan nyaman digunakan."
},
{
nama: "Classic Sneakers",
harga: "550.000",
gambar: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=700",
deskripsi: "Sepatu casual dengan tampilan simpel dan elegan."
},
{
nama: "Running Shoes",
harga: "450.000",
gambar: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=700",
deskripsi: "Sepatu olahraga yang nyaman untuk aktivitas sehari-hari."
},
{
nama: "Casual Shoes",
harga: "350.000",
gambar: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=700",
deskripsi: "Sepatu casual cocok untuk jalan-jalan."
}
];

const daftar = document.getElementById("daftar");

produk.forEach((p, i) => {

daftar.innerHTML += `
<div class="card">

<img src="${p.gambar}" alt="${p.nama}">

<div class="isi">

<span>${p.nama}</span>

<h3>${p.nama}</h3>

<p class="harga">Rp ${p.harga}</p>

<button class="detail" onclick="buka(${i})">
Lihat Detail
</button>

<div class="form" id="form${i}">

<div class="notes">
<b>Notes:</b><br>
${p.deskripsi}
</div>

<input id="nama${i}" placeholder="Nama Pemesan">

<textarea id="alamat${i}" placeholder="Alamat Pengiriman"></textarea>

<select id="ukuran${i}">
<option value="">Pilih Ukuran Sepatu</option>
<option>38</option>
<option>39</option>
<option>40</option>
<option>41</option>
<option>42</option>
<option>43</option>
<option>44</option>
<option>45</option>
</select>

<button class="wa" onclick="pesan(${i})">
☏ Pesan via WhatsApp
</button>

</div>
</div>
</div>
`;

});

function buka(i) {

let form = document.getElementById("form" + i);
let tombol = form.previousElementSibling;

if(form.style.display === "block") {
form.style.display = "none";
tombol.innerText = "Lihat Detail";
} else {
form.style.display = "block";
tombol.innerText = "Tutup Detail";
}

}

function pesan(i) {

let nama = document.getElementById("nama" + i).value.trim();

let alamat = document.getElementById("alamat" + i).value.trim();

let ukuran = document.getElementById("ukuran" + i).value;

if(nama === "" || alamat === "" || ukuran === "") {
alert("Silakan lengkapi semua data!");
return;
}

let teks = `Halo Kaisan Shoes, saya ingin memesan:

Nama: ${nama}
Sepatu: ${produk[i].nama}
Harga: Rp ${produk[i].harga}
Ukuran: ${ukuran}
Alamat: ${alamat}

Mohon informasi selanjutnya. Terima kasih.`;

let link = "https://wa.me/6285285761927?text=" + encodeURIComponent(teks);

window.open(link, "_blank");

}
