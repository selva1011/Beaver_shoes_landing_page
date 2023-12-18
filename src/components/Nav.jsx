import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import Button from "./Button";

const Nav = () => {
  const [sticky, setSticky] = useState(false);
  const [phone, setPhone] = useState(false);

  const opener = () => {
    setPhone(!phone);
  };

  const Scroll_handle = () => {
    if (window.screenY > 150) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", Scroll_handle);

  const GoTop = () => {
    window.scrollTo({
      top: (0, 0),
      behavior: "smooth",
    });
  };

  const Mobile_nav = (
    <>
      <div className="lg:hidden block absolute top-24 min-h-screen w-full left-0 right-0 bg-white ease-in-out">
        <ul className="flex flex-col gap-10 text-center py-28  font-semibold text-2xl font-montserrat">
          {navLinks.map((item) => (
            <li key={item.label} className="hover:text-black">
              <a href={item.href} onClick={opener}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );

  return (
    <header
      className={`padding-x py-4 fixed z-20 w-full h-20 justify-center items-center bg-white drop-shadow-md	 ${
        window.screenY > 150 ? " drop-shadow-md" : ""
      }`}
    >
      <nav
        className={`${
          sticky ? ".nav-play" : ""
        } flex justify-between items-center max-container `}
      >
        <div className="">
          <img
            src={headerLogo}
            alt="head"
            className="flex justify-start items-center m-0 cursor-pointer max-sm:pt-2 pt-3 "
            onClick={GoTop}
          />
        </div>
        <ul className="flex-1 flex font-montserrat font-semibold text-xl justify-center items-center gap-12 max-lg:hidden  ">
          {navLinks.map((item) => (
            <li
              key={item.label}
              className=" hover:underline hover:decoration-2 hover:underline-offset-8  active:text-red-700"
            >
              <a href={item.href} className="">
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
        <div>{phone && Mobile_nav}</div>
        <button
          className="hidden max-lg:block h-[25] w-[25] justify-center items-center"
          onClick={opener}
        >
          {phone ? <RiCloseLine size={30} /> : <RiMenuLine size={30} />}
        </button>
      </nav>
    </header>
  );
};

export default Nav;
