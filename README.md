# Mongoose-setup

A database setup for mongodb using mongoosejs

### Requirement

- nodejs
- mongodb
- mongoosejs
- dotenv

As a requirement you must have both nodejs and mongodb install in your system inorder for the code to work.

### Description

Using the mongoosejs, I setup a start-file to connect database - mongodb to persist data.
Before setting up mongoose, I installed mongodb - [mongodb setup here](https://docs.mongodb.com/guides/server/install/) and nodejs - [node setup here](https://nodejs.org/en/download/)
I installed mongoose libray to handle the database connection and dotenv to help with the env(environment) file handling using npm (node package manager).
using the terminal

```
npm install mongoose
npm install dotenv

```

Then connect the mongodb using the mongoose library.
I created a config file at the root of the folder to help maintain my environment variables.
