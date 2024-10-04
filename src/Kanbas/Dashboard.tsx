import { Link } from "react-router-dom";
import './Dashboard.css';

// export default function Dashboard() {
//   return (
//     <div id="wd-dashboard" className="container mt-3">

//       {/* Dashboard Title */}
//       <h1 id="wd-dashboard-title">Dashboard</h1>
//       <hr />

//       {/* Published Courses Subtitle */}
//       <h2 id="wd-dashboard-published">Published Courses (8)</h2>
//       <hr />

//       {/* Courses Grid */}
//       <div id="wd-dashboard-courses" className="row">
//         <div className="row row-cols-1 row-cols-md-5 g-4">
          
//           {/* Course Card 1 */}
//           <div className="wd-dashboard-course col" style={{ width: "270px" }}>
//             <div className="card rounded-3 overflow-hidden">
//               <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
//                 <img src="/reactjs.webp" alt="A reactjs logo" width="100%" height={160}/>
//                 <div className="card-body">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     CS1234 React JS
//                   </h5>
//                   <p className="wd-dashboard-course-text card-text">
//                       Full Stack software developer
//                   </p>
//                   <div className="mt-auto">
//                     <button className="btn btn-primary"> Go </button>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           </div>

//           <div className="wd-dashboard-course col" style={{ width: "270px" }}>
//             <div className="card rounded-3 overflow-hidden">
//               <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
//                 <img src="/MachineLearning.jpg" alt="A Machine Learning logo" width="100%" height={160}/>
//                 <div className="card-body">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     CS1235 Machine Learning
//                   </h5>
//                   <p className="wd-dashboard-course-text card-text">
//                     Introduction to AI and ML
//                   </p>
//                   <div className="mt-auto">
//                     <button className="btn btn-primary"> Go </button>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           </div>

//           <div className="wd-dashboard-course col" style={{ width: "270px" }}>
//             <div className="card rounded-3 overflow-hidden">
//               <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
//                 <img src="/discreteStructure.jpg" alt="A math logo" width="100%" height={160}/>
//                 <div className="card-body">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     CS1236 Discrete Structures
//                   </h5>
//                   <p className="wd-dashboard-course-text card-text">
//                     Foundation of math and its usage to computer sciences
//                   </p>
//                   <div className="mt-auto">
//                     <button className="btn btn-primary"> Go </button>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           </div>

//           <div className="wd-dashboard-course col" style={{ width: "270px" }}>
//             <div className="card rounded-3 overflow-hidden">
//               <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
//                 <img src="/mobileApp.jpg" alt="A mobile app logo" width="100%" height={160}/>
//                 <div className="card-body">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     CS1237 Mobile Application
//                   </h5>
//                   <p className="wd-dashboard-course-text card-text">
//                     Develop Android and IOS Mobile Applications
//                   </p>
//                   <div className="mt-auto">
//                     <button className="btn btn-primary"> Go </button>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           </div>

//           <div className="wd-dashboard-course col" style={{ width: "270px" }}>
//             <div className="card rounded-3 overflow-hidden">
//               <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
//                 <img src="/foundation.png" alt="A foundation of computer science logo" width="100%" height={160}/>
//                 <div className="card-body">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     CS1238 Foundation of Computer Sciences
//                   </h5>
//                   <p className="wd-dashboard-course-text card-text">
//                     Learn foundamental data structures and algorithm
//                   </p>
//                   <div className="mt-auto">
//                     <button className="btn btn-primary"> Go </button>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           </div>

//           <div className="wd-dashboard-course col" style={{ width: "270px" }}>
//             <div className="card rounded-3 overflow-hidden">
//               <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
//                 <img src="/Algorithms.png" alt="A algorithm logo" width="100%" height={160}/>
//                 <div className="card-body">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     CS1239 Algorithm
//                   </h5>
//                   <p className="wd-dashboard-course-text card-text">
//                     Learn important algorithms in industry
//                   </p>
//                   <div className="mt-auto">
//                     <button className="btn btn-primary"> Go </button>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           </div>

//           <div className="wd-dashboard-course col" style={{ width: "270px" }}>
//             <div className="card rounded-3 overflow-hidden">
//               <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
//                 <img src="/cloudComputing.png" alt="A cloud computing logo" width="100%" height={160}/>
//                 <div className="card-body">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     CS1240 Cloud Computing
//                   </h5>
//                   <p className="wd-dashboard-course-text card-text">
//                     Learn knowledge and application on Cloud Computing
//                   </p>
//                   <div className="mt-auto">
//                     <button className="btn btn-primary"> Go </button>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           </div>

//           <div className="wd-dashboard-course col" style={{ width: "270px" }}>
//             <div className="card rounded-3 overflow-hidden">
//               <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
//                 <img src="/database.png" alt="A database logo" width="100%" height={160}/>
//                 <div className="card-body">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     CS1241 Databases
//                   </h5>
//                   <p className="wd-dashboard-course-text card-text">
//                     Learn SQL and Databases Management
//                   </p>
//                   <div className="mt-auto">
//                     <button className="btn btn-primary"> Go </button>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }


// Course data with different IDs, names, and descriptions
const courses = [
  { id: 'CS1234', name: 'React JS', description: 'Code as Full Stack software developer' },
  { id: 'CS1235', name: 'Machine Learning', description: 'Introduction to AI and application on ML' },
  { id: 'CS1236', name: 'Discrete Structures', description: 'Foundation of math and its usage to computer sciences' },
  { id: 'CS1237', name: 'Mobile Application', description: 'Develop Android and IOS Mobile Applications' },
  { id: 'CS1238', name: 'Foundation of Computer Sciences', description: 'Learn foundamental data structures and algorithm' },
  { id: 'CS1239', name: 'Algorithm', description: 'Learn important algorithms in industry' },
  { id: 'CS1240', name: 'Cloud Computing', description: 'Learn knowledge and application on Cloud Computing'},
  { id: 'CS1241', name: 'Databases', description: 'Learn SQL and Databases Management'},
];

export default function Dashboard() {
  // Function to get the image path based on the course name or ID
  const getImageForCourse = (courseName:String) => {
    switch (courseName) {
      case 'React JS':
        return '/reactjs.webp';
      case 'Machine Learning':
        return '/MachineLearning.jpg';
      case 'Discrete Structures':
        return '/discreteStructure.jpg';
      case 'Mobile Application':
        return '/mobileApp.jpg';
      case 'Foundation of Computer Sciences':
        return '/foundation.png';
      case 'Algorithm':
        return '/Algorithms.png';
      case 'Cloud Computing':
        return '/cloudComputing.png';
      case 'Databases':
        return '/database.png';
    }
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map(course => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }} key={course.id}>
              <div className="card rounded-3 overflow-hidden">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                      to={`/Kanbas/Courses/${course.id}/Home`}>
                  {/* Use the getImageForCourse function to dynamically set the image */}
                  <img src={getImageForCourse(course.name)} width="100%" height={160} alt={course.name} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.id} {course.name}
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      {course.description}
                    </p>
                    <button className="btn btn-primary">Go</button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


