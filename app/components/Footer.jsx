"use client";
import Link from "next/link";
import Image from "next/image";
import image from "../../public/assets/images/image 1.png";
import insta from "../../public/assets/images/mdi_instagram.png";
import linkedin from "../../public/assets/images/mdi_linkedin.png";
import vector1 from "../../public/assets/images/Vector (1).png";
import vector from "../../public/assets/images/Vector.png";

const Social = [
  {
    id : '1' ,
    title : 'X' ,
    img : vector1 ,
    href : "https://twitter.com/engzagfamily" ,
  },
  {
    id : '2' ,
    title : 'Linkedin' ,
    img : linkedin ,
    href : 'https://www.linkedin.com/company/zagengfamily',
  },
  {
    id : '3' ,
    title : 'Facebook' ,
    img : vector ,
    href : 'https://www.facebook.com/zagengfamily',
  },
  {
    id : '4' ,
    title : 'Instagram' ,
    img : insta ,
    href : 'https://www.instagram.com/zagengfamily',
  },
]

const Comittes = [
  {
    title : 'Human Resources' ,
  },
  {
    title : 'Acadamic' ,
  },
  {
    title : 'Information technology' ,
  },
  {
    title : 'Technical' ,
  },
  {
    title : 'Media' ,
  },
  {
    title : 'Computer science' ,
  },
]

const Footer = () => {
  const date = new Date().getFullYear();
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
          <h3 className=" text-[40px] ml-8 mb-5 font-bold">
            Care about present <br /> Build the future
          </h3>
          <p className=" ml-8 text-[22px] text-gray ">
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
          <ul>
            {Comittes.map((item) => (
            <li key={item.title} >
              <a href="" className=" hover:underline block mt-1 ">
                {item.title}
              </a>
            </li>
            ) )}
          </ul>
        </div>
        <div className=" col-span-5 md:col-span-2">
          <h4 className="text-xl font-semibold mb-2">Follow us</h4>
          <ul>
            {Social.map((item) => (
              <li key={item.id} className="">
              <Link
                href={item.href}
                target="_blank"
                className="flex items-center justify-start gap-4"
              >
                <Image src={item.img} className=" w-6" alt='image here' />
                <h1 className=" text-2xl hover:underline ">{item.title}</h1>
              </Link>
            </li>
            ) )}
          </ul>
        </div>
      </div>
      <div className=" m-auto text-center py-8 ">
        <p className=" text-xl">
          {" "}
          <span className=" font-semibold tracking-wider ">ZagEng </span> © - {date}  All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
