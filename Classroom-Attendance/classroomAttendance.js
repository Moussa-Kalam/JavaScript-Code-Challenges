function getStudents(classroom) {

  // Destructure hasTeachingAssistant and classList from the classroom object
  let {hasTeachingAssistant, classList} = classroom;

  // Declare the needed variables
  let teacher, teachingAssitant, students;
  
  /** If there's a teaching assistant
   *  Destructure the first value of classList into teacher variable
   *  Destructure the second value into teachingAssistant variable
   * Spread the rest of the value into the student variable (array)
   */
  
  if (hasTeachingAssistant) {
    [teacher, teachingAssitant, ...students] = classList;
  } else {
    // if there's no teaching assistant, the first value is the teacher and the rest, the students
    [teacher, ...students] = classList;
  }
  return students;
}


const classroom = {
  hasTeachingAssistant: false,
  classList: ["Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"],
}

console.log(getStudents(classroom));