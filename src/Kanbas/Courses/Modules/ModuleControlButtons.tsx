import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from 'react-icons/fa';
import GreenCheckmark from "./GreenCheckmark";
export default function ModuleControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <FaPlus className="me-2 fs-4 text-dark" />
      <IoEllipsisVertical className="fs-4" />
    </div>
);}