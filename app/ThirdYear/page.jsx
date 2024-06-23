"use client"
import Image from "next/image";
import Link from "next/link";

import comitteImg from "./../../public/assets/comittes/image-1.jpg";

const ThirdYearLevels = [
  {
    img: comitteImg,
    title: "Computer System",
  },
  {
    img: comitteImg,
    title: "Electronics",
  },
  {
    img: comitteImg,
    title: "Civil",
  },
  {
    img: comitteImg,
    title: "Mechanical",
  },
  {
    img: comitteImg,
    title: "Industrial",
  },
];
const ThirdYear = () => {
  return (
    <div className=" text-black bg-black mt-[100px] flex flex-wrap gap-6 justify-center items-center p-9 md:p-0 ">
      {ThirdYearLevels.map((level) => (
        <div key={level.title} class=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <Image
              class="rounded-t-lg"
              src={level.img}
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {level.title}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <p className="  flex justify-start">
            <Link
              href="https://github.com/ayman-ezzeldin"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ThirdYear