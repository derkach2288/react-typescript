import {BrowserRouter, Routes, Route} from "react-router-dom"

import GlobalStyles from "styles/GlobalStyles";
import Layout from "components/Layout";

import Home from "pages/Home";
import About from "pages/About";
import Users from "pages/Users";
import Clients from "pages/Clients";
import { WaitForMe, InstituteOfDelays, WaitingServices, Korneyluk, Klitschko } from "pages/Clients/modules";

import Lesson20 from "./lessons/Lesson20";
import Homework20 from "./homeworks/Homework20";
import Lesson21 from "./lessons/Lesson21";
import Homework21 from "./homeworks/Homework21";
import Lesson22 from "./lessons/Lesson22";
import Homework22 from "./homeworks/Homework22";
import Homework22V2 from "homeworks/Homework22V2";
import Homework23 from "homeworks/Homework23";
import Lesson24 from "lessons/Lesson24";
import Homework24 from "homeworks/homework24";
import Lesson25 from "lessons/Lesson25";
// import Homework25 from "homeworks/Homework25";
import Homework25v2 from "homeworks/homework25v2";

function App() {
  return (
    <BrowserRouter>
    <GlobalStyles />
    <Layout >
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/users" element={<Users/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/clients" element={<Clients/>} />

      <Route path="/clients/wait_for_me" element={<WaitForMe/>} />
      <Route path="/clients/institute_of_delays" element={<InstituteOfDelays/>} />
      <Route path="/clients/waiting_services" element={<WaitingServices/>} />
      <Route path="/clients/korneyluk" element={<Korneyluk/>} />
      <Route path="/clients/klitschko" element={<Klitschko/>} />

      <Route path="*" element="Page Not Found" />

    </Routes>

    
      {/* <Lesson20 /> */}
      {/* <Homework20 /> */}
      {/* <Lesson21 /> */}
      {/* <Homework21 /> */}
      {/* <Lesson22 /> */}
      {/* <Homework22 /> */}
      {/* <Homework23 /> */}
      {/* <Lesson24 /> */}
      {/* <Homework24 /> */}
      {/* <Lesson25 /> */}
      {/* <Homework25v2 /> */}
      </ Layout >
    </BrowserRouter>
  );
}

export default App;
