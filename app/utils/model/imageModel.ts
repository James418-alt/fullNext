import { Schema, model, models } from "mongoose";

const imageModel = new Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
});

const myImageModel = models.images || model("images", imageModel);
export default myImageModel;
