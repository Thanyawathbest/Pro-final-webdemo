import React, { useState } from "react";
import { Link } from 'react-router-dom';
// import Newslide from './Slideovers_new'
// import thai from "../assets/image/flagthai.jpg";

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen) // !false = ture
    }
    const clicksection = () => {
        setIsMenuOpen(!isMenuOpen) // !false = ture
    }

//   const [showSlide, setShowSlide] = useState(false);
//   const openSlide = () => {
//     setShowSlide(true);
//   };
//   const closeSlide = () => {
//     setShowSlide(false);
//   };

  return (
    <nav className='bg-blue-500 md:p-4'>
        <div className="flex items-center p-4 md:justify-around md:p-0">
            <div className="text-white text-2xl font-bold">Traval</div>

            {/* Toggle Menu Button*/}
            <div className="md:hidden ml-auto">
                <button id="menu-toggle" className="text-white" onClick={toggleMenu}>
                    <svg 
                        fill="none" 
                        stroke="currentColor" 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                    >
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            <div className=" ">
                <ul className="hidden md:inline-flex space-x-5">
                    <li className=" w-20 text-center rounded-lg hover:bg-red-500 transition duration-300 ease-in-out"><Link to="" className=" text-white hover:text-zinc-950">หน้าแรก</Link></li>
                    <li className=" w-36 text-center rounded-lg hover:bg-red-500 transition duration-300 ease-in-out"><Link to="/location" className="text-white hover:text-zinc-950">สถานที่ภายในวัด</Link></li>
                    {/* <li className=" w-24 text-center rounded-lg hover:bg-red-500 transition duration-300 ease-in-out"><Link to="/upload" className="text-white hover:text-zinc-950">อัพโหลดรูป</Link></li>
                    <li className=" w-16 text-center rounded-lg hover:bg-red-500 transition duration-300 ease-in-out"><Link to="" className="text-white hover:text-zinc-950">ติดต่อ</Link></li> */}
                </ul>
                <button className=" hidden md:ml-5 md:inline-block ">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke-width="1.5" 
                        stroke="currentColor " 
                        class="w-6 h-6 inline hover:stroke-orange-500 ">
                    <path stroke-linecap="round" 
                          stroke-linejoin="round" 
                          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                    <span class="text-sm uppercase hover:text-orange-500">TH</span>
                </button>
            </div>
            
        </div>
        {/*Mobile menu*/}
        {isMenuOpen ? (
            <div className=" bg-blue-400 w-screen md:hidden" >
                <ul className="flex-col md:hidden">
                <Link to="" onClick={clicksection}><li className="text-white p-4 hover:bg-slate-200 cursor-pointer">หน้าแรก</li></Link>
                <Link to="/location" onClick={clicksection}><li className="text-white p-4 hover:bg-slate-200 cursor-pointer">สถานที่ภายในวัด</li></Link>
                {/* <Link to="/upload" onClick={clicksection}><li className="text-white p-4 hover:bg-slate-200 cursor-pointer">อัพโหลดรูป</li></Link>
                <Link to="" onClick={clicksection}><li className="text-white p-4 hover:bg-slate-200 cursor-pointer">ติดต่อ</li></Link> */}
                </ul>
            </div>
            
        ) : null}
    </nav>

  );
}
export default Navbar;