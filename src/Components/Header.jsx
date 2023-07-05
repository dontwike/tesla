import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/logo-dark.png";
import logo2 from "../assets/logo-white.png";

const Header = () => {

    const [mode, setMode] = useState(1);

    const logoChange = () => {
        if(mode === 1){
            setMode(0);
        } else {
            setMode(1);
        }
    };

  return (
    <div className={`NavBar fixed flex items-center justify-center w-screen py-3 text-${mode===1?`black`:`white`} cursor-default`}>
      <Link to={"/"}>
        <div className="nav-Left mr-28 ml5 cursor-default" onClick={()=>logoChange()}>
          <img src={mode===1?logo1:logo2} alt="" />
        </div>
      </Link>

      <div className="nav-Mid">
        <ul className="flex">
          <Link to={"/modelS"} >
          <li className={`mx-3 py-1 duration-500 px-3 py-2 font-${mode===1?'bold':'medium'} text-base hover:py-2 hover:rounded-md hover:backdrop-sepia-0 hover:bg-black/10`}>
            Model S
          </li>
          </Link>
          <Link to={"/model3"} >
          <li className={`mx-3 py-1 duration-500 px-3 py-2 font-${mode===1?'bold':'medium'} text-base hover:py-2 hover:rounded-md hover:backdrop-sepia-0 hover:bg-black/10`}>
            Model 3
          </li>
          </Link>
          <Link to={"/modelX"} >
          <li className={`mx-3 py-1 duration-500 px-3 py-2 font-${mode===1?'bold':'medium'} text-base hover:py-2 hover:rounded-md hover:backdrop-sepia-0 hover:bg-black/10`}>
            Model X
          </li>
          </Link>
          <Link to={"/modelY"} >
          <li className={`mx-3 py-1 duration-500 px-3 py-2 font-${mode===1?'bold':'medium'} text-base hover:py-2 hover:rounded-md hover:backdrop-sepia-0 hover:bg-black/10`}>
            Model Y
          </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
