import { connect } from "mongoose";
const url = "mongodb://localhost:27017/cloudinaryPrac";

export const dbConfig = async () => {
  await connect(url)
    .then(() => {
      console.clear();
      console.log("Server Up!");
    })
    .catch((error) => {
      console.log(error);
    });
};
