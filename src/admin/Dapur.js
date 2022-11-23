import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

const menus = ["makanan", "minuman", "lainnya"];
const product = {
  makanan: [
    { nama: "bakso", harga: 10000 },
    { nama: "sate", harga: 10000 },
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

export default function TugasPesanan() {
  const [selectedMenu, setSelectedMenud] = useState("makanan");
  
  
  const [pesanan, setPesanan] = useState(
    JSON.parse(localStorage.getItem("daus")) || []
  );



  useEffect(() => {
    // console.log("jalan");
    console.log("masuk local storage");

    localStorage.setItem("daus", JSON.stringify(pesanan));
  });


  // localStorage hanya menerima data beruba JSON

  // initialvalue adalah value pertama kali.

  // initialvalue state pesanan diisi dengan localstorage yang sudah ada dari data back up an perubahan sebelumnya.
  // sehingga ketika di reload maka perubahan sebelumnya bisa langsung diimplementasikan oleh initial value.

  // dikasih || (atau) supaya ketika localstorage dengan key tersebut tidak ada, maka initial value nya adalah array kosong
  // localstorage.getItem("key") outputnya adalah data
  // data dari localstorage harus dijavascripkan dari JSON (karena javascrip tidak bisa membaca data JOSN secara lansung) pakainya JOSN. parse

  // localstorage.setItem mempunyai 2 parameter
  // yang pertama adalah key nya
  // yang kedua adalah valuenya
  // valuenya harus di JSON kan dengan JSON.stringify karena local storage hanya menerima data JOSN dan tidak menerima array secara langsung

  // useEffect diajalankan ketika pertama kali render (mounting) dan juga dijalankan ulang ketika dalam kurung kotak(dependency) ada perubahan
  // maka disini useEffect melakukan pemasukan data ke lokalstorage saat pertama render dan saat state pesanan ada perubahan
  // pemasukan data ke local storage guna untuk backup data

  const newPesanan = [...pesanan];
  const tambahkankepesanan = (valueyangdiklik) => {
    const sudahAda = newPesanan.find(
      (value) => value.nama === valueyangdiklik.nama
    );
    if (!sudahAda) {
      newPesanan.push({
        ...valueyangdiklik,
        jumlah: 1,
        total: valueyangdiklik.harga,
      });
    } else {
      sudahAda.jumlah++;
      sudahAda.total += sudahAda.harga;
      // sudahAda.jumlah = sudahAda.jumlah + 1
      // sudahAda.total = sudahAda.total + sudahAda.harga
    }
    setPesanan(newPesanan);
  };

  const plus = (idx) => {
    newPesanan[idx].jumlah++;
    newPesanan[idx].total += newPesanan[idx].harga;
    setPesanan(newPesanan);
  };
  const minus = (idx) => {
    newPesanan[idx].jumlah--;
    newPesanan[idx].total -= newPesanan[idx].harga;
    setPesanan(newPesanan);
  };
  const hapus = (idx) => {
    newPesanan.splice(idx, 1);
    setPesanan(newPesanan);
  };
  // const array = ["makan", "minum", "lain"];
  // const arr = [
  //   { name: "fazufi", nilai:[10, 3, 5] },
  //   { name: "rosyidi", nilai:[4, 2, 6] },
  //   { name: "daus", nilai:[11, 7, 12] },
  // ];

  // console.log("test", arr[1].nilai[1]);

  return (
    <div className="grid grid-cols-4">
      <div>
        <div className="text-[30px] font-bold">pilih</div>
        {menus.map((value, index) => (
          <div onClick={() => setSelectedMenud(value)}>{value}</div>
        ))}
      </div>
      <div>
        <div className="text-[30px] font-bold">menu</div>
        {product[selectedMenu].map((value, index) => (
          <div onClick={() => tambahkankepesanan(value)} className="flex gap-3">
            <div>{value.nama}</div>
            <div>{value.harga}</div>
          </div>
        ))}
      </div>
      <div>
        <div className="text-[30px] font-bold">pesanan</div>
        {pesanan.map((value, index) => (
          <div className="flex gap-3">
            <button onClick={() => hapus(index)}>
              <FaTrash />
            </button>
            <div>{value.nama}</div>
            <div>{value.harga}</div>
            <button disabled={value.jumlah === 1} onClick={() => minus(index)}>
              -
            </button>
            <div>{value.jumlah}</div>
            <button disabled={value.jumlah === 10} onClick={() => plus(index)}>
              +
            </button>
            <div>{value.total}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ternary adalah operator logika singkat utk if dan else
// a  && b maksudnya jika a itu true maka lakukan atau tampilkan b
// sesuatu yang diposisikan di a, meskipun tidak ada operator pembanding, maka outputnya true jika dia true atau ada isinya dan outputnya false jika dia false atau jika dia tdk ada isinya

// buat input keterangan
// buat button v (untuk menampilkan input keterangan) dan button x (untuk menghilangkan input keterangan)
// buat funcion showKet :
// > kasih parameter sebagai index
// > akses array newPesanan dengan index
// > newPesanan[idx].tampilkanKet berikan nilai true
// > simpan perubahan dalam setState (setpesanan)
// buat funcion hideKet :
// > kasih parameter sebagai index
// > akses array newPesanan dengan index
// > newPesanan[idx].tampilkanKet berikan nilai false
// > simpan perubahan dalam setState (setpesanan)
// dalam button V kasih onClick isinya function showKet mengirim index di parameternya
// dalam button X kasih onClick isinya function hideKet mengirim index di parameternya
// buat operator ternary a  && b (value.tampilkanKet &&). jika true, input keterangan dan button X ditampilkan. jika false, input keterangan dan button X tidak ditampilkan

// BUAT ALGORITMA TENTANG:
// >> MINIMAL ORDER 1 DAN MAX 10
// >> HAPUS PESANANAN
//TULIS KODE DAN  ULANGI 10X DI TUGASPESANAN NGAMBIL TEMPLATE DARI DAPUR

// Tambahkan atribut disabled pada button min (-) yang isinya value.jumlah === 1
// Tambahkan atribut disabled pada button plus (+) yang isinya value.jumlah === 10
// buat button isinya icon trash (import icon tsb dari react-icons)
// buat function hapus :
// > kasih paramater sebagai index
// > dari newPesanan, hapus 1 yang diklik
// > utk mengetahui yg diklik ambil index lalu lakukan hapus dengan Array.splice(index, 1)
// > pastikan yang dihapus hanya 1 index yg di klik. caranya: newPesanan.splice(idx,1)
// > simpan perubahan dalam setState (setpesanan)
// dalam button trash kasih onClick yg isinya function hapus mengirim index di parameternya

// buat button + dan -
// buat function plus :
// > kasih paramater sebagai index
// > akses array newPesanan dengan index tersebut >> newPesanan[index] maka outputnya adl Object
// > newPesanan][index].jumlah ditambah satu dengan ++ method
// > simpan perubahan dalam setState (setpesanan)
// dalam button + kasih onClick isinya function plus mengirim index di parameternya
// lakukan serupa utk min tingal dibalik menjadi --

// buat variable sudahada isiny = dari newPesanan cari yang value.nama sama dengan valueYangDiklik.nama dengan Array.find method
// jika blm ada maka tambahkan value yg diklik ke newPesanan dengan menambahkan key baru: jumlah: 1, total: valueygdiklik.harga
// cara menambahkan key adalah dengan sistem cloning {...object, key: value, key, value}
// jika sudahAda maka sudahAda.julah tambah 1, sudahAda.total tambah sudahAda.harga
// tambahkan di map pesanan value.jumlah dan value.total.

// ULANGI 10X DI TUGASPESANAN NGAMBIL TEMPLATE DARI DAPUR
// buat variable sudahada isiny = dari newPesanan cari yang value.nama sama dengan valueYangDiklik.nama dengan Array.find method
// jika blm ada maka tambahkan value yg diklik ke newPesanan dengan menambahkan key baru: jumlah: 1, total: valueygdiklik.harga
// cara menambahkan key adalah dengan sistem cloning {...object, key: value, key, value}
// jika sudahAda maka sudahAda.julah tambah 1, sudahAda.total tambah sudahAda.harga
// tambahkan di map pesanan value.jumlah dan value.total
