"use client"
import heroPg from '../../public/assets/hero-bg1.jpg'
import Image from 'next/image'
import Link from 'next/link';
const Hero = () => {
  return (
    <section className="relative lg:h-screen overflow-hidden flex items-center justify-center p-10 pt-20">
      <Image
        src={heroPg}
        alt="hero section bg Image"
        className="object-cover absolute z-0 w-full h-full"
      />
      <div className="absolute w-full h-full top-0 bg-black bg-opacity-30 z-10 " />
      <div className="z-20 text-center w-full max-w-4xl text-white text-3xl lg:text-4xl font-normal bg-white bg-opacity-20 backdrop-blur-sm h-fit p-14 mt-14 rounded-lg">
        <p className="mb-5">
          Care about the{" "}
          <span className="font-bold italic tracking-widest">PRESENT</span>
        </p>
        <p>
          Build the{" "}
          <span className="font-bold italic tracking-widest">FUTURE</span>
        </p>
        <p className="text-base mt-7">We’ve been here since 2007</p>
        <p className="text-base lg:text-lg tracking-wider opacity-60 mt-7 ">
          Zageng Family is the oldest student activity in Zagazig university.
          Our goals is to help each other so we can make more connections and
          form a family, also we can improve both hard and soft skills.
        </p>
        <Link href="/Comittees">
          <button className="bg-[#BE4C03] font-montserrat text-[24px] font-medium border border-[#FFAC78] mt-10  py-1 px-5 md:px-28 rounded-lg text-white ">
            Comittees </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
