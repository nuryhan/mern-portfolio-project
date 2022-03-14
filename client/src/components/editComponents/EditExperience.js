import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const EditExperience = () => {
  const [experience, setExperience] = useState("");
  const [message, setMessage] = useState("");
  const history = useNavigate();
  const location = useLocation();

  const path = location.pathname.split("/")[2];

  // getting the specific id
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/experience/${path}`);
        setExperience(res.data.experience);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const updateExperience = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`/experience/update/${path}`, {
        experience,
      });
      setMessage(res.data.msg);
      setExperience("");
      setTimeout(() => {
        history("/admin");
      }, 2000);
    } catch (error) {}
  };

  return (
    <div className="edit">
      <div className="main-container">
        <div className="same-component">
          <div className="same-form">
            <form onSubmit={updateExperience}>
              <h3 className="updated"> {message} </h3>
              <h4>Experience component </h4>
              <label htmlFor="text"> Experience</label>
              <input
                type="text"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />
              <div className="btns">
                <button className="updateBtn" type="submit">
                  Update Item
                </button>
                <Link to="/admin">
                  <button className="cancel-btn"> Cancel</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditExperience;
