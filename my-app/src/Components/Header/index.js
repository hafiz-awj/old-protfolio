import Link from "next/link";
import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { BsMoonFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const mobileNavHandler = () => {
    setNav(!nav);
  };

  return (
    <>
      {!nav && (
        <div className="hidden md:flex">
          <div>
            <h1>Ali Awj</h1>
          </div>
          <div>
            <ul className="flex">
              <li>
                <Link href="#home">Home</Link>
              </li>
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#skills">Skills</Link>
              </li>
              <li>
                <Link href="#projects">Projects</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <BsMoonFill />
              </li>
            </ul>
          </div>
        </div>
      )}
      <div className="md:invisible"><ul onClick={mobileNavHandler}>
              <li>
                <BiMenu />
              </li>
            </ul></div>
      {nav && (
        <div>
          <RxCross2 onClick={mobileNavHandler} />
        </div>
      )}
    </>
  );
};

export default Navbar;
