import Link from "next/link";
import group from "../../public/assets/iamges/joinsection.png";
import vector1 from "../../public/assets/iamges/Vector 1.png";
import Image from "next/image";

function JoinSection() {
  return (
    <>
      <div className="space w-full mt-10 ">
        <Image src={group} className="w-full" alt="background-image" />
      </div>

      <section className="flex flex-col items-center justify-between font-montserrat">
        <div className="nums w-full  grid grid-cols-3 mb-28">
          <div className="num text-center border-r-2">
            <h1 className="text-[64px] font-bold mb-2">24k+</h1>
            <p className=" text-[24px] font-semibold">followers in facebook</p>
          </div>
          <div className="num text-center border-r-2 ">
            <h1 className="text-[64px] font-bold mb-2">2007</h1>
            {/* adding p-1 */}
            <p className=" text-[24px] font-semibold"> we are here since</p>
          </div>
          <div className="num text-center">
            <h1 className="text-[64px] font-bold mb-2">99+</h1>
            <p className=" text-[24px] font-semibold">members in the family</p>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center mt-16 relative font-montserrat">
          <h1 className="text-[64px] font-montserrat font-bold mb-10 ">Join the family</h1>
          <p className="my-10 text-lg text-center sm:px-1 md:px-1 lg:px-56 text-gray-400 text leading-8  ">
            Each season begins simultaneously with universities &lsquo; immediately
            after the end of the summer vacation. We target talents with
            different skills and capabilities. Hurry yp and don &apos; t miss this
            exceptional opportunity!
          </p>
          <Link href='/JoinZag' className="flex justify-start items-center gap-2 text-xl my-5 ll">
            <span
              className=" font-normal text-[35px] font-montserrat text-[#59C9A5] "
            >
              Fill the form{" "}
            </span>
            <span>
                <svg width="45" height="41" viewBox="0 0 45 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.166664 17.7083V23.2916H33.6667V28.8749H39.25V23.2916H44.8333V17.7083H39.25V12.1249H33.6667V17.7083H0.166664ZM28.0833 6.54158H33.6667V12.1249H28.0833V6.54158ZM28.0833 6.54158H22.5V0.958252H28.0833V6.54158ZM28.0833 34.4583H33.6667V28.8749H28.0833V34.4583ZM28.0833 34.4583H22.5V40.0416H28.0833V34.4583Z" fill="#59C9A5"/>
                </svg>
            </span>

            {/* <Image src={vector} alt="vector" className="w-full bg-red-600" /> */}
          </Link>

          <div className="absolute text-md text-center text-white bg-yellow-900 p-2 rotate-[-25deg] rounded-3xl right-[220px] top-[70px] hidden xl:block 2xl:hidden">
            Don &apos; t miss the apportunity
          </div>
          <div className="absolute w-32 h-32 right-[280px] top-[-0px] hidden xl:block 2xl:hidden">
            <Image className=" w-[140px]" src={vector1} alt="logo" />
          </div>
        </div>
      </section>
    </>
  );
}

export default JoinSection;
