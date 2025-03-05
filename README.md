# AQAChallenge
 
This project contains 3 different folder.
Each folder has its own structure

Requirements:
For AQA:
1. Should be able to provide behavioral driven development (BDD) feature files to capture user stories below for frontend. -> Cucumber its implemented
2. Should be able to provide step definitions for how each user story will be QA tested on the browser or mobile device. -> Feature files has the scenarios
3. Should be able to provide a generated report of test coverage and test results. -> After execution an HTML file is generated
4. Should be able to run AQA tests with a single command. -> npm run test:with-reports

Steps to run the Automation Suite: 
1. npm install
2. sent a first request to localhost:3000/register once the backend server is on.
3. npm run test:with-reports | This will run the suite headless mode
4. An HTML file will be generated after each execution with Screenshots and results

   
User Stories (Frontend): Instructions for FrontEnd: https://github.com/lsolanodevop/AQAChallenge/blob/main/AQAChallengeFront/README.md
1. It should be able to login in with an existing username and password (you can hardcode these, since we are focusing on AQA tests here) -> Done
2. After login successfully, the user should be able to send messages and see history messages from other users. -> Done
3. Users should be able to send messages. -> Done

   
User Stories (Backend): Instructions for Backend: https://github.com/lsolanodevop/AQAChallenge/blob/main/AQAChallengeBack/README.md
1. It should be able to accept login requests. -> Done
2. It should be able to reject login requests if username and password are not correct. -> Done
3. Whenever it receives a message from a user, it should store them in the database. -> Done

   
