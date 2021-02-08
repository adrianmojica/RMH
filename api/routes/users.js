/** Routes for demonstrating authentication in Express. */

const express = require("express");
const router = new express.Router();
const ExpressError = require("../expressError");
const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { BCRYPT_WORK_FACTOR, SECRET_KEY } = require("../config");
const { ensureLoggedIn, ensureAdmin } = require("../middleware/auth");

router.get('/', (req, res, next) => {
  res.send("user IS WORKING!!!")
})

router.get('/:username', async function(req, res, next){
    console.log(req.params.username);
    let username = req.params.username;
    try {
      if (!req.params.username) {
        throw new ExpressError("something went wrong", 400);
      }
      const results = await db.query(
        `SELECT id, username, first_name, last_name, therapist, email 
         FROM users
         WHERE username = $1`,
        [username]);
      const user = results.rows[0];
      return res.json({ message: `got user!`, user })
    } catch(e) {
      return next(e);
    }
});

router.patch('/:username', async function(req, res, next) {
  console.log("Update",req.body);
  try {
    if (!req.params.username) {
      throw new ExpressError("something went wrong", 400);
    }
    const results = await db.query(
      `UPDATE users SET username = $1, first_name= $2, last_name= $3, therapist= $4, email=$5 WHERE username = $6`,
      [req.body.email, req.body.first_name, req.body.last_name, req.body.therapist, req.body.email, req.params.username ]);
    // const user = results.row[0];
    return res.json({ message: 'updated user data!'})
  } catch(e){
    return next(e);
  }
} );




module.exports = router;

