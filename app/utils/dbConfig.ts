import { connect } from "mongoose";
const url = process.env.URL as string;

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
