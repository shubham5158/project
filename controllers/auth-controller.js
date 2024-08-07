const User = require("../models/user-model");
const bcrypt = require("bcrypt");

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to our New Home page");
  } catch (error) {
    console.log(error);
  }
};

//Register User controller
const register = async (req, res) => {
  try {
    // console.log(req.body);
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(404).json({ msg: "User already exist" });
    }

    //hash the password
    // const saltRound = 10;
    // const hash_password = await bcrypt.hash(password, saltRound);

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    res.status(200).json({
      msg: "Registration successfully",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    // res.status(400).json({ msg: "Internal Server error" });
    next(error);
  }
};

//login controller
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    console.log(userExist);

    if (!userExist) {
      return res.status(404).json({ msg: "Invalid Credentials" });
    }

    // const user = await bcrypt.compare(password, userExist.password);

    const user = await userExist.comparePassword(password);

    if (user) {
      res.status(200).json({
        msg: "Login successfull",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      return res.status(401).json({ msg: "Invalid Email or Password" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports = { home, register, login };
