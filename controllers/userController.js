const userSchema = require("../models/userModel");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userController = {
  // register
  registerUser: async (req, res) => {
    const { username, email, password } = req.body;
    const user = await userSchema.findOne({ email: email });
    if (user) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    const newUser = new userSchema({
      username: username,
      email: email,
      password: CryptoJS.AES.encrypt(password, process.env.PASS_SEC).toString(),
    });

    try {
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //   login
  loginUser: async (req, res) => {
    try {
      const user = await userSchema.findOne({ email: req.body.email });
      !user && res.status(401).json("This user with this email doesnt exist");

      const hashedPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.PASS_SEC
      );
      const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

      req.body.password !== OriginalPassword &&
        res.status(401).json("Wrong credentials!");

      const accessToken = jwt.sign(
        {
          id: user._id,
          name: user.username,
        },
        process.env.JWT_SEC,
        { expiresIn: "3d" }
      );

      const { password, ...others } = user._doc;

      res.status(200).json({ ...others, accessToken });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //   authentication via token
  auth: async (req, res) => {
    res.json(req.user);
  },
};

module.exports = userController;
