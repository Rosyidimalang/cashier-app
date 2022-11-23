import "./App.css";
import Member from "./Member";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dapur from "./admin/Dapur";
import Rekap from "./admin/Rekap";
import InputData from "./admin/InputData";
import Pesan from "./admin/Pesan";
import TugasPesanan from "./admin/TugasPesanan";
import TugasRangkum from "./admin/TugasRangkum";
import CobaAxios from "./materi/AXIOS/CobaAxios";
import Life from "./materi/Life";
import State1 from "./materi/State1";
import State3 from "./materi/State3";
import State4 from "./materi/State4";
import State2 from "./materi/State2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Member />} />
        {/* <Route path="admin"> */}
        <Route path="rekap" element={<Rekap />} />
        <Route path="dapur" element={<Dapur />} />
        <Route path="input" element={<InputData />} />
        <Route path="pesan" element={<Pesan />} />
        <Route path="tugas" element={<TugasPesanan />} />
        <Route path="rangkum" element={<TugasRangkum />} />
        <Route path="axios" element={<CobaAxios />} />
        <Route path="life" element={<Life />} />
        <Route
          path="state"
          element={
            <div className="text-center text-6xl space-y-20 ">
              <State1 />
              <State2 />
              <State3 />
              <State4 />
            </div>
          }
        />
        {/* <Route path="dapur" element={<Admin />} /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
