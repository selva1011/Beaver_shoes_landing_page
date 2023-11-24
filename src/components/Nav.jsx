import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { hamburger, close } from "../assets/icons";
import { useState } from "react";
import Button from "./Button";

const Nav = () => {
  const [mobile, setMobile] = useState(false);

  const openMobile = () => {
    setMobile(!mobile);
  };

  return (
    <header className={`padding-x py-8 absolute z-10 w-full `}>
      <nav className={`flex justify-between items-center max-container `}>
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={150}
            height={45}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-grey"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          className="flex gap-2 text-sm font-medium font-montserrat max-lg:hidden wide:mr-24"
          href="/"
        >
          <Button
            label="Login/Register"
            backgroundColor={`bg-white`}
            textColor={`text-coral-red`}
            className="flex"
          />
        </a>
        <div className="hidden max-lg:block cursor-pointer">
          <img
            src={hamburger}
            alt="hamburger"
            onClick={openMobile}
            width={25}
            height={25}
          />
        </div>
        <div
          className={`hidden ${
            mobile
              ? "flex flex-col max-lg:block "
              : "max-lg:hidden"
          }`}
        >
          <img 
            src={close}
            alt="close icon"
            onClick={openMobile}
            height={25}
            width={25} />
          <ul className="flex flex-col gap-3 transition-all duration-500 ease-in-out text-center items-center left-[-100%] justify-center bg-white h-[100vh] w-[100%] z-20 top-0">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-xl font-bold text-coral-red"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
