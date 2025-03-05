# AQAChallenge Backend

This project was generated with [Node.js](https://nodejs.org/en) version 20.10.0.

## Prerequisites

- Node.js 20.10.0
- MongoDB 

## Development server

- Run `npm install` to install the dependencies
- Run `npm start` to start the server
- Navigate to `http://localhost:3000/` to access the API



### API Endpoints

- `POST /login`: Login user (this will return a token)
- `POST /register`: Register user (this will create 3 hardcoded users : Leo, Chuck, Warren. Password for all of them is same name in lowercase)
- `GET /messages`: Get all messages (this will return all messages in the database)
- `POST /messages`: Post a message ({message: string, user: string})

