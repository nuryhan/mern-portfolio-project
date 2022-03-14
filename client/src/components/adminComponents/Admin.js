import React from "react";
import AboutAdmin from "./AboutAdmin";
import "./admin.css";
import EducationAdmin from "./EducationAdmin";
import ExperienceAdmin from "./ExperienceAdmin";
import ProjectsAdmin from "./ProjectsAdmin";

const Admin = () => {
  return (
    <div className="main-container">
      <h2 className="title">Admin forms</h2>

      <div className="admin-center">
        {/* about component */}
        <h4 className="admin-title"> About Component </h4>
        <AboutAdmin />

        <br />
        <br />
        <hr style={{ border: "1px solid lightgray" }} />
        <br />
        <h4 className="admin-title">Education Component</h4>

        <EducationAdmin />
        <br />
        <br />
        <hr style={{ border: "1px solid lightgray" }} />
        <br />

        <h4 className="admin-title">Projects Component </h4>
        <ProjectsAdmin />
        <br />
        <br />
        <hr style={{ border: "1px solid lightgray" }} />
        <br />

        <h4 className="admin-title">Experience Component </h4>
        <ExperienceAdmin />
        <br />
      </div>
    </div>
  );
};

export default Admin;
