import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/reactjs.webp" width={200} />
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
        </div>
        <div className="wd-dashboard-course"> Machine Learning </div>
        <div className="wd-dashboard-course"> Discrete Structures </div>
        <div className="wd-dashboard-course"> Mobile Application </div>
        <div className="wd-dashboard-course"> Foundation of Computer Sciences </div>
        <div className="wd-dashboard-course"> Algorithm </div>
        <div className="wd-dashboard-course"> Cloud Computing </div>
        <div className="wd-dashboard-course"> Databases </div>
      </div>
    </div>
  );
}

