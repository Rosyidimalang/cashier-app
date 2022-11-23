import React, { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const menus = ["makanan", "minuman", "lainnya"];
const product = {
  makanan: [
    { name: "soto", price: 1000 },
    { name: "bakso", price: 1000 },
    { name: "sate", price: 1000 },
  ],
  minuman: [
    { name: "kopi", price: 2000 },
    { name: "susu", price: 2000 },
    { name: "teh", price: 2000 },
  ],
  lainnya: [
    { name: "krupuk", price: 3000 },
    { name: "kentang", price: 3000 },
    { name: "pohong", price: 3000 },
  ],
};

export default function Pesan() {
  const [selectedMenu, setSelectedMenu] = useState("makanan");
  const [pesanan, setPesanan] = useState(
    JSON.parse(localStorage.getItem("test")) || [] );
  // initialvalue adalah value pertama kali

  // initialvalue state pesanan diisi dengan localStorage yang sudash ada data dari backup an perubahan seblumnya
  // sehinnga ketika di reload maka perubahan sebelum nya  bisa langsung di implementasikan oleh initialvalue

  // dikasih || (atau) supaya ketik localStorage dengan key tersebut tidak ada maka initialvalue nya adalah [] array kosong
  // localStorage.getItem("key") outputnya adalah data
  // data dari localStorage harus di javascriptkan dari JSON (krn js tidak bisa meembaca data json secara langsung) pakainya JSON.parse

  useEffect(() => {
    localStorage.setItem("test", JSON.stringify(pesanan));
    // localStorage.setItem mempunyai 2 param
    // yg pertama adalah key  nya
    // yang kedua adalah value nya
    // value nya harus di JSON kan dengan JSON.stringify karena localStorage hanya menerima data JSON dan tidak menerima array secara langsung
  }, [pesanan]);
  // useEffect dijalankan ketika pertama kali render (mounting) dan juga dijalankan ulang ketika dalam kurung kotak (dependency) ada perubahan
  // maka disini useEffect melakukan pemasukan data ke localstorage saat pertama render dan saat state pesanan ada perubahan
  // pemasukkan data ke localStorage guna utk backup data

  // tulis  ulang sambil memahami dan menghafalkan: code baris 25 - 47 (10x)

  const newPesanan = [...pesanan];
  const pesan = (objectDiklik) => {
    const objSudahAda = newPesanan.find(
      (value) => value.name === objectDiklik.name
    );
    if (!objSudahAda) {
      newPesanan.push({
        ...objectDiklik,
        jumlah: 1,
        total: objectDiklik.price,
        tampilkanKet: false,
      });
    } else {
      objSudahAda.jumlah++;
      objSudahAda.total += objSudahAda.price;
    }

    setPesanan(newPesanan);
  };

  const plus = (idx) => {
    newPesanan[idx].jumlah++;
    newPesanan[idx].total += newPesanan[idx].price;
    setPesanan(newPesanan);
  };
  const min = (idx) => {
    newPesanan[idx].jumlah--;
    newPesanan[idx].total -= newPesanan[idx].price;
    setPesanan(newPesanan);
  };

  const hapus = (idx) => {
    newPesanan.splice(idx, 1);
    setPesanan(newPesanan);
  };

  const showKet = (idx) => {
    newPesanan[idx].tampilkanKet = true;
    setPesanan(newPesanan);
  };

  const hideKet = (idx) => {
    newPesanan[idx].tampilkanKet = false;
    setPesanan(newPesanan);
  };

  return (
    <div className="grid grid-cols-9">
      <div>
        {menus.map((value) => (
          <div onClick={() => setSelectedMenu(value)}>{value} </div>
        ))}
      </div>
      <div className="col-span-5">
        {product[selectedMenu].map((value) => (
          <div onClick={() => pesan(value)} className="flex gap-3 ">
            <div>{value.name} </div>
            <div>{value.price} </div>
          </div>
        ))}
      </div>
      <div className="col-span-3">
        <div>PESANAN</div>
        {pesanan.map((value, index) => (
          <div className="flex gap-3">
            <button onClick={() => hapus(index)}>hapus</button>
            <div>{value.name} </div>
            <div>{value.price} </div>
            <button disabled={value.jumlah === 1} onClick={() => min(index)}>
              -
            </button>
            <div>{value.jumlah} </div>
            <button onClick={() => plus(index)}> +</button>
            <div>{value.total} </div>
            <button onClick={() => showKet(index)}> v </button>
            {value.tampilkanKet && (
              <>
                <input placeholder="keterangan" />
                <button onClick={() => hideKet(index)}>x</button>
              </>
            )}
          </div>
        ))}
      </div>
      <BsChevronDown />
    </div>
  );
}

// rangkum sedetail detailnya semua algoritma secara urut
// kalau bisa algorita ditambah sendiri utk lebih detail
// kalau selesai buat algoritma, ulangi 2x

// buat array menus
// map array menus

// ternary adalah operator logika singkat utk if dan else
// a  && b maksudnya jika a itu true maka lakukan atau tampilkan b
// sesuatu yang diposisikan di a, meskipun tidak ada operator pembanding, maka outputnya true jika dia true atau ada isinya dan outputnya false jika dia false atau jika dia tdk ada isinya

// buat variable sudahada isiny = dari newPesanan cari yang value.nama sama dengan valueYangDiklik.nama dengan Array.find method
// jika blm ada maka tambahkan value yg diklik ke newPesanan dengan menambahkan key baru: jumlah: 1, total: valueygdiklik.harga
// cara menambahkan key adalah dengan sistem cloning {...object, key: value, key, value}
// jika sudahAda maka sudahAda.julah tambah 1, sudahAda.total tambah sudahAda.harga

// tambahkan di map pesanan value.jumlah dan value.total

// ULANGI DI TugasPesanan.JS 10X SESUAI URUTAN ALGORITMA DENGAN TEMPLATE DARI DAPUR

// ALGORITM
// buat state pesanan sbg wadah utk pesanan
// kasih initialvalue [] array kosong, spy dpt menampung bnyak
// buat function tambahkankepesanan, isinya:
// >> buat variable newPesanan isinya cloningan pesanan
// >> cara mengkloning array adalah [...array]
// >> dikloning supaya bisa dimutasi (otak atik) sebelum disimpan ke setState (setPesanan)
// >> masukkan value ke array newPesanan dengan array.push method
// >> kasih parameter value yang nantinya bakal didefinisikan oleh argument
// >> rubahlah state pesanan dgan setPesanan (setState) diisi newPesanan yg sudah dimutasi
// di dalam map product kasih onClick tambahkankepesanan, kasih param argument value nya
// map array pesanan

// parameter adalah acuan yg diterangkan oleh argumentnya
