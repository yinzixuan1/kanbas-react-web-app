import { BsGripVertical } from 'react-icons/bs';
import ModuleControlButtons from "./ModuleControlButtons";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
  return (
    // <div id="wd-modules-container">

    //   {/* Modules Controls */}
    //   <ModulesControls /><br /><br /><br /><br />

    //   {/* Modules List */}
    //   <ul id="wd-modules" className="list-group rounded-0">
        
    //     {/* Week 1 */}
    //     <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">

    //       <div className="wd-title p-3 ps-2 bg-secondary">
    //         <BsGripVertical className="me-2 fs-3" />
    //         <span className="flex-grow-1">
    //         Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda
    //         <ModuleControlButtons />
    //         </span>
    //       </div>

    //       <ul className="wd-lessons list-group rounded-0">

    //         <li className="wd-lesson list-group-item p-3 ps-1">
    //           <BsGripVertical className="me-2 fs-3" />
    //           <span className="flex-grow-1">
    //           LEARNING OBJECTIVES
    //           </span>
    //           <LessonControlButtons />
    //           <ul className="wd-content list-group list-group-flush">
    //             <li className="wd-content-item list-group-item p-3 ps-1">
    //               <BsGripVertical className="me-2 fs-3" />
    //               <span className="flex-grow-1">
    //               Introduction to the course
    //               </span>
    //               <LessonControlButtons />
    //             </li>
    //             <li className="wd-content-item list-group-item p-3 ps-1">
    //               <BsGripVertical className="me-2 fs-3" />
    //               <span className="flex-grow-1">
    //               Learn what is Web Development
    //               </span>
    //               <LessonControlButtons />
    //             </li>
    //           </ul>
    //         </li>

    //         <li className="wd-lesson list-group-item p-3 ps-1">
    //           <BsGripVertical className="me-2 fs-3" />
    //           READING
    //           <LessonControlButtons />
    //           <ul className="wd-content list-group list-group-flush">
    //             <li className="wd-content-item list-group-item p-3 ps-1">
    //               <BsGripVertical className="me-2 fs-3" />
    //               Full Stack Developer - Chapter 1
    //               <LessonControlButtons />
    //             </li>
    //             <li className="wd-content-item list-group-item p-3 ps-1">
    //               <BsGripVertical className="me-2 fs-3" />
    //               Full Stack Developer - Chapter 2
    //               <LessonControlButtons />
    //             </li>
    //           </ul>
    //         </li>

    //         <li className="wd-lesson list-group-item p-3 ps-1">
    //           <BsGripVertical className="me-2 fs-3" />
    //           SLIDES
    //           <LessonControlButtons />
    //           <ul className="wd-content list-group list-group-flush">
    //             <li className="wd-content-item list-group-item p-3 ps-1">
    //               <BsGripVertical className="me-2 fs-3" />
    //               Introduction to Web Development
    //               <LessonControlButtons />
    //             </li>
    //             <li className="wd-content-item list-group-item p-3 ps-1">
    //               <BsGripVertical className="me-2 fs-3" />
    //               Creating an HTTP server with Node.js
    //               <LessonControlButtons />
    //             </li>
    //             <li className="wd-content-item list-group-item p-3 ps-1">
    //               <BsGripVertical className="me-2 fs-3" />
    //               Creating a React Application
    //               <LessonControlButtons />
    //             </li>
    //           </ul>
    //         </li>
    //       </ul>
    //     </li>

    //     {/* Week 2 */}
    //     <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
    //       <div className="wd-title p-3 ps-2 bg-secondary">Week 2, Lecture 2 - Formatting User Interfaces with HTML</div>
    //       <ul className="wd-lessons list-group rounded-0">
    //         <li className="wd-lesson list-group-item p-3 ps-1">
    //           <span className="wd-title">LEARNING OBJECTIVES</span>
    //           <ul className="wd-content list-group list-group-flush">
    //             <li className="wd-content-item list-group-item p-3 ps-1">Learn how to create user interfaces with HTML</li>
    //             <li className="wd-content-item list-group-item p-3 ps-1">Deploy the assignment to Netlify</li>
    //           </ul>
    //         </li>
    //         <li className="wd-lesson list-group-item p-3 ps-1">
    //           <span className="wd-title">SLIDES</span>
    //           <ul className="wd-content list-group list-group-flush">
    //             <li className="wd-content-item list-group-item p-3 ps-1">Introduction to HTML and the DOM</li>
    //             <li className="wd-content-item list-group-item p-3 ps-1">Formatting Web content with Headings and Lists</li>
    //             <li className="wd-content-item list-group-item p-3 ps-1">Formatting content with Lists and Tables</li>
    //           </ul>
    //         </li>
    //       </ul>
    //     </li>
    //   </ul>
    // </div>
    <div id="wd-modules-container">
      <ModulesControls /><br /><br /><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary"> 
            <BsGripVertical className="me-2 fs-3" />
            Week 1 
            <ModuleControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              LEARNING OBJECTIVES 
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Introduction to the course
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Learn what is Web Development 
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
               LESSON 1 
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
               LESSON 2 
              <LessonControlButtons />
            </li>
          </ul>
        </li>
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary"> 
            <BsGripVertical className="me-2 fs-3" />
            Week 2 
            <ModuleControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              LEARNING OBJECTIVES 
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1"> 
              <BsGripVertical className="me-2 fs-3" />
              LESSON 1 
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1"> 
              <BsGripVertical className="me-2 fs-3" />
              LESSON 2 
              <LessonControlButtons />
            </li>
          </ul>
        </li>
      </ul> 
    </div>

  );
}
