import React, { useEffect, useState } from "react";
import axios from "axios";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [about, setAbout] = useState([]);
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [project, setProject] = useState([]);

  // fetching  data
  const fetchData = async () => {
    const res1 = await axios.get("/about");
    setAbout(res1.data);

    const res2 = await axios.get("/education");
    setEducation(res2.data);

    const res3 = await axios.get("/experience");
    setExperience(res3.data);

    const res4 = await axios.get("/project");
    setProject(res4.data);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [about, education, experience, project]);

  const state = {
    about: [about, setAbout],
    education: [education, setEducation],
    experience: [experience, setExperience],
    projects: [project, setProject],
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};
// make sure use
// export const useGlobalContext = () => {
//   return useContext(AppContext);
// };
