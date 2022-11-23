import React from "react";

export default function Rekap() {
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
  return (
    <div className="grid grid-cols-4">
      <div>
        {menus.map((value, index) => (
          <div>{value}</div>
        ))}
      </div>
      <div>
        {product.makanan.map((value, index) => (
          <div className="flex gap-3">
            <div>{value.nama}</div>
            <div>{value.harga}</div>
          </div>
        ))}
      </div>
      <div>
        {product.minuman.map((value, index) => (
          <div className="flex gap-3">
            <div>{value.nama}</div>
            <div>{value.harga}</div>
          </div>
        ))}
      </div>
      <div>
        {product.lainnya.map((value, index) => (
          <div className="flex gap-3">
            <div>{value.nama}</div>
            <div>{value.harga}</div>
          </div>
        ))}
      </div>
   
    </div>
  );
}
