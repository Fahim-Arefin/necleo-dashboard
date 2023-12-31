// const Card = ({ data }) => {
//   return (
//     <div className="col-span-1 rounded shadow-lg ">
//       <div className="h-[170px]">
//         <img className="w-full h-full" src={data.img} alt="Random Image" />
//       </div>
//       <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2">{data.title}</div>
//         <p className="text-gray-700 text-base">{data.category}</p>
//       </div>
//       <div className="px-6 pb-4">
//         <div
//           className="bg-[#FA782F] hover:bg-[#ff660e] text-white font-bold py-2 px-4 rounded-md
//           flex w-fit items-center text-sm"
//         >
//           <div>Details</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;

import { FaCalendarAlt } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";

function calculateDaysDuration(startDate, endDate) {
  const duration = endDate - startDate;
  const days = Math.floor(duration / (24 * 60 * 60 * 1000));
  return days;
}

const Card = ({ data, handleDetailsClick }) => {
  return (
    <div className="col-span-1 max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-4">
      <img
        className="w-full h-48 object-cover"
        src={data.img}
        alt={data.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 first-letter:uppercase">
          {data.title}
        </div>
        {/* <p className="text-gray-700 text-base">{data.description}</p> */}
        <button
          onClick={() => handleDetailsClick(data)}
          className="px-3 py-1.5 bg-[#FA782F] rounded-md text-white text-sm flex space-x-1 items-center
        hover:bg-[#ff660e]"
        >
          <TbListDetails />
          <div>Details</div>
        </button>
      </div>
      <div className="px-6 py-4 flex justify-between">
        <p className="text-gray-600 text-sm uppercase">{data.category}</p>
        <p className="text-gray-600 text-sm flex items-center">
          <FaCalendarAlt className="inline mr-2" />
          {calculateDaysDuration(data.startDate, data.endDate)} Days
        </p>
      </div>
    </div>
  );
};

export default Card;
