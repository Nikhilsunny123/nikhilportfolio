import express from "express";
import multer from "multer";
import path from "path";
import Project from "../../models/projects";

const adminProjectsRouter = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "image") {
      cb(null, "uploads");
    } else {
      cb(new Error("Invalid field name"));
    }
  },

  filename: (req, file, cb) => {
    console.log(file);
    const extension = path.extname(file.originalname);
    cb(null, Date.now() + "-" + file.fieldname + extension);
  },
});

const upload = multer({ storage });
//add new project
adminProjectsRouter.post(
  "/add",
  upload.single("image"),

  async (req, res) => {
    try {
      console.log("working");
      const { title, description, projectUrl } = req.body;

      const image =  req.file;
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

adminProjectsRouter.get("/", async (req, res) => {
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
