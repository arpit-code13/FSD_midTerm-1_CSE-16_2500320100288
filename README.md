How to Run the Project

Follow these steps to run the project on your system.

1. Clone the repository

git clone YOUR_GITHUB_REPOSITORY_URL

2. Open the project folder

cd FSD_midTerm-1_CSE-16_2500320100288

3. Install the required packages

npm install

4. Start the server

npm run dev

The server will start at:

http://localhost:3000
API Endpoints

The following endpoints are available in this project.

1. Check Server
Method: GET
URL: /
Purpose: To check whether the server is running.

Response:

Student Record Management API is running!
2. Add a Student
Method: POST
URL: /api/students

This endpoint is used to add a new student. Student details are sent in JSON format.

Example Request:

{
    "id": 101,
    "name": "Rahul Sharma",
    "email": "rahul@gmail.com",
    "course": "CSE",
    "age": 21
}

Possible Responses:

201 – Student added successfully.
400 – Some required fields are missing.
409 – Student ID already exists.
3. Get All Students
Method: GET
URL: /api/students

This endpoint returns all the student records available in the application.

Success Response: 200 OK

4. Get Student by ID
Method: GET
URL: /api/students/:id

This endpoint is used to find a particular student by entering their ID.

Example:

/api/students/101

If the student exists, their details are returned. Otherwise, the API returns a 404 Not Found response.

5. Update Student Details
Method: PUT
URL: /api/students/:id

This endpoint updates the details of an existing student.

Example:

/api/students/101

Request Body:

{
    "name": "Arpit Maurya",
    "email": "arpit@gmail.com",
    "course": "CSE",
    "age": 22
}

If the student is found, their information is updated successfully. If the ID does not exist, a 404 Not Found response is returned.

6. Delete a Student
Method: DELETE
URL: /api/students/:id

This endpoint removes a student record using their ID.

Example:

/api/students/101

If the student exists, their record is deleted. Otherwise, the API returns a 404 Not Found response.

Status Codes Used
Status Code	Meaning
200	Request completed successfully
201	Student created
400	Invalid or missing information
404	Student not found
409	Student ID already exists
Project Structure
FSD_midTerm-1_CSE-16_2500320100288/
│
├── node_modules/
├── package.json
├── package-lock.json
├── server.js
├── README.md
└── .gitignore
Note

For now, student records are stored in a JavaScript array instead of a database. This means all records are cleared when the server is restarted.

Student Details
Name: Arpit Maurya
Roll Number: YOUR_ROLL_NUMBER
Course: B.Tech CSE
College: ABES Engineering College