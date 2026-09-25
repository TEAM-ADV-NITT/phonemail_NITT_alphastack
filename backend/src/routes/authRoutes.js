const express = require("express");
const pool = require("../config/db");
const router = express.Router();


router.post("/check-phone",async(req, res) => {
    try{
    const { phone } = req.body;
    const phoneNumber = "+91" + phone;
    const result = await pool.query(
    "SELECT * FROM users WHERE number = $1",
    [phoneNumber]
  );

    if (result.rows.length > 0) {
    return res.json({
      exists: true,
      user: result.rows[0],
    });
  } else {
    return res.json({
      exists: false,
    });
}} catch (error){
    console.error(error);

    return res.status(500).json({
      message: "Internal server error",})
}

}

);

router.post("/register", async (req, res) => {
  try {
    const { phone, full_name, username } = req.body;

    if (!phone || !full_name || !username) {
      return res.status(400).json({
        message: "Phone, full name, and username are required",
      });
      
    }
      if (!/^\d{10}$/.test(phone)) {
  return res.status(400).json({
    message: "Phone number must be exactly 10 digits",
  });}
  const phoneNumber = "+91" + phone;
  const email = `${phone}@phonemail.com`;
  const result = await pool.query(
  `INSERT INTO users (full_name, username, number, email)
   VALUES ($1, $2, $3, $4)
   RETURNING id, full_name, username, number, email, created_at, updated_at`,
  [full_name, username, phoneNumber, email]
);
  return res.status(201).json({
    message: "Account created successfully",
    user: result.rows[0],
  });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }

});




module.exports = router ;