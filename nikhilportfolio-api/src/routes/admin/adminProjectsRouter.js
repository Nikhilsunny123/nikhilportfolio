import express from "express";
import Project from "../../models/projects";

const adminProjectsRouter = express.Router();

//add new project
adminProjectsRouter.post(
  "/add",
  upload.single([{ name: "image", maxCount: 1 }]),
  adminAuthentication,
  async (req, res) => {
    try {
      console.log("working");
      const { title, description, projectUrl } = req.body;

      const image = await req.files.image[0];
      const projectModel = await Project.findOne({ title });
      if (projectModel !== null) {
        res.status(400).json({ message: "Project already exist" });
      } else {
        const newProject = new Project({
          title,
          description,
          projectUrl,
          image: image,
        });
        console.log(newProject);
        const newProjectResp = await newProject.save();
        res.status(200).json({
          message: "Project added successfully",
          data: newProjectResp,
        });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
);

//view projects

adminProjectsRouter.post("/", async (req, res) => {
  try {
    console.log("working");

    const projectModel = await Project.find({});

    res.status(200).json({
      data: projectModel,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default adminProjectsRouter;
