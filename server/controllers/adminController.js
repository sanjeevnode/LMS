import bcrypt from "bcryptjs";
import dotenv from "dotenv";
dotenv.config();

const adminLogin = async (req, res) => {
  // let salt = await bcrypt.genSalt(10);
  // let hash = await bcrypt.hash("admin@lms", salt);
  // let hash = await bcrypt.compare("admin@lms", process.env.ADMIN_PASSWORD);
  // res.status(200).json({ hash });

  try {
    const { username, password } = req.body;
    const isMatch = await bcrypt.compare(password, process.env.ADMIN_PASSWORD);
    if (isMatch && username === process.env.ADMIN_USERNAME) {
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { adminLogin };
