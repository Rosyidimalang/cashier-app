import React, { useState } from "react";

const menus = ["makanan", "minuman", "lainnya"];
const product = {
  makanan: [
    { nama: "bakso", harga: 10000 },
    { nama: "saate", harga: 10000 },
    { nama: "bubur", harga: 10000 },
  ],
  minuman: [
    { nama: "teh", harga: 20000 },
    { nama: "kopi", harga: 20000 },
    { nama: "susu", harga: 20000 },
  ],
  lainnya: [
    { nama: "burger", harga: 30000 },
    { nama: "kentang", harga: 30000 },
    { nama: "kebab", harga: 30000 },
  ],
};

export default function InputData() {
  const [selectedMenu, setSelectedMenud] = useState("makanan");



  return (
    <div className="grid grid-cols-3 ">
      <div>
        {menus.map((value, index) => (
          <div onClick={() => setSelectedMenud(value)}>{value} </div>
        ))}
      </div>
      <div>
        {product[selectedMenu].map((value, index) => (
          <div className="flex gap-3">
            <div>{value.nama} </div>
            <div>{value.harga} </div>
          </div>
        ))}
      </div>

      <div> selectedMenu: {selectedMenu}</div>
    </div>
  );
}

// useState punya dua variable di dalam  []
// varible pertama adalah nama state nya, value nya adalah didalah kurung useState()
// variable kedua adalah setState nya, atau function perubah value state
// Object:
// object memiliki key dan value
// value object diakses dengan key nya
// cara penuliasannya
// >> object.key
// >> object["key"]

// ALGORITM
// BUAT STATE SELECTED MENU DIISI INITIALVALUE "makanan"
// product.makanan.map diganti product[selectedMenu].map
// kasih onclick di dalam map menus , isinya:
// .setSelectedMenud(value). value adl value dari menus yg diklik

// TUGAS ULANGI 10X DI COMPONENT DAPUR














// ALGORITMA BELAJAR ARRAY DAN CARA MAP NYA

// 1. CONTOH MAP ARRAY YANG ISINYA STRING
// buat buat varible menus  isinya array dengan value= makanan, minuman, dan lainnya
// map array menus tersebut

// 2. CONTOH MAP ARRAY YANG ISINYA OBJECT
// buat object product dgn key makanan, minuman, lainnya dan value list product utk setiap key
// map list product tersebut berdasarkan key

// KETERANGAN:

// array adalah tipedata yg isinya  multiple item. array ditandai dengan kurung []
// Object adl tipedata yg isinya single item yg memiliki banyak sifat atau ciri. object ditandai dgn {}

// map adl sebuah function utk melakukan pengulangan (iteration/looping) urut berdasarkan semua value array
// map hanya function utk ARRAY
// paramerter pertama sebagai value, kedua sebagai index

// ULANGI PENULISAN KODE SESUAI ALGORITMA SEBANYAK 10x
// ULANGI PENULISAN KETERANGAN SEBANYAK 10x
