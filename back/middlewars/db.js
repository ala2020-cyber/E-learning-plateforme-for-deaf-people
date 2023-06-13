const mongoose= require("mongoose")


const connectDb= () => {
    mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DBconnection successfull!");
  })
  .catch((err) => {
    console.log(err);
  });
}

module.exports= connectDb