import React from "react";
import '../css/Slideovers.css'
import { XMarkIcon } from '@heroicons/react/24/outline'
function Slideovers_new (props){
  /*if(true){
    return null }*/
    if(!props.visible) return null; 
    return(
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-10 ">
            <div className="pointer-events-auto relative w-1/4 ">
                <div className="absolute -right-14 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4 ">                      
                      <button
                        type="button"
                        className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() =>props.onClose()}
                      >
                        <span className="sr-only s">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
            <div className=" bg-white h-screen">
                <div className="">

                </div>
            </div>
            </div>
            
        </div>
    );
}
export default Slideovers_new;