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

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
