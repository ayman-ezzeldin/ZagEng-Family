"use client"
import unsplash2 from "../../public/assets/iamges/unsplash_9BoqXzEeQqM (2).png";
import unsplash3 from "../../public/assets/iamges/unsplash_9BoqXzEeQqM (3).png";
import i38 from "../../public/assets/iamges/380657223_881796083025264_2558736653751751045_n.jpg";
import Link from "next/link";
import Image from "next/image";

    const TeamStructure = [
    {
        title: "Academic committe",
        paragraph:
        "The motivation of this committee's members is to help their classNamemates and friends get the latest news of the lectures, sections, and labs. They also...",
        image: unsplash3,
        link : '#' ,
    },
    {
        title: "Information technology",
        paragraph:
        "Lorem ipsum dolor sit amet consectetur. Faucibus odio pellentesque deu mattis eget enim facilisis volutpat. Venenatis sit...",
        image: unsplash2,
        link : '#' ,
    },
    {
        title: "Human resources",
        paragraph:
        "Lorem ipsum dolor sit amet consectetur. Faucibus odio pellentesque deu mattis eget enim facilisis volutpat. Venenatis sit...",
        image: i38,
        link : '#' ,
    },
    ];
function StructureSection() {
return (
    <>
    <section className="structure flex flex-col mb-10">
        <h1 className="text-center text-5xl font-bold mb-10">
        Team structure{" "}
        </h1>
        <div className="wrap grid sm:grid-cols-1 p-3 md:grid-cols-2 lg:grid-cols-3  gap-8">
            { TeamStructure.map((structure) => (
                <div key={structure.title} className="box overflow-hidden">
                <Image
                className="Image hover:scale-105 transition ease-in-out duration-500 rounded-[10px]"
                src={structure.image}
                alt="iamge"
                />
                <h1 className=" text-2xl font-semibold mt-3">{structure.title}</h1>
                <p className="my-3  text-gray-300">
                {structure.paragraph}
                </p>
                <Link href={structure.link} className=" text-gray underline text-[19px]">
                    {" "}
                    Learn more{" "}
                </Link>
            </div>
            ) ) }
        </div>
    </section>
    </>
);
}

export default StructureSection;
``