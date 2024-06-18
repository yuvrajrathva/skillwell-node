const mongoose = require("mongoose");

function validatePhoneNumber(phone) {
  const regex = /^(?:(?:\+91|0)?\d{10})$/;
  return regex.test(phone);
}

function generateUniqueId() {
  return Math.floor(1000 + Math.random() * 9000);
}

const FreelancerSchema = new mongoose.Schema({
  roll_no: {
    type: String,
    required: [true, "Roll number number is required"],
    unique: true,
  },
  first_name: {
    type: String,
    required: [true, "Name is required"],
  },
  last_name: {
    type: String,
    required: [true, "Name is required"],
  },
  gender: {
    type: String,
    enum: ["male", "female", "not say", "other"],
    required: [true, "Please select gender"],
  },
  contact: {
    type: String,
    validate: {
      validator: validatePhoneNumber,
      message: (props) => `${props.value} is not a valid phone number!`,
    },
    required: [true, "User phone number required"],
  },
  course_enrolled: {
    type: Number,
    validate: {
      validator: async function (value) {
        const course = await Course.findOne({ courseId: value });
        return !!course;
      },
      message: (props) => `${props.value} is not a valid course id!`,
    },
    required: true,
  },
  current_year: {
    type: Number,
    required: true,
    validate: {
      validator: async function (value) {
        const year = await Year.findOne({ yearId: value });
        return !!year;
      },
      message: (props) => `${props.value} is not a valid year id!`,
    },
  },
  skill1: {
    type: Number,
    required: true,
    validate: {
      validator: async function (value) {
        const skill = await Skill.findOne({ skillId: value });
        return !!skill;
      },
      message: (props) => `${props.value} is not a valid skill id!`,
    },
  },
  skill2: {
    type: Number,
    required: true,
    validate: {
      validator: async function (value) {
        const skill = await Skill.findOne({ skillId: value });
        return !!skill;
      },
      message: (props) => `${props.value} is not a valid skill id!`,
    },
  },
  skill3: {
    type: Number,
    required: true,
    validate: {
      validator: async function (value) {
        const skill = await Skill.findOne({ skillId: value });
        return !!skill;
      },
      message: (props) => `${props.value} is not a valid skill id!`,
    },
  },
  linkedinLink: String,
  githubLink: String,
  instagramLink: String,
  facebookLink: String,
  twitterLink: String,
  portfolioLink: String,
  other_link: String,
  isProfileComplete: {
    type: Boolean,
    default: false,
  },
});

const RecruiterSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "not say", "other"],
    required: [true, "Please select gender"],
  },
  contact: {
    type: String,
    validate: {
      validator: validatePhoneNumber,
      message: (props) => `${props.value} is not a valid phone number!`,
    },
    required: [true, "User phone number required"],
  },
  about: { type: String, required: true },
  linkedinLink: String,
  githubLink: String,
  instagramLink: String,
  facebookLink: String,
  twitterLink: String,
  other_link: String,
  isProfileComplete: {
    type: Boolean,
    default: false,
  },
});

const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  courseId: {
    type: Number,
    required: true,
    unique: true,
    default: generateUniqueId,
  },
});

const YearSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  yearId: {
    type: Number,
    required: true,
    unique: true,
    default: generateUniqueId,
  },
});

const SkillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  skillId: {
    type: Number,
    required: true,
    unique: true,
    default: generateUniqueId,
  },
});

const Freelancer = mongoose.model("freelancer", FreelancerSchema);
const Recruiter = mongoose.model("recruiter", RecruiterSchema);
const Course = mongoose.model("available_courses", CourseSchema);
const Year = mongoose.model("year_options", YearSchema);
const Skill = mongoose.model("skills", SkillSchema);

module.exports = {
  Freelancer,
  Recruiter,
  Course,
  Year,
  Skill,
};
