import Link from "next/link";
import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { BsMoonFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const mobileNavHandler = () => {
    setNav(!nav);
  };

  return (
    <>
      {!nav && (
        <div className="hidden md:flex w-full bg-zinc-100 pl-10 xl:py-3 2xl:py-5 py-2 font-sans justify-between">
          <div className=" pl-10 pr-20 lg:ml-10 mr-36 xl:mr-60">
            <h1 className="m-0 text-2xl xl:text-3xl 2xl:text-4xl font-bold p-3 rounded-full bg-white">
              AA
            </h1>
            <div></div>
          </div>
          <div className="pt-3 xl:pt-5 2xl:pt-3 w-1/2 xl:w-2/5">
            <ul className="flex text-base xl:text-bg 2xl:text-xl font-semibold px-2 m-0 justify-between">
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
          <div className="px-5 lg:pr-10 xl:pt-5 2xl:pt-4 pt-4">
            <ul>
              <li className="xl:hidden">
                <BsMoonFill size={16} />
              </li>
              <li className="hidden xl:block 2xl:hidden">
                <BsMoonFill size={20} />
              </li>
              <li className="hidden 2xl:block">
                <BsMoonFill size={24} />
              </li>
            </ul>
          </div>
        </div>
      )}
      <ul
        onClick={mobileNavHandler}
        className="md:hidden p-2 bg-zinc-100 rounded w-10 h-10"
      >
        <li>
          <BiMenu size={25} />
        </li>
      </ul>
      {nav && (
        <div>
          <RxCross2 onClick={mobileNavHandler} />
        </div>
      )}
    </>
  );
};

export default Navbar;
