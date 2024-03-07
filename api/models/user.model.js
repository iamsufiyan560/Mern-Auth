import mongoose from "mongoose";

const useSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  time: { type: Date, default: Date.now },
});

const User = mongoose.model("User", useSchema);
export default User;
