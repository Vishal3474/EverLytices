import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className=" bg-cyan-500 flex  h-16 ">
      <div className="flex  ml-4  ">
       
        <div className=" ml-8 flex text-center space-x-8">
       

          <Link
            to="/Test1"
            className="text-white font-medium text-lg flex items-center hover:bg-cyan-400 hover:rounded-md hover:py-1 "
          >
            Test1
          </Link>

          <Link
            to="/Test2"
            className="text-white font-medium text-lg flex items-center hover:bg-cyan-400 hover:rounded-md hover:py-1 "
          >
            Test2
          </Link>

        </div>

        
      </div>
    </div>
  );
}

export default Navbar;
