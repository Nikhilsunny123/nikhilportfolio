import axios from "axios";

const portfolioServices = {
  getAllSkillsService: () => axios.get("/skills"),
  getAllProjectsService: () => axios.get("/projects"),
};

export default portfolioServices;
