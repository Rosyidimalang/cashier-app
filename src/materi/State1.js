// import React, { useState } from "react";

// export default function State1() {
//   const [angka, setangka] = useState(0);
//   return (
//     <div>
//       <div>{angka}</div>
//       <button
//         onClick={() => setangka(angka + 1)}
//         className="bg-orange-400"
//         disabled={angka === 20}
//       >
//         tambah
//       </button>
//       <button
//         onClick={() => setangka(angka - 1)}
//         className="bg-red-800"
//         disabled={angka === 0}
//       >
//         kurang
//       </button>
//     </div>
//   );
// }

import React, { useState } from "react";

const maxRedigit = (number) => {
  const isInteger = Number.isInteger(number);
  const isPosstive = number > 0;
  const digit = number.toString().Length;
};

export default function State1() {
  const [angka, setangka] = useState(0);
  return (
    <div>
      <div>{angka}</div>
      <button
        onClick={() => setangka(angka + 1)}
        className="bg-orange-500 rounded-lg"
        disabled={angka === 20}
      >
        tambah
      </button>
      <button
        onClick={() => setangka(angka - 1)}
        className="bg-blue-500 rounded-lg"
        disabled={angka === 0}
      >
        kurang
      </button>
    </div>
  );
}
