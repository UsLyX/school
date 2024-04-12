const User = require("../Models/User");
const jwtDecode = require("jwt-decode");

class userController {
  async info(req, res) {
    try {
      const jwt = req.body;
      const decode = jwtDecode.jwtDecode(jwt.jwt);
      const user = await User.findOne({ _id: decode.id });
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

module.exports = new userController();
