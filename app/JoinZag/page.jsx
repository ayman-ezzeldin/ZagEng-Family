"use client";
// import { useRouter } from "next/router";
import { useState } from "react";

const JoinZagEngPage = () => {
  // const router = useRouter()
  // const [formValidate , setFormValidate] = useState(false)
  // function handleSubmit() {
  //   // router.push('/')
  //   setTimeout(() => {
  //     window.location.href = "/";
  //   }, 1000);
  // }


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
});
const [formValidity, setFormValidity] = useState(false);
// const router = useRouter();

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
};


const handleButtonSubmit = () => {
    window.location.href = '/'
    
};

const validateForm = () => {
    const { name, email, phone } = formData;
    return name.trim() !== '' && email.trim() !== '' && phone.trim() !== '';
};

const handleFormValidation = () => {
    const isValid = validateForm();
    setFormValidity(isValid);
};

  return (
    <div>
      <div className=" container mx-auto font-mon xl:max-w-[1200px] my-9 text-white bg-black ">
        <h1 className=" text-5xl font-bold   pl-4 pt-14 ">Join ZagEng</h1>
        <form
        // onChange={handleSubmit}
          method="post"
          action="https://script.google.com/macros/s/AKfycbxV_JLrXU6wfQod27OzT4mVtgVj62MpeUbl9l-xdf-LHMmXUYbmyiZj-uLQcg4NiFj2/exec"
        >
          <div className=" grid grid-cols-3 md:grid-cols-8 gap-4 mt-16">
            <h2 className="text-2xl text-center md:ml-0 md:text-center col-span-3 md:col-span-2  ">
              Basic information
            </h2>
            <div className="groupInputs col-span-6 md:border-l-2 pl-2 md:pl-8 w-[86%] mx-auto">
              <div className="mb-4">
                <label htmlFor="" className="block font-bold mb-2 ">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  className="py-3 bg-black border border-gray-700 shadow appearance-none  rounded w-full  px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline "
                  value={formData.name} 
                  onChange={handleChange} 
                  onBlur={handleFormValidation} // Validate on blur
                  require
                />
              </div>
              <div className="mb-4">
                <label htmlFor="" className="block font-bold mb-2 ">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  className="py-3 bg-black border border-gray-700 shadow appearance-none  rounded w-full px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline "
                  value={formData.email} 
                  onChange={handleChange} 
                  onBlur={handleFormValidation} // Validate on blur
                  require
                />
              </div>
              <div className="mb-4">
                <label htmlFor="" className="block font-bold mb-2 ">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="Your Number"
                  name="phone"
                  className=" py-3 bg-black border border-gray-700 shadow  rounded w-full px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline appearance-none  "
                  value={formData.phone} 
                  onChange={handleChange} 
                  onBlur={handleFormValidation} // Validate on blur
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="" className="block font-bold mb-2 ">
                  Destination
                </label>
                <select
                  name="Destination"
                  className="py-3 bg-black border border-gray-700 shadow  rounded w-full  px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline  "
                  required
                >
                  <option value="--">--</option>
                  <option value="Preparatory engineering">
                    Preparatory engineering
                  </option>
                  <option value="Computer and Syatems Engineering">
                    Computer and Syatems Engineering
                  </option>
                  <option value="Electrical Communications Engineer">
                    Electrical Communications Engineer
                  </option>
                  <option value="Electrical Engineering">
                    Electrical Engineering
                  </option>
                  <option value="Mechanical Power Engineering">
                    Mechanical Power Engineering
                  </option>
                  <option value="Mechanical Production Engineeering">
                    Mechanical Production Engineeering
                  </option>
                  <option value="Civil Engineering">Civil Engineering</option>
                  <option value="Architectural Engineering">
                    Architectural Engineering
                  </option>
                  <option value="Industrial Engineering">
                    Industrial Engineering
                  </option>
                  <option value="Structural Engineering<">
                    Structural Engineering
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* <CommitteeSelection/> */}

          <div className="grid grid-cols-3 md:grid-cols-8 gap-4 mt-9">
            <h2 className="text-2xl text-center md:ml-0 md:text-right col-span-3 md:col-span-2 ">
              Choose your committee
            </h2>
            <div className="groupInputs col-span-6 md:border-l-2 pl-2 md:pl-8 w-[86%] mx-auto">
              <div className="mb-4">
                <label htmlFor="" className="block font-bold mb-2 ">
                  Committee
                </label>
                <select
                  name="Committee"
                  className=" py-3 bg-black  border border-gray-700 shadow  rounded w-full  px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline  "
                  required
                >
                  <option value="--">--</option>
                  <option value="Academic">Academic</option>
                  <option value="CS">CS</option>
                  <option value="IT">IT</option>
                  <option value="Technical">Technical</option>
                  <option value="HR">HR</option>
                  <option value="Media">Media</option>
                </select>
              </div>
            </div>
          </div>

          <div className=" grid grid-cols-3 md:grid-cols-8 gap-4 mt-9">
            <h2 className="text-2xl text-center md:ml-0 md:text-right col-span-3 md:col-span-2 ">
              Committee questions
            </h2>
            <div className="groupInputs col-span-6 md:border-l-2 pl-2 md:pl-8 w-[86%]  mx-auto">
              <div>
                <label htmlFor="" className=" block font-bold mb-2 ">
                  Why did you choose this committee?
                </label>
                <textarea
                  name="why this committe"
                  className="  w-[100%] outline-none rounded-md px-2 py-2 bg-black border border-gray-700 resize-none text-gray-200 pl-3 "
                  rows="4"
                  placeholder=" your answer"
                ></textarea>
              </div>
              <div>
                <label htmlFor="" className=" block font-bold mb-2">
                  One more question here
                </label>
                <textarea
                  name="one more question here"
                  className=" w-[100%] outline-none rounded-md px-2 py-2 bg-black border border-gray-700 resize-none text-gray-200 pl-3 "
                  rows="4"
                  placeholder=" Any question"
                ></textarea>
              </div>
              <div>
                <label htmlFor="" className="block font-bold mb-2">
                  Another question
                </label>
                <textarea
                  name="another question"
                  className=" w-[100%] mb-2 outline-none rounded-md px-2 py-2 bg-black border border-gray-700 resize-none text-gray-200 pl-3 "
                  rows="1"
                  placeholder=" Any question"
                ></textarea>
              </div>
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center pt-5 sm:pt-14 w-[300px] mx-auto">
            <p className=" font-medium font-mon text-center text-xl sm:h-[29px] sm:w-[511px] ">
              Great, you are done! Submit the form now!
            </p>
            <input
              type="submit"
              value="Submit"
              disabled={!formValidity}
              onClick={handleButtonSubmit}
              className={` sm:w-[390px] px-8 mt-4 mb-8 cursor-pointer leading-10 tracking-wide h-[73px] text-2xl p-2 rounded-md gap-2 ${!formValidity ? 'bg-[#e48e58] ' : 'bg-[#BE4C03]'} font-mon font-[700] `}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinZagEngPage;

