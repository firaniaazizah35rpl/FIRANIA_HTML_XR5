// ===== Bagian A: getElementsByClassName =====
const buah = document.getElementsByClassName("buah");
console.log(buah);          // lihat koleksinya
console.log(buah.length);   // jumlah elemen
console.log(buah[0]);       // elemen pertama
 
// mengubah elemen tertentu
buah[0].style.color = "red";
 
// mengubah semua elemen dengan perulangan
for (let i = 0; i < buah.length; i++) {
  buah[i].style.fontWeight = "bold";
  buah[i].textContent = (i + 1) + ". " + buah[i].textContent;
}
 
// ===== Bagian B: getElementsByTagName =====
const semuaLi = document.getElementsByTagName("li");
 
console.log(semuaLi.length);
 
for (let i = 0; i < semuaLi.length; i++) {
  semuaLi[i].style.backgroundColor = "lightyellow";
}
// 1. Mengubah warna elemen li terakhir menjadi biru (3 baris)
let terakhir = semuaLi.length - 1;
let targetLi = semuaLi[terakhir];
targetLi.style.color = "blue";

// 2. Mengubah semua tag h2 menjadi teal memakai perulangan
const semuaH2 = document.getElementsByTagName("h2");
for (let i = 0; i < semuaH2.length; i++) {
  semuaH2[i].style.color = "teal";
}