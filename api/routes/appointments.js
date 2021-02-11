/** Routes for demonstrating authentication in Express. */

const express = require("express");
const router = new express.Router();
const ExpressError = require("../expressError");
const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { BCRYPT_WORK_FACTOR, SECRET_KEY } = require("../config");
const { ensureLoggedIn, ensureAdmin } = require("../middleware/auth");
const Acuity = require('acuityscheduling');
var acuity = Acuity.basic({
  userId: '14598683',
  apiKey: 'd7ee04b9c23c530e5f8a3763fcdd7fed'
});
  
// acuity.request('/appointments', function (err, res, appointments) {
//   if (err) return console.error(err);
//   console.log(appointments);
// });



router.get('/:email', (req, res, next) => {
  // https://acuityscheduling.com/api/v1/appointments?email=
  console.log(req.params);
  let email = req.params.email
  let apt;
  let currentDate = new Date();
  let cDay = currentDate.getDate();
  let cMonth = currentDate.getMonth() + 1
  let cYear = currentDate.getFullYear()
  console.log(cDay);
  console.log(cMonth);
  console.log(cYear);
  let date = cDay+"-"+cMonth+"-"+cYear;
  // res.send("appointments IS WORKING!!!")
  apt = acuity.request('/appointments?email='+email+'&minDate='+date+"&direction=ASC", function (err, response, appointments) {
    if (err) return console.error(err);
    apt = appointments;
    res.send(appointments);
  });
})








module.exports = router;

