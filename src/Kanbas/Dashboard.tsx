import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">

          <img src="/reactjs.webp" alt="A reactjs logo" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>

          <img src="/MachineLearning.jpg" alt="A Machine Learning logo" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home">
              CS1235 Machine Learning
            </Link>
            <p className="wd-dashboard-course-title">
              Machine Learning
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>

          <img src="/discreteStructure.jpg" alt="A math logo" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home">
              CS1236 Discrete Structures
            </Link>
            <p className="wd-dashboard-course-title">
              Discrete Structures
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>

          <img src="/mobileApp.jpg" alt="A mobile app logo" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home">
              CS1237 Mobile Application
            </Link>
            <p className="wd-dashboard-course-title">
              Mobile Application
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>

          <img src="/foundation.png" alt="A foundation of computer science logo" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home">
              CS1238 Foundation of Computer Sciences
            </Link>
            <p className="wd-dashboard-course-title">
              Foundation of Computer Sciences
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>

          <img src="/Algorithms.png" alt="A algorithm logo" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home">
              CS1239 Algorithm
            </Link>
            <p className="wd-dashboard-course-title">
              Algorithm
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>

          <img src="/cloudComputing.png" alt="A cloud computing logo" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home">
              CS1240 Cloud Computing
            </Link>
            <p className="wd-dashboard-course-title">
              Cloud Computing
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>

          <img src="/database.png" alt="A database logo" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home">
              CS1241 Databases
            </Link>
            <p className="wd-dashboard-course-title">
              Databases
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

