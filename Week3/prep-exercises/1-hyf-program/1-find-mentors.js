import { modules, students, mentors, classes } from "./hyf.js";

/**
 * Tjebbe would like help to get a list of possible mentors for a module.
 * Fill in this function that finds all the mentors that can teach the given module.
 *
 * It should return an array of names. So something like:
 *  ['John', 'Mary']
 */

// I tried it first with forEach and thought ahh i can use reduce
// const possibleMentorsForModule = (moduleName) => {
//   let mentorForModule = [];
//   mentors.forEach(mentor => {
//     if (mentor.canTeach.includes(moduleName)) {
//       mentorForModule.push(mentor.name);
//     }
//   });
//   return mentorForModule;
// };

 const possibleMentorsForModule = (moduleName) => {
  return mentors.reduce((acc, mentor) => {
    if (mentor.canTeach.includes(moduleName)) {
      acc.push(mentor.name);
    }
    return acc;
  }, []);

};

export const mentorForModule = (moduleName) => {
  return mentors.reduce((acc, mentor) => {
    if (mentor.nowTeaching === moduleName) {
      acc.push(mentor);
    }
    return acc;
  }, []);
};
// You can uncomment out this line to try your function
// console.log(possibleMentorsForModule("using-apis"));

/**
 * Tjebbe wants to make it even easier for himself.
 * Fill in this function that chooses a random mentor to teach the given module.
 *
 * It should return a single name.
 */
const findMentorForModule = (moduleName) => {
  const result = possibleMentorsForModule(moduleName);
  if( !result ) return `No mentor found for module ${moduleName}`;

  if(result.length === 1){
    return result[0];
  }
  const randomNum = Math.floor(Math.random() * result.length)
  return result[randomNum];
};
// You can uncomment out this line to try your function
// console.log(findMentorForModule('javascript'));
