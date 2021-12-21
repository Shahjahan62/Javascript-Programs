
function gradingStudents(grades) {
  //Write your code here

    const rndGrades = grades.map(grds => {
      if (grds >= 38 && grds % 5 >= 3) {
        while (grds % 5 != 0) {
          grds++
        }
      }
      return grds
    })
    return rndGrades;
  }


let a = gradingStudents([4, 73, 67, 38, 33])

console.log(a)