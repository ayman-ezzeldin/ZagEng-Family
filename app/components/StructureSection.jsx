import unsplash2 from '../../public/assets/iamges/unsplash_9BoqXzEeQqM (2).png'
import unsplash3 from '../../public/assets/iamges/unsplash_9BoqXzEeQqM (3).png'
import i38 from '../../public/assets/iamges/380657223_881796083025264_2558736653751751045_n.jpg'
import Image from 'next/image'
function StructureSection() {
return (
    <>
        <section className="structure flex flex-col mb-10">
            <h1 className="text-center text-5xl font-bold mb-10">team structure </h1>
                {/* adding p-3 */}
            <div className="wrap grid sm:grid-cols-1 p-3 md:grid-cols-2 lg:grid-cols-3  gap-8">

                <div className="box overflow-hidden ">

                    <Image className="Image  hover:scale-105 transition ease-in-out duration-500 sm:w-full rounded-[10px]" src={unsplash3} alt="iamge "/>  
                    
                    <h1 className="text-2xl font-semibold mt-3">academic committee</h1>
                    
                    <p className="my-3  text-gray-300">The motivation of this committee's members is to help their classNamemates and 
                        friends get the latest news of the lectures, sections, and labs. They also ...
                    </p>
                    
                    <span className="flex justify-start items-center ll">

                        <p className="mr-2  text-green-400">Learn more</p>

                        {/* <i className="fa-solid fa-arrow-right" style="color: #0fe66c;"></i> */}
                    </span>
                </div>

                <div className="box overflow-hidden">
                    <Image className="Image hover:scale-105 transition ease-in-out duration-500 sm:w-full rounded-[10px]" src={unsplash2} alt="iamge"/>
                    <h1 className="text-2xl font-semibold mt-3">information technology</h1>
                    <p className="my-3  text-gray-300">Lorem ipsum dolor sit amet consectetur.
                    Faucibus odio pellentesque eu mattis eget enim facilisis volutpat. Venenatis sit ...
                    </p>

                    <span className="flex justify-start items-center ll">

                        <p className="mr-2  text-green-400">Learn more</p>
                        {/* <i className="fa-solid fa-arrow-right" style="color: #0fe66c;"></i> */}

                    </span>
                </div>

                <div className="box overflow-hidden">
                    <Image className="Image hover:scale-105 transition ease-in-out duration-500 rounded-[10px]" src={i38} alt="iamge"/>
                    <h1 className=" text-2xl font-semibold mt-3">human resources</h1>
                    <p className="my-3  text-gray-300">Lorem ipsum dolor sit amet consectetur.
                    Faucibus odio pellentesque eu mattis eget enim facilisis volutpat. Venenatis sit ...
                    </p>


                    <span className="flex justify-start items-center ll ">

                        <p className="mr-2 text-green-400" >Learn more</p>

                        {/* <i className="fa-solid fa-arrow-right " style="color: #0fe66c;"></i> */}

                    </span>
                    
                </div> 
                
            </div> 

        </section> 
    </>
  );
}

export default StructureSection;
