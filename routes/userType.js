const express = require("express");
const router = express.Router();
const {
  handleGetSkill,
  handleAddSkill,
  handleGetCourse,
  handleAddCourse,
} = require("../controllers/userType");

router.route("/skills").get(handleGetSkill).post(handleAddSkill);
router.route("/course").get(handleGetCourse).post(handleAddCourse);

module.exports = router;
