"use client";
import { useState } from "react";

function CommitteeSelection() {
  // const [selectedCommittee, setSelectedCommittee] = useState(null);

  // const committeeMembers = [
  //   { name: "Academic", id: "academic" },
  //   { name: "CS", id: "cs" },
  //   { name: "IT", id: "it" },
  //   { name: "Technical", id: "technical" },
  //   { name: "HR", id: "hr" },
  //   { name: "Media", id: "media" },
  // ];

  const handleCommitteeClick = (id) => {
    setSelectedCommittee(id);
  };

  return (
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
            className=" py-3 bg-black  border border-gray-700 shadow  rounded w-full  px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline  "
            required
          >
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
  );
}

export default CommitteeSelection;

// <div className="groupInputs col-span-6 md:border-l-2 pl-2 md:pl-8  w-[86%] mx-auto">
//         <div
//           id="commitee"
//           className="grid grid-cols-3 justify-center text-center items-center gap-4 mr-4"
//         >
//           {/* {committeeMembers.map((committee) => (
//             <div
//               key={committee.id}
//               className={`committee-member cursor-pointer lg:w-[197px] rounded-md border border-gray-700 px-2 py-4 font-bold select-none
//               ${selectedCommittee === committee.id ? "bg-[#be4c03]" : ""}`}
//               onClick={() => handleCommitteeClick(committee.id)}
//             >
//               <h3>{committee.name}</h3>
//             </div>
//           ))} */}

//         </div>
// </div>
