"use client";
import Link from "next/link";
import Image from "next/image";
import image from "../../public/assets/images/image 1.png";
import insta from "../../public/assets/images/mdi_instagram.png";
import linkedin from "../../public/assets/images/mdi_linkedin.png";
import vector1 from "../../public/assets/images/Vector (1).png";
import vector from "../../public/assets/images/Vector.png";
const Footer = () => {
  const date = new Date().getFullYear();
  console.log(date);
  return (
    <footer className="bg-gradient-to-t from-amber-950  to-black mt-20 ">
      <div className=" flex align-items-center gap-6 w-[90%] m-auto items-center">
        <Image src={image} alt="image" />
        <h2 className=" bg-gradient-to-l from-orange-600 to-orange-800 text-transparent bg-clip-text font-bold text-2xl ">
          Zag Eng Family
        </h2>
      </div>
      <div className="grid grid-cols-12 md:grid-cols-12 gap-4 mt-10 w-[90%] m-auto justify-content-center">
        <div className=" col-span-12 md:col-span-5">
          <h3 className=" text-4xl ml-8 mb-5 font-semibold">
            Care about present <br /> Build the future
          </h3>
          <p className=" text-2xl ml-8 ">
            This is our slogan, our aim is to{" "}
            <br className=" hidden md:block" /> recruit and build talents
          </p>
        </div>

        <div className=" col-span-6 ml-7 md:col-span-2">
          <h1 className=" text-xl font-semibold mb-2">Family</h1>
          <ul className="">
            <li className="">
              <Link href="/About" className=" hover:underline">
                About us
              </Link>
            </li>
            <li className="">
              <a href="" className="hover:underline block mt-1">
                privacy policy
              </a>
            </li>
          </ul>
        </div>
        <div className=" hidden md:block md:col-span-3 ">
          <h4 className="text-xl font-semibold mb-2">COMMITTEES</h4>
          <ul className="">
            <li className="">
              <a href="" className=" hover:underline block mt-1 ">
                Human Resources
              </a>
            </li>
            <li className="">
              <a href="" className=" hover:underline block mt-1 ">
                Acadamic
              </a>
            </li>
            <li className="">
              <a href="" className=" hover:underline block mt-1 ">
                Information technology
              </a>
            </li>
            <li className="">
              <a href="" className=" hover:underline block mt-1 ">
                Technical
              </a>
            </li>
            <li className="">
              <a href="" className=" hover:underline block mt-1 ">
                Media
              </a>
            </li>
            <li className="">
              <a href="" className=" hover:underline block mt-1 ">
                Computer science
              </a>
            </li>
          </ul>
        </div>
        <div className=" col-span-5 md:col-span-2">
          <h4 className="text-xl font-semibold mb-2">Follow us</h4>
          <ul className="">
            <li className="">
              <Link
                href="https://twitter.com/engzagfamily"
                target="_blank"
                className="flex items-center justify-start gap-4"
              >
                <Image src={vector1} className=" w-6" />
                <h1 className=" text-2xl">x</h1>
              </Link>
            </li>
            <li className="">
              <Link
                href="https://www.linkedin.com/company/zagengfamily"
                target="_blank"
                className="flex items-center justify-start gap-4"
              >
                <Image src={linkedin} className=" w-6" />
                <h1 className=" text-xl">Linkedin</h1>
              </Link>
            </li>
            <li className="">
              <Link
                href="https://www.facebook.com/zagengfamily"
                target="_blank"
                className="flex items-center justify-start gap-4"
              >
                <Image src={vector} className=" w-6" />
                <h1 className=" text-xl">Facebook</h1>
              </Link>
            </li>
            <li className="">
              <Link
                href="https://www.instagram.com/zagengfamily"
                target="_blank"
                className="flex items-center justify-start gap-4"
              >
                <Image src={insta} className=" w-6" />
                <h1 className=" text-xl">Instagram</h1>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className=" m-auto text-center py-8 ">
        <p className=" text-xl">
          {" "}
          <span className=" font-semibold tracking-wider ">ZagEng        </span> © - {date}  All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
