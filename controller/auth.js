constAuthService = request("../services/auth.js");
const loginUser = async (req, res) => {
  try {
    const { user, password } = req.body;
    const token = await loginServices.loginUser(user, password);
    return res.json({ token: token });
  } catch (error) {
    console.log(error);
    if (error.cause?.status) {
      return res.status(error.cause.status).json({
        message: error.message,
      });
    }

    res.status(500).json({
      message: error,
    });
  }
};

module.exports = {
  loginUser,
};
