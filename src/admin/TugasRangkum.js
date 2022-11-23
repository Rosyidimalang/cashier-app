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

export default function TugasRangkum() {
  const [selectedMenu, setSelectedMenud] = useState("makanan");
  const [pesanan, setPesanan] = useState(JSON.parse(localStorage.getItem("daus")) || []);

  // initialvalue adalah value pertama kali.

  // initialvalue state pesanan diisi dengan localstorage yang sudah dari data back up an perubahan sebelumnya.
  // sehingga ketika di reload maka perubahan sebelumnya bisa lansung diimplementasikan oleh initial value.

  // dikasih || (atau) supaya ketika localstorage dengan key tersebut tidak ada, maka initial value nya adalah array kosong
  // localstorage.getItem("key") outputnya adalah data
  // data dari localstorage harus dijavascripkan dari JSON (karena javascrip tidak bisa membaca data JOSN secara lansung) pakainya JOSN. parse
  useEffect(() => {
    localStorage.setItem("daus", JSON.stringify(pesanan));
    // localstorage.setItem mempunyai 2 parameter
    // yang pertama adalah key nya
    // yang kedua adalah valuenya
    // valuenya harus di JSON kan dengan JSON.stringify karena local storage hanya menerima data JOSN dan tidak menerima array secara langsung
  }, [pesanan]);
  // useEffect diajalankan ketika pertama kali rended(mounting) dan juga dijalankan ulang ketika dalam kurung kotak(dependency) ada perubahan
  // maka disini useEffect melakukan pemasukan data ke lokalstorage saat pertama render dan saat state pesanan ada perubahan
  // pemasukan data ke local storage guna untuk backup data

  const newPesanan = [...pesanan];
  const tambahkankepesanan = (valueyangdiklik) => {
    const sudahAda = newPesanan.find((value) => value.nama === valueyangdiklik.nama);
    if (!sudahAda) {
      newPesanan.push({
        ...valueyangdiklik,
        jumlah: 1,
        total: valueyangdiklik.harga,
      });
    } else {
      sudahAda.jumlah++;
      sudahAda.total += sudahAda.harga;
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

  const allTtotal = pesanan.reduce((accumulator, value) => accumulator + value.total, 0);
  const test = [1, 2, 3, 4];
  const coaba = ["coba", "coba", "coba", "coba"];

  return (
    <div className="grid grid-cols-4">
      {test}
      {coaba}
      <div>
        {menus.map((value, index) => (
          <div onClick={() => setSelectedMenud(value)}>{value}</div>
        ))}
      </div>
      <div>
        <div></div>
        {product[selectedMenu].map((value, index) => (
          <div onClick={() => tambahkankepesanan(value)} className="flex gap-3">
            <div>{value.nama}</div>
            <div>{value.harga}</div>
          </div>
        ))}
      </div>
      <div>
        <div>{allTtotal} </div>
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
            <button onClick={() => showKet(index)}>v</button>
            {value.tampilkanKet && (
              <>
                <input placeholder="keterangan" className="border rounded-lg"></input>
                <button onClick={() => hideKet(index)}>x</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

//   state dan variable sama sama bisa merubah valuenya
//   perubahan value variable tidak bisa dirender ulang
//   perubahan value state pasti akan dirender ulang

//   state tidak bisa diganti persatuan di dalamnya
//   state akan  mengganti secara keseluruhan
//   dan state hanya bisa diganti oleh setstate
//   keadaan tersebut dinamakan  immutable

// cara mengatasinya (merubah hanya sebagian value state) adlah dengan:
// cloning state tersebut lalu otak atik cloningan  tersebut
// kemudan cloningan yang sudah diotak atik tersebut masukkan kedalam setState utk merubah value state sebelumnya

// const cars = ["t", "a", "t"]
// cars[2]= "y"
// variable biasa bisa merubah value nya tapi tidak dirender ulang

// useState punya dua variable di dalam  [
// varible pertama adalah nama state nya, value nya adalah didalah kurung useState()
// variable kedua adalah setState nya, atau function perubah value state
// Object:
// object memiliki key dan value
// value object diakses dengan key nya
// cara penuliasannya
// >> object.key
// >> object["key"]

// ALGORITMA BELAJAR ARRAY DAN CARA MAP NYA

// 1. CONTOH MAP ARRAY YANG ISINYA STRING
// buat varible menus  isinya array dengan value= makanan, minuman, dan lainnya
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

// const [nama, setnama] = useState([
//   { nama: "usamah" },
//   { nama: "hafidzudin" },
//   { nama: "abrar" },
//   { nama: "us" },
// ]);

// const rubahnama = () => {
//   const newnama = [...nama];
//   newnama[0].nama = "macan";
//   setnama(newnama);
// };
// console.log(nama);

// cara pembuatan variable
// declare + nama + = + value

// function map
// function map digunakan utk menampilkan sesuatu sesuai value array secara urut
// function map mempunyai dua parameter
// param pertama sebagi value
// param kedua sebagai index
// function map hanya utk tipedata array

// ALGORITM :

// 1. buat variable menus isinya array dengan value makanan, minuman, lainnya
//    map array menus

// 2. Buat state selectedmenu diisi initialvalue "makanan"
//    map product berdasarkan key nya,
//    pakailah format key dengan [] diisi key yang distringkan
//    masukan state selectedMenu ke dalam kurung [] product sebagai key nya supaya key nya dinamis (bisa berubah rubah)
//    untuk menampilkan nama dan harga pada map produk, menggunakan div value.nama dan div value.harga (karena value array berupa object)
//    kasih onclick di dalam map menus , isinya merubah state selectedMenu menjadi value yang diklik (yaitu value dari map) caranhya adalah setSelectedMenud(value). value adl value dari menus yg diklik

// 3. buat state pesanan sbg wadah utk pesanan
//    kasih initialvalue [] array kosong, spy dpt menampung bnyak
//    buat function tambahkankepesanan, isinya:
//    >> buat variable newPesanan isinya cloningan pesanan
//    >> cara mengkloning array adalah [...array]
//    >> dikloning supaya bisa dimutasi (otak atik) sebelum disimpan ke setState (setPesanan)
//    di dalam map product kasih onClick tambahkankepesanan, kasih param argument value nya
//    map array pesanan

// 4. tambahan utk function tambahkankepesanan
//    langkah pengecekan apakah yang diklik sudah ada di pesanan:
//    buat variable sudahada isiny = dari newPesanan cari yang value.nama sama dengan valueYangDiklik.nama dengan Array.find method
//    jika blm ada (sudahAda itu false) maka tambahkan value yg diklik ke newPesanan dengan menambahkan key baru: jumlah: 1, total: valueygdiklik.harga
//    cara menambahkan key adalah dengan sistem cloning {...object, key: value, key, value}
//    jika sudahAda maka sudahAda.jumlah tambah 1, sudahAda.total tambah sudahAda.harga
//    tambahkan di map pesanan value.jumlah dan value.total
//    pakai array.push method
// TEKAN KENE
// 5. buat button + dan -
//    buat function plus :
//    > kasih paramater sebagai index
//    > akses array newPesanan dengan index tersebut >> newPesanan[index] maka outputnya adl Object
//    > newPesanan[index].jumlah ditambah satu dengan ++ method
//    > newPesanan[index].total ditambah newPesanan[index].harga
//    > simpan perubahan dalam setState (setpesanan)
//    dalam button + kasih onClick isinya function plus mengirim index di parameternya
//    buat function minus :
//    > kasih paramater sebagai index
//    > akses array newPesanan dengan index tersebut >> newPesanan[index] maka outputnya adl Object
//    > newPesanan[index].jumlah dikurangi satu dengan -- method
//    > newPesanan[index].total dikurangi newPesanan[index].harga
//  > simpan perubahan dalam setState (setpesanan)
//    dalam button - kasih onClick isinya function minus mengirim index di parameternya

// 6. tuk membatasi pesanan perItem max 10 min 1:

//    >>Tambahkan atribut disabled pada button min (-) yang isinya value.jumlah === 1
//    >>Tambahkan atribut disabled pada button plus (+) yang isinya value.jumlah === 10

// UTK MENGHAPUS PESANAN PER ITEM
//    buat button isinya icon trash (import icon tsb dari react-icons)
//    buat function hapus :
//    > kasih paramater sebagai index
//    > dari newPesanan, hapus 1 yang diklik
//    > utk mengetahui yg diklik ambil index lalu lakukan hapus dengan Array.splice(index, 1)
//    > pastikan yang dihapus hanya 1 index yg di klik. caranya: newPesanan.splice(idx,1)
//    > simpan perubahan dalam setState (setpesanan)
//    dalam button trash kasih onClick yg isinya function hapus mengirim index di parameternya

// 7. SHOW HIDE input keterangan
//    buat button v (untuk menampilkan input keterangan) dan button x (untuk menghilangkan input keterangan)
//    buat funcion showKet :
//    > kasih parameter sebagai index
//    > akses array newPesanan dengan index
//    > newPesanan[idx].tampilkanKet berikan nilai true
//    > simpan perubahan dalam setState (setpesanan)
//    buat funcion hideKet :
//    > kasih parameter sebagai index
//    > akses array newPesanan dengan index
//    > newPesanan[idx].tampilkanKet berikan nilai false
//    > simpan perubahan dalam setState (setpesanan)
//    dalam button V kasih onClick isinya function showKet mengirim index di parameternya
//    dalam button X kasih onClick isinya function hideKet mengirim index di parameternya
//    buat operator ternary a  && b (value.tampilkanKet &&). jika true, input keterangan dan button X ditampilkan. jika false, input keterangan dan button X tidak ditampilkan
//
