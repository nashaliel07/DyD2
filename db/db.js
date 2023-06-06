const mongoose = require("mongoose");

const dbConnectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION);
    console.log("Date connected");
  } catch (error) {
    console.log(error);
    throw new Error("Datebase connection error;");
  }
};
module.exports = {
  dbConnectDB,
};
