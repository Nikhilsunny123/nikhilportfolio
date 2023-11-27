import mongoose from "mongoose";

const skillsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

const Skills = mongoose.model("Skills", skillsSchema);

export default Skills;
