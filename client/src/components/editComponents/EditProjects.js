import React from "react";
import { Link } from "react-router-dom";
import "./Edit.css";

const EditProjects = () => {
  return (
    <div className="edit">
      <div className="main-container">
        <div className="same-component">
          <div className="same-form">
            <form>
              <h3 className="updated"> Updated</h3>
              <h4> Projects Component </h4>
              <label htmlFor="text"> Id</label>
              <input type="text" name="product_id" id="product_id" />

              <label htmlFor="text">Title </label>
              <input type="text" name="title" id="title" required />

              <label htmlFor="text"> </label>
              <textarea
                cols="30"
                rows="3"
                type="text"
                name="description"
                id="description"
                required
              />

              <div className="upload">
                <input type="file" name="file" id="file_up" />
                <div id="file_img">
                  <img
                    src="https://media.istockphoto.com/photos/young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-picture-id1285301614?b=1&k=20&m=1285301614&s=170667a&w=0&h=tDEC2-p91cZiNU5C19sVhB9L08PmaH5wIijCvRDalCI="
                    alt=""
                  />
                  <span> X</span>
                </div>
              </div>

              <div className="btns">
                <button className="updateBtn"> Update Item </button>
                <Link to="/admin">
                  <button className="cancel-btn"> Cancel </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProjects;
