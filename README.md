# Mohamad-Siysinyuy-Banbong Full-Stack Application For Currency Exchange Deadline 13th May 2022

## Description


This is a full stack application that consist of a React front-end client and a Node back-end service(Express.js) with a MongoDb database to convert from crypto-currency to any other currency and vise versa.

## motivation
  the project requirements was too juicy to ignore, consuming external APIs for getting currencies, and sending a post request to convert form one currency to the other, using socket.io to live stream data and much more.Therefore in one small project, puts all your software development skills to the test involving best practices of creating git branches and GitHub issues describing in details what potion of the project you clearly want to solve.


## Why build this project?

  Practice makes perfection.Though the request was from "Code Challenge Technical Assessment for Fullstack Javascript for RED ACRE (redacreltd.com)" The main reason for building this project was because it give me the chance to put together common practices and peace of code used in many projects there by mastering them and last but not least a way to convert from once currency to another faster that Google.
## What problem does it solve?

  It shows the exchange rate between currencies instantaneously as fast as it takes to click a button

## What learned?
  one thing comes straight to mind, this is my second project making use of socket.io, so learning in that regard was in larg quantity, My first project used socket.io in Redux, i had to use context in this application.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)


## Installation

- clone the repository from github ```git@github.com:redacreltdcom/Mohamad-Siysinyuy-Banbong.git```
- At the root of the home directory ```$Mohamad-Siysinyuy-Banbong``` run ```npm install```
- Change directory to client directory ```$Mohamad-Siysinyuy-Banbong/client``` and run ```npm install```
- At the root directory, create a ```config.env``` file and input the following configuration.
```
PORT=5000

MONGO_URI= enter mongodb url example(locally):mongodb://localhost:27017/MSBDataBase  OR Example(online):mongodb+srv://user:password@testcluste.lw7fs.mongodb.net/MSBDatabase?retryWrites=true&w=majority


NODE_ENV=development or production //Note: if NODE_ENV is left bank, by default it is going to be development

```

## Usage
- At the root directory, run ```npm start``` and at the client directory run ```npm start```
- In Developer Mode, At the root directory, run ```npm run start:dev``` and at the client directory run ```npm start```

- Click to use the  [online running version of this Appliction ](https://currency-exchang-app.herokuapp.com/)
## Credits
- API for [currency Exchange ](https://api.exchangerate.host)

