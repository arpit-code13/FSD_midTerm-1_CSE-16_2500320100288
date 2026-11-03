const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json());

let students = [];

app.get("/", (req, res) => {
  res.send("Student Record Management API is running!");
});

app.post("/api/students", (req, res) => {
  const { id, name, email, course, age } = req.body;

  if (!id || !name || !email || !course || !age) {
    return res.status(400).json({
      message: "All student fields are mandatory",
    });
  }

  const existingStudent = students.find((student) => student.id === id);

  if (existingStudent) {
    return res.status(409).json({
      message: "Student ID already exists",
    });
  }

  const newStudent = {
    id,
    name,
    email,
    course,
    age,
  };

  students.push(newStudent);

  res.status(201).json({
    message: "Student created successfully",
    student: newStudent,
  });
});

app.get("/api/students", (req, res) => {
  res.status(200).json({
    message: "Student records fetched successfully",
    students: students,
  });
});

app.get("/api/students/:id", (req, res) => {
  const studentId = Number(req.params.id);

  const student = students.find((student) => student.id === studentId);

  if (!student) {
    return res.status(404).json({
      message: "Student not found",
    });
  }

  res.status(200).json({
    message: "Student found successfully",
    student: student,
  });
});

app.put("/api/students/:id", (req, res) => {
  const studentId = Number(req.params.id);

  const studentIndex = students.findIndex(
    (student) => student.id === studentId,
  );

  if (studentIndex === -1) {
    return res.status(404).json({
      message: "Student not found",
    });
  }

  const updatedStudent = {
    ...students[studentIndex],
    ...req.body,
    id: students[studentIndex].id,
  };

  students[studentIndex] = updatedStudent;

  res.status(200).json({
    message: "Student updated successfully",
    student: updatedStudent,
  });
});

app.delete("/api/students/:id", (req, res) => {
  const studentId = Number(req.params.id);

  const studentIndex = students.findIndex(
    (student) => student.id === studentId,
  );

  if (studentIndex === -1) {
    return res.status(404).json({
      message: "Student not found",
    });
  }

  const deletedStudent = students.splice(studentIndex, 1);

  res.status(200).json({
    message: "Student deleted successfully",
    student: deletedStudent[0],
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
