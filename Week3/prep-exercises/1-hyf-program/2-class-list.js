import { modules, students, mentors, classes } from "./hyf.js";
import { mentorForModule } from "./1-find-mentors.js";
/**
 * We would like to have a list of everyone that is currently participating in a class.
 * This means the students, but also the mentors that are currently teaching the class.
 * The students should be self explanatory, but to find the mentors you will need to follow these steps:
 * - Check what the `currentModule` of the class is
 * - Find the mentor(s) that are `nowTeaching` that module
 *
 * Should return the list of names and their roles. So something like:
 *
 *  [{ name: 'John', role: 'student' }, { name: 'Mary', role: 'mentor' }]
 */


const filterStudentsByClassName = className => {
  return students.filter(student => {
    return student.class === className && student.graduated === false})
    .map(({name}) => ({name, role: 'student'}));
};

const getPeopleOfClass = (className) => {
  const participatingStudents = filterStudentsByClassName(className);

  const specificClass = classes.find(({name}) => name === className);
  const participatingMentors = mentorForModule(specificClass.currentModule)
                          .map(({name}) => ({name, role:'mentor'}));
  
  return [...participatingStudents, ...participatingMentors];
};
// You can uncomment out this line to try your function
// console.log(getPeopleOfClass('class34'));

/**
 * We would like to have a complete overview of the current active classes.
 * First find the active classes, then for each get the people of that class.
 *
 * Should return an object with the class names as properties.
 * Each class name property contains an array identical to the return from `getPeopleFromClass`. So something like:
 *
 *  {
 *    class34: [{ name: 'John', role: 'student' }, { name: 'Mary', role: 'mentor' }],
 *    class35: [{ name: 'Jane', role: 'student' }, { name: 'Steve', role: 'mentor' }]
 *  }
 */
const getActiveClasses = () => {
  const activeClasses = classes
       .filter(({active}) => { return active === true })
       .map(({name}) => ({name}));

  return activeClasses.reduce((acc, activeClass) => {
    acc[activeClass.name] = getPeopleOfClass(activeClass.name); 
    return acc;
  }, {});
};
// You can uncomment out this line to try your function
// console.log(getActiveClasses());
