import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { HiMinusCircle } from "react-icons/hi";
import { HiPlusCircle } from "react-icons/hi";
const menus = ["makanan", "minuman", "lainnya"];
const product = {
  makanan: [
    { nama: "sate Ayam", harga: 16000, gambar: "sate-ayam.jpg" },
    {
      nama: "Nasi Goreng Telur",
      harga: 14000,
      gambar: "nasi-goreng-telor.jpg",
    },
    { nama: "Nasi Rames", harga: 12000, gambar: "nasi-rames.jpg" },
    {
      nama: "Lontong Opor Ayam",
      harga: 18000,
      gambar: "lontong-opor-ayam.jpg",
    },
    { nama: "Mie Goreng", harga: 13000, gambar: "mie-goreng.jpg" },
    { nama: "Bakso", harga: 10000, gambar: "bakso.jpg" },
    { nama: "Mie Ayam Bakso", harga: 14000, gambar: "mie-ayam-bakso.jpg" },
  ],
  minuman: [
    { nama: "Coffe Late", harga: 15000, gambar: "coffe-late.jpg" },
    { nama: "Es Jeruk", harga: 7000, gambar: "es-jeruk.jpg" },
    { nama: "Es Teh", harga: 5000, gambar: "es-teh.jpg" },
    { nama: "Teh Hangat", harga: 3000, gambar: "teh-hangat.jpg" },
  ],
  lainnya: [
    { nama: "Pangsit 6 pcs", harga: 5000, gambar: "pangsit.jpg" },
    { nama: "Kentang Goreng", harga: 5000, gambar: "kentang-goreng.jpg" },
    { nama: "Cheese Burger", harga: 15000, gambar: "cheese-burger.jpg" },
  ],
};

export default function TugasPesanan() {
  const [pesanan, setPesanan] = useState([]);
  const [selectedMenu, setSelectedMenud] = useState("makanan");
  const newPesanan = [...pesanan];
  const tambahkankepesanan = (valueyangdiklik) => {
    const newPesanan = [...pesanan];
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
  const showKet = (idx) => {
    newPesanan[idx].tampilkanKet = true;
    setPesanan(newPesanan);
  };
  const hideKet = (idx) => {
    newPesanan[idx].tampilkanKet = false;
    setPesanan(newPesanan);
  };

  const cars = ["bmw", "kijang", "inova"];
  const murid = { nama: "rosyidi", kelas: 1 };

  const test = [
    {
      nama: "rosyidi",
      nilai: { mtk: 10, indo: 11 },
      tanggal: [1, 5, 10],
      akhlaq: { ortu: [100, 99], teman: [10] },
    },
  ];
  test[0].nama = "fazufi";

  test[0].akhlaq.ortu[0] = 60;
  test[0].nilai.indo = 15;
  test[0].tanggal[1] = 10;

  // rubah 100 menjadi 60
  // rubah 11 menjadi 15
  // rubah 5 menjadi 10

  // tampilkan 11
  // tampilkan 5
  // tampilkan 100
  // tampilkan 10

  console.log("1", test[0].akhlaq.ortu[0]);
  console.log("2", test[0].nilai.indo);
  console.log("3", test[0].tanggal[1]);

  const penumpang = [];

  const tambahkanPenumpang = function (namaPenumpang, semuaPenumpang) {
    semuaPenumpang.push(namaPenumpang);
    return semuaPenumpang;
  };

  console.log(tambahkanPenumpang("sandika", penumpang));

  // const array = ["makan", "minum", "lain"];
  // const arr = [
  //   { name: "fazufi", nilai:[10, 3, 5] },
  //   { name: "rosyidi", nilai:[4, 2, 6] },
  //   { name: "daus", nilai:[11, 7, 12] },
  // ];

  // console.log("test", arr[1].nilai[1]);

  return (
    <div>
      <div className="flex justify-between px-3 bg-blue-800 py-3">
        <div className="text-white text-[15px] font-semibold">WARMINDO H2</div>
        <div className="text-[15px]">BATAL LOGIN</div>
      </div>
      <div className="flex gap-6 items-center justify-center">
        <div className="flex gap-2">
          <div className="border bg-black"></div>
          <div>BUNGKUS</div>
        </div>
        <div className="flex gap-1 items-center">
          <div>Pembeli:</div>
          <input
            placeholder="atas nama"
            className="border border-blue-600 rounded-lg h-8"
          ></input>
        </div>
        <div>Tempat duduk:</div>
      </div>
      <div className="grid grid-cols-10 gap-3">
        <div>
          <div className="text-[15px] mb-3 shadow  h-10 text-center py-2">
            KATEGORI
          </div>
          {menus.map((value, index) => (
            <div
              className="border cursor-pointer  h-10 bg-yellow-600 text-center items-center font-bold ml-5 mb-2 py-2"
              onClick={() => setSelectedMenud(value)}
            >
              {value}
            </div>
          ))}
        </div>
        <div className="col-span-6">
          <div className="text-[15px] mb-3 shadow w-[5rem] h-10 text-center py-2">
            PRODUK
          </div>
          <div className="grid grid-cols-5 gap-5 ">
            {product[selectedMenu].map((value, index) => (
              <div
                onClick={() => tambahkankepesanan(value)}
                className="bg-amber-600 text-center p-3 "
              >
                <img src={value.gambar} alt="gambar" />
                <div>{value.nama}</div>
                <div>{value.harga}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-3 space-y-5">
          <div className="text-[15px] mb-3 shadow w-[5rem] h-10 text-center py-2">
            PESANAN
          </div>
          {pesanan.map((value, index) => (
            <div className="bg-teal-500 p-7">
              <div>
                <div className="flex gap-[40px]  ">
                  <div>{value.nama}</div>

                  <button
                    disabled={value.jumlah === 1}
                    onClick={() => minus(index)}
                  >
                    <HiMinusCircle />
                  </button>
                  <div>{value.jumlah}</div>
                  <button
                    disabled={value.jumlah === 10}
                    onClick={() => plus(index)}
                  >
                    <HiPlusCircle />
                  </button>
                  <div>{value.total}</div>
                  <button
                    className="text-blue-900"
                    onClick={() => showKet(index)}
                  >
                    <BsChevronDown />
                  </button>
                  <button onClick={() => hapus(index)}>
                    <FaTrash />
                  </button>
                </div>
              </div>
              <div>@{value.harga}</div>
              {value.tampilkanKet && (
                <>
                  <input
                    className="border rounded-lg w-[21rem]"
                    placeholder="tambahkan keterangan"
                  ></input>
                  <button className="ml-3" onClick={() => hideKet(index)}>
                    <RiDeleteBack2Fill />
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
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
