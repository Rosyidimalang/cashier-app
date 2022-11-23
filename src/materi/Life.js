// import React, { useEffect, useState } from "react";

// console.log("lazy");

// export default function Life() {
//   const [test, settest] = useState("test");
//   const [haha, sethaha] = useState("test");
//   const test2 = "coba";

//   let ini = "tas";
//   ini = "buku";
//   console.log("oni", ini);

//   //   const [test2, settest2] = useState("coba");

//   // useEffect(() => {
//   //  didmount
//   //  didupdate

//   //   return () => {
//   //     willunmount
//   //   }
//   // }, [mengakibatkan didupdate])

//   useEffect(() => {
//     console.log("{1} tidak dijalankan ulang");
//   }, []);

//   useEffect(() => {
//     console.log("{2} dijalankan ulang terus setiap kali rerender");
//   });

//   useEffect(() => {
//     console.log("{3} dijalankan ulang ketika state haha ada perubahan");
//   }, [haha]);
//   console.log("render");

//   return (
//     <>
//       <div
//         onClick={() => {
//           ini = "sepatu";
//           console.log("ini di onclick", ini);
//         }}
//       >
//         {test}
//       </div>
//       <div onClick={() => sethaha("haha")}>{haha}</div>
//       <div>{ini}</div>
//     </>
//   );
// }

import React, { useState } from "react";

export default function Life() {
  const [nama, setNama] = useState("fazufi");

  return (
    <div>
      <h1>{nama} </h1>
      <h2>
        nama saya jfkldsjfklsjfklf kljsdfklsjfkldsf klsdjfkldsjfkldsafjdslkf
        kljdklfjdsfjsdkfl sdjfkldsjfkdsfjsklf {nama}
      </h2>
      <button onClick={() => setNama("Rosyidi")}>ganti nama</button>
      <div>orea ceto</div>
      <div>orea ceto</div>
      <div>orea ceto</div>
      <div>orea ceto</div>
      <div>orea ceto</div>
      <div>orea ceto</div>
      <div>orea ceto</div>
      <div>orea ceto</div>
      <div>orea ceto</div>
    </div>
  );
}
