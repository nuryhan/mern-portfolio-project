import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const EducationAdmin = () => {
  const [education, setEducation] = useState("");
  const [educationData, setEducationData] = useState([]);
  const [message, setMessage] = useState("");

  const fetchData = async () => {
    try {
      const res = await axios.get("/education");
      setEducationData(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, [educationData]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setEducation("");
    await axios
      .post(`/education`, {
        education,
      })
      .then((res) => {
        setEducationData([...educationData, education]);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = async (id) => {
    await axios
      .delete(`/education/${id}`)
      .then((res) => {
        setMessage(`${res.data.msg}`);
        setTimeout(() => {
          setMessage("");
        }, 2000);
      })
      .catch((err) => console.log(err));
    const filteredData = educationData.filter((Item) => Item._id !== id);
    setEducationData(filteredData);
  };

  return (
    <div className="same-component">
      <div className="same-form">
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="text">Education </label>
          <input
            type="text"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          />
          <button type="submit">Add Item</button>
        </form>
      </div>

      <div className="same-item">
        <h3 id="itemdel" className="item-delete-tab">
          <span>{message} </span>
        </h3>
        {educationData?.map((Item, index) => (
          <div key={Item._id || index} id="aboutInfo" className="about-info">
            <div>
              <div className="single-education">
                <p> {Item.education} </p>
              </div>

              <div className="icons">
                <Link to={`/editeducation/${Item._id}`}>
                  <i className="fas fa-edit"></i>
                </Link>
                <i
                  onClick={(e) => {
                    e.preventDefault();
                    handleDelete(Item._id);
                  }}
                  className="fas fa-trash"
                ></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationAdmin;
