// Exercise 
// Seleksi elemen dengan ID header dan ubah teksnya menjadi "Hello, DOM!"
let header = document.querySelector("#header")
header.innerHTML = "Hello, DOM!"

// Seleksi elemen dengan class box dan ubah background-color menjadi "lightblue".
let box = document.querySelector('.box')
box.style.backgroundColor = "#add8e6";

// Buat elemen paragraf (<p>) baru dengan teks "Ini paragraf baru" dan tambahkan ke dalam elemen dengan ID content.
let paragraf = document.createElement("p")
let text = document.createTextNode("Ini Paragraf baru")
paragraf.appendChild(text)
let content = document.querySelector("#content")
content.appendChild(paragraf)

// Buat tombol dengan ID btn dan tambahkan event listener yang menampilkan alert "Tombol ditekan!" ketika tombol ditekan.
let btn = document.querySelector("#btn")
btn.addEventListener("click", function() {
    alert("Tombol Ditekan!")
    console.log("Tombol Ditekan!")
})

// Buat daftar dengan ID list dan tambahkan event listener ke tombol dengan ID addItemBtn yang menambahkan item baru ke daftar setiap kali tombol ditekan.
let addBTN = document.querySelector("#addItemBtn")
let list = document.querySelector("#list")
addBTN.addEventListener("click", function() {
    let liBaru = document.createElement("li")
    let text = document.createTextNode("Item Baru")

    liBaru.appendChild(text)
    list.appendChild(liBaru)
})

//Tambahkan tombol dengan ID removeBtn yang menghapus elemen dengan ID content ketika tombol ditekan.
let removeBtn = document.querySelector("#removeBtn")
removeBtn.addEventListener("click", function() {
    let konten = document.querySelector("#konten")
    if (konten) {
        konten.hidden = true;
    }
    }
)

