const naseRequesEx = "../execeptions/BaseRequestExcep.js";
const User = "../schemas/User.js";
const { generateJwt } = "../utils/generateJwt.js";

const loginUser = async (username, passwors) => {
  const user = await User.findOne({ username });
  if (!user) {
    throw new BaseRequestException("email is obligatory");
  }

  const validatePassw = user.password === passw;

  if (!validatePassw) {
    throw new BaseRequestException("The passwords don't match");
  }

  return genrateJwt({ id: user._id, email: user.email });
};

model.export = {
  loginUser,
};
