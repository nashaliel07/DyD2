const jwt = require("jwt");
const User = require("../schemas/User");

const validaJwt = async (req, res, next) => {
  const token = req.header("Authorizacion");
  if (!token) {
    return res.status(401).json({ message: "usuario no atentico" });
  }
  try {
    const { id } = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(id);
    if (!user) {
      return res
        .status(401)
        .json({ message: "El usario del token no es valido" });
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "Token no valido" });
  }
};

module.exports = {
  validaJwt,
};
