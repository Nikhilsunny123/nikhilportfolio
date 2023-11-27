import express from "express";
import Skills from "../../models/skills";

const adminSkillsRouter = express.Router();

//add new Skill
adminSkillsRouter.post("/add", async (req, res) => {
  try {
    console.log("working");
    const { title } = req.body;

    const SkillModel = await Skills.findOne({ title });
    if (SkillModel !== null) {
      res.status(400).json({ message: "Skill already exist" });
    } else {
      const newSkill = new Skills({
        title,
      });
      console.log(newSkill);
      const newSkillResp = await newSkill.save();
      res.status(200).json({
        message: "Skill added successfully",
        data: newSkillResp,
      });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default adminSkillsRouter;
