// import React, { useState } from "react";

// export default function State3() {
//   const [warna, setwarna] = useState("");
//   return (
//     <div>
//       <div style={{color: warna}} className="font-bold " >State3</div>
//       <input onChange={(e) => setwarna(e.target.value)} type="color" />
//     </div>
//   );
// }

import React, { useState } from "react";

export default function State3() {
  const [warna, setwarna] = useState("");
  return (
    <div>
      <button className=" bg-[#8aa281] p-5 rounded-3xl hover:bg-[#8a0909] ">tailwind</button>
      <p className="text-[0.15rem]">tailwind</p>
      <p className="text-xs bg-[#04dae9] ">tailwind</p>
      <p className="text-9xl">tailwind</p>
      <button>tailwind</button>
      <div style={{ color: warna }}>State3</div>
      <input type="color" onChange={(e) => setwarna(e.target.value)}></input>
    </div>
  );
}
