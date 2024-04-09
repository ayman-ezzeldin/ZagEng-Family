import CommitteeSelection from "../components/CommitteeSelection"
const JoinZagEngPage = () => {
  return (
    <div>
      <div className=" container mx-auto font-mon xl:max-w-[1200px] my-9 text-white bg-black ">
        <h1 className=" text-5xl font-bold   pl-4 pt-14 ">Join ZagEng</h1>
        <form className=" ">
          <div className=" grid grid-cols-3 md:grid-cols-8 gap-4 mt-16">
            <h2 className="text-2xl text-center md:ml-0 md:text-center col-span-3 md:col-span-2  ">Basic information</h2>
            <div className="groupInputs col-span-6 md:border-l-2 pl-2 md:pl-8 w-[86%] mx-auto" > 
                <div className="mb-4">
                  <label htmlFor="" className="block font-bold mb-2 ">Full Name</label>
                  <input type="text" placeholder="Your Name" className="py-3 bg-black border border-gray-700 shadow appearance-none  rounded w-full  px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline " required />
                </div>
                <div className="mb-4">
                  <label htmlFor="" className="block font-bold mb-2 ">Email</label>
                  <input type="email" placeholder="Your Email" className="py-3 bg-black border border-gray-700 shadow appearance-none  rounded w-full px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline " required />
                </div>
                <div className="mb-4">
                  <label htmlFor="" className="block font-bold mb-2 ">Phone</label>
                  <input type="tel" placeholder="Your Number" className=" py-3 bg-black border border-gray-700 shadow  rounded w-full px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline appearance-none  " required />
                </div>
                <div className="mb-4">
                  <label htmlFor="" className="block font-bold mb-2 ">Destination</label>
                  <select className=" py-3 bg-black border border-gray-700 shadow  rounded w-full  px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline  " required>
                    <option value="Preparatory engineering">Preparatory engineering</option>
                    <option value="Computer and Syatems Engineering">Computer and Syatems Engineering</option>
                    <option value="Electrical Communications Engineer">Electrical Communications Engineer</option>
                    <option value="Electrical Engineering">Electrical Engineering</option>
                    <option value="Mechanical Power Engineering">Mechanical Power Engineering</option>
                    <option value="Mechanical Production Engineeering">Mechanical Production Engineeering</option>
                    <option value="Civil Engineering">Civil Engineering</option>
                    <option value="Architectural Engineering">Architectural Engineering</option>
                    <option value="Industrial Engineering">Industrial Engineering</option>
                    <option value="Structural Engineering<">Structural Engineering</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
            </div>
          </div>
          <CommitteeSelection/>
          <div className=" grid grid-cols-3 md:grid-cols-8 gap-4 mt-9">
            <h2 className="text-2xl text-center md:ml-0 md:text-right col-span-3 md:col-span-2 ">Committee questions</h2>
              <div className="groupInputs col-span-6 md:border-l-2 pl-2 md:pl-8 w-[86%]  mx-auto" >
                <div>
                  <label htmlFor="" className=" block font-bold mb-2 ">Why did you choose this committee?</label>
                  <textarea className="  w-[100%] outline-none rounded-md px-2 py-2 bg-black border border-gray-700 resize-none text-gray-200 pl-3 "rows="4" placeholder=" your answer"></textarea>
                </div>
                <div>
                  <label htmlFor=""  className=" block font-bold mb-2">One more question here</label>
                  <textarea className=" w-[100%] outline-none rounded-md px-2 py-2 bg-black border border-gray-700 resize-none text-gray-200 pl-3 "rows="4" placeholder=" Any question"></textarea>
                </div>
                <div>
                  <label htmlFor="" className="block font-bold mb-2">Another question</label>
                  <textarea className=" w-[100%] mb-2 outline-none rounded-md px-2 py-2 bg-black border border-gray-700 resize-none text-gray-200 pl-3 "rows="1" placeholder=" Any question"></textarea>
                </div>
              </div>
          </div>
          <div className=" flex flex-col justify-center items-center pt-5 sm:pt-14 w-[300px] mx-auto">
            <p className=" font-medium font-mon text-center text-xl sm:h-[29px] sm:w-[511px] ">Great, you are done! Submit the form now!</p>
            <input type="submit" value="Submit" className=" sm:w-[390px] px-8 mt-4 mb-8 cursor-pointer leading-10 tracking-wide h-[73px] text-2xl p-2 rounded-md gap-2 bg-[#be4c03] font-mon font-[700] " />
          </div>
        </form>
      </div>
    </div>
  )
}


export default JoinZagEngPage;