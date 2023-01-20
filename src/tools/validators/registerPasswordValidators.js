const upperCaseRegex = new RegExp("([A-Z])");
const lowerCaseRegex = new RegExp("([a-z])");
const numberRegex = new RegExp("([0-9])");
const minRegex = new RegExp("^.{8,}");
const specialRegex = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>\\/?~]/

export default {
  upperCaseRegex,
  lowerCaseRegex,
  numberRegex,
  minRegex,
  specialRegex
}