// 'use client';

// import React, { useState } from 'react';

// const UserInfoForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     address: '',
//     hobbies: '',
//     age: '',
//     gender: '',
//     bio: '',
//   });
//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   try {
//   //     const response = await fetch('https://script.google.com/macros/s/AKfycbyBX9e5inl6iELh6no2WehORjuqyYE4wFo--EmTAJ3qSnyL3oifnzMfq9bQPYkEJ50c/exec', {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: JSON.stringify(formData),
//   //     });

//   //     if (response.ok) {
//   //       setMessage('Form submitted successfully!');
//   //     } else {
//   //       const errorData = await response.json();
//   //       setMessage(`Form submission failed: ${errorData.message}`);
//   //     }
//   //   } catch (error) {
//   //     setMessage(`Form submission failed: ${error.message}`);
//   //   }
//   // };

//   return (
//     <form action='https://script.google.com/macros/s/AKfycbxV_JLrXU6wfQod27OzT4mVtgVj62MpeUbl9l-xdf-LHMmXUYbmyiZj-uLQcg4NiFj2/exec' method='POST' className=' flex justify-center align-items-center flex-col gap-5 w-72 m-auto pt-[98px]' >
//       <div>
//         <label htmlFor="name">Name:</label>
//         <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
//       </div>
//       <div>
//         <label htmlFor="address">Address:</label>
//         <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
//       </div>
//       <div>
//         <label htmlFor="hobbies">Hobbies:</label>
//         <input type="text" id="hobbies" name="hobbies" value={formData.hobbies} onChange={handleChange} />
//       </div>
//       {/* <div>
//         <label htmlFor="age">Age:</label>
//         <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required />
//       </div>
//       <div>
//         <label htmlFor="gender">Gender:</label>
//         <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
//           <option value="">Select Gender</option>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//           <option value="other">Other</option>
//         </select>
//       </div>
//       <div>
//         <label htmlFor="bio">Bio:</label>
//         <textarea id="bio" name="bio" value={formData.bio} onChange={handleChange}></textarea>
//       </div> */}
//       <button type="submit">Submit</button>
//       {message && <p>{message}</p>}
//     </form>
//   );
// };

// export default UserInfoForm;
