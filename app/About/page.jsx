// import '/src/omr/input.css'
// import '/src/omr/output.css'
// import '/src/omr/in.css'
import Image from 'next/image';

import question from "../../public/assets/images/question_mark.png"
import brain from "../../public/assets/images/pink brain.png"
import trophy from "../../public/assets/images/trophy and target.png"
const About = () => {
return (
<div className=" mt-[140px] ">
    {/* <!-- main container --> */}
    <div className="">
        {/* <!-- who are we --> */}
        <div className="flex">
            <div className=" md:w-[70%]">
                <h1 className=" text-6xl text-center mt-8 mb-7 mr-21 font-bold ">Who are we?</h1>
                <p className=' w-[80%] md:w-[65%] m-auto text-xl text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis doloribus beatae eligendi ex eaque? Quisquam provident adipisci omnis voluptates eveniet ullam,
                    nesciunt vero, quia illum, et inventore quod sequi tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias in consequuntur vero nesciunt minima non. Libero minima, cum porro neque sunt est alias. Nesciunt illo hic eaque asperiores libero quidem!
                </p>
            </div>
            <div className="hidden md:block">
                <Image src={question} className=' md:w-[200px]' alt="image question"/>
            </div>
        </div>
        {/* <!-- Vission --> */}
        <div className="flex mt-20">
            <div className="hidden md:block ml-5 ">
                <Image src={brain} alt="image brain" className=" md:w-[900px]"/>
            </div>
            <div className="">
                <h1 className="text-6xl text-center mt-8 mb-7 font-bold">Our vision</h1>
                <p className='w-[80%] md:w-[65%] m-auto text-xl text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod voluptatum debitis excepturi impedit. Quia aliquam architecto deleniti beatae dolore esse aperiam officiis,
                    in quos, cumque sapiente adipisci numquam possimus nobis?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora fuga asperiores dolor eum vel et quam architecto hic cum magni sint tempore consequatur maxime in, delectus voluptates suscipit voluptatum rerum.
                </p>
            </div>
        </div>
        {/* <!-- mission --> */}
        <div className="flex mt-20">
            <div className=" md:w-[70%]">
                <h1 className=" text-6xl text-center mt-8 mb-7 mr-21 font-bold ">Our Mission</h1>
                <p className=' w-[80%] md:w-[65%] m-auto text-xl text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis doloribus beatae eligendi ex eaque? Quisquam provident adipisci omnis voluptates eveniet ullam,
                    nesciunt vero, quia illum, et inventore quod sequi tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias in consequuntur vero nesciunt minima non. Libero minima, cum porro neque sunt est alias. Nesciunt illo hic eaque asperiores libero quidem!
                </p>
            </div>
            <div className="hidden md:block ">
                <Image src={trophy} className=' md:w-[400px]' alt="image question"/>
            </div>
        </div>
    </div>
</div>
)
}
export default About