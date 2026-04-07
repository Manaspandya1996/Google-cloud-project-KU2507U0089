# Cloud-Based College Event Registration System
# Course: Google Cloud Digital Leader
# Project: Capstone Prototype

1. PROJECT OVERVIEW
-------------------
This application is a cloud-native web solution that allows students to register 
for university events such as Tech Fest, Cultural Events, and Workshops[cite: 11, 15]. 
The project demonstrates a modern, scalable approach to data management using 
a full-stack JavaScript architecture[cite: 12].

2. FUNCTIONAL REQUIREMENTS MET
------------------------------
* User-friendly web form for student registration[cite: 18].
* Fields included: Full Name, College Email, Student ID, and Event Selection[cite: 18, 21].
* Backend logic to process and store data securely in a database[cite: 16].
* Generation of a PDF registration receipt for the user.

3. TECH STACK
-------------
* Frontend: HTML5, CSS3 (Google Cloud Branded), JavaScript.
* Backend: Node.js, Express.js.
* Database: MongoDB (Local/Cloud).
* Version Control: GitHub.

4. SETUP INSTRUCTIONS
---------------------
To run this prototype on your laptop:

Step A: Install Dependencies
   Open your terminal in the project folder and run:
   > npm install

Step B: Start MongoDB
   Ensure your MongoDB service is running on 127.0.0.1:27017.

Step C: Launch the Backend
   Run the following command:
   > node server.js
   Expected output: "✅ MongoDB Connected!"

Step D: Access the Frontend
   Open 'index.html' in your web browser.

5. HOW TO DEMO
--------------
1. Show the terminal displaying the "Connected" message[cite: 13].
2. Fill out the registration form in the browser.
3. Submit the form and show the "Registration Successful" message.
4. Open MongoDB Compass and show the new record in 'collegeEvents' database.
5. Click 'Download PDF' to show the generated receipt.

6. FUTURE CLOUD INTEGRATION
---------------------------
As per the project scenario, this application is designed to be pushed to 
Google Cloud Platform (GCP) services like:
* Google App Engine (Hosting)
* Cloud Firestore (NoSQL Database)
* Cloud Run (Containerized Backend)
