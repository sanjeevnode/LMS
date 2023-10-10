import axios from "axios";

const API_URL = "https://bookwise-o7p6.onrender.com/api";

export const adminlogin = async (username, password) => {
  try {
    await axios
      .get(`${API_URL}/admin/login`, {
        username,
        password,
      })
      .then((res) => {
        console.log(res);
        return true;
      });
  } catch (error) {
    console.log(error.message);
    return false;
  }
};
