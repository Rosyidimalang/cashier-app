// import React, { useState } from "react";

// const warna = [
//   "text-yellow-500",
//   "text-blue-500",
//   "text-red-500",
//   "text-green-500",
// ];

// export default function State2() {
//   const [indexWarna, setindexWarna] = useState(0);
//   const gantiWarna = () => {
//     if (indexWarna < 3) {
//       setindexWarna(indexWarna + 1);
//     } else {
//       setindexWarna(0);
//     }
//   };

//   return (
//     <div>
//       <div className={warna[indexWarna]}>Stete2</div>
//       <button onClick={gantiWarna}>ganti warna</button>
//     </div>
//   );
// }

import React, { useState } from "react";
const warna = [
  "text-yellow-500",
  "text-blue-500",
  "text-red-500",
  "text-green-500",
];

export default function State2() {
  const [indexWarna, setindexWarna] = useState(0);

  const ubahWarna = () => {
    if (indexWarna < 3) {
      setindexWarna(indexWarna + 1);
    } else {
      setindexWarna(0);
    }
  };

  return (
    <div>
      <div className={warna[indexWarna]}>state 2</div>
      <button onClick={ubahWarna}>ubah warna</button>
    </div>
  );
}
