// import React, { useState } from "react";

// export default function State4() {
//   const [nama, setnama] = useState("rosyidi");

//   return (
//     <div className="flex flex-col">
//       <div>{nama}</div>
//       <input
//         onChange={(e) => {
//             console.log("e", e);

//             setnama(e.target.value)}}
//         className="bg-green-100 p-3 w-1/3 mx-auto"
//         placeholder="ganti namamu di sini"
//       />
//       <button onClick={() => setnama("rosyidi")}>reset nama</button>
//     </div>
//   );
// }

import React, { useState } from "react";

export default function State4() {
  const [nama, setnama] = useState("rosyidi");

  const save = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col">
      <div>{nama}</div>
      {/* <form onSubmit={save}> */}
      <input placeholder="ubah namamu di sini" className="bg-green-100 p-3 w-1/3 mx-auto" onChange={(e) => setnama(e.target.value)}></input>
      {/* </form> */}
      <button onClick={() => setnama("rosyidi")}>reset nama</button>
    </div>
  );
}

// buat algoritma seperlunya
// boleh dimodifikasi
// kemudian ulangi kodenya sampai tanpa melihat

// STATE 1 :
// state angka dengan initial value 0
// text angka
// button tambah
// onclick setstate angka + 1

// STATE 2 :
// variabel warna yang isinya warna kuning, biru, merah, dan hijau
// text "state 2" dengan warna yang bisa berubah-ubah sesuai urutan indexnya
// button ganti warna
// state index warna dengan initial value 0 (index pertama)
// opertaor ternary ;
// 1. jika index warna kurang dari 3, maka index warna + 1
// 2. jika tidak, maka index warna 0

// STATE 3 :
// state warna dengan initial value string
// text "state 3" dengan style color : warna
// input type color
// onChange event.target.value

// STATE 4 :
// state nama denga initial value rosyidi
// text nama
// input ganti namamu disini, onChange event.target.value
// button reset nama, onClick setnama "rosyidi"
