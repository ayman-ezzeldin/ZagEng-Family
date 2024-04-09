
import techneImage from "../../public/assets/techne.png";
import nourImage from "../../public/assets/nour.png";
import Image from 'next/image'
const Partners = () => {
  return (
    <section className="py-14 px-10 lg:px-20">
      <h2 className="font-bold text-center tracking-widest text-xl">
        PARTNERS
      </h2>
      <div className="flex justify-around mt-10 flex-wrap gap-10 [&>*:nth-child(3)]:hidden [&>*:nth-child(4)]:hidden lg:[&>*:nth-child(3)]:block lg:[&>*:nth-child(4)]:block">
        {partnersCards.map((item, index) => (
          <div key={index}>
            <Image src={item.src} alt={item.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

const partnersCards = [
  {
    src: techneImage,
    name: "Techne Summit",
  },
  {
    src: nourImage,
    name: "Nour Center",
  },
  {
    src: techneImage,
    name: "Techne Summit",
  },
  {
    src: nourImage,
    name: "Nour Center",
  },
];

export default Partners;
