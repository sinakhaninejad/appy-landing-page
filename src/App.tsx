import { BiSolidChevronDown } from "react-icons/bi";
import { RiCloseFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlay } from "react-icons/fa";
import HeroPicture from "./images/Col.png";
import { useState } from "react";
function App() {
  const [navExtendted, setNavExtend] = useState(true);
  function extendNav() {
    setNavExtend(!navExtendted);
  }
  return (
    <>
      <header className="border-solid border border-nav-border ">
        <nav className=" px-5 py-6 relative flex justify-between items-center">
          <a href="#" className="font-bold text-3xl text-main-button pr-6 ">
            Appy
          </a>
          <div
            className={`${
              navExtendted ? "" : "sm:hidden "
            } flex sm:absolute sm:flex-col right-0 top-full sm:shadow-sm sm:bg-white items-center justify-between w-full sm:w-96 ml-5`}
          >
            <ul className="flex sm:flex-col gap-10">
              <li className="cursor-pointer flex items-center gap-1 sm:pt-5">
                Products <BiSolidChevronDown />
              </li>
              <li className=" cursor-pointer flex items-center gap-1">
                Business Solutions
                <BiSolidChevronDown />
              </li>
              <li className=" cursor-pointer flex items-center gap-1">
                Help Center
                <BiSolidChevronDown />
              </li>
              <li className="cursor-pointer flex items-center gap-1">
                Pricing
                <BiSolidChevronDown />
              </li>
            </ul>

            <div className="flex sm:flex-col sm:mt-10 shrink-0 items-center sm:items-start">
              <a href="#" className="text-main-button mr-5">
                Log In
              </a>
              <button className="bg-main-button sm:my-10  text-white cursor-pointer rounded-md px-8 py-3 ">
                Get Started
              </button>
            </div>
          </div>

          <div className="hidden sm:block cursor-pointer" onClick={extendNav}>
            {navExtendted ? (
              <RiCloseFill size={30} />
            ) : (
              <GiHamburgerMenu size={30} />
            )}
          </div>
        </nav>
      </header>
      <main className="">
        <section>
          <div className="container| w-11/12 mx-auto my-16">
            <div className="even-columns| flex sm:flex-col justify-between items-center sm:text-center">
              <div className="flow| w-1/2 sm:w-10/12 ">
                <h1 className="text-6xl sm:text-5xl font-extrabold leading-tight ">
                  Building apps just got easier
                </h1>
                <p className=" font-normal my-10 max-w-2xl leading-snug">
                  Aliquam vel platea curabitur sit vestibulum egestas sit id
                  lorem. Aliquet neque, dui sed eget scelerisque. Non at at
                  venenatis tortor amet feugiat ullamcorper in. Odio vulputate
                  cras vel lacinia turpis volutpat adipiscing. Sollicitudin at
                  velit, blandit tempus nunc in.
                </p>
                <div className="flex items-center ">
                  <button className="bg-main-button shrink-0 px-8 py-3  rounded-md cursor-pointer text-white text-2xl font-bold">
                    Get Started
                  </button>
                  <button className="ml-10 shrink-0 text-main-button cursor-pointer font-medium text-xl flex items-center gap-3">
                    <FaPlay />
                    Watch Video
                  </button>
                </div>
              </div>
              <div className="w-1/2flex justify-end mt-10">
                <img className="" src={HeroPicture} alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
