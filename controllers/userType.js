const {
  Freelancer,
  Recruiter,
  Course,
  Year,
  Skill,
} = require("../models/userType");

async function handleGetSkill(req, res) {
  const allSkill = await Skill.find({});
  return res.status(200).json(allSkill);
}

async function handleAddSkill(req, res) {
  const body = req.body;
  await Skill.create({
    name: body.name,
  });

  return res.status(201).json({ msg: "Skill added successfully." });
}
async function handleGetCourse(req, res) {
  const allCourses = await Course.find({});
  return res.status(200).json(allCourses);
}

async function handleAddCourse(req, res) {
  const body = req.body;
  await Course.create({
    name: body.name,
  });

  return res.status(201).json({ msg: "Course added successfully." });
}

module.exports = {
  handleGetSkill,
  handleAddSkill,
  handleGetCourse,
  handleAddCourse,
};
