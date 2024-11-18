import mongoose from "mongoose";

const JyotirSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    imgPath: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      latitude: {
        type: Number,
      },
      longitude: {
        type: Number,
      },
    },
  },
  {
    timestamp: true,
  }
);

const Jyotirling =
  mongoose.models.jyotirling || mongoose.model("jyotirling", JyotirSchema);

export default Jyotirling;
