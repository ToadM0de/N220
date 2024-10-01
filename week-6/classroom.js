const classroom = {
  students: ["Liv", "Kate"],
  name: "Entomology",
  showStudents() {
    document.getElementById("students").innerHTML = "";
    this.students.forEach(function (studentName) {
      document.getElementById("students").innerHTML += studentName + "<br />";
    });
  },
  maxStudents: 2,
};

function newStudent() {
  const currentStudents = classroom.students.length;
  if (currentStudents >= classroom.maxStudents) {
    console.log("No seats avalible");
  } else {
    classroom.students.push(document.getElementById("studentName").value);
    classroom.showStudents();
  }
}
