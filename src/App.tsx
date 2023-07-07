//react icons
import { BiSolidChevronDown } from "react-icons/bi";
import { RiCloseFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlay } from "react-icons/fa";
//pictures
import HeroPicture from "./images/hero-picture.png";
import EssentialPicture from "./images/essential-sec-pic.png";
import FocusPicture from "./images/focus-sec-pic.png";
//carosel pictures
import CaroselOne from "./images/carouselOne.png";
import CaroselTwo from "./images/beautiful-young-female-doctor-looking-camera-office.jpg";
import CaroselThree from "./images/portrait-beautiful-mature-blonde-bearded-guy-with-trendy-hairdo-casual-grey-shirt-smiling.jpg";
import CaroselFour from "./images/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer.jpg";
//svg import
import RedCircle from "./images/red-circle.svg";
import BlueCircle from "./images/blue-circle.svg";
import YellowCircle from "./images/yellow-circle.svg";
//hooks
import { useState, useEffect } from "react";
//slider moduales
import { Navigation, Pagination, A11y } from "swiper/modules";
//core
import { Swiper, SwiperSlide } from "swiper/react";
//slider styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function App() {
  const [navExtendted, setNavExtend] = useState(true);
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  function extendNav() {
    setNavExtend(!navExtendted);
  }

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

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
        <section className="py-20 sm:py-12">
          <div className="container| w-11/12 mx-auto ">
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
                <div className="flex sm:flex-col items-center  ">
                  <button className="bg-main-button whitespace-nowrap px-8 py-3  rounded-md cursor-pointer text-white text-2xl font-bold">
                    Get Started
                  </button>
                  <button className="sm:mt-7 whitespace-nowrap px-8 py-3 text-main-button cursor-pointer font-medium text-xl flex items-center gap-3">
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
        <section className="bg-[#F1F5F9] py-20 sm:py-12">
          <div className="container| flex sm:flex-col justify-between items-center gap-4 w-11/12 mx-auto ">
            <div className="flex flex-col items-center text-center max-w-md">
              <img src={RedCircle} />
              <h4 className="my-4 text-2xl ">Fermentum amet</h4>
              <p className="text-lg ">
                Pellentesque quis tincidunt sit sed. Tortor massa sed habitant
                dignissim senectus purus. Consectetur integer id in et pulvinar
                interdum id.
              </p>
            </div>
            <div className="flex flex-col items-center text-center my-8 max-w-sm">
              <img src={YellowCircle} />
              <h4 className="my-4 text-2xl ">Dignissim quam</h4>
              <p className="text-lg ">
                Quam sed neque vitae viverra purus venenatis ac non. Eget sed
                nunc, amet, nibh nulla. Morbi sed risus ullamcorper diam, elit
                ut non.
              </p>
            </div>
            <div className="flex flex-col items-center text-center max-w-sm">
              <img src={BlueCircle} />
              <h4 className="my-4 text-2xl ">Risus morbi</h4>
              <p className="text-lg ">
                Euismod sed pellentesque ut elementum. Accumsan gravida turpis
                ac at. Ullamcorper vitae non est elit odio at augue consequat.
              </p>
            </div>
          </div>
        </section>
        <section className="py-20 sm:py-12">
          <div className="container| w-11/12 mx-auto ">
            <h2 className="text-center text-5xl sm:text-3xl font-extrabold sm:font-bold ">
              All the essential tools
            </h2>
            <p className="text-lg text-center mt-7 mb-20">
              Odio vulputate cras vel lacinia turpis volutpat adipiscing.
              Sollicitudin at velit, blandit tempus nunc in.
            </p>
            <div className="even-columns| mx-auto flex sm:flex-col gap-12 justify-between items-center">
              <div className="sm:w-10/12 w-1/2 flex justify-center">
                <img className=" " src={EssentialPicture} alt="" />
              </div>
              <div className="sm:w-10/12 w-1/2  ">
                <div className="pl-5 border-y-0 border-r-0 border-solid border-main-button">
                  <h4 className="text-xl font-medium mb-8">Sem augue tempus</h4>
                  <p className="font-normal text-lg mb-8 ">
                    Venenatis blandit habitasse nunc, sapien enim elit in. Arcu,
                    pharetra, et cursus sit senectus in blandit. Aliquet enim
                    fermentum non semper nibh ut neque. Pellentesque ut
                    tincidunt vitae arcu bibendum malesuada lorem sapien
                    volutpat.
                  </p>
                </div>

                <h4 className="text-xl font-medium mb-8 pl-5 border-y-0 border-r-0 border-solid border-[#CBD5E1]">
                  Habitant integer interdum a
                </h4>
                <h4 className="text-xl font-medium pl-5 border-y-0 border-r-0 border-solid border-[#CBD5E1]">
                  Tempus natoque id
                </h4>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 sm:py-12">
          <div className="container| w-11/12 mx-auto ">
            <h2 className="text-center text-5xl sm:text-3xl font-extrabold sm:font-bold ">
              Focus on what matters
            </h2>
            <p className="text-lg text-center mt-7 mb-20">
              Odio vulputate cras vel lacinia turpis volutpat adipiscing.
              Sollicitudin at velit, blandit tempus nunc in.
            </p>
            <div className="even-columns| mx-auto flex sm:flex-col gap-12 justify-between items-center">
              <div className="sm:w-10/12 w-1/2 flex justify-center">
                <img className=" " src={FocusPicture} alt="" />
              </div>
              <div className="sm:w-10/12 w-1/2  ">
                <div className="pl-5 border-y-0 border-r-0 border-solid border-main-button">
                  <h4 className="text-xl font-medium mb-8">
                    Bibendum gravida dolor egestas aliquam
                  </h4>
                  <p className="font-normal text-lg mb-8 ">
                    Egestas tincidunt hendrerit nibh platea sit vivamus aenean
                    rhoncus etiam. Tristique amet, sed ac ac dolor habitant.
                    Mauris duis neque molestie venenatis nibh hendrerit
                    pharetra. Tortor suscipit leo sit tellus ac scelerisque
                    gravida sem.
                  </p>
                </div>

                <h4 className="text-xl font-medium mb-8 pl-5 border-y-0 border-r-0 border-solid border-[#CBD5E1]">
                  Egestas lorem eget
                </h4>
                <h4 className="text-xl font-medium pl-5 border-y-0 border-r-0 border-solid border-[#CBD5E1]">
                  Tellus eget feugiat sit
                </h4>
              </div>
            </div>
            <div className="flex justify-center py-20 sm:py-12">
              <button className="bg-main-button text-white cursor-pointer rounded-md px-8 py-3 ">
                Get Started
              </button>
            </div>
          </div>
        </section>
        {/* ******************swiper************** */}
        <section className="bg-[#F1F5F9] py-20 sm:py-12">
          <div className="container| w-11/12 mx-auto ">
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation={screenSize.width >= 640 ? true : false}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <div className="flex sm:flex-col justify-around items-center">
                  <img src={CaroselOne} className="sm:w-10/12 w-1/2 max-w-xl" />
                  <div className="sm:w-10/12 sm:mx-auto sm:text-center w-1/2 ml-10 max-w-xl">
                    <h4 className="font-semibold text-xl tracking-wider text-footer-gray mt-8">
                      SUCCESS STORIES
                    </h4>
                    <p className="font-normal text-2xl my-10 tracking-wide">
                      <span className="text-[#EAB308]">“</span> Id urna, nisl,
                      ut quam. Diam suspendisse fringilla quam arcu mattis est
                      velit in. Nibh in purus sit convallis phasellus ut. At vel
                      erat ultricies commodo. Neque suspendisse a habitasse
                      commodo. <span className="text-[#EF4444]">”</span>
                    </p>
                    <h4 className="text-lg font-normal">
                      Marie Poirot,
                      <span className="font-medium">
                        <br />
                        Bigapp
                      </span>
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex sm:flex-col justify-around items-center">
                  <img
                    src={CaroselTwo}
                    className="sm:w-10/12 w-1/2 rounded-lg max-w-xl"
                  />
                  <div className="sm:w-10/12 sm:mx-auto sm:text-center w-1/2 ml-10 max-w-xl">
                    <h4 className="font-semibold text-xl tracking-wider text-footer-gray">
                      SUCCESS STORIES
                    </h4>
                    <p className="font-normal text-2xl my-10 tracking-wide">
                      <span className="text-[#EAB308]">“</span> Id urna, nisl,
                      ut quam. Diam suspendisse fringilla quam arcu mattis est
                      velit in. Nibh in purus sit convallis phasellus ut. At vel
                      erat ultricies commodo. Neque suspendisse a habitasse
                      commodo. <span className="text-[#EF4444]">”</span>
                    </p>
                    <h4 className="text-lg font-normal">
                      Marie Poirot,
                      <span className="font-medium">
                        <br />
                        Bigapp
                      </span>
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex sm:flex-col justify-around items-center">
                  <img
                    src={CaroselThree}
                    className="sm:w-10/12 w-1/2 max-w-xl rounded-lg"
                  />
                  <div className="sm:w-10/12 sm:mx-auto sm:text-center w-1/2 ml-10 max-w-xl">
                    <h4 className="font-semibold text-xl tracking-wider text-footer-gray">
                      SUCCESS STORIES
                    </h4>
                    <p className="font-normal text-2xl my-10 tracking-wide">
                      <span className="text-[#EAB308]">“</span> Id urna, nisl,
                      ut quam. Diam suspendisse fringilla quam arcu mattis est
                      velit in. Nibh in purus sit convallis phasellus ut. At vel
                      erat ultricies commodo. Neque suspendisse a habitasse
                      commodo. <span className="text-[#EF4444]">”</span>
                    </p>
                    <h4 className="text-lg font-normal">
                      Marie Poirot,
                      <span className="font-medium">
                        <br />
                        Bigapp
                      </span>
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex sm:flex-col justify-around items-center">
                  <img
                    src={CaroselFour}
                    className="sm:w-10/12 w-1/2 max-w-xl rounded-lg"
                  />
                  <div className="sm:w-10/12 sm:mx-auto sm:text-center w-1/2 ml-10 max-w-xl">
                    <h4 className="font-semibold text-xl tracking-wider text-footer-gray">
                      SUCCESS STORIES
                    </h4>
                    <p className="font-normal text-2xl my-10 tracking-wide">
                      <span className="text-[#EAB308]">“</span> Id urna, nisl,
                      ut quam. Diam suspendisse fringilla quam arcu mattis est
                      velit in. Nibh in purus sit convallis phasellus ut. At vel
                      erat ultricies commodo. Neque suspendisse a habitasse
                      commodo. <span className="text-[#EF4444]">”</span>
                    </p>
                    <h4 className="text-lg font-normal">
                      Marie Poirot,
                      <span className="font-medium">
                        <br />
                        Bigapp
                      </span>
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
