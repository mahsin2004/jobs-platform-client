import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="max-w-[1440px] px-16 mx-auto py-14 bg-gradient-to-tr from-gray-800 to-gray-800 ">
      <div className="">
        <div className="lg:flex lg:gap-48 lg:items-center lg:justify-center">
          <div className="flex gap-2 items-center">
            <img
              className="w-10"
              src="https://i.postimg.cc/8CFSXmHs/image.png"
              alt="logo"
            />
            <p className="normal-case text-[22px] text-white">Dream Jobs</p>
          </div>
        </div>

        <div className="text-white">
          <p className="text-xl lg:text-2xl pb-2 font-medium">Contact Us</p>
          <div className="flex gap-10">
            <div className="flex items-center gap-1">
              <span className="text-lg">
                <BsTelephoneFill></BsTelephoneFill>
              </span>
              <p>+8801741156408</p>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xl">
                <MdEmail></MdEmail>
              </span>
              <p>info@gmail.com</p>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xl">
                <MdLocationOn></MdLocationOn>
              </span>
              <p>72, Wall street, King Road, Dhaka</p>
            </div>
          </div>
        </div>
      </div>
      
      <h1 className="h-[.5px] rounded-full bg-white/30 my-8"></h1>
      <section className="flex gap-3 justify-between">
        <div className="text-center text-white">
          <p>© 2023 Dream Jobs. All Rights Reserved.</p>
        </div>
        <div className="flex justify-center gap-3">
          <button className="text-gray-800 bg-white rounded-full p-2 hover:text-white hover:bg-gray-800  transition">
            <FaFacebookF></FaFacebookF>
          </button>
          <button className="text-gray-800 bg-white rounded-full p-2 hover:text-white hover:bg-gray-800 transition">
            <BsInstagram></BsInstagram>
          </button>
          <button className="text-gray-800 bg-white rounded-full p-2 hover:text-white hover:bg-gray-800  transition">
            <BsTwitter></BsTwitter>
          </button>
          <button className="text-gray-800 bg-white rounded-full p-2 hover:text-white hover:bg-gray-800  transition">
            <FaLinkedin></FaLinkedin>
          </button>
          <button className="text-gray-800 bg-white rounded-full p-2 hover:text-white hover:bg-gray-800  transition">
            <BsYoutube></BsYoutube>
          </button>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
