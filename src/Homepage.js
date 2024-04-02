import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './component/Page/Home';
import Location from './component/Page/Location';
import Upload from './component/Page/Upload';
import Contact from './component/Page/Contact';
import local_1 from './component/Page/editorial/local_1';
import local_2 from './component/Page/editorial/local_2';
import local_3 from './component/Page/editorial/local_3';
import local_4 from './component/Page/editorial/local_4';
import local_5 from './component/Page/editorial/local_5';
import local_6 from './component/Page/editorial/local_6';
import local_7 from './component/Page/editorial/local_7';

function Homepage() {
  return (
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/location" element={<Location/>}/>
        <Route path="/upload" element={<Upload/>}/>
        <Route path="/พระอุโบสถ" element={<local_1/>}/>
        <Route path="/พระเจดีย์มุเตา" element={<local_2/>}/>
        <Route path="/ต้นไม้สามกษัตริย์" element={<local_3/>}/>
        <Route path="/วิหารพระพุทธไสยาสน์" element={<local_4/>}/>
        <Route path="/พระนนทมุนินท์" element={<local_5/>}/>
        <Route path="/พระมหารามัญเจดีย์" element={<local_6/>}/>
        <Route path="/พิพิธภัณฑ์" element={<local_7/>}/>
        {/* <Route path="/contact" element={<Contact/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}
export default Homepage;