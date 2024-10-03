export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container mt-4">
      {/* Assignment Name */}
      <div className="mb-4">
        <label htmlFor="wd-name"><strong>Assignment Name</strong></label>
        <input id="wd-name" className="form-control mt-2" defaultValue="A1 - ENV + HTML"/>
      </div>

      {/* Description */}
      <div className="mb-4">
        <label htmlFor="wd-description"><strong>Description</strong></label>
        <textarea
          id="wd-description"
          className="form-control mt-2"
          cols={45}
          rows={10}
          defaultValue={`The assignment is available online.
Submit a link to the landing page of your Web application running on Netlify.
The landing page should include the following:
- Your full name and section
- Links to each of the lab assignments
- Links to the Kanbas application
- Links to all relevant source code repositories
The Kanbas application should include a link to navigate back to the landing page.`}
        />
      </div>

      {/* Form Table */}
      <table className="table">
        {/* Points */}
        <tr>
          <td align="right">
            <label htmlFor="wd-points"><strong>Points</strong></label>
          </td>
          <td>
            <input id="wd-points" className="form-control" type="number" defaultValue={100} />
          </td>
        </tr>

        {/* Assignment Group */}
        <tr>
          <td align="right">
            <label htmlFor="wd-group"><strong>Assignment Group</strong></label>
          </td>
          <td>
            <select id="wd-group" className="form-select">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
            </select>
          </td>
        </tr>

        {/* Display Grade As */}
        <tr>
          <td align="right">
            <label htmlFor="wd-display-grade-as"><strong>Display Grade as</strong></label>
          </td>
          <td>
            <select id="wd-display-grade-as" className="form-select">
              <option value="Percentage">Percentage</option>
              <option value="Complete/Incomplete">Complete/Incomplete</option>
            </select>
          </td>
        </tr>

        {/* Submission Type */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type"><strong>Submission Type</strong></label>
          </td>
          <td>
            <select id="wd-submission-type" className="form-select">
              <option value="Online">Online</option>
              <option value="On Paper">On Paper</option>
            </select>
            <div className="mt-3">
              <label><strong>Online Entry Options</strong></label>
              <div className="form-check">
                <input type="checkbox" id="wd-text-entry" className="form-check-input" />
                <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="wd-website-url" className="form-check-input" />
                <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="wd-media-recordings" className="form-check-input" />
                <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="wd-student-annotation" className="form-check-input" />
                <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="wd-file-upload" className="form-check-input" />
                <label htmlFor="wd-file-upload" className="form-check-label">File Upload</label>
              </div>
            </div>
          </td>
        </tr>


        {/* Assign Section */}
        <tr>
          <td align="right" valign="top">
            <label><strong>Assign</strong></label>
          </td>
          <td>
            {/* Assign To */}
            <div className="mb-2">
              <label htmlFor="wd-assign-to"><strong>Assign to</strong></label>
              <input id="wd-assign-to" className="form-control mt-1" defaultValue="Everyone"/>
            </div>

            {/* Due Date */}
            <div className="mb-2">
              <label htmlFor="wd-due-date"><strong>Due</strong></label>
              <input type="date" id="wd-due-date" className="form-control mt-1" defaultValue="2024-05-13"/>
            </div>

            {/* Available From & Until */}
            <div className="d-flex">
              <div className="me-2">
                <label htmlFor="wd-available-from"><strong>Available From</strong></label>
                <input type="date" id="wd-available-from" className="form-control mt-1" defaultValue="2024-05-06"/>
              </div>
              <div>
                <label htmlFor="wd-available-until"><strong>Until</strong></label>
                <input type="date" id="wd-available-until" className="form-control mt-1" defaultValue="2024-05-28"/>
              </div>
            </div>
          </td>
        </tr>
      </table>

        {/* Save and Cancel Buttons */}
        <div className="text-end">
          <button id="wd-cancel" className="btn btn-secondary me-2">Cancel</button>
          <button id="wd-save" className="btn btn-primary">Save</button>
        </div>
    </div>
  );
}

