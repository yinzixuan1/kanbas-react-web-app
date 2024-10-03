// import { GoPlus } from "react-icons/go";
// import {IoEllipsisVertical} from "react-icons/io5";


// export default function AssignmentPercentageButtons() {
//   return (
//     <div className="d-flex align-items-center float-end">
//       {/* Pill-shaped button */}
//       <span className="badge-pill percentage-button">
//         40% of Total
//       </span>

//       {/* Plus icon */}
//       <GoPlus className="ms-1 me-2 fs-3" /> {/* Space on left and right of the plus icon */}

//       {/* Ellipsis icon */}
//       <IoEllipsisVertical className="fs-4" />
//     </div>
//   );
// }

import { GoPlus } from "react-icons/go";
import { IoEllipsisVertical } from "react-icons/io5";

export default function AssignmentPercentageButtons() {
  return (
    <div className="d-flex align-items-center float-end">
      {/* Pill-shaped button */}
      <span
        className="badge-pill percentage-button px-3 py-2 d-flex align-items-center"
        style={{
          border: '1px solid #ccc',
          borderRadius: '20px',
          backgroundColor: '#f1f1f1',
        }}
      >
        {/* 40% of Total Text */}
        40% of Total
      </span>

        {/* Ellipsis icon */}
        <IoEllipsisVertical className="fs-4 ms-2" />

      {/* Plus icon */}
      <GoPlus className="ms-2 fs-3" />
    </div>
  );
}